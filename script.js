/* ==========================================================
   GII Médicas — comportamiento del sitio
   ========================================================== */
(function () {
  'use strict';

  var WHATSAPP = '573116891425';

  /* ---------- Año actual en el pie ---------- */
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = String(new Date().getFullYear());

  /* ---------- Menú móvil ---------- */
  var boton = document.getElementById('hamburguesa');
  var menu = document.getElementById('menu');

  function cerrarMenu() {
    if (!menu || !boton) return;
    menu.classList.remove('esta-abierto');
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú');
  }

  if (boton && menu) {
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('esta-abierto');
      boton.setAttribute('aria-expanded', String(abierto));
      boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') cerrarMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrarMenu();
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !boton.contains(e.target)) cerrarMenu();
    });
  }

  /* ---------- Sombra de la barra al hacer scroll ---------- */
  var nav = document.getElementById('nav');
  if (nav) {
    var actualizarNav = function () {
      nav.classList.toggle('is-fija', window.scrollY > 8);
    };
    actualizarNav();
    window.addEventListener('scroll', actualizarNav, { passive: true });
  }

  /* ---------- Filtro de productos ---------- */
  var filtros = document.getElementById('filtros');
  var tarjetas = Array.prototype.slice.call(document.querySelectorAll('.producto'));

  if (filtros && tarjetas.length) {
    filtros.addEventListener('click', function (e) {
      var btn = e.target.closest('.filtro');
      if (!btn) return;

      var categoria = btn.dataset.filtro;

      filtros.querySelectorAll('.filtro').forEach(function (f) {
        f.classList.toggle('is-activo', f === btn);
      });

      tarjetas.forEach(function (tarjeta) {
        var coincide = categoria === 'todos' || tarjeta.dataset.categoria === categoria;
        tarjeta.classList.toggle('esta-oculto', !coincide);
      });
    });
  }

  /* ---------- Enlace activo según la sección visible ---------- */
  var enlaces = Array.prototype.slice.call(document.querySelectorAll('.menu a[href^="#"]'));
  var secciones = enlaces
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && secciones.length) {
    var observadorNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        enlaces.forEach(function (a) {
          a.classList.toggle('is-activo', a.getAttribute('href') === '#' + entrada.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    secciones.forEach(function (s) { observadorNav.observe(s); });
  }

  /* ---------- Animación de entrada ---------- */
  var revelables = Array.prototype.slice.call(document.querySelectorAll('.revelar'));
  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!sinMovimiento && 'IntersectionObserver' in window && revelables.length) {
    var observador = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (entrada, i) {
        if (!entrada.isIntersecting) return;
        var el = entrada.target;
        el.style.transitionDelay = Math.min(i * 70, 280) + 'ms';
        el.classList.add('es-visible');
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revelables.forEach(function (el) { observador.observe(el); });
  } else {
    revelables.forEach(function (el) { el.classList.add('es-visible'); });
  }

  /* ---------- Formulario -> WhatsApp ---------- */
  var formulario = document.getElementById('formulario');

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();

      var requeridos = ['nombre', 'telefono', 'mensaje'];
      var faltante = null;

      requeridos.forEach(function (id) {
        var campo = document.getElementById(id);
        var vacio = !campo.value.trim();
        campo.style.borderColor = vacio ? '#d94848' : '';
        if (vacio && !faltante) faltante = campo;
      });

      if (faltante) {
        faltante.focus();
        return;
      }

      var valor = function (id) {
        var campo = document.getElementById(id);
        return campo ? campo.value.trim() : '';
      };

      var lineas = [
        'Hola GII Médicas, quiero una cotización.',
        '',
        'Nombre: ' + valor('nombre'),
        'Teléfono: ' + valor('telefono')
      ];

      if (valor('correo')) lineas.push('Correo: ' + valor('correo'));
      if (valor('ciudad')) lineas.push('Ciudad: ' + valor('ciudad'));
      if (valor('equipo')) lineas.push('Equipo de interés: ' + valor('equipo'));

      lineas.push('', 'Mensaje: ' + valor('mensaje'));

      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lineas.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }
})();
