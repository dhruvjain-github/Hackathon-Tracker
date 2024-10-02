import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  participants: { type: Number, required: true },
  prize: { type: String, required: true,default:"will be revealed at hackathon " },
  teamSize: { type: Number, required: true },
  problemStatement: { type: String, required: true,default:"will be revealed at hackathon " },
  registrationLink: { type: String, required: true }
}, { timestamps: true });

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

export default Hackathon;
