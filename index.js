require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const authRoute = require('./routes/authRoute');

// Cors Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoute);

// Port Listener
app.listen(PORT, () => {
    console.log("Server is running at PORT 8080");
});