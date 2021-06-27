const express  = require('express');
const router   = express.Router();
const Student = require('../Model/students')


router.get('/',(req, res) =>{
    Student.find()
    .then(data => res.status(200).json({message:"all students fetched",data:data}))
    .catch(err => res.status(404).json({error:err.message || err.tostring()}))
});

router.post('/',(req, res) => {
    const students = new Student(req.body);
    students.save().then((data) => res.status(200).json({message:'students saved',data})) 
    .catch(err => res.status(404).json({error:err.message}))
});

module.exports = router;