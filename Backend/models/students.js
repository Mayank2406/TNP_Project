const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const studentSchema = new Schema({
    imageUrl:{type:String, required:true},
    name:{type:String, required:true},
    position:{type:String, required:true},
    branch:{type:String, required:true},
    course:{type:String, required:true},
    type:{type:String, required:true},
    salary:{type:Number, required:true},
    year:{type:String, required:true},
    interviewExperience:{type:String}
},{timestamps:true})


const Student = mongoose.model('Student',studentSchema);

module.exports = Student;