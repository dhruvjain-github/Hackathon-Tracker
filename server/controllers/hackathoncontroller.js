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
        const id = req.params;
        
        const deleted=await HackathonModel.findByIdAndDelete(id)
        if(!deleted)
        {
            res.status(404).json({message:"Hackathon not deleted"})
        }
        else
        {
            res.status(200).json(updated)
        }

    } catch (error) {
        res.status(500).json({ message: 'Error deleting Hackathon', error });
    }
}
