import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js"

const register = async (req,res) => {
    console.log("Registering User",req.body);
    if(!req.body|| !req.body.name  || !req.body.email || !req.body.password){
        return res.status(400).json({message: "name, email and password are required"});
    }
    const {name,email,password} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    try{
        const savedUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        console.log("Saved user:",savedUser);
        return res.status(200).json({message: 'user registered successfully:', user: savedUser});
    } catch (error) {
        console.error("Error saving user:",error);
        return res.status(500).json({message: "Error saving user"});
    }
};

const login = async (req,res) => {
    console.log("Logging in user:",req.body);
    if(!req.body || !req.body.name || !req.body.email || !req.body.password){
        return res.status(400).json({message: "name, email and password are required"});
    }

    const {name, email, password} = req.body;

    try{
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        console.log("User logged in successfully:",user.email);
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({message: "Login successful", token});
    } catch (error){
        console.error("Error logging in user:",error);
        return res.status(500).json({message: `Error logging in user: ${error}`})
    }
}

export default {register,login};