const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from_name: { 
    type: String, 
    required: true 
  },
  reply_to: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Message', messageSchema);