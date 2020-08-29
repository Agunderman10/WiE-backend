const express = require('express');
var router = express.Router();

// require controller modules
const tutoringSessionsController = require('../controllers/tutoringSessionsController');

// authentication routes
router.get('/', tutoringSessionsController.index);

module.exports = router;