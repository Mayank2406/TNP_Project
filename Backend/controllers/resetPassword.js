const User = require('../models/user')
const Mailer=require('./mailer')
const EncryptDecrypt=require('./dataencrypt')

const resetPassword = async (req,res)=>{

    const secret=String(EncryptDecrypt.decryptHelper(req.body.secret));
    const user=req.body.userID
    const password=req.body.userPassword
    
    try{
        
        if(secret=="\"itsme\""){
            
            var newvalues = { $set: {userPassword: EncryptDecrypt.encryptHelper(password) } };
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
