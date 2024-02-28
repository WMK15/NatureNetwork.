require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1);
  });

const app = express();

// Use JSON middleware to automatically parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// use router to connect to routes/birthdays.js
const postRouter = require("./routes/feed");
app.use("/api/feed", postRouter);

app.listen(PORT, () => console.log("Server started on port 3000"));
