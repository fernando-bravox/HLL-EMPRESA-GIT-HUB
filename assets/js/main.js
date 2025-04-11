/**
* Template Name: Sailor
* Template URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();
















document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Verificar si el usuario tenía activado el modo oscuro
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill"); // Cambia icono a sol
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Guardar preferencia en localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill"); // Icono de sol en modo oscuro
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill"); // Icono de luna en modo claro
        }
    });
});









































document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("language-toggle");
  const langText = document.getElementById("language-text");
  const defaultLang = "es";

  // Cargar idioma actual desde localStorage o español por defecto
  let currentLang = localStorage.getItem("selectedLanguage") || defaultLang;

  // Función única para actualizar todos los textos traducibles
  function updateText(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      let translations = element.getAttribute("data-lang");
      if (translations) {
        try {
          translations = JSON.parse(translations);
        } catch {
          translations = Object.fromEntries(
            translations.split(/,(?=[a-z]{2}:)/).map(pair => pair.split(":"))
          );
        }
        if (translations[lang]) {
          element.innerHTML = translations[lang];
        }
      }
    });
    if (langText) langText.textContent = lang.toUpperCase();
  }

  // Cambiar idioma y sincronizar con todas las pestañas
  function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("selectedLanguage", currentLang);
    localStorage.setItem("languageChanged", Date.now());
    updateText(currentLang);
  }

  // Detectar cambios de idioma desde otras pestañas
  window.addEventListener("storage", (event) => {
    if (event.key === "languageChanged") {
      const newLang = localStorage.getItem("selectedLanguage") || defaultLang;
      if (newLang !== currentLang) {
        currentLang = newLang;
        updateText(currentLang);
      }
    }
  });

  // Inicializa el idioma al cargar la página
  updateText(currentLang);

  // Evento del botón para cambiar idioma
  if (langToggle) langToggle.addEventListener("click", toggleLanguage);
});



function adjustButtonPosition() {
  const container = document.getElementById('button-container');

  if (window.innerWidth < 768) {
      container.style.position = "fixed";
      container.style.top = "70px"; // Justo debajo del header
      container.style.left = "18%"; // Centrado horizontalmente
      container.style.transform = "translateX(-50%)"; // Ajuste fino para centrar
      container.style.zIndex = "1000"; // Para que esté por encima de otros elementos
      container.style.padding = "24px 46.5px";
      container.style.borderRadius = "8px";
      container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      container.style.display = "flex";
      container.style.flexDirection = "row"; // Asegura que se mantengan en fila
      container.style.background = "rgba(255, 255, 255, 0.85)"; // Transparencia más equilibrada

      container.style.gap = "10px"; // Espacio entre botones


  } else {
      container.style.position = "static"; // Vuelve a su posición normal en pantallas grandes
      container.style.background = "transparent";
      container.style.boxShadow = "none";
      container.style.padding = "0";
      container.style.borderRadius = "0";
      container.style.flexDirection = "row"; // Vuelve a alinear horizontalmente
      container.style.gap = "10px"; // Espaciado normal
  }
}

// Ejecutar cuando se carga la página
adjustButtonPosition();

// Escuchar cambios de tamaño de la ventana
window.addEventListener("resize", adjustButtonPosition);






// Función para reproducir o pausar el video
function playVideo(videoId, button) {
  let videoContainer = document.getElementById(videoId);
  let video = videoContainer.querySelector("video");

  // Obtiene el idioma seleccionado desde localStorage
  let selectedLanguage = localStorage.getItem("selectedLanguage") || "es";

  // Traducciones para el botón
  let translations = {
      "es": {
          "play": "Ver Video",
          "pause": "Pausar Video"
      },
      "en": {
          "play": "Watch Video",
          "pause": "Pause Video"
      }
  };

  // Si el video está oculto, lo mostramos y reproducimos
  if (videoContainer.style.display === "none") {
      // Antes de abrir un video, cerramos todos los otros videos
      closeAllVideos();

      videoContainer.style.display = "block"; // Muestra el contenedor del video
      video.play(); // Reproduce el video
      button.textContent = translations[selectedLanguage]["pause"]; // Cambia a "Pausar Video" o "Pause Video"
  } else {
      video.pause(); // Pausa el video si ya está visible
      videoContainer.style.display = "none"; // Oculta el video
      button.textContent = translations[selectedLanguage]["play"]; // Cambia a "Ver Video" o "Watch Video"
  }
}

// Función para cerrar todos los videos
function closeAllVideos() {
  document.querySelectorAll(".video-container").forEach(videoContainer => {
      let video = videoContainer.querySelector("video");
      let button = document.querySelector(`button[onclick*="${videoContainer.id}"]`);

      video.pause();
      video.currentTime = 0;
      videoContainer.style.display = "none";

      // Obtiene el idioma seleccionado
      let selectedLanguage = localStorage.getItem("selectedLanguage") || "es";
      let translations = {
          "es": "Ver Video",
          "en": "Watch Video"
      };

      if (button) button.textContent = translations[selectedLanguage]; // Restaura el texto
  });
}

// Cerrar videos cuando se cierre el modal
document.querySelector(".close-btn").addEventListener("click", function () {
  closeAllVideos();
});

// Cerrar videos cuando se haga clic fuera del modal
document.getElementById("serviceModal").addEventListener("click", function (event) {
  if (event.target === this) {
      closeAllVideos();
      closeModal();
  }
});



// 🔹 Datos para los Modales (Títulos)
const langData = {
  "spooler": {
    "es": "🔹 Spooler y Banding: Instalación Segura y Precisa",
    "en": "🔹 Spooler and Banding: Safe and Precise Installation"
  },
  "reparacion": {
    "es": "🔹 Reparación de Cables: Diagnóstico, Restauración y Pruebas Finales",
    "en": "🔹 Cable Repair: Diagnosis, Restoration, and Final Testing"
  },
  "acorazado": {
    "es": "🛡 Acorazado de Cables: Protección Extrema",
    "en": "🛡 Cable Armoring: Extreme Protection"
  },
  "electrofusion": {
    "es": "⚡ Empalmes por Electrofusión: Uniones Fuertes y Duraderas",
    "en": "⚡ Electrofusion Splices: Strong and Durable Joints"
  }
};

const modalDescriptions = {
  "spooler": {
    "es": `
      <p>💡 <strong>Solución para la gestión de cables en pozos petroleros.</strong></p>
      <ul>
        <li>✔️ Desenrollado y enrollado seguro de cables para bombas electrosumergibles (BES).</li>
        <li>✔️ Instalación rápida y segura de protectores, bandas y mid joint para proteger y organizar el cableado en sistemas de bombeo electrosumergible.</li>
        <li>✔️ Capacidad de realizar hasta 24 operaciones simultáneas.</li>
        <li>✔️ Equipos con sistema SAD (Sistema Anti Desprendimiento), evitando accidentes en caso de ruptura de tubería.</li>
        <li>✔️ Transporte seguro con camiones y camionetas certificadas.</li>
      </ul>
        <button class="btn btn-primary video-btn" onclick="playVideo('spooler-video', this)">Ver Video</button>
      <div id="spooler-video" class="video-container" style="display:none;">
        <video controls>
          <source src="assets/img/vidspool.mp4" type="video/mp4">
          Your browser does not support HTML5 videos.
        </video>
      </div>
    `,
    "en": `
      <p>💡 <strong>Solution for cable management in oil wells.</strong></p>
      <ul>
        <li>✔️ Safe unwinding and winding of cables for submersible pumps (BES).</li>
        <li>✔️ Fast and secure installation of protectors, bands, and mid joint to protect and organize cabling in submersible pumping systems.</li>
        <li>✔️ Capability to perform up to 24 simultaneous operations.</li>
        <li>✔️ Equipment with SAD (Anti-Detachment System) to prevent accidents in case of pipe rupture.</li>
        <li>✔️ Secure transport with certified trucks and vehicles.</li>
      </ul>
        <button class="btn btn-primary video-btn" onclick="playVideo('spooler-video', this)">Watch Video</button>
      <div id="spooler-video" class="video-container" style="display:none;">
        <video controls>
          <source src="assets/img/vidspool.mp4" type="video/mp4">
          Your browser does not support HTML5 videos.
        </video>
      </div>
    `
  },
  "reparacion": {
    "es": `
      <p>💡 <strong>Reparamos cables dañados para evitar fallas eléctricas en el pozo.</strong></p>
      <ul>
        <li>✔️ Inspección visual completa y pruebas eléctricas avanzadas.</li>
        <li>✔️ Capacidad de inspeccionar hasta 30,000 ft de cable en la base de HLL.</li>
        <li>✔️ Contamos con líneas operativas con motores de combustión y eléctricos.</li>
        <li>✔️ Equipos eléctricos certificados por SAE y ARCERNNR.</li>
        <li>✔️ Contadores digitales y análogos con certificación INEN.</li>
      </ul>
    <button class="btn btn-primary video-btn" onclick="playVideo('reparacion-video', this)">Ver Video</button>
    <div id="reparacion-video" class="video-container" style="display:none;">
      <video controls>
        <source src="assets/img/acorazvie1.mp4" type="video/mp4">
        Tu navegador no soporta videos HTML5.
      </video>
    </div>
    `,
    "en": `
      <p>💡 <strong>We repair damaged cables to prevent electrical failures in the well.</strong></p>
      <ul>
        <li>✔️ Complete visual inspection and advanced electrical tests.</li>
        <li>✔️ Capacity to inspect up to 30,000 ft of cable at HLL's base.</li>
        <li>✔️ We have operational lines with combustion and electric engines.</li>
        <li>✔️ Certified electrical equipment by SAE and ARCERNNR.</li>
        <li>✔️ Digital and analog meters with INEN certification.</li>
      </ul>
    <button class="btn btn-primary video-btn" onclick="playVideo('reparacion-video', this)">Watch Video</button>
    <div id="reparacion-video" class="video-container" style="display:none;">
      <video controls>
        <source src="assets/img/acorazvie1.mp4" type="video/mp4">
        Your browser does not support HTML5 videos.
      </video>
    </div>
    `
  },
  "acorazado": {
    "es": `
      <p>💡 <strong>Reforzamos cables para resistir condiciones extremas.</strong></p>
      <ul>
        <li>✔️ Capacidad de acorazar y reparar hasta 4,000 ft de cable por día en la base de HLL.</li>
        <li>✔️ Taller equipado con máquina de acorazado MANTAI y puente grúa de 15 toneladas.</li>
        <li>✔️ 2 líneas dedicadas para el retiro de coraza.</li>
        <li>✔️ Equipos eléctricos certificados por SAE y ARCERNNR.</li>
        <li>✔️ Contadores digitales y análogos con certificación INEN.</li>
      </ul>
<button class="btn btn-primary video-btn" onclick="playVideo('acorazado-video', this)">Ver Video</button>

<div id="acorazado-video" class="video-container" style="display:none;">
  <video controls>
    <source src="assets/img/acorazvie.mp4" type="video/mp4">
    Tu navegador no soporta videos HTML5.
  </video>
</div>
    `,
    "en": `
      <p>💡 <strong>We reinforce cables to withstand extreme conditions.</strong></p>
      <ul>
        <li>✔️ Capacity to armor and repair up to 4,000 ft of cable per day at HLL's base.</li>
        <li>✔️ Workshop equipped with MANTAI armoring machine and a 15-ton crane.</li>
        <li>✔️ 2 dedicated lines for coraza removal.</li>
        <li>✔️ Certified electrical equipment by SAE and ARCERNNR.</li>
        <li>✔️ Digital and analog meters with INEN certification.</li>
      </ul>
<button class="btn btn-primary video-btn" onclick="playVideo('acorazado-video', this)">Watch Video</button>

<div id="acorazado-video" class="video-container" style="display:none;">
  <video controls>
    <source src="assets/img/acorazvie.mp4" type="video/mp4">
    Your browser does not support HTML5 videos.
  </video>
</div>
    `
  },
  "electrofusion": {
    "es": `
      <p>💡 <strong>Conexiones seguras con tecnología de fusión controlada.</strong></p>
      <ul>
        <li>✔️ Proceso basado en la fusión del propio material del cable sin alterar su estructura original.</li>
        <li>✔️ Alta precisión en las soldaduras.</li>
        <li>✔️ Reducción del tiempo de producción.</li>
        <li>✔️ Mínima deformación del material.</li>
        <li>✔️ Uso de máquinas especializadas como STRECKER y equipos locales de electrofusión.</li>
      </ul>
<button class="btn btn-primary video-btn" onclick="playVideo('electrofusion-video', this)">Ver Video</button>

<div id="electrofusion-video" class="video-container" style="display:none;">
  <video controls>
    <source src="assets/img/electrosumersev.mp4" type="video/mp4">
    Tu navegador no soporta videos HTML5.
  </video>
</div>
    `,
    "en": `
      <p>💡 <strong>Secure connections with controlled fusion technology.</strong></p>
      <ul>
        <li>✔️ Process based on fusing the cable's own material without altering its original structure.</li>
        <li>✔️ High precision in welds.</li>
        <li>✔️ Reduced production time.</li>
        <li>✔️ Minimal material deformation.</li>
        <li>✔️ Use of specialized machines like STRECKER and local electrofusion equipment.</li>
      </ul>
<button class="btn btn-primary video-btn" onclick="playVideo('electrofusion-video', this)">Watch Video</button>

<div id="electrofusion-video" class="video-container" style="display:none;">
  <video controls>
    <source src="assets/img/electrosumersev.mp4" type="video/mp4">
    Your browser does not support HTML5 videos.
  </video>
</div>
    `
  }
};

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("videoPlayer");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.classList.add("hidden"); // Oculta el botón cuando el video empieza
        }
    });

    video.addEventListener("click", function () {
        if (!video.paused) {
            video.pause();
            playButton.classList.remove("hidden"); // Muestra el botón cuando el video se pausa
        }
    });

    video.addEventListener("play", function () {
        playButton.classList.add("hidden");
    });

    video.addEventListener("pause", function () {
        playButton.classList.remove("hidden");
    });
});





// 🔹 Función para abrir el modal
function openModal(serviceKey) {
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  modalTitle.innerHTML = langData[serviceKey][localStorage.getItem("selectedLanguage") || "es"];
  modalDescription.innerHTML = modalDescriptions[serviceKey][localStorage.getItem("selectedLanguage") || "es"];


  let modal = document.getElementById("serviceModal");
  modal.style.display = "flex";
  setTimeout(() => { modal.style.opacity = "1"; }, 10);

  document.body.style.overflow = "hidden"; // Bloquear scroll
}

// 🔹 Función para cerrar el modal
function closeModal() {
  let modal = document.getElementById("serviceModal");
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restaurar scroll
  }, 300);
}

// 🔹 Eventos para el botón de cerrar el modal
document.querySelector(".close-btn").addEventListener("click", closeModal);
document.getElementById("serviceModal").addEventListener("click", (event) => {
  if (event.target === document.getElementById("serviceModal")) {
    closeModal();
  }
});



document.addEventListener("DOMContentLoaded", function () {
  // Selecciona TODOS los botones de servicio y les asigna la funcionalidad
  document.querySelectorAll(".scroll-button-service").forEach(function (button) {
      button.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();

          let container = this.closest(".contenedor-servicios-petroleros") || this.closest(".contenedor-servicios-construccion");

          if (container) {
              container.scrollIntoView({ behavior: "smooth", block: "end" });
          }
      });
  });
});


function toggleText(id, button) {
  var texto = document.getElementById(id);
  texto.classList.toggle("show");

  // Cambia el texto del botón dinámicamente
  if (texto.classList.contains("show")) {
    button.textContent = "Ver Menos";
  } else {
    button.textContent = "Ver Más";
  }
}
function toggleContent(element) {
  element.classList.toggle("active");
}







const langDataConstruccion = {
  "mantenimiento": { 
      "es": "🏗️ Obra Civil Petrolera y General", 
      "en": "🏗️ Petroleum and General Civil Works" 
  },
  "electricas": { 
      "es": "🎨 Diseño Arquitectónico e Interiorismo", 
      "en": "🎨 Architectural and Interior Design" 
  },
  "fluidos": { 
      "es": "🔩 Estructuras Metálicas", 
      "en": "🔩 Metal Structure" 
  },
  "seguridad": { 
      "es": "🛣️ Infraestructura vial.", 
      "en": "🛣️ Road infrastructure." 
    },
  "instalaciones-electricas": { 
      "es": "⚡ Instalaciones Eléctricas Comerciales e Industriales", 
      "en": "⚡ Commercial and Industrial Electrical Installations" 
  },
  "diseno-luminotecnico": { 
      "es": "💡 Diseño Luminotécnico", 
      "en": "💡 Lighting Design" 
  }
};


const modalDescriptionsConstruccion = {
 "mantenimiento": {
    "es": `<p>💡 <strong>Construcción y mantenimiento de obras civiles en el sector petrolero y en general.</strong></p>
      <ul>
        <li>✔️ Asesoramiento técnico en proyectos de construcción y remodelación.</li>
        <li>✔️ Ejecución de obras industriales y comerciales.</li>
        <li>✔️ Restauración y mantenimiento de infraestructuras.</li>
      </ul>
      <button class="btn btn-primary video-btn" onclick="playVideo('mantenimiento-video', this)">Ver Video</button>

      <div id="mantenimiento-video" class="video-container" style="display:none;">
        <video controls>
          <source src="assets/img/vidfacilidades2.mp4" type="video/mp4">
          Tu navegador no soporta videos HTML5.
        </video>
      </div>`,
    "en": `<p>💡 <strong>Construction and maintenance of civil works in the oil and general sector.</strong></p>
      <ul>
        <li>✔️ Technical consulting in construction and remodeling projects.</li>
        <li>✔️ Execution of industrial and commercial works.</li>
        <li>✔️ Infrastructure restoration and maintenance.</li>
      </ul>
      <button class="btn btn-primary video-btn" onclick="playVideo('mantenimiento-video', this)">Watch Video</button>

      <div id="mantenimiento-video" class="video-container" style="display:none;">
        <video controls>
          <source src="assets/img/vidfacilidades2.mp4" type="video/mp4">
          Your browser does not support HTML5 videos.
        </video>
      </div>`
  },

  "electricas": {
    "es": `<p>🎨 <strong>Diseño arquitectónico, planificación y conceptualización de proyectos.</strong></p>
      <ul>
        <li>✔️ Diseño de planos arquitectónicos para edificaciones nuevas, remodelaciones o ampliaciones.</li>
        <li>✔️ Modelado 3D y visualización de proyectos.</li>
        <li>✔️ Diseño de interiores para optimización y funcionalidad.</li>
      </ul>
          <button class="btn btn-primary video-btn" onclick="playVideo('electricas-video', this)">Ver Video</button>

  <div id="electricas-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/diseño.mp4" type="video/mp4">
      Tu navegador no soporta videos HTML5.
    </video>
  </div>`,

    "en": `<p>🎨 <strong>Architectural design, project planning, and conceptualization.</strong></p>
      <ul>
        <li>✔️ Architectural blueprint design for new buildings, renovations, or expansions.</li>
        <li>✔️ 3D modeling and project visualization.</li>
        <li>✔️ Interior design for optimization and functionality.</li>
      </ul>
          <button class="btn btn-primary video-btn" onclick="playVideo('electricas-video', this)">Watch Video</button>

  <div id="electricas-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/diseño.mp4" type="video/mp4">
      Your browser does not support HTML5 videos.
    </video>
  </div>`
  },
 "fluidos": {
"es": `<p>🏗️ <strong>Construcción y mantenimiento de estructuras metálicas.</strong></p>
  <ul>
    <li>✔️ Construcción de galpones y estructuras metálicas.</li>
    <li>✔️ Mantenimiento de techos, cerramientos y estructuras.</li>
    <li>✔️ Soldadura y refuerzos estructurales.</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('fluidos-video', this)">Ver Video</button>

  <div id="fluidos-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vidfacilidades1.mp4" type="video/mp4">
      Tu navegador no soporta videos HTML5.
    </video>
  </div>`,

"en": `<p>🏗️ <strong>Construction and maintenance of metal structures.</strong></p>
  <ul>
    <li>✔️ Construction of warehouses and metal structures.</li>
    <li>✔️ Maintenance of roofs, enclosures, and structures.</li>
    <li>✔️ Welding and structural reinforcements.</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('fluidos-video', this)">Watch Video</button>

  <div id="fluidos-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vidfacilidades1.mp4" type="video/mp4">
      Your browser does not support HTML5 videos.
    </video>
  </div>`
},

"seguridad": {
"es": `<p>🛣️ <strong>Apertura, lastrado y adoquinado de vías para accesibilidad en cualquier terreno.</strong></p>
  <ul>
    <li>✔️ Construcción y habilitación de caminos en zonas rurales y urbanas.</li>
    <li>✔️ Mantenimiento y mejora de vías existentes.</li>
    <li>✔️ Preparación del terreno con maquinaria pesada.</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('seguridad-video', this)">Ver Video</button>

  <div id="seguridad-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vidfacilidades3.mp4" type="video/mp4">
      Tu navegador no soporta videos HTML5.
    </video>
  </div>`,

"en": `<p>🛣️ <strong>Road opening, graveling, and paving for accessibility on any terrain.</strong></p>
  <ul>
    <li>✔️ Construction and enabling of roads in rural and urban areas.</li>
    <li>✔️ Maintenance and improvement of existing roads.</li>
    <li>✔️ Terrain preparation with heavy machinery.</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('seguridad-video', this)">Watch Video</button>

  <div id="seguridad-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vidfacilidades3.mp4" type="video/mp4">
      Your browser does not support HTML5 videos.
    </video>
  </div>`
},

  "instalaciones-electricas": {
"es": `<p>⚡ <strong>Diseño y construcción de instalaciones eléctricas para comercios e industrias.</strong></p>
  <ul>
      <li>✔️ Estudios de carga y máxima demanda.</li>
      <li>✔️ Análisis de balances de carga.</li>
      <li>✔️ Ruteado y ductería de conductor eléctrico.</li>
      <li>✔️ Instalación de tableros eléctricos de distribución.</li>
      <li>✔️ Automatización y domótica.</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('instalaciones-electricas-video', this)">Ver Video</button>

  <div id="instalaciones-electricas-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vid_luminotecnico.mp4" type="video/mp4">
      Tu navegador no soporta videos HTML5.
    </video>
  </div>`,

"en": `<p>⚡ <strong>Design and construction of electrical installations for businesses and industries.</strong></p>
  <ul>
      <li>✔️ Load and maximum demand studies.</li>
      <li>✔️ Load balance analysis.</li>
      <li>✔️ Electrical conductor routing and conduit installation.</li>
      <li>✔️ Installation of electrical distribution boards.</li>
      <li>✔️ Automation and home automation (domotics).</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('instalaciones-electricas-video', this)">Watch Video</button>

  <div id="instalaciones-electricas-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vid_luminotecnico.mp4" type="video/mp4">
      Your browser does not support HTML5 videos.
    </video>
  </div>`
},

"diseno-luminotecnico": {
"es": `<p>💡 <strong>Diseño luminotécnico para espacios interiores y exteriores.</strong></p>
  <ul>
      <li>✔️ Estudios de iluminación para optimización del consumo energético.</li>
      <li>✔️ Diseño de sistemas de iluminación eficientes y estéticos.</li>
      <li>✔️ Implementación de soluciones innovadoras en iluminación LED.</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('diseno-luminotecnico-video', this)">Ver Video</button>

  <div id="diseno-luminotecnico-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vid_luminotecnico.mp4" type="video/mp4">
      Tu navegador no soporta videos HTML5.
    </video>
  </div>`,

"en": `<p>💡 <strong>Lighting design for interior and exterior spaces.</strong></p>
  <ul>
      <li>✔️ Lighting studies for energy consumption optimization.</li>
      <li>✔️ Design of efficient and aesthetic lighting systems.</li>
      <li>✔️ Implementation of innovative LED lighting solutions.</li>
  </ul>
  <button class="btn btn-primary video-btn" onclick="playVideo('diseno-luminotecnico-video', this)">Watch Video</button>

  <div id="diseno-luminotecnico-video" class="video-container" style="display:none;">
    <video controls>
      <source src="assets/img/vid_luminotecnico.mp4" type="video/mp4">
      Your browser does not support HTML5 videos.
    </video>
  </div>`
}

};


// 🔹 Función para abrir el modal de Construcción
// 🔹 Función para abrir el modal de Construcción
function openModalConstruccion(serviceKey) {
  const modal = document.getElementById("serviceModalConstruccion");
  const modalTitle = document.getElementById("modal-title-construccion");
  const modalDescription = document.getElementById("modal-description-construccion");

  if (!langDataConstruccion[serviceKey] || !modalDescriptionsConstruccion[serviceKey]) {
      console.error("El servicio seleccionado no tiene información.");
      return;
  }

  modalTitle.innerHTML = langDataConstruccion[serviceKey][localStorage.getItem("selectedLanguage") || "es"];
  modalDescription.innerHTML = modalDescriptionsConstruccion[serviceKey][localStorage.getItem("selectedLanguage") || "es"];
  modal.style.display = "flex";

  setTimeout(() => { modal.style.opacity = "1"; }, 10);
  document.body.style.overflow = "hidden"; // Bloquear scroll
}

// 🔹 Función para cerrar el modal y detener el video
function closeModalConstruccion() {
  const modal = document.getElementById("serviceModalConstruccion");
  const videos = modal.querySelectorAll("video");

  modal.style.opacity = "0";
  setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Restaurar scroll

      // Pausar y resetear videos dentro del modal
      videos.forEach(video => {
          video.pause();
          video.currentTime = 0;
      });
  }, 300);
}

// 🔹 Asignar eventos a los botones de cierre y clic fuera del modal
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#serviceModalConstruccion .close-btn").addEventListener("click", closeModalConstruccion);
  
  document.getElementById("serviceModalConstruccion").addEventListener("click", function (event) {
      if (event.target === this) {
          closeModalConstruccion();
      }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("language-toggle"); // Botón para cambiar idioma
  const langText = document.getElementById("language-text"); // Texto que indica el idioma actual

  let currentLang = localStorage.getItem("selectedLanguage") || "es"; // Cargar idioma desde localStorage

  // 🔹 Función para actualizar todos los textos con `data-lang`
  function updateText() {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      try {
        let translations = element.getAttribute("data-lang");
        if (translations) {
          const langOptions = Object.fromEntries(
            translations.split(/,(?=[a-z]{2}:)/).map((pair) => pair.split(":"))
          );
          element.innerHTML = langOptions[currentLang] || element.innerHTML;
        }
      } catch (error) {
        console.error("Error procesando data-lang en", element, error);
      }
    });
  }

  // 🔹 Función para cambiar idioma en todas las páginas
  function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";
    langText.textContent = currentLang.toUpperCase(); // Actualiza el botón con el idioma actual
    localStorage.setItem("selectedLanguage", currentLang); // Guarda el idioma en localStorage
    updateText(); // Cambia el idioma en la página actual
  }

  // 🔹 Aplicar el idioma guardado en cualquier página al cargar
  updateText();
  langText.textContent = currentLang.toUpperCase();

  // 🔹 Evento para cambiar idioma cuando se presiona el botón
  langToggle.addEventListener("click", function () {
    toggleLanguage();

    // 🔹 Recargar todas las páginas abiertas con el nuevo idioma
    localStorage.setItem("reloadPages", "true"); // Activar recarga
  });

  // 🔹 Comprobar si hay que recargar por cambio de idioma
  if (localStorage.getItem("reloadPages") === "true") {
    localStorage.removeItem("reloadPages"); // Eliminar la bandera de recarga
    location.reload(); // Recargar la página actual para aplicar el idioma en todas las pestañas
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("language-toggle"); // Botón de cambio de idioma
  const langText = document.getElementById("language-text"); // Texto del botón
  let currentLang = localStorage.getItem("selectedLanguage") || "es"; // Cargar idioma guardado o español por defecto

  // 🔹 Función para actualizar los textos con `data-lang`
  function updateText() {
      document.querySelectorAll("[data-lang]").forEach((element) => {
          try {
              let translations = element.getAttribute("data-lang");
              if (translations) {
                  const langOptions = Object.fromEntries(
                      translations.split(/,(?=[a-z]{2}:)/).map((pair) => pair.split(":"))
                  );
                  element.innerHTML = langOptions[currentLang] || element.innerHTML;
              }
          } catch (error) {
              console.error("Error procesando data-lang en", element, error);
          }
      });
  }

  // 🔹 Función para cambiar el idioma y actualizar en todas las páginas
  function toggleLanguage() {
      currentLang = currentLang === "es" ? "en" : "es"; // Cambiar entre ES e EN
      langText.textContent = currentLang.toUpperCase(); // Actualizar el botón de idioma
      localStorage.setItem("selectedLanguage", currentLang); // Guardar en localStorage
      updateText(); // Actualizar los textos en la página actual

      // 🔹 Enviar evento a otras pestañas abiertas para que actualicen su idioma
      localStorage.setItem("languageChanged", Date.now()); // Forzar actualización en otras pestañas
  }

  // 🔹 Aplicar el idioma guardado al cargar la página
  updateText();
  langText.textContent = currentLang.toUpperCase();

  // 🔹 Evento para cambiar idioma cuando se presiona el botón
  langToggle.addEventListener("click", toggleLanguage);

  // 🔹 Detectar cambios en otras pestañas y actualizar el idioma en todas
  window.addEventListener("storage", function (event) {
      if (event.key === "languageChanged") {
          currentLang = localStorage.getItem("selectedLanguage") || "es";
          updateText();
          langText.textContent = currentLang.toUpperCase();
      }
  });
});


































document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const articles = document.querySelectorAll(".article");

  function searchPosts(query) {
      let results = [];
      let queryLower = query.toLowerCase().trim();

      articles.forEach(article => {
          let titleElement = article.querySelector(".title");
          let contentElement = article.querySelector(".content");

          let title = titleElement ? titleElement.textContent.toLowerCase() : "";
          let content = contentElement ? contentElement.textContent.toLowerCase() : "";

          if (title.includes(queryLower) || content.includes(queryLower)) {
              results.push({
                  title: titleElement.textContent,
                  element: article
              });
          }
      });

      return results;
  }

  function showSearchResults(results) {
      searchResults.innerHTML = "";
      if (results.length === 0 || searchInput.value.trim() === "") {
          searchResults.style.display = "none";
          return;
      }

      searchResults.style.display = "block";
      results.forEach(result => {
          let li = document.createElement("li");
          li.textContent = result.title;
          li.classList.add("search-result-item");
          li.addEventListener("click", function () {
              articles.forEach(article => article.style.display = "none"); // Oculta todos los artículos
              result.element.style.display = "block"; // Muestra solo el artículo filtrado
              searchResults.style.display = "none";
              searchInput.value = result.title;
          });
          searchResults.appendChild(li);
      });
  }

  searchInput.addEventListener("input", function () {
      let query = searchInput.value;
      let results = searchPosts(query);

      // Muestra el dropdown con sugerencias
      showSearchResults(results);

      // Si el campo está vacío, muestra todos los artículos
      if (query.trim() === "") {
          articles.forEach(article => article.style.display = "block");
      } else {
          // Oculta todos los artículos y muestra solo los que coinciden
          articles.forEach(article => article.style.display = "none");
          results.forEach(result => result.element.style.display = "block");
      }
  });

  searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
          e.preventDefault();
          let results = searchPosts(searchInput.value);
          articles.forEach(article => article.style.display = "none");
          results.forEach(result => result.element.style.display = "block");
          searchResults.style.display = "none";
      }
  });

  document.addEventListener("click", function (e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
          searchResults.style.display = "none";
      }
  });
});
