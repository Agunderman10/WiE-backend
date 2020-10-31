const express = require('express');
var router = express.Router();

// require controller modules
const eventsController = require('../controllers/eventsController');

// authentication routes
router.get('/', eventsController.getEvents);

router.post('/', eventsController.postEvent);

module.exports = router;