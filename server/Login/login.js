import express from 'express';
import User from '../Model/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const loginRouter = async(req,res)=>  {
    try{ 
  const {email, password}= req.body
  const cleanEmail = email.trim();
  
  const user = await User.findOne({ email: cleanEmail });
 
  if(!user){
    return res.status(400).json({message: "User not found"})
  }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    
    if(!isPasswordValid){
      return res.status(400).json({message: "Invalid password"})
    }
    const token = jwt.sign({id: user._id, email: user.email, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'})
    res.status(200).json({message: "Login successful", token, user: { id: user._id, email: user.email, role: user.role}})
   
} catch (err) {
  console.error(err);
  res.status(500).json({ error: "Server error" });
}

}