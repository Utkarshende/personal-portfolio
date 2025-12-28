const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST: Save message to MongoDB
router.post('/', async (req, res) => {
  const { from_name, reply_to, message } = req.body;

  try {
    const newMessage = new Message({
      from_name,
      reply_to,
      message
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ error: "Failed to save message to database." });
  }
});

module.exports = router;