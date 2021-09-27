const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const methodOverride = require('method-override');

require('dotenv').config();


const studentRouter = require('./Routes/studentRouter');
const interviewRouter = require('./Routes/interviewRouter');
const registerRouter = require('./Routes/registerRouter');
const loginRouter  = require('./Routes/loginRouter');
const resetRouter  = require('./Routes/resetRouter');
const app = express();
const PORT = process.env.PORT || 9000;
// connect to mongoDB

const dbUrl = "mongodb+srv://m2406:whJaqTam7AwRUut@cluster0.9gkt2.mongodb.net/TNP";

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    }))
    .catch((err) => { console.log(err) })


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));

app.use('/students', studentRouter);
app.use('/interviews', interviewRouter);


app.use('/students',studentRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/reset',resetRouter)
app.get('/', (req, res) => res.send('Home Page'));