const express = require('express');
const router = express.Router();

//Post registration material
router.post('/register', function (req, res) {
  console.log('Post register');
});

module.exports = router;
