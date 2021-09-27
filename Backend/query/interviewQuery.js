const InterviewExperience   =  require('../models/interviewExperience');


const findInterviews = () => {
    return InterviewExperience.find();
}

const createInterview = async(query) => {
    const newInterview = new InterviewExperience(query);
    await newInterview.save();

    return newInterview;
}

const showInterview = async (interviewId) => {
    const Interview = await InterviewExperience.findById(interviewId);

    return Interview;
}

module.exports = {findInterviews,createInterview,showInterview};