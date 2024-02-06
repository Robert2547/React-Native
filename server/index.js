require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.js";

const morgan = require("morgan"); // HTTP request logger middleware for node.js
const app = express(); // create express app

mongoose // Connect to MongoDB
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error: ", err));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// routes middleware
app.use("/api", authRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
