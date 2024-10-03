import HackathonModel from "../models/HackathonModel.js";

export const getHackathon = async (req, res) => {
    try {
        const allHackathons = await HackathonModel.find(); // Fetch all hackathons
        res.status(200).json(allHackathons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving Hackathons', error });
    }
};


export const getHackathonById = async (req, res) => {
    try {
        const { id } = req.params; // Extract id from params
        const hackathon = await HackathonModel.findById(id); // Find hackathon by ID

        if (!hackathon) {
            res.status(404).json({ message: 'Hackathon not found' });
        } else {
            res.status(200).json(hackathon);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving Hackathon', error });
    }
};

