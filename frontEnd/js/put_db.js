// async function handleUpdateUsuario(username) {
//   const nome = document.getElementById("campoUNome").value;
//   const sobrenome = document.getElementById("campoUSobrenome").value;
//   const datanascimento = document.getElementById("campoUNascimento").value;
//   const tidtime = document.getElementById("campoUIdTime").value;

//   const usuarioData = {
//     nomeusuario: username,
//     nome: nome,
//     sobrenome: sobrenome,
//     datanascimento: datanascimento,
//     tidtime: parseInt(tidtime),
//   };

//   console.log("oioi")

//   try {
//     const response = await fetch(`http://localhost:3000/usuario/${username}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(usuarioData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update usuario");
//     }

//     // If the usuario is deleted successfully, update the table without fetching all data again
//     const tableBody = document.querySelector("#usuario-table tbody");
//     const updateRow = tableBody.querySelector(`tr[data-id="${username}"]`);
//     if (updateRow) {
//       const cells = updateRow.querySelectorAll("td"); // Obtém todas as células da linha

//   // Atualiza os valores das células com as informações atualizadas
//       cells[1].textContent = nome;
//       cells[2].textContent = sobrenome;
//       cells[3].textContent = datanascimento;
//       cells[4].textContent = tidtime;
//     }
//     await getAllUsuarios();
//   } catch (error) {
//     console.error("Error updating usuario:", error);
//   }
// }

// const usuariosTableBody = document.querySelector("#usuario-table tbody");
// usuariosTableBody.addEventListener("click", async (event) => {
//   if (event.target.classList.contains("btn-update")) {
//     const username = event.target.getAttribute("data-id");
//     handleUpdateUsuario(username);
//   }
// });