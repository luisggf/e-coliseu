const url_camps = "http://localhost:3000/camps";
const url_partidas = "http://localhost:3000/partida";
const url_times = "http://localhost:3000/times";
const url_usuario = "http://localhost:3000/usuario";
const campsContainer = document.querySelector("#modal-camp-contents");
const partidasContainer = document.querySelector("#modal-part-contents");
const timesContainer = document.querySelector("#modal-times-content");
const usuarioContainer = document.querySelector("#modal-user-content");

// ...
async function getAllCamps() {
  try {
    const response = await fetch(url_camps);
    const camps = await response.json();
    const tableBody = document.querySelector("#camp-table tbody");

    // Loop through the camps array and create rows for each camp
    camps.forEach((camp) => {
      const row = document.createElement("tr");

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

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getAllPartidas() {
  try {
    const response = await fetch(url_partidas);
    const partidas = await response.json();
    const tableBody = document.querySelector("#partidas-table tbody");

    // Loop through the partidas array and create rows for each partida
    partidas.forEach((partida) => {
      const row = document.createElement("tr");

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

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getAllUsuarios() {
  try {
    const response = await fetch(url_usuario);
    const usuarios = await response.json();
    const tableBody = document.querySelector("#usuario-table tbody");

    // Loop through the usuarios array and create rows for each usuario
    usuarios.forEach((usuario) => {
      const row = document.createElement("tr");

      // Create cells for each data field
      const nomeUsuarioCell = document.createElement("td");
      nomeUsuarioCell.textContent = usuario.nomeusuario;

      const nomeCell = document.createElement("td");
      nomeCell.textContent = usuario.nome;

      const sobrenomeCell = document.createElement("td");
      sobrenomeCell.textContent = usuario.sobrenome;

      const dataNascimentoCell = document.createElement("td");
      dataNascimentoCell.textContent = usuario.datanascimento || "-"; // Display "-" if data is null

      const tidTimeCell = document.createElement("td");
      tidTimeCell.textContent = usuario.tidtime;

      // Append the cells to the row
      row.appendChild(nomeUsuarioCell);
      row.appendChild(nomeCell);
      row.appendChild(sobrenomeCell);
      row.appendChild(dataNascimentoCell);
      row.appendChild(tidTimeCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// END OF DATA REQUEST

// Testing the addition of dinamic data input
async function addTime() {
  const username = document.getElementById("campoTime").value;
  const nomeTime = document.getElementById("campoNomeTime").value;
  const treinador = document.getElementById("campoTreinador").value;

  // Validate the form data if needed
  // ...

  // Send the form data to the backend API
  try {
    const response = await fetch("/addTime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, nomeTime, treinador }),
    });

    if (response.ok) {
      // If the response status is 200 (OK), the time was added successfully
      alert("Time added successfully!");
      // You can also update the table on the frontend if needed
    } else {
      // Handle the case when the response status is not 200
      const errorMessage = await response.json();
      alert(errorMessage.error || "Failed to add time");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to add time");
  }
}

// Function to handle form submission and add time to the table
function addTime() {
  const username = document.getElementById("campoTime").value;
  const nomeTime = document.getElementById("campoNomeTime").value;
  const treinador = document.getElementById("campoTreinador").value;

  // Validate the form data if needed
  // ...

  // Create a new row in the table
  const tableBody = document.querySelector("#usuario-table tbody");
  const newRow = tableBody.insertRow();
  const cells = [
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
    newRow.insertCell(),
  ];

  // Populate the cells with the user-entered data
  cells[0].textContent = username;
  cells[1].textContent = nomeTime;
  cells[2].textContent = treinador;
  cells[3].textContent = "-"; // Data de Nascimento (not available in the form)
  cells[4].textContent = "-"; // ID do Time (not available in the form)

  // Clear the form fields after submission
  document.getElementById("campoTime").value = "";
  document.getElementById("campoNomeTime").value = "";
  document.getElementById("campoTreinador").value = "";
}

// Add event listener to the "Adicionar time" button
const addButton = document.querySelector(".btn-primary");
addButton.addEventListener("click", addTime);
// End of dinamic insertion of team data

// Scroll when clicking function
const scrolltoSectionServices = document.getElementsByClassName("btn-1");
// Loop through each button and add the event listener
for (const button of scrolltoSectionServices) {
  button.addEventListener("click", () => {
    const section2Element = document.querySelector("section:nth-of-type(2)");

    // Get the height of the fixed header (if you have any)
    const headerHeight = document.querySelector(
      "section:nth-of-type(1)"
    ).offsetHeight;

    // Calculate the offset to adjust scrolling position
    const scrollOffset =
      section2Element.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      200;

    // Scroll to Section 2 with smooth behavior and adjust the scrolling position
    window.scrollTo({ top: scrollOffset, behavior: "smooth" });
  });
}
// End of scroll function

getAllUsuarios();
getAllTimes();
getAllPartidas();
getAllCamps();
