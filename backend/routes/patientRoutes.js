const express = require("express");
const router = express.Router();

const Patient = require("../models/Patient");


// ADD PATIENT
router.post("/", async (req, res) => {

    try {

        const patient = new Patient(req.body);

        const savedPatient = await patient.save();

        res.json(savedPatient);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
});


// GET ALL PATIENTS
router.get("/", async (req, res) => {

    try {

        const patients = await Patient.find();

        res.json(patients);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
});


// DELETE PATIENT
router.delete("/:id", async (req, res) => {

    try {

        await Patient.findByIdAndDelete(req.params.id);

        res.json({ message: "Patient Deleted" });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
});

module.exports = router;