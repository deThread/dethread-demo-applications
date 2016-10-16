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

      io.emit('new-client-ready', { globalConnections: state.activeSocketCount, globalWorkers: state.activeWorkerCount });
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
    calculating: false,
    hash: undefined,
    length: undefined,
    globalNumCombos: undefined,
    startTime: undefined,
    clearText: undefined,
    duration: undefined,
    sockets: {},
    activeSocketCount: 0,
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

  console.log("THIS IS STATE.activeworkers in server", state.activeWorkerCount);

  console.log('numCombos: ', state.globalNumCombos);

  const workerFrag = Math.round(state.globalNumCombos / state.activeWorkerCount);
  distributeWork(workerFrag);
}

function distributeWork(workerFrag) {
  var iterationIndex = 0;

  Object.keys(state.sockets).forEach((socketID, i) => {
    const socket = state.sockets[socketID];
    if (!socket.ready) return;

    const clientCombos = workerFrag * socket.workers;
    const begin = iterationIndex;
    const end = (iterationIndex + clientCombos) - 1;

    iterationIndex = (iterationIndex + clientCombos);

    const data = {
      startTime: state.startTime,
      length: state.length,
      globalNumCombos: state.globalNumCombos,
      globalWorkers: state.activeWorkerCount,
      hash: state.hash,
      begin,
      end,
    };

    socket.emit('start-work', data);
  });
}

module.exports = socketConnection;
