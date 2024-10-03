import express from 'express';
import {signup,login,getuserbyid} from '../controllers/usercontroller'
import {protect} from '../middleware/authMiddleware'
const router = express.Router();


router.post('/register', signup);
router.post('/login',login);
router.get('/profile',protect,getuserbyid)

export default router;
