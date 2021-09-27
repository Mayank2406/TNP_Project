const User = require('./models/user')
const StudentController = require('./controllers/studentController')


const isLoggedIn = async(req, res, next) => {
    const user = StudentController.getuserdetails(req, res);
    const username = user.username;
    const password = user.password;
    const LoggedInUser = await User.findOne({ username:username,password:password})
    req.user = LoggedInUser;
    if(!LoggedInUser)
        {
          return res.status(403).json({message: 'You are not authenticated user'})
        }
    next();
}

module.exports = {isLoggedIn}
