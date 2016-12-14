'use strict';

const socketConnection = require('./application').socketConnection;
const reset = require('./reset');

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get(/^\/((index.html)|(home)|(docs)|(contact)|(joinsession))?$/i, (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

// Route paths can be strings, string patterns or regular expressions
app.get(/\w+\.(png|jpg)$/, express.static(path.join(__dirname, '../', 'src', 'images')));
app.get('/*.(css|scss)', express.static(path.join(__dirname, '../', 'src', 'css')));

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'bundle.js'));
});

app.use(express.static(path.join(__dirname, '../', 'src', 'md5Crack')));

app.post('/reset', reset);

app.use((req, res) => {
  res.sendStatus(404);
});


http.listen(PORT, () => console.log(`Listening on ${PORT}.`));

socketConnection(io);
