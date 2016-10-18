function socketConnection(io) {
  io.on('connection', (socket) => {

    // Initialize connection info
    console.log(socket.id, 'connected');
    socket.ready = false;
    state.sockets[socket.id] = socket;

    socket.emit('client-connected-response', { hasMaster: !!state.master, numConnections: state.activeSocketCount });

    // Add event handlers to socket
    socket.on('claim-master', () => {
      console.log('master selected. Socket id: ', socket.id)
      socket.ready = true;
      state.activeSocketCount += 1; // Note that the activeWorkerCount will not include the master's web workers until 'start-decryption'
      state.master = socket;
      socket.emit('claim-master-response', { globalConnections: state.activeSocketCount });
      socket.broadcast.emit('master-claimed', { globalConnections: state.activeSocketCount });
      
      socket.on('disconnect', () => {
        console.log('master disconnected');
        socket.broadcast.emit('master-disconnected');
        state = initState();
      })
    });

    socket.on('client-ready', (data) => {
      socket.ready = true;
      socket.workers = data.workers;
      state.activeSocketCount += 1;
      state.activeWorkerCount += data.workers;

      const response = { globalConnections: state.activeSocketCount, globalWorkers: state.activeWorkerCount };

      if (state.calculating) {
        distributeWork(socket);
        socket.broadcast.emit('new-client-ready', response);
      } else {
        io.emit('new-client-ready', response);
      }
    });

    socket.on('start-decryption', (data) => {
      console.log('start decryption', data);
      socket.workers = data.workers;
      state.activeWorkerCount += data.workers;
      startDecryption(data);
    });

    socket.on('password-cracked', (data) => {
      console.log('password-cracked', data);
      state.clearText = data.clearText;
      state.duration = data.duration;
      socket.broadcast.emit('password-found', data);
      socket.disconnect();
    });

    socket.on('disconnect', ()=> {
      state.activeWorkerCount -= socket.workers;
      state.activeSocketCount -= 1;
      socket.broadcast.emit('client-disconnect', { globalWorkers : state.activeWorkerCount, globalConnections : state.activeSocketCount });
    });
  });
}

var state = initState();

function initState() {
  return {
    characterSet: undefined,
    calculating: false,
    hash: undefined,
    length: undefined,
    globalNumCombos: undefined,
    taskIndex: 0,
    workerFrag: undefined,
    redistributeQueue: [],
    startTime: undefined,
    clearText: undefined,
    duration: undefined,
    sockets: {},
    activeSocketCount: 0, // Clients become 'active/ready' when they submit the # of workers to use
    activeWorkerCount: 0,
    master: undefined,
  };
}

function startDecryption(data) {
  state.calculating = true;
  state.hash = data.hash;
  state.length = data.length;
  state.globalNumCombos = Math.pow(26, Number(data.length));
  state.startTime = Date.now();

  state.workerFrag = Math.floor(state.globalNumCombos / state.activeWorkerCount);

  // 1 worker can process 3 million samples in ~30 sec; keep the worker load to ~30 sec
  if (state.workerFrag > 3000000) {
    state.workerFrag = 3000000;
  }

  initiateWork();
}

function initiateWork() {
  Object.keys(state.sockets).forEach((socketID) => {
    const socket = state.sockets[socketID];
    if (!socket.ready) return;

    distributeWork(socket);
  });
}

function distributeWork(socket) {
  const clientCombos = state.workerFrag * socket.workers;
  const begin = state.taskIndex * state.workerFrag;
  const end = (begin + clientCombos) - 1;

  if (end >= state.globalNumCombos) end = state.globalNumCombos - 1;

  state.taskIndex += socket.workers;

  const data = {
    startTime: state.startTime,
    length: state.length,
    globalNumCombos: state.globalNumCombos,
    globalConnections: state.activeSocketCount,
    globalWorkers: state.activeWorkerCount,
    hash: state.hash,
    begin,
    end,
  };

  socket.emit('start-work', data);
}

module.exports = socketConnection;
