const express = require('express');
var router = express.Router();

// require controller modules
const wellnessSessionsController = require('../controllers/wellnessSessionsController');

// authentication routes
router.get('/', wellnessSessionsController.index);

module.exports = router;