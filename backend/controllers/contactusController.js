import ContactUs from "../models/contactusModel.js";

// Get all contact messages
export const getAllContactMessages = async (req, res) => {
  try {
    const contactMessages = await ContactUs.findAll();
    res.json(contactMessages);
  } catch (error) {
    console.error("Error getting contact messages:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a contact message by ID
export const getContactMessageById = async (req, res) => {
  try {
    const contactMessage = await ContactUs.findByPk(req.params.id);
    if (contactMessage) {
      res.json(contactMessage);
    } else {
      res.status(404).json({ message: "Contact message not found" });
    }
  } catch (error) {
    console.error("Error getting contact message by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Create a new contact message
export const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContactMessage = await ContactUs.create({
      name,
      email,
      phone,
      message,
    });
    res.status(201).json(newContactMessage);
  } catch (error) {
    console.error("Error creating contact message:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update a contact message
export const updateContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contactMessage = await ContactUs.findByPk(req.params.id);
    if (contactMessage) {
      contactMessage.name = name;
      contactMessage.email = email;
      contactMessage.phone = phone;
      contactMessage.message = message;
      await contactMessage.save();
      res.json(contactMessage);
    } else {
      res.status(404).json({ message: "Contact message not found" });
    }
  } catch (error) {
    console.error("Error updating contact message:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a contact message
export const deleteContactMessage = async (req, res) => {
  try {
    const contactMessage = await ContactUs.findByPk(req.params.id);
    if (contactMessage) {
      await contactMessage.destroy();
      res.json({ message: "Contact message deleted" });
    } else {
      res.status(404).json({ message: "Contact message not found" });
    }
  } catch (error) {
    console.error("Error deleting contact message:", error);
    res.status(500).json({ message: error.message });
  }
};
