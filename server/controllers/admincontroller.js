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

export const createHackathon = async (req, res) => {
    try {
        const { name, location, startDate, endDate, participants, prize, teamSize, problemStatement, registrationLink } = req.body

        const newHack = await HackathonModel({ name, location, startDate, endDate, participants, prize, teamSize, problemStatement, registrationLink })

        await newHack.save()
        res.status(201).json(newHack);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating Hackathons', error })

    }
}


export const updateHackathon = async (req, res) => {
    try {
        const id = req.params;
        const { name, location, startDate, endDate, participants, prize, teamSize, problemStatement, registrationLink } = req.body;
        const updated=await HackathonModel.findByIdAndUpdate(id,
            { name, location, startDate, endDate, participants, prize, teamSize, problemStatement, registrationLink },
            { new: true }
        )
        if(!updated)
        {
            res.status(404).json({message:"Hackathon not updated"})
        }
        else
        {
            res.status(200).json(updated)
        }

    } catch (error) {
        res.status(500).json({ message: 'Error updating Hackathon', error });
    }

}

export const deleteHackathon=async(req,res)=>{
    try {
        const hackid = req.params.id;
        
        const deleted=await HackathonModel.findByIdAndDelete(hackid)
        if(!deleted)
        {
            res.status(404).json({message:"Hackathon not deleted"})
        }
        else
        {
            res.status(200).json({message:"hackathon deleted"})
        }

    } catch (error) {
        res.status(500).json({ message: 'Error deleting Hackathon', error });
    }
}