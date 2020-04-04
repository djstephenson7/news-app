const mongoose = require('mongoose');
// const mongoURI = 'mongodb://localhost:27017';
const mongoURI = 'mongodb://localhost/news-api';
const mongoOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

module.exports = mongoose
  .connect(mongoURI, mongoOptions)
  .then(() => {
    console.log(`Connecting to ${mongoURI}...`);
  })
  .catch(error => {
    console.log('Error connecting to MongoDB', error);
  });
