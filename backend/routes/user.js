const mongoose = require('mongoose');
const User = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

/**
 *  GET /
 *  returns json of all users
 *
 */
router.get('/', async (req, res) => {
  try {
    const userInstances = await User.find().exec();
    res.json( { userInstances } );
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


/**
 *  POST /
 *  expects req body { username, password }
 *  creates new user with given credentials (and hashes pass)
 *  errors if username already exists or missing username/password
 */
router.post('/', async (req, res) => {
  try {

    if (!('username' in req.body ) || !('password' in req.body)) {
      return res.json("Username and password required.");
    }

    let username = req.body.username;
    let password = await bcrypt.hash(req.body.password, BCRYPT_WORK_FACTOR);

    const foundUser = await User.findOne({ username }).exec();
    if (foundUser != null) {
      return res.json(`Username ${username} already taken.`);
    } else {
      await User.create({ username, password });
      return res.status(201).json(`User ${username} successfully created.`);
    }

  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error.");
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