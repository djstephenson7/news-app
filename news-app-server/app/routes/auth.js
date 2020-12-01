const express = require('express');
const router = express();
const { User } = require('../models/User');
const bcrypt = require('bcrypt');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.status(400).send('Invalid username.');

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    bcrypt.compare(user.password, hash, (err, result) => {
      if (err) return res.status(400).send('Something went wrong.');
      if (result) {
        const token = user.generateAuthToken();
        res.status(200).send(token);
      } else {
        res.status(400).send('Invalid password');
      }
    });
  });
});

module.exports = router;
