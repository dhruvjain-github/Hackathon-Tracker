import express from 'express';
import { getHackathon,getHackathonByid,createHackathon,updateHackathon,deleteHackathon } from '../controllers/hackathoncontroller.js';

const router = express.Router();

router.get('/', getHackathon);    
router.get('/:id',getHackathonByid)    
router.post('/', createHackathon);     
router.patch('/:id', updateHackathon);  
router.delete('/:id', deleteHackathon);  

export default router;
