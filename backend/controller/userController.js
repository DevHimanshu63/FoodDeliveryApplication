import validator from "validator";
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken";




const generateToken=(email)=>{
    return jwt.sign({email},process.env.JWT_SECRET);
}


export const Login= async (req , res)=>{
    const {email , password} = req.body ;

    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(401).json({message:"User does not exist", success:false});
        }
        const isMatch= await password === user.password;
        if(isMatch){
            const token = generateToken(user.email);
            res.status(200).json({message:"Logged in successfully", success:true , token:token});
        }else{
            return res.status(401).json({message:"Incorrect password", success:false});
        }
    }catch(err){
        console.log(err);
        
    }

}




export const Signup= async(req , res)=>{
    const {name , email , password} = req.body;
    try{
        const exist = await userModel.findOne({email:email})
        if(exist){
            return res.status(400).json({message:"Email already exist", success:false});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:'Invalid email', success:false});
        }
        if(password.length < 7){
            return res.status(400).json({message:'Password too short', success:false});
        }
        const NewUser = new userModel({ 
                username: name,
                email: email,
                password: password
        })
        await NewUser.save();
        const token =  generateToken(email);
        res.status(200).json({message:"User created successfully", success:true , token:token});


    }catch(err){
        console.log(err);
        
    }

}