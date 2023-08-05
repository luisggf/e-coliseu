const usersData = require("../data/usuarioData");

exports.getUsers = function () {
  return usersData.getUsers();
};

exports.getUser = async function (nomeUsuario) {
  const user = await usersData.getUser(nomeUsuario);
  if (!user) {
    throw new Error("Usuario não encontrado");
  }
  return usersData.getUser(nomeUsuario);
};

exports.saveUser = async function (user) {
  const existingUser = await usersData.getUser(user.nomeUsuario);
  if (existingUser) {
    throw new Error("Usuário já existe");
  }
  return usersData.saveUser(user);
};

exports.updateUser = async function (nomeUsuario, user) {
  await exports.getUser(nomeUsuario);
  return usersData.updateUser(nomeUsuario, user);
};

exports.deleteUser = async function (nomeUsuario) {
  const existingUser = await usersData.getUser(nomeUsuario);
  if (!existingUser) {
    throw new Error("Usuario não existe");
  }
  return usersData.deleteUser(nomeUsuario);
};