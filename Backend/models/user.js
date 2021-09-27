const mongoose = require('mongoose');
<<<<<<< HEAD
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true}
}, { timestamps: true });

const User = mongoose.model('DemoUser', userSchema);
=======
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
>>>>>>> f055e32cabf17606721d959d0d8a9d8e65fbb7e4

module.exports = User;