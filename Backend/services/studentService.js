const StudentQuery = require('../query/studentQuery');

const getStudents = async () => {
    const students = await StudentQuery.findStudents()
        .populate('interviews').populate('author')
        .sort({ salary: -1 });

    return students;
}

const postStudents = async ({ query, uid,f}) => {
    const newStudent = await StudentQuery.createStudent(query);
    newStudent.author = uid;
    newStudent.image.url = f.path;
    newStudent.image.filename = f.filename;
    await newStudent.save();
    console.log(newStudent);
    return newStudent;
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

module.exports = { getStudents, postStudents, getSortedStudents, getFilteredStudents};