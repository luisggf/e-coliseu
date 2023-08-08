// USUARIO ADDITION

// Function to handle form submission and add usuario to the table
async function handleAddUsuario() {
  const url_usuario = "http://localhost:3000/usuario";
  const nomeusuario = document.getElementById("campoUName").value;
  console.log(nomeusuario);
  const nome = document.getElementById("campoUNome").value;
  const sobrenome = document.getElementById("campoUSobrenome").value;
  const datanascimento = document.getElementById("campoUNascimento").value;
  const tidtime = document.getElementById("campoUIdTime").value;

  const usuarioData = {
    nomeusuario: nomeusuario,
    nome: nome,
    sobrenome: sobrenome,
    datanascimento: datanascimento,
    tidtime: parseInt(tidtime),
  };

  try {
    const response = await fetch(url_usuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioData),
    });

    if (!response.ok) {
      throw new Error("Failed to add usuario");
    }

    // If the usuario is added successfully, update the table with the new data
    await getAllUsuarios();
  } catch (error) {
    console.error("Error adding usuario:", error);
  }
}

// Attach the event listener to the "Adicionar time" button
const addUsuarioButton = document.querySelector(
  "#pop-up-modal-player .btn-primary"
);
addUsuarioButton.addEventListener("click", handleAddUsuario);

// Function to handle deletion of usuario
async function handleDeleteUsuario(username) {
  try {
    const response = await fetch(`${url_usuario}/${username}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete usuario");
    }

    // If the usuario is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#usuario-table tbody");
    const deletedRow = tableBody.querySelector(`tr[data-id="${username}"]`);
    if (deletedRow) {
      tableBody.removeChild(deletedRow);
    }
    await getAllUsuarios();
  } catch (error) {
    console.error("Error deleting usuario:", error);
  }
}

// Attach event listener to delete button clicks
const usuariosTableBody = document.querySelector("#usuario-table tbody");
usuariosTableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-delete")) {
    const username = event.target.getAttribute("data-id");
    handleDeleteUsuario(username);
  }
});

// USUARIO END

// PARTIDA ADITION
// Function to handle form submission and add partida to the table
async function handleAddPartida() {
  const idpartida = document.getElementById("campoIDPtd").value;
  const duracao = document.getElementById("campoduracao").value;
  const mapa = document.getElementById("campomapa").value;
  const cidcamp = document.getElementById("campoIDcampeonato").value;
  console.log(cidcamp);

  const partidaData = {
    idpartida: parseInt(idpartida),
    duracao: duracao,
    mapa: mapa,
    cidcamp: parseInt(cidcamp),
  };

  try {
    const response = await fetch("http://localhost:3000/partida", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partidaData),
    });

    if (!response.ok) {
      throw new Error("Failed to add partida");
    }

    // If the partida is added successfully, update the table with the new data
    await getAllPartidas();
  } catch (error) {
    console.error("Error adding partida:", error);
  }
}

// Attach the event listener to the "Adicionar partida" button
const addPartidaButton = document.querySelector(
  "#pop-up-modal-part .btn-primary"
);
addPartidaButton.addEventListener("click", handleAddPartida);

// Function to handle deletion of partida
async function handleDeletePartida(idPartida) {
  try {
    const response = await fetch(`http://localhost:3000/partida/${idPartida}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete partida");
    }

    // If the partida is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#partidas-table tbody");
    const deletedRow = tableBody.querySelector(`tr[data-id="${idPartida}"]`);
    if (deletedRow) {
      tableBody.removeChild(deletedRow);
    }
  } catch (error) {
    console.error("Error deleting partida:", error);
  }
}
// Attach event listener to delete button clicks
const partidasTableBody = document.querySelector("#partidas-table tbody");
partidasTableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-delete")) {
    const idPartida = event.target.getAttribute("data-id");
    handleDeletePartida(idPartida);
  }
});

// END PARTIDA ADDITION

// CAMP ADDITION

// Function to handle form submission and add camp to the table
async function handleAddCamp() {
  const idcamp = document.getElementById("campoIDCampeonato").value;
  const nomeCamp = document.getElementById("campocampNome").value;
  const modalidade = document.getElementById("campomodalidade").value;
  const jogo = document.getElementById("campojogo").value;
  const qtdtimes = document.getElementById("campoqtdTimes").value;

  const campData = {
    idcamp: parseInt(idcamp),
    nomecamp: nomeCamp,
    modalidade: modalidade,
    jogo: jogo,
    qtdtimes: parseInt(qtdtimes),
  };
  console.log(idcamp);
  console.log(qtdtimes);

  try {
    const response = await fetch("http://localhost:3000/camps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campData),
    });

    if (!response.ok) {
      throw new Error("Failed to add camp");
    }

    // If the camp is added successfully, update the table with the new data
    await getAllCamps();
  } catch (error) {
    console.error("Error adding camp:", error);
  }
}

// Attach the event listener to the "Adicionar campeonato" button
const addCampButton = document.querySelector("#pop-up-modal-camp .btn-primary");
addCampButton.addEventListener("click", handleAddCamp);

// CAMP ADDITION END

// CAMP DELETE BEGIN
async function handleDeleteCamp(idCamp) {
  try {
    const response = await fetch(`http://localhost:3000/camps/${idCamp}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete camp");
    }

    // If the camp is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#camp-table tbody");
    const deletedRow = tableBody.querySelector(`tr[data-id="${idCamp}"]`);
    if (deletedRow) {
      tableBody.removeChild(deletedRow);
    }
  } catch (error) {
    console.error("Error deleting camp:", error);
  }
}

const tableBody = document.querySelector("#camp-table tbody");
tableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-delete")) {
    const idCamp = event.target.getAttribute("data-id");
    handleDeleteCamp(idCamp);
  }
});
// CAMP DELETE END

// CAMP ADDITION END

// CAMP TEAM

// Function to handle form submission and add time to the table
async function handleAddTeam() {
  const idtime = document.getElementById("campotime").value;
  const nometime = document.getElementById("campoTnome").value;
  const treinador = document.getElementById("campotreinador").value;
  const cidcamp = document.getElementById("campoIdcamp").value;

  const teamData = {
    idtime: parseInt(idtime),
    nometime: nometime,
    treinador: treinador,
    cidcamp: parseInt(cidcamp),
  };

  try {
    const response = await fetch("http://localhost:3000/times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });

    if (!response.ok) {
      throw new Error("Failed to add team");
    }

    // If the team is added successfully, update the table with the new data
    await getAllTimes();
  } catch (error) {
    console.error("Error adding team:", error);
  }
}
// Attach the event listener to the "Adicionar time" button
const addTeamButton = document.querySelector("#pop-up-modal-team .btn-primary");
addTeamButton.addEventListener("click", handleAddTeam);
// END OF THE FUNCTION TO ADD

// BEGIN OF THE FUNCTION TO DELETE

async function handleDeleteTeam(tidtime) {
  try {
    const response = await fetch(`http://localhost:3000/times/${tidtime}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete team");
    }

    // If the team is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#times-table tbody");
    const deletedRow = tableBody.querySelector(`tr[data-id="${tidtime}"]`);
    if (deletedRow) {
      tableBody.removeChild(deletedRow);
    }
    await getAllTimes();
  } catch (error) {
    console.error("Error deleting team:", error);
  }
}

// CAMP TEAM END

getAllTimes();
getAllCamps();
getAllPartidas();
