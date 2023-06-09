import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app=express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));


app.use('/posts',postRoutes);

// const CONNECTION_URL='mongodb+srv://rakeshreddysr:tatfortat2408@cluster0.bt09rz3.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT} sucessfully`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);