$(document).ready(function () {
  // Inicialize o carrossel
  $(".owl-carousel").owlCarousel({
    loop: true, // Repetir o carrossel infinitamente
    margin: 10, // Espaçamento entre as imagens
    nav: false, // Mostrar botões de navegação (próximo e anterior)
    autoplay: true, // Ativar o autoplay (variação automática das imagens)
    autoplayTimeout: 1000, // Tempo de espera entre a variação de cada imagem (em milissegundos)
    autoplayHoverPause: true, // Pausar a variação automática ao passar o mouse sobre o carrossel
    responsive: {
      0: {
        items: 1, // Quantidade de itens a serem mostrados em telas menores (neste caso, 1 item)
      },
      600: {
        items: 2, // Quantidade de itens a serem mostrados em telas com largura de 600px ou mais (neste caso, 2 itens)
      },
      1000: {
        items: 4, // Quantidade de itens a serem mostrados em telas com largura de 1000px ou mais (neste caso, 4 itens)
      },
    },
  });
});
