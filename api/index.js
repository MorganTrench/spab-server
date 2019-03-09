const path = require('path');
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const fs = require('fs-extra');
const multer = require('multer');
const static = require('../static');

// Setup form data parsing and file storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, static.photoDirectoryPath);
  },
  filename: function(req, file, cb) {
    cb(null, `${uuid()}.jpg`);
  }
});
const upload = multer({ storage: storage });

router.use('/data', upload.none(), require('./data'));
router.use('/command', require('./command'));
router.use('/photo', upload.single('file'), require('./photo'));

module.exports = router;
