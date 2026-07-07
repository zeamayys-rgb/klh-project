# Modul 04 · CMS Konten — KLH/BPLH (Prototipe HTML)

Prototipe hi-fi **CMS admin** untuk mengelola informasi lintas tiga produk digital KLH/BPLH:
Website Utama (berita/pengumuman/agenda), PPID (DIP/DIK, regulasi, FAQ), dan rujukan ke Omni Channel.
Vanilla HTML+CSS+JS tanpa build step — bisa dibuka via `file://` maupun `python3 -m http.server`.

## Halaman (8 file)

| File | Isi |
|---|---|
| `login.html` | Masuk (email + sandi + captcha placeholder; sesi demo `localStorage klh-cms-sesi`) |
| `index.html` | Dashboard: 4 KPI, antrean review lintas produk, log aktivitas, kartu 3 produk |
| `konten.html` | Daftar konten Website Utama — chip filter status (dukung `?status=`), cari, hapus (konfirmasi) |
| `konten-edit.html` | Editor: slug hidup, ringkasan, isi (toolbar demo), foto unggulan dari pustaka + alt wajib, jadwal tayang, panel Status & Alur; `?id=` = mode sunting |
| `agenda.html` | Kelola kalender M01 (agenda/hari lingkungan/libur) + form tambah tervalidasi |
| `ppid.html` | Tab DIP · Regulasi · FAQ; filter klasifikasi UU 14/2008; dialog unggah → status review |
| `media.html` | Pustaka media, cari, unggah dengan **teks alternatif wajib** (WCAG) |
| `pengguna.html` | 4 peran + matriks izin + daftar pengguna |

## Alur editorial

**Draf → Menunggu Review → Terbit/Terjadwal.** Kontributor tidak dapat menerbitkan;
konten PPID wajib disetujui Verifikator PPID. Prinsip "wajib approval" panduan kerja
diterjemahkan langsung ke UI (badge status, antrean review, notifikasi).

## Arsitektur

- Fondasi disalin dari Modul 03 (identik byte): `tokens.css` `base.css` `components.css` `icons.js` + `main.js` (reveal, `data-ext`, `KLH.toast`).
- App shell `<klh-sidebar>` + `<klh-topbar>` diadaptasi di `assets/js/components/cmsshell.js` (nav CMS, badge antrean, notifikasi Review/Sistem, pencarian global artikel/DIP/agenda).
- Data dummy terpusat `assets/js/data/cms.js` (`KLH.cms.*`) — 10 artikel, 8 DIP, 6 FAQ, 5 regulasi, 6 agenda, 9 media, 6 pengguna, 4 peran; jangkar waktu demo 7 Jul 2026 10.15 WIB. Seluruh entri berpenanda **konten contoh**.
- `assets/img/media/` = salinan 9 foto berita M01 agar folder mandiri saat di-zip.
- Tautan "Pratinjau" produk menunjuk `../klh-website-utama/` dst. — hanya berfungsi bila keempat folder modul berdampingan.

## Verifikasi (7 Jul 2026)

Playwright 9 varian URL × (1440px + 390px): **nol error JS, nol overflow**;
**32 uji interaksi lolos** (login+validasi+fokus error, KPI, antrean, notifikasi berfilter,
filter/cari/hapus konten, slug hidup, pilih foto→alt, kirim review/jadwal, tambah agenda,
tab & filter PPID, dialog unggah DIP, cari media, alt wajib, matriks peran, sidebar ciut,
drawer mobile + Escape).
