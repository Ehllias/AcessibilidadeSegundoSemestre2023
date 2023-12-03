document.addEventListener('DOMContentLoaded', function() {
    var aumentarZoomBtn = document.getElementById('aumentarZoomBtn');
    var diminuirZoomBtn = document.getElementById('diminuirZoomBtn');
    var elementoComZoom = document.querySelector('body');
  
    var aumentarZoom = () => {
      var estilo = window.getComputedStyle(elementoComZoom);
      var tamanhoFonte = parseFloat(estilo.fontSize);
      elementoComZoom.style.fontSize = (tamanhoFonte + 2) + 'px';
    };
  
    var diminuirZoom = () => {
      var estilo = window.getComputedStyle(elementoComZoom);
      var tamanhoFonte = parseFloat(estilo.fontSize);
      elementoComZoom.style.fontSize = (tamanhoFonte - 2) + 'px';
    };
  
    aumentarZoomBtn.addEventListener('click', aumentarZoom);
    diminuirZoomBtn.addEventListener('click', diminuirZoom);
  });