const User = require('../models/user')
const Mailer=require('./mailer')
const EncryptDecrypt=require('./dataencrypt')
const bcrypt = require('bcrypt')


const resetPassword = async (req,res)=>{
    console.log(req.body.secret)
    var secret=EncryptDecrypt.decryptHelper(req.body.secret);
    const secrettmp=secret.slice(1,11)
    const user=req.body.userID;
    const password=req.body.userPassword
    
    try{
        
        if(secret==user||secrettmp==user){
            const usercount=0;
            await User.find({userID:user}).then((data)=>{
                console.log("data "+data)
                if(data.length==1)userCount=1;
                else userCount=0
            })
            console.log("userCount"+userCount)
            if(userCount==0){
                res.send({
                    status:"false",
                    msg:"user does not exist"
                })
            }
            else{
                var newvalues = { $set: {userPassword: await bcrypt.hash(password,10) } };
                await User.updateOne({userID:user},newvalues,(err,result)=>{
                    if(result){
                        res.send({status:true,msg:'password updated'})
                    }
                    else res.send({status:false,msg:'error occurred2'})
                })
            }
            
        }
        else{
           
            res.send({status:false,msg:'unauthorised access'})
        }
    }
    catch(err){
        res.send({status:false,msg:'error occurred3'})
    }
    
    
}

const generate = async (req,res)=>{
    console.log(req.body.userID);
    if(!req.body.userID)res.send({status:false,msg:"userID not found"})
    await User.find({userID:req.body.userID}).then(async (data)=>{
        console.log("daata"+data)
        if(data.length==0)res.send({status:false,msg:"userID does not exist"});
        else if(data[0].userID==req.body.userID){
            const OTP=Math.floor(Math.random() * (99999 - 10001)) + 100001;
            var newvalues = { $set: {userOTP:OTP,userVerified:"YES" } };
                await User.updateOne({userID:req.body.userID},newvalues,async (err,result)=>{
                    if(result){
                        const msgEmail=`<p>Welcome ${req.body.userID}, <br> OTP to reset password is ${OTP}<br><h3>Thanks<br>TnP Info created by Nandzam</h3>`;
                        console.log("from herererere")
                        try{
                            const mail_res=await Mailer.mailer(req.body.userID+"@mmmut.ac.in",'TnP Reset Password',msgEmail);
                        
                            toSend={
                                status:mail_res,
                                msg:mail_res?"email sent":"email not sent",
                                
                            }
                            res.send(toSend);
                        }
                        catch(err){
                            console.log(err);
                            res.send({status:false,msg:"error occurred1",error:err})
                        }
                    }
                    else res.send({status:false,msg:'error occurred2'})
                })
           
        }
    }).catch((err)=>{
        res.send({status:false,msg:"error occurred2",error:err})
    })
}

const verification = async (req,res)=>{
    
    const decryptedMsg = req.body
    if(decryptedMsg.secret=="\"itsme\"" ||decryptedMsg.secret=="itsme"){
        try{
            await User.find({userID:decryptedMsg.userID}).then((data)=>{
                if(data.length==0)res.send({status:"false",msg:"userID does not exist"});
                else if(data[0].userID==decryptedMsg.userID&&data[0].userOTP==decryptedMsg.userOTP){
                    res.send({
                        status:"true",
                        userID:decryptedMsg.userID,
                        secret:EncryptDecrypt.encryptHelper(decryptedMsg.userID)
                    })
                }
                else{
                    res.send({status:"false",msg:"userID does not exist"});
                }
            })
        }
        catch(err){
            res.send({status:false,msg:"error occurred"})
        }
    }   
    else{
        res.send({status:false,msg:"invalid token"})
    }
}
module.exports = {resetPassword,generate,verification}
