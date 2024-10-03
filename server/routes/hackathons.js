import express from 'express';
import { getHackathon,getHackathonById } from '../controllers/hackathoncontroller.js';

const router = express.Router();

router.get('/', getHackathon);    
router.get('/:id',getHackathonById)    


export default router;
