/* ============================================================
   main.js — perekat halaman Modul 02 · PPID Web
   (dimuat setelah markup, sebelum skrip inline halaman)
   - Reveal-on-scroll ringan (hormati prefers-reduced-motion)
   - Render bersama: badge status & timeline permohonan
     (dipakai lacak.html dan riwayat.html)
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

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

  /* ---- Dialog serah-terima tautan eksternal ([data-ext]) ----
     Konvensi CLAUDE.md: "Anda akan diarahkan ke …" (Lanjutkan/Batal).
     Memakai elemen <dialog> native. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-ext]');
    if (!a) return;
    e.preventDefault();
    var url = a.href;
    var host = url.replace(/^https?:\/\//, '').split('/')[0];
    var dlg = document.getElementById('klh-ext-dialog');
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.id = 'klh-ext-dialog';
      dlg.style.cssText = 'border:0;border-radius:var(--r-lg);box-shadow:var(--sh-3);padding:var(--s6);max-width:420px;width:calc(100vw - 48px)';
      dlg.innerHTML = '<h2 style="font-size:var(--t-h3)">Anda akan diarahkan ke situs lain</h2>' +
        '<p style="font-size:var(--t-sm);color:var(--ink-500)">Tautan ini membuka <strong data-host></strong> di tab baru — situs di luar tanggung jawab PPID KLH/BPLH.</p>' +
        '<div style="display:flex;gap:var(--s3);justify-content:flex-end;margin-top:var(--s5)">' +
        '<button class="btn btn-ghost" type="button" data-batal>Batal</button>' +
        '<button class="btn btn-primary" type="button" data-lanjut>Lanjutkan</button></div>';
      document.body.appendChild(dlg);
      dlg.querySelector('[data-batal]').addEventListener('click', function () { dlg.close(); });
      dlg.querySelector('[data-lanjut]').addEventListener('click', function () {
        dlg.close();
        window.open(dlg._url, '_blank', 'noopener');
      });
    }
    dlg._url = url;
    dlg.querySelector('[data-host]').textContent = host;
    dlg.showModal();
  });

  /* ---- Badge status permohonan (ikon + teks, bukan warna saja) ---- */
  var STATUS = {
    'Diterima':   { cls: 'bg-neutral', icon: 'inbox' },
    'Verifikasi': { cls: 'bg-warning', icon: 'eye' },
    'Diproses':   { cls: 'bg-info',    icon: 'clock' },
    'Selesai':    { cls: 'bg-success', icon: 'check' },
    'Ditolak':    { cls: 'bg-danger',  icon: 'warning' }
  };
  KLH.statusBadge = function (status) {
    var s = STATUS[status] || STATUS.Diterima;
    return '<span class="badge ' + s.cls + '">' +
      KLH.iconSVG(s.icon, 'icon').replace('class="icon"', 'class="icon" style="width:13px;height:13px"') +
      ' ' + status + '</span>';
  };

  KLH.findPermohonan = function (id) {
    return KLH.ppid.permohonan.find(function (p) {
      return p.id.toUpperCase() === String(id).trim().toUpperCase();
    }) || null;
  };

  /* ---- Timeline status (komponen .timeline Modul 01) ----
     Tahap tetap 4 langkah; langkah terakhir "Ditolak" bila status Ditolak. */
  KLH.timelineHTML = function (p) {
    var dotIc = function (n) {
      return KLH.iconSVG(n, 'icon').replace('class="icon"', 'class="icon" style="width:13px;height:13px"');
    };
    var TAHAP = ['Permohonan diterima', 'Verifikasi kelengkapan', 'Pemrosesan oleh unit teknis',
      p.status === 'Ditolak' ? 'Permohonan ditolak' : 'Jawaban dikirim'];
    var lis = TAHAP.map(function (label, i) {
      var n = i + 1;
      var r = p.riwayat[i];
      var cls = '', dot = '<span class="dot"></span>';
      if (n < p.step || p.step === 4) {
        cls = (n === 4 && p.status === 'Ditolak') ? ' class="now rejected"' : ' class="done"';
        dot = '<span class="dot">' + dotIc(n === 4 && p.status === 'Ditolak' ? 'close' : 'check') + '</span>';
      } else if (n === p.step) {
        cls = ' class="now"';
        dot = '<span class="dot">' + dotIc('clock') + '</span>';
      }
      var meta = r
        ? KLH.fmtDate(r.t) + ' · ' + r.ket
        : (n === 4 ? 'Melalui email terdaftar sesuai format yang diminta'
                   : 'Estimasi jawaban: paling lambat ' + KLH.fmtDate(p.estimasi) + ' (10 hari kerja)');
      return '<li' + cls + '>' + dot + '<h4>' + label + '</h4><span class="tmeta">' + meta + '</span></li>';
    }).join('');
    return '<ol class="timeline">' + lis + '</ol>';
  };
})();
