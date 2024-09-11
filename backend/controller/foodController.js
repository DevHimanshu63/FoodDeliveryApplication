import foodModel from "../models/foodModel.js";

export const AddFood = async ( req , res) =>{
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




