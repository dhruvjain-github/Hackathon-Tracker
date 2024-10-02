import express from "express"
import {getalluser,deleteHackathon,deleteuser,updateHackathon,createHackathon} from '../controllers/admincontroller'
import {isadmin} from '../middleware/adminmiddleware'
import {protect} from '../middleware/authMiddleware'

const router=express.Router()

router.use(isadmin)
router.use(protect)

router.get('/users',getalluser)
router.delete('/user/:id',deleteuser)
router.post('/hackathon', createHackathon);     
router.patch('/hackathon/:id', updateHackathon);  
router.delete('/hackathon/:id', deleteHackathon);  

export default router