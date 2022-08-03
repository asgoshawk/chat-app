require("dotenv").config();
const express = require("express");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.status(200).json("Hello");
});

// API Routes
app.use("/api/user", require("./routes/userRoute"));

// Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
