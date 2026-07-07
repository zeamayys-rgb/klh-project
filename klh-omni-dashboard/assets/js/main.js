/* ============================================================
   main.js — perekat halaman Modul 03 · Omni Channel Dashboard
   (dimuat setelah markup, sebelum skrip inline halaman)
   - Reveal-on-scroll ringan (hormati prefers-reduced-motion)
   - Dialog serah-terima tautan eksternal ([data-ext])
   - Render bersama: badge kanal/status/prioritas + SLA timer
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

  /* ---- Dialog serah-terima tautan eksternal ([data-ext]) ---- */
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
        '<p style="font-size:var(--t-sm);color:var(--ink-500)">Tautan ini membuka <strong data-host></strong> di tab baru — situs di luar tanggung jawab KLH/BPLH.</p>' +
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

  /* ---- Ikon kecil untuk badge ---- */
  function icSm(n) {
    return KLH.iconSVG(n, 'icon').replace('class="icon"', 'class="icon" style="width:13px;height:13px"');
  }

  /* ---- Badge kanal (ikon + teks — bukan warna saja) ---- */
  KLH.kanalBadge = function (id) {
    var k = KLH.kanalInfo(id);
    var tone = { green: 'bg-brand', earth: 'bg-orange', sky: 'bg-info', neutral: 'bg-neutral' }[k.tone] || 'bg-neutral';
    return '<span class="badge ' + tone + '">' + icSm(k.icon) + ' ' + k.label + '</span>';
  };

  /* ---- Badge status tiket: Open → In Progress → Closed ---- */
  var T_STATUS = {
    'Open':        { cls: 'bg-orange',  icon: 'inbox' },
    'In Progress': { cls: 'bg-info',    icon: 'clock' },
    'Closed':      { cls: 'bg-success', icon: 'check' }
  };
  KLH.tiketBadge = function (status) {
    var s = T_STATUS[status] || T_STATUS.Open;
    return '<span class="badge ' + s.cls + '">' + icSm(s.icon) + ' ' + status + '</span>';
  };

  /* ---- Badge status percakapan inbox ---- */
  var C_STATUS = {
    baru:     { cls: 'bg-orange',  icon: 'megaphone', label: 'Baru' },
    berjalan: { cls: 'bg-info',    icon: 'speech',    label: 'Berjalan' },
    menunggu: { cls: 'bg-warning', icon: 'clock',     label: 'Menunggu' },
    selesai:  { cls: 'bg-success', icon: 'check',     label: 'Selesai' }
  };
  KLH.convBadge = function (status) {
    var s = C_STATUS[status] || C_STATUS.baru;
    return '<span class="badge ' + s.cls + '">' + icSm(s.icon) + ' ' + s.label + '</span>';
  };
  KLH.convStatusLabel = function (status) { return (C_STATUS[status] || C_STATUS.baru).label; };

  /* ---- Badge prioritas ---- */
  var PRIO = {
    Tinggi: { cls: 'bg-danger',  icon: 'warning' },
    Sedang: { cls: 'bg-warning', icon: 'flag' },
    Rendah: { cls: 'bg-neutral', icon: 'chevdown' }
  };
  KLH.prioBadge = function (p) {
    var s = PRIO[p] || PRIO.Rendah;
    return '<span class="badge ' + s.cls + '">' + icSm(s.icon) + ' ' + p + '</span>';
  };

  /* ---- SLA ----
     "Sekarang" demo = jangkar KLH.omni.now + waktu berjalan sejak
     halaman dimuat, agar timer hidup tetapi data contoh tetap
     bermakna (ada tiket aman / mendekati / lewat tenggat). */
  var mulai = Date.now();
  KLH.demoNow = function () {
    return new Date(KLH.omni.now).getTime() + (Date.now() - mulai);
  };
  /* ISO lokal (bukan UTC) dari jangkar demo — untuk stempel pesan baru */
  KLH.demoNowIso = function () {
    var d = new Date(KLH.demoNow());
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) +
      'T' + p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
  };

  function sisaTeks(ms) {
    var m = Math.round(Math.abs(ms) / 60000);
    var h = Math.floor(m / 60), d = Math.floor(h / 24);
    if (d >= 1) return d + ' hr ' + (h % 24) + ' j';
    if (h >= 1) return h + ' j ' + (m % 60) + ' mnt';
    return m + ' mnt';
  }

  /* Keadaan SLA tiket → {cls, icon, label} (ikon + teks, bukan warna saja) */
  KLH.slaState = function (t) {
    if (t.status === 'Closed') {
      var tepat = !t.selesai || new Date(t.selesai).getTime() <= new Date(t.tenggat).getTime();
      return tepat
        ? { cls: 'ok',   icon: 'check',   label: 'Selesai dalam SLA' }
        : { cls: 'late', icon: 'warning', label: 'Selesai lewat SLA' };
    }
    var sisa = new Date(t.tenggat).getTime() - KLH.demoNow();
    if (sisa < 0)              return { cls: 'late', icon: 'warning', label: 'Lewat ' + sisaTeks(sisa) };
    if (sisa < 2 * 3600e3)     return { cls: 'warn', icon: 'clock',   label: 'Sisa ' + sisaTeks(sisa) };
    return                            { cls: 'ok',   icon: 'clock',   label: 'Sisa ' + sisaTeks(sisa) };
  };
  KLH.slaBadge = function (t) {
    var s = KLH.slaState(t);
    return '<span class="sla sla--' + s.cls + '">' + icSm(s.icon) + ' <span class="mono">' + s.label + '</span></span>';
  };

  /* Timer SLA hidup (tiket-detail) — detik berdetak dari jangkar demo */
  KLH.startSlaTimer = function (el, t) {
    function tick() {
      if (t.status === 'Closed') { el.innerHTML = KLH.slaBadge(t); return; }
      var sisa = new Date(t.tenggat).getTime() - KLH.demoNow();
      var s = KLH.slaState(t);
      var abs = Math.abs(sisa);
      var jam = Math.floor(abs / 3600e3);
      var mnt = Math.floor((abs % 3600e3) / 60000);
      var dtk = Math.floor((abs % 60000) / 1000);
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      el.innerHTML =
        '<div class="sla-timer sla-timer--' + s.cls + '" role="timer" aria-label="Sisa waktu SLA">' +
          icSm(s.icon) +
          '<span class="mono">' + (sisa < 0 ? '−' : '') + pad(jam) + ':' + pad(mnt) + ':' + pad(dtk) + '</span>' +
          '<small>' + (sisa < 0 ? 'melewati tenggat' : 'menuju tenggat') + ' · ' + KLH.fmtDateTime(t.tenggat) + '</small>' +
        '</div>';
    }
    tick();
    return setInterval(tick, 1000);
  };

  /* ---- Bintang rating (ikon + angka) ---- */
  KLH.ratingHTML = function (n) {
    if (!n) return '<span class="rating rating--kosong">Belum dinilai</span>';
    var s = '';
    for (var i = 1; i <= 5; i++) {
      s += '<span class="' + (i <= n ? 'star on' : 'star') + '">' + icSm('star') + '</span>';
    }
    return '<span class="rating" aria-label="Rating ' + n + ' dari 5">' + s + ' <span class="mono">' + n + '/5</span></span>';
  };

  /* ---- Toast umpan balik aksi demo ---- */
  KLH.toast = function (pesan, jenis) {
    var wrap = document.getElementById('klh-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'klh-toast-wrap';
      wrap.setAttribute('aria-live', 'polite');
      wrap.style.cssText = 'position:fixed;bottom:20px;left:50%;translate:-50% 0;z-index:300;display:grid;gap:8px;justify-items:center;pointer-events:none';
      document.body.appendChild(wrap);
    }
    var t = document.createElement('div');
    t.className = 'alert alert-' + (jenis || 'success');
    t.style.cssText = 'box-shadow:var(--sh-3);pointer-events:auto;max-width:min(480px,calc(100vw - 40px))';
    t.innerHTML = KLH.iconSVG(jenis === 'danger' ? 'warning' : (jenis === 'info' ? 'bell' : 'check'), 'icon icon--sm') + '<div>' + pesan + '</div>';
    wrap.appendChild(t);
    setTimeout(function () { t.remove(); }, 4200);
  };

  /* ---- Preset Chart.js (dipakai index/reporting/analytics) ---- */
  KLH.chartDefaults = function () {
    if (!window.Chart) return;
    Chart.defaults.font.family = "'Inter','Segoe UI',sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = '#51625E';
    Chart.defaults.borderColor = '#E1E8E6';
    Chart.defaults.animation = false; /* render sinkron utk export/screenshot */
    Chart.defaults.plugins.legend.labels.boxWidth = 12;
    Chart.defaults.plugins.legend.labels.boxHeight = 12;
  };
  /* Palet grafik dari token DS v2 */
  KLH.chartPalet = ['#005952', '#147DEF', '#F97910', '#25D0C2', '#0B529D', '#F7A664', '#75847F'];
})();
