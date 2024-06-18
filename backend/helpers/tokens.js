"use strict";

const jwt = require("jsonwebtoken");
require("dotenv").config();

/** return signed JWT { username } from user data. */

function createToken(user) {

  return jwt.sign(
    { username: user.username },
    process.env.SECRET_KEY);
}

module.exports = { createToken };
