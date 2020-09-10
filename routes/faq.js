const express = require('express');
var router = express.Router();

// require controller modules
const faqController = require('../controllers/faqController');

// authentication routes
router.get('/', faqController.index);

module.exports = router;