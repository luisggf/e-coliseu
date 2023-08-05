const partidasData = require("../data/partidaData");

exports.getPartidas = function () {
  return partidasData.getPartidas();
};

exports.getPartida = async function (idPartida) {
  const partida = await partidasData.getPartida(idPartida);
  if (!partida) {
    throw new Error("Partida não encontrado");
  }
  return partidasData.getPartida(idPartida);
};

exports.savePartida = async function (partida) {
  const existingPartida = await partidasData.getPartida(partida.idPartida);
  if (existingPartida) {
    throw new Error("Partida já existe");
  }
  return partidasData.savePartida(partida);
};

exports.deletePartida = async function (idPartida) {
  const existingPartida = await partidasData.getPartida(idPartida);
  if (!existingPartida) {
    throw new Error("Partida não existe");
  }
  return partidasData.deletePartida(idPartida);
};

exports.updatePartida = async function (idPartida, partida) {
  await exports.getPartida(idPartida);
  return partidasData.updatePartida(idPartida, partida);
};