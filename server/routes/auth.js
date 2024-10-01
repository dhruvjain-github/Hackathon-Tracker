import express from 'express';
const router = express.Router();

// Example route for user login
router.post('/login', (req, res) => {
    res.send('Login successful');
});

export default router;
