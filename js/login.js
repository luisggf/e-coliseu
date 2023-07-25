$(document).ready(function () {
  // Função para carregar o conteúdo do arquivo login-modal.html
  function loadLoginModal() {
    $.get("login.html", function (data) {
      $("#loginModal").html(data);
      $("#loginModal").modal("show");
    });
  }

  // Chame a função para carregar o modal quando o botão for clicado
  $("#loginButton").on("click", function () {
    loadLoginModal();
  });
});
