import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
const app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());


//connection db
connectDb();


//api endpoints
app.use('/api/food',foodRouter);

//import routes
app.get('/', (req , res)=>{
    res.send('Hello World');
})



app.listen('4000',()=>{
    console.log('Server running on port 4000');
});