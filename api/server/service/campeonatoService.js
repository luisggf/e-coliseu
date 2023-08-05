const campsData = require("../data/campeonatoData");

exports.getCamps = function () {
  return campsData.getCamps();
};

exports.getCamp = async function (idCamp) {
  const camp = await campsData.getCamp(idCamp);
  if (!camp) {
    throw new Error("Campeonato não encontrado");
  }
  return campsData.getCamp(idCamp);
};

exports.saveCamp = async function (camp) {
  const existingCamp = await campsData.getCamp(camp.idCamp);
  if (existingCamp) {
    throw new Error("Campeonato já existe");
  }
  return campsData.saveCamp(camp);
};

exports.deleteCamp = async function (idCamp) {
  const existingCamp = await campsData.getCamp(idCamp);
  if (!existingCamp) {
    throw new Error("Campeonato não existe");
  }
  return campsData.deleteCamp(idCamp);
};

exports.updateCamp = async function (idCamp, camp) {
  await exports.getCamp(idCamp);
  return campsData.updateCamp(idCamp, camp);
};
