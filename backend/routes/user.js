const mongoose = require('mongoose');
const User = require('../models/user');
const express = require('express');

const router = express.Router();

router.get('/', async (req,res) => {
  try {
    const userInstances = await User.find().exec();
    console.log(userInstances);
    res.json(userInstances);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.")
  }
})

router.post('/', async (req,res) => {
  try {
    let name = req.body.name;
    await User.create({name});
    res.json(`User ${name} successfully created.`)
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error.")
  }
})

module.exports = router;