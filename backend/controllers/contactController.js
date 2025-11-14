import Contact from '../models/Contact.js';

// -----------------------------------------------------
// 📩 Save a contact message
// -----------------------------------------------------
export const saveContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Message saved successfully!',
    });
  } catch (err) {
    console.error('❌ Save contact error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Error saving message: ' + err.message,
    });
  }
};

// -----------------------------------------------------
// 📋 Get all contact messages (for admin dashboard)
// -----------------------------------------------------
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (err) {
    console.error('❌ Get contacts error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts: ' + err.message,
    });
  }
};
