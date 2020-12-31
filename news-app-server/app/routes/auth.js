const express = require('express');
const router = express();
const { User } = require('../models/User');
const bcrypt = require('bcrypt');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send('Invalid email.');
  }

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      const token = user.generateAuthToken();
      res.status(200).send(token);
    } else {
      res.status(401).send('Invalid password');
    }
    if (err) {
      res.status(400).send('Something went wrong.');
    }
  });
});

module.exports = router;
