/* ============================================================
   App Shell Modul 03 — <klh-sidebar> + <klh-topbar>
   Aplikasi internal (persona P3 Ratna) — bukan navbar marketing.
   - Sidebar gelap ikon+label, collapsible (desktop), drawer (<1024px)
   - Topbar: pencarian global, panel notifikasi, aksesibilitas,
     dropdown profil pengguna
   Urutan muat: icons.js → data/omni.js → appshell.js → markup.
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

  /* ---- Struktur navigasi ---- */
  var NAV = [
    { label: 'Menu Utama', items: [
      { href: 'index.html', icon: 'grid', label: 'Dashboard' },
      { href: 'inbox.html', icon: 'inbox', label: 'Unified Inbox', badge: 'inbox' },
      { href: 'tiket.html', icon: 'ticket', label: 'Tiket & SLA', badge: 'tiket' },
      { href: 'reporting.html', icon: 'chartline', label: 'Reporting' }
    ]},
    { label: 'Pengaturan', items: [
      { href: 'routing.html', icon: 'route', label: 'Routing & Auto-Reply' },
      { href: 'analytics.html', icon: 'chartpie', label: 'Analytics' },
      { href: 'kanal.html', icon: 'share', label: 'Manajemen Kanal' },
      { href: 'role.html', icon: 'people', label: 'Role Management' },
      { href: 'keamanan.html', icon: 'shield', label: 'Keamanan' }
    ]}
  ];

  /* ---- Drawer (<1024px): satu pintu buka/tutup — body.sb-open, scrim,
     aria-expanded burger, dan fokus selalu sinkron (fokus terkelola,
     Escape/scrim menutup tanpa meninggalkan overlay pemblokir) ---- */
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
    if (jenis === 'inbox') {
      return KLH.omni.percakapan.reduce(function (n, c) { return n + (c.belum || 0); }, 0);
    }
    if (jenis === 'tiket') {
      return KLH.omni.tiket.filter(function (t) { return t.status !== 'Closed'; }).length;
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
          '<span class="sb-lbl"><strong>Omni Channel</strong><small>KLH/BPLH · Internal</small></span>' +
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
    var agen = KLH.session.get() || KLH.omni.agen;
    var notif = KLH.omni.notifikasi;
    var nBaru = notif.filter(function (n) { return n.baru; }).length;

    this.innerHTML =
      '<header class="topbar">' +
        '<button class="tb-burger" type="button" aria-label="Buka menu navigasi" aria-expanded="false">' + ic('menu') + '</button>' +
        '<div class="tb-title"><span class="tb-crumb">Omni Channel</span><strong>' + judul + '</strong></div>' +

        '<div class="tb-search" role="search">' +
          ic('search', 'icon icon--sm') +
          '<input type="search" id="tb-cari" placeholder="Cari percakapan, tiket, pemohon…" aria-label="Pencarian global" autocomplete="off">' +
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
                '<button class="fchip on" type="button" data-nf="semua">Semua</button>' +
                '<button class="fchip" type="button" data-nf="eskalasi">Eskalasi</button>' +
                '<button class="fchip" type="button" data-nf="sistem">Sistem</button>' +
              '</div>' +
              '<ul class="notif-list" data-notif-list></ul>' +
            '</div>' +
          '</div>' +

          '<div class="tb-pop-wrap">' +
            '<button class="tb-btn tb-user" type="button" data-pop="profil" aria-expanded="false">' +
              '<span class="avatar" aria-hidden="true">' + (agen.inisial || 'RP') + '</span>' +
              '<span class="tb-user-nama"><strong>' + (agen.nama || 'Agen') + '</strong><small>' + (agen.peran || 'Agen') + '</small></span>' +
              ic('chevdown', 'icon icon--sm') +
            '</button>' +
            '<div class="tb-pop user-pop" hidden>' +
              '<div class="user-pop__head"><span class="avatar">' + (agen.inisial || 'RP') + '</span>' +
                '<div><strong>' + (agen.nama || 'Agen') + '</strong><small>' + (agen.email || '') + '</small></div></div>' +
              '<a class="user-pop__item" href="profil.html">' + ic('user', 'icon icon--sm') + ' Profil saya</a>' +
              '<a class="user-pop__item" href="keamanan.html">' + ic('shield', 'icon icon--sm') + ' Keamanan akun</a>' +
              '<a class="user-pop__item user-pop__keluar" href="login.html" data-keluar>' + ic('logout', 'icon icon--sm') + ' Keluar</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</header>';

    var el = this;

    /* -- Burger: buka sidebar sebagai drawer di <1024px -- */
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

    /* -- Notifikasi -- */
    var notifList = el.querySelector('[data-notif-list]');
    var nfAktif = 'semua';
    function renderNotif() {
      var rows = notif.filter(function (n) { return nfAktif === 'semua' || n.jenis === nfAktif; });
      notifList.innerHTML = rows.length ? rows.map(function (n) {
        return '<li class="notif-item' + (n.baru ? ' is-baru' : '') + '">' +
          '<span class="notif-ic notif-ic--' + n.jenis + '">' + ic(n.jenis === 'eskalasi' ? 'escalate' : 'settings', 'icon icon--sm') + '</span>' +
          '<a href="' + n.url + '"><strong>' + n.judul + '</strong><span>' + n.isi + '</span>' +
          '<small>' + (n.jenis === 'eskalasi' ? 'Eskalasi' : 'Sistem') + ' · ' + KLH.fmtDateTime(n.t) + '</small></a></li>';
      }).join('') : '<li class="notif-kosong">Tidak ada notifikasi pada filter ini.</li>';
    }
    renderNotif();
    Array.prototype.forEach.call(el.querySelectorAll('[data-nf]'), function (chip) {
      chip.addEventListener('click', function () {
        nfAktif = chip.getAttribute('data-nf');
        Array.prototype.forEach.call(el.querySelectorAll('[data-nf]'), function (c) { c.classList.toggle('on', c === chip); });
        renderNotif();
      });
    });
    el.querySelector('[data-notif-baca]').addEventListener('click', function () {
      notif.forEach(function (n) { n.baru = false; });
      var dot = el.querySelector('[data-notif-dot]');
      if (dot) dot.remove();
      renderNotif();
    });

    /* -- Pencarian global (demo: percakapan + tiket) -- */
    var cari = el.querySelector('#tb-cari');
    var hasil = el.querySelector('#tb-sr');
    cari.addEventListener('input', function () {
      var q = cari.value.trim().toLowerCase();
      if (q.length < 2) { hasil.hidden = true; hasil.innerHTML = ''; return; }
      var conv = KLH.omni.percakapan.filter(function (c) {
        return (c.nama + ' ' + c.subjek + ' ' + c.id).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 4);
      var tkt = KLH.omni.tiket.filter(function (t) {
        return (t.id + ' ' + t.subjek + ' ' + t.pemohon).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 4);
      var html = '';
      if (conv.length) html += '<span class="tb-sr__head">Percakapan</span>' + conv.map(function (c) {
        return '<a href="inbox.html?c=' + c.id + '">' + ic('speech', 'icon icon--sm') + '<span><strong>' + c.nama + '</strong> ' + c.subjek + '</span></a>';
      }).join('');
      if (tkt.length) html += '<span class="tb-sr__head">Tiket</span>' + tkt.map(function (t) {
        return '<a href="tiket-detail.html?t=' + t.id + '">' + ic('ticket', 'icon icon--sm') + '<span><strong>' + t.id + '</strong> ' + t.subjek + '</span></a>';
      }).join('');
      hasil.innerHTML = html || '<span class="tb-sr__kosong">Tidak ditemukan — coba kata kunci lain.</span>';
      hasil.hidden = false;
    });
    /* Tutup hasil hanya bila fokus benar-benar keluar dari area pencarian,
       agar tautan hasil tetap dapat dijangkau dengan Tab (keyboard). */
    var searchWrap = el.querySelector('.tb-search');
    searchWrap.addEventListener('focusout', function (e) {
      if (!searchWrap.contains(e.relatedTarget)) hasil.hidden = true;
    });
    searchWrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { hasil.hidden = true; cari.focus(); }
    });

    /* -- Keluar: bersihkan flag sesi demo -- */
    Array.prototype.forEach.call(el.querySelectorAll('[data-keluar]'), function (a) {
      a.addEventListener('click', function () { KLH.session.clear(); });
    });
  };
  customElements.define('klh-topbar', Topbar);
})();
