const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors');
const studentRouter = require('./Routes/studentRouter');
const app = express()

// connect to mongoDB
const dbUrl = "mongodb+srv://m2406:whJaqTam7AwRUut@cluster0.9gkt2.mongodb.net/TNP";

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) => app.listen(9000, () =>{
    console.log('hello listening on port 9000 mayank');
}))
.catch((err) => {console.log(err)})


// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/students',studentRouter);


app.get('/', (req, res) => res.send('Home Page'));