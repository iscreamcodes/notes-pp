import User from "../Model/userModel.js";
import bcrypt from 'bcryptjs';


export const createUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
      
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: "User already exists"});
        }
        if (!req.user || req.user.role !== "admin") {
            role = "member";
          }
      
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            ...req.body,
            password: hashedPassword
        });
        const savedUser = await newUser.save();        
        const { password: _, ...userWithoutPassword } = savedUser.toObject();

        res.status(201).json({ 
            message: "User created successfully", 
            user: userWithoutPassword 
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
   
}
export const getUsers = async(req, res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
       
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}
export const deleteUser = async(req, res)=>{
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        if(!deletedUser){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({message: "User deleted successfully", user: deletedUser})
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}