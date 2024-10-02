import UserModel from '../models/UserModel'

export const isadmin=async (req,res,next)=>{
    if (req.user && req.user.role === 'admin') {
        next(); 
    } 
    else {
        res.status(403).json({ message: 'Not authorized as admin' });
    }
}