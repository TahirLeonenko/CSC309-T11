const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Configure CORS
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use('', routes);

module.exports = app;