const InterviewExperience = require('../models/interviewExperience')
const Student = require('../models/students')

const InterviewService = require('../services/interviewService');

const get_interview = async (req, res) => {
    try {
        const interviews = await InterviewService.getInterviews();
        if (interviews) {
            return res.status(200).json({
                message: "All Interviews are fetched",
                interviews: interviews
            })
        }
        else {
            res.status(404).json({ message: "No Interviews Found" });
        }
    }
    catch (err) {
        return res.status(400).json({ message: err.message || err.toString })
    }
}


const show_interview = async (req, res) => {
    const interviewID = req.params.id;
    try {
        const interview = await InterviewService.showInterview(interviewID);
        if (interview) {
            return res.status(200).json({
                message: `Here is the Interview of ${interview.name}`,
                interview:interview
            })
        }
        else {
            return res.status(404).json({ message: "No interview found" });
        }
    }
    catch(err) {
        return res.status(400).json({ message: err.message || err.toString})
    }
}

const post_interview = async (req, res) => {
    const query = req.body;
    const uid = req.user._id;

    try {
        const interview = await InterviewService.postInterview({ query, uid })
        if (interview) {
            return res.status(200).json({
                message: "Interview created successfully !",
                interview: interview
            })
        }
        else {
            return res.status(400).json({
                message: "Some error occurred and interview did not got created successfully !"
            })
        }
    }

    catch (err) {
        return res.status(400).json({ message: err.message || err.toString })
    }
}

module.exports = { post_interview, get_interview, show_interview };