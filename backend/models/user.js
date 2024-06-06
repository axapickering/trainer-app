const mongoose = require('mongoose');

/**
 *  Mongoose schema for User model
 *  Allows us to perform CRUD operations on users
 */

const UserSchema = new mongoose.Schema({
  name: String,
  exercises: [{
    name: String,
    password: String,
    maxWeights: {
      oneRepMax: Number,
      threeRepMax: Number,
      fiveRepMax: Number,
      eightRepMax: Number,
      tenRepMax: Number,
      twelveRepMax: Number,
    },
    maxReps: Map
  }]
});

module.exports = mongoose.model('User', UserSchema);