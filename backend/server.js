import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import UserRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
const app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


//connection db
connectDb();


//api endpoints
app.use('/api/food',foodRouter);
app.use('/api/user',UserRoute);
app.use('/images',express.static('uploads'))

//import routes
app.get('/', (req , res)=>{
    res.send('Hello World');
})



app.listen('4000',()=>{
    console.log('Server running on port 4000');
});