const pgp = require("pg-promise")();
const db = pgp({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 3000,
  database: "postgres",
});

module.exports = db;
