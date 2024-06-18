const mongoose = require('mongoose');

/**
 *  Mongoose schema for Exercise model
 *  Helps decompose from User model
 */

const ExerciseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Exercise name not supplied."],
      minLength: [3],
      maxLength: [20]
    },
    maxWeights: {
      oneRepMax: Number,
      threeRepMax: Number,
      fiveRepMax: Number,
      eightRepMax: Number,
      tenRepMax: Number,
      twelveRepMax: Number,
    },
    maxReps: Map
});

module.exports = {
  ExerciseSchema,
  Exercise : mongoose.model('exercise', ExerciseSchema)
};