# CLAUDE.md — Proyek UI/UX KLH/BPLH (PT Bening Guru Semesta)

Prototipe HTML hi-fi untuk 3 produk digital Kementerian Lingkungan Hidup / BPLH.
Semua konten UI **Bahasa Indonesia**. Standar: **WCAG 2.1 AA**, target Lighthouse ≥ 90, kualitas visual "didesain manusia profesional, bukan AI generik".

## Status modul

| Modul | Folder | Status |
|---|---|---|
| 01 · Website Utama (24 hlm) | `klh-website-utama/` | ✅ SELESAI — **jangan diubah**, jadikan referensi & sumber fondasi |
| 02 · PPID Web (16 hlm) | `klh-ppid-web/` | ⬜ dikerjakan via `PROMPT_Modul-02_PPID-Web.md` |
| 03 · Omni Channel Dashboard (13 hlm) | `klh-omni-dashboard/` | ⬜ dikerjakan via `PROMPT_Modul-03_OmniChannel.md` |

## Dokumen wajib dibaca sebelum mendesain (folder `docs/`)

1. `docs/PANDUAN_KERJA_UIUX_KLH.md` — master tracker; **update checkbox & Log Deliverable setiap modul selesai**
2. `docs/design.md` — design tokens (warna, tipografi, spacing, radius, shadow, breakpoint)
3. `docs/F2_UserFlow-IA.md` — arsitektur informasi & alur per produk
4. `docs/F2_Checklist-Halaman.md` — daftar halaman resmi per modul + prioritas MoSCoW; **centang setiap halaman selesai**
5. `docs/F2_Wireframe-notes.md` — struktur wireframe (WF-02 Form Permohonan, WF-03 Lacak, WF-04 Unified Inbox)
6. `docs/F1_Persona-Journey.md` — persona (P1 Sari warga · P3 Ratna agen internal, dsb.)

## Arsitektur (mengikuti Modul 01 — konsisten)

- **Vanilla HTML+CSS+JS, tanpa build step.** Harus bisa dibuka via `file://` maupun `python3 -m http.server`.
- **Pakai ulang fondasi Modul 01** — salin (jangan referensi lintas folder, agar tiap modul mandiri saat di-zip):
  `assets/css/tokens.css`, `base.css`, `components.css`, `assets/js/components/icons.js`, pola `main.js`.
  Tambahkan `pages.css` + komponen khusus per modul.
- **`window.KLH_ROOT`** dideklarasikan tiap halaman sebelum skrip bersama: `''` (root) · `'../'` · `'../../'`. Semua komponen membangun URL dengan prefiks ini.
- **Urutan skrip:** icons.js → data (`assets/js/data/*.js`) → komponen (navbar/sidebar/footer/widgets) → markup → main.js. Custom element klasik, tanpa ES module.
- **Data = "CMS" dummy terpusat** di `assets/js/data/` (objek `KLH.*`). Markup tidak berisi konten hard-coded yang seharusnya dinamis. Beri penanda "konten contoh" pada UI.
- **Halaman template** memakai query string (`?a=` `?p=` `?m=` `?id=`) — satu file mewakili banyak entri checklist.
- **Tautan eksternal** diberi `data-ext` → dialog serah-terima "Anda akan diarahkan ke …" (Lanjutkan/Batal). Contoh implementasi: `klh-website-utama/assets/js/pages/layanan-kelompok.js`.
- **Tanpa localStorage untuk data inti** — hanya preferensi aksesibilitas (`klh-contrast`, `klh-fontsize`) dan flag sesi demo, selalu dibungkus try/catch.

## Aksesibilitas (tidak bisa ditawar)

Skip link ke `#konten` · satu `h1` per halaman · `aria-current` pada nav aktif · target sentuh ≥ 44px · status = ikon + teks (bukan warna saja) · form ber-label + pesan error terasosiasi (`aria-describedby`) · `prefers-reduced-motion` dihormati · kontras AA (pakai token, jangan warna mentah).

## Design tokens inti (lengkap di `docs/design.md`)

Primary `#005952` (`--g-600`, skala green 50–900) · aksen earth & sky · font: Plus Jakarta Sans (display) / Inter (body) / JetBrains Mono (angka & kode) · spacing 4px `--s1..--s16` · container 1200px · breakpoint <768 / 768–1024 / >1024. Chart: **Chart.js UMD di-embed inline** (bukan CDN), `animation:false` saat export render.

## Verifikasi wajib sebelum menyatakan selesai

1. `python3 -m http.server` + Playwright Chromium: screenshot desktop 1440px & mobile 390px untuk tiap halaman baru; **nol error JS** (abaikan 403 Google Fonts di sandbox).
2. Link-check semua `href`/`src` internal.
3. Uji interaksi kunci (form, filter, dialog, stepper, timeline).
4. Tulis/`update` `README.md` modul, lalu zip ke folder output.
5. Update `docs/F2_Checklist-Halaman.md` (centang) dan `docs/PANDUAN_KERJA_UIUX_KLH.md` (status + Log Deliverable).

## Larangan

- Jangan mengubah isi `klh-website-utama/` (Modul 01 sudah final) — kecuali diminta eksplisit.
- Jangan pakai emoji sebagai ikon pada deliverable; pakai `icons.js` (Material Symbols path, viewBox `0 -960 960 960`).
- Jangan mengklaim riset primer yang belum dilakukan; konten dummy selalu berpenanda.
- Jangan menambah framework/CDN runtime (React, Tailwind, jQuery, dsb.).
