const router = require('express').Router();
const teamController = require('../controllers/teamController');

router
    .route('/')
    .get(teamController.index);

router 
    .route('/PPG')
    .get(teamController.ppg);

module.exports = router;