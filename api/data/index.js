const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getData);
router.post('/', controller.receiveData);

module.exports = router;
