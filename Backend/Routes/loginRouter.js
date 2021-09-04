const express  = require('express');
const router   = express.Router();
const loginController = require('../controllers/loginController')
const authenticate = require('../middlewares/authenticate')
router.post('/',loginController.login);

router.post('/verify',authenticate,(req,res)=>{
    console.log(req.user);
    res.send("from hree");
})

module.exports = router; 
