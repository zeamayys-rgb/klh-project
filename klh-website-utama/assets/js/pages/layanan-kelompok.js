/* ============================================================
   layanan-kelompok.js — renderer bersama 4 halaman kelompok
   layanan. Halaman shell hanya menyetel:
     <body data-kelompok="pengaduan-aspirasi">
   Termasuk HANDOFF TRANSPARAN untuk tautan eksternal (Flow A):
   klik tautan ↗ memunculkan dialog "Anda akan diarahkan ke …"
   — menjawab temuan audit "disorientasi sistem pihak ketiga".
   ============================================================ */
(function () {
  'use strict';
  var root = function () { return window.KLH_ROOT || ''; };

  document.addEventListener('DOMContentLoaded', function () {
    var slug = document.body.getAttribute('data-kelompok');
    var g = KLH.layanan[slug];
    if (!g) return;

    document.title = g.title + ' — Layanan KLH/BPLH';

    /* ---- Hero ---- */
    var hero = document.getElementById('lk-hero');
    hero.innerHTML =
      '<div class="container">' +
        '<nav aria-label="Jejak navigasi"><ol class="breadcrumb">' +
          '<li><a href="' + root() + 'index.html">Beranda</a></li>' +
          '<li><a href="index.html">Layanan</a></li>' +
          '<li aria-current="page">' + g.title + '</li></ol></nav>' +
        '<span class="eyebrow">' + g.niat + '</span>' +
        '<h1>' + g.title + '</h1>' +
        '<p class="lead">' + g.lead + '</p>' +
      '</div>' + KLH.leafmark();

    /* ---- Daftar layanan ---- */
    var toneCls = g.tone === 'earth' ? ' svc-card__icon--earth' : g.tone === 'sky' ? ' svc-card__icon--sky' : '';
    document.getElementById('lk-list').innerHTML = g.services.map(function (s) {
      var href = s.ext ? s.href : (s.internal ? root() + s.href : '#');
      var attrs = s.ext ? ' data-ext="' + s.name + '" href="' + s.href + '" target="_blank" rel="noopener noreferrer"' : ' href="' + href + '"';
      return '<a class="svc-row"' + attrs + '>' +
        '<span class="svc-card__icon' + toneCls + '">' + KLH.iconSVG(s.ext ? 'external' : s.icon) + '</span>' +
        '<span><h4>' + s.name + (s.ext ? ' <span class="ext-note">' + KLH.iconSVG('external', 'icon').replace('class="icon"', 'class="icon" style="width:13px;height:13px"') + ' membuka situs lain</span>' : '') + '</h4>' +
        '<p>' + s.desc + '</p>' +
        (s.cta ? '<span class="svc-card__foot" style="margin-top:var(--s2)">' + s.cta + ' ' + KLH.iconSVG('arrowright', 'icon icon--sm') + '</span>' : '') +
        '</span><span class="go">' + KLH.iconSVG('chevright') + '</span></a>';
    }).join('');

    /* ---- Alur proses (khusus pengaduan) ---- */
    var stepsBox = document.getElementById('lk-steps');
    if (g.steps && stepsBox) {
      stepsBox.innerHTML =
        '<div class="card tonal" style="box-shadow:none"><div class="card__body">' +
          '<span class="eyebrow">Transparan &amp; terlacak</span>' +
          '<h2 style="font-size:var(--t-h3)">' + g.steps.title + '</h2>' +
          '<ol class="step-list" style="margin-top:var(--s6)">' +
            g.steps.items.map(function (s) { return '<li><span style="padding-top:5px;color:var(--ink-700)">' + s + '</span></li>'; }).join('') +
          '</ol></div></div>';
    }

    /* ---- Catatan ---- */
    var note = document.getElementById('lk-note');
    if (g.note && note) {
      note.innerHTML = '<div class="alert alert-' + g.note.type + '">' + KLH.iconSVG(g.note.icon, 'icon icon--sm') +
        '<div><strong>' + g.note.title + '</strong>' + g.note.text + '</div></div>';
    }

    /* Dialog handoff eksternal kini global di main.js (delegasi [data-ext]) */
  });
})();
