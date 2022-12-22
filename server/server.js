const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 8080;

const { signIn } = require('./functions/signIn.js');
const { signUp } = require('./functions/signUp.js');
const { regTodo } = require('./functions/newTodo');

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/signin', (req, res) => {
  signIn(req, res);
});

app.post('/signup', (req, res) => {
  signUp(req, res);
});

app.post('/newtodo', (req, res) => {
  regTodo(req, res);
});

app.post('/newdiary', (req, res) => {});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../harudiary/build/index.html'));
});
