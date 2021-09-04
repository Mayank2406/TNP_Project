const User = require('../models/user')
const Mailer=require('./mailer')
const EncryptDecrypt=require('./dataencrypt')
const bcrypt = require('bcrypt')


const resetPassword = async (req,res)=>{
    //console.log(req.body.secret)
    const secret=String(EncryptDecrypt.decryptHelper(String(req.body.secret)));
    console.log(secret)
    const user=req.body.userID
    const password=req.body.userPassword
    
    try{
        
        if(secret=="\"itsme\""|| secret=='itsme'){
            
            var newvalues = { $set: {userPassword: await bcrypt.hash(password,10) } };
            await User.updateOne({userID:user},newvalues,(err,result)=>{
                if(err){
                    res.send({status:false,msg:'error occurred'})
                }
                else if(result){
                    res.send({status:true,msg:'password updated'})
                }
                else res.send({status:false,msg:'error occurred'})
             })
        }
        else{
           
            res.send({status:false,msg:'unauthorised access'})
        }
    }
    catch(err){
        res.send({status:false,msg:'error occurred'})
    }
    
    
}

module.exports = {resetPassword}
