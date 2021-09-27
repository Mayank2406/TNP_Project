const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterviewExperienceSchema = new Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    author:
    {
        type: Schema.Types.ObjectId,
        ref: 'DemoUser'
    },
    content: { type: String, required: true}
}, { timestamps: true });

const InterviewExperience = mongoose.model('InterviewExperience', InterviewExperienceSchema);

module.exports = InterviewExperience