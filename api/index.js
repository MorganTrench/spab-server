const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '/photos');
  },
  filename: function(req, file, cb) {
    cb(null, `${uuid()}.jpg`);
  }
});
const upload = multer({ storage: storage });

router.use('/data', upload.none(), require('./data'));
router.use('/command', require('./command'));
router.use('/photo', upload.none(), require('./photo'));

module.exports = router;
