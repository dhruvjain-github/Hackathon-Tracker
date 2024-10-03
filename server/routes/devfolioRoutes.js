import express from "express";
import Hackathon from "../models/HackathonModel";
import axios from "axios";
import { updateHackathon } from "../controllers/admincontroller";

const router=express.Router()

const fetchHackathon=async (req,res)=>{
    try {
        const allHackathon =await axios.get("https://devfolio.co/hackathons")
        return  allHackathon.data

    } catch (error) {
        res.status(500).json("unable to fetch hackathon")
    }
}

const updateHackathon=async (req,res)=>{
    try {
        const allhackathons=await fetchHackathon()

        for(const hack of allhackathons)
        {
            const { id, name, description, location, startDate, endDate } = hack

            const existingHackathon = await Hackathon.findOne({id})
            if (existingHackathon) {
                // Update existing hackathon
                existingHackathon.name = name;
                existingHackathon.location = location;
                existingHackathon.startDate = startDate;
                existingHackathon.endDate = endDate;
                existingHackathon.participants = participants;
                existingHackathon.teamSize = teamSize;
                existingHackathon.registrationLink = registrationUrl;
                await existingHackathon.save();
            } else {
                
                await Hackathon.create({
                    id,
                    name,
                    location,
                    startDate,
                    endDate,
                    participants,
                    teamSize,
                    registrationLink: registrationUrl
                });
            }

        res.status(200).json({ message: 'Hackathons updated successfully' });
        }
    } catch (error) {
        res.status(500).json("unable to update hackathon")
    }
}

