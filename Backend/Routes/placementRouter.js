const express  = require('express');
const authenticate = require('../middlewares/authenticate')
const adminAuth = require('../middlewares/adminAuth')

const router   = express.Router();
const placementController = require('../controllers/placementController');

router.get('/',placementController.getAll);
router.post('/',placementController.get);
router.post('/add',authenticate,adminAuth,placementController.add);


module.exports = router; 
