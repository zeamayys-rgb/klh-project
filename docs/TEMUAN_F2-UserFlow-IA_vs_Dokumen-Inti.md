# TEMUAN — Selisih F2 User Flow & IA vs Dokumen Inti

> **Sifat dokumen:** sementara / kerja. Dibuat untuk memetakan perbedaan antara **apa yang sudah dikembangkan** (prototipe repo + `F2_UserFlow-IA.md`) dengan **apa yang diminta / highly required** oleh dokumen inti. **Hapus dokumen ini setelah setiap butir di-resolve.**
>
> **Dibuat:** 21 Juli 2026 · **Untuk:** Abdan (UI/UX) · **Konteks:** permintaan menyesuaikan `F2_UserFlow-IA.md` ke kondisi terakhir.

## Sumber kebenaran yang dipakai

| Kode | Dokumen | Peran |
|---|---|---|
| **KAK** | `docs/administrative/KAK…REV.pdf` | **Acuan kontraktual** — sumber wajib tertinggi (Standar Teknis butir 8, Keluaran butir 12). |
| **PROP** | `docs/administrative/Presentasi_Proposal_KLH_BPLH.pdf` | Proposal teknis PT BGS (18 Jun 2026) — komitmen penyedia. |
| **PRD** | `docs/PRD_KLH_BPLH_rev3.docx` | PRD v1.1 (21 Jul 2026) — sudah memuat rekonsiliasi gap G1–G9; dipakai sebagai pembanding kondisi aktual. |
| **BUILD** | isi repo (`klh-*/`) yang di-grep langsung | Kondisi nyata prototipe per hari ini. |

**Legenda tingkat:**
🔴 **Wajib KAK — belum terpenuhi** (risiko Keluaran/Termin) · 🟠 **Deviasi disengaja — perlu persetujuan PPK/Tim Teknis** · 🟡 **Ketidakkonsistenan dokumen / minor** · 🔵 **Di luar lingkup UI (catatan integrasi)**

---

## 0. Ringkasan eksekutif

Secara halaman, ketiga Keluaran KAK sudah terealisasi di prototipe. Selisih terbesar bukan di *jumlah halaman* melainkan di **isi fitur spesifik yang disebut eksplisit KAK** (terutama Omni Channel) dan pada **PPID Mobile yang belum dibangun**. `F2_UserFlow-IA.md` sendiri masih *Draft v1* dan beberapa bagiannya sudah **stale** terhadap build (nama peran, daftar kanal, sub-fitur analytics, keberadaan CMS).

| # | Temuan | Tingkat | Sumber wajib | Ada di F2 saat ini? |
|---|---|---|---|---|
| T1 | ~~PPID Mobile belum dibangun~~ → **✅ TERATASI (level UI):** prototipe `klh-ppid-mobile/` 8 layar HTML/CSS/JS dibuat 21 Jul. Sisa: implementasi Flutter+backend (di luar lingkup UI). | ✅→🔵 | KAK Keluaran #2 | F2 §4.2 kini menandai prototipe UI dibangun |
| T2 | **3 sub-fitur Analytics Omni belum ada:** Statistik Unjuk Rasa · Monitoring Isu Pengaduan Lingkungan Media Sosial · Accessibility Monitoring | 🔴 | KAK Omni h) Analytics | F2 §5.1 **tidak menyebut** ketiganya |
| T3 | **Daftar kanal Unified Inbox tidak sama dengan KAK** — build ada *Facebook* (bukan kanal KAK) & **hilang** *Mobile app PPID* + *Website PPID* | 🟠/🔴 | KAK Omni g) 7 kanal | F2 §5.1 menulis 7 kanal versi KAK — **tidak cocok dengan build** |
| T4 | **Nama Role Management berbeda 3 arah** (KAK ↔ build ↔ F2) | 🟠 | KAK Omni k) 6 peran | F2 §5.2 daftar 5 peran, beda lagi dari build |
| T5 | **CMS Konten (Modul 04, 8 halaman) tidak ada di F2** sama sekali | 🟠 | Di luar KAK (usulan) | F2 hanya membahas 3 produk |
| T6 | Restrukturisasi **Layanan → 4 kelompok citizen-centric** vs daftar datar KAK | 🟠 | KAK Website b)/g) | F2 §3.1 sudah menjelaskan (deviasi sadar) — **OK, tinggal validasi PPK** |
| T7 | **Strip "Slide" beranda** (SiRUP/LPSE/LAPOR/e-LHKPN/OSS) tidak dibuat sebagai strip | 🟡 | KAK Website d) Slide | Tautan ada tersebar; F2 tidak menyoroti |
| T8 | Halaman **legal footer** (Privasi/Aksesibilitas/Syarat) masih stub → 404 | 🟡 | Praktik baik / UU 27/2022 PDP | F2 tidak menyebut |
| T9 | Prasyarat F2 menyebut file **`Design_System_KLH_BPLH.html`** — nama file aktual `…_2.html` | 🟡 | — | F2 baris 6 |
| T10 | Ketidakkonsistenan **antar dokumen inti** (kanal & program di PROP ≠ KAK) | 🟡 | KAK vs PROP | — |

---

## 1. Website Utama (Keluaran KAK #1)

**Status halaman: selaras.** Semua yang wajib KAK ada. Catatan selisih:

- **T6 🟠 Struktur Layanan.** KAK menyebut layanan sebagai **daftar datar**: beranda "Layanan Kementerian" (PTSP, Pengaduan, SRN PPI, Bursa Karbon, PPID, WCC, JDIH) + "Pelayanan publik" (SP4N-LAPOR, Publikasi, PBJ, Pusarpedal, JDIH, E-Learning, E-LHKPN). Build & F2 **merestrukturisasi** jadi 4 kelompok niat (Perizinan & Pengadaan · Pengaduan & Aspirasi · Data-Lab-Pengujian · Regulasi & Pembelajaran). Verifikasi build: ketujuh kartu layanan KAK **ada** dan kelima tautan slide **ada** — jadi tidak ada yang hilang, hanya dikelompokkan ulang. **Tindak lanjut:** butuh persetujuan Tim Teknis Biro Humas (sesuai tahapan KAK #5). Ini keputusan desain inti F2, pertahankan tetapi tandai eksplisit sebagai deviasi.
- **T7 🟡 Slide beranda.** KAK butir d) "Slide" secara literal minta strip Link SiRUP/LPSE/LAPOR/e-LHKPN/OSS di beranda. Build menaruh tautan ini di halaman kelompok layanan & tata kelola, **bukan** strip beranda. **Tindak lanjut:** bila PPK menghendaki literal, tambah strip logo tautan cepat di beranda (murah).
- **T8 🟡 Legal footer.** Kebijakan Privasi / Aksesibilitas / Syarat Penggunaan masih mengarah ke 404. Wajib diisi sebelum rilis publik (UU 27/2022 PDP).
- **✅ Program benar.** 7 program build (kalpataru, proper, adipura, adiwiyata, proklim, nirwasita-tantra, ekonomi-sirkular) **persis** daftar KAK. (Catatan: PROP menuliskan "KLHS" sebagai salah satu program — itu **keliru** di proposal; build & KAK benar.)

---

## 2. PPID Web (Keluaran KAK #2 — bagian web)

**Status: selaras.** 16 entri terealisasi. Alur akun (login/daftar/captcha/lupa sandi), stepper permohonan + unggah, lacak (ID + progres), keberatan, konsultasi, DIP/DIK, laporan kinerja, FAQ, chatbot — semua ada dan cocok KAK. **Tidak ada gap web PPID.**

---

## 3. PPID Mobile (Keluaran KAK #2 — bagian mobile) — **✅ TERATASI (level UI/UX)**

- **T1 — status: SELESAI di level UI.** Dibangun modul **`klh-ppid-mobile/`** (8 layar HTML/CSS/JS, 21 Jul 2026) yang memenuhi seluruh sub-cakupan KAK mobile pada level antarmuka: **Login** (email/sandi/CAPTCHA/lupa sandi), **Buat Akun** (identitas lengkap: nama, telp, alamat, profesi, tempat profesi, provinsi/kabupaten/kota, email, sandi), **Ajukan Permohonan** (stepper: kronologi singkat + unggah dokumen), **Lacak Pemohon** (ID + progres timeline + simulasi notifikasi push), **Chat Bot AI** (RAG disimulasikan), plus Splash/Onboarding, Beranda, Riwayat.
- **Verifikasi:** Playwright 390px & 1440px, **0 error JS** (9 hlm × 2 viewport), link-check lulus, uji interaksi kunci lulus. Fondasi & `ppid.js` dipakai ulang byte-identik dari PPID Web (paritas web–mobile). Detail: `klh-ppid-mobile/README.md`.
- **Sisa (🔵 di luar lingkup UI):** implementasi **Flutter penuh + backend** (Laravel/.NET, PostgreSQL, REST/GraphQL) — pekerjaan tim pengembang, bukan UI/UX. Keluaran KAK #2 utuh di sisi desain; integrasi menyusul.
- **F2:** §4.2 diperbarui — penanda kini "✅ prototipe UI dibangun".

---

## 4. Omni Channel Dashboard (Keluaran KAK #3)

Ini area dengan selisih fitur terbanyak. Halaman ada, tetapi beberapa **isi wajib KAK** belum lengkap.

### 4.1 Analytics — 🔴 tiga sub-fitur wajib belum ada (T2)
KAK butir h) Analytics menyebut daftar eksplisit. Build (`analytics.html` + `omni.js`) hanya memuat sebagian (heatmap, session recording, user journey, device, browser). **Belum ditemukan:**
1. **Statistik Unjuk Rasa** (KAK)
2. **Daftar Monitoring Isu Pengaduan Lingkungan di Media Sosial** (KAK)
3. **Accessibility Monitoring** (KAK)

Juga cek **"Indikator analytics"** KAK (tingkat keberhasilan navigasi, halaman paling sering diakses, halaman bounce tinggi, kecepatan loading, responsivitas UI) — pastikan tampil sebagai indikator, bukan hanya heatmap. **Tindak lanjut:** tambah widget/tabel untuk ketiga sub-fitur, atau minta PPK menurunkan prioritas secara tertulis.

### 4.2 Unified Inbox — kanal tidak sama dengan KAK (T3)
KAK butir g) menetapkan **7 kanal**: Live chat website · WhatsApp Business · SP4N-LAPOR! · Instagram DM · E-mail · **Mobile app PPID** · **Website PPID**.

Build (`omni.js`) memakai: Web chat · WhatsApp · Instagram · **Facebook** · SP4N-LAPOR · Email (±6).
- 🟠 **Ekstra vs KAK:** Facebook (tidak diminta KAK).
- 🔴 **Hilang vs KAK:** kanal **Mobile app PPID** dan **Website PPID** — padahal justru dua kanal ini yang mengikat Omni ke produk #2 (P3 Ratna membalas permohonan PPID lintas kanal).
- **Masalah di F2:** §5.1 menulis daftar 7 kanal versi KAK ("…app PPID, web PPID") yang **tidak cocok** dengan build. **Tindak lanjut:** selaraskan — tambah kanal PPID di build **atau** perbarui daftar dan minta keputusan PPK soal Facebook.
- 🟡 Catatan: PROP hal.10 menuliskan kanal lain lagi (WhatsApp, **Telegram**, Instagram, Facebook, Web, Email, **SMS**) — tidak konsisten dengan KAK. KAK yang mengikat.

### 4.3 Role Management — nama peran berbeda 3 arah (T4)
| Sumber | Daftar peran |
|---|---|
| **KAK** (butir k) | Super Admin · **Administrator** · **Content Editor** · **Operator Layanan** · Supervisor · Viewer |
| **BUILD** (`omni.js`) | Super Admin · **Admin** · Supervisor · **Agen** · **Analis** · Viewer |
| **F2 §5.2** | Super Admin · Administrator · Operator Layanan · Supervisor · Viewer (hanya 5) |

- 🟠 Build me-*rename* (Administrator→Admin, Operator Layanan→Agen), menambah **Analis**, dan **menghilangkan Content Editor**. "Content Editor" masuk akal dipindah ke **CMS (Modul 04)**, tapi harus dinyatakan. **Tindak lanjut:** samakan istilah ke satu daftar kanonik (rekomendasi: pakai nama KAK di UI, atau justifikasi rename ke PPK). Perbarui tabel F2 §5.2 agar cocok build.

### 4.4 Yang sudah selaras
Ticketing 5 status (Open/Pending/On-Progress/Resolved/Closed), SLA, disposisi, rating; Reporting 7 jenis + export PDF/Excel/CSV; MFA/SSO/audit trail; komponen UI wajib (sidebar, topbar, notif, search, widget, tabel, chart, filter, responsif) — **ada**.

---

## 5. CMS Konten (Modul 04) — di luar KAK, hilang dari F2 (T5)

- 🟠 Repo punya `klh-cms/` (8 halaman: login, dashboard, konten, konten-edit, agenda, ppid, media, pengguna) dengan alur editorial Draf → Review → Terbit. **Tidak disebut KAK** (usulan nilai tambah PT BGS) dan **tidak ada di F2** sama sekali, padahal persona **P5 Indah** di F2 §2 sudah mengarah ke "Web Utama (CMS)".
- **Tindak lanjut:** (a) minta persetujuan tertulis PPK sebelum dihitung deliverable (KAK 15.8.b); (b) tambahkan minimal 1 sub-bagian IA CMS + 1 user flow (P5 publikasi konten) ke F2 agar dokumen konsisten dengan build.

---

## 6. Ketidakkonsistenan antar dokumen inti (T10 🟡)

Bukan soal build, tapi perlu Abdan sadari agar tidak membingungkan reviewer:
- **Kanal Omni:** KAK (7 kanal, ada Mobile/Web PPID) ≠ PROP (ada Telegram/SMS/Facebook) ≠ build. Pilih KAK sebagai acuan.
- **Program:** PROP menyebut "KLHS"; KAK & build memakai "Kalpataru". PROP keliru.
- **Analytics:** PROP menambah "sentimen, trending topik" yang tidak eksplisit di KAK; KAK justru minta "unjuk rasa" & "monitoring isu medsos" yang belum dibuat.
- **Backend/stack (🔵 di luar lingkup UI):** KAK menyebut PHP/Laravel/Spring/Ruby/Node.js/.NET/Flutter, PostgreSQL/MySQL/MongoDB, REST/GraphQL, WebSocket/Kafka. Prototipe ini murni UI (simulasi client-side) — sesuai lingkup KAK butir 11. Spesifikasi ini jadi acuan tim dev saat integrasi, bukan gap desain.

---

## 7. Perubahan yang diterapkan ke `F2_UserFlow-IA.md`

Agar F2 mencerminkan kondisi terakhir, edit berikut **sudah** diterapkan (centang untuk lacak; hapus file ini bila semua isu di atas sudah di-resolve):

- [x] Header: status → sinkron 21 Jul 2026; perbaiki nama file Design System (T9); tambah CMS ke daftar produk.
- [x] §4.2 PPID Mobile: penanda **belum dibangun / P0** (T1).
- [x] §5.1 Omni Analytics: tambah 3 sub-fitur wajib KAK sebagai **belum ada** (T2).
- [x] §5.1 Unified Inbox: catat kanal aktual build + selisih vs KAK (T3).
- [x] §5.2 Role: samakan ke daftar build + catatan istilah KAK (T4).
- [x] Tambah §5.5 ringkas **IA CMS Konten (Modul 04)** + flow P5 (T5).
- [x] §9 Keputusan Terbuka: tambah butir CMS, PPID Mobile, 3 analytics, kanal, role.
- [x] **T1 dikerjakan:** modul `klh-ppid-mobile/` (8 layar) dibangun; §4.2 & header F2 diperbarui.

**Butir yang butuh keputusan pengguna jasa (belum bisa diselesaikan sepihak):** T2, T3, T4, T5, T6, T7 — bawa ke Berita Acara PPK/Tim Teknis. *(T1 sudah teratasi di level UI; sisanya implementasi Flutter/backend di luar lingkup desain.)*
