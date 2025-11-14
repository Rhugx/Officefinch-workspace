import express from "express";
import { saveContact, getAllContacts } from "../controllers/contactController.js";
const router = express.Router();

// Save new contact message
router.post("/", saveContact);

// Fetch all contact messages
router.get("/", getAllContacts);

export default router;
