const express = require("express");
const router = express.Router();
const Food = require("../models/Food");


router.post("/add", async (req, res) => {
  try {
    const { name, price, imageUrl } = req.body;
    const newFood = new Food({ name, price, imageUrl });
    await newFood.save();
    res.status(201).json({ message: "Food item added!", data: newFood });
  } catch (error) {
    res.status(500).json({ error: "Error adding food item" });
  }
});


router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: "Error fetching food items" });
  }
});

module.exports = router;
