const express = require('express');
var router = express.Router();

// require controller modules
const professionalDevelopmentSessionsController = require('../controllers/professionalDevelopmentSessionsController');

// authentication routes
router.get('/', professionalDevelopmentSessionsController.index);

module.exports = router;