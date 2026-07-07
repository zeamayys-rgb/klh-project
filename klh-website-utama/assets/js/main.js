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
