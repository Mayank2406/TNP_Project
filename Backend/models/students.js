const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

const studentSchema = new Schema({
    image: ImageSchema,
    name: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    branch: { type: String, required: true },
    course: { type: String, required: true },
    type: { type: String, required: true },
    salary: { type: Number, required: true },
    year: { type: String, required: true },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    interviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'InterviewExperience'
        }
    ],
}, { timestamps: true })


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;