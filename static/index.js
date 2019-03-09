const path = require('path');
const express = require('express');
const router = express.Router();

/* Setup file system */
// Photos
const photoDirectoryPath = path.join(__dirname, 'photos');
router.use('/photos', express.static(photoDirectoryPath));

// Frontend
// TODO

module.exports = { photoDirectoryPath, router };
