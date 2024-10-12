import HackathonModel from "../models/HackathonModel.js";


// works Successfully
export const getHackathon = async (req, res) => {
    try {
        const allHackathons = await HackathonModel.find(); 
        res.status(200).json(allHackathons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving Hackathons', error });
    }
};

// works SuccessFully
export const getHackathonById = async (req, res) => {
    try {
        const { id } = req.params; 
        const hackathon = await HackathonModel.findById(id); 
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

