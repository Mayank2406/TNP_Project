const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterviewExperienceSchema = new Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    branch: { type: String, required: true},
    ctc: { type: String},
    url: { type: String},
    author:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: { type: String, required: true}
}, { timestamps: true });

const InterviewExperience = mongoose.model('InterviewExperience', InterviewExperienceSchema);

module.exports = InterviewExperience