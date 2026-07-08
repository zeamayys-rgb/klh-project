# Modul 03 · Omni Channel Dashboard — Prototipe HTML

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Guru Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** SELESAI — 7 Jul 2026 · 13 entri checklist / 12 file HTML (Panel Notifikasi = komponen topbar, bukan halaman)

Aplikasi **internal** (persona P3 Ratna — agen layanan) untuk mengelola komunikasi
warga lintas **7 kanal resmi** — WhatsApp, Instagram, Facebook, X, email, web form,
dan SP4N-LAPOR! — dalam satu meja kerja: Unified Inbox (WF-04), ticketing ber-SLA,
reporting, dan pengaturan platform. Berbeda dari Modul 01/02 (situs publik), modul
ini memakai **app shell**: sidebar gelap collapsible + topbar (pencarian global,
panel notifikasi, aksesibilitas, dropdown profil).

## Tentang produk ini (konteks KAK)

Warga menghubungi KLH lewat kanal mana pun yang paling dekat dengan mereka — DM
Instagram, WhatsApp, email, form web, atau pengaduan resmi SP4N-LAPOR!. Tanpa alat
bantu, tiap kanal dipantau petugas berbeda di aplikasi berbeda: pesan terlewat, jawaban
tidak konsisten, dan tidak ada yang bisa menjawab "sudah berapa lama warga ini
menunggu?". **Omni Channel Dashboard menyatukan semuanya ke satu meja kerja** dengan
standar layanan yang terukur.

Konsep intinya, sesuai cakupan KAK:

- **Unified Inbox (WF-04)** — semua percakapan dari 7 kanal masuk ke satu antrean
  3 panel (daftar → thread → info pengirim), dengan filter kanal/status dan balasan
  ber-template. Agen tidak lagi berpindah aplikasi.
- **Ticketing + SLA** — percakapan yang butuh tindak lanjut menjadi **tiket** dengan
  tenggat layanan (*Service Level Agreement*). Timer hidup dan badge tiga tingkat
  (aman / mendekati / lewat tenggat) membuat keterlambatan terlihat sebelum terjadi;
  eskalasi dan disposisi antarunit tercatat di log.
- **Routing & Auto-Reply** — aturan otomatis mengarahkan pesan ke unit yang tepat dan
  membalas instan di luar jam kerja, sehingga antrean tidak menumpuk pada satu agen.
- **Analytics & Reporting** — statistik pengunjung & interaksi, heatmap jam sibuk,
  performa sistem, dan ekspor laporan periodik (PDF/Excel/CSV) untuk evaluasi pimpinan.
- **Role Management & Keamanan** — 6 peran berjenjang (Super Admin → Viewer) dengan
  matriks izin, login MFA/SSO, dan audit trail; dashboard ini memegang data pribadi
  warga sehingga akses harus berlapis.

Berbeda dari Modul 01/02 yang melayani publik, penggunanya adalah **internal**:
persona **P3 Ratna** (agen layanan yang menghabiskan seharian di inbox), supervisor
yang memantau SLA, dan admin platform. Ukuran keberhasilan versi KAK: tidak ada pesan
warga yang tak terjawab, dan setiap jawaban punya batas waktu yang bisa diaudit.

## Cara menjalankan

Buka `login.html` langsung (`file://`) atau melalui server lokal:

```bash
python3 -m http.server 8000
# → http://localhost:8000/login.html
```

Tanpa build step, tanpa framework/CDN runtime — **Chart.js 4.4.1 UMD di-embed lokal**
(`assets/js/vendor/chart.umd.js`, `animation:false`). Font Google dimuat daring;
tanpa koneksi, fallback sans-serif tetap terbaca.

Login demo client-side: email & sandi valid apa pun diterima; OTP MFA menerima
6 digit apa pun (mis. `246810`); tombol SSO mensimulasikan masuk tunggal instansi.
Flag sesi di `localStorage` (`klh-omni-sesi`, try/catch) — bukan data inti.

## Halaman (13 entri checklist)

| Gelombang | Entri | Berkas |
|---|---|---|
| A (Must) | Login — email+sandi, **MFA OTP demo**, tombol SSO, captcha placeholder | `login.html` |
| A | Dashboard KPI — statistik interaksi/pengunjung, performa sistem, grafik Chart.js, tiket perlu perhatian | `index.html` |
| A | **Unified Inbox (WF-04)** — 3 panel: daftar 15 percakapan 7 kanal + filter kanal/status/cari, thread + balas (template), panel info & tiket terkait | `inbox.html` |
| A | Ticketing/SLA — tab status Open→In Progress→Closed, filter, tabel + **SLA badge** (aman/mendekati/lewat), disposisi, rating | `tiket.html` |
| A | Detail Tiket (template `?t=`) — riwayat percakapan, **SLA timer hidup**, eskalasi, disposisi, ubah status, log aktivitas | `tiket-detail.html` |
| A | Reporting — filter periode, **ekspor PDF/Excel/CSV (demo)**, grafik kategori & tren SLA, tabel periodik | `reporting.html` |
| B (Should) | Routing & Auto-Reply — 6 aturan kategori (saklar), 5 template balasan bervariabel | `routing.html` |
| B | Analytics — **heatmap jam×hari (grid dummy deterministik)**, klik/scroll per halaman, device/browser | `analytics.html` |
| B | Role Management — **6 peran** (Super Admin→Viewer) + matriks 9 izin | `role.html` |
| B | Keamanan — kebijakan MFA/SSO (saklar), ringkasan 24 jam, **audit trail** ber-filter | `keamanan.html` |
| B | Manajemen Kanal — status koneksi 7 kanal (terhubung/gangguan/terputus), otorisasi ulang demo | `kanal.html` |
| C (Could) | Profil Pengguna — data akun (validasi NIP/email), preferensi notifikasi, keamanan akun | `profil.html` |
| B | **Panel Notifikasi** — komponen topbar (filter Semua/Eskalasi/Sistem, tandai dibaca) | `assets/js/components/appshell.js` |

## Data demo

Data dummy terpusat di `assets/js/data/omni.js` (objek `KLH.omni`) — **15 percakapan
lintas 7 kanal**, **12 tiket** dengan SLA bervariasi (aman / mendekati / **lewat
tenggat** → indikator ikon+teks+warna), KPI, 6 peran + matriks izin, 10 log audit,
5 notifikasi, 6 aturan routing, 5 template, status koneksi kanal, dan data analytics.
Kasus fiktif tapi realistis (pencemaran sungai, limbah B3, permohonan data IKLH, dsb.).
Seluruh UI berpenanda "konten contoh".

**Jangkar waktu demo:** `KLH.omni.now = 7 Jul 2026 09.30 WIB` — perhitungan SLA
(`KLH.slaState`) dan timer detail tiket berjalan dari jangkar ini + waktu nyata sejak
halaman dimuat, sehingga skenario "mendekati/lewat tenggat" selalu bermakna.
Tiket demo menarik: `TKT-2026-0730` (sisa <1 jam), `TKT-2026-0724` (lewat tenggat),
`TKT-2026-0722` (Closed, rating 5).

## Arsitektur

Mengikuti konvensi `CLAUDE.md` / Modul 01:

- Fondasi **disalin** dari Modul 01 agar folder mandiri saat di-zip:
  `assets/css/tokens.css` · `base.css` · `components.css` · `assets/js/components/icons.js`
  (+ ikon baru: ticket, send, reply, escalate, route, logout, key, history, star, dan
  4 tanda kanal `chwa/chig/chfb/chx` — gaya garis 24×24 yang sama).
- **App shell** baru di `assets/js/components/appshell.js`: `<klh-sidebar>`
  (ikon+label, `aria-current="page"`, badge jumlah, tombol Ciutkan, drawer di <1024px)
  dan `<klh-topbar judul="…">` (pencarian global percakapan+tiket, panel notifikasi,
  panel aksesibilitas kontras/ukuran teks, dropdown profil).
- `window.KLH_ROOT = ''` di semua halaman (struktur datar satu level).
- Urutan skrip: icons.js → data (omni.js) → appshell.js (→ chart.umd.js bila perlu)
  → markup → main.js → skrip halaman. Custom element klasik, tanpa ES module.
- `main.js`: reveal-on-scroll (hormati `prefers-reduced-motion`), dialog serah-terima
  `[data-ext]`, badge kanal/status/prioritas, `KLH.slaState/slaBadge/startSlaTimer`,
  rating bintang, toast, preset Chart.js (palet token, `animation:false`).
- Preferensi aksesibilitas di `localStorage` (`klh-contrast`, `klh-fontsize`),
  selalu try/catch; diterapkan sedini mungkin agar tanpa kedip.

## Aksesibilitas (WCAG 2.1 AA)

Skip link `#konten` · satu `h1`/halaman · `aria-current` sidebar · target sentuh ≥44px ·
status & SLA = **ikon + teks** (bukan warna saja) · form ber-label + error
`aria-describedby` · saklar `role="switch"` + `aria-checked` · timer `role="timer"` ·
kanvas grafik ber-`role="img"` + `aria-label` deskriptif · panel/dropdown dapat ditutup
Esc · kontras tinggi & perbesaran teks 100/120/140% dari topbar · `prefers-reduced-motion`
menonaktifkan reveal & transisi.

## Verifikasi (protokol CLAUDE.md — 7 Jul 2026)

- Playwright Chromium 1440px & 390px: **12 halaman × 2 viewport, nol error JS**
  (403 Google Fonts di sandbox diabaikan sesuai protokol).
- Tanpa overflow horizontal pada 390px di seluruh halaman.
- Link-check: semua `href`/`src` internal valid.
- **32/32 uji interaksi lolos** — login+MFA+redirect, panel notifikasi (filter, tandai
  dibaca), pencarian global, kontras/ukuran teks, sidebar ciut, filter inbox
  (kanal/status/teks), kirim balasan demo (+template), tab & filter tiket, **SLA timer
  berdetak**, eskalasi menambah log, ubah status, fallback `?t=` tak dikenal, ekspor
  reporting (toast), saklar routing, otorisasi ulang kanal, filter audit, dialog `data-ext`.

## Batasan prototipe

Login/MFA/SSO, kirim balasan, ekspor, dan seluruh aksi tulis adalah **simulasi
antarmuka** (client-side, tanpa backend). Heatmap analytics dibangkitkan dari pola
deterministik. Mode gelap dashboard (DS §9) belum diimplementasikan — menunggu
prioritas klien.

---

*Prototipe untuk Kementerian Lingkungan Hidup / BPLH — disusun oleh PT Bening Guru
Semesta sesuai Kerangka Acuan Kerja. Seluruh nama, kontak, dan kasus adalah fiktif. © 2026.*
