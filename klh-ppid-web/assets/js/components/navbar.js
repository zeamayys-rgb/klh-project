/* ============================================================
   <klh-navbar active="dip"> — navigasi Modul 02 · PPID Web
   Varian sub-brand "PPID KLH/BPLH", lebih ringkas dari Modul 01:
   - Utility bar: tautan ← Situs Utama + Aksesibilitas
   - Navbar: brand PPID + 5 tautan datar + tombol Lacak & akun
   - Akun demo: bila sesi aktif (KLH.session) tampil nama + Keluar
   - Mobile (<1024px): hamburger → drawer (target ≥44px)
   Data: KLH.menu (assets/js/data/menu.js).
   ============================================================ */
(function () {
  'use strict';
  var root = function () { return window.KLH_ROOT || ''; };
  var href = function (h) { return /^https?:/.test(h) ? h : root() + h; };
  var ic = function (n, c) { return KLH.iconSVG(n, c || 'icon icon--sm'); };

  function accountHTML(sesi) {
    if (sesi) {
      return '<a class="btn btn-secondary btn-sm" href="' + href('riwayat.html') + '">' + ic('user') +
          '<span class="nav-acc-name">' + String(sesi.nama).replace(/</g, '&lt;') + '</span></a>' +
        '<button class="btn btn-ghost btn-sm" type="button" data-logout>Keluar</button>';
    }
    return '<a class="btn btn-outline btn-sm" href="' + href('masuk.html') + '">' + ic('user') + ' Masuk</a>' +
      '<a class="btn btn-primary btn-sm" href="' + href('permohonan.html') + '">' + ic('document') + ' Ajukan</a>';
  }

  function build(el) {
    var active = el.getAttribute('active') || '';
    var sesi = KLH.session.get();

    var navLis = KLH.menu.nav.map(function (item) {
      var isActive = item.id === active;
      return '<li class="nav-item"><a class="nav-link' + (isActive ? ' is-active' : '') + '" href="' + href(item.href) + '"' +
        (isActive ? ' aria-current="page"' : '') + '>' + item.label + '</a></li>';
    }).join('');

    el.innerHTML =
      '<a class="skip" href="#konten">Lewati ke konten utama</a>' +
      '<header class="site-header">' +
        '<div class="utilbar"><div class="container">' +
          '<a class="utilbtn" href="../klh-website-utama/index.html" style="padding-left:0">' + ic('arrowleft') + ' Situs Utama KLH/BPLH</a>' +
          '<span class="utilbar__actions">' +
            '<button type="button" data-a11y-open>' + ic('access') + ' Aksesibilitas</button>' +
            '<span class="sep" aria-hidden="true"></span>' +
            '<span class="utilbar__brand">' + ic('institution') + ' Layanan Informasi Publik</span>' +
          '</span>' +
        '</div></div>' +
        '<nav class="navbar" aria-label="Navigasi utama"><div class="container">' +
          '<a class="brand" href="' + href('index.html') + '">' +
            '<img class="brand__logo" src="' + href('assets/img/klh-logo.png') + '" alt="" width="44" height="44">' +
            '<span class="brand__name">PPID <span style="color:var(--klh-green-600)">·</span> KLH/BPLH' +
            '<span class="brand__sub">Pejabat Pengelola Informasi &amp; Dokumentasi</span></span>' +
          '</a>' +
          '<ul class="nav-menu">' + navLis + '</ul>' +
          '<div class="nav-actions">' +
            '<a class="btn btn-ghost btn-sm" href="' + href('lacak.html') + '">' + ic('search') + ' Lacak</a>' +
            accountHTML(sesi) +
          '</div>' +
          '<button class="nav-burger" aria-label="Buka menu navigasi" aria-expanded="false" data-drawer-open>' + ic('menu', 'icon') + '</button>' +
        '</div></nav>' +
      '</header>' +
      '<div class="drawer" hidden>' +
        '<div class="drawer__scrim" data-drawer-close></div>' +
        '<div class="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu navigasi">' +
          '<div class="drawer__head"><strong style="font-family:var(--font-display)">Menu PPID</strong>' +
            '<button class="btn btn-ghost btn-sm" data-drawer-close aria-label="Tutup menu">' + ic('close', 'icon') + '</button></div>' +
          '<div class="drawer__body">' +
            KLH.menu.nav.map(function (item) {
              return '<a class="drawer__link" href="' + href(item.href) + '">' + item.label + ' ' + ic('chevright') + '</a>';
            }).join('') +
            '<hr>' +
            '<a class="drawer__link" href="' + href('lacak.html') + '">Lacak Permohonan ' + ic('search') + '</a>' +
            '<a class="drawer__link" href="' + href('permohonan.html') + '">Ajukan Permohonan ' + ic('document') + '</a>' +
            (sesi
              ? '<a class="drawer__link" href="' + href('riwayat.html') + '">Riwayat &amp; Notifikasi ' + ic('bell') + '</a>' +
                '<button class="drawer__link" type="button" data-logout style="width:100%">Keluar ' + ic('arrowright') + '</button>'
              : '<a class="drawer__link" href="' + href('masuk.html') + '">Masuk / Daftar ' + ic('user') + '</a>') +
            '<hr><a class="drawer__link" href="../klh-website-utama/index.html">' + '← Situs Utama KLH/BPLH</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* ---- Keluar (demo) ---- */
    Array.prototype.forEach.call(el.querySelectorAll('[data-logout]'), function (b) {
      b.addEventListener('click', function () {
        KLH.session.clear();
        window.location.href = href('index.html');
      });
    });

    /* ---- Drawer mobile ---- */
    var drawer = el.querySelector('.drawer');
    var burger = el.querySelector('[data-drawer-open]');
    function setDrawer(open) {
      drawer.hidden = !open;
      drawer.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) { var f = drawer.querySelector('button, a, input'); if (f) f.focus(); }
      else burger.focus();
    }
    burger.addEventListener('click', function () { setDrawer(true); });
    Array.prototype.forEach.call(el.querySelectorAll('[data-drawer-close]'), function (b) {
      b.addEventListener('click', function () { setDrawer(false); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !drawer.hidden) setDrawer(false); });
  }

  var Navbar = function () { return Reflect.construct(HTMLElement, [], Navbar); };
  Navbar.prototype = Object.create(HTMLElement.prototype);
  Navbar.prototype.connectedCallback = function () { build(this); };
  customElements.define('klh-navbar', Navbar);
})();
