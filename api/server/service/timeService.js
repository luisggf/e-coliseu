const timesData = require('../data/timeData');

exports.getTimes= function () {
  return timesData.getTimes();
};

exports.getTime = async function (idTime) {
  const time = await timesData.getTime(idTime);
  if (!time) {
    throw new Error("Time não encontrado");
  }
  return timesData.getTime(idTime);
};

exports.saveTime = async function (time) {
  const existingTime = await timesData.getTime(time.idTime);
  if (existingTime) {
    throw new Error("Time já existe");
  }
  return timesData.saveTime(time);
};

exports.updateTime = async function (idTime, time) {
  await exports.getTime(idTime);
  return timesData.updateTime(idTime, time);
};

exports.deleteTime = async function (idTime) {
  const existingTime = await timesData.getTime(idTime);
  if (!existingTime) {
    throw new Error("Time não existe");
  }
  return timesData.deleteTime(idTime);
};