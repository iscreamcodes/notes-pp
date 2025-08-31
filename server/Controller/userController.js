import User from "../Model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: "User already exists"});
        }
        const savedUser = await newUser.save();
        res.status(201).json({message: "User created successfully", user: savedUser});

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
   
}