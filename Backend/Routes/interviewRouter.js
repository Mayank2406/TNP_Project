const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');
const authenticate = require('../middlewares/authenticate');

router.get('/',interviewController.get_interview);

router.get('/:id',interviewController.show_interview);

router.post('/',authenticate,interviewController.post_interview);

router.put('/:id',(req,res) => {
    console.log("in the put route");
})

module.exports = router;