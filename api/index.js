const express = require('express');
const router = express.Router();

router.use('/data', require('./data'));
router.use('/command', require('./command'));

module.exports = router;
