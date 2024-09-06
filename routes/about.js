const express = require('express');
const path = require('path'); // Ensure this is included
const router = express.Router();

// Serve HTML file for GET request
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

module.exports = router;
