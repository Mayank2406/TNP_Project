const User                  =  require('../models/user');
const Student               =  require('../models/students');

const findStudents = () => {    
    return Student.find();
}

const createStudent = async (query) => {
    const newStudent = new Student(query);
    await newStudent.save();

    return newStudent;
}

const findInterviewAuthor = async (uid) => {
    const student = await Student.findOne({author:uid});
    return student;
}

const getFilteredStudents = async (query) => {
    return Student.find(query);
}

module.exports = {findStudents,createStudent,findInterviewAuthor, getFilteredStudents};