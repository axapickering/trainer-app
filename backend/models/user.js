const mongoose = require('mongoose');

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