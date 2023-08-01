// Función para cargar el reproductor de video de YouTube al hacer clic en la miniatura

function labnolIframe(iframeContainer) {
    let iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" +
        iframeContainer.dataset.id +
        "?autoplay=1&muted=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("autoplay", "1");
    iframeContainer.parentNode.replaceChild(iframe, iframeContainer);
  }
  
  // Función para generar la miniatura del video de YouTube
  function labnolThumb(id) {
    return (
      '<img src="//i.ytimg.com/vi/' + id +'/hqdefault.jpg"><button><i class="fa-brands fa-youtube"></i></button>'
    );
  }
  
  // Función para crear los reproductores de video de YouTube y asociar eventos
  function setupYouTubePlayers() {
    var players = document.getElementsByClassName("reproductor");
    for (let i = 0; i < players.length; i++) {
      let player = players[i];
      player.innerHTML = labnolThumb(player.dataset.id);
      player.onclick = function () {
        labnolIframe(player);
      };
    }
  }
  
  // Cargar los reproductores de video de YouTube cuando se carga la página
  setupYouTubePlayers();