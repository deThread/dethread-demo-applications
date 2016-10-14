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
  numCombos: undefined,
  clearText: undefined,
  startTime: undefined,
  duration: undefined,
  connections: [],
  master: undefined,
};


// function startClient(hash, length, socket) {
//   globalStartTime = Date.now();
//   console.log("GLOBAL STARTTIME", globalStartTime);
//   const numCombos = Math.pow(26, length);
//   const begin = 0;
//   const end = numCombos - 1; 
//   socket.emit('doCrack', {hash, length, begin, end, globalStartTime})
// }




// Socket logic

io.on('connection', function(socket) {

  socket.on('client-connected', () => {
    console.log("a user connected with the following id: ", socket.id);
    state.connections.push(socket);
    socket.emit('master-selected', { hasMaster: !!state.master, numConnections: state.connections.length });
  });

  socket.on('claim-master', () => {
    console.log('master selected. Socket id: ', socket.id)
    state.master = socket;
    socket.broadcast.emit('master-claimed');
  });

})

