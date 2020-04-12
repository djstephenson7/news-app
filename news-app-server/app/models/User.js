const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, minLength: 5, maxLength: 50 },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 50,
  },
  firstName: { type: String, required: true, minLength: 5, maxLength: 50 },
  surname: { type: String, required: true, minLength: 5, maxLength: 50 },
});

const validateUser = (user) => {
  const schema = {
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required().email(),
    firstName: Joi.string().min(5).max(50).required(),
    surname: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(user, schema);
};

const User = mongoose.model('User', userSchema);

exports.User = User;
exports.validate = validateUser;
