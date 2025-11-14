import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import all routes
import contactRoutes from './routes/contactRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// ----------------------------------------------------------------
// ✅ STATIC FRONTEND SERVING FIX (this solves "File Not Found")
// ----------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve all files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Optional: make sure routes like /categories.html and /products.html load
app.get('/*.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', req.path));
});

// Fallback route: if someone just opens "/", serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});
// ----------------------------------------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

