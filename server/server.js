const express = require('express');
const path = require('path');

const App = express();

// serving static files
App.use('/', express.static(path.join(__dirname, '../')));
App.use('/', express.static(path.join(__dirname, '../', 'src', 'md5Crack')));


App.use((req, res) => {
  res.sendStatus(404);
});

App.listen(3000, () => {
  console.log('Connected!!!!');
});
