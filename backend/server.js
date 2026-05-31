console.log("Server starting...");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/patients", require("./routes/patientRoutes"));
app.use("/appointments", require("./routes/appointmentRoutes"));
app.use("/auth", require("./routes/authRoutes"));

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});