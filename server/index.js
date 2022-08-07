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

// socket server
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connect");
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
  socket.on("ping", () => {
    io.emit("pong");
  });
});

http.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
