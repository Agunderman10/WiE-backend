const express = require('express');
var router = express.Router();

// require controller modules
const authenticationController = require('../controllers/authenticationController');

// authentication routes
router.get('/', authenticationController.index);

// signin router
router.post('/signin', authenticationController.sign_in_post)

module.exports = router;