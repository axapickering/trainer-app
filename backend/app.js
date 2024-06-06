"use strict";
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./routes/user');


const app = express();


// Middleware for logging, json parsing etc
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// MongoDB connection string
const mongoURI = process.env.URI;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


app.use('/users', userRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));