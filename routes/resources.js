const express = require('express');
var router = express.Router();

// require controller modules
const resourcesController = require('../controllers/resourcesController');

// authentication routes
router.get('/', resourcesController.index);

module.exports = router;