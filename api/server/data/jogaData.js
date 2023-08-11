const database = require("../infra/database");

exports.getJogos = function () {
  return database.query("SELECT * FROM JOGA");
};

exports.getJogo = function (Pidpartida) {
  return database.oneOrNone("SELECT * FROM JOGA WHERE PidPartida = $1", [
    Pidpartida
  ]);
};

exports.saveJogo = function (jogo) {
  return database.one(
    "INSERT INTO JOGA (PidPartida, UnomeUsuario) VALUES ($1, $2) RETURNING*",
    [jogo.pidpartida, jogo.unomeusuario]
  );
};

exports.deleteJogo = function (pidpartida) {
  return database.none("DELETE FROM JOGA WHERE PidPartida = $1", [pidpartida]);
};