const express = require('express');
var router = express.Router();

// require controller modules
const empowhermentSessionsController = require('../controllers/empowhermentSessionsController');

// authentication routes
router.get('/', empowhermentSessionsController.index);

module.exports = router;