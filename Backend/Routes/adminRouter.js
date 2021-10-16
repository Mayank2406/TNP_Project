const express  = require('express');
const router   = express.Router();
const adminController = require('../controllers/adminController');

router.post('/add',adminController.admin_post);


module.exports = router; 