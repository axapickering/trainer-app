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

/** Handle 404 errors*/
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Unhandled errors go here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  /* istanbul ignore next (ignore for coverage) */
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;