/* ============================================================
   app.js — perekat Modul 02b · Aplikasi Mobile PPID (prototipe)
   Dimuat setelah data (ppid.js) & icons.js, sebelum skrip inline.
   Menyediakan:
   - Custom element chrome aplikasi: <klh-statusbar>, <klh-appbar>, <klh-botnav>
   - Helper bersama: status badge, timeline, dialog eksternal, toast
     "push notification" (mensimulasikan UR-PPID mobile: notif status)
   Custom element klasik (tanpa ES module), konsisten dgn icons.js.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};
  var R = function () { return window.KLH_ROOT || ''; };

  /* ---- Reveal on scroll (hormati prefers-reduced-motion) ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('DOMContentLoaded', function () {
    var nodes = document.querySelectorAll('[data-reveal]');
    if (reduced || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(nodes, function (n) { n.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, root: document.querySelector('.app-main') });
    Array.prototype.forEach.call(nodes, function (n, i) {
      n.style.transitionDelay = (Math.min(i % 6, 4) * 55) + 'ms'; io.observe(n);
    });
  });

  /* ---- Small icon helper (ukuran inline) ---- */
  function ic(name, px) {
    return KLH.iconSVG(name, 'icon').replace('class="icon"',
      'class="icon" style="width:' + (px || 14) + 'px;height:' + (px || 14) + 'px"');
  }

  /* ---- Status badge (ikon + teks — bukan warna saja) ---- */
  var STATUS = {
    'Diterima':   { cls: 'bg-neutral', icon: 'inbox' },
    'Verifikasi': { cls: 'bg-warning', icon: 'eye' },
    'Diproses':   { cls: 'bg-info',    icon: 'clock' },
    'Selesai':    { cls: 'bg-success', icon: 'check' },
    'Ditolak':    { cls: 'bg-danger',  icon: 'warning' }
  };
  KLH.statusBadge = function (status) {
    var s = STATUS[status] || STATUS.Diterima;
    return '<span class="badge ' + s.cls + '">' + ic(s.icon, 13) + ' ' + status + '</span>';
  };

  KLH.findPermohonan = function (id) {
    return (KLH.ppid.permohonan || []).find(function (p) {
      return p.id.toUpperCase() === String(id).trim().toUpperCase();
    }) || null;
  };

  /* ---- Timeline status (komponen .timeline) — 4 tahap tetap ---- */
  KLH.timelineHTML = function (p) {
    var TAHAP = ['Permohonan diterima', 'Verifikasi kelengkapan', 'Pemrosesan oleh unit teknis',
      p.status === 'Ditolak' ? 'Permohonan ditolak' : 'Jawaban dikirim'];
    var lis = TAHAP.map(function (label, i) {
      var n = i + 1, r = p.riwayat[i], cls = '', dot = '<span class="dot"></span>';
      if (n < p.step || p.step === 4) {
        var rej = (n === 4 && p.status === 'Ditolak');
        cls = rej ? ' class="now rejected"' : ' class="done"';
        dot = '<span class="dot">' + ic(rej ? 'close' : 'check', 13) + '</span>';
      } else if (n === p.step) {
        cls = ' class="now"';
        dot = '<span class="dot">' + ic('clock', 13) + '</span>';
      }
      var meta = r ? KLH.fmtDate(r.t) + ' · ' + r.ket
        : (n === 4 ? 'Melalui email terdaftar sesuai format yang diminta'
                   : 'Estimasi jawaban: paling lambat ' + KLH.fmtDate(p.estimasi) + ' (10 hari kerja)');
      return '<li' + cls + '>' + dot + '<h4>' + label + '</h4><span class="tmeta">' + meta + '</span></li>';
    }).join('');
    return '<ol class="timeline">' + lis + '</ol>';
  };

  /* ---- Toast "push notification" (aria-live) ----
     Mensimulasikan notifikasi push perubahan status di aplikasi mobile. */
  KLH.toast = function (title, body, iconName) {
    var wrap = document.querySelector('.toastwrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'toastwrap';
      wrap.setAttribute('aria-live', 'polite');
      var dev = document.querySelector('.device') || document.body;
      dev.appendChild(wrap);
    }
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.innerHTML = ic(iconName || 'bell', 20) +
      '<div><strong>' + title + '</strong><small>' + body + '</small></div>';
    wrap.appendChild(t);
    setTimeout(function () {
      t.style.transition = 'opacity .3s'; t.style.opacity = '0';
      setTimeout(function () { t.remove(); }, 320);
    }, 5200);
  };

  /* ---- Dialog serah-terima tautan eksternal ([data-ext]) ---- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-ext]');
    if (!a) return;
    e.preventDefault();
    var url = a.href, host = url.replace(/^https?:\/\//, '').split('/')[0];
    var dlg = document.getElementById('klh-ext-dialog');
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.id = 'klh-ext-dialog';
      dlg.style.cssText = 'border:0;border-radius:var(--r-lg);box-shadow:var(--sh-3);padding:var(--s6);max-width:320px;width:calc(100% - 40px)';
      dlg.innerHTML = '<h2 style="font-size:var(--t-h4)">Beralih ke situs lain</h2>' +
        '<p style="font-size:var(--t-sm);color:var(--ink-500)">Tautan ini membuka <strong data-host></strong> — di luar tanggung jawab PPID KLH/BPLH.</p>' +
        '<div style="display:flex;gap:var(--s2);justify-content:flex-end;margin-top:var(--s5)">' +
        '<button class="btn btn-ghost btn-sm" type="button" data-batal>Batal</button>' +
        '<button class="btn btn-primary btn-sm" type="button" data-lanjut>Lanjutkan</button></div>';
      document.body.appendChild(dlg);
      dlg.querySelector('[data-batal]').addEventListener('click', function () { dlg.close(); });
      dlg.querySelector('[data-lanjut]').addEventListener('click', function () { dlg.close(); window.open(dlg._url, '_blank', 'noopener'); });
    }
    dlg._url = url;
    dlg.querySelector('[data-host]').textContent = host;
    dlg.showModal();
  });

  /* ============================================================
     Custom elements — chrome aplikasi
     ============================================================ */
  function define(tag, render) {
    var El = function () { return Reflect.construct(HTMLElement, [], El); };
    El.prototype = Object.create(HTMLElement.prototype);
    El.prototype.connectedCallback = function () { render(this); };
    customElements.define(tag, El);
  }

  /* <klh-statusbar variant="brand"> — status bar semu (dekoratif) */
  define('klh-statusbar', function (el) {
    var brand = el.getAttribute('variant') === 'brand';
    var wifi = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:15px;height:15px"><path d="M12 18.5a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM12 13c1.7 0 3.3.6 4.5 1.8l1.6-1.7A9 9 0 005.9 13.1l1.6 1.7A6.4 6.4 0 0112 13zM12 7.5a12 12 0 018.5 3.5L22 9.4A14.3 14.3 0 002 9.4l1.5 1.6A12 12 0 0112 7.5z"/></svg>';
    var batt = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true" style="width:22px;height:15px"><rect x="2" y="7.5" width="17" height="9" rx="2.4"/><rect x="4" y="9.3" width="12" height="5.4" rx="1" fill="currentColor" stroke="none"/><path d="M21 10.5v3" stroke-linecap="round"/></svg>';
    el.className = 'statusbar' + (brand ? ' statusbar--brand' : '');
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<span class="statusbar__time">09:41</span>' +
      '<span class="statusbar__ind">' + wifi + batt + '</span>';
  });

  /* <klh-appbar title sub back bell home> */
  define('klh-appbar', function (el) {
    var title = el.getAttribute('title') || '';
    var sub = el.getAttribute('sub');
    var back = el.getAttribute('back');
    var bell = el.hasAttribute('bell');
    var home = el.hasAttribute('home');
    var h = '';
    if (back) h += '<a class="iconbtn" href="' + R() + back + '" aria-label="Kembali">' + ic('arrowleft', 22) + '</a>';
    h += '<div style="min-width:0;padding:0 4px">' +
         '<h1 class="appbar__title">' + title + '</h1>' +
         (sub ? '<span class="appbar__sub">' + sub + '</span>' : '') + '</div>';
    h += '<span class="appbar__spacer"></span>';
    if (home) h += '<a class="iconbtn" href="' + R() + 'beranda.html" aria-label="Beranda">' + ic('home', 22) + '</a>';
    if (bell) h += '<button class="iconbtn" type="button" data-bell aria-label="Notifikasi">' + ic('bell', 22) + '<span class="iconbtn__dot"></span></button>';
    el.className = 'appbar';
    el.innerHTML = h;
    var b = el.querySelector('[data-bell]');
    if (b) b.addEventListener('click', function () {
      KLH.toast('Notifikasi terbaru', 'Permohonan PPID-2026-000123 kini “Diproses”.', 'clock');
    });
  });

  /* <klh-botnav active="beranda|permohonan|lacak|riwayat"> + FAB chat */
  var TABS = [
    { key: 'beranda',    href: 'beranda.html',    icon: 'home',     label: 'Beranda' },
    { key: 'permohonan', href: 'permohonan.html', icon: 'document', label: 'Ajukan' },
    { key: 'lacak',      href: 'lacak.html',      icon: 'search',   label: 'Lacak' },
    { key: 'riwayat',    href: 'riwayat.html',    icon: 'clock',    label: 'Riwayat' }
  ];
  define('klh-botnav', function (el) {
    var active = el.getAttribute('active') || '';
    var nav = document.createElement('nav');
    nav.className = 'botnav';
    nav.setAttribute('aria-label', 'Navigasi utama aplikasi');
    nav.innerHTML = TABS.map(function (t) {
      var cur = t.key === active;
      return '<a class="botnav__item" href="' + R() + t.href + '"' + (cur ? ' aria-current="page"' : '') + '>' +
        '<span class="botnav__ic">' + KLH.iconSVG(t.icon, 'icon') + '</span>' + t.label + '</a>';
    }).join('');
    /* FAB Chat Bot AI */
    var fab = document.createElement('a');
    fab.className = 'fab';
    fab.href = R() + 'chatbot.html';
    fab.setAttribute('aria-label', 'Buka Chat Bot AI');
    fab.innerHTML = KLH.iconSVG('speech', 'icon');
    el.replaceWith(nav);
    (document.querySelector('.device') || document.body).appendChild(fab);
  });
})();
