const mongoose = require('mongoose');
const { User } = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

/**
 *  GET /
 *  returns json of all users' usernames
 *
 */
router.get('/', async (req, res) => {
  try {
    let data = await User.find().exec();
    // excluding all data other than username
    data = data.map(user => user.username);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.");
  }
});

/**
 *  GET /:username
 *  expects route parameter username : username of user to be searched for
 *  returns user info or a message indicating user was not found
 */
router.get('/:username', async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.params.username }).exec();
    res.json({ foundUser } || "User not found.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.");
  }
});

router.post('/login', async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username }).exec();
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.");
  }
});


/**
 *  POST /register
 *  expects req body { username, password }
 *  creates new user with given credentials (and hashes pass)
 *  errors if username already exists or missing username/password
 */
router.post('/register', async (req, res) => {

  try {
    let username = req.body.username;
    let password = await bcrypt.hash(req.body.password, BCRYPT_WORK_FACTOR);

    await User.create({ username, password });
    return res.status(201).json(`User ${username} successfully created.`);

  } catch (err) {
    console.error(err);
    return res.json(err.message);
  }
});

/**
 *  DELETE /:username
 *  expects route parameter username : username of user to be deleted
 *  errors if the user is not found.
 */
router.delete('/:username', async (req, res) => {
  try {
    const username = req.params.username;
    await User.deleteMany({ username });
    res.send(`User ${username} deleted.`);

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.");
  }
});

module.exports = router;