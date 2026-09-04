/* ============================================================
   <klh-footer>, footer global (WF-01 §3.6)
   Kolom: brand+kontak · Peta Situs · Layanan Cepat · Tautan Sistem
   Data: KLH.menu.footer
   ============================================================ */
(function () {
  'use strict';
  var root = function () { return window.KLH_ROOT || ''; };
  var href = function (h) { return /^https?:/.test(h) ? h : root() + h; };
  var ic = function (n, c) { return KLH.iconSVG(n, c || 'icon icon--sm'); };

  /* Statistik pengunjung (konten contoh), sebaris dengan hak cipta di footer-bottom */
  var visits = [
    { v: '648.431', l: 'pengunjung' },
    { v: '3.011', l: 'hari ini' },
    { v: '12', l: 'sedang online' }
  ];

  function build(el) {
    var f = KLH.menu.footer;
    var cols = f.cols.map(function (col) {
      return '<div><h2 class="footer-h">' + col.title + '</h2><ul>' + col.links.map(function (l) {
        return '<li><a href="' + href(l.href) + '"' + (l.ext ? ' target="_blank" rel="noopener noreferrer" data-ext="' + l.label + '"' : '') + '>' +
          (l.ext ? ic('external') : ic('chevright')) + l.label +
          (l.ext ? '<span class="sr-only"> (membuka situs lain)</span>' : '') + '</a></li>';
      }).join('') + '</ul></div>';
    }).join('');

    el.innerHTML =
      '<footer class="site-footer">' + KLH.leafmark() +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div>' +
              '<div class="footer-brand">' +
                '<img class="brand__logo" src="' + href('assets/img/klh-logo.png') + '" alt="" width="44" height="44">' +
                '<span class="brand__name">KLH / BPLH<span class="brand__sub">Kementerian Lingkungan Hidup RI</span></span>' +
              '</div>' +
              '<p style="font-size:var(--t-sm);color:var(--klh-green-200);max-width:34ch">' + f.tagline + '</p>' +
              '<ul class="footer-contact" style="margin-top:var(--s5)">' +
                f.contact.map(function (c) { return '<li>' + ic(c.icon) + '<span>' + c.text + '</span></li>'; }).join('') +
              '</ul>' +
            '</div>' + cols +
          '</div>' +
          '<div class="footer-social">' +
            (f.socials || []).map(function (s) {
              return '<a href="' + s.href + '" target="_blank" rel="noopener noreferrer" data-ext="' + s.label + '" aria-label="' + s.label + ' KLH (membuka situs lain)">' + ic(s.icon) + '</a>';
            }).join('') +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span class="gov">' + ic('institution') + ' © 2026 Kementerian Lingkungan Hidup / BPLH, Republik Indonesia</span>' +
            '<span class="footer-stat-strip" id="footer-stat-strip" aria-label="Statistik pengunjung situs (konten contoh)">' + ic('people') +
              visits.map(function (s) { return '<span class="footer-stat"><b>' + s.v + '</b> ' + s.l + '</span>'; }).join('<span class="footer-stat__sep" aria-hidden="true">&middot;</span>') +
            '</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  var Footer = function () { return Reflect.construct(HTMLElement, [], Footer); };
  Footer.prototype = Object.create(HTMLElement.prototype);
  Footer.prototype.connectedCallback = function () { build(this); };
  customElements.define('klh-footer', Footer);
})();
