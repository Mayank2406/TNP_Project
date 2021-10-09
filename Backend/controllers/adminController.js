const User = require('../models/user')
const Admin = require('../models/admin')

const admin_post = async (req,res)=>{
    
    
    
    try{
        
        
        const user=await User.findOne({userID:req.body.userID});
        var newAdmin = new Admin({
            user:user._id,
            status:"YES"
        })
        
        await newAdmin.save();
        
        res.send({status:true})
    }
    catch(err){
        
        res.send({status:false})
    }
}

module.exports = {admin_post}