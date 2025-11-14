import express from 'express';
import { getAllServices } from '../controllers/serviceController.js';

const router = express.Router();

// When a GET request comes to '/', use the getAllServices function
router.get('/', getAllServices);

export default router;
