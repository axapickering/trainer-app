"use strict";

require('dotenv').config();
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../expressError");

function authenticateJWT(req, res, next) {
  const authHeader = req.headers?.authorization;
  if (authHeader) {
    const token = authHeader.replace(/^[Bb]earer /, "").trim();

    try {
      res.locals.user = jwt.verify(token, SECRET_KEY);
    } catch (err) {
      /* ignore invalid tokens (but don't store user!) */
    }
  }
  return next();

}

// middleware to ensure the user is logged in before continuing
function ensureLoggedIn(req, res, next) {
  if (res.locals.user?.username) return next();
  throw new UnauthorizedError("Must be logged in to access this route.");
}

/**
 *  Middleware to ensure user is either an admin or the
 *  subject of the route they are trying to access.
 *
 *  Raises Unauthorized if user is denied.
 */
function ensureCorrectUser(req, res, next) {
  const username = req.params.username;
  if (res.locals.user?.username === username | res.locals.user?.username === "admin") {
    return next();
  }
  throw new UnauthorizedError
    ("You are not authorized to access this route. (Incorrect user)");
}
