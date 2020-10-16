const express = require('express');
var router = express.Router();

// require controller modules
const studyGroupSessionsController = require('../controllers/studyGroupSessionsController');

// authentication routes
router.get('/', studyGroupSessionsController.index);

router.post('/', studyGroupSessionsController.postStudyGroup);

module.exports = router;