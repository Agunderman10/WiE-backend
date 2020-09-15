const express = require('express');
var router = express.Router();

// require controller modules
const authenticationController = require('../controllers/authenticationController');

// authentication routes
router.get('/', authenticationController.index);

module.exports = router;