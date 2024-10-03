import UserModel from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {

    try {
        const { username, email, password, role } = req.body;

        if (typeof password !== 'string') {
            return res.status(400).json({ message: "Password must be a string" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(password, salt)

        const newuser = await UserModel.create({
            username,
            email,
            password: hashedpass,
            role
        });

        const token=jwt.sign(
            {id:newuser._id},
            process.env.JWT_SECRET,
            {expiresIn: '2h' }
        )

        res.status(200).json({newuser:{
            id:newuser._id,
            username:newuser.username,
            email:newuser.email
        },token})

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error })
    }
}


export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const existingUser= await UserModel.findOne({email})
        if(!existingUser)
        {
            res.status(404).json({message:"invalid Credentials!"})
        }

        const ispassword= await bcrypt.compare(password,existingUser.password)
        if(!ispassword)
        {
            res.status(404).json({message:"invalid Credentials!"})
        }

        const token=jwt.sign(
            {id:existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn: '2h' }
        )

        res.status(200).json({newuser:{
            id:newuser._id,
            username:newuser.username,
            email:newuser.email
        },token})

    } catch (error) {
        res.status(500).json({ message: 'Error login user', error })
    }
}


export const getuserbyid=async (req,res)=>{
    try {
        const userid=req.params.id
        const user= await UserModel.findById(userid).select('-password')
        if(!user)
        {
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: 'Error finding the user', error })
    }
}
