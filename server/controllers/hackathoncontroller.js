import HackathonModel from "../models/HackathonModel.js";

export const getHackathon = async (req, res) => {
    try {
        const allHackathon = await HackathonModel.find();
        res.status(200).json(allHackathon)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving Hackathons', error })
    }
}

export const getHackathonByid = async (req, res) => {
    try {
        const { id } = req.params;
        const Hackid = await HackathonModel.findById(id)
        if (!Hackid) {
            return res.status(404).json({ message: 'Hackathon not found' });
        }
        else {
            return res.status(201).json(Hackid)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving Hackathons', error })
    }
}
