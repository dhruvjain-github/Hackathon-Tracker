import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('List of hackathons');
});

export default router;
