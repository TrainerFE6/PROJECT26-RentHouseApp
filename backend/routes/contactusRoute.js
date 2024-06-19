// routes/contactUsRoute.js
import express from "express";
import {
  getAllContactMessages,
  getContactMessageById,
  createContactMessage,
  updateContactMessage,
  deleteContactMessage,
} from "../controllers/contactusController.js";

const router = express.Router();

// GET all contact messages
router.get("/contact-messages", getAllContactMessages);

// GET contact message by ID
router.get("/contact-messages/:id", getContactMessageById);

// POST create new contact message
router.post("/contact-messages", createContactMessage);

// PUT update contact message by ID
router.put("/contact-messages/:id", updateContactMessage);

// DELETE contact message by ID
router.delete("/contact-messages/:id", deleteContactMessage);

export default router;
