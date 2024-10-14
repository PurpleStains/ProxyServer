import express from 'express'
import fetchMeteors from '../meteorsController.js';

const router = express.Router();
router.get('/meteors', fetchMeteors);

export default router;