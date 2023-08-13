// USUARIO ADDITION

// Function to handle form submission and add usuario to the table
async function handleAddUsuario() {
  const url_usuario = "http://localhost:3000/usuario";
  const nomeusuario = document.getElementById("campoUName").value;
  const nome = document.getElementById("campoUNome").value;
  const sobrenome = document.getElementById("campoUSobrenome").value;
  const datanascimento = document.getElementById("campoUNascimento").value;
  const tidtime = document.getElementById("campoUIdTime").value;

  const errorMessageElement = document.getElementById("error-message-jogador");
  errorMessageElement.textContent = '';

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
      const errorMessageElement = document.getElementById("error-message-jogador");
      errorMessageElement.textContent = "Erro ao adicionar o usuário. Por favor, verifique as informações e tente novamente.";
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
async function handleDeleteUsuario(nomeusuario) {
  const errorMessageElement = document.getElementById("error-message-jogador");
  errorMessageElement.textContent = '';
  try {
    const response = await fetch(`${url_usuario}/${nomeusuario}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-jogador");
      errorMessageElement.textContent = "Erro ao deletar o usuario. Por favor, verifique as informações e tente novamente.";
      throw new Error("Failed to delete usuario");
    }

    // If the usuario is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#usuario-table tbody");
    const deletedRow = tableBody.querySelector(`tr[data-id="${nomeusuario}"]`);
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

async function handleUpdateUsuario() {
  const nomeusuario = document.getElementById("campoUName").value;
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
    const response = await fetch(`http://localhost:3000/usuario/${nomeusuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioData),
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-jogador");
      errorMessageElement.textContent = "Erro ao atualizar o usuario. Por favor, verifique as informações e tente novamente.";
      throw new Error("Failed to update usuario");
    }

    // If the usuario is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#usuario-table tbody");
    const updateRow = tableBody.querySelector(`tr[data-id="${nomeusuario}"]`);
    if (updateRow) {
      const cells = updateRow.querySelectorAll("td"); // Obtém todas as células da linha

  // Atualiza os valores das células com as informações atualizadas
      cells[1].textContent = nome;
      cells[2].textContent = sobrenome;
      cells[3].textContent = datanascimento;
      cells[4].textContent = tidtime;
    }
    const errorMessageElement = document.getElementById("error-message-jogador");
    errorMessageElement.textContent = '';
    await getAllUsuarios();
  } catch (error) {
    console.error("Error updating usuario:", error);
  }
}

const updateUsuarioButton = document.querySelector(
  "#pop-up-modal-player .btn-update"
);
updateUsuarioButton.addEventListener("click", handleUpdateUsuario);

// USUARIO END

// PARTIDA ADITION
// Function to handle form submission and add partida to the table
async function handleAddPartida() {
  const idpartida = document.getElementById("campoIDPtd").value;
  const duracao = document.getElementById("campoduracao").value;
  const mapa = document.getElementById("campomapa").value;
  const cidcamp = document.getElementById("campoIDcampeonato").value;

  const errorMessageElement = document.getElementById("error-message-partida");
    errorMessageElement.textContent = '';

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
      const errorMessageElement = document.getElementById("error-message-partida");
      errorMessageElement.textContent = "Erro ao adicionar a partida. Por favor, verifique as informações e tente novamente.";
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
  const errorMessageElement = document.getElementById("error-message-partida");
  errorMessageElement.textContent = '';
  try {
    const response = await fetch(`http://localhost:3000/partida/${idPartida}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-partida");
      errorMessageElement.textContent = "Erro ao deletar a partida. Por favor, verifique as informações e tente novamente.";
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

async function handleUpdatePartida() {
  const idpartida = document.getElementById("campoIDPtd").value;
  const duracao = document.getElementById("campoduracao").value;
  const mapa = document.getElementById("campomapa").value;
  const cidcamp = document.getElementById("campoIDcampeonato").value;

  const partidaData = {
    idpartida: parseInt(idpartida),
    duracao: duracao,
    mapa: mapa,
    cidcamp: parseInt(cidcamp),
  };

  try {
    const response = await fetch(`http://localhost:3000/partida/${idpartida}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partidaData),
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-partida");
      errorMessageElement.textContent = "Erro ao atualizar a partida. Por favor, verifique as informações e tente novamente.";
      throw new Error("Failed to update partida");
    }

    // If the usuario is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#partidas-table tbody");
    const updateRow = tableBody.querySelector(`tr[data-id="${idpartida}"]`);
    if (updateRow) {
      const cells = updateRow.querySelectorAll("td"); // Obtém todas as células da linha

  // Atualiza os valores das células com as informações atualizadas
      cells[1].textContent = idpartida;
      cells[2].textContent = duracao;
      cells[3].textContent = mapa;
      cells[4].textContent = cidcamp;
    }
    const errorMessageElement = document.getElementById("error-message-partida");
    errorMessageElement.textContent = '';
    await getAllPartidas();
  } catch (error) {
    console.error("Error updating partida:", error);
  }
}

const updatePartidaButton = document.querySelector(
  "#pop-up-modal-part .btn-update"
);
updatePartidaButton.addEventListener("click", handleUpdatePartida);

// END PARTIDA ADDITION

// CAMP ADDITION

// Function to handle form submission and add camp to the table
async function handleAddCamp() {
  const idcamp = document.getElementById("campoIDCampeonato").value;
  const nomeCamp = document.getElementById("campocampNome").value;
  const modalidade = document.getElementById("campomodalidade").value;
  const jogo = document.getElementById("campojogo").value;
  const qtdtimes = document.getElementById("campoqtdTimes").value;

  const errorMessageElement = document.getElementById("error-message-camp");
  errorMessageElement.textContent = '';

  const campData = {
    idcamp: parseInt(idcamp),
    nomecamp: nomeCamp,
    modalidade: modalidade,
    jogo: jogo,
    qtdtimes: parseInt(qtdtimes),
  };

  try {
    const response = await fetch("http://localhost:3000/camps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campData),
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-camp");
      errorMessageElement.textContent = "Erro ao adicionar o campeonato. Por favor, verifique as informações e tente novamente.";
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
  const errorMessageElement = document.getElementById("error-message-camp");
  errorMessageElement.textContent = '';
  try {
    const response = await fetch(`http://localhost:3000/camps/${idCamp}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-camp");
      errorMessageElement.textContent = "Erro ao deletar o campeonato. Por favor, verifique as informações e tente novamente.";
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

async function handleUpdateCamp() {
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

  try {
    const response = await fetch(`http://localhost:3000/camps/${idcamp}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campData),
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-camp");
      errorMessageElement.textContent = "Erro ao atualizar o campeonato. Por favor, verifique as informações e tente novamente.";
      throw new Error("Failed to update camp");
    }

    // If the usuario is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#camp-table tbody");
    const updateRow = tableBody.querySelector(`tr[data-id="${idcamp}"]`);
    if (updateRow) {
      const cells = updateRow.querySelectorAll("td"); // Obtém todas as células da linha

  // Atualiza os valores das células com as informações atualizadas
      cells[1].textContent = idcamp;
      cells[2].textContent = nomeCamp;
      cells[3].textContent = modalidade;
      cells[4].textContent = jogo;
      cells[5].textContent = qtdtimes;
    }
    const errorMessageElement = document.getElementById("error-message-camp");
    errorMessageElement.textContent = '';
    await getAllCamps();
  } catch (error) {
    console.error("Error updating campeonato:", error);
  }
}

const updateCampButton = document.querySelector(
  "#pop-up-modal-camp .btn-update"
);
updateCampButton.addEventListener("click", handleUpdateCamp);

// CAMP ADDITION END

// CAMP TEAM

// Function to handle form submission and add time to the table
async function handleAddTeam() {
  const idtime = document.getElementById("campotime").value;
  const nometime = document.getElementById("campoTnome").value;
  const treinador = document.getElementById("campotreinador").value;
  const cidcamp = document.getElementById("campoIdcamp").value;

  const errorMessageElement = document.getElementById("error-message-team");
    errorMessageElement.textContent = '';

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
      const errorMessageElement = document.getElementById("error-message-team");
      errorMessageElement.textContent = "Erro ao adicionar o time. Por favor, verifique as informações e tente novamente.";
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
  const errorMessageElement = document.getElementById("error-message-team");
  errorMessageElement.textContent = '';
  try {
    const response = await fetch(`http://localhost:3000/times/${tidtime}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-team");
      errorMessageElement.textContent = "Erro ao deletar o time. Por favor, verifique as informações e tente novamente.";
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

async function handleUpdateTeam() {
  const idtime = document.getElementById("campotime").value;
  const nometime = document.getElementById("campoTnome").value;
  const treinador = document.getElementById("campotreinador").value;
  const cidcamp = document.getElementById("campoIdcamp").value;

  const teamData = {
    idtime: parseInt(idtime),
    nometime: nometime,
    treinador: treinador,
    cidcamp: parseInt(cidcamp)
  };

  try {
    const response = await fetch(`http://localhost:3000/times/${idtime}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });

    if (!response.ok) {
      const errorMessageElement = document.getElementById("error-message-team");
      errorMessageElement.textContent = "Erro ao atualizar o time. Por favor, verifique as informações e tente novamente.";
      throw new Error("Failed to update team");
    }

    // If the usuario is deleted successfully, update the table without fetching all data again
    const tableBody = document.querySelector("#times-table tbody");
    const updateRow = tableBody.querySelector(`tr[data-id="${idtime}"]`);
    if (updateRow) {
      const cells = updateRow.querySelectorAll("td"); // Obtém todas as células da linha

  // Atualiza os valores das células com as informações atualizadas
      cells[1].textContent = idtime;
      cells[2].textContent = nometime;
      cells[3].textContent = treinador;
      cells[4].textContent = cidcamp;
    }
    const errorMessageElement = document.getElementById("error-message-team");
    errorMessageElement.textContent = '';
    await getAllTimes();
  } catch (error) {
    console.error("Error updating team:", error);
  }
}

// const timeTableBodyUpdate = document.querySelector("#times-table tbody");
// timeTableBodyUpdate.addEventListener("click", async (event) => {
//   if (event.target.classList.contains("btn-update")) {
//     const idtime = event.target.getAttribute("data-id");
//     handleUpdateTeam(idtime);
//   }
// });
const updateTeamButton = document.querySelector(
  "#pop-up-modal-team .btn-update"
);
updateTeamButton.addEventListener("click", handleUpdateTeam);
// CAMP TEAM END