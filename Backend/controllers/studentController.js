const User = require('../models/user')

const StudentService = require('../services/studentService');

const getuserdetails = (req, res) => {
    const header = req.headers.authorization;
    const token = header.split(/\s+/).pop() || '';
    const auth = Buffer.from(token, 'base64').toString();
    const parts = auth.split(/:/);
    const username = parts.shift();
    const password = parts.join(':');

    return { username, password };
}

const student_register = (req, res) => {
    const user = getuserdetails(req, res);
    const newUser = new User(user);
    newUser.save(newUser)
        .then(data => res.status(200).json({ message: "New User Details ", data: data }))
        .catch(err => res.status(404).json({ error: err.message || err.toString }));
}

// ---------------------------------------------------------------------------------------- //

const student_get = async (req, res) => {
    try {
        const students = await StudentService.getStudents();
        if (students) {
            return res.status(200).json({
                message: "All Students are fetched",
                students: students
            })
        }
        else {
            res.status(404).json({ message: "No Students found" });
        }
    }
    catch (err) {
        return res.status(400).json({ message: err.message || err.toString })
    }
}

const student_getbyId = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await StudentService.getStudentById(id);
        if (student) {
            return res.status(200).json({
                message: "Student is fetched",
                students: student
            })
        }
        else {
            res.status(404).json({ message: "No Student found" });
        }
    }
    catch (err) {
        return res.status(400).json({ message: err.message || err.toString })
    }
}

const student_post = async (req, res) => {
    const query = req.body;
    const uid = req.user.userID;


    try {
        const student = await StudentService.postStudents({ query, uid });
        if (student) {
            return res.status(200).json({
                message: "student created successfully",
                newStudent: student
            })
        }
        else {
            return res.status(404).json({
                message: "Some error occured and User did not got saved"
            })
        }
    }
    catch (err) {
        return res.status(404).json({ message: err.message || err.toString })
    }
}

const student_edit = async (req, res) => {
    const query = req.body;
    const sid = req.params.id;
    try {
        const student = await StudentService.editStudent({ sid, query });
        if (student) {
            return res.status(200).json({
                message: "student edited successfully",
                newStudent: student
            })
        }
        else {
            return res.status(404).json({
                message: "Some error occured and User did not got edited"
            })
        }
    }
    catch (err) {
        return res.status(404).json({ message: err.message || err.toString })
    }
}

const student_sorting = async (req, res) => {
    const id = req.params.sortBy;
    try {
        const students = await StudentService.getSortedStudents(id);

        if (students) {
            return res.status(200).json({
                message: `Students sorted by ${id}`,
                students: students
            })
        }
        else {
            return res.status(404).json({
                message: "No Students found"
            })
        }
    }
    catch (err) {
        return res.status(404).json({ message: err.message || err.toString });
    }
}

const student_filter = async (req, res) => {
    const query = req.body;
    try {
        const filteredStudents = await StudentService.getFilteredStudents(query);

        if (filteredStudents.length) {
            return res.status(200).json({
                message: `Showing ${filteredStudents.length} students`,
                student: filteredStudents
            })
        }
        else {
            return res.status(404).json({ message: "No Students found" });
        }
    }
    catch (err) {
        return res.status(404).json({ message: err.message || err.toString })
    }
}

// ==========================

const get_company = async (req, res) => {
    try {
        const companies = await StudentService.getCompany();
        if (companies) {
            return res.status(200).json({
                message: "All Companies are fetched",
                students: companies
            })
        }
        else {
            res.status(404).json({ message: "No Companies found" });
        }
    }
    catch (err) {
        return res.status(400).json({ message: err.message || err.toString })
    }
}

const post_company = async (req, res) => {
    const query = req.body;

    try {
        const company = await StudentService.postCompany(query);
        if (company) {
            return res.status(200).json({
                message: "company added successfully",
                newStudent: company
            })
        }
        else {
            return res.status(404).json({
                message: "Some error occured and User did not got saved"
            })
        }
    }
    catch (err) {
        return res.status(404).json({ message: err.message || err.toString })
    }
}



module.exports = {
    student_get,
    student_post,
    student_edit,
    student_getbyId,
    student_sorting,
    student_register,
    getuserdetails,
    student_filter,
    get_company,
    post_company
}