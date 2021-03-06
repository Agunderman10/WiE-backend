const express = require('express');
var router = express.Router();

// require controller modules
const discussionsController = require('../controllers/discussionsController');

// authentication routes
router.get('/', discussionsController.getDiscussions);

module.exports = router;