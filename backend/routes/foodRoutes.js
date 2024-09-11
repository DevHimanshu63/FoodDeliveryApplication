import express from "express";
import { AddFood } from "../controller/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image store Engine

const storage = multer.diskStorage({
    destination:'uploads/',
    filename: (req,file,cb) => {
        return cb(null , `${Date.now()}_${file.originalname}`);
    }
});



const upload = multer({ storage:storage });

foodRouter.post('/add', upload.single("image") , AddFood) ;



export default foodRouter;