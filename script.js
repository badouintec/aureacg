// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar la librería de animaciones
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100,
  });
  
  // Toggle menú móvil
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');
  
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

  // Añadir clase activa en navegación según la sección visible
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavOnScroll() {
    const scrollY = window.scrollY;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
      } else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);

});

// Agregar estilo de enlace activo en navegación
document.addEventListener('DOMContentLoaded', function() {
  // Añadir clase activa al estilo para el enlace activo
  const styleSheet = document.styleSheets[0];
  const cssRules = `.nav-menu a.active { color: var(--primary); }
                    .nav-menu a.active::after { width: 100%; }`;
  
  if (styleSheet.insertRule) {
    styleSheet.insertRule(cssRules, styleSheet.cssRules.length);
  } else if (styleSheet.addRule) {
    styleSheet.addRule(cssRules, -1);
  }

  // Verificar que las imágenes cargan correctamente
  const aboutImage = document.querySelector('.about-image img');
  if (aboutImage) {
    aboutImage.addEventListener('error', function() {
      // Si la imagen no carga, intentar con un placeholder elegante
      this.src = 'https://via.placeholder.com/800x600/003366/FFFFFF?text=Aurea+Consulting';
      this.alt = 'Aurea Consulting Group';
      // Agregar clases para un mejor estilo
      this.classList.add('placeholder-image');
    });

    // Agregar un efecto de zoom suave al hover
    aboutImage.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'transform 0.5s ease';
    });

    aboutImage.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  }
});
