import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genToken from "../utils/token.js"

const signUp = async (req,res) => {
  try{
    const{fullName,email,password,mobile,role}
  =req.body  
  const user=await User.findOne({email})
  if(user){
    return res.status(400).json({message:"User Already Exist."})
  }
  if(password.length<6){
    return res.status(400).json({message:"Password Must Be Atleast 6 Characters."})
  }
  if(mobile.length<10){
    return res.status(400).json({message:"Mobile Number Must Be Atleast 10 Digits."})
  }

  const hashedPassword= await bcrypt.hash(password,10)
  user=await User.create({
    fullName,
    email,
    role,
    mobile,
    password:hashedPassword
  })

  const token= await genToken(user._id)

}
  catch(error){

  }
}