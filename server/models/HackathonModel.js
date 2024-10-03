import mongoose from 'mongoose';

// Defining the hackathon schema with your requirements
const hackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  participants: { type: Number, required: true },
  prize: { type: String, default: "will be revealed at hackathon" }, // Default value added
  teamSize: { type: Number, required: true },
  problemStatement: { type: String, default: "will be revealed at hackathon" }, // Default value added
  registrationLink: { type: String, required: true }
}, { timestamps: true });

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

export default Hackathon;
