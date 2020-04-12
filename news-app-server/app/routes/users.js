const { User, validate } = require('../models/User');
const express = require('express');
const router = express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  const results = await User.find({});
  res.status(200).send(results);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  const { username, email, password, firstName, surname } = req.body;

  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({ username, email, password, firstName, surname });

  await user.save();
  res.status(200).send(user);
});

module.exports = router;
