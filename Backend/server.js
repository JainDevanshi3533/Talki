require('dotenv').config();
const userRouter= require( './routes/userRoutes.js');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true});
const db= mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open', ()=> console.log('connected to database'))


app.use(express.json());

app.use('/user', userRouter);

app.listen(3000,()=> console.log("server started"));