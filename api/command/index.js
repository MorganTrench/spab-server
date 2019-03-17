const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/update', controller.updateCommands);
router.get('/progress', controller.updateProgress);
router.get('/', controller.getCommands);

module.exports = router;
