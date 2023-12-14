document.addEventListener('DOMContentLoaded', function() {
    const aumentarZoomBtn = document.getElementById('aumentarZoomBtn');
    const diminuirZoomBtn = document.getElementById('diminuirZoomBtn');
    const elementoComZoom = document.querySelector('.main');
  
    const aumentarZoom = () => {
      const estilo = window.getComputedStyle(elementoComZoom);
      const tamanhoFonte = parseFloat(estilo.fontSize);
      elementoComZoom.style.fontSize = (tamanhoFonte + 2) + 'px';
    };
  
    const diminuirZoom = () => {
      const estilo = window.getComputedStyle(elementoComZoom);
      const tamanhoFonte = parseFloat(estilo.fontSize);
      elementoComZoom.style.fontSize = (tamanhoFonte - 2) + 'px';
    };
  
    aumentarZoomBtn.addEventListener('click', aumentarZoom);
    diminuirZoomBtn.addEventListener('click', diminuirZoom);
  });