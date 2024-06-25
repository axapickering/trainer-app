const mongoose = require('mongoose');
const { ExerciseSchema } = require('./exercise');

/**
 *  Mongoose schema for User model
 *  Allows us to perform CRUD operations on users
 */

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username required."],
    unique: [true],
    minlength: [3,"Username must be at least 3 characters."],
    maxlength: [16,"Username must be less than 16 characters."]
  },
  password: {
    type: String,
    required: [true, "Password required."],
    minlength: [6,"Password must be at least 6 characters."],
    maxlength: [30,"Password must be less than 30 characters."]
  },
  exerciseCategories: [
    {
      category: { type: String, required: true },
      exercises: [ExerciseSchema]
    }
  ]
});


module.exports = {
  User: mongoose.model('User', UserSchema)
}