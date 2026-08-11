# Modul 04 · CMS Konten — KLH/BPLH (Prototipe HTML)

Prototipe hi-fi **CMS admin** untuk mengelola konten Website Utama KLH/BPLH
(berita/pengumuman/agenda) — plus rujukan ke Omni Channel yang dikelola terpisah.
Vanilla HTML+CSS+JS tanpa build step — bisa dibuka via `file://` maupun `python3 -m http.server`.

## Tentang produk ini (konteks proyek)

Modul ini **di luar lingkup 3 produk KAK** — usulan tambahan yang menjawab pertanyaan
yang pasti muncul saat serah terima: *"konten Website Utama dikelola dari mana?"*
Di prototipe, konten disimulasikan lewat berkas data terpusat (`assets/js/data/*.js`
tiap modul); CMS ini memperlihatkan seperti apa **antarmuka pengelolanya** kelak —
satu dapur konten untuk berita/pengumuman/agenda Website Utama,
pustaka media, serta pengguna & peran.

Dua prinsip proyek diterjemahkan langsung ke antarmuka:

- **"Wajib approval pengguna jasa"** → alur editorial **Draf → Menunggu Review →
  Terbit/Terjadwal**. Kontributor tidak bisa menerbitkan langsung; antrean review
  tampil di dashboard.
- **Aksesibilitas sejak sumber** → media tidak bisa diunggah tanpa **teks alternatif**
  (WCAG); foto unggulan artikel dipilih dari pustaka yang sudah ber-alt.

Penggunanya **internal**: kontributor konten, editor/reviewer, dan
admin — dipetakan ke 3 peran dengan matriks izin di `pengguna.html`.

## Halaman (9 file)

| File | Isi |
|---|---|
| `login.html` | Masuk (email + sandi + captcha placeholder; sesi demo `localStorage klh-cms-sesi`) |
| `index.html` | Dashboard: 4 KPI, antrean review, log aktivitas, kartu produk |
| `konten.html` | Daftar konten Website Utama — chip filter status (dukung `?status=`), cari, hapus (konfirmasi) |
| `konten-edit.html` | Editor: slug hidup, ringkasan, isi dengan editor teks kaya fungsional (tebal/miring/garis bawah, H2/H3, kutipan, daftar, tautan, gambar dari pustaka ber-alt, tabel baris×kolom, undo/redo, tempel-polos), foto unggulan + thumbnail 200×300 dari pustaka + alt wajib, tanggal berita/agenda, pratinjau modal (iframe halaman detail Website Utama), panel Status & Alur; `?id=` = mode sunting |
| `agenda.html` | Kelola kalender M01 (agenda/hari lingkungan/libur) + form tambah tervalidasi |
| `media.html` | Pustaka media, cari, unggah dengan **teks alternatif wajib** (WCAG) |
| `pengguna.html` | 3 peran + matriks izin + daftar pengguna |
| `ppid.html` | Daftar tiket PPID — chip filter status (dukung `?status=`), kolom deadline (badge sisa/lewat hari) |
| `ppid-tiket.html` | Detail tiket PPID (`?id=`): alur Humas (tolak / teruskan ke unit) → unit terkait (tindak lanjut / tolak); tindak lanjut wajib kategori + tag informasi, output tautan/PDF; penolakan wajib alasan + PDF pendukung opsional; kategori dikecualikan dikirim personal (tidak tayang publik); deadline default 7 hari dapat diubah Humas; surat perpanjangan (pratinjau + unduh PDF via cetak) |

## Alur editorial

**Draf → Menunggu Review → Terbit/Terjadwal.** Kontributor tidak dapat menerbitkan.
Prinsip "wajib approval" panduan kerja diterjemahkan langsung ke UI
(badge status, antrean review, notifikasi).

## Arsitektur

- Fondasi disalin dari Modul 03 (identik byte): `tokens.css` `base.css` `components.css` `icons.js` + `main.js` (reveal, `data-ext`, `KLH.toast`).
- App shell `<klh-sidebar>` + `<klh-topbar>` diadaptasi di `assets/js/components/cmsshell.js` (nav CMS, badge antrean, notifikasi Review/Sistem, pencarian global artikel/agenda).
- Data dummy terpusat `assets/js/data/cms.js` (`KLH.cms.*`) — 10 artikel, 6 agenda, 9 media, 5 pengguna, 3 peran; jangkar waktu demo 7 Jul 2026 10.15 WIB. Seluruh entri berpenanda **konten contoh**.
- `assets/img/media/` = salinan 9 foto berita M01 agar folder mandiri saat di-zip.
- Tautan "Pratinjau" produk menunjuk `../klh-website-utama/` dst. — hanya berfungsi bila keempat folder modul berdampingan.

## Verifikasi (10 Agu 2026)

Playwright 8 varian URL × (1440px + 390px): **nol error JS**; fungsi kunci diuji
(login+validasi, KPI, antrean review, notifikasi, filter/cari konten, editor,
agenda, media + alt wajib, matriks peran, sidebar, drawer mobile).
Fungsionalitas PPID (DIP/regulasi/FAQ) dihapus — CMS kini fokus konten Website Utama.
