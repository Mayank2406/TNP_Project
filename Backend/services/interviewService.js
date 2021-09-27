const InterviewQuery = require('../query/interviewQuery')
const StudentQuery = require('../query/studentQuery');


const getInterviews = async () => {
    const interviews = await InterviewQuery.findInterviews()
        .populate('author');

    return interviews;
}

const showInterview = async (interviewId) => {
        const interview = await InterviewQuery.showInterview(interviewId);

        return interview;
}


const postInterview = async ({query, uid}) => {
    const newInterview = await InterviewQuery.createInterview(query);
    const Student =  await StudentQuery.findInterviewAuthor(uid);
    Student.interviews.push(newInterview);

    newInterview.author = uid;

    await Student.save();
    await newInterview.save();

    return newInterview;
}

module.exports = { getInterviews,postInterview,showInterview}