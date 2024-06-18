"use strict";

const  { User } = require("../models/user");
const express = require("express");
const router = new express.Router();
const { createToken } = require("../helpers/tokens");
const { BadRequestError, UnauthorizedError } = require("../expressError");
const bcrypt = require("bcrypt");

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;


/** POST /auth/token:  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 *
 * Authorization required: none
 */

router.post("/token", async function (req, res, next) {

  try {

    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();
    console.log(user);

    const isUser = bcrypt.compare(user.password, BCRYPT_WORK_FACTOR);
    if (!isUser) throw new UnauthorizedError("Incorrect login.");

    const token = createToken(user);
    return res.json({ token });

  } catch (err) {
    return res.send(err);
  }
});

