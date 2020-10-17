const express = require('express');
var router = express.Router();

// require controller modules
const studyGroupRequestsController = require('../controllers/studyGroupRequestsController');

// authentication routes
router.get('/', studyGroupSessionsController.get_study_group_requests);

router.post('/', studyGroupSessionsController.post_study_group_request);

module.exports = router;