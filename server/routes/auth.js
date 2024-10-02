import express from 'express';
import {singup,login,getuserbyid} from '../controllers/usercontroller'
import {protect} from '../middleware/authMiddleware'
const router = express.Router();


router.post('/register', singup);
router.post('/login',login);
router.get('/profile',protect,getuserbyid)

export default router;
