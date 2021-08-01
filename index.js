const express =require('express');
const dotenv =require('dotenv');
const colors =require('colors');
const morgan =require('morgan');
const mongoose =require('mongoose');

const students=require('./routes/students');
const mentors=require('./routes/mentors');
const batches=require('./routes/batches');
const app=express();
const PORT=5000;
const url = "mongodb://localhost/fsdclassData";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));
app.use(express.json());
app.use('/students',students);
app.use('/mentors',mentors);
app.use('/batches',batches);
app.listen(PORT,()=>console.log('The Server is started'+PORT))