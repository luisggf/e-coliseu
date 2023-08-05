const database = require("../infra/database");

exports.getTimes = function () {
  return database.query("SELECT * FROM TEAM");
};

exports.getTime = function (idtime) {
  return database.oneOrNone("SELECT * FROM TEAM WHERE idTime = $1", [
    idtime,
  ]);
};

exports.saveTime = function (time) {
  return database.one(
    "INSERT INTO TEAM (idTime, nomeTime, treinador, CidCamp) VALUES ($1, $2, $3, $4) RETURNING*",
    [time.idtime, time.nometime, time.treinador, time.cidcamp]
  );
};

exports.updateTime = function (idTime, time) {
  return database.none(
    "UPDATE TEAM SET nomeTime = $1, treinador = $2, CidCamp = $3 WHERE idTime = $4",
    [time.nometime, time.treinador, time.CidCamp, idTime]
  );
};

exports.deleteTime = function (idtime) {
  return database.none("DELETE FROM TEAM WHERE idtime = $1", [idtime]);
};