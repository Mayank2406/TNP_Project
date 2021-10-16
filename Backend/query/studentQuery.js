const User = require('../models/user');
const Student = require('../models/students');
const Company = require('../models/company');

const findStudents = () => {
    return Student.find();
}

const findStudentById = async (id) => {
    const student = await User.findById(id);
    return student;
}

const createStudent = async (query) => {
    const newStudent = new Student(query);
    await newStudent.save();

    return newStudent;
}

const editStudent = async ({ sid, query }) => {
    const editedStudent = await Student.findByIdAndUpdate(sid, query, { new: true });
    return editedStudent;
}

const findInterviewAuthor = async (uid) => {
    const student = await Student.findOne({ author: uid });
    return student;
}

const getFilteredStudents = async (query) => {
    return Student.find(query);
}

const getCompany = async () => {
    return Company.find();
}

const createCompany = async (query) => {
    const newCompany = new Company(query);
    await newCompany.save();

    return newCompany;
}

module.exports = {
    findStudents, createStudent, findInterviewAuthor, getFilteredStudents,
    editStudent, findStudentById, getCompany, createCompany
};