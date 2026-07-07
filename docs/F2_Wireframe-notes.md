# F2 — Wireframe Notes (Low-Fidelity)
## Fase 2.2 · Wireframe — Semua MUST + Template Kunci (26 artboard)

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Guru Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** Draft v2 · **Lokasi Figma:** halaman **Wireframe** (26 artboard, 6 baris produk)
**Prasyarat:** `F2_UserFlow-IA.md`, `F2_Checklist-Halaman.md`, `F1_MoSCoW.md`, `F1_Persona-Journey.md`, Design System

> **Catatan validasi:** Semua wireframe low-fidelity (grayscale + aksen hijau KLH `#1B7A4B` hanya untuk aksi utama / status aktif-selesai). Tujuannya menguji **struktur, hierarki, alur** — bukan visual final. Label & pengelompokan mengikuti `F2_UserFlow-IA.md` yang masih tentatif sampai disahkan via Berita Acara (6 keputusan terbuka §9). Mockup high-fidelity (2.3) menyusul setelah struktur disetujui.

---

## 1. Ringkasan yang Dikerjakan

26 wireframe dibuat, mencakup **semua halaman MUST yang labelnya stabil** + **template kunci** (yang digandakan untuk banyak halaman Should/Could). Halaman yang menunggu keputusan terbuka §9 sengaja ditahan agar tidak rework.

| Baris | Produk | Artboard |
|---|---|---|
| ① | Halaman Prioritas (momen kritis) | WF-01, WF-02, WF-03, WF-04 |
| ② | Website Utama | WF-05, WF-06, WF-07, WF-08, WF-09 |
| ③ | Website Utama (lanjutan) | WF-10, WF-11 |
| ④ | PPID Web | WF-12, WF-13, WF-14, WF-15, WF-16, WF-17 |
| ⑤ | PPID Mobile (Flutter) | WF-18, WF-19, WF-20, WF-21 |
| ⑥ | Omni Channel | WF-22, WF-23, WF-24, WF-25, WF-26 |

---

## 2. Konvensi Wireframe

- **Fidelitas:** low-fidelity. Kotak abu = placeholder gambar/ikon; bar abu = placeholder teks; teks `[ kurung ]` = konten menyusul.
- **Warna:** grayscale netral; **hijau KLH hanya** untuk aksi utama (primary CTA), status selesai/aktif. Sekunder pakai biru sky (info) / amber (peringatan SLA) / merah danger (error) — konsisten Design System.
- **Tag telusur:** tiap artboard punya pil `● UR-xxx` yang menautkan ke requirement & momen kritis.
- **Lebar artboard:** Web Utama 1024–1440px, PPID Web 720px, PPID Mobile 390×844 (frame ponsel), Omni 1280–1440px.
- **Komponen:** semua memetakan ke komponen reusable Design System (navbar, search, form/input, data table, cards, filter, sidebar, dst).

---

## 3. Daftar Wireframe & Catatan Desain

### Baris ① — Halaman Prioritas (momen kritis 3 persona)
- **WF-01 Beranda Web Utama** (1440) — utility bar → navbar 4 menu + search → **hero "Layanan Cepat"** (CTA Lapor Pencemaran, anti information-overload) → grid 7 layanan → 3 kolom info terkini → footer. `UR-HOME-01`.
- **WF-02 Form Permohonan PPID** (720) — **stepper 4 langkah**, langkah "Unggah Berkas" aktif: dropzone, baris berkas valid (✓ hijau) & error (merah, pesan cara perbaiki). `UR-PPID-01`.
- **WF-03 Lacak Permohonan** (720) — kartu ID + badge status, **timeline status vertikal** + estimasi, kartu notifikasi aktif. Memecahkan "buta setelah kirim email". `UR-PPID-02`.
- **WF-04 Dashboard & Unified Inbox** (1440) — sidebar + KPI strip + inbox split (daftar percakapan badge 5 kanal + filter, panel percakapan + eskalasi + reply). `UR-OMNI-01/02`.

### Baris ② — Website Utama
- **WF-05 Hasil Pencarian** — search bar besar + sidebar filter tipe konten + daftar hasil ber-tag. `UR-SEARCH-01`.
- **WF-06 Indeks Layanan** — 4 kartu kelompok per niat (Perizinan / Pengaduan / Data-Lab / Regulasi); `↗` tautan eksternal ditandai. `UR-IA-01`.
- **WF-07 Pengaduan & Aspirasi** — channel cards (SP4N-LAPOR↗, Pengaduan langsung, WCC) + strip Chat Bot pengarah. Entry Flow A (P1).
- **WF-08 Indeks Informasi [TEMPLATE]** — tab 9 modul + grid kartu + pagination. Satu template untuk Berita/Siaran Pers/Agenda/Artikel/dll.
- **WF-09 Detail Artikel [TEMPLATE]** — breadcrumb + judul + meta + hero + kolom baca terpusat + share. Untuk semua detail berita/artikel.

### Baris ③ — Website Utama (lanjutan)
- **WF-10 Detail Program [TEMPLATE]** — hero program + **CTA "Cara Ikut Serta"** + Tentang/Tahapan + sidebar info. Untuk 7 program (Adiwiyata/Kalpataru/PROPER/dll).
- **WF-11 Struktur Organisasi** — bagan pohon (Menteri → Wamen → Eselon I), klik node → Detail Jabatan.

### Baris ④ — PPID Web
- **WF-12 Beranda PPID** — hero + CTA ajukan + **4 kategori info wajib UU KIP** + quick action.
- **WF-13 Masuk** — email, sandi, captcha "bukan robot", lupa sandi. `UR-PPID-01`.
- **WF-14 Daftar Akun** — identitas (nama, NIK, email) + sandi + verifikasi email + persetujuan.
- **WF-15 Konfirmasi Permohonan** — ikon sukses + **ID besar** + estimasi 10 hari + CTA Lacak. Tidak menggantung.
- **WF-16 Daftar Informasi Publik (DIP)** — search + filter + **data table** (header hijau, baris zebra, badge kategori, tombol unduh).
- **WF-17 Pengajuan Keberatan** — banner konteks "Ditolak" + alasan + form keberatan + unggah. Jalur hasil Flow B.

### Baris ⑤ — PPID Mobile (Flutter, 390×844)
- **WF-18 Masuk** — logo + form + CTA, target sentuh ≥44px.
- **WF-19 Beranda App** — greeting + kartu permohonan aktif (progress) + grid menu tugas inti + tab bar.
- **WF-20 Ajukan** — mini-stepper + field rincian + upload + lanjut.
- **WF-21 Lacak** — kartu ID + badge + **timeline vertikal** + push notification. Semua punya **tab bar bawah** (Beranda/Ajukan/Lacak/Akun). `UR-PPID-03`.

### Baris ⑥ — Omni Channel
- **WF-22 Login** — panel brand kiri + form + **MFA/SSO** instansi.
- **WF-23 Dashboard KPI** — sidebar + 4 KPI card + grafik tren (bar) + donut distribusi kanal. `UR-OMNI`.
- **WF-24 Ticketing / SLA** — filter status tab + **data table tiket** (ID, subjek, kanal, prioritas, status badge, **SLA timer warna+teks**, agen). `UR-OMNI-02`.
- **WF-25 Detail Tiket** — thread percakapan + reply, panel kanan **SLA timer** + tindakan (Eskalasi/Ubah status/Tetapkan agen/Selesai) + detail.
- **WF-26 Reporting** — toolbar rentang tanggal + **ekspor PDF/Excel/CSV** + 4 summary card + tabel laporan periodik.

---

## 4. Daftar Periksa Aksesibilitas (berlaku semua WF)

- [ ] Skip-link "Lewati ke konten".
- [ ] Navbar/Mega Menu/sidebar dapat dioperasikan keyboard penuh.
- [ ] Stepper, timeline, tabel ber-label ARIA; urutan fokus jelas.
- [ ] Status/error/SLA tidak mengandalkan warna saja (ikon + teks).
- [ ] Target sentuh ≥44px (mobile).
- [ ] Mode kontras tinggi & perbesaran teks 200%.
- [ ] Tautan eksternal `↗` diberi konteks "membuka situs lain".

---

## 5. Yang Belum Termasuk (sesi lanjutan)

- **Versi responsif** (tablet/mobile) dari halaman Web Utama & PPID Web & Omni — UR-PERF-02.
- **PPID Mobile** layar tambahan: Splash/Onboarding, Daftar Akun, Riwayat, Chat Bot.
- **Halaman tunggu keputusan §9:** Mega Menu detail, pengelompokan Layanan final.
- **Should/Could** belum di-wireframe (banyak = duplikasi template WF-08/09/10): Profil/Tugas-Fungsi, Detail Jabatan, Daftar Program (indeks), Agenda/Kalender, Galeri Video, Profil PPID, Regulasi, DIK, FAQ, Laporan Kinerja, Konsultasi, Riwayat & Notifikasi.
- **Omni:** Routing & Auto-Reply, Analytics (heatmap/session), Role Management, Keamanan, Manajemen Kanal, Profil.

---

## 6. Langkah Berikutnya

1. Review struktur 26 wireframe bersama PPK/Tim Teknis (bersamaan 6 keputusan terbuka §9).
2. Setelah disetujui → **2.3 Mockup high-fidelity** (Design System penuh + warna brand) untuk halaman prioritas.
3. Tambah versi responsif + sisa halaman Should/Could (gandakan template).

> **Reminder:** centang ☑ `2.2 Wireframe` di **STATUS PROGRESS** pada `PANDUAN_KERJA_UIUX_KLH.md`; catat 26 artboard pada halaman Wireframe Figma + file `F2_Wireframe-notes.md` & `F2_Checklist-Halaman.md`.

---

## 7. High-Fidelity / Mockup (2.3) — Hero per Produk

Dibangun di zona kanan halaman **Wireframe** Figma (mulai `x = 6200`), terpisah dari low-fidelity. Menggunakan **Material Design 3** dari paket **Material Web 2.4.1** (upload klien) — token (shape scale 4/8/12/16/28, elevation level 1–3, M3 typescale) **diharmonisasikan dengan brand KLH** (primary `#1B7A4B`). Ikon memakai **Material Symbols Outlined autentik** (di-render sebagai vektor `createNodeFromSvg`, viewBox `0 -960 960 960`), bukan emoji. Tipografi: Plus Jakarta Sans (display/headline/title) + Inter (body/label) + JetBrains Mono (angka SLA).

| Kode | Layar | Produk | Frame | Node | Sorotan komponen M3 |
|---|---|---|---|---|---|
| **HF-WEB-01** | Beranda | Website Utama | 1440 | `84:689` | Gov-strip, top app bar (nav pills + filled button), hero gradient + scrim + AQI stat card (elevation 3), 8 service cards (tonal icon container), section berita (featured + list), footer gelap |
| **HF-PPID-01** | Lacak Permohonan | PPID Web | 1440 | `88:689` | Status hero card gradient + **circular progress ring 66%**, timeline 4-tahap (marker dots + connector), kartu notifikasi (toggle), kartu detail, tombol bantuan |
| **HF-OMNI-01** | Dashboard | Omni Channel | 1440 | `90:689` | **Sidebar gelap** + nav badge, 4 KPI card (trend delta), **Unified Inbox data table** (avatar, channel icon, status badge, SLA mono timer), distribusi kanal (bar), donut SLA 94%, alert tindakan |
| **HF-PPID-M01** | Lacak Permohonan | PPID Mobile | **375** | `93:689` | Status bar + app bar primary, hero ring, timeline ringkas, toggle notifikasi, **M3 bottom navigation** |

**Placeholder gambar:** image generation via Hugging Face diblokir di environment ini (`gradio=none`), sehingga area gambar memakai **placeholder M3 profesional** (gradien hijau + organic blob + ikon eco pudar + scrim) yang terlihat disengaja — siap diganti foto final saat tersedia.

**Catatan konsistensi frame:** seluruh hi-fi web = **1440px**, mobile = **375px** sesuai instruksi. Banner zona "HIGH FIDELITY · Material Design 3" ditempatkan di atas keempat layar.

> **Reminder:** centang ☑ `2.3 Mockup (hero)` di **STATUS PROGRESS** `PANDUAN_KERJA_UIUX_KLH.md`. Sisa mockup (61 halaman, 4 gelombang) menyusul. Token M3 + ikon Material Symbols menjadi acuan visual untuk seluruh mockup berikutnya.

---

*Aset perancangan wireframe untuk Kementerian Lingkungan Hidup / Badan Pengendalian Lingkungan Hidup, disusun oleh PT Bening Guru Semesta sesuai Kerangka Acuan Kerja. © 2026.*
