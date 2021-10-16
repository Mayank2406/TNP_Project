const StudentQuery = require('../query/studentQuery');

const getStudents = async () => {
    const students = await StudentQuery.findStudents()
        .populate('interviews').populate('author')
        .sort({ salary: -1 });

    return students;
}

const getStudentById = async (id) => {
    const student = await StudentQuery.findStudentById(id);
    return student;
}

const postStudents = async ({ query, uid }) => {
    const newStudent = await StudentQuery.createStudent(query);
    newStudent.author = uid;
    await newStudent.save();
    console.log(newStudent);
    return newStudent;
}

const editStudent = async ({ sid, query }) => {
    const editedStudent = await StudentQuery.editStudent({ sid, query });
    return editedStudent;
}

const getSortedStudents = async (id) => {

    if (id === 'year')
        sortparams = { year: -1 };
    else
        sortparams = { salary: -1 };

    const students = await StudentQuery.findStudents().sort(sortparams);
    return students;
}

const getFilteredStudents = async (query) => {
    const students = await StudentQuery.getFilteredStudents(query)
    return students;
}

const getCompany = async () => {
    const Company = await StudentQuery.getCompany();
    return Company;
}

const postCompany = async (query) => {
    const newCompany = await StudentQuery.createCompany(query);
    return newCompany;
}

module.exports = {
    getStudents, postStudents, getSortedStudents, getFilteredStudents, editStudent, getStudentById,
    getCompany, postCompany
};