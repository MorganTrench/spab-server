const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/', controller.recievePhoto);

module.exports = router;
