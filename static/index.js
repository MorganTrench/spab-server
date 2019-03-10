const path = require('path');
const express = require('express');
const router = express.Router();

/* Setup file system */
// Photos
const photoDirectoryPath = path.join(__dirname, 'photos');
router.use('/photos', express.static(photoDirectoryPath));

// Frontend
const frontendDirectoryPath = path.join(__dirname, 'frontend');
// Have app routes redirected to index.html so that internal routes work
router.use(['/journey', '/plan', '/sensor', '/status'], (req, res) => {
  res.sendFile(frontendDirectoryPath + '/index.html');
});
// Serve al frontend files
router.use('/', express.static(frontendDirectoryPath));

module.exports = { photoDirectoryPath, router };
