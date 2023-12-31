CREATE TABLE CAMPEONATO(
idCamp SERIAL PRIMARY KEY NOT NULL UNIQUE,
nomeCamp varchar(20) UNIQUE,
modalidade varchar(3),
jogo varchar(20) NOT NULL,
qtdTimes smallint NOT NULL
);

CREATE TABLE TEAM(
idTime SERIAL PRIMARY KEY NOT NULL UNIQUE,
nomeTime varchar(15) NOT NULL UNIQUE,
treinador varchar(20),
CidCamp smallint,
FOREIGN KEY(CidCamp) REFERENCES CAMPEONATO (idCamp)
	ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE USUARIO(
nomeUsuario varchar(16) PRIMARY KEY NOT NULL,
nome varchar(15) NOT NULL,
sobrenome varchar(30),
dataNascimento date,
TidTime smallint,
FOREIGN KEY(TidTime) REFERENCES TEAM(idTime)
	ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE PARTIDA(
idPartida SERIAL NOT NULL UNIQUE,
duracao varchar(6),
mapa varchar(30),
CidCamp smallint NOT NULL,
PRIMARY KEY(idPartida, CidCamp),
FOREIGN KEY(CidCamp) REFERENCES CAMPEONATO(idCamp)
	ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE JOGA(
PidPartida SERIAL NOT NULL,
UnomeUsuario varchar(16) NOT NULL UNIQUE,
PRIMARY KEY(PidPartida, UnomeUsuario),
FOREIGN KEY(PidPartida) REFERENCES PARTIDA(idPartida)
	ON UPDATE CASCADE
	ON DELETE CASCADE,
FOREIGN KEY(UnomeUsuario) REFERENCES USUARIO (nomeUsuario)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);