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

/**
 *  Mongoose schema for User model
 *  Allows us to perform CRUD operations on users
 */

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username required."],
    unique: [true, "Username taken."],
    minLength: [4,"Username must be more than 4 characters."],
    maxLength: [16,"Username must be less than 16 characters."]
  },
  password: {
    type: String,
    required: [true, "Password required."]
  },
  exercises: [ExerciseSchema]
});


module.exports = {
  User: mongoose.model('User', UserSchema),
  Exercise: mongoose.model('Exercise', ExerciseSchema)
}