const express = require('express');
const router = express();
const { User } = require('../models/User');
const bcrypt = require('bcrypt');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.status(400).send('Invalid username.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) return res.status(400).send('Invalid password.');

  const token = user.generateAuthToken();

  res.status(200).send(token);
});

module.exports = router;
