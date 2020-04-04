const User = require('../models/User');
const express = require('express');
const router = express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  const results = await User.find({});
  res.status(200).send(results);
});

router.post('/', async (req, res) => {
  const { username, email, firstName, surname } = req.body;
  let user = new User({ username, email, firstName, surname });

  await user.save();
  res.status(200).send(user);
});

module.exports = router;
