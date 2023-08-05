const database = require("../infra/database");

exports.getCamps = function () {
  return database.query("SELECT * FROM campeonato");
};

exports.getCamp = function (idcamp) {
  return database.oneOrNone("SELECT * FROM campeonato WHERE idcamp = $1", [
    idcamp,
  ]);
};

// exports.getCampByNome = function (nomecamp) {
//   return database.oneOrNone("SELECT * FROM campeonato WHERE nomecamp = $1", [
//     nomecamp,
//   ]);
// };

exports.saveCamp = function (camp) {
  return database.one(
    "INSERT INTO campeonato (idCamp, nomeCamp, modalidade, jogo, qtdTimes) VALUES ($1, $2, $3, $4, $5) RETURNING*",
    [camp.idcamp, camp.nomecamp, camp.modalidade, camp.jogo, camp.qtdtimes]
  );
};

exports.updateCamp = function (idcamp, camp) {
  return database.none(
    "UPDATE CAMPEONATO SET nomeCamp = $1, modalidade = $2, jogo = $3, qtdtimes = $4 WHERE idcamp = $5",
    [camp.nomecamp, camp.modalidade, camp.jogo, camp.qtdtimes, idcamp]
  );
};

exports.deleteCamp = function (idcamp) {
  return database.none("DELETE FROM campeonato WHERE idcamp = $1", [idcamp]);
};
