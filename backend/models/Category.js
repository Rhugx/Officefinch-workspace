import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  colorTheme: { type: String, required: true },
  // --- NEW FIELD ADDED ---
  // This follows the exact same pattern as your Service.js model
  subCategories: { type: [String], default: [] },
});

export default mongoose.model('Category', categorySchema);

