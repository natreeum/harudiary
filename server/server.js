const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.use(express.static(path.join(__dirname, '../harudiary/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../harudiary/build/index.html'));
});

app.post('/login', (req, res) => {
  const data = req.body;
  if (data) res.status(200).send('post success');
  else res.status(400).send('Invalid Request');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../harudiary/build/index.html'));
});
