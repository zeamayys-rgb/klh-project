/* ============================================================
   <klh-footer> — footer global (WF-01 §3.6)
   Kolom: brand+kontak · Peta Situs · Layanan Cepat · Tautan Sistem
   Data: KLH.menu.footer
   ============================================================ */
(function () {
  'use strict';
  var root = function () { return window.KLH_ROOT || ''; };
  var href = function (h) { return /^https?:/.test(h) ? h : root() + h; };
  var ic = function (n, c) { return KLH.iconSVG(n, c || 'icon icon--sm'); };

  function build(el) {
    var f = KLH.menu.footer;
    var cols = f.cols.map(function (col) {
      return '<div><h5>' + col.title + '</h5><ul>' + col.links.map(function (l) {
        return '<li><a href="' + href(l.href) + '"' + (l.ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
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
          '<div class="footer-bottom">' +
            '<span class="gov">' + ic('institution') + ' © 2026 Kementerian Lingkungan Hidup / BPLH — Republik Indonesia</span>' +
            '<span>' + f.legal.map(function (l) {
              return '<a href="' + href(l.href) + '" style="margin-left:var(--s4)">' + l.label + '</a>';
            }).join('') + '</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  var Footer = function () { return Reflect.construct(HTMLElement, [], Footer); };
  Footer.prototype = Object.create(HTMLElement.prototype);
  Footer.prototype.connectedCallback = function () { build(this); };
  customElements.define('klh-footer', Footer);
})();
