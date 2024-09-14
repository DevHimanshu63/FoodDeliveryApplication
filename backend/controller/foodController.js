import foodModel from "../models/foodModel.js";
import fs  from "fs";
export const AddFood = async ( req , res) =>{
    console.log("Add food", req.body);
    if(!req.file){
        return res.status(400).json({ message: "No file uploaded", success: false });
    }
    const image = req.file.filename;
    const {name , price , description , category} = req.body;
    console.log(req.body);
    
    try{
        const food =  new foodModel({
            name: name,
            price: price,
            description: description,
            category: category,
            image:image
        })
        await food.save();
    res.status(200).json({message:"food saved successfully" , success:true});
    }catch(e){
        console.log(e)
        res.status(400).json({message:"food is not saved successfully" , success:false});
    }
}

export const getList =async( req , res )=>{
    try{
        const foods =  await foodModel.find({});
        res.status(200).json({message:"food successfully fetched" , data:foods , success:true});
    }catch(err){
        console.log(err);
        res.status(401).json({message:"food successfully not fetched" , success:false});
    }
}

export const removeFood = async(req  , res )=>{
    const {id} = req.query;
    try{    
        const food = await foodModel.findById(id);
        fs.unlink(`uploads/${food.image}` , ()=>{});
        await foodModel.findByIdAndDelete(id);
        res.status(200).json({message:"food successfully removed" , success:true});
    }catch(err){
        console.log(err);
        res.status(401).json({message:"food successfully not removed" , success:false});
        
    }
}




