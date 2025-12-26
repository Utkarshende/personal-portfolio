const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: '*', // For now, this allows any frontend to talk to your backend
    methods: ['GET', 'POST']
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Portfolio DB Connected'))
    .catch(err => console.log(err));

// Simple Schema to save messages from recruiters
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: "Message sent successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to send message" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));