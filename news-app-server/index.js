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

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/users', async (req, res) => {
  const results = await User.find({});
  res.send(results);
});

app.post('/users', async (req, res) => {
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    surname: req.body.surname,
  });

  await user.save();
  res.send(user);
});
