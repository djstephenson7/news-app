const mongoose = require('mongoose');
const config = require('config');
const mongoURI = `mongodb://localhost/${config.get('db')}`;
const mongoOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = mongoose
  .connect(mongoURI, mongoOptions)
  .then(() => {
    console.log(`Connecting to ${mongoURI}...`);
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });
