const User = require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const login = async (req,res)=>{
    const user=req.body;
    console.log(user);
    await User.find({userID : user.userID}).then(async (data)=>{
        // console.log(data[0]);
        var flag=await bcrypt.compare(user.userPassword,data[0].userPassword);
        if(!flag){
            res.send({status:false,msg:"invalid credentials"});
        }
        else{
            const jwttoken = jwt.sign(
                { userID: data[0]._id, secret:"itsme" },
                "tokenoflove",
                {
                  expiresIn: "2h",
                }
              );
            res.send({status:true,userID:user.userID,token:jwttoken});
        }
        
    }).catch((err)=>{
        res.send( {status : false, msg:err});
    })
}


module.exports = {login}