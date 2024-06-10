"use strict";

const jwt = require("jsonwebtoken");
require("dotenv").config();

/** return signed JWT {username, isAdmin} from user data. */

function createToken(user) {
  let payload = {
    username: user.username
  };

  return jwt.sign(payload, process.env.SECRET_KEY);
}

module.exports = { createToken };
