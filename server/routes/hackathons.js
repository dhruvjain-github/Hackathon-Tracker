import express from 'express';
import { getHackathon,getHackathonByid,createHackathon,updateHackathon,deleteHackathon } from '../controllers/hackathoncontroller.js';

const router = express.Router();

router.get('/', getHackathon);    
router.get('/:id',getHackathonByid)    


export default router;
