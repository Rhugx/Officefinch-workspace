import Service from '../models/Service.js';

// Define the data from your plan. We'll add this if the DB is empty.
const seedData = [
  {
   mainCategory: 'Office & Breakroom', 
   description: 'Everything from stationery and printing paper to coffee, snacks, and organizational tools. Reliable restocking and inventory management.', 
   icon: 'pencil',
   subCategories: ['Office Supplies', 'Furniture', 'Breakroom Items'], // Corresponds to the icon in your HTML subCategories: ['Office Supplies', 'Furniture', 'Breakroom Items'], 
    // // Clear relationship: Maps to "Printing Media" and "Ergonomics & Seating" popular categories
    
  },
  {
    mainCategory: 'IT & Electronics',
    description: 'Bulk procurement of monitors, cables, peripherals, and custom IT hardware bundles. Direct shipping and setup logistics.',
    icon: 'laptop', // Corresponds to the icon in your HTML
    subCategories: [
      'Computer Accessories',
      'Networking Devices',
      'Printers & Scanners',
    ],
    // Clear relationship: Maps to "Printer Cartridges" and "Accessories & Peripherals" popular categories
  },
  {
    mainCategory: 'Janitorial & Safety',
    description: 'Bulk cleaning supplies, sanitizers, safety equipment, and restroom essentials. Ensuring a healthy and compliant workplace environment.',
    icon: 'broom', // Corresponds to the icon in your HTML
    subCategories: ['Cleaning Equipment', 'Safety Gear', 'Emergency Tools'],
    // Clear relationship: Maps to dedicated janitorial products (no popular category overlap)
  },
];

// This function will get all services
export const getAllServices = async (req, res) => {
  try {
    // Check if there is any data.
    const count = await Service.countDocuments();

    // If no data, insert the seed data.
    if (count == 0) {
      console.log('No services found. Seeding database...');
      await Service.insertMany(seedData);
    }

    // Now, find all services (including the new seed data if it was just added)
    const services = await Service.find();

    res.status(200).json({ success: true, data: services });
  } catch (err) {
    console.error('Error in getAllServices:', err.message);
    res
      .status(500)
      .json({ success: false, message: 'Server Error: ' + err.message });
  }
};