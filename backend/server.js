console.log("Server starting...");

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors());
app.use(express.json());

/* ---------------- DEBUG HANDLERS ---------------- */
process.on("uncaughtException", (err) => {
  console.log("❌ UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.log("❌ UNHANDLED REJECTION:", err);
});

/* ---------------- ROUTES ---------------- */
try {
  app.use("/patients", require("./routes/patientRoutes"));
  app.use("/appointments", require("./routes/appointmentRoutes"));
  app.use("/auth", require("./routes/authRoutes"));
} catch (err) {
  console.log("❌ ROUTE IMPORT ERROR:", err);
}

/* ---------------- ROOT ROUTE ---------------- */
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

/* ---------------- MONGODB CONNECTION ---------------- */
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.log("❌ MONGO_URI is missing in environment variables");
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});