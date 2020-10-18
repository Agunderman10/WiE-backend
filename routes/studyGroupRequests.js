const express = require('express');
var router = express.Router();

// require controller modules
const studyGroupRequestsController = require('../controllers/studyGroupRequestsController');

// authentication routes
router.get('/', studyGroupRequestsController.get_study_group_requests);

router.post('/', studyGroupRequestsController.post_study_group_request);

router.post('/accept', studyGroupRequestsController.post_accept_study_group_request);

router.delete('/decline', studyGroupRequestsController.delete_declined_study_group);

module.exports = router;