const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");
const authMiddleware = require("../middleware/authMiddleware");

// CREATE
router.post("/", authMiddleware, async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();

    res.json({ message: "Created", appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get("/", authMiddleware, async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;