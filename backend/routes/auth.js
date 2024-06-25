"use strict";

const  { User } = require("../models/user");
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const { BadRequestError, UnauthorizedError } = require("../expressError");
const bcrypt = require("bcrypt");

/** POST /auth/login  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/login", async function (req, res, next) {

  try {

    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();

    if (user === null) throw new BadRequestError("User does not exist.");

    console.log(user);

    const isUser = await bcrypt.compare(password, user.password);

    if (!isUser) throw new UnauthorizedError("Incorrect login info.");

    const token = createToken(user);
    return res.json({ token });

  } catch (err) {
    return res.send({ err : "Incorrect login info."});
  }
});

module.exports = router;
