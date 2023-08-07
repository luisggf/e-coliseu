const pgp = require("pg-promise")();
const db = pgp({
  user: "postgres",
  password: "8546",
  host: "localhost",
  port: 5432,
  database: "tp_bd",
});

module.exports = db;
