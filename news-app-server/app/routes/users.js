const { User, validate } = require('../models/User');
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

  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({ username, email, password, firstName, surname });

  user.password = await bcrypt.hash(user.password, 10);

  await user.save();

  const token = user.generateAuthToken();

  res.status(200).send({ token, id: user._id });
});

module.exports = router;
