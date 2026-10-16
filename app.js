// Referencias a los elementos del DOM en español
const botonBomberos = document.getElementById('boton-bomberos');
const botonHospital = document.getElementById('boton-hospital');
const botonPolicia = document.getElementById('boton-policia');
const textoEstado = document.getElementById('texto-estado');

// Lista con todas las teclas para gestionar la selección activa
const listaTeclas = [botonBomberos, botonHospital, botonPolicia];

// Función para reproducir un sutil sonido táctil al pulsar una tecla
function reproducirSonidoPulsacion() {
  try {
    const contextoAudio = new (window.AudioContext || window.webkitAudioContext)();
    const oscilador = contextoAudio.createOscillator();
    const ganancia = contextoAudio.createGain();

    oscilador.type = 'sine';
    oscilador.frequency.setValueAtTime(600, contextoAudio.currentTime);
    oscilador.frequency.exponentialRampToValueAtTime(200, contextoAudio.currentTime + 0.08);

    ganancia.gain.setValueAtTime(0.12, contextoAudio.currentTime);
    ganancia.gain.exponentialRampToValueAtTime(0.01, contextoAudio.currentTime + 0.08);

    oscilador.connect(ganancia);
    ganancia.connect(contextoAudio.destination);

    oscilador.start();
    oscilador.stop(contextoAudio.currentTime + 0.08);
  } catch (error) {
    // Si el navegador bloquea el audio automático, continúa sin interrumpir la interfaz
  }
}

// Función para activar visualmente un botón y actualizar el estado
function activarServicio(botonSeleccionado, mensaje, colorTexto) {
  reproducirSonidoPulsacion();

  // Quitar clase activa de todas las teclas
  listaTeclas.forEach((tecla) => tecla.classList.remove('activo'));

  // Activar la tecla presionada
  botonSeleccionado.classList.add('activo');

  // Actualizar el texto y color del estado
  textoEstado.textContent = mensaje;
  textoEstado.style.color = colorTexto;
}

// Evento para el botón de Bomberos
botonBomberos.addEventListener('click', () => {
  activarServicio(
    botonBomberos,
    '🚒 Bomberos alertados (Emergencia activa)',
    '#e03131'
  );
});

// Evento para el botón de Hospital
botonHospital.addEventListener('click', () => {
  activarServicio(
    botonHospital,
    '🏥 Hospital notificado (Urgencias preparadas)',
    '#0ca678'
  );
});

// Evento para el botón de Policía
botonPolicia.addEventListener('click', () => {
  activarServicio(
    botonPolicia,
    '🚓 Policía contactada (Móvil en camino)',
    '#1c7ed6'
  );
});
