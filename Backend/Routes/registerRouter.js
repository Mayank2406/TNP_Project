const express  = require('express');
const router   = express.Router();
const registerController = require('../controllers/registerController')
const resetPasswordController = require('../controllers/resetPassword')

router.post('/registration',registerController.registration);
router.post('/verification',registerController.verification);
router.post('/reset',resetPasswordController.resetPassword);

router.get("/",(req,res)=>{
    const a="itsme";
    const b="itsme";
    if(a==b)res.send(true);
    else res.send(false)
})
module.exports = router; 
