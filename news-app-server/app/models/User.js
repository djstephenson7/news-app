const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    username: { type: String, required: true, minLength: 5, maxLength: 50 },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 50
    },
    firstName: { type: String, required: true, minLength: 5, maxLength: 50 },
    surname: { type: String, required: true, minLength: 5, maxLength: 50 }
  }
});

module.exports = mongoose.model('User', userSchema);
