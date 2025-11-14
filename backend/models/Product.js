import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  // This is the main service category (e.g., "Office & Breakroom")
  category: { type: String, required: true },
  
  // --- NEW FIELD ADDED ---
  // This is the specific supply type (e.g., "Printing Media")
  supplyType: { type: String, required: true }, 
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

export default mongoose.model('Product', productSchema);

