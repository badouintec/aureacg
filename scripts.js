// JavaScript consolidado para MVM Consultores

// Inicialización cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar AOS si está disponible
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      offset: 100,
      delay: 50,
    });
    console.log('AOS initialized successfully');
  }
  
  // Toggle menú móvil
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  }
  
  // No need for custom JS animations for icons as they're handled by CSS
  // We're using CSS transitions for the flip effect instead

  // Añadir clase activa en navegación según la sección visible
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavOnScroll() {
    const scrollY = window.scrollY;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      
      const navItem = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
   // Código eliminado porque ya no se necesita al reemplazar el formulario por un botón de WhatsApp
});