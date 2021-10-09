const Admin = require('../models/admin')
const Placement = require('../models/placements')

const getAll = async(req,res)=>{
    try{
        const result = await Placement.find();
        res.send({status:true,result:result});
    }
    catch(err){res.send({status:false,msg:'error occurred'});}
    
    
}

const get = async(req,res)=>{
    
    
    try{
        const result = await Placement.find({batch:req.body.batch})
        res.send({status:true,result:result});
    }
    catch(err){res.send({status:false,msg:'error occurred'});}
}

const add = async(req,res)=>{
    
    try{
        const placement = new Placement(req.body);
        await placement.save();
        res.send({
            status:true,
            result:placement
        });
    }
    catch(err){res.send({status:false,msg:'error occurred'})}
    
}

module.exports = {getAll, get, add}