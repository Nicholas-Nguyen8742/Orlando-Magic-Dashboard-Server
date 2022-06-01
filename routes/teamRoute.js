const router = require('express').Router();
const teamController = require('../controllers/teamController');

router
    .route('/')
    .get(teamController.index);

router 
    .route('/PPG')
    .get(teamController.ppg);

router 
    .route('/RPG-APG')
    .get(teamController.rpgApg)

module.exports = router;