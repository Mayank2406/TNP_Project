const express  = require('express');
const router   = express.Router();

const studentController = require('../controllers/studentController')

// Company Routes //

router.get('/',studentController.get_company);
router.post('/',studentController.post_company);

module.exports = router;