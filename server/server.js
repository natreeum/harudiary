const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'harudiary/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../harudiary/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../harudiary/build/index.html'));
});
