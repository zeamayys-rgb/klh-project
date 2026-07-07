/* ============================================================
   Widget global persisten — Modul 02 · PPID Web
   Pola sama dengan Modul 01 (<klh-widgets>):
   1. Chat Bot AI PPID (FAB + panel demo) — jawaban seputar PPID
   2. Panel Aksesibilitas: kontras tinggi + ukuran teks 100–200%,
      preferensi di localStorage bila tersedia (try/catch).
   ============================================================ */
(function () {
  'use strict';
  var ic = function (n, c) { return KLH.iconSVG(n, c || 'icon'); };
  var root = function () { return window.KLH_ROOT || ''; };

  /* ---- Preferensi aksesibilitas: terapkan sedini mungkin ---- */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var FS_STEPS = [100, 125, 150, 175, 200];
  function applyPrefs() {
    var c = store.get('klh-contrast');
    var fs = parseInt(store.get('klh-fontsize') || '100', 10);
    if (c === 'high') document.documentElement.setAttribute('data-contrast', 'high');
    document.documentElement.style.fontSize = (fs / 100 * 16) + 'px';
    return { contrast: c === 'high', fs: fs };
  }
  applyPrefs();

  /* A2-05 · Aturan spesifik didahulukan; pola generik (ajukan/permohonan)
     paling akhir agar "berapa lama permohonan…" jatuh ke jawaban SLA. */
  var BOT_REPLIES = [
    { k: /lama|berapa hari|sla|waktu/i, a: 'PPID menjawab paling lambat <b>10 hari kerja</b>, dapat diperpanjang <b>7 hari kerja</b> dengan pemberitahuan tertulis (Perki 1/2021).' },
    { k: /lacak|status|registrasi|nomor/i, a: 'Buka menu <b>Lacak</b> dan masukkan nomor registrasi berformat <b>PPID-2026-XXXXXX</b>. Timeline status akan menampilkan posisi permohonan Anda beserta estimasi jawaban.' },
    { k: /tolak|ditolak|keberatan|sengketa/i, a: 'Jika permohonan ditolak, Anda menerima alasan & dasar hukumnya. Ajukan <b>keberatan</b> ke Atasan PPID maks. 30 hari kerja; bila belum puas, sengketa dapat dibawa ke <b>Komisi Informasi</b>.' },
    { k: /dip|daftar informasi|dokumen|unduh/i, a: 'Dokumen yang tersedia terbuka dapat dijelajahi di <b>Daftar Informasi Publik (DIP)</b> — gunakan filter kategori dan pencarian judul, lalu unduh langsung.' },
    { k: /biaya|bayar|gratis/i, a: 'Layanan informasi publik <b>gratis</b>. Biaya hanya mungkin timbul untuk penggandaan/pengiriman dokumen fisik sesuai standar biaya yang diumumkan.' },
    { k: /daftar akun|akun|masuk|login|registrasi akun/i, a: 'Klik <b>Masuk</b> di kanan atas, lalu pilih <b>Daftar</b>. Siapkan NIK (perorangan) atau akta pendirian (badan hukum) dan email aktif untuk verifikasi.' },
    { k: /dikecualikan|rahasia|pasal 17/i, a: 'Sebagian informasi dikecualikan berdasarkan uji konsekuensi <b>Pasal 17 UU 14/2008</b> — daftarnya terbuka di halaman <b>Informasi Dikecualikan (DIK)</b>.' },
    { k: /ajukan|permohonan|mohon|form/i, a: 'Untuk mengajukan permohonan informasi: masuk/daftar akun, lalu isi <b>formulir bertahap</b> (Data Pemohon → Rincian → Unggah → Kirim) di menu <b>Ajukan</b>. Anda akan menerima nomor registrasi untuk pelacakan.' }
  ];
  var BOT_FALLBACK = 'Terima kasih atas pertanyaannya. Saya asisten virtual PPID KLH/BPLH (versi prototipe). Coba kata kunci: <b>ajukan permohonan</b>, <b>lacak status</b>, <b>keberatan</b>, atau <b>daftar informasi</b>.';

  function build(el) {
    el.innerHTML =
      /* --- Panel Aksesibilitas --- */
      '<div class="a11y-panel" role="dialog" aria-label="Pengaturan aksesibilitas">' +
        '<h4>' + ic('access') + ' Aksesibilitas</h4>' +
        '<div class="a11y-row"><span class="lbl">Kontras tinggi<small>Perkuat warna teks & garis</small></span>' +
          '<div class="a11y-ctrl"><button type="button" data-contrast aria-pressed="false">Aktif</button></div></div>' +
        '<div class="a11y-row"><span class="lbl">Ukuran teks<small>Hingga 200% (WCAG 1.4.4)</small></span>' +
          '<div class="a11y-ctrl">' +
            '<button type="button" data-fs-dec aria-label="Perkecil teks">A−</button>' +
            '<button type="button" data-fs-val aria-live="polite" style="pointer-events:none;min-width:56px">100%</button>' +
            '<button type="button" data-fs-inc aria-label="Perbesar teks">A+</button>' +
          '</div></div>' +
        '<div class="a11y-row"><span class="lbl">Pintasan<small>Tekan Tab dari atas halaman</small></span>' +
          '<span class="badge bg-neutral">Lewati ke konten</span></div>' +
      '</div>' +

      /* --- Panel Chat Bot PPID --- */
      '<div class="chat-panel" role="dialog" aria-label="Chat Bot AI PPID">' +
        '<div class="chat-panel__head">' +
          '<img class="brand__logo" src="' + root() + 'assets/img/klh-logo.png" alt="" style="width:38px;height:38px">' +
          '<div><strong>Asisten PPID</strong><span class="status">Daring · dijawab AI</span></div>' +
          '<button class="chat-panel__close" aria-label="Tutup chat">' + ic('close', 'icon icon--sm') + '</button>' +
        '</div>' +
        '<div class="chat-log" aria-live="polite">' +
          '<div class="chat-msg chat-msg--bot">Halo! Saya asisten virtual PPID KLH/BPLH. Tanyakan apa saja seputar permohonan informasi publik.</div>' +
        '</div>' +
        '<div class="chat-sugg">' +
          '<button type="button">Cara ajukan permohonan</button>' +
          '<button type="button">Lacak status permohonan</button>' +
          '<button type="button">Bagaimana jika ditolak?</button>' +
        '</div>' +
        '<form class="chat-input"><input type="text" placeholder="Tulis pertanyaan…" aria-label="Tulis pertanyaan untuk asisten">' +
          '<button class="btn btn-primary" type="submit" aria-label="Kirim pesan">' + ic('arrowright', 'icon icon--sm') + '</button></form>' +
        '<p class="chat-note">Prototipe — jawaban berbasis skenario, belum terhubung RAG.</p>' +
      '</div>' +

      /* --- FAB stack --- */
      '<div class="fab-stack">' +
        '<button class="fab fab--a11y" data-a11y-fab aria-label="Buka pengaturan aksesibilitas" aria-expanded="false">' + ic('access') + '</button>' +
        '<button class="fab fab--chat" data-chat-fab aria-label="Buka Chat Bot AI PPID" aria-expanded="false">' + ic('speech') + '</button>' +
      '</div>';

    var chatPanel = el.querySelector('.chat-panel');
    var a11yPanel = el.querySelector('.a11y-panel');
    var chatFab = el.querySelector('[data-chat-fab]');
    var a11yFab = el.querySelector('[data-a11y-fab]');

    function toggle(panel, fab, force) {
      var open = force !== undefined ? force : !panel.classList.contains('open');
      chatPanel.classList.remove('open'); a11yPanel.classList.remove('open');
      chatFab.setAttribute('aria-expanded', 'false'); a11yFab.setAttribute('aria-expanded', 'false');
      if (open) { panel.classList.add('open'); fab.setAttribute('aria-expanded', 'true'); }
    }
    chatFab.addEventListener('click', function () { toggle(chatPanel, chatFab); });
    a11yFab.addEventListener('click', function () { toggle(a11yPanel, a11yFab); });
    el.querySelector('.chat-panel__close').addEventListener('click', function () { toggle(chatPanel, chatFab, false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(chatPanel, chatFab, false); });

    /* Utility bar "Aksesibilitas" juga membuka panel */
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-a11y-open]');
      if (t) toggle(a11yPanel, a11yFab, true);
    });

    /* ---- Chat demo ---- */
    var log = el.querySelector('.chat-log');
    var form = el.querySelector('.chat-input');
    var input = form.querySelector('input');
    function say(text, who) {
      var d = document.createElement('div');
      d.className = 'chat-msg chat-msg--' + who;
      d.innerHTML = text;
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
    }
    function answer(q) {
      var hit = BOT_REPLIES.find(function (r) { return r.k.test(q); });
      setTimeout(function () { say(hit ? hit.a : BOT_FALLBACK, 'bot'); }, 450);
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q) return;
      say(q.replace(/</g, '&lt;'), 'user');
      input.value = '';
      answer(q);
    });
    Array.prototype.forEach.call(el.querySelectorAll('.chat-sugg button'), function (b) {
      b.addEventListener('click', function () { say(b.textContent, 'user'); answer(b.textContent); });
    });

    /* ---- Kontrol aksesibilitas ---- */
    var prefs = applyPrefs();
    var btnContrast = el.querySelector('[data-contrast]');
    var fsVal = el.querySelector('[data-fs-val]');
    btnContrast.setAttribute('aria-pressed', String(prefs.contrast));
    fsVal.textContent = prefs.fs + '%';

    btnContrast.addEventListener('click', function () {
      var on = document.documentElement.getAttribute('data-contrast') === 'high';
      if (on) document.documentElement.removeAttribute('data-contrast');
      else document.documentElement.setAttribute('data-contrast', 'high');
      btnContrast.setAttribute('aria-pressed', String(!on));
      store.set('klh-contrast', on ? 'normal' : 'high');
    });
    function setFs(dir) {
      var cur = parseInt(store.get('klh-fontsize') || '100', 10);
      var i = Math.min(Math.max(FS_STEPS.indexOf(cur) + dir, 0), FS_STEPS.length - 1);
      var v = FS_STEPS[i];
      store.set('klh-fontsize', String(v));
      document.documentElement.style.fontSize = (v / 100 * 16) + 'px';
      fsVal.textContent = v + '%';
    }
    el.querySelector('[data-fs-inc]').addEventListener('click', function () { setFs(1); });
    el.querySelector('[data-fs-dec]').addEventListener('click', function () { setFs(-1); });
  }

  var W = function () { return Reflect.construct(HTMLElement, [], W); };
  W.prototype = Object.create(HTMLElement.prototype);
  W.prototype.connectedCallback = function () { build(this); };
  customElements.define('klh-widgets', W);
})();
