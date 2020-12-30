const { User, validate, validatePassword } = require('../models/User');
const express = require('express');
const router = express();
const bcrypt = require('bcrypt');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  const results = await User.find({});
  res.status(200).send(results);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  const { username, email, password, firstName, surname } = req.body;
  const usernameMatch = await User.findOne({ username });
  const emailMatch = await User.findOne({ email });

  if (usernameMatch) {
    return res.status(409).send('This username already exists!');
  }

  if (emailMatch) {
    return res.status(409).send('This email is already registered!');
  }

  if (error) return res.status(400).send(error.details[0].message);
  let user = new User({ username, email, password, firstName, surname });

  user.password = await bcrypt.hash(user.password, 10);

  try {
    await user.save();
    const token = user.generateAuthToken();

    res.status(200).send({ token, id: user._id });
  } catch (err) {
    console.log('ERROR: ', err);
  }
});

router.patch('/:id', async (req, res) => {
  let { password } = req.body;
  const { error } = validatePassword({ password });

  if (error) return res.status(400).send(error.details[0].message);
  password = await bcrypt.hash(password, 10);

  await User.findByIdAndUpdate(req.params.id, { password }, (err, user) => {
    if (err) {
      console.log('ERROR: ', err);
    } else {
      res.status(200).send('Password updated successfully.');
    }
  });
});

module.exports = router;
