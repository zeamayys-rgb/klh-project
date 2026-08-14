# Laporan Audit Konsistensi Visual — Proyek KLH/BPLH

**Tanggal:** 14 Agustus 2026 · **Cakupan:** 75 halaman di 5 modul (Website Utama 29 · PPID Web 15 · Omni Dashboard 12 · CMS 11 · PPID Mobile 9, di luar Design System reference)
**Metode:** diff fondasi antar-modul (tokens/base/components/icons) → grep warna mentah, token tak terdefinisi, emoji, judul, tautan → validasi render Playwright Chromium 1440px (console error, ikon kosong, computed style, rasio kontras dihitung) → perbaikan → sweep ulang.

**Status akhir:** 13 temuan tervalidasi — **8 diperbaiki** (Modul 02–05), **5 dilaporkan saja** (4 menyentuh Modul 01 yang frozen, 1 keputusan desain).

---

## A. Drift fondasi — Modul 01 sudah berevolusi, Modul 02–05 tertinggal

Modul 01 menerima perbaikan audit (seri A1-xx: kontras, target sentuh, token turunan) yang tidak pernah di-backport. Keempat modul lain memakai salinan fondasi yang lebih tua (md5 `tokens/base/components.css` identik satu sama lain, berbeda dari Modul 01).

| # | Temuan | Bukti | Status |
|---|---|---|---|
| A1 | **Teks kecil `--ink-400` gagal WCAG AA** — rasio 3,92:1 di atas putih (butuh 4,5:1) pada hint form, meta timeline, label seksi, catatan kecil. Modul 01 sudah nol `ink-400`; Modul 02–05 masih 100 pemakaian (13 di components.css + 87 di pages/mobile.css). | Hitung luminansi `#75847F` = 3,92:1; `#51625E` = 6,44:1. Computed style `.field .hint` sebelum/后: `#75847F` → `#51625E` | ✅ Diperbaiki: semua `var(--ink-400)` → `var(--ink-500)` di CSS Modul 02–05 |
| A2 | **4 token turunan A1-09 hilang** (`--danger-700`, `--on-orange`, `--success-ink`, `--danger-ink`) sehingga components.css Modul 02–05 memakai 5 warna mentah (`#3A1B02`, `#A93226`, `#0A5A3A`, `#8E2A1F`) — melanggar aturan "pakai token, jangan warna mentah". | diff `tokens.css` 01 vs 02 | ✅ Diperbaiki: token ditambahkan ke tokens.css 4 modul; hex diganti token (warna sama, tanpa perubahan visual) |
| A3 | **Hover tombol lebih lemah dari Modul 01**: `.btn-outline:hover` tanpa border/shadow tegas, `.btn-ghost:hover` hanya abu tipis (Modul 01: tint hijau + outline, "harus tegas"). | diff components.css | ✅ Diperbaiki: aturan hover Modul 01 di-backport ke 4 modul |
| A4 | **Utilbar tanpa target sentuh 44px & tanpa penanganan overflow <768px** (A1-04, A1-01 / WCAG 1.4.10) — render nyata di PPID Web. | diff components.css; utilbar dipakai `klh-ppid-web/assets/js/components/navbar.js` | ✅ Diperbaiki: `min-height:44px` + blok media <768px di-backport |
| A5 | **Eyebrow beda gaya antar modul**: Modul 02–05 punya garis pendek hijau (`.eyebrow::before` di base.css), Modul 01 tidak — terlihat jelas saat membandingkan hero Beranda Utama vs Beranda PPID. | diff base.css + screenshot kedua beranda | ⚠️ Dilaporkan — keputusan arah desain: hapus garis di 02–05, atau (lebih masuk akal karena 02–05 lebih baru dan konsisten satu sama lain) bawa gaya ini ke Modul 01 lewat export Claude Design |
| A6 | **CSS mega-menu mati** di Modul 02–05 (`.mega__*` ±60 baris; tak ada navbar modul-modul itu yang merendernya) + drift `h3` vs `h5` di dalamnya. | grep `mega__` di assets/js tiap modul = 0 | ⚠️ Dilaporkan — kandidat penghapusan saat sinkron fondasi berikutnya; tidak berdampak visual |

## B. Bug nyata (token tak terdefinisi)

| # | Temuan | Bukti | Status |
|---|---|---|---|
| B1 | `klh-cms/pages.css`: `padding: var(--s7)` — **`--s7` tidak ada di skala** (s6→s8) → padding surat PPID kolaps ke 0; surat tercetak menempel ke tepi kartu. | Computed padding `.surat` = `0px` → kini `32px` | ✅ Diperbaiki → `var(--s8)` |
| B2 | `klh-cms/pages.css`: `font-size: var(--t-base)` — **`--t-base` tidak ada** (nama benar `--t-body`) → ukuran H3 di editor RTE tidak terkontrol. | Computed font-size h3 `.rte-area` kini `16px` | ✅ Diperbaiki → `var(--t-body)` |
| B3 | Warna mentah sisa di pages.css: `#3A1B02` (omni & cms, 2×2), `#16211E` (surat cms — nyaris `--ink-900` `#10201D` tapi bukan token), `#7CDED6`/`#B8EAE6` di mobile.css (persis `--g-300`/`--g-200`). | grep hex | ✅ Diperbaiki → token. Sisa yang dibiarkan sadar: hex bezel frame perangkat mobile (`#10201D`, `#2b3a37`) dan `#EAFBF8` teks splash (tak ada padanan token persis) |

## C. Inkonsistensi dalam-modul

| # | Temuan | Bukti | Status |
|---|---|---|---|
| C1 | **Pola "kembali" CMS pecah dua**: `ppid-tiket.html` pakai tombol ghost + `klh-icon` arrowleft; tiga halaman edit (`konten-edit`, `pengguna-edit`, `struktur-edit`) pakai tautan teks biru dengan karakter "←" (juga melanggar aturan ikon = icons.js, bukan glyph). | Screenshot sebelum/sesudah | ✅ Diperbaiki: ketiganya diseragamkan ke pola tombol ghost; JS `konten-edit` yang menulis ulang label ikut disesuaikan (ikon dipertahankan) |
| C2 | **"Detil" vs "Detail"**: `pengguna-edit.html` satu-satunya pemakai "Detil" (judul tab, topbar, h1) — semua halaman lain "Detail". | grep | ✅ Diperbaiki → "Detail" (termasuk README CMS) |
| C3 | Judul tab login Omni: "Omni Channel **Dashboard** KLH/BPLH" — 11 halaman lain "Omni Channel KLH/BPLH". | grep `<title>` | ✅ Diperbaiki |
| C4 | Matriks izin `role.html` memakai glyph teks ✓/— (bukan icons.js); sudah ada `sr-only`, status tidak bergantung warna. | grep | ⚠️ Dilaporkan — dapat diterima (glyph tipografis, bukan emoji), catat saja |

## D. Modul 01 — frozen, dilaporkan saja (perbaiki via export Claude Design)

| # | Temuan | Dampak |
|---|---|---|
| D1 | **Artefak Claude Design tertinggal**: `assets/js/vendor/image-slot.js` fetch sidecar `.image-slots.state.json` → console error 404 di 4 halaman program (adiwiyata, kalpataru, nirwasita-tantra, proper); `struktur-organisasi.html` memuat skrip ini tanpa satu pun `<image-slot>`. Melanggar standar "nol error JS" dan aturan repo soal artefak alat desain. | Console error; visual aman (semua slot punya `src` terisi) |
| D2 | `var(--wash)` di `components.css:632` **tidak terdefinisi** → hover tombol tutup panel aksesibilitas tak berubah latar. | Umpan balik hover hilang |
| D3 | Pemisah judul tab `|` (Modul 01) vs `—` (Modul 02–05). | Kosmetik lintas-modul |
| D4 | PPID Mobile tanpa skip-link di 9 halaman (prototipe app-frame; navigasinya bottom-nav, bukan dokumen panjang). | Putuskan: pengecualian sadar atau tambahkan saat revisi mobile |

---

## Validasi

- **Sweep ulang 75 halaman** pasca-perbaikan: **0 error JS baru**, 0 `klh-icon` kosong, tetap 1 `h1`/halaman, skip-link utuh (error tersisa hanya D1 di Modul 01 yang frozen; 403 Google Fonts sandbox diabaikan sesuai standar).
- **Computed style**: `.surat` padding `0 → 32px`; `.rte-area h3` `→ 16px`; `.field .hint` `#75847F → #51625E` (3,92:1 → 6,44:1, lolos AA).
- **Screenshot** sebelum/sesudah (beranda tiap modul + 3 halaman edit CMS + permohonan PPID) di scratchpad sesi — tidak ada regresi tata letak.

## Berkas yang diubah

- `klh-ppid-web/`, `klh-omni-dashboard/`, `klh-cms/`, `klh-ppid-mobile/` → `assets/css/tokens.css`, `components.css`, `pages.css`/`mobile.css`
- `klh-cms/konten-edit.html`, `pengguna-edit.html`, `struktur-edit.html`, `klh-omni-dashboard/login.html`, `klh-cms/README.md`
- `klh-website-utama/` **tidak disentuh**

## Rekomendasi lanjutan

1. **Tetapkan kebijakan sinkron fondasi**: satu sumber kanonis (Modul 01) + salin utuh ke modul lain tiap kali fondasi berubah — drift ini akan terulang tanpa itu.
2. Saat integrasi zip Claude Design berikutnya: bereskan D1 (cabut `image-slot.js` + ganti `<image-slot>` dengan `<img>` biasa) dan D2 di Modul 01, lalu putuskan arah A5 (eyebrow).
3. `klh-cms/index.html` terhapus di working tree (git status `D`) — hub root sudah menaut ke `login.html`, tapi pastikan itu disengaja sebelum commit.
