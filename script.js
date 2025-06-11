// Debugging & Inicialización
console.log('Script loaded');

// Ocultar preloader al cargar la ventana
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.transition = 'opacity 0.6s ease';
    preloader.style.opacity = 0;
    setTimeout(() => preloader.style.display = 'none', 600);
  }
});

// Funciones principales después del DOM
document.addEventListener('DOMContentLoaded', function() {
  // Toggle menú móvil
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
  }

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = (window.pageYOffset > 300) ? 'block' : 'none';
    });
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Cursor personalizado (solo escritorio)
  if (window.innerWidth > 768) {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');
    if (cursorDot && cursorOutline) {
      window.addEventListener('mousemove', function(e) {
        const x = e.clientX + 'px';
        const y = e.clientY + 'px';
        cursorDot.style.transform = `translate(${x}, ${y})`;
        cursorOutline.style.transform = `translate(${x}, ${y})`;
      });
    }
  }
});
