const express  = require('express');
const router   = express.Router();
const studentController = require('../controllers/studentController')

router.get('/',studentController.student_get);

router.post('/',studentController.student_post);

router.get('/:sortBy', studentController.student_sorting);

module.exports = router; 
