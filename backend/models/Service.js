import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  mainCategory: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // We'll store an icon name to tell the frontend what to display
  icon: {
    type: String,
    required: true,
  },
  // The array of strings for your sub-categories
  subCategories: {
    type: [String],
    default: [],
  },
});

export default mongoose.model('Service', serviceSchema);
