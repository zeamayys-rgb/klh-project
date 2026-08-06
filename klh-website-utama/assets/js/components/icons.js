/* ============================================================
   KLH Icons — registry SVG garis 24×24 (stroke 1.8, currentColor)
   Pemakaian: <klh-icon name="leaf" class="icon"></klh-icon>
   Ikon dekoratif otomatis aria-hidden; beri atribut `label`
   untuk ikon fungsional (menghasilkan role="img" + aria-label).
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  var P = {
    home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v9h4v-5h4v5h4v-9"/>',
    leaf: '<path d="M19 5c0 9-5 14-11 14-1.5 0-3-.4-3-.4S5.5 5 19 5z"/><path d="M5 19c3-6 7-9 10-10"/>',
    institution: '<path d="M3 21h18"/><path d="M5 21V10h14v11"/><path d="M12 3L4 8h16z"/><path d="M9 21v-4h6v4"/><path d="M9 13h.01M15 13h.01"/>',
    newspaper: '<rect x="3" y="5" width="15" height="15" rx="2"/><path d="M18 9h1.5a1.5 1.5 0 011.5 1.5V18a2 2 0 01-2 2H5"/><path d="M7 9h7M7 13h7M7 16h4"/>',
    megaphone: '<path d="M4 10v4a1 1 0 001 1h2l7 4V5L7 9H5a1 1 0 00-1 1z"/><path d="M17 9a4 4 0 010 6"/><path d="M8 15l1 5h2.5l-.8-4.6"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17"/><path d="M8 3v4M16 3v4"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01"/>',
    document: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 15.5h6M9 8.5h2"/>',
    folder: '<path d="M3 6a2 2 0 012-2h4l2 3h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
    download: '<path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M4 19.5h16"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    bell: '<path d="M18 16H6c1.2-1.3 2-2.4 2-6a4 4 0 018 0c0 3.6.8 4.7 2 6z"/><path d="M10 19a2 2 0 004 0"/>',
    inbox: '<path d="M4 5h16v14H4z"/><path d="M4 13h5a3 3 0 006 0h5"/>',
    speech: '<path d="M20 12a8 8 0 10-3.1 6.3L21 20l-1.3-3.5A8 8 0 0020 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
    people: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="16.8" cy="9.5" r="2.5"/><path d="M16.4 14.6c2.3.2 3.8 1.8 4.3 4.4"/>',
    user: '<circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c.8-3.8 3.5-5.8 7-5.8s6.2 2 7 5.8"/>',
    shield: '<path d="M12 3l7 2.6v5.6c0 4.6-3 7.9-7 9.8-4-1.9-7-5.2-7-9.8V5.6z"/><path d="M9 11.7l2.2 2.2L15.3 9"/>',
    chartpie: '<path d="M12 3a9 9 0 109 9h-9z"/><path d="M14.5 2.7A9 9 0 0121.3 9.5H14.5z"/>',
    chartline: '<path d="M4 4v16h16"/><path d="M7 14l3.5-4 3 2.5L18 7"/>',
    recycle: '<path d="M7.5 8.5L10 4.5h4l1.5 2.6"/><path d="M18.6 10.5l2 3.4-2 3.6h-3"/><path d="M9.4 20.5H5.5l-2-3.5 1.6-2.8"/><path d="M12.5 20.5H9.4M7.5 8.5l-3 1.2M18.6 10.5l1.2-3"/>',
    drop: '<path d="M12 3.5S6 10 6 14a6 6 0 0012 0c0-4-6-10.5-6-10.5z"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0113 0C18.5 15.4 12 21 12 21z"/><circle cx="12" cy="10.3" r="2.3"/>',
    phone: '<path d="M5 4h4l1.5 4.5L8 10a12 12 0 006 6l1.5-2.5L20 15v4a1.5 1.5 0 01-1.7 1.5C10.5 19.6 4.4 13.5 3.5 5.7A1.5 1.5 0 015 4z"/>',
    envelope: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c-2.5 2.3-3.8 5.3-3.8 8.5s1.3 6.2 3.8 8.5c2.5-2.3 3.8-5.3 3.8-8.5S14.5 5.8 12 3.5z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3.5l1 2.4 2.6-.5 1 2.3 2.5 1v2.6l2 1.7-1.3 2.3.9 2.5-2.3 1.2-.4 2.6-2.6-.2-1.8 1.9-2.3-1.2-2.4 1.1-1.7-2-2.6.1-.3-2.6-2.3-1.3 1-2.4-1.3-2.3 2.1-1.6.1-2.6 2.5-.9 1.1-2.4 2.5.6z" opacity=".0"/><path d="M19.4 13a7.6 7.6 0 000-2l2-1.6-2-3.4-2.4 1a7.6 7.6 0 00-1.7-1L15 3.5h-4l-.3 2.5a7.6 7.6 0 00-1.7 1l-2.4-1-2 3.4L6.6 11a7.6 7.6 0 000 2l-2 1.6 2 3.4 2.4-1a7.6 7.6 0 001.7 1l.3 2.5h4l.3-2.5a7.6 7.6 0 001.7-1l2.4 1 2-3.4z"/>',
    access: '<circle cx="12" cy="5" r="1.8"/><path d="M5.5 9c4.3 1 8.7 1 13 0"/><path d="M12 10v4l-3 6.5M12 14l3 6.5"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.4 2"/>',
    check: '<circle cx="12" cy="12" r="8.5"/><path d="M8.2 12.3l2.6 2.7 5-5.6"/>',
    warning: '<path d="M12 4L2.8 19.5h18.4z"/><path d="M12 10v4.2M12 16.8h.01"/>',
    external: '<path d="M9.5 5H5v14h14v-4.5"/><path d="M13.5 4H20v6.5"/><path d="M20 4l-9 9"/>',
    arrowright: '<path d="M4 12h15"/><path d="M13.5 6l6 6-6 6"/>',
    arrowup: '<path d="M12 20V5"/><path d="M6 10.5l6-6 6 6"/>',
    arrowleft: '<path d="M20 12H5"/><path d="M10.5 18l-6-6 6-6"/>',
    chevdown: '<path d="M6 9.5l6 6 6-6"/>',
    chevright: '<path d="M9.5 6l6 6-6 6"/>',
    menu: '<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    eye: '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    play: '<circle cx="12" cy="12" r="8.5"/><path d="M10 8.7l5.3 3.3-5.3 3.3z"/>',
    book: '<path d="M5 4.5A2.5 2.5 0 017.5 2H19v17H7.5A2.5 2.5 0 005 21.5z"/><path d="M5 19a2.5 2.5 0 012.5-2.5H19"/><path d="M9.5 6.5h5.5"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="M9 13.6L7.5 21l4.5-2.4L16.5 21 15 13.6"/><path d="M12 6.7l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9.1 8.8l2-.3z" opacity=".55"/>',
    flag: '<path d="M5.5 3.5v17"/><path d="M5.5 4.5c4-2 8 2 12.5 0v9c-4.5 2-8.5-2-12.5 0"/>',
    lock: '<rect x="5.5" y="10.5" width="13" height="9.5" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 017 0v2.5"/><path d="M12 14.5v2"/>',
    scale: '<path d="M12 4v16M7 20h10"/><path d="M12 6l-6 1.5M12 6l6 1.5"/><path d="M3.5 13.5L6 7.5l2.5 6a2.6 2.6 0 01-5 0zM15.5 13.5L18 7.5l2.5 6a2.6 2.6 0 01-5 0z"/>',
    flask: '<path d="M9.5 3.5h5"/><path d="M10.5 3.5v5L5 18.5A2 2 0 006.8 21.5h10.4a2 2 0 001.8-3L13.5 8.5v-5"/><path d="M7.5 14.5h9"/>',
    translate: '<path d="M3.5 6h9M8 4v2M10.8 6C10 10 7 13 3.5 14.7"/><path d="M6 8.5c1.4 3.4 4 5.6 6.5 6.5"/><path d="M12.5 20l4-9.5L20.5 20M13.9 17h5.2"/>',
    tree: '<path d="M12 3l5 6.5h-2.5L18 14h-3l3 4.5H6L9 14H6l3.5-4.5H7z"/><path d="M12 18.5V21"/>',
    factory: '<path d="M3.5 20.5V9.5l5 3.5v-3.5l5 3.5V9l7-4v15.5z"/><path d="M7 16.5h2M12 16.5h2M17 16.5h2"/>',
    handshake: '<path d="M2.5 7.5L7 6l5 2 4.5-2 5 1.5v7l-4 4.5-4-1-3.5 1L5 14z" opacity="0"/><path d="M8.5 12.5l3-3 4 3.5c.9.8 2.2-.5 1.3-1.4L12.5 8l-2.8.8L6 7.5l-3.5 5 3 3.5"/><path d="M8.5 12.5l-2 2.3M18 12l3.5-4.5M13 17.5l1.6 1.3c.9.8 2.3-.4 1.4-1.3M11 18.6l.9.8c.9.8 2.2-.4 1.4-1.3"/><path d="M5.5 16l3.5 3.4c.9.8 2.3-.4 1.4-1.3"/>',
    sprout: '<path d="M12 21v-8"/><path d="M12 13c0-4-3-6.5-7-6.5C5 10.5 8 13 12 13zM12 11c0-3.5 2.6-6 6.5-6 0 3.7-2.5 6-6.5 6z"/>',
    idcard: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><circle cx="8.5" cy="11" r="1.8"/><path d="M5.8 15.7c.5-1.5 1.5-2.2 2.7-2.2s2.2.7 2.7 2.2"/><path d="M14 9.5h4.5M14 12.5h4.5M14 15.5h3"/>',
    share: '<circle cx="6" cy="12" r="2.5"/><circle cx="17.5" cy="5.5" r="2.5"/><circle cx="17.5" cy="18.5" r="2.5"/><path d="M8.2 10.8l7-4M8.2 13.2l7 4"/>',
    printer: '<path d="M7 8V3.5h10V8"/><rect x="4" y="8" width="16" height="8.5" rx="1.5"/><path d="M7 13.5h10v7H7z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    micro: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0012 0"/><path d="M12 17v3.5M9 20.5h6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
    thumbup: '<path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>',
    facebook: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',
    instagram: '<rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.2 6.8h.01"/>',
    x: '<path d="M4 4l6.8 9.5L4.4 20h2.2l5.2-5.6L15.9 20H20l-7.1-9.9L18.9 4h-2.2l-4.8 5.2L8.1 4H4z"/>',
    youtube: '<path d="M22 8.2a2.8 2.8 0 00-2-2C18.3 5.8 12 5.8 12 5.8s-6.3 0-8 .4a2.8 2.8 0 00-2 2A29 29 0 001.6 12 29 29 0 002 15.8a2.8 2.8 0 002 2c1.7.4 8 .4 8 .4s6.3 0 8-.4a2.8 2.8 0 002-2A29 29 0 0022.4 12 29 29 0 0022 8.2z"/><path d="M9.9 15.1L15.4 12 9.9 8.9v6.2z"/>',
    tiktok: '<path d="M9.2 12.2a4.3 4.3 0 104.3 4.3V3.5c.6 2.7 2.6 4.7 5.3 5.1"/>'
  };

  KLH.iconSVG = function (name, cls) {
    var p = P[name] || P.leaf;
    return '<svg class="' + (cls || 'icon') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  };

  var Icon = function () { return Reflect.construct(HTMLElement, [], Icon); };
  Icon.prototype = Object.create(HTMLElement.prototype);
  Icon.prototype.connectedCallback = function () {
    var name = this.getAttribute('name') || 'leaf';
    var cls = this.getAttribute('class') || 'icon';
    var label = this.getAttribute('label');
    this.style.display = 'inline-flex';
    this.style.flex = 'none';
    this.innerHTML = KLH.iconSVG(name, cls);
    this.removeAttribute('class');
    /* Ukuran inline pada host (mis. style="width:13px") diteruskan ke svg —
       tanpa ini svg memakai ukuran kelasnya (24px) dan meluber keluar host */
    if (this.style.width || this.style.height) {
      var svg = this.firstChild;
      svg.style.width = this.style.width || this.style.height;
      svg.style.height = this.style.height || this.style.width;
    }
    if (label) { this.setAttribute('role', 'img'); this.setAttribute('aria-label', label); }
    else { this.setAttribute('aria-hidden', 'true'); }
  };
  customElements.define('klh-icon', Icon);

  /* Motif daun organik (dekoratif besar untuk hero/footer/promo) */
  KLH.leafmark = function () {
    return '<svg class="leafmark" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">' +
      '<path d="M170 30C170 120 120 170 55 170c-14 0-25-3-25-3S35 30 170 30z"/>' +
      '<path d="M35 165C65 105 105 65 165 35"/>' +
      '<path d="M60 138c18-8 32-22 42-42M85 155c22-10 40-28 52-52M48 112c12-6 22-16 30-30"/>' +
    '</svg>';
  };
})();
