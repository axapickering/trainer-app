const mongoose = require('mongoose');
const User = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

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
 *  GET /:name
 *  expects route parameter name : name of user to be searched for
 *  returns user info or a message indicating user was not found
 */
router.get('/:name', async (req, res) => {
  try {
    const foundUser = await User.findOne({ name: req.params.name }).exec();
    res.json({ foundUser } || "User not found.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.");
  }
});


/**
 *  POST /
 *  expects req body { name, password }
 *  creates new user with given credentials (and hashes pass)
 *  errors if username already exists.
 */
router.post('/', async (req, res) => {
  try {
    let name = req.body.name;
    let password = await bcrypt.hash(req.body.password, 10);
    const foundUser = await User.findOne({ name }).exec();
    if (foundUser != null) {
      res.json(`Username ${name} already taken.`);
    } else {
      await User.create({ name, password });
      res.status(201).json(`User ${name} successfully created.`);
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.");
  }
});

/**
 *  DELETE /:name
 *  expects route parameter name : name of user to be deleted
 *  errors if the user is not found.
 */
router.delete('/:name', async (req, res) => {
  try {
    const name = req.params.name;
    await User.deleteMany({ name });
    res.send(`User ${name} deleted.`);

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.");
  }
});

module.exports = router;