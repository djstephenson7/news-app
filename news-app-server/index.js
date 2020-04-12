const express = require('express');
require('./app/db');
const app = express();
const port = 8000;
const users = require('./app/routes/users');
const auth = require('./app/routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('Server up and running.');
});

app.use('/api/users', users);
app.use('/api/auth', auth);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
