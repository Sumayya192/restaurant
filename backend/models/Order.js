const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: false },
  type: { type: String, enum: ["takeout", "dine-in"], required: true },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
