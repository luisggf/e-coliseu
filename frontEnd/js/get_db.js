const url_camps = "http://localhost:3000/camps";
const url_partidas = "http://localhost:3000/partida";
const url_times = "http://localhost:3000/times";
const url_usuario = "http://localhost:3000/usuario";
const campsContainer = document.querySelector("#modal-camp-contents");
const partidasContainer = document.querySelector("#modal-part-contents");
const timesContainer = document.querySelector("#modal-times-content");
const usuarioContainer = document.querySelector("#modal-user-content");

// ...

// Function to fetch and display all camps
async function getAllCamps() {
  try {
    const response = await fetch(url_camps);
    const camps = await response.json();
    const tableBody = document.querySelector("#camp-table tbody");

    // Clear the existing table body
    tableBody.innerHTML = "";

    // Loop through the camps array and create rows for each camp
    camps.forEach((camp) => {
      const row = document.createElement("tr");
      row.setAttribute("data-id", camp.idcamp);

      // Create cells for each data field
      const idCell = document.createElement("td");
      idCell.textContent = camp.idcamp;

      const nameCell = document.createElement("td");
      nameCell.textContent = camp.nomecamp;

      const modalidadeCell = document.createElement("td");
      modalidadeCell.textContent = camp.modalidade;

      const jogoCell = document.createElement("td");
      jogoCell.textContent = camp.jogo;

      const qtdTimesCell = document.createElement("td");
      qtdTimesCell.textContent = camp.qtdtimes;

      // Append the cells to the row
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(modalidadeCell);
      row.appendChild(jogoCell);
      row.appendChild(qtdTimesCell);

      // Create a cell for the delete button and append it to the row
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.addEventListener("click", () =>
        handleDeleteCamp(camp.idcamp)
      );
      const deleteCell = document.createElement("td");
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getAllTimes() {
  try {
    const response = await fetch(url_times);
    const times = await response.json();
    const tableBody = document.querySelector("#times-table tbody");

    // Clear the existing table body
    tableBody.innerHTML = "";

    // Loop through the times array and create rows for each time
    times.forEach((time) => {
      const row = document.createElement("tr");

      // Create cells for each data field
      const idTimeCell = document.createElement("td");
      idTimeCell.textContent = time.idtime;

      const nomeTimeCell = document.createElement("td");
      nomeTimeCell.textContent = time.nometime;

      const treinadorCell = document.createElement("td");
      treinadorCell.textContent = time.treinador;

      const campeonatoCell = document.createElement("td");
      campeonatoCell.textContent = time.cidcamp;

      // Append the cells to the row
      row.appendChild(idTimeCell);
      row.appendChild(nomeTimeCell);
      row.appendChild(treinadorCell);
      row.appendChild(campeonatoCell);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("btn", "btn-danger", "btn-delete");
      deleteButton.addEventListener("click", () =>
        handleDeleteTeam(time.idtime)
      );

      // Create a cell for the delete button and append it to the row
      const deleteCell = document.createElement("td");
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to fetch and display all partidas
async function getAllPartidas() {
  try {
    const response = await fetch(url_partidas);
    const partidas = await response.json();
    const tableBody = document.querySelector("#partidas-table tbody");

    // Clear the existing table body
    tableBody.innerHTML = "";

    // Loop through the partidas array and create rows for each partida
    partidas.forEach((partida) => {
      const row = document.createElement("tr");

      row.setAttribute("data-id", partida.idpartida);

      // Create cells for each data field
      const idPartidaCell = document.createElement("td");
      idPartidaCell.textContent = partida.idpartida;

      const duracaoCell = document.createElement("td");
      duracaoCell.textContent = partida.duracao;

      const mapaCell = document.createElement("td");
      mapaCell.textContent = partida.mapa;

      const campeonatoCell = document.createElement("td");
      campeonatoCell.textContent = partida.cidcamp;

      // Append the cells to the row
      row.appendChild(idPartidaCell);
      row.appendChild(duracaoCell);
      row.appendChild(mapaCell);
      row.appendChild(campeonatoCell);

      // Create a cell for the delete button
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("btn", "btn-danger", "btn-delete");
      deleteButton.setAttribute("data-id", partida.idpartida);
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to fetch and display all usuarios
async function getAllUsuarios() {
  try {
    const response = await fetch(url_usuario);
    const usuarios = await response.json();
    const tableBody = document.querySelector("#usuario-table tbody");

    // Clear the existing table body
    tableBody.innerHTML = "";

    // Loop through the usuarios array and create rows for each usuario
    usuarios.forEach((usuario) => {
      const row = document.createElement("tr");

      // Create cells for each data field
      const usernameCell = document.createElement("td");
      usernameCell.textContent = usuario.nomeusuario;

      const nomeCell = document.createElement("td");
      nomeCell.textContent = usuario.nome;

      const sobrenomeCell = document.createElement("td");
      sobrenomeCell.textContent = usuario.sobrenome;

      const nascimentoCell = document.createElement("td");
      nascimentoCell.textContent = usuario.datanascimento;

      const idTimeCell = document.createElement("td");
      idTimeCell.textContent = usuario.tidtime;

      // Append the cells to the row
      row.appendChild(usernameCell);
      row.appendChild(nomeCell);
      row.appendChild(sobrenomeCell);
      row.appendChild(nascimentoCell);
      row.appendChild(idTimeCell);

      // Create a cell for the delete button
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("btn", "btn-danger", "btn-delete");
      deleteButton.setAttribute("data-id", usuario.nomeusuario);
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getAllJogos() {
  try {
    const response = await fetch("http://localhost:3000/jogo");
    const jogos = await response.json();
    const tableBody = document.querySelector("#jogo-table tbody");

    // Clear the existing table body
    tableBody.innerHTML = "";

    // Loop through the usuarios array and create rows for each usuario
    jogos.forEach((jogo) => {
      const row = document.createElement("tr");

      row.setAttribute("data-id", jogo.pidpartida);

      // Create cells for each data field
      const partidaIDCell = document.createElement("td");
      partidaIDCell.textContent = jogo.pidpartida;

      const jogadorCell = document.createElement("td");
      jogadorCell.textContent = jogo.unomeusuario;

      // Append the cells to the row
      row.appendChild(partidaIDCell);
      row.appendChild(jogadorCell);

      //Create a cell for the delete button
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("btn", "btn-danger", "btn-delete");
      deleteButton.addEventListener("click", () =>
        handleDeleteJogo(jogo.pidpartida)
      );
      deleteButton.setAttribute("data-id", jogo.pidpartida);
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// END OF DATA REQUEST

getAllUsuarios();
getAllTimes();
getAllPartidas();
getAllCamps();
getAllJogos();
