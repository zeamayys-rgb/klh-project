# F2 — Checklist Halaman per Produk (dari Sitemap/IA)
## Daftar halaman yang perlu dirancang — Wireframe → Mockup → Prototype

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Guru Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Sumber:** `F2_UserFlow-IA.md` (sitemap §3–§5) · `F1_MoSCoW.md` (prioritas) · `F2_Wireframe-notes.md` (status WF)

> **Cara baca status:** `[x]` selesai pada tahap terkini · `[~]` sebagian/turunan dari yang ada · `[ ]` belum dibuat.
> **Penanda tahap:** *(WF-xx)* = wireframe lo-fi Figma · *(HF-xx)* = hi-fi Figma (hero screen) · *(M01)* = prototipe HTML Modul 01 · Website Utama.
> **Prioritas:** M=Must · S=Should · C=Could (dari MoSCoW). **Resp.** = butuh varian responsif (desktop/tablet/mobile).
> **Catatan:** label & pengelompokan masih tentatif sampai disahkan via Berita Acara (6 keputusan terbuka §9).
>
> **Riwayat pembaruan:** 7 Jul 2026 — **Modul 01 · Website Utama SELESAI** sebagai prototipe HTML klikabel (`klh-website-utama.zip`; 24 halaman checklist / 20 file — halaman template `indeks.html?m=`, `detail.html?a=/?p=`, `detail-jabatan.html?id=` mewakili beberapa entri sekaligus). 4 hero screen hi-fi Figma ✓ (HF-WEB-01 · HF-PPID-01 · HF-OMNI-01 · HF-PPID-M01).
> 7 Jul 2026 — **Modul 02 · PPID Web SELESAI** sebagai prototipe HTML klikabel (`klh-ppid-web.zip`; 16 halaman checklist / 15 file — Chat Bot AI = widget lintas halaman). Fondasi disalin dari M01; navbar varian sub-brand "PPID · KLH/BPLH". Verifikasi Playwright 1440/390, nol error JS, 19 uji interaksi lolos. Tombol "Buka Portal PPID Online" di `klh-website-utama/pages/ppid.html` kini dapat diarahkan ke `../klh-ppid-web/index.html` (M01 belum diubah — menunggu persetujuan).
> 7 Jul 2026 — **Modul 03 · Omni Channel Dashboard SELESAI** sebagai prototipe HTML klikabel (`klh-omni-dashboard.zip`; 13 entri checklist / 12 file — Panel Notifikasi = komponen topbar). Aplikasi internal (persona P3): **app shell** sidebar gelap collapsible + topbar (pencarian global, notifikasi, aksesibilitas, profil); Unified Inbox 3 panel (WF-04) 7 kanal; ticketing dengan **SLA timer hidup**; Chart.js 4.4.1 UMD embed lokal. Verifikasi Playwright 12 hlm × 1440/390, nol error JS, tanpa overflow, **32 uji interaksi lolos**.

---

## Ringkasan jumlah halaman

| Produk | Total halaman | WF lo-fi | Hi-Fi / Prototipe | Prioritas Must |
|---|---|---|---|---|
| 01 · Website Utama | 24 | 1 (Beranda) | **24 — Prototipe HTML M01 ✓** (+ HF-WEB-01 Beranda) | 6 |
| 02 · PPID Web | 16 | 2 (Form, Lacak) | **16 — Prototipe HTML M02 ✓** (+ HF-PPID-01 Lacak) | 8 |
| 02b · PPID Mobile (Flutter) | 8 | 0 | **8 — Prototipe UI HTML M02b ✓** (+ HF-PPID-M01 Lacak) | 6 |
| 03 · Omni Channel Dashboard | 13 | 1 (Inbox) | **13 — Prototipe HTML M03 ✓** (+ HF-OMNI-01 Dashboard/Inbox) | 7 |
| **Total** | **61** | **4** | **61** | **27** |

> **Status:** keempat modul prototipe UI (M01, M02, M02b, M03) selesai. Fondasi bersama M01 (`tokens.css` + `base.css` + `components.css` + `icons.js`) dipakai ulang di M02, M02b & M03. **Berikutnya:** implementasi Flutter + backend PPID Mobile (di luar lingkup UI) dan 3 sub-fitur Analytics Omni (T2).

---

## 01 · WEBSITE UTAMA KLH/BPLH (24 halaman)

### Beranda & global
- [x] **Beranda** — hero Layanan Cepat + 7 layanan + info terkini · **M** · Resp · *(WF-01 · HF-WEB-01 · M01)*
- [x] **Hasil Pencarian** — pencarian terpusat + filter · **S** · Resp · *(M01)*
- [x] **Mega Menu (panel)** — pola panel lebar (komponen, bukan halaman) · **S** · *(M01)* · ⚑ label final tunggu §9
- [x] **404 / Error** — halaman tidak ditemukan · C · *(M01)*

### Profil
- [x] **Tentang KLH/BPLH** — Visi, Misi, Nilai · S · Resp · *(M01)*
- [x] **Tugas & Fungsi** · S · *(M01)*
- [x] **Struktur Organisasi (bagan interaktif)** — Menteri/Wamen/Eselon · S · Resp · *(M01)*
- [x] **Detail Jabatan** (template `detail-jabatan.html?id=`) — keterangan + LHKPN per pejabat · C · *(M01)*
- [x] **Tata Kelola & Integritas** — Zona Integritas, LHKPN · C · *(M01)*

### Program (1 template, 7 isi)
- [x] **Daftar Program** — indeks 7 program · S · Resp · *(M01)*
- [x] **Detail Program (template `detail.html?p=`)** — Kalpataru/PROPER/Adipura/Adiwiyata/Proklim/Nirwasita/Ekonomi Sirkular + **CTA "Cara Ikut Serta"** · S · Resp · *(M01)*

### Layanan (⚑ pengelompokan tunggu §9)
- [x] **Indeks Layanan** — 4 kelompok per niat · **M** · Resp · *(M01)*
- [x] **Perizinan & Pengadaan** — PTSP · OSS↗ · LPSE/SiRUP↗ · M · *(M01)*
- [x] **Pengaduan & Aspirasi** — SP4N-LAPOR↗ · WCC · **M** *(entry Flow A / P1 — dialog serah-terima `data-ext` ✓)* · *(M01)*
- [x] **Data, Lab & Pengujian** — Pusarpedal · SRN PPI↗ · Bursa Karbon↗ · S · *(M01)*
- [x] **Regulasi & Pembelajaran** — JDIH · E-Learning · E-LHKPN · S · *(M01)*

### Informasi & Publikasi (1 template indeks + 1 template detail)
- [x] **Indeks Informasi (template `indeks.html?m=`)** — dipakai 9 modul (Berita, Siaran Pers, Pengumuman, Agenda, Artikel, Video & Podcast, Publikasi & Buku, SK, Peraturan Menteri) · S · Resp · *(M01)*
- [x] **Detail Artikel/Berita (template `detail.html?a=`)** — judul, tanggal, viewers, konten · S · Resp · *(M01)*
- [x] **Agenda & Kalender** — tampilan kalender hari besar/libur · C · *(M01)*
- [x] **Galeri Video & Podcast** — embed YouTube · C · *(M01)*

### Lainnya
- [x] **Informasi Publik (PPID) — entri** — tautan/embed ke produk PPID · M · *(M01)*
- [x] **Chat Bot AI (widget/FAB)** — persisten lintas halaman (komponen) · S · *(M01)*
- [x] **Aksesibilitas (panel/mode)** — kontras tinggi + ukuran teks · **M** (komponen global) · *(M01)*

---

## 02 · PPID WEB (16 halaman) — ✅ SELESAI (Prototipe HTML M02, 7 Jul 2026)

### Publik (tanpa login)
- [x] **Beranda PPID** — 4 kategori info (Berkala/Serta-Merta/Setiap Saat/Dikecualikan) · **M** · Resp · *(WF-12 · M02)*
- [x] **Profil PPID** — Tugas & Fungsi, Struktur, Visi & Misi · S · *(M02)*
- [x] **Regulasi** — dasar hukum keterbukaan informasi · S · *(M02)*
- [x] **Daftar Informasi Publik (DIP)** — tabel + filter/cari · S · Resp · *(WF-16 · M02)*
- [x] **Daftar Informasi Dikecualikan (DIK)** — tabel · C · *(M02)*
- [x] **Laporan Kinerja** · C · *(M02)*
- [x] **FAQ** · S · *(M02 — accordion aksesibel)*
- [x] **Chat Bot AI (PPID)** — widget RAG · S · *(M02 — widget `<klh-widgets>`, jawaban demo PPID; RAG menyusul)*

### Akun & alur permohonan (perlu login)
- [x] **Masuk** — email, sandi, captcha, lupa sandi · **M** · *(WF-13 · M02 — captcha placeholder visual, login demo client-side)*
- [x] **Daftar Akun** — identitas lengkap + verifikasi email · **M** · Resp · *(WF-14 · M02 — verifikasi email simulasi)*
- [x] **Ajukan Permohonan (form stepper)** — data → rincian → unggah → kirim · **M** · *(WF-02 · M02)*
- [x] **Konfirmasi Permohonan** — tampil ID + estimasi + "lacak di sini" · **M** · *(WF-15 · M02 — `konfirmasi.html?id=`)*
- [x] **Lacak Permohonan** — timeline status real-time · **M** · *(WF-03 · HF-PPID-01 · M02 — `lacak.html?id=`)*
- [x] **Riwayat & Notifikasi** — daftar permohonan + status · S · *(M02 — perlu login demo)*
- [x] **Permohonan Konsultasi** — form · C · *(M02)*
- [x] **Pengajuan Keberatan** — form (jalur "Ditolak") · S · *(WF-17 · M02 — banner konteks dari `?id=` ditolak)*

---

## 02b · PPID MOBILE — Flutter (8 layar) — ✅ PROTOTIPE UI SELESAI (`klh-ppid-mobile/`, 21 Jul 2026)

> Fokus tugas inti pemohon (UR-PPID-03 Must) — bukan replika web penuh.
> **Level UI/UX (HTML/CSS/JS di bingkai perangkat)** selesai & terverifikasi Playwright (0 error JS, 390/1440px). Implementasi Flutter + backend menyusul (di luar lingkup UI).

- [x] **Splash / Onboarding** · S · `splash.html`
- [x] **Masuk** · **M** · `masuk.html` (email/sandi/CAPTCHA/lupa sandi)
- [x] **Daftar Akun** — identitas lengkap · **M** · `daftar.html`
- [x] **Beranda App** — menu tugas inti · **M** · `beranda.html`
- [x] **Ajukan Permohonan** — kronologi singkat + unggah dokumen · **M** · `permohonan.html` (stepper 3 langkah)
- [x] **Lacak Permohonan** — ID + progress + push notification · **M** · `lacak.html` (timeline + toast notifikasi)
- [x] **Riwayat** · S · `riwayat.html`
- [x] **Chat Bot AI** · **M** · `chatbot.html` (RAG disimulasikan)

---

## 03 · OMNI CHANNEL DASHBOARD (13 halaman) — ✅ SELESAI (Prototipe HTML M03, 7 Jul 2026)

> Internal (P3 Ratna). Navigasi via sidebar (app shell `<klh-sidebar>` + `<klh-topbar>`). Komponen wajib KAK sudah ada di Design System.

### Login & utama
- [x] **Login** — MFA / SSO · **M** · *(WF-22 · M03 — `login.html`; OTP demo + SSO simulasi + captcha placeholder)*
- [x] **Dashboard (KPI)** — statistik pengunjung/interaksi, performa sistem, grafik aktivitas · **M** · *(KPI strip ada di WF-04 · HF-OMNI-01 · M03 — `index.html`, Chart.js inline UMD)*

### Inbox & layanan
- [x] **Unified Inbox** — daftar percakapan 7 kanal + filter + panel balas · **M** · *(WF-04 · HF-OMNI-01 · M03 — `inbox.html`, layout 3 panel, 15 percakapan)*
- [x] **Routing & Auto-Reply** — pengaturan kategori/template · S · *(M03 — `routing.html`, 6 aturan + 5 template)*
- [x] **Ticketing / SLA** — daftar tiket, status Open→Closed, disposisi, rating · **M** · *(WF-24 · M03 — `tiket.html`, badge SLA aman/mendekati/lewat)*
- [x] **Detail Tiket** — riwayat + SLA timer + eskalasi · **M** *(parsial di WF-04)* · *(WF-25 · M03 — `tiket-detail.html?t=`, SLA timer hidup + log)*

### Analytics & reporting
- [x] **Analytics** — heatmap, click/scroll, session recording, user journey, device/browser · S · *(M03 — `analytics.html`; heatmap grid dummy deterministik, session recording = agregat + catatan produksi)*
- [x] **Reporting** — laporan + ekspor PDF/Excel/CSV · **M** · *(WF-26 · M03 — `reporting.html`, ekspor demo)*

### Pengaturan & akses
- [x] **Role Management** — 6 peran (Super Admin…Viewer) · S · *(M03 — `role.html`, matriks 9 izin)*
- [x] **Keamanan** — MFA, SSO, audit trail, activity log · S · *(M03 — `keamanan.html`, log ber-filter)*
- [x] **Profil Pengguna / Akun** · C · *(M03 — `profil.html`)*
- [x] **Notifikasi (panel)** — escalation & sistem (komponen) · S · *(M03 — komponen topbar di `appshell.js`: filter Semua/Eskalasi/Sistem + tandai dibaca)*
- [x] **Manajemen Kanal** — koneksi WA/IG/email/SP4N-LAPOR · S · *(M03 — `kanal.html`, status terhubung/gangguan/terputus)*

---

## Prioritas pengerjaan yang disarankan (gelombang)

**Gelombang 1 — SELESAI:** 4 WF lo-fi ✓ · 4 hero screen hi-fi Figma ✓ (HF-WEB-01, HF-PPID-01, HF-OMNI-01, HF-PPID-M01) · **Modul 01 · Website Utama sebagai prototipe HTML klikabel ✓ (7 Jul 2026, 24/24 halaman)**.

**Gelombang 2 — Modul 02 · PPID Web (berikutnya):**
- Publik: Beranda PPID, Profil PPID, Regulasi, DIP, FAQ
- Akun: Masuk, Daftar Akun, Ajukan Permohonan, Konfirmasi, Lacak (HF ada), Riwayat, Keberatan
- Memakai fondasi bersama M01 (`tokens.css`, `base.css`, `components.css`, `icons.js`)

**Gelombang 2b — Modul 03 · Omni Channel:**
- Login, Dashboard KPI, Ticketing/SLA, Detail Tiket, Reporting (Must dulu), lalu Should/Could

**Gelombang 3 — responsif & mobile:**
- Versi tablet/mobile dari semua Must
- PPID Mobile (8 layar Flutter)

**Gelombang 4 — Should/Could & tunggu §9:**
- Mega Menu detail & pengelompokan Layanan final (setelah Berita Acara)
- Profil, Program (template), Informasi & Publikasi (template), Analytics, Role Mgmt, dll

---

> **Reminder:** simpan checklist ini dan perbarui status `[ ]→[~]→[x]` tiap halaman selesai. Banyak halaman berbagi **template** (Detail Program, Indeks Informasi, Detail Artikel) — kerjakan satu template, gandakan isinya, hemat waktu.

*Disusun oleh PT Bening Guru Semesta sesuai Kerangka Acuan Kerja. © 2026.*
