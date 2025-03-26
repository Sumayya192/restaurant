const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


router.post("/", async (req, res) => {
  try {
    const { name, price, imageUrl, type } = req.body;
    if (!name || !price || !type) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newOrder = new Order({ 
      name, 
      price, 
      imageUrl: imageUrl || "default-image-url", 
      type 
  });
      await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to place order." });
  }
});


router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders." });
  }
});

module.exports = router;
