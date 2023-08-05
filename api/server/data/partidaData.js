const database = require("../infra/database");

exports.getPartidas = function(){
  return database.query("SELECT * FROM PARTIDA");
};

exports.getPartida = function (idpartida) {
  return database.oneOrNone("SELECT * FROM PARTIDA WHERE idpartida = $1", [
    idpartida,
  ]);
};

exports.savePartida = function (partida) {
  return database.one(
    "INSERT INTO PARTIDA (idPartida, duracao, mapa, CidCamp) VALUES ($1, $2, $3, $4) RETURNING*",
    [partida.idpartida, partida.duracao, partida.mapa, partida.cidcamp]
  );
};

exports.updatePartida = function (idpartida, partida) {
  return database.none(
    "UPDATE PARTIDA SET duracao = $1, mapa = $2, CidCamp = $3 WHERE idPartida = $4",
    [partida.duracao, partida.mapa, partida.cidcamp, idpartida]
  );
};

exports.deletePartida = function (idpartida) {
  return database.none("DELETE FROM PARTIDA WHERE idPartida = $1", [idpartida]);
};