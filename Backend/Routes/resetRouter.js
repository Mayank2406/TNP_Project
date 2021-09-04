const express  = require('express');
const router   = express.Router();
const resetController = require('../controllers/resetPassword');

router.post('/generate',resetController.generate);
router.post('/verification',resetController.verification);
router.post('/reset',resetController.resetPassword);


module.exports = router; 
