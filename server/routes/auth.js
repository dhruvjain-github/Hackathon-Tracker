import express from 'express';
import {signup,login,getuserbyid} from '../controllers/usercontroller.js'
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router();


router.post('/signup', signup);
router.post('/login',login);
router.get('/profile',protect,getuserbyid)

export default router;
