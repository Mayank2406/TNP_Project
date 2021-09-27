const express  = require('express');
const router   = express.Router();
const registerController = require('../controllers/registerController');
const resetPasswordController = require('../controllers/resetPassword');

router.post('/registration',registerController.registration);
router.post('/verification',registerController.verification);
router.post('/reset',resetPasswordController.resetPassword);


module.exports = router; 
