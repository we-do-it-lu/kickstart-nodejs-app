const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  paidAt: {
    type: Date,
  },
  deliveredAt: {
    type: Date,
  },

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
