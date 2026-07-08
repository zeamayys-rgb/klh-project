# Modul 02 · PPID Web — Prototipe HTML

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Guru Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** SELESAI — 7 Jul 2026 · 16 halaman checklist / 15 file HTML (Chat Bot AI = komponen widget lintas halaman)

Portal penuh Pejabat Pengelola Informasi & Dokumentasi (PPID): pengajuan permohonan
informasi publik daring (UU 14/2008), pelacakan status, dan informasi terbuka —
kelanjutan dari halaman gerbang `klh-website-utama/pages/ppid.html` (Modul 01).

## Tentang produk ini (konteks KAK)

**PPID** (*Pejabat Pengelola Informasi dan Dokumentasi*) adalah unit yang wajib ada di
setiap badan publik menurut **UU No. 14 Tahun 2008 tentang Keterbukaan Informasi
Publik**: warga negara berhak meminta informasi publik, dan badan publik wajib
melayaninya dalam tenggat yang diatur undang-undang. Selama ini proses di KLH berjalan
**manual** — pemohon mengirim email/berkas Word, tanpa nomor registrasi, tanpa cara
mengetahui status. Produk ini mendigitalkan seluruh siklusnya.

**Dua sisi produk:**

1. **Informasi yang sudah terbuka (tanpa login)** — UU 14/2008 membagi informasi ke
   4 klasifikasi yang menjadi struktur beranda: **Berkala** (wajib diumumkan rutin,
   mis. laporan kinerja), **Serta-Merta** (wajib segera, mis. ancaman lingkungan),
   **Setiap Saat** (tersedia bila diminta), dan **Dikecualikan** (ditutup dengan dasar
   hukum). Katalognya adalah **DIP** (Daftar Informasi Publik — tabel ber-filter) dan
   **DIK** (Daftar Informasi Dikecualikan), didukung profil PPID, regulasi, laporan
   kinerja, dan FAQ.
2. **Alur permohonan (login)** — bila informasi belum tersedia di DIP, pemohon
   (perorangan ber-NIK atau badan hukum) mengajukan lewat **form stepper 4 langkah**
   (WF-02: data diri → rincian informasi → unggah dokumen → kirim), menerima **nomor
   registrasi** (`PPID-2026-XXXXXX`), lalu memantau lewat **Lacak** ber-timeline
   (WF-03): Diterima → Verifikasi → Diproses → Selesai. Bila permohonan **Ditolak**,
   UU memberi hak **keberatan** — jalurnya tersedia langsung dari timeline (WF-17),
   dengan banner konteks permohonan yang ditolak.

Persona utama: **P1 Sari** (warga) serta pemohon profesional (jurnalis, peneliti, LSM,
badan hukum). Ukuran keberhasilan versi KAK: permohonan tidak lagi "hilang" —
setiap langkah tercatat, terlacak, dan berbatas waktu.

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
