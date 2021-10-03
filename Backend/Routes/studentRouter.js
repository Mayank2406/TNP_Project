const express  = require('express');
const multer  = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const router   = express.Router();
const studentController = require('../controllers/studentController')
const {isLoggedIn} = require('../middleware')
const authenticate = require('../middlewares/authenticate');

router.post('/register',studentController.student_register);

router.get('/',studentController.student_get);

router.post('/',authenticate,upload.single('image'),studentController.student_post)

router.get('/:sortBy',studentController.student_sorting);

router.post('/filter', studentController.student_filter);

router.post('/profile',upload.single('image'),(req, res) => {
    console.log(req.body,req.file);
    res.send("it worked");
})

module.exports = router; 
