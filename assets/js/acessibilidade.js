(function() {
  'use strict';

  var BASE = (function() {
    var path = window.location.pathname.replace(/\/[^/]*\.html$/, '/');
    var depth = Math.max(0, path.split('/').length - 2);
    var up = '';
    for (var i = 0; i < depth; i++) up += '../';
    return up;
  })();

  var STORAGE_KEY = 'smartcondo_acessibilidade';

  function getPrefs() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (_) { return {}; }
  }

  function savePrefs(prefs) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch (_) {}
  }

  function applyPrefs(prefs) {
    document.body.classList.toggle('font-grande', !!prefs.fontGrande);
    document.body.classList.toggle('alto-contraste', !!prefs.altoContraste);
    document.body.classList.toggle('modo-leitura', !!prefs.modoLeitura);
  }

  function injectWidget() {
    var existing = document.querySelector('.accessibility-widget');
    if (existing) existing.remove();

    var html =
      '<div class="accessibility-widget" role="region" aria-label="Ferramentas de acessibilidade">' +
        '<input type="checkbox" id="access-toggle" aria-label="Abrir menu de acessibilidade">' +
        '<label for="access-toggle" class="access-button" title="Abrir ferramentas de acessibilidade" aria-label="Abrir ferramentas de acessibilidade">' +
          '<img src="' + BASE + 'assets/img/acessibilidade.png" class="access-icon-img" alt="" aria-hidden="true">' +
        '</label>' +
        '<div class="access-menu" role="menu" aria-label="Opções de acessibilidade">' +
          '<label role="menuitem" tabindex="0"><input type="checkbox" id="font-toggle"> Aumentar fonte</label>' +
          '<label role="menuitem" tabindex="0"><input type="checkbox" id="contrast-toggle"> Alto contraste</label>' +
          '<label role="menuitem" tabindex="0"><input type="checkbox" id="read-toggle"> Modo leitura</label>' +
        '</div>' +
      '</div>';

    var temp = document.createElement('div');
    temp.innerHTML = html;
    document.body.appendChild(temp.firstElementChild);
  }

  function setupWidget() {
    var widget = document.querySelector('.accessibility-widget');
    if (!widget) return;

    var prefs = getPrefs();
    var fontToggle = document.getElementById('font-toggle');
    var contrastToggle = document.getElementById('contrast-toggle');
    var readToggle = document.getElementById('read-toggle');

    if (fontToggle) fontToggle.checked = !!prefs.fontGrande;
    if (contrastToggle) contrastToggle.checked = !!prefs.altoContraste;
    if (readToggle) readToggle.checked = !!prefs.modoLeitura;
    applyPrefs(prefs);

    var accessToggle = document.getElementById('access-toggle');
    if (accessToggle) {
      accessToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.checked = !this.checked;
        }
      });
    }

    document.querySelectorAll('.access-menu label[tabindex]').forEach(function(label) {
      label.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var cb = this.querySelector('input[type="checkbox"]');
          if (cb) {
            cb.checked = !cb.checked;
            cb.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      });
    });

    if (fontToggle) {
      fontToggle.addEventListener('change', function() {
        prefs.fontGrande = this.checked;
        savePrefs(prefs);
        document.body.classList.toggle('font-grande', this.checked);
      });
    }
    if (contrastToggle) {
      contrastToggle.addEventListener('change', function() {
        prefs.altoContraste = this.checked;
        savePrefs(prefs);
        document.body.classList.toggle('alto-contraste', this.checked);
      });
    }
    if (readToggle) {
      readToggle.addEventListener('change', function() {
        prefs.modoLeitura = this.checked;
        savePrefs(prefs);
        document.body.classList.toggle('modo-leitura', this.checked);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      injectWidget();
      setupWidget();
    });
  } else {
    injectWidget();
    setupWidget();
  }
})();
