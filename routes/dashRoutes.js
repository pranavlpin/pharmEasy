var express = require('express');

var authController = require('../controllers/auth');
var rewardController = require('../controllers/reward');

var router = express.Router();

//Create endpoint handlers for /dashRewards
router.route('/dashRewards')
.get(authController.isAuthenticated,rewardController.getDashRewards);

module.exports = router;