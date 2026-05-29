const express = require("express");
const router = express.Router();

const Patient = require("../models/Patient");

// CREATE PATIENT
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();

    res.json({
      message: "Patient registered",
      patient
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

// GET PATIENTS
router.get("/", async (req, res) => {
  const data = await Patient.find();
  res.json(data);
});

module.exports = router;