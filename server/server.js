const express = require('express');
const path = require('path');
const app = express(); 
const http = require('http').Server(app);
const io = require('socket.io')(http);
const p2p = require('socket.io-p2p-server').Server;

io.use(p2p);

app.use('/', express.static(path.join(__dirname, '../')));
app.use('/', express.static(path.join(__dirname, '../', 'src', 'md5Crack')));

app.use((req, res) => {
  res.sendStatus(404);
});

http.listen(3000, () => console.log("Listening On PORT 3000!!!!"));
