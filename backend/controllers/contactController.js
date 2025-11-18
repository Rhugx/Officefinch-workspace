import nodemailer from "nodemailer";
import Contact from '../models/Contact.js';

// -----------------------------------------------------
// 📩 Save a contact message (and send email notification)
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

    // ---------- Send email notification ----------
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // send to yourself
        subject: "📩 New Enquiry",
        html: `
          <h3>New Enquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          <hr/>
          <p>Received at: ${new Date().toLocaleString()}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      // optional: console.log("Email sent");
    } catch (mailErr) {
      console.error("❌ Error sending email notification:", mailErr.message);
      // Do NOT fail the whole request if email fails — contact saved in DB already.
    }

    // ---------- Respond to frontend ----------
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
