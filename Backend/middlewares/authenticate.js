const jwt=require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.body.token;
  
    if (!token) {
      return res.status(403).send({status:false,msg:"token not found"});
    }
    try {
      const decoded = jwt.verify(token, "tokenoflove");
      req.user = decoded;
    } catch (err) {
      return res.send({status:false,msg:"Invalid Token"});
    }
    return next();
};

module.exports = verifyToken;