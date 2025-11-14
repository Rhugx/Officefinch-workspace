import Category from '../models/Category.js';

// Sample data to seed the database
// NOTE: I standardized the image path for 'PAPER' to match the naming convention 
// of the other files (using a hyphen and the .jpg extension).
const sampleCategories = [
    {
        title: 'PAPER',
        name: 'Printing Media',
        description:
            'A4, Legal, recycled stock, custom letterheads, and high-volume specialty papers.',
        // IMPORTANT FIX: Changed from productpaper.jpeg to product-paper.jpg
        imageUrl: 'assets/img/products/product-paper.jpg', 
        colorTheme: 'orange',
        subCategories: [
            'A4 Copy Paper',
            'Legal & Letter Paper',
            'Photo Paper',
            'Cardstock & Specialty',
        ],
    },
    {
        title: 'INK & TONER',
        name: 'Printer Cartridges',
        description:
            'OEM and compatible toner/ink for all major printer brands with fast delivery options.',
        imageUrl: 'assets/img/products/product-ink.jpg',
        colorTheme: 'purple',
        subCategories: [
            'HP Ink & Toner',
            'Canon Ink & Toner',
            'Epson Ink & Toner',
            'Brother Ink & Toner',
        ],
    },
    {
        title: 'FURNITURE',
        name: 'Ergonomics & Seating',
        description:
            'Desks, ergonomic chairs, standing desk converters, and full office buildouts.',
        imageUrl: 'assets/img/products/product-chair.jpg',
        colorTheme: 'orange',
        subCategories: [
            'Ergonomic Office Chairs',
            'Standing Desks',
            'Filing Cabinets',
            'Conference Tables',
        ],
    },
    {
        title: 'TECH GEAR',
        name: 'Accessories & Peripherals',
        description:
            'Keyboards, mice, monitors, and networking gear to keep your office connected.',
        imageUrl: 'assets/img/products/product-tech.jpg',
        colorTheme: 'purple',
        subCategories: [
            'Keyboards & Mice',
            'Monitors & Stands',
            'Cables & Adapters',
            'Networking Gear',
        ],
    },
    {
    title: 'FACILITY CARE',
    name: 'Facility Maintenance',
    description:
        'Cleaning, housekeeping, and utility supplies to maintain a safe and hygienic workspace.',
    imageUrl: 'assets/img/products/product-facility.jpg',
    colorTheme: 'orange',
    subCategories: [
        'Cleaning & Hygiene',
        'Housekeeping & Disposables',
        'Utility & Power',
    ],
},

];

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
// Renamed function to 'getAllCategories' for consistency with other controllers (e.g., serviceController)
const getAllCategories = async (req, res) => {
    try {
        // Check if there are any categories in the database
        const count = await Category.countDocuments();

        // If no categories, seed the database
        if (count === 0) {
            console.log('No categories found. Seeding database...');
            await Category.insertMany(sampleCategories);
            console.log('Database seeded with categories successfully.');
        }

        // Fetch all categories (either the newly seeded ones or existing ones)
        const categories = await Category.find({});
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Server error fetching categories' });
    }
};

export { getAllCategories };
