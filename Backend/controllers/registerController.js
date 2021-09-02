const User = require('../models/user')
const Mailer=require('./mailer')
const EncryptDecrypt=require('./dataencrypt')

const registration =  async (req,res) =>{

    console.log(req.body);
    const userData=req.body;
    userData.secret="itsme";
    userData.userPassword="password"

    console.log(userData)
    const userEncryptedData= EncryptDecrypt.encryptHelper(userData);
    const msgEmail=`<p>${userEncryptedData}</p>`;
    try{
        var countUser=0
        await User.find({userID:userData.userID}).then(data=>countUser=data.length)
        .catch(err=>console.log(err));
        var toSend={};
        console.log(countUser)
        if(countUser==0){
            const mail_res=await Mailer.mailer(userData.userEmail,'TnP Email Verification',msgEmail);
            
            toSend={
                status:mail_res,
                msg:mail_res?"email sent":"email not sent",
                
            }
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
    const encryptedMsg=req.body.msg
    try{
        const decryptedMsg=EncryptDecrypt.decryptObjectHelper(encryptedMsg);
        console.log(decryptedMsg);
        try{
            var countUser=0
            await User.find({userID:decryptedMsg.userID}).then(data=>countUser=data.length)
            .catch(err=>console.log(err));
            console.log(countUser)
            if(countUser===0){
                const user = new User(decryptedMsg);
                user.save().then((data) => res.send({status:true,userID:decryptedMsg.userID,secret:EncryptDecrypt.encryptHelper(decryptedMsg.secret)})) 
                .catch(err => res.send({status:false,error:err}))
            }
            else{
                res.send({status:false,msg:"UserID exist"})
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