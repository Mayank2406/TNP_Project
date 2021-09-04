const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors');
const studentRouter = require('./Routes/studentRouter');
const registerRouter = require('./Routes/registerRouter');
const loginRouter  = require('./Routes/loginRouter');
const app = express();
const PORT = process.env.PORT || 9000;
// connect to mongoDB

const dbUrl = "mongodb+srv://m2406:whJaqTam7AwRUut@cluster0.9gkt2.mongodb.net/TNP";

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) => app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
}))
.catch((err) => {console.log(err)})


// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/students',studentRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);

app.get('/', (req, res) => res.send('Home Page'));