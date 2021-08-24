const express  = require('express');
const router   = express.Router();
const studentController = require('../controllers/studentController')

router.get('/',studentController.student_get);

// this is second
router.post('/',studentController.student_post);

module.exports = router; 
