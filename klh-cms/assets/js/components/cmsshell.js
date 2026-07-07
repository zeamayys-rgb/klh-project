/* ============================================================
   App Shell Modul 04 — <klh-sidebar> + <klh-topbar> (CMS Konten)
   Adaptasi appshell Modul 03: navigasi konten lintas 3 produk,
   notifikasi antrean review, pencarian global artikel/DIP.
   Urutan muat: icons.js → data/cms.js → cmsshell.js → markup.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  /* ---- Terapkan preferensi aksesibilitas sedini mungkin ---- */
  try {
    if (localStorage.getItem('klh-contrast') === 'high') {
      document.documentElement.setAttribute('data-contrast', 'high');
    }
    var fs = parseInt(localStorage.getItem('klh-fontsize'), 10);
    if (fs === 120 || fs === 140) document.documentElement.style.fontSize = fs + '%';
  } catch (e) {}

  var ic = function (n, cls) { return KLH.iconSVG(n, cls || 'icon'); };
  var halaman = (location.pathname.split('/').pop() || 'index.html');

  /* ---- Struktur navigasi CMS ---- */
  var NAV = [
    { label: 'Konten', items: [
      { href: 'index.html', icon: 'grid', label: 'Dashboard' },
      { href: 'konten.html', icon: 'newspaper', label: 'Website Utama', badge: 'review' },
      { href: 'agenda.html', icon: 'calendar', label: 'Agenda & Kegiatan' },
      { href: 'ppid.html', icon: 'document', label: 'PPID · DIP & FAQ', badge: 'ppid' },
      { href: 'media.html', icon: 'folder', label: 'Pustaka Media' }
    ]},
    { label: 'Administrasi', items: [
      { href: 'pengguna.html', icon: 'people', label: 'Pengguna & Peran' }
    ]}
  ];

  /* ---- Drawer (<1024px) — pola terpusat identik Modul 03 ---- */
  KLH.setDrawer = function (buka) {
    var burger = document.querySelector('.tb-burger');
    var scrim = document.querySelector('.sb-scrim');
    var sb = document.querySelector('.sidebar');
    document.body.classList.toggle('sb-open', buka);
    if (scrim) scrim.hidden = !buka;
    if (burger) burger.setAttribute('aria-expanded', String(buka));
    if (!sb) return;
    if (buka && window.matchMedia('(max-width: 1023px)').matches) {
      var l = sb.querySelector('.sb-link');
      if (l) l.focus();
    } else if (!buka && sb.contains(document.activeElement) && burger) {
      burger.focus();
    }
  };

  function hitungBadge(jenis) {
    if (jenis === 'review') {
      return KLH.cms.artikel.filter(function (a) { return a.status === 'review'; }).length;
    }
    if (jenis === 'ppid') {
      return KLH.cms.dip.filter(function (d) { return d.status === 'review'; }).length +
             KLH.cms.faq.filter(function (f) { return f.status === 'review'; }).length +
             KLH.cms.regulasi.filter(function (r) { return r.status === 'review'; }).length;
    }
    return 0;
  }

  /* ============ <klh-sidebar> ============ */
  var Sidebar = function () { return Reflect.construct(HTMLElement, [], Sidebar); };
  Sidebar.prototype = Object.create(HTMLElement.prototype);
  Sidebar.prototype.connectedCallback = function () {
    var grup = NAV.map(function (g) {
      var lis = g.items.map(function (it) {
        var aktif = halaman === it.href;
        var badge = it.badge ? hitungBadge(it.badge) : 0;
        return '<li><a class="sb-link" href="' + it.href + '"' +
          (aktif ? ' aria-current="page"' : '') + ' title="' + it.label + '">' +
          ic(it.icon, 'icon icon--sm') + '<span class="sb-lbl">' + it.label + '</span>' +
          (badge ? '<span class="sb-badge">' + badge + '</span>' : '') +
          '</a></li>';
      }).join('');
      return '<div class="sb-group"><span class="sb-head">' + g.label + '</span><ul>' + lis + '</ul></div>';
    }).join('');

    this.innerHTML =
      '<div class="sb-scrim" data-sb-close hidden></div>' +
      '<aside class="sidebar" id="sidebar">' +
        '<a class="sb-brand" href="index.html">' +
          '<img class="brand__logo" src="' + (window.KLH_ROOT || '') + 'assets/img/klh-logo.png" alt="Lambang KLH/BPLH">' +
          '<span class="sb-lbl"><strong>CMS Konten</strong><small>KLH/BPLH · Internal</small></span>' +
        '</a>' +
        '<nav class="sb-nav" aria-label="Navigasi utama">' + grup + '</nav>' +
        '<div class="sb-foot">' +
          '<p class="sb-note sb-lbl">Prototipe internal — seluruh data adalah <strong>konten contoh</strong>.</p>' +
          '<button class="sb-link sb-collapse" type="button" aria-pressed="false" title="Ciutkan sidebar">' +
            ic('arrowleft', 'icon icon--sm') + '<span class="sb-lbl">Ciutkan</span>' +
          '</button>' +
          '<a class="sb-link" href="login.html" data-keluar title="Keluar">' +
            ic('logout', 'icon icon--sm') + '<span class="sb-lbl">Keluar</span>' +
          '</a>' +
        '</div>' +
      '</aside>';

    var el = this;
    el.querySelector('.sb-collapse').addEventListener('click', function () {
      var mini = document.body.classList.toggle('sb-mini');
      this.setAttribute('aria-pressed', String(mini));
      this.title = mini ? 'Bentangkan sidebar' : 'Ciutkan sidebar';
    });
    el.querySelector('[data-sb-close]').addEventListener('click', function () {
      KLH.setDrawer(false);
    });
    el.querySelector('[data-keluar]').addEventListener('click', function () {
      KLH.session.clear();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('sb-open')) KLH.setDrawer(false);
    });
  };
  customElements.define('klh-sidebar', Sidebar);

  /* ============ <klh-topbar judul="…"> ============ */
  var Topbar = function () { return Reflect.construct(HTMLElement, [], Topbar); };
  Topbar.prototype = Object.create(HTMLElement.prototype);
  Topbar.prototype.connectedCallback = function () {
    var judul = this.getAttribute('judul') || 'Dashboard';
    var admin = KLH.session.get() || KLH.cms.admin;
    var notif = KLH.cms.notifikasi;
    var nBaru = notif.filter(function (n) { return n.baru; }).length;

    this.innerHTML =
      '<header class="topbar">' +
        '<button class="tb-burger" type="button" aria-label="Buka menu navigasi" aria-expanded="false">' + ic('menu') + '</button>' +
        '<div class="tb-title"><span class="tb-crumb">CMS Konten</span><strong>' + judul + '</strong></div>' +

        '<div class="tb-search" role="search">' +
          ic('search', 'icon icon--sm') +
          '<input type="search" id="tb-cari" placeholder="Cari artikel, DIP, agenda…" aria-label="Pencarian global" autocomplete="off">' +
          '<div class="tb-sr" id="tb-sr" hidden></div>' +
        '</div>' +

        '<div class="tb-actions">' +
          '<div class="tb-pop-wrap">' +
            '<button class="tb-btn" type="button" data-pop="a11y" aria-expanded="false" aria-label="Pengaturan aksesibilitas">' + ic('access') + '</button>' +
            '<div class="tb-pop a11y-pop" hidden>' +
              '<h4>' + ic('access', 'icon icon--sm') + ' Aksesibilitas</h4>' +
              '<div class="a11y-row"><span class="lbl">Kontras tinggi<small>Perkuat warna teks &amp; garis</small></span>' +
                '<div class="a11y-ctrl"><button type="button" data-kontras aria-pressed="false">Aktif</button></div></div>' +
              '<div class="a11y-row"><span class="lbl">Ukuran teks<small>100% · 120% · 140%</small></span>' +
                '<div class="a11y-ctrl">' +
                  '<button type="button" data-fs="100" aria-pressed="true">A</button>' +
                  '<button type="button" data-fs="120" aria-pressed="false" style="font-size:1.06em">A</button>' +
                  '<button type="button" data-fs="140" aria-pressed="false" style="font-size:1.13em">A</button>' +
                '</div></div>' +
            '</div>' +
          '</div>' +

          '<div class="tb-pop-wrap">' +
            '<button class="tb-btn" type="button" data-pop="notif" aria-expanded="false" aria-label="Notifikasi' + (nBaru ? ', ' + nBaru + ' baru' : '') + '">' +
              ic('bell') + (nBaru ? '<span class="tb-dot" data-notif-dot>' + nBaru + '</span>' : '') +
            '</button>' +
            '<div class="tb-pop notif-pop" hidden>' +
              '<div class="notif-head"><h4>' + ic('bell', 'icon icon--sm') + ' Notifikasi</h4>' +
                '<button class="notif-clear" type="button" data-notif-baca>Tandai semua dibaca</button></div>' +
              '<div class="filterbar notif-filter">' +
                '<button class="fchip on" type="button" data-nf="semua" aria-pressed="true">Semua</button>' +
                '<button class="fchip" type="button" data-nf="review" aria-pressed="false">Review</button>' +
                '<button class="fchip" type="button" data-nf="sistem" aria-pressed="false">Sistem</button>' +
              '</div>' +
              '<ul class="notif-list" data-notif-list></ul>' +
            '</div>' +
          '</div>' +

          '<div class="tb-pop-wrap">' +
            '<button class="tb-btn tb-user" type="button" data-pop="profil" aria-expanded="false">' +
              '<span class="avatar" aria-hidden="true">' + (admin.inisial || 'AD') + '</span>' +
              '<span class="tb-user-nama"><strong>' + (admin.nama || 'Admin') + '</strong><small>' + (admin.peran || 'Editor') + '</small></span>' +
              ic('chevdown', 'icon icon--sm') +
            '</button>' +
            '<div class="tb-pop user-pop" hidden>' +
              '<div class="user-pop__head"><span class="avatar">' + (admin.inisial || 'AD') + '</span>' +
                '<div><strong>' + (admin.nama || 'Admin') + '</strong><small>' + (admin.email || '') + '</small></div></div>' +
              '<a class="user-pop__item" href="pengguna.html">' + ic('user', 'icon icon--sm') + ' Pengguna &amp; peran</a>' +
              '<a class="user-pop__item user-pop__keluar" href="login.html" data-keluar>' + ic('logout', 'icon icon--sm') + ' Keluar</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</header>';

    var el = this;

    el.querySelector('.tb-burger').addEventListener('click', function () {
      KLH.setDrawer(!document.body.classList.contains('sb-open'));
    });

    /* -- Popover: satu terbuka pada satu waktu -- */
    function tutupSemua(kecuali) {
      Array.prototype.forEach.call(el.querySelectorAll('.tb-pop'), function (p) {
        if (p !== kecuali) p.hidden = true;
      });
      Array.prototype.forEach.call(el.querySelectorAll('[data-pop]'), function (b) {
        if (!kecuali || b.nextElementSibling !== kecuali) b.setAttribute('aria-expanded', 'false');
      });
    }
    Array.prototype.forEach.call(el.querySelectorAll('[data-pop]'), function (btn) {
      btn.addEventListener('click', function () {
        var pop = btn.nextElementSibling;
        var buka = pop.hidden;
        tutupSemua(buka ? pop : null);
        pop.hidden = !buka;
        btn.setAttribute('aria-expanded', String(buka));
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.tb-pop-wrap')) tutupSemua(null);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') tutupSemua(null);
    });

    /* -- Aksesibilitas: kontras & ukuran teks (localStorage, try/catch) -- */
    var btnKontras = el.querySelector('[data-kontras]');
    function setKontras(on, simpan) {
      if (on) document.documentElement.setAttribute('data-contrast', 'high');
      else document.documentElement.removeAttribute('data-contrast');
      btnKontras.setAttribute('aria-pressed', String(on));
      if (simpan) { try { on ? localStorage.setItem('klh-contrast', 'high') : localStorage.removeItem('klh-contrast'); } catch (e) {} }
    }
    setKontras(document.documentElement.getAttribute('data-contrast') === 'high', false);
    btnKontras.addEventListener('click', function () {
      setKontras(btnKontras.getAttribute('aria-pressed') !== 'true', true);
    });

    var fsBtns = el.querySelectorAll('[data-fs]');
    function setFs(val, simpan) {
      document.documentElement.style.fontSize = (val === 100 ? '' : val + '%');
      Array.prototype.forEach.call(fsBtns, function (b) {
        b.setAttribute('aria-pressed', String(parseInt(b.getAttribute('data-fs'), 10) === val));
      });
      if (simpan) { try { val === 100 ? localStorage.removeItem('klh-fontsize') : localStorage.setItem('klh-fontsize', String(val)); } catch (e) {} }
    }
    try { setFs(parseInt(localStorage.getItem('klh-fontsize'), 10) || 100, false); } catch (e) {}
    Array.prototype.forEach.call(fsBtns, function (b) {
      b.addEventListener('click', function () { setFs(parseInt(b.getAttribute('data-fs'), 10), true); });
    });

    /* -- Notifikasi (jenis: review · sistem) -- */
    var notifList = el.querySelector('[data-notif-list]');
    var nfAktif = 'semua';
    function renderNotif() {
      var rows = notif.filter(function (n) { return nfAktif === 'semua' || n.jenis === nfAktif; });
      notifList.innerHTML = rows.length ? rows.map(function (n) {
        return '<li class="notif-item' + (n.baru ? ' is-baru' : '') + '">' +
          '<span class="notif-ic notif-ic--' + (n.jenis === 'review' ? 'eskalasi' : 'sistem') + '">' +
            ic(n.jenis === 'review' ? 'eye' : 'settings', 'icon icon--sm') + '</span>' +
          '<a href="' + n.url + '"><strong>' + n.judul + '</strong><span>' + n.isi + '</span>' +
          '<small>' + (n.jenis === 'review' ? 'Review' : 'Sistem') + ' · ' + KLH.fmtDateTime(n.t) + '</small></a></li>';
      }).join('') : '<li class="notif-kosong">Tidak ada notifikasi pada filter ini.</li>';
    }
    renderNotif();
    Array.prototype.forEach.call(el.querySelectorAll('[data-nf]'), function (chip) {
      chip.addEventListener('click', function () {
        nfAktif = chip.getAttribute('data-nf');
        Array.prototype.forEach.call(el.querySelectorAll('[data-nf]'), function (c) {
          c.classList.toggle('on', c === chip);
          c.setAttribute('aria-pressed', String(c === chip));
        });
        renderNotif();
      });
    });
    el.querySelector('[data-notif-baca]').addEventListener('click', function () {
      notif.forEach(function (n) { n.baru = false; });
      var dot = el.querySelector('[data-notif-dot]');
      if (dot) dot.remove();
      renderNotif();
    });

    /* -- Pencarian global (demo: artikel + DIP + agenda) -- */
    var cari = el.querySelector('#tb-cari');
    var hasil = el.querySelector('#tb-sr');
    cari.addEventListener('input', function () {
      var q = cari.value.trim().toLowerCase();
      if (q.length < 2) { hasil.hidden = true; hasil.innerHTML = ''; return; }
      var art = KLH.cms.artikel.filter(function (a) {
        return (a.judul + ' ' + a.id + ' ' + a.kategori).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 4);
      var dip = KLH.cms.dip.filter(function (d) {
        return (d.judul + ' ' + d.id).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 3);
      var agd = KLH.cms.agenda.filter(function (g) {
        return (g.judul + ' ' + g.id).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 3);
      var html = '';
      if (art.length) html += '<span class="tb-sr__head">Konten Website</span>' + art.map(function (a) {
        return '<a href="konten-edit.html?id=' + a.id + '">' + ic('newspaper', 'icon icon--sm') + '<span><strong>' + a.id + '</strong> ' + a.judul + '</span></a>';
      }).join('');
      if (dip.length) html += '<span class="tb-sr__head">PPID · DIP</span>' + dip.map(function (d) {
        return '<a href="ppid.html">' + ic('document', 'icon icon--sm') + '<span><strong>' + d.id + '</strong> ' + d.judul + '</span></a>';
      }).join('');
      if (agd.length) html += '<span class="tb-sr__head">Agenda</span>' + agd.map(function (g) {
        return '<a href="agenda.html">' + ic('calendar', 'icon icon--sm') + '<span><strong>' + KLH.fmtDate(g.mulai) + '</strong> ' + g.judul + '</span></a>';
      }).join('');
      hasil.innerHTML = html || '<span class="tb-sr__kosong">Tidak ditemukan — coba kata kunci lain.</span>';
      hasil.hidden = false;
    });
    var searchWrap = el.querySelector('.tb-search');
    searchWrap.addEventListener('focusout', function (e) {
      if (!searchWrap.contains(e.relatedTarget)) hasil.hidden = true;
    });
    searchWrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { hasil.hidden = true; cari.focus(); }
    });

    Array.prototype.forEach.call(el.querySelectorAll('[data-keluar]'), function (a) {
      a.addEventListener('click', function () { KLH.session.clear(); });
    });
  };
  customElements.define('klh-topbar', Topbar);
})();
