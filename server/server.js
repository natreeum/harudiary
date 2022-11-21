const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

const { login } = require('./functions/login');
const { signup } = require('./functions/signup');

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
  login(req, res);
});

app.post('/signup', (req, res) => {
  signup(req, res);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../harudiary/build/index.html'));
});
