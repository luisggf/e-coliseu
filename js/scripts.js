const url = "http://localhost:5432";

const campsContainer = document.querySelector("#modal-camp-contents");

async function getAllCamps() {
  const response = await fetch(url);
  console.log(response);
}

getAllCamps();
