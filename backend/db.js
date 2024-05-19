/** Database setup for users. */

const { Client } = require("pg");

const DB_URI = process.env.NODE_ENV === "test"  // 1
    ? "postgresql:///simple_users_test"
    : "postgresql:///simple_users";

let db = new Client({
  connectionString: DB_URI
});

db.connect();                                   // 2

module.exports = db;  