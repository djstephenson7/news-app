const express = require('express');
require('./app/db');
const app = express();
const config = require('config');
const users = require('./app/routes/users');
const auth = require('./app/routes/auth');
const news = require('./app/routes/news');
const port = config.get('port');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send('Server up and running.');
});

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/news', news);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
