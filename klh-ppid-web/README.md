# Modul 02 · PPID Web — Prototipe HTML

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Guru Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** SELESAI — 7 Jul 2026 · 16 halaman checklist / 15 file HTML (Chat Bot AI = komponen widget lintas halaman)

Portal penuh Pejabat Pengelola Informasi & Dokumentasi (PPID): pengajuan permohonan
informasi publik daring (UU 14/2008), pelacakan status, dan informasi terbuka —
kelanjutan dari halaman gerbang `klh-website-utama/pages/ppid.html` (Modul 01).

## Cara menjalankan

Buka `index.html` langsung (`file://`) atau melalui server lokal:

```bash
python3 -m http.server 8000
# → http://localhost:8000/index.html
```

Tanpa build step, tanpa framework/CDN runtime. Font Google (Plus Jakarta Sans, Inter,
JetBrains Mono) dimuat daring; tanpa koneksi, fallback sans-serif tetap terbaca.

## Halaman (16 entri checklist)

| Gelombang | Halaman | Berkas |
|---|---|---|
| A (Must) | Beranda PPID — 4 kategori informasi + lacak cepat | `index.html` |
| A | Masuk (captcha placeholder visual, lupa sandi, login demo) | `masuk.html` |
| A | Daftar Akun (NIK/badan hukum + verifikasi email simulasi, kode demo `246810`) | `daftar.html` |
| A | Ajukan Permohonan — **stepper 4 langkah sesuai WF-02** | `permohonan.html` |
| A | Konfirmasi (`?id=PPID-2026-XXXXXX`) | `konfirmasi.html` |
| A | Lacak Permohonan — **timeline sesuai WF-03**, jalur Ditolak → keberatan | `lacak.html` |
| B (Should) | Profil PPID · Regulasi · DIP (filter+cari) · FAQ (accordion) | `profil-ppid.html` `regulasi.html` `dip.html` `faq.html` |
| B | Riwayat & Notifikasi (perlu login demo) · Pengajuan Keberatan (WF-17) | `riwayat.html` `keberatan.html` |
| B | Chat Bot AI PPID — widget `<klh-widgets>` (FAB kanan bawah, semua halaman) | `assets/js/components/widgets.js` |
| C (Could) | DIK · Laporan Kinerja · Permohonan Konsultasi | `dik.html` `laporan-kinerja.html` `konsultasi.html` |

## Data demo

Data dummy terpusat di `assets/js/data/ppid.js` (objek `KLH.ppid`) — 14 entri DIP,
7 permohonan berstatus variatif, 9 FAQ, 7 regulasi, 6 DIK. Seluruh konten berpenanda
"data contoh". Nomor registrasi demo untuk pelacakan:

- `PPID-2026-000123` — Diproses · `PPID-2026-000101` — Selesai
- `PPID-2026-000087` / `PPID-2026-000076` — **Ditolak** (alasan + tautan keberatan)

Login demo client-side: email & sandi valid apa pun diterima; flag sesi di
`localStorage` (`klh-ppid-sesi`, dibungkus try/catch) — bukan data inti.

## Arsitektur

Mengikuti konvensi `CLAUDE.md` / Modul 01:

- Fondasi **disalin** dari Modul 01 agar folder mandiri saat di-zip:
  `assets/css/tokens.css` · `base.css` · `components.css` · `assets/js/components/icons.js` · pola `footer.js`.
- Navbar **varian sub-brand "PPID · KLH/BPLH"** (`assets/js/components/navbar.js`) —
  lebih ringkas dari Modul 01: 5 tautan datar tanpa mega menu + tombol Lacak/Masuk/Ajukan
  + tautan "← Situs Utama KLH/BPLH" di utility bar.
- `window.KLH_ROOT = ''` di semua halaman (struktur datar satu level).
- Urutan skrip: icons.js → data (menu.js, ppid.js) → komponen → markup → main.js.
- Dialog serah-terima tautan eksternal (`data-ext`, elemen `<dialog>` native) di `main.js`.
- Aksesibilitas: skip link, satu `h1`/halaman, `aria-current` nav & stepper, stepper
  dengan anons `aria-live`, accordion `button`+`aria-expanded`, error form terasosiasi,
  panel kontras tinggi + teks 100–200%, `prefers-reduced-motion` dihormati.

## Verifikasi (7 Jul 2026)

- Playwright Chromium: screenshot 15 halaman × (desktop 1440px + mobile 390px) — render bersih.
- **Nol error JS** di seluruh halaman (403 Google Fonts sandbox diabaikan sesuai protokol).
- Link-check seluruh `href`/`src` internal lolos.
- 19 uji interaksi lolos: stepper maju/mundur + validasi per langkah + tolak berkas
  invalid, lacak ID valid/invalid/ditolak, filter & cari DIP, accordion FAQ,
  login demo → riwayat → keluar, dialog `data-ext`.

## Jembatan Modul 01 ↔ 02

Tombol **"Buka Portal PPID Online"** di `klh-website-utama/pages/ppid.html` (saat ini
`href="#"`) kini dapat diarahkan ke `../klh-ppid-web/index.html`, dan demo lacak pada
halaman itu ke `../klh-ppid-web/lacak.html`. **Modul 01 tidak diubah** (sudah final) —
perubahan menunggu persetujuan PPK/Tim Teknis.

> Catatan: tautan "← Situs Utama KLH/BPLH" pada utility bar & footer menunjuk
> `../klh-website-utama/index.html` — berfungsi bila kedua folder modul berdampingan;
> saat zip dibuka berdiri sendiri, tautan ini wajar tidak aktif.

---
*Konten dummy berpenanda; belum ada riset primer maupun integrasi sistem. © 2026 PT Bening Guru Semesta.*
