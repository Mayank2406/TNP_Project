const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    secret:{type:String,required:true},
    userID:{type:Number, required:true},
    userName:{type:String, required:true},
    userEmail:{type:String, required:true},
    userPassword:{type:String, required:true},
    userOTP:{type:Number},
    userVerified:{type:String}
},{timestamps:true})


const User = mongoose.model('User',userSchema);

module.exports = User;