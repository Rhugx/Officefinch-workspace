import express from 'express';
import { getProducts } from '../controllers/productController.js';

const router = express.Router();

// This one route handles BOTH:
// 1. GET /api/products (which gets all products)
// 2. GET /api/products?category=... (which gets filtered products)
router.get('/', getProducts);

export default router;
