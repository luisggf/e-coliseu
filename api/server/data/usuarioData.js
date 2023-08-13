const database = require("../infra/database");

exports.getUsers = function(){
  return database.query("SELECT nomeusuario, nome, sobrenome, TO_CHAR(dataNascimento, 'YYYY-MM-DD') as dataNascimento, TidTime FROM USUARIO");
}

exports.getUser = function (nomeusuario) {
  return database.oneOrNone("SELECT * FROM usuario WHERE nomeUsuario = $1", [
    nomeusuario,
  ]);
};

exports.saveUser = function (user) {
  return database.one(
    "INSERT INTO USUARIO (nomeUsuario, nome, sobrenome, dataNascimento, TidTime) VALUES ($1, $2, $3, $4, $5) RETURNING*",
    [user.nomeusuario, user.nome, user.sobrenome, user.datanascimento, user.tidtime]
  );
};

exports.updateUser = function (nomeusuario, user) {
  return database.none(
    "UPDATE USUARIO SET nome = $1, sobrenome = $2, dataNascimento = $3, TidTime = $4 WHERE nomeUsuario = $5",
    [user.nome, user.sobrenome, user.datanascimento, user.tidtime, nomeusuario]
  );
};

exports.deleteUser = function (nomeusario) {
  return database.none("DELETE FROM USUARIO WHERE nomeUsuario = $1", [nomeusario]);
};