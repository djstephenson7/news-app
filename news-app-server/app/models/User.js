const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 50,
  },
  password: { type: String, required: true, minLength: 5, maxLength: 50 },
  firstName: { type: String, required: true, maxLength: 50 },
  surname: { type: String, required: true, maxLength: 50 },
});

userSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
  return token;
};

const validateUser = (user) => {
  const schema = {
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(5).max(50).required(),
    firstName: Joi.string().max(50).required(),
    surname: Joi.string().max(50).required(),
  };

  return Joi.validate(user, schema);
};

const validateUserPassword = (password) => {
  const schema = { password: Joi.string().min(5).max(50).required() };

  return Joi.validate(password, schema);
};

const User = mongoose.model('User', userSchema);

exports.User = User;
exports.validate = validateUser;
exports.validatePassword = validateUserPassword;
