const express = require("express");
const cors = require("cors"); // Import CORS package
const mongoose = require("mongoose");
const dataRoutes = require("./routes/dataRoutes");
const adityaRoutes = require("./Routes/adityaRoutes");
const homeFirstBankRoutes = require("./Routes/homeFirstBankRoutes");

const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // Hardcoded port

// Hardcoded MongoDB URI (replace with your actual credentials)
const MONGO_URI = "mongodb://localhost:27017/data";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Middleware
app.use(cors());
app.use(express.json());
// Use CORS middleware to allow requests from different origins
app.use(bodyParser.json()); // Use bodyParser to handle JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Use bodyParser to handle form data

// Routes
app.use("/api", dataRoutes);
app.use("/api/aditya", adityaRoutes);
app.use("/api/first-bank", homeFirstBankRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
