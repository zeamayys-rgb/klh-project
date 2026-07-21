# F1 — Dokumen User Requirement
## Fase 1.2 · Identifikasi Kebutuhan Pengguna

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Guru Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** **Rev v2 — 21 Juli 2026** · **Prasyarat terpenuhi:** `F1_Laporan-Audit.md` (Grade D ~41/100, skor 4.6/10)
**Dipakai oleh:** `F1_Persona-Journey.md` (1.3) · `F1_MoSCoW.md` (1.4) · `F2_UserFlow-IA.md` (2.1) · `F2_Checklist-Halaman.md`

> **Catatan validasi:** Requirement di bawah adalah **evidence-based requirement** — diturunkan dari temuan audit (1.1), mandat KAK, dan regulasi; bukan klaim hasil wawancara yang belum terjadi. Seluruh requirement **disahkan bersama PPK/Tim Teknis via Berita Acara** (kick-off/Workshop Bulan 1 — masih pending). Rev v2 menambah §8 (Status Realisasi) sebagai bukti telusur requirement → prototipe Fase 2.

**Riwayat revisi**

| Versi | Tanggal | Perubahan |
|---|---|---|
| v1 | Jun 2026 | Draft awal: stakeholder map, 21 UR-ID, telusur audit→requirement, non-fungsional |
| **v2** | **21 Jul 2026** | Sinkronisasi jumlah UR-ID dengan MoSCoW (21 ID); token design system diperbarui ke **DS v2.1** (teal `#005952`, biru `#147DEF`, oranye `#F97910` — menggantikan `#1B7A4B`); nama vendor dikoreksi (PT Bening **Guru** Semesta); tambah §8 Status Realisasi Requirement (Modul 01–04 + QA-01/02/03); kolom persona ditambahkan di §4 |

---

## 1. Tujuan

Menerjemahkan temuan audit dan mandat KAK menjadi **daftar kebutuhan pengguna ber-ID yang dapat ditelusur** (traceable) — dasar untuk persona (1.3), prioritisasi (1.4), IA (2.1), dan seluruh keputusan desain Fase 2 ke atas.

**Rantai telusur:**
`Audit (1.1)` → **`Requirement (1.2 — dokumen ini)`** → `Persona & Journey (1.3)` → `MoSCoW (1.4)` → `IA & Wireframe (Fase 2)` → `Prototipe HTML Modul 01–04`

---

## 2. Peta Stakeholder

### 2.1 Eksternal (publik)

| Kelompok | Deskripsi | Persona rujukan (1.3) |
|---|---|---|
| Warga pencari layanan | Akses via smartphone, literasi digital menengah; ingin lapor/cek layanan tanpa paham struktur birokrasi | P1 Sari |
| Pemohon informasi publik (PPID) | Individu/LSM yang rutin mengajukan permohonan informasi; sebagian dengan keterbatasan (low-vision) | P2 Bayu |
| Jurnalis / akademisi | Butuh data, regulasi, dan publikasi resmi yang kredibel & dapat dikutip | P4 Damar |
| Pelaku usaha & mitra | Mengakses regulasi, perizinan terkait lingkungan, dan tautan sistem eksisting (OSS, SiRUP, dll.) | — |

### 2.2 Internal (kementerian)

| Kelompok | Deskripsi | Persona rujukan (1.3) |
|---|---|---|
| Admin PPID / pengelola informasi | Mengelola permohonan masuk multi-kanal dengan SLA | P3 Ratna |
| Admin konten / Humas | Publikasi berita, agenda, publikasi resmi via CMS | P5 Indah |
| PPK & Tim Teknis (Biro Humas) | Pemberi persetujuan (Berita Acara) atas setiap keluaran | — |

### 2.3 Rencana validasi (Workshop Bulan 1 — 3 sesi)

| Sesi | Peserta | Fokus pertanyaan inti |
|---|---|---|
| 1 | Tim Teknis + admin konten | Proses publikasi saat ini, kendala CMS, ketergantungan alat pihak ketiga |
| 2 | Admin PPID + petugas layanan | Volume permohonan, alur manual saat ini, kanal aktif, SLA yang diinginkan |
| 3 | PPK + Tim Teknis | Pengesahan requirement + prioritisasi MoSCoW → **Berita Acara** |

> Status 21 Jul 2026: workshop formal & BA Fase 1 **masih pending** — dijadwalkan digabung dengan presentasi BA Persetujuan Desain (Fase 2.6 / tiket DOC-03).

---

## 3. Metode

1. **Audit heuristik** website eksisting (Nielsen + WCAG 2.1 AA + SPBE/GDS) — sumber utama pain point.
2. **Analisis dokumen** — KAK, proposal teknis, SOP, pedoman identitas visual.
3. **Benchmarking** website K/L lain.
4. **Derivasi requirement** — tiap temuan audit dipetakan ke ≥1 requirement ber-ID dalam format user story.
5. **Validasi** — workshop & Berita Acara (pending).

---

## 4. Daftar User Requirement (21 UR-ID)

Format: *Sebagai [pengguna], saya ingin [kebutuhan], sehingga [manfaat].* Kategori prioritas mengikuti hasil skoring `F1_MoSCoW.md`.

### 4.1 Arsitektur Informasi & Navigasi (UR-IA)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-IA-01 | Sebagai warga, saya ingin menu disusun berdasar niat pengguna (citizen-centric), bukan nama direktorat, sehingga saya menemukan layanan tanpa paham struktur birokrasi | IA organization-centric (Kritis) | P1, P4 | **Must** |
| UR-IA-02 | Sebagai pengguna, saya ingin navigasi konsisten antar halaman & produk, sehingga saya tidak tersesat karena dropdown/pola berbeda-beda | Navigasi tidak konsisten (Tinggi) | P1 | **Must** |
| UR-IA-03 | Sebagai warga, saya ingin layanan esensial tercapai ≤3 klik via Mega Menu, sehingga tugas utama cepat selesai | Kedalaman navigasi (Tinggi) | P1 | Should |

### 4.2 Beranda (UR-HOME)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-HOME-01 | Sebagai warga, saya ingin hero beranda dengan akses cepat layanan esensial, sehingga saya langsung beraksi tanpa menelusuri berita | Information overload beranda | P1 | **Must** |
| UR-HOME-02 | Sebagai pengguna, saya ingin arsip berita diakses via pencarian/indeks, sehingga beranda tidak menjadi tumpukan konten tak berujung | Berita tertumpuk di beranda | P1, P4 | Should |
| UR-HOME-03 | Sebagai pengguna, saya ingin komponen carousel/slider yang stabil, sehingga konten tidak rusak/bergeser sendiri | Carousel rusak | P1 | Could |

### 4.3 PPID — Layanan Informasi Publik (UR-PPID)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-PPID-01 | Sebagai pemohon, saya ingin form permohonan informasi online (akun + unggah berkas), sehingga tidak perlu kirim email/Word manual | PPID manual (Tinggi) | P2 | **Must** |
| UR-PPID-02 | Sebagai pemohon, saya ingin melacak status permohonan real-time, sehingga saya tahu progres tanpa menebak | Tanpa tracking (Tinggi) | P2 | **Must** |
| UR-PPID-03 | Sebagai pemohon mobile, saya ingin aplikasi PPID (Flutter) dengan push notification, sehingga permohonan & pelacakan bisa dari genggaman | Mandat KAK | P2 | **Must** |
| UR-PPID-04 | Sebagai admin PPID, saya ingin antarmuka pengelolaan permohonan dengan SLA, sehingga tidak ada permohonan terlewat | Permohonan tersebar di email | P3 | **Must** |

### 4.4 Aksesibilitas (UR-A11Y)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-A11Y-01 | Sebagai pengguna pembaca layar, saya ingin dukungan ARIA/alt text penuh, sehingga seluruh konten dapat diakses | Aksesibilitas absen (Kritis) | P2 | **Must** |
| UR-A11Y-02 | Sebagai pengguna low-vision, saya ingin mode kontras tinggi & pengaturan ukuran teks, sehingga konten terbaca nyaman | Tanpa dukungan kontras/teks | P2 | **Must** |
| UR-A11Y-03 | Sebagai pengguna keyboard, saya ingin seluruh navigasi dapat dioperasikan tanpa mouse (skip-link, fokus jelas), sehingga tidak ada fitur terkunci | Keyboard trap / fokus hilang | P2 | **Must** |

### 4.5 Performa & Responsivitas (UR-PERF)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-PERF-01 | Sebagai pengguna, saya ingin waktu muat cepat (target Lighthouse ≥90), sehingga tugas selesai tanpa menunggu | Performa lambat (Tinggi) | P1 | Should |
| UR-PERF-02 | Sebagai pengguna mobile, saya ingin layout responsif desktop/tablet/mobile, sehingga tampilan tidak rusak di HP | Mobile rusak (Tinggi) | P1, P2 | **Must** |

### 4.6 Omni Channel (UR-OMNI)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-OMNI-01 | Sebagai agen layanan, saya ingin unified inbox lintas kanal (WA/IG/email/dll.), sehingga semua pesan warga terpantau dari satu tempat | Kanal terpisah-pisah (Tinggi) | P3 | **Must** |
| UR-OMNI-02 | Sebagai agen layanan, saya ingin ticketing + SLA + routing/auto-reply, sehingga beban terdistribusi dan tidak ada yang terlewat | Tanpa pemantauan/SLA | P3 | **Must** |

### 4.7 Pencarian (UR-SEARCH)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-SEARCH-01 | Sebagai pengguna, saya ingin pencarian terpusat dengan filter (tipe konten/tanggal), sehingga data & publikasi resmi cepat ditemukan | Pencarian/filter lemah (Tinggi) | P1, P4 | Should |

### 4.8 Tata Kelola & Keamanan Konten (UR-GOV, UR-CONTENT)

| UR-ID | User story (ringkas) | Sumber audit | Persona | MoSCoW |
|---|---|---|---|---|
| UR-GOV-01 | Sebagai admin Humas, saya ingin konten resmi dikelola di CMS milik sendiri (lepas dari Canva/Google Sites), sehingga kredibilitas & kendali terjaga | Ketergantungan pihak ketiga (Kritis) | P5, P4 | Should |
| UR-GOV-02 | Sebagai pengelola, saya ingin antarmuka terisolasi dari injeksi skrip/SEO spam, sehingga keamanan & reputasi terlindungi | Temuan injeksi (Kritis) | P5 | Should |
| UR-CONTENT-01 | Sebagai jurnalis/akademisi, saya ingin visualisasi data & infografis interaktif, sehingga data lingkungan mudah dipahami & dikutip | Konten text-heavy & statis | P4, P5 | Should |

**Rekap MoSCoW (dari 1.4):** 13 Must · 7 Should · 1 Could · Won't = di luar lingkup fase ini.

---

## 5. Kebutuhan Non-Fungsional

| Kategori | Kebutuhan |
|---|---|
| **Aksesibilitas** | WCAG 2.1 AA di seluruh halaman (tervalidasi di DS v2.1) |
| **Performa** | Lighthouse ≥ 90; LCP & waktu muat dalam batas wajar |
| **Responsivitas** | Desktop / tablet / mobile — ketiganya wajib (QA di 1440px & 390px) |
| **Keamanan UI** | Bebas injeksi skrip pihak ketiga; tanpa framework/CDN runtime pada prototipe; mengikuti kontrol KAK |
| **Konsistensi** | Satu design system lintas 3 produk — **DS v2.1**: primary teal `#005952`, secondary blue `#147DEF` (Blue-600 wajib utk tombol & body text), accent orange `#F97910` (tidak boleh jadi latar teks putih); type stack Plus Jakarta Sans / Inter / JetBrains Mono; ikon CoreUI |
| **Kepatuhan** | UU 14/2008 (KIP), UU 27/2022 (PDP), Perpres 95/2018 (SPBE), UU 25/2009 (Pelayanan Publik) |

> Rev v2: referensi warna `#1B7A4B` (DS v1) **tidak berlaku lagi** — seluruh deliverable memakai token DS v2.1.

---

## 6. Ringkasan Telusur Audit → Requirement

| Temuan audit (1.1) | Severity | Requirement terkait |
|---|---|---|
| Navigasi tidak konsisten / IA organization-centric | Tinggi/Kritis | UR-IA-01..03 |
| Information overload beranda | Defisit | UR-HOME-01..03 |
| PPID manual, tanpa form/tracking | Tinggi | UR-PPID-01..04 |
| Aksesibilitas absen | Kritis | UR-A11Y-01..03 |
| Performa lambat & mobile rusak | Tinggi | UR-PERF-01..02 |
| Tidak ada unified inbox | Tinggi | UR-OMNI-01..02 |
| Pencarian & filter lemah | Tinggi | UR-SEARCH-01 |
| Keamanan UI / ketergantungan pihak ketiga | Kritis | UR-GOV-01..02, UR-CONTENT-01 |

---

## 7. Asumsi, Risiko & Langkah Validasi

**Asumsi:** requirement diturunkan dari audit & KAK; angka/proses spesifik (volume permohonan, jumlah kanal aktif, label menu final) menunggu data & keputusan Tim Teknis (6 keputusan terbuka tercatat di `F2_Checklist-Halaman.md` §9).
**Risiko:** perubahan kebutuhan di tengah jalan → dikelola via backlog ClickUp & change request (selaras Risk Management Plan proposal).
**Validasi wajib:** seluruh requirement disahkan via **Berita Acara** — direncanakan satu paket dengan BA Persetujuan Desain Fase 2.6 (tiket DOC-03, prioritas tinggi).

---

## 8. Status Realisasi Requirement (BARU — per 21 Juli 2026)

Bukti telusur requirement → deliverable Fase 2. Seluruh prototipe: vanilla HTML/CSS/JS, fondasi bersama `tokens.css`/`base.css`/`components.css`/`icons.js`, verifikasi Playwright nol error JS & nol overflow di 1440/390px.

| Area UR | Status realisasi | Bukti |
|---|---|---|
| UR-IA-01..03 | ✅ Direalisasikan (label final menunggu BA) | Mega Menu citizen-centric di Modul 01; navigasi konsisten lintas 4 modul |
| UR-HOME-01..03 | ✅ Direalisasikan | Modul 01 — Beranda hero Layanan Cepat + 7 layanan (24 halaman, QA-01 done) |
| UR-PPID-01..02 | ✅ Direalisasikan (prototipe) | Modul 02 PPID Web — form stepper + lacak permohonan timeline (15 halaman, QA-02 done) |
| UR-PPID-03 | 🔄 Dalam proses | PPID Mobile Flutter (8 layar) — desain lacak/riwayat `on design`, sisanya `to do` |
| UR-PPID-04 | ✅ Direalisasikan (prototipe) | Modul 03 — ticketing/SLA & disposisi admin |
| UR-A11Y-01..03 | ✅ Direalisasikan | Panel aksesibilitas (kontras tinggi + ukuran teks) lintas halaman; ARIA + keyboard nav; WCAG 2.1 AA tervalidasi di DS v2.1 |
| UR-PERF-01..02 | ✅ Direalisasikan (prototipe) | Tanpa framework/CDN runtime; responsif 1440/390 lulus QA; Lighthouse final diuji saat implementasi |
| UR-OMNI-01..02 | ✅ Direalisasikan (prototipe) | Modul 03 Omni Dashboard — unified inbox 7 kanal, ticketing/SLA, routing/auto-reply (12 halaman, QA-03 done) |
| UR-SEARCH-01 | ✅ Direalisasikan (prototipe) | Halaman hasil pencarian + filter di Modul 01 |
| UR-GOV-01..02 | ✅ Direalisasikan (prototipe, usulan) | Modul 04 CMS Konten (8 halaman — usulan di luar KAK); pola swap dummy→CMS (`KLH.*` di `assets/js/data/`) |
| UR-CONTENT-01 | ✅ Direalisasikan (prototipe) | Visualisasi data Chart.js (inline UMD) di Modul 01 & 03 |

**Sisa pekerjaan terkait requirement:** PPID Mobile (UR-PPID-03), hi-fi Figma scaling, UAT 3 skenario persona (QA-05, Fase 4), dokumentasi & style guide (Fase 5), dan pengesahan BA (DOC-03).

---

**Langkah berikutnya:** formalisasi Berita Acara (Fase 1 + Persetujuan Desain 2.6) → label final §9 diterapkan → lanjut PPID Mobile & UAT.

> **Reminder:** bila ada perubahan status, perbarui juga `PANDUAN_KERJA_UIUX_KLH.md` dan `F2_Checklist-Halaman.md`.
