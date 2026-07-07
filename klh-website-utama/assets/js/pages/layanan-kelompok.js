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

    /* ---- Dialog handoff eksternal (Flow A — konfirmasi jelas) ---- */
    var dlg = document.createElement('div');
    dlg.className = 'drawer'; dlg.hidden = true;
    dlg.innerHTML =
      '<div class="drawer__scrim" data-ho-close></div>' +
      '<div role="dialog" aria-modal="true" aria-labelledby="ho-title" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,calc(100vw - 32px));background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--sh-3);padding:var(--s8)">' +
        '<span class="svc-card__icon svc-card__icon--sky" style="margin-bottom:var(--s4)">' + KLH.iconSVG('external') + '</span>' +
        '<h3 id="ho-title" style="font-size:var(--t-h3)">Anda akan diarahkan ke <span data-ho-name>situs lain</span></h3>' +
        '<p style="color:var(--ink-500);font-size:var(--t-sm)">Halaman berikutnya berada di luar kemenlh.go.id dan memiliki tampilan berbeda. Layanan tetap resmi — Anda dapat kembali kapan saja.</p>' +
        '<div style="display:flex;gap:var(--s3);margin-top:var(--s6);flex-wrap:wrap">' +
          '<a class="btn btn-primary" data-ho-go target="_blank" rel="noopener noreferrer">Lanjutkan ' + KLH.iconSVG('arrowright', 'icon icon--sm') + '</a>' +
          '<button class="btn btn-outline" type="button" data-ho-close>Batal</button>' +
        '</div></div>';
    document.body.appendChild(dlg);

    function openHo(name, href) {
      dlg.querySelector('[data-ho-name]').textContent = name;
      dlg.querySelector('[data-ho-go]').setAttribute('href', href);
      dlg.hidden = false; dlg.classList.add('open');
      dlg.querySelector('[data-ho-go]').focus();
    }
    function closeHo() { dlg.hidden = true; dlg.classList.remove('open'); }

    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('[data-ext]');
      if (a) { e.preventDefault(); openHo(a.getAttribute('data-ext'), a.getAttribute('href')); return; }
      if (e.target.closest && e.target.closest('[data-ho-close]')) closeHo();
      if (e.target.closest && e.target.closest('[data-ho-go]')) closeHo();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeHo(); });
  });
})();
