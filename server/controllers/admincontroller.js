import UserModel from '../models/UserModel.js'
import HackathonModel from "../models/HackathonModel.js";

export const getalluser=async (req,res)=>{
    try {
        const alluser = await UserModel.find();
        if(alluser<=0)
        {
            res.status(404).json({messasge:"No user exist"})
        }
        else
        {
            res.status(200).json(alluser)
        }
    } catch (error) {
        res.status(500).json({messasge:"not able to get all user",error})
    }
}

export const deleteuser=async(req,res)=>{
    try {
        const userid=req.params.id;
        const deleteduser= await UserModel.findByIdAndDelete(id)
        if(!deleteduser)
            {
                res.status(404).json({message:"user not deleted"})
            }
            else
            {
                res.status(200).json({message:"user deleted"})
            }
    
    } catch (error) {
        res.status(500).json({ message: 'Error in deleting users', error })
    }
}

// wroks Successfully
export const createHackathon = async (req, res) => {
    
    try {
        const { name, location, startDate, endDate, participants, prize, teamSize, problemStatement, registrationLink } = req.body;

        const existingHack= await HackathonModel.findOne({name,location,startDate,endDate})
        
        if(existingHack)
        {
            return res.status(409).json({message:"hackathon already exist"})
        }

        const newHackathon = await HackathonModel.create({
            name,
            location,
            startDate,
            endDate,
            participants,
            prize: prize || "will be revealed at hackathon", 
            teamSize,
            problemStatement: problemStatement || "will be revealed at hackathon",
            registrationLink
        });

        res.status(201).json(newHackathon);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating Hackathon', error });
    }
};


export const updateHackathon = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, location, startDate, endDate, participants, prize, teamSize, problemStatement, registrationLink } = req.body;

        const updatedHackathon = await HackathonModel.findByIdAndUpdate(
            id,
            {
                name,
                location,
                startDate,
                endDate,
                participants,
                prize: prize || "will be revealed at hackathon", 
                teamSize,
                problemStatement: problemStatement || "will be revealed at hackathon", 
                registrationLink
            },
            { new: true } 
        );

        if (!updatedHackathon) {
            res.status(404).json({ message: "Hackathon not updated" });
        } else {
            res.status(200).json(updatedHackathon);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating Hackathon', error });
    }
};


export const deleteHackathon = async (req, res) => {
    try {
        const hackid = req.params.id; 

        const deletedHackathon = await HackathonModel.findByIdAndDelete(hackid);
        if (!deletedHackathon) {
            res.status(404).json({ message: "Hackathon not deleted" });
        } else {
            res.status(200).json({ message: "Hackathon deleted" });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Hackathon', error });
    }
};
