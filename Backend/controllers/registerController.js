const User = require('../models/user')
const Mailer=require('./mailer')
const EncryptDecrypt=require('./dataencrypt')
const bcrypt = require('bcrypt');

const registration =  async (req,res) =>{

    console.log(req.body);
    const userData=req.body;
    userData.secret="itsme";
    userData.userPassword=await bcrypt.hash("password",10);
    userData.userEmail=userData.userID+'@mmmut.ac.in';
    userData.userOTP=Math.floor(Math.random() * (99999 - 10001)) + 100001;
    console.log(userData.userOTP)
    userData.userVerified="NO";
    console.log(userData)
    const userEncryptedData= EncryptDecrypt.encryptHelper(userData);
    const msgEmail=`<p>Welcome ${userData.userName}, <br> OTP for registration is ${userData.userOTP}<br><h3>Thanks<br>TnP Info created by Nandzam</h3>`;
    try{
        var countUser=0
        var dbData
        await User.find({userID:userData.userID}).then((data)=>{dbData=data;countUser=data.length})
        .catch(err=>console.log(err));
        var toSend={};
        
        console.log(countUser)
        if(countUser==0 || (countUser==1&&dbData[0].userVerified==="NO")){
            const mail_res=await Mailer.mailer(userData.userEmail,'TnP Email Verification',msgEmail);
            const user = new User(userData);
           
            await user.save().then((data) =>{ toSend={
                status:mail_res,
                msg:mail_res?"email sent":"email not sent",
        
                
                
                }
  
            }
                
            )
            .catch(err =>{ toSend={status:false};
               
            })
            
            res.send(toSend);
        }
        else{
            toSend={
                status:false,
                msg:"UserID exist"
            }
            res.send(toSend);
        }
        
    }
    catch(err){
        console.log("this is the error\n" +err);
        res.send({status:false,msg:'error occurred'})
    }
    
    
}

const verification = async(req,res)=>{
    //console.log(req.body);
    const decryptedMsg=req.body
    try{
       
        console.log(decryptedMsg);
        try{
            var countUser=0
            var dbData
            await User.find({userID:decryptedMsg.userID}).then((data)=>{
                countUser=data.length;
                dbData=data
                
            })
            .catch(err=>console.log(err));
            console.log(dbData)
            if(countUser===1&&dbData[0].userOTP==decryptedMsg.userOTP){
                
                var newvalues = { $set: {userOTP:0,userVerified:"YES" } };
                await User.updateOne({userID:decryptedMsg.userID},newvalues,(err,result)=>{
                    if(result){
                        res.send({
                            status:true,
                            userID:decryptedMsg.userID,
                            secret:EncryptDecrypt.encryptHelper(decryptedMsg.userID)
                        })
                    }
                    else res.send({status:false,msg:'error occurred2'})
                })
                
            }
            else if(dbData[0].userVerified=="YES"){
                res.send({status:false,msg:"User already verified"})
            }
            else{
                res.send({status:false,msg:"Invalid OTP"})
            }
        }
        catch(err){
            res.send({status:false,msg:"error occurred"});
        }
        
        
    }
    catch(err){
        console.log("error11");
        res.send({status:false,msg:'Invalid token'})
    }
    
    
}
module.exports = {registration, verification}