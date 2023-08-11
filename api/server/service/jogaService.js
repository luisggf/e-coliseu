const jogaData = require('../data/jogaData');

exports.getJogos= function () {
  return jogaData.getJogos();
};

exports.getJogo = async function (PidPartida) {
  const jogo = await jogaData.getJogo(PidPartida);
  if (!jogo) {
    throw new Error("Jogo não encontrado");
  }
  return jogaData.getJogo(PidPartida);
};

exports.saveJogo = async function (jogo) {
  const existingJogo = await jogaData.getJogo(jogo.PidPartida);
  if (existingJogo) {
    throw new Error("Jogo já existe");
  }
  return jogaData.saveJogo(jogo);
};

exports.deleteJogo = async function (PidPartida) {
  const existingJogo = await jogaData.getJogo(PidPartida);
  if (!existingJogo) {
    throw new Error("Jogo não existe");
  }
  return jogaData.deleteJogo(PidPartida);
};