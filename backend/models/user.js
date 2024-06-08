const mongoose = require('mongoose');

/**
 *  Mongoose schema for User model
 *  Allows us to perform CRUD operations on users
 */

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  exercises: [{
    name: String,
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