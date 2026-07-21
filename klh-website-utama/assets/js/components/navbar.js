/* ============================================================
   <klh-navbar active="profil"> — navigasi global
   - Utility bar: SPBE, Aksesibilitas, Bahasa, Masuk
   - Navbar: brand + 4 menu utama (Mega Menu) + PPID + search
   - Mobile (<1024px): hamburger → drawer akordeon (target ≥44px)
   - Keyboard: Enter/Space buka panel, Esc tutup, fokus keluar tutup
   Data: KLH.menu (assets/js/data/menu.js) — satu sumber kebenaran.
   ============================================================ */
(function () {
  'use strict';
  var root = function () { return window.KLH_ROOT || ''; };
  var href = function (h) { return /^https?:/.test(h) ? h : root() + h; };
  var ic = function (n, c) { return KLH.iconSVG(n, c || 'icon icon--sm'); };

  var extAttrs = ' target="_blank" rel="noopener noreferrer"';
  var extTail = function () {
    return ' <span class="mega__ext">' + ic('external', 'icon') .replace('class="icon"', 'class="icon" style="width:12px;height:12px"') + '<span class="sr-only">membuka situs lain</span></span>';
  };

  function megaPanel(item) {
    var p = item.panel;
    var colCount = p.cols || 3;
    var colsHtml = '';
    for (var c = 1; c <= colCount; c++) {
      var groups = p.groups.filter(function (g) { return g.col === c; });
      colsHtml += '<div class="mega__col">' + groups.map(function (g) {
        var lis = g.items.map(function (it) {
          var ext = it.ext;
          return '<li><a class="mega__link" href="' + href(it.href) + '"' + (ext ? extAttrs + ' data-ext="' + it.label + '"' : '') + '>' +
            ic(it.ext ? 'external' : it.icon) +
            '<span>' + it.label + (ext ? extTail() : '') +
            (it.desc ? '<small>' + it.desc + '</small>' : '') + '</span></a></li>';
        }).join('');
        return '<h3>' + g.title + '</h3><ul class="mega__list">' + lis + '</ul>';
      }).join('<div style="height:var(--s4)"></div>') + '</div>';
    }
    var promo = '';
    if (p.promo) {
      promo = '<a class="mega__promo" href="' + href(p.promo.href) + '">' + KLH.leafmark() +
        '<span class="eyebrow" style="color:var(--klh-green-300);margin:0">' + p.promo.eyebrow + '</span>' +
        '<strong>' + p.promo.title + '</strong><p>' + p.promo.desc + '</p>' +
        '<span class="btn btn--inverse btn-sm" style="align-self:flex-start">' + p.promo.cta + ' ' + ic('arrowright') + '</span></a>';
    }
    return '<div class="mega" role="menu" aria-label="Submenu ' + item.label + '" style="--mega-cols:' + colCount + '">' + colsHtml + promo + '</div>';
  }

  function drawerSection(item) {
    if (!item.panel) {
      return '<a class="drawer__link" href="' + href(item.href) + '">' + item.label + ' ' + ic('chevright') + '</a>';
    }
    var subs = item.panel.groups.map(function (g) {
      return '<span class="grouplabel">' + g.title + '</span>' + g.items.map(function (it) {
        return '<a href="' + href(it.href) + '"' + (it.ext ? extAttrs + ' data-ext="' + it.label + '"' : '') + '>' +
          ic(it.ext ? 'external' : it.icon) + '<span>' + it.label +
          (it.ext ? ' <span class="ext-note">· situs lain</span>' : '') + '</span></a>';
      }).join('');
    }).join('');
    return '<button class="drawer__acc" aria-expanded="false">' + item.label + ' <span class="caret">' + ic('chevdown') + '</span></button>' +
      '<div class="drawer__sub">' + subs + '</div>';
  }

  function build(el) {
    var active = el.getAttribute('active') || '';
    var items = KLH.menu.nav;

    var navLis = items.map(function (item) {
      var isActive = item.id === active;
      if (!item.panel) {
        return '<li class="nav-item"><a class="nav-link' + (isActive ? ' is-active' : '') + '" href="' + href(item.href) + '"' +
          (isActive ? ' aria-current="page"' : '') + '>' + item.label + '</a></li>';
      }
      return '<li class="nav-item" data-mega>' +
        '<button class="nav-link' + (isActive ? ' is-active' : '') + '" aria-haspopup="true" aria-expanded="false">' +
        item.label + ' <span class="caret">' + ic('chevdown') + '</span></button>' +
        megaPanel(item) + '</li>';
    }).join('');

    el.innerHTML =
      '<a class="skip" href="#konten">Lewati ke konten utama</a>' +
      '<header class="site-header">' +
        '<div class="utilbar"><div class="container">' +
          '<span class="utilbar__brand">' + ic('institution') + ' Portal Resmi<span class="utilbar__long"> Pemerintah Republik Indonesia</span></span>' +
          '<span class="utilbar__actions">' +
            '<button type="button" data-a11y-open aria-label="Aksesibilitas">' + ic('access') + '<span class="utilbar__long"> Aksesibilitas</span></button>' +
            '<span class="sep" aria-hidden="true"></span>' +
            '<button type="button" aria-label="Ganti bahasa — saat ini Bahasa Indonesia">' + ic('translate') + ' ID / EN</button>' +
            '<span class="sep" aria-hidden="true"></span>' +
            '<a class="utilbtn" href="' + href('pages/ppid.html') + '">' + ic('user') + ' Masuk</a>' +
          '</span>' +
        '</div></div>' +
        '<nav class="navbar" aria-label="Navigasi utama"><div class="container">' +
          '<a class="brand" href="' + href('index.html') + '">' +
            '<img class="brand__logo" src="' + href('assets/img/klh-logo.png') + '" alt="" width="44" height="44">' +
            '<span class="brand__name">KLH <span style="color:var(--klh-green-600)">/</span> BPLH' +
            '<span class="brand__sub">Kementerian Lingkungan Hidup RI</span></span>' +
          '</a>' +
          '<ul class="nav-menu">' + navLis + '</ul>' +
          '<form class="nav-search" role="search" action="' + href('pages/pencarian.html') + '" method="get">' +
            ic('search') +
            '<input type="search" name="q" placeholder="Cari berita, layanan, peraturan…" aria-label="Cari di seluruh situs">' +
          '</form>' +
          '<button class="nav-burger" aria-label="Buka menu navigasi" aria-expanded="false" data-drawer-open>' + ic('menu', 'icon') + '</button>' +
        '</div></nav>' +
      '</header>' +
      '<div class="drawer" hidden>' +
        '<div class="drawer__scrim" data-drawer-close></div>' +
        '<div class="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu navigasi">' +
          '<div class="drawer__head"><strong style="font-family:var(--font-display)">Menu</strong>' +
            '<button class="btn btn-ghost btn-sm" data-drawer-close aria-label="Tutup menu">' + ic('close', 'icon') + '</button></div>' +
          '<div class="drawer__body">' +
            '<form role="search" action="' + href('pages/pencarian.html') + '" method="get" style="padding:var(--s2) var(--s3) var(--s4)">' +
              '<div class="input-group"><input class="input" type="search" name="q" placeholder="Cari di situs…" aria-label="Cari di seluruh situs">' +
              '<button class="btn btn-primary" type="submit">' + ic('search') + '<span class="sr-only">Cari</span></button></div></form>' +
            items.map(drawerSection).join('') +
            '<hr><a class="drawer__link" href="' + href('pages/ppid.html') + '">' + 'Masuk / Akun ' + ic('user') + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* ---- Perilaku Mega Menu ---- */
    var megaItems = Array.prototype.slice.call(el.querySelectorAll('[data-mega]'));
    function closeAll(except) {
      megaItems.forEach(function (li) {
        if (li !== except) {
          li.classList.remove('open');
          li.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
        }
      });
    }
    megaItems.forEach(function (li) {
      var btn = li.querySelector('.nav-link');
      /* Hover hanya memberi umpan balik visual (abu-abu); panel dibuka lewat
         KLIK dan tetap terbuka sampai pengguna menutupnya —
         klik ulang tombol, klik di luar area dropdown, atau Esc. */
      btn.addEventListener('click', function () {
        var open = li.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
        closeAll(open ? li : null);
      });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });
    document.addEventListener('click', function (e) { if (!el.contains(e.target)) closeAll(null); });

    /* Jepit panel agar tidak keluar viewport (item sisi kanan) */
    function clampPanels() {
      megaItems.forEach(function (li) {
        var m = li.querySelector('.mega');
        m.style.left = ''; m.style.right = ''; m.style.transform = '';
        var r = m.getBoundingClientRect();
        var pad = 16;
        if (r.right > window.innerWidth - pad) {
          var shift = r.right - (window.innerWidth - pad);
          m.style.transform = 'translateX(calc(-50% - ' + Math.ceil(shift) + 'px))';
        } else if (r.left < pad) {
          m.style.transform = 'translateX(calc(-50% + ' + Math.ceil(pad - r.left) + 'px))';
        }
      });
    }
    requestAnimationFrame(clampPanels);
    window.addEventListener('resize', clampPanels);

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
    Array.prototype.forEach.call(el.querySelectorAll('.drawer__acc'), function (acc) {
      acc.addEventListener('click', function () {
        var open = acc.getAttribute('aria-expanded') === 'true';
        acc.setAttribute('aria-expanded', String(!open));
      });
    });
  }

  var Navbar = function () { return Reflect.construct(HTMLElement, [], Navbar); };
  Navbar.prototype = Object.create(HTMLElement.prototype);
  Navbar.prototype.connectedCallback = function () { build(this); };
  customElements.define('klh-navbar', Navbar);
})();
