'use strict';

const socketConnection = require('./application');

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, '../', 'src', 'md5Crack')));

app.use((req, res) => {
  res.sendStatus(404);
});


http.listen(PORT, () => console.log(`Listening on ${PORT}.`));

socketConnection(io);
