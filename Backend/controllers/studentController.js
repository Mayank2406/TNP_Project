const Student = require('../models/students')

const student_get =  (req,res) =>{
    Student.find().sort({salary:-1})
    .then(data => res.status(200).json({message:"all students fetched",data:data}))
    .catch(err => res.status(404).json({error:err.message || err.tostring()}))
}

const student_post  = (req,res) => {
    const students = new Student(req.body);
    students.save().then((data) => res.status(200).json({message:'students saved',data})) 
    .catch(err => res.status(404).json({error:err.message}))
}

module.exports = {student_get, student_post}