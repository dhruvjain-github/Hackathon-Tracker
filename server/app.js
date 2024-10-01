import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import hackathons from "./routes/hackathons.js"
import  auth from "./routes/auth.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/hackathons',hackathons);
app.use('/api/auth',auth);


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,            useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.error(`MongoDB connection error: ${error.message}`));
