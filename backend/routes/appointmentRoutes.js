const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");


// BOOK APPOINTMENT
router.post("/", async (req, res) => {

    try {

        const appointment = new Appointment(req.body);

        const savedAppointment = await appointment.save();

        res.json(savedAppointment);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
});


// GET APPOINTMENTS
router.get("/", async (req, res) => {

    try {

        const appointments = await Appointment.find();

        res.json(appointments);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
});


// DELETE APPOINTMENT
router.delete("/:id", async (req, res) => {

    try {

        await Appointment.findByIdAndDelete(req.params.id);

        res.json({ message: "Appointment Deleted" });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
});

module.exports = router;