'use strict'

const express = require('express');
const path = require('path');
const app = express(); 
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000; 


// Server routing

app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, '../', 'src', 'md5Crack')));

app.use((req, res) => {
  res.sendStatus(404);
});


http.listen(PORT, () => console.log(`Listening on ${PORT}.`));



// Distribted Computing logic & Application State

let state = {
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


function startDecryption(data) {
  state.calculating = true;
  state.hash = data.hash;
  state.length = data.length;
  state.globalNumCombos = Math.pow(26, Number(data.length));
  state.startTime = Date.now();

  console.log('numCombos: ', state.globalNumCombos);

  const workerFrag = state.globalNumCombos / state.activeWorkerCount;
  distributeWork(workerFrag);
}

function distributeWork(workerFrag) {
  let iterationIndex = 0;

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
      hash: state.hash,
      begin,
      end,
    };

    socket.emit('start-work', data);
  });
}


// Socket logic

io.on('connection', function(socket) {

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
  });

});
