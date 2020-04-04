const express = require('express');
require('./app/db');
const app = express();
const port = 8000;
const User = require('./app/models/User');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server up and running.');
});

app.get('/users', async (req, res) => {
  const results = await User.find({});
  res.status(200).send(results);
});

app.post('/users', async (req, res) => {
  const { username, email, firstName, surname } = req.body;
  let user = new User({ username, email, firstName, surname });

  await user.save();
  res.status(200).send(user);
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
