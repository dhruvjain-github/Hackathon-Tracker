import express from "express"
import {getalluser,deleteHackathon,deleteuser,updateHackathon,createHackathon} from '../controllers/admincontroller.js'
import {isadmin} from '../middleware/adminmiddleware.js'
import {protect} from '../middleware/authMiddleware.js'

const router=express.Router()

// router.use(isadmin)
// router.use(protect)

router.get('/users',getalluser)
router.delete('/user/:id',deleteuser)
router.post('/hackathon', createHackathon);     
router.patch('/hackathon/:id', updateHackathon);  
router.delete('/hackathon/:id', deleteHackathon);  

export default router