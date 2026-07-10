/* ============================================================
   main.js — perekat halaman (dimuat terakhir di setiap halaman)
   - Reveal-on-scroll ringan (hormati prefers-reduced-motion)
   - Util render kartu berita (dipakai beranda & indeks)
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};
  var root = function () { return window.KLH_ROOT || ''; };

  /* ---- Reveal on scroll ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.addEventListener('DOMContentLoaded', function () {
      Array.prototype.forEach.call(document.querySelectorAll('[data-reveal]'), function (n, i) {
        n.style.transitionDelay = (Math.min(i % 6, 4) * 60) + 'ms';
        io.observe(n);
      });
    });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      Array.prototype.forEach.call(document.querySelectorAll('[data-reveal]'), function (n) { n.classList.add('is-in'); });
    });
  }

  /* ---- Dialog serah-terima tautan eksternal — delegasi global [data-ext]
         (A1-03) + loop fokus & kembalikan fokus ke pemicu (A1-07) ---- */
  var hoDlg = null, hoTrigger = null;
  function hoBuild() {
    hoDlg = document.createElement('div');
    hoDlg.className = 'drawer'; hoDlg.hidden = true;
    hoDlg.innerHTML =
      '<div class="drawer__scrim" data-ho-close></div>' +
      '<div role="dialog" aria-modal="true" aria-labelledby="ho-title" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,calc(100vw - 32px));background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--sh-3);padding:var(--s8)">' +
        '<span class="svc-card__icon svc-card__icon--sky" style="margin-bottom:var(--s4)">' + KLH.iconSVG('external') + '</span>' +
        '<h3 id="ho-title" style="font-size:var(--t-h3)">Anda akan diarahkan ke <span data-ho-name>situs lain</span></h3>' +
        '<p style="color:var(--ink-500);font-size:var(--t-sm)">Halaman berikutnya berada di luar kemenlh.go.id dan memiliki tampilan berbeda. Layanan tetap resmi — Anda dapat kembali kapan saja.</p>' +
        '<div style="display:flex;gap:var(--s3);margin-top:var(--s6);flex-wrap:wrap">' +
          '<a class="btn btn-primary" data-ho-go target="_blank" rel="noopener noreferrer">Lanjutkan ' + KLH.iconSVG('arrowright', 'icon icon--sm') + '</a>' +
          '<button class="btn btn-outline" type="button" data-ho-close>Batal</button>' +
        '</div></div>';
    document.body.appendChild(hoDlg);
  }
  function hoOpen(name, url, trigger) {
    if (!hoDlg) hoBuild();
    hoTrigger = trigger || null;
    hoDlg.querySelector('[data-ho-name]').textContent = name || 'situs lain';
    hoDlg.querySelector('[data-ho-go]').setAttribute('href', url);
    hoDlg.hidden = false; hoDlg.classList.add('open');
    hoDlg.querySelector('[data-ho-go]').focus();
  }
  function hoClose() {
    if (!hoDlg || hoDlg.hidden) return;
    hoDlg.hidden = true; hoDlg.classList.remove('open');
    if (hoTrigger && hoTrigger.focus) {
      /* Pemicu di mega menu yang sudah menutup (focusout) tak bisa dipegangi —
         fokuskan tombol nav induknya agar fokus tidak jatuh ke skip link */
      var item = hoTrigger.closest('.nav-item');
      if (item && !item.classList.contains('open')) {
        (item.querySelector('.nav-link') || hoTrigger).focus();
      } else {
        hoTrigger.focus();
      }
    }
    hoTrigger = null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-ext]');
    if (a) { e.preventDefault(); hoOpen(a.getAttribute('data-ext'), a.getAttribute('href'), a); return; }
    if (e.target.closest && e.target.closest('[data-ho-close]')) hoClose();
    if (e.target.closest && e.target.closest('[data-ho-go]')) hoClose();
  });
  /* Fase capture + stopPropagation: Esc saat dialog terbuka hanya menutup
     dialog (bukan mega menu/drawer di belakangnya) agar fokus pemicu utuh */
  document.addEventListener('keydown', function (e) {
    if (!hoDlg || hoDlg.hidden) return;
    if (e.key === 'Escape') { e.stopPropagation(); hoClose(); return; }
    if (e.key !== 'Tab') return;
    var f = hoDlg.querySelectorAll('a[href], button');
    var first = f[0], last = f[f.length - 1];
    if (!hoDlg.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }, true);

  /* ---- Media artikel: foto asli bila ada, fallback placeholder ---- */
  KLH.mediaCls = function (a) { return a.img ? '' : ' ' + a.ph; };
  KLH.mediaStyle = function (a) {
    return a.img ? ' style="background-image:url(' + root() + a.img + ');background-size:cover;background-position:center"' : '';
  };
  KLH.mediaIcon = function (a, cls) { return a.img ? '' : KLH.iconSVG(a.icon, cls); };

  /* ---- Kartu berita (reusable) ---- */
  KLH.newsCard = function (a, opts) {
    opts = opts || {};
    var mod = (KLH.modules || []).find(function (m) { return m.slug === a.module; });
    var url = root() + 'pages/informasi/detail.html?a=' + a.slug;
    return '<a class="card news-card" href="' + url + '" data-reveal>' +
      '<div class="news-card__media' + KLH.mediaCls(a) + '"' + KLH.mediaStyle(a) + '>' + KLH.mediaIcon(a, 'icon icon--lg') + '</div>' +
      '<div class="news-card__body">' +
        '<div class="news-card__meta">' +
          '<span class="badge bg-orange">' + (mod ? mod.label : a.module) + '</span>' +
          '<time datetime="' + a.date + '">' + KLH.fmtDate(a.date) + '</time>' +
          '<span>' + KLH.iconSVG('eye', 'icon') .replace('class="icon"', 'class="icon" style="width:13px;height:13px;vertical-align:-2px"') + ' ' + KLH.fmtViews(a.views) + '</span>' +
        '</div>' +
        '<' + (opts.h || 'h3') + '>' + a.title + '</' + (opts.h || 'h3') + '>' +
        (opts.excerpt === false ? '' : '<p>' + a.excerpt + '</p>') +
      '</div></a>';
  };
})();
