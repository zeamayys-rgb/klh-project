# F2 — User Flow & Arsitektur Informasi (IA)
## Fase 2.1 · Citizen-Centric IA + Mega Menu — Tiga Produk

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Guru Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** Draft v2 · disinkronkan dengan kondisi prototipe **21 Juli 2026** · **Prasyarat terpenuhi:** `F1_User-Requirement.md`, `F1_Persona-Journey.md`, `F1_MoSCoW.md`, `Design_System_KLH_BPLH_2.html` / `design.md`
**Standar:** WCAG 2.1 AA · SPBE (Perpres 95/2018) · prinsip GDS / User-Centered Design
**Cakupan produk:** Website Utama (M01) · PPID Web (M02) · PPID Mobile (M02b — *prototipe UI dibangun `klh-ppid-mobile/`*) · Omni Channel (M03) · **CMS Konten (M04 — usulan di luar KAK, §5.5)**

> **Catatan validasi:** Struktur IA & label menu di bawah disusun konsultan berbasis (a) inventarisasi fitur KAK, (b) momen kritis journey (dok 1.3), dan (c) prioritas MoSCoW (dok 1.4). **Label final, pengelompokan menu, dan urutan disahkan bersama PPK/Tim Teknis** pada Workshop/Berita Acara Bulan 1. Ini fondasi untuk Wireframe (2.2) dan Mockup (2.3) — bukan keputusan birokrasi final.
>
> **Catatan sinkronisasi (v2):** Bagian yang menyangkut kondisi build terkini ditandai **`[kondisi aktual]`**. Selisih rinci antara build dan dokumen inti (KAK/Proposal/PRD) dicatat terpisah di `docs/TEMUAN_F2-UserFlow-IA_vs_Dokumen-Inti.md` (dokumen kerja sementara — hapus setelah di-resolve).

---

## 1. Tujuan & Rantai Telusur

Menerjemahkan requirement, persona, dan prioritas menjadi **peta navigasi (sitemap)**, **struktur Mega Menu citizen-centric**, dan **alur pengguna (user flow)** untuk tiga produk — sebagai cetak biru navigasi yang dipakai konsisten di seluruh wireframe & mockup.

**Rantai:**
`Audit (1.1)` → `Requirement (1.2)` → `Persona & Journey (1.3)` → `MoSCoW (1.4)` → **`User Flow & IA (2.1 — dokumen ini)`** → `Wireframe (2.2)` → `Mockup (2.3)` → `Prototype (2.4)`

**Prinsip IA yang mengikat seluruh dokumen ini** (dari `design.md` §2 + Prinsip Kunci panduan):
1. **Berpihak pada warga** — menu disusun berdasarkan *niat pengguna*, bukan nomenklatur birokrasi. Hindari akronim internal (mis. "Dit. PLTTDLB3") pada label publik. *(jawaban langsung temuan audit IA 4.0/Kritis & UR-IA-01)*
2. **Akses ≤ 3 klik** ke layanan esensial via Mega Menu. *(UR-IA-03)*
3. **Navigasi konsisten** antar halaman & lintas produk. *(UR-IA-02 — temuan audit "dropdown beda-beda")*
4. **Aksesibilitas penuh** — keyboard nav, ARIA, skip-link pada setiap pola navigasi. *(UR-A11Y-01/02/03)*
5. **Satu bahasa visual** — semua pola navigasi memakai token & komponen Design System yang sudah ada.

---

## 2. Pemetaan Persona → Tugas Utama → Produk

Dasar perancangan flow: setiap flow harus menyelesaikan **momen kritis** journey persona (dok 1.3).

| Persona | Tugas utama (job-to-be-done) | Produk | Momen kritis yang dipecahkan | UR/MoSCoW |
|---|---|---|---|---|
| **P1 Sari** — warga | Lapor masalah lingkungan; cek info layanan | Web Utama | Drop terbesar tahap 2–3 (cari menu/pencarian) | UR-IA-01 (Must), UR-HOME-01 (Must), UR-SEARCH-01 (Should) |
| **P2 Bayu** — pemohon PPID | Ajukan permohonan informasi & lacak status | PPID Web + Mobile | Titik terendah tahap 4 (ketidakpastian status) | UR-PPID-01/02 (Must), UR-PPID-03 (Must), UR-A11Y-02 (Must) |
| **P3 Ratna** — admin PPID | Kelola permohonan & balas multi-kanal | Omni Channel | Tahap 3–4 (risiko permohonan terlewat) | UR-OMNI-01 (Must), UR-PPID-04 (Must), UR-OMNI-02 (Must) |
| **P4 Damar** — jurnalis/akademisi | Temukan data/regulasi/publikasi kredibel | Web Utama | Konten tersebar & sumber tak pasti | UR-CONTENT-01 (Should), UR-SEARCH-01 (Should), UR-GOV-01 (Should) |
| **P5 Indah** — admin konten | Publikasi konten resmi tanpa pihak ketiga | Web Utama (CMS) | Ketergantungan Canva/Google Sites | UR-GOV-01/02 (Should) |

---

## 3. Arsitektur Informasi — Website Utama KLH/BPLH

### 3.1 Prinsip pelabelan (organization-centric → user-intent)

Audit menemukan IA "organization-centric" (skor 4.0, Kritis). IA baru mengelompokkan ulang fitur KAK ke dalam kategori **berbasis niat**, sambil **mempertahankan seluruh tautan & integrasi eksisting** (SiRUP, LPSE, LAPOR, e-LHKPN, OSS, JDIH, SRN PPI).

| Nomenklatur lama (birokrasi) | Label baru (citizen-centric) | Alasan |
|---|---|---|
| "Zona Integritas", "Eselon 1/2" | **Profil → Tata Kelola & Integritas** | Istilah dipahami publik; detail tetap lengkap di dalam |
| "Pelayanan Publik" (campur sistem pihak ketiga) | **Layanan** (dikelompokkan per niat: Izin, Pengaduan, Data & Lab) | Mengurangi disorientasi saat dialihkan ke sistem eksternal |
| "PPID KLH/BPLH" (akronim) | **Informasi Publik (PPID)** + deskripsi singkat | Akronim diberi konteks; tetap dapat dicari |
| Daftar program tanpa CTA | **Program** dengan CTA "Cara Ikut Serta" | Ubah dari brosur satu arah → partisipatif |

### 3.2 Sitemap Website Utama (hierarki 3 tingkat)

```
BERANDA
│
├── PROFIL
│   ├── Tentang KLH/BPLH (Visi, Misi, Nilai)
│   ├── Tugas & Fungsi
│   ├── Struktur Organisasi (bagan interaktif: Menteri, Wamen, Eselon 1 & 2)
│   │   └── Detail Jabatan (keterangan, LHKPN per pejabat)
│   └── Tata Kelola & Integritas (Zona Integritas, LHKPN)
│
├── PROGRAM                         [CTA: "Cara Ikut Serta" di tiap program]
│   ├── Kalpataru
│   ├── PROPER
│   ├── Adipura
│   ├── Adiwiyata
│   ├── Program Kampung Iklim (Proklim)
│   ├── Nirwasita Tantra (Green Leadership)
│   └── Ekonomi Sirkular
│
├── LAYANAN                         [dikelompokkan per niat pengguna]
│   ├── Perizinan & Pengadaan       → PTSP, OSS, Layanan Pengadaan (LPSE/SiRUP)
│   ├── Pengaduan & Aspirasi        → SP4N-LAPOR, Pengaduan, WCC
│   ├── Data, Lab & Pengujian       → Laboratorium Pusarpedal, SRN PPI, Bursa Karbon
│   └── Regulasi & Pembelajaran     → JDIH, E-Learning, E-LHKPN
│
├── INFORMASI & PUBLIKASI           [agregasi 9 modul — satu pola kartu konsisten]
│   ├── Berita
│   ├── Siaran Pers
│   ├── Pengumuman
│   ├── Agenda & Kalender (hari besar lingkungan & libur)
│   ├── Artikel
│   ├── Video & Podcast (YouTube)
│   ├── Publikasi & Buku
│   ├── Surat Keputusan
│   └── Peraturan Menteri
│
├── INFORMASI PUBLIK (PPID)         → tautan/embed produk PPID (lihat §4)
│
└── [UTILITAS GLOBAL — top bar]
    ├── Pencarian terpusat (search) [UR-SEARCH-01]
    ├── Aksesibilitas (kontras tinggi, ukuran teks) [UR-A11Y-02]
    ├── Bahasa (ID / EN)
    └── Chat Bot AI (widget mengambang, RAG) [persisten di semua halaman]
```

> **`[kondisi aktual]` pemetaan ke file build:** simpul dinamis memakai halaman template ber-query — Program (`program/detail.html?p=`, Kalpataru halaman khusus), Informasi & Publikasi (`informasi/indeks.html?m=` 9 modul + `detail.html?a=`; Video & Podcast → `informasi/galeri.html`), Layanan (indeks + 4 file kelompok). Ditambah halaman utilitas: `pages/pencarian.html` dan `pages/404.html`. Pemetaan halaman→file lengkap ada di `PRD_KLH_BPLH_rev3.docx §6.1` dan `F2_Checklist-Halaman.md`.

### 3.3 Struktur Mega Menu (desktop) — UR-IA-03 (≤3 klik)

Mega Menu mengganti "dropdown beda-beda antar halaman" (temuan audit) dengan **satu pola panel lebar konsisten**. Setiap menu utama membuka panel berkolom; layanan esensial selalu tercapai ≤3 klik.

**Pola panel (contoh: menu LAYANAN):**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  LAYANAN                                                                  │
│  ┌───────────────────┬───────────────────┬───────────────────┐           │
│  │ Perizinan &       │ Pengaduan &       │ Data, Lab &       │  [PANEL    │
│  │ Pengadaan         │ Aspirasi          │ Pengujian         │   PROMO]   │
│  │ • PTSP            │ • SP4N-LAPOR ↗    │ • Lab Pusarpedal  │  Layanan   │
│  │ • OSS ↗           │ • Pengaduan       │ • SRN PPI ↗       │  populer:  │
│  │ • Pengadaan ↗     │ • WCC             │ • Bursa Karbon ↗  │  "Lapor    │
│  │                   │                   │                   │  Pencemaran"│
│  │ Regulasi &        │                   │                   │  [tombol]  │
│  │ Pembelajaran      │                   │                   │            │
│  │ • JDIH · E-Learn  │                   │                   │            │
│  └───────────────────┴───────────────────┴───────────────────┘           │
│  ↗ = membuka sistem eksternal (ikon external-link + label "situs lain")   │
└─────────────────────────────────────────────────────────────────────────┘
```

**Aturan Mega Menu (mengikat untuk wireframe 2.2):**
- Maks **3–4 menu utama** + Beranda; tiap panel maks **3 kolom kategori** agar tak overload.
- **Penanda tautan eksternal:** ikon `external-link` (CoreUI) + teks bantu "membuka situs lain" → mengatasi disorientasi pihak ketiga (audit Usability 5.0).
- **Panel promo** di kolom kanan menyorot 1 layanan paling dicari (mis. "Lapor Pencemaran") → akses langsung untuk P1 Sari.
- **Keyboard & ARIA:** menu dapat dibuka via `Enter/Space`, navigasi panah, `Esc` menutup; `role="menubar"`/`menu`, `aria-haspopup`, `aria-expanded`. *(UR-A11Y-01/03)*
- **Token:** panel `--surface`, garis `--line`, radius `--r-lg`, bayangan `--sh-2`, judul kolom `--t-xs` 600 uppercase eyebrow, item `--t-sm`. Hover item: `--klh-green-50`.

### 3.4 Adaptasi Navigasi Responsif

| Perangkat | Pola navigasi | Catatan |
|---|---|---|
| **Desktop (>1024px)** | Top navbar + Mega Menu panel | 12 kolom, container 1200px |
| **Tablet (768–1024px)** | Top navbar ringkas + drawer/akordeon | Mega Menu jadi akordeon bertingkat |
| **Mobile (<768px)** | Hamburger → full-screen drawer akordeon | 1 kolom; layanan esensial dipromosikan ke atas; target sentuh ≥44px |

> Memenuhi UR-PERF-02 (Must) — responsif wajib ketiga perangkat; menjawab audit "layout rusak di HP" (Responsivitas 3/9, "functional with defects").

---

## 4. Arsitektur Informasi — PPID (Web & Mobile)

PPID adalah **modul prioritas Must tertinggi** (UR-PPID-01/02 skor 9). IA-nya memisahkan dengan jelas **publik (tanpa login)** dari **akun pemohon (perlu login)**.

### 4.1 Sitemap PPID Web

```
BERANDA PPID                        [4 kategori informasi — wajib UU KIP 14/2008]
├── Informasi Berkala
├── Informasi Serta-Merta
├── Informasi Setiap Saat
└── Informasi Dikecualikan
│
├── PROFIL PPID  (Tugas & Fungsi, Struktur, Visi & Misi PPID)
├── REGULASI     (dasar hukum keterbukaan informasi)
├── LAYANAN INFORMASI
│   ├── Daftar Informasi Publik (DIP)
│   ├── Daftar Informasi Dikecualikan (DIK)
│   ├── Laporan Kinerja
│   ├── Permohonan Konsultasi
│   └── Pengajuan Keberatan
│
├── ── AREA PEMOHON (perlu akun) ──────────────────────────
│   ├── Masuk / Daftar Akun  (email, kata sandi, captcha, lupa sandi)
│   ├── Ajukan Permohonan    (form + unggah berkas)          [UR-PPID-01 MUST]
│   ├── Lacak Permohonan     (ID pemohon + progress)          [UR-PPID-02 MUST]
│   └── Riwayat & Notifikasi
│
├── FAQ
└── CHAT BOT AI  (widget RAG)
```

### 4.2 Sitemap PPID Mobile (Flutter) — UR-PPID-03 (Must)

> **✅ `[kondisi aktual]` PROTOTIPE UI DIBANGUN — `klh-ppid-mobile/` (8 layar HTML/CSS/JS).** Menutup gap T1 pada level UI/UX: Splash, Masuk (+CAPTCHA/lupa sandi), Buat Akun (identitas lengkap), Beranda, Ajukan Permohonan (stepper: kronologi singkat + unggah dokumen), Lacak (timeline + simulasi notifikasi push), Riwayat, Chat Bot AI. Fondasi & data (`ppid.js`) dipakai ulang dari PPID Web (paritas web–mobile). **Implementasi Flutter penuh + backend tetap di luar lingkup UI** dan menyusul saat pengembangan. Sitemap di bawah kini terealisasi sebagai prototipe antarmuka.

Versi mobile **fokus pada tugas inti pemohon** (bukan replika penuh web), sesuai cakupan KAK mobile.

```
[Splash/Onboarding]
└── Masuk / Daftar Akun (identitas lengkap)
    └── BERANDA APP
        ├── Ajukan Permohonan  (kronologi singkat + unggah dokumen)
        ├── Lacak Permohonan   (ID + progress, push notification status)
        ├── Riwayat
        └── Chat Bot AI
```

> **Paritas desain–kode:** token dipetakan ke token Flutter (lihat `design.md` Lampiran). Mode kontras tinggi & ukuran teks besar wajib tersedia di web *dan* mobile (UR-A11Y-02) — menjawab kebutuhan P2 Bayu (low-vision).

### 4.3 Status permohonan (model status — dipakai web & mobile & Omni)

Status konsisten lintas produk agar pemohon (P2) dan admin (P3) melihat istilah yang sama:

`Diajukan → Diverifikasi → Diproses → Selesai` · jalur khusus: `Perlu Perbaikan`, `Ditolak (dengan alasan)`, `Diajukan Keberatan`.

Setiap perubahan status memicu **notifikasi** (in-app + email/push) → langsung memecahkan momen kritis P2 (tahap 4, "saya buta setelah kirim email").

---

## 5. Arsitektur Informasi — Dashboard Omni Channel (Internal)

Produk internal untuk P3 Ratna. Memakai komponen wajib KAK: **sidebar nav, top navbar, notification panel, search bar, user profile dropdown, widget cards, data tables, interactive charts, filter panel** — semuanya sudah ada di Design System.

### 5.1 Struktur navigasi (sidebar)

```
[SIDEBAR — kolaps di tablet, drawer di mobile]
├── Dashboard (KPI)        → statistik pengunjung/interaksi, performa sistem, grafik aktivitas
├── Unified Inbox          → KAK-target 7 kanal: web chat, WA Business, SP4N-LAPOR, IG DM, email, app PPID, web PPID
│   │                        [kondisi aktual] build: web chat, WhatsApp, IG, Facebook, SP4N-LAPOR, email
│   │                        → selisih: +Facebook (bukan KAK); −app PPID & −web PPID (TEMUAN T3)
│   ├── Routing & Auto-Reply (berbasis kategori)
│   └── Multi-agent & Escalation
├── Ticketing / SLA        → status Open/Pending/On-Progress/Resolved/Closed, disposisi, rating
├── Analytics              → [kondisi aktual] heatmap, session recording, user journey, device/browser
│                            ⛔ wajib KAK belum ada: Statistik Unjuk Rasa · Monitoring Isu Medsos · Accessibility Monitoring (TEMUAN T2)
├── Reporting              → laporan + ekspor PDF/Excel/CSV
└── Pengaturan
    ├── Role Management     (Super Admin, Administrator, Content Editor, Operator, Supervisor, Viewer)
    └── Keamanan           (MFA, SSO, audit trail, activity log)

[TOP NAVBAR] search bar · notification panel · user profile dropdown
```

### 5.2 Hak akses (role) → tampilan menu

> **`[kondisi aktual]`** Nama peran berbeda 3 arah antara KAK, build, dan draf F2 lama. Tabel di bawah **disamakan ke build** (`omni.js`, 6 peran). KAK butir k) memakai: Super Admin · Administrator · **Content Editor** · Operator Layanan · Supervisor · Viewer — "Content Editor" sengaja dipindah ke CMS (M04). Perlu keputusan istilah kanonik di Berita Acara (TEMUAN T4).

| Role (build) | ≈ padanan KAK | Akses utama | Menu disembunyikan |
|---|---|---|---|
| Super Admin | Super Admin | Semua + Role/Keamanan/integrasi | — |
| Admin | Administrator | Operasional harian, pengguna, routing | Sebagian Super-only |
| Supervisor | Supervisor | + Analytics, Reporting, setujui eskalasi | Role Mgmt |
| Agen | Operator Layanan | Inbox, Ticketing (sesuai penugasan) | Role Mgmt, Keamanan |
| Analis | — (baru) | Analytics & Reporting (evaluasi) | Inbox aksi, Pengaturan |
| Viewer | Viewer | Dashboard (read-only) | Inbox aksi, Pengaturan |

---

## 5B. Arsitektur Informasi — CMS Konten (Modul 04) · `[kondisi aktual]`

> **Di luar KAK — usulan nilai tambah PT BGS.** Dibangun untuk menjawab "dari mana konten ketiga produk dikelola" dan menerjemahkan prinsip KAK "wajib approval pengguna jasa" menjadi alur editorial. **Butuh persetujuan tertulis PPK** sebelum dihitung sebagai deliverable (KAK 15.8.b). Melayani persona **P5 Indah** (admin konten/Humas) yang sudah tercantum di §2.

```
LOGIN CMS (login.html)
└── App shell (sidebar + topbar)
    ├── Konten
    │   ├── Dashboard Konten ......... index.html
    │   ├── Konten Website Utama ..... konten.html
    │   │   └── Editor Konten (?id=) . konten-edit.html   [alur: Draf → Menunggu Review → Terbit/Terjadwal]
    │   ├── Agenda & Kegiatan ........ agenda.html
    │   ├── Konten PPID (DIP & FAQ) .. ppid.html
    │   └── Pustaka Media ............ media.html          [alt-text wajib]
    └── Administrasi
        └── Pengguna & Peran ......... pengguna.html       [di sinilah peran "Content Editor" KAK berada]
```

**Flow P5 Indah (publikasi konten resmi):**
`[Login CMS] → [Dashboard] → [Konten Website Utama] → <buat/edit> → [Editor] isi + alt-text → <kirim review> → [Menunggu Review] → <approver setujui> → [Terbit / Terjadwal]`
Memecahkan pain P5 (ketergantungan Canva/Google Sites) + menegakkan gerbang approval sebagai state UI, bukan proses manual.

---

## 6. User Flow (Alur Pengguna) — Tiga Skenario Kritis

Notasi: `[ ]` layar/state · `< >` keputusan · `→` aksi · `⟳` loop/kembali.

### 6.1 Flow A — P1 Sari: Lapor Masalah Lingkungan (Web Utama)
*Memecahkan momen kritis journey 4.1 tahap 2–3 (drop terbesar).*

```
[Beranda] → hero "Layanan Cepat" menampilkan kartu "Lapor Pencemaran"
   │                                    (akses 1 klik — UR-HOME-01)
   ├─ (alternatif) [Mega Menu: Layanan → Pengaduan & Aspirasi]   (≤3 klik — UR-IA-03)
   ├─ (alternatif) [Search "lapor"] → hasil teratas: kanal lapor (UR-SEARCH-01)
   ▼
[Halaman Pengaduan] penjelasan kanal + <pilih kanal>
   │   penanda jelas bila menuju sistem eksternal (SP4N-LAPOR ↗)  ← atasi disorientasi
   ▼
< Sudah tahu kanal? >
   ├─ Ya → → menuju SP4N-LAPOR (ikon external-link + "membuka situs lain")
   └─ Tidak → [Chat Bot AI] bantu arahkan ke kanal tepat
   ▼
[Konfirmasi/handoff jelas] pesan "Anda akan diarahkan ke SP4N-LAPOR" → tidak menggantung
```
**Perbaikan vs eksisting:** focal point layanan di hero (lawan information overload); label intent (lawan nama direktorat); handoff eksternal yang transparan (lawan "beda UI, ragu").

### 6.2 Flow B — P2 Bayu: Ajukan & Lacak Permohonan Informasi (PPID)
*Memecahkan momen kritis journey 4.2 tahap 4 (ketidakpastian status — titik terendah).*

```
[Beranda PPID] → "Ajukan Permohonan"
   ▼
< Punya akun? >
   ├─ Tidak → [Daftar Akun] isi identitas + captcha → verifikasi email → 
   └─ Ya ───→ [Masuk] (email, sandi, captcha · "lupa sandi")
   ▼
[Form Permohonan]  langkah ber-tahap (stepper):
   1. Data Pemohon (prefilled dari profil)
   2. Rincian Informasi yang Diminta
   3. Unggah Berkas  (validasi jenis & ukuran; pesan error membantu — "PDF maks 10MB")
   4. Tinjau & Kirim
   ▼
[Konfirmasi] tampilkan ID Permohonan + estimasi waktu + "Lacak di sini"
   │            kirim notifikasi (email + in-app)         ← memecahkan "saya buta"
   ▼
[Lacak Permohonan] timeline status real-time:
   Diajukan ─● Diverifikasi ─○ Diproses ─○ Selesai      [UR-PPID-02 MUST]
   │  setiap perubahan → notifikasi push (mobile) / email
   ▼
< Hasil? >
   ├─ Selesai → unduh/akses informasi
   ├─ Perlu Perbaikan → ⟳ kembali ke Form (bagian yang ditandai)
   └─ Ditolak → tampilkan alasan + tombol "Ajukan Keberatan"
```
**Aksesibilitas (P2 low-vision):** stepper ber-label ARIA, fokus berpindah jelas, mode kontras tinggi & teks besar tersedia, status tak hanya warna (ikon + teks — design.md §3 aturan).

### 6.3 Flow C — P3 Ratna: Kelola Permohonan Multi-Kanal (Omni Channel)
*Memecahkan momen kritis journey 4.3 tahap 3–4 (risiko terlewat).*

```
[Login Dashboard] (MFA/SSO) → [Dashboard KPI] ringkasan beban hari ini
   ▼
[Unified Inbox] semua kanal dalam satu daftar (badge sumber: WA/IG/email/web/app)
   │  filter panel: kanal · status · prioritas/SLA · agen           ← atasi "buka 5 app"
   ▼
< Pesan baru? > → auto-routing by kategori → assign ke agen / ambil sendiri
   ▼
[Tiket] balas dari satu tempat · chat history tergabung · template auto-reply
   │  ubah status: Open → On-Progress → Resolved        [model status §4.3 selaras]
   │  SLA timer terlihat (badge warna + ikon — bukan warna saja)
   ▼
< Perlu eskalasi? >
   ├─ Ya → escalation → Supervisor (notification panel)
   └─ Tidak → Resolve → minta rating kepuasan
   ▼
[Reporting] rekap SLA/kinerja → ekspor PDF/Excel          ← ganti rekap manual
```
**Perbaikan vs eksisting:** satu inbox lawan kanal terpisah; SLA & disposisi lawan "tak ada ticketing"; unified history lawan "pasti ada yang terlewat".

---

## 7. Pemetaan IA/Flow → Komponen Design System

Memastikan **tak ada komponen baru tanpa dasar** — semua memetakan ke komponen reusable yang sudah ada (`design.md` §7).

| Elemen IA/Flow | Komponen Design System | Token kunci |
|---|---|---|
| Top navbar + Mega Menu | navbar + panel kustom | `--surface`, `--line`, `--sh-2`, `--r-lg` |
| Pencarian terpusat | Search Bar (`.input-group`) §7.2 | ikon `search`, `aria-label` |
| Filter Inbox/Arsip | Filter Panel (`.filterbar`/`.fchip`) §7.3 | chip aktif `.on` = primary |
| Kartu layanan/berita | Widget Cards | `--r-lg`, `--sh-1` |
| Form permohonan PPID | Form & Input §7.4 (`.field/.input/.select`) | fokus ring `--klh-green-100`, microcopy error |
| Timeline status | Alert/badge + langkah (stepper) §7.5 | status: ikon + teks (bukan warna saja) |
| Tabel tiket/permohonan | Data Tables | header `--surface-2` |
| Grafik KPI/analytics | Interactive Charts (Chart.js inline) | `animation:false` saat render |
| Notifikasi status | Notification panel / Alert §7.5 | varian success/warning/danger/info |
| Sidebar Omni | Sidebar nav | kolaps tablet, drawer mobile |
| Chat Bot AI | widget mengambang (ikon `speech`) | persisten, `aria-label` |

---

## 8. Daftar Periksa Aksesibilitas IA (WCAG 2.1 AA)

Berlaku untuk setiap pola navigasi & flow di atas (target Lighthouse ≥ 90):

- [ ] **Skip-link** "Lewati ke konten" di awal tab order setiap halaman.
- [ ] Mega Menu & sidebar **dapat dioperasikan penuh via keyboard** (Tab/Shift-Tab/panah/Esc).
- [ ] Atribut ARIA tepat: `aria-haspopup`, `aria-expanded`, `role=menubar/menu`, `aria-current` pada item aktif.
- [ ] **Fokus terlihat** (ring `--klh-green-100`) pada semua kontrol interaktif.
- [ ] Status & error **tidak mengandalkan warna saja** (ikon + teks).
- [ ] Tautan eksternal diberi konteks ("membuka situs lain") untuk pembaca layar.
- [ ] Target sentuh **≥44×44px** pada mobile.
- [ ] Mode **kontras tinggi** & **perbesaran teks 200%** tersedia (web & mobile PPID).
- [ ] Urutan heading logis (satu `h1` per halaman) untuk navigasi pembaca layar.

---

## 9. Keputusan Terbuka (untuk Berita Acara dengan PPK/Tim Teknis)

Butir yang **memerlukan konfirmasi pengguna jasa** sebelum lanjut ke Wireframe (2.2):

1. **Label menu utama final** — apakah "Informasi Publik (PPID)" sebagai item navbar terpisah, atau menyatu di "Layanan"?
2. **Jumlah menu utama** — usulan 4 (Profil · Program · Layanan · Informasi). Setuju? *(makin sedikit makin baik untuk warga)*
3. **Pengelompokan Layanan** — apakah 4 sub-kategori (Perizinan/Pengaduan/Data-Lab/Regulasi) sesuai mental model internal KLH?
4. **Tautan eksternal yang dipertahankan** — konfirmasi daftar final (SiRUP, LPSE, LAPOR, e-LHKPN, OSS, JDIH, SRN PPI, Bursa Karbon, WCC).
5. **Cakupan mobile PPID** — konfirmasi mobile hanya 4 tugas inti (ajukan/lacak/riwayat/chatbot), bukan replika web penuh.
6. **Model status permohonan** — apakah istilah status (Diajukan→Diverifikasi→Diproses→Selesai) sesuai SOP PPID berjalan?

**Butir sinkronisasi build ↔ KAK (ditambahkan v2 — lihat `TEMUAN_F2-UserFlow-IA_vs_Dokumen-Inti.md`):**

7. **PPID Mobile** — prototipe UI ✅ selesai (`klh-ppid-mobile/`, 8 layar); tersisa konfirmasi jadwal implementasi **Flutter + backend** (di luar lingkup UI). *(TEMUAN T1 — teratasi di level UI)*
8. **3 sub-fitur Analytics Omni** — Statistik Unjuk Rasa · Monitoring Isu Pengaduan Lingkungan Media Sosial · Accessibility Monitoring: dibangun atau diturunkan prioritasnya secara tertulis? *(TEMUAN T2)*
9. **Daftar kanal Unified Inbox** — pertahankan Facebook? tambah kanal Mobile app PPID & Website PPID sesuai KAK? *(TEMUAN T3)*
10. **Istilah Role Management** — pakai nama KAK (Administrator/Operator Layanan/Content Editor) atau nama build (Admin/Agen/Analis)? satukan jadi kanonik. *(TEMUAN T4)*
11. **Status CMS Konten (M04)** — disetujui sebagai deliverable tambahan atau tetap di luar lingkup? *(TEMUAN T5)*
12. **Strip "Slide" beranda & halaman legal footer** — literal sesuai KAK butir d)? isi halaman Privasi/Aksesibilitas/Syarat sebelum rilis. *(TEMUAN T7, T8)*

---

## 10. Langkah Berikutnya

IA & user flow ini menjadi cetak biru langsung untuk **Fase 2.2 — Wireframe**: setiap simpul sitemap → satu wireframe halaman; setiap flow → urutan layar low-fidelity; setiap komponen pada §7 sudah tersedia di Design System sehingga wireframe tinggal merangkai.

> **Reminder:** centang ☑ `2.1 User Flow & IA` di **STATUS PROGRESS** pada `PANDUAN_KERJA_UIUX_KLH.md`, dan catat file `F2_UserFlow-IA.md`. Lampirkan sitemap & 3 user flow ke Figma (board IA) untuk diskusi Berita Acara.

---

*Dokumen ini merupakan aset perancangan arsitektur informasi untuk Kementerian Lingkungan Hidup / Badan Pengendalian Lingkungan Hidup, disusun oleh PT Bening Guru Semesta sesuai Kerangka Acuan Kerja. © 2026.*
