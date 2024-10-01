import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  participants: { type: Number, required: true },
  prize: { type: String, required: true },
  teamSize: { type: Number, required: true },
  problemStatement: { type: String, required: true },
  registrationLink: { type: String, required: true }
}, { timestamps: true });

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

export default Hackathon;
