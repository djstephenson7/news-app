const express = require('express');
const router = express();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {});

module.exports = router;
