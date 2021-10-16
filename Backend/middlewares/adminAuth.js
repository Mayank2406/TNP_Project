const jwt=require('jsonwebtoken');
const Admin = require('../models/admin')

const adminAuth = async (req, res, next) => {
    console.log(req.body)
    const uid= req.user.userID;
    console.log(uid);
    if (!uid) {
      return res.status(403).send({status:false,msg:"token not found"});
    }
    try {
      const admin = await Admin.findOne({user:uid});
      
      if(admin!=null && admin.status=="YES"){
          console.log(admin);
      }
      else{
        return res.send({
          status:false,
          msg:"not an admin"
        })
      }
      
    } catch (err) {
      console.log(err)
      return res.send({status:false,msg:"not an admin"});
    }
    return next();
};

module.exports = adminAuth;