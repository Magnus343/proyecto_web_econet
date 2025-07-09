// Animación al hacer scroll
const secciones = document.querySelectorAll('.seccion');
const activarSeccion = () => {
  const top = window.scrollY + window.innerHeight * 0.85;
  secciones.forEach(seccion => {
    if (seccion.offsetTop < top) {
      seccion.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', activarSeccion);
window.addEventListener('load', activarSeccion);

// Enviar a WhatsApp
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;

  const numeroWhatsApp = '573016192409';
  const texto = `Hola, soy ${nombre}. Mi correo es ${correo} y mi teléfono es ${telefono || 'no especificado'}.
Mensaje: ${mensaje}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
});
