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

## Halaman (11 file)

Tanpa dashboard: masuk langsung mendarat di `konten.html?kategori=berita`.
Navigasi sidebar: **Konten** (8 kategori dari `KLH.cms.kategoriKonten`, tiap
item = `konten.html?kategori=<slug>`, plus Agenda & Kalender dan Struktur
Organisasi) · **Layanan** (Tiket PPID) · **Admin** (Manajemen Pengguna).

| File | Isi |
|---|---|
| `login.html` | Masuk (email + sandi + captcha placeholder; sesi demo `localStorage klh-cms-sesi`) |
| `konten.html` | Daftar konten Website Utama — chip filter status (dukung `?status=`), cari, hapus (konfirmasi); `?kategori=<slug>` = mode halaman kategori (judul, filter terkunci, tombol tulis ikut kategori) |
| `konten-edit.html` | Editor: slug hidup, isi dengan editor teks kaya fungsional (tebal/miring/garis bawah, H2/H3, kutipan, daftar, tautan, gambar dari pustaka ber-alt, tabel baris×kolom, undo/redo, tempel-polos), foto multi-pilih dari pustaka dengan strip urutan (seret atau klik untuk memilih foto unggulan; posisi 1 = unggulan, alt otomatis mengikuti) + thumbnail 200×300 dari pustaka + alt wajib, tanggal berita/agenda, pratinjau modal (iframe halaman detail Website Utama), panel Status & Alur; `?id=` = mode sunting; `?kategori=<slug>` = mode tulis kategori tsb. + panel "Khusus <kategori>" (bidang spesifik: nomor siaran pers, masa berlaku pengumuman, tautan media & durasi) dari `kategoriKonten[].fields`; kategori dokumen (Peraturan Menteri / Surat Keputusan / Publikasi & Buku, `dokumen: true`) memakai mode ringkas: Judul + Placeholder + Link Dokumen + Upload Dokumen (editor isi, foto, dan thumbnail disembunyikan) |
| `agenda.html` | Kelola kalender M01 (agenda/hari lingkungan/libur) + form tambah tervalidasi |
| `struktur.html` | Daftar pejabat Struktur Organisasi M01 (level Pimpinan / Eselon I / Eselon II, LHKPN, status alur) + tombol "Tambah pejabat"; aksi baris menuju struktur-edit & pratinjau detail-jabatan M01 |
| `struktur-edit.html` | Tambah/sunting pejabat (`?id=`): nama, jabatan, level bagan (3 level), ringkasan tugas, biografi, pendidikan, riwayat karier, LHKPN + unggah 1 foto pejabat (dropzone, unggahan baru menggantikan) + pratinjau modal iframe halaman detail-jabatan M01 |
| `media.html` | Pustaka media (tautan ikon galeri di topbar + sidebar): cari nama/alt, unggah dropzone multi-berkas JPG/PNG/PDF ≤5 MB — daftar antrean dengan **teks alternatif wajib per berkas** (WCAG) sebelum "Unggah semua" menambah kartu (pratinjau lokal, simulasi), edit alt teks per kartu via dialog |
| `pengguna.html` | Manajemen Pengguna: 4 peran (Admin, Kontributor, Verifikator, Verifikator PPID) + tabel Mapping Role (Tulis Konten / Publish / Review PPID / User Management) + daftar pengguna |
| `pengguna-edit.html` | Detail pengguna (tujuan tombol "Undang pengguna"): nama, email, role (kode `super_admin` / `humas` / `humas_verifikator` / `ppid_verifikator` dari `peran[].kode`), status active/non-active; validasi + ringkasan akses per role |
| `ppid.html` | Daftar tiket PPID — chip filter status (dukung `?status=`), kolom deadline (badge sisa/lewat hari) |
| `ppid-tiket.html` | Detail tiket PPID (`?id=`): alur Humas (tolak / teruskan ke unit) → unit terkait (tindak lanjut / tolak); tindak lanjut wajib kategori + tag informasi, output tautan/PDF; penolakan wajib alasan + PDF pendukung opsional; kategori dikecualikan dikirim personal (tidak tayang publik); deadline default 7 hari dapat diubah Humas; surat perpanjangan (pratinjau + unduh PDF via cetak) |

## Alur editorial

**Draf → Menunggu Review → Terbit/Terjadwal.** Kontributor tidak dapat menerbitkan.
Prinsip "wajib approval" panduan kerja diterjemahkan langsung ke UI
(badge status, antrean review, notifikasi).

## Arsitektur

- Fondasi disalin dari Modul 03 (identik byte): `tokens.css` `base.css` `components.css` `icons.js` + `main.js` (reveal, `data-ext`, `KLH.toast`).
- App shell `<klh-sidebar>` + `<klh-topbar>` diadaptasi di `assets/js/components/cmsshell.js` (nav CMS, badge antrean, notifikasi Review/Sistem, pencarian global artikel/agenda).
- Data dummy terpusat `assets/js/data/cms.js` (`KLH.cms.*`) — 10 artikel, 6 agenda, 9 pejabat, 9 media, 5 pengguna, 3 peran; jangkar waktu demo 7 Jul 2026 10.15 WIB. Seluruh entri berpenanda **konten contoh**.
- `assets/img/media/` = salinan 9 foto berita M01 agar folder mandiri saat di-zip.
- Tautan "Pratinjau" produk menunjuk `../klh-website-utama/` dst. — hanya berfungsi bila keempat folder modul berdampingan.

## Verifikasi (10 Agu 2026)

Playwright 8 varian URL × (1440px + 390px): **nol error JS**; fungsi kunci diuji
(login+validasi, KPI, antrean review, notifikasi, filter/cari konten, editor,
agenda, media + alt wajib, matriks peran, sidebar, drawer mobile).
Fungsionalitas PPID (DIP/regulasi/FAQ) dihapus — CMS kini fokus konten Website Utama.

Tambahan `struktur.html` (11 Agu 2026) diverifikasi via Chrome DevTools 1440px + 390px:
nol error JS; validasi form, simpan (status Menunggu Review + toast), deep link `?id=`,
dan pratinjau ke detail-jabatan M01 diuji.

Restrukturisasi navigasi (13 Agu 2026): dashboard dihapus, nav kategori konten
per-slug, editor per kategori (panel "Khusus"), Mapping Role 4 peran.
Diverifikasi via Chrome DevTools: seluruh halaman dimuat nol error konsol;
diuji mode kategori konten.html, bidang khusus editor per kategori (baru &
sunting), matriks Mapping Role sesuai spesifikasi, dan status aktif sidebar.
