const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const patientRoutes = require("./routes/patientRoutes");

dotenv.config();
connectDB();

const app = express();   // ✅ MUST come FIRST

app.use(cors());
app.use(express.json());

// ROUTES (after app is created)
app.use("/auth", authRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send("MedQueue API Running");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});