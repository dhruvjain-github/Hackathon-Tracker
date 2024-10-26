import UserModel from '../models/UserModel.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    try {
        const { username, email, password, role, profilePic } = req.body;

        if (typeof password !== 'string') {
            return res.status(400).json({ message: "Password must be a string" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password, salt);

        const newUser = await UserModel.create({
            username,
            email,
            password: hashedpass,
            role,
            profilePic // Save profile picture URL
        });

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        res.status(200).json({
            newUser: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic // Include profilePic in the response
            },
            token
        });

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "Invalid credentials!" });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(404).json({ message: "Invalid credentials!" });
        }

        const token = jwt.sign(
            { id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        res.status(200).json({
            id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email,
            profilePic: existingUser.profilePic, // Include profilePic in the response
            token
        });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: 'Error logging in user', error });
    }
}

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error finding the user', error });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updates = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            updates,
            { new: true }
        ).select('-password'); // Exclude password from response

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: 'Error updating user', error });
    }
};
