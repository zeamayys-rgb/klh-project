# LAPORAN AUDIT WEBSITE EKSISTING
## Analisis UI/UX Portal kemenlh.go.id — Fase 1, Point 1.1

| | |
|---|---|
| **Proyek** | Pengembangan Konten User Interface Website KLH/BPLH |
| **Vendor** | PT Bening Semesta |
| **Penyusun** | Abdan — UI/UX Designer |
| **Objek Audit** | https://kemenlh.go.id (framework eksisting: CodeIgniter → target Laravel) |
| **Tanggal Audit** | 21 Juni 2026 |
| **Metode** | Observasi langsung (live testing via browser desktop & mobile) + analisis struktur + heuristik |
| **Acuan** | KAK poin 33 (Pedoman Pengumpulan Data Lapangan), Nielsen 10 Heuristics, WCAG 2.1 AA, SPBE/GDS |
| **Instrumen Penilaian** | Rubrik baku 8 kriteria tertimbang (lihat **Bab 2 — Metodologi Penilaian**) |
| **Skor Baseline** | **4.5 / 10** (Basis A, 6 aspek) · **4.53 / 10** (Basis B, 8 kriteria tertimbang) — *Substandar* |
| **Target Pasca-Pengembangan** | **≥ 8.0 / 10** (ambang lulus); target desain **8.62 / 10** |
| **Deliverable** | `F1_Laporan-Audit.md` → masukan untuk Laporan Pendahuluan bagian "Analisis Website/Sistem Eksisting" (Termin I) |

> **Catatan metodologis.** Audit ini menggunakan strategi *audit mendalam halaman kunci + inventarisasi menyeluruh*. Halaman kunci (Beranda, Visi-Misi, Pelayanan Informasi PPID) diuji secara **live** pada viewport desktop (1440px) dan mobile (375px) untuk mengukur responsivitas, kecepatan, dan aksesibilitas secara empiris. Sisanya dianalisis dari struktur navigasi, pola template, dan heuristic evaluation yang telah ada (Grade D ~41/100). Pendekatan ini memenuhi 7 aspek observasi wajib KAK tanpa membebani timeline Bulan 1.

---

## 1. RINGKASAN EKSEKUTIF

Portal kemenlh.go.id secara teknis **dapat diakses dan memiliki fondasi responsif dasar** (Bootstrap 5), namun mengalami **defisit substansial** pada arsitektur informasi, tata kelola konten, performa, dan aksesibilitas. Audit live mengonfirmasi mayoritas temuan heuristik sebelumnya (Grade D, ~41/100) sekaligus **mengoreksi sebagian asumsi** — khususnya bahwa responsivitas mobile tidak "rusak total" melainkan "fungsional dengan cacat".

**Lima temuan paling kritis:**

1. **Tata kelola konten tersebar di domain pihak ketiga.** Mayoritas dokumen publikasi resmi dihosting di **Google Drive pribadi** (±30+ tautan), beberapa direktorat menggunakan **Canva Site** dan **Google Sites** sebagai portal resmi, dan satu layanan (WCC) mengarah ke **Google Looker Studio**. Ini risiko kredibilitas, keberlanjutan, dan kedaulatan data.
2. **Layanan PPID sepenuhnya manual.** Permohonan informasi publik dilakukan via **unduh form `.doc` → kirim email** (`humas@kemenlh.go.id`) → lampiran scan KTP. Tidak ada submission online, akun pemohon, atau pelacakan status.
3. **Performa berat.** Beranda memuat **72 request jaringan**, dengan dependensi render-blocking dari **5 CDN eksternal** (jQuery, Bootstrap, Font Awesome, Google Fonts) dan **±30 file CSS tidak ter-bundle**. Beberapa aset CSS mengembalikan **HTTP 503** secara intermiten — indikasi server tidak stabil di bawah beban.
4. **Anomali keamanan antarmuka.** Footer memuat tautan eksternal mencurigakan (`klimaservisi.srvs.me`, berbahasa Turki) — mengonfirmasi indikasi injeksi/kerentanan CMS yang menjadi skor terendah scorecard (2.0).
5. **Navigasi organization-centric.** Menu publik memakai akronim birokrasi internal (Dit. PLTTDLB3, PB3, PSLH, PDLKWS) dan sejumlah tautan rusak (PPID & Dit. PPLH mengarah ke beranda; Struktur Organisasi mengarah ke file `.jpg` mentah).

**Kesimpulan:** Temuan memperkuat justifikasi perombakan menyeluruh sebagaimana ditawarkan dalam proposal. Skor rata-rata antarmuka **4.5/10 (substandar)** tetap valid sebagai baseline.

---

## 2. METODOLOGI PENILAIAN (INSTRUMEN AUDIT BAKU)

Bab ini menetapkan **instrumen audit yang bersifat baku dan dapat diulang (repeatable)**. Tujuannya agar audit terhadap website hasil pengembangan nanti dapat dilakukan dengan kriteria, rubrik, dan cara pengukuran yang **persis sama**, sehingga selisih skor merepresentasikan peningkatan nyata — bukan perbedaan cara menilai.

> **Prinsip dasar:** *Apa yang tidak diukur dengan cara yang sama, tidak boleh dibandingkan.* Setiap klaim peningkatan wajib merujuk pada basis skor, rubrik, dan instrumen yang identik dengan audit baseline ini.

### 2.1 Klarifikasi Basis Skor (penting untuk klaim peningkatan)

Terdapat dua basis skor yang dipakai dalam dokumen proyek. Keduanya dipertahankan agar klaim peningkatan sah di kedua konteks:

| Basis | Cakupan | Skor Baseline | Digunakan untuk |
|---|---|---|---|
| **Basis A — 6 Aspek** | Sesuai Proposal Teknis A.4.4 | **4.5 / 10** | Kompatibilitas dengan proposal & dokumen tender |
| **Basis B — 8 Aspek (tertimbang)** | Basis A + Responsivitas + Performa | **4.53 / 10** (≈ 45.2/100) | Audit teknis lengkap sesuai 7 aspek wajib KAK poin 33 |

**Catatan koreksi.** Nilai baseline yang sah adalah **4.5** (Proposal A.4.4), bukan 4.4. Basis B menambahkan dua aspek yang diwajibkan KAK poin 33 namun belum berdiri sendiri di proposal (Responsivitas dan Kecepatan/Performa). Kedua basis menghasilkan angka yang nyaris identik (4.5 vs 4.53), sehingga **narasi "dari 4.5" tetap valid** apa pun basis yang dipakai.

### 2.2 Kriteria & Pembobotan (Basis B)

Bobot ditetapkan berdasarkan dampak terhadap pengguna publik dan mandat regulasi (KAK, SPBE, WCAG 2.1 AA).

| Kode | Kriteria | Bobot | Dasar Pembobotan |
|---|---|---|---|
| K1 | Information Architecture | 15% | Penentu utama keberhasilan menemukan layanan |
| K2 | Visual Hierarchy & Layout | 10% | Mempengaruhi fokus & beban kognitif |
| K3 | Usability & User Flow | 15% | Penentu penyelesaian tugas (task success) |
| K4 | Responsivitas Multi-Perangkat | 10% | Mayoritas akses publik via mobile |
| K5 | Aksesibilitas (WCAG 2.1 AA) | 15% | Mandat regulasi & inklusivitas |
| K6 | Kecepatan & Performa | 15% | Mandat KAK; penentu bounce rate |
| K7 | Konsistensi UI & Design System | 10% | Menentukan kepercayaan & efisiensi belajar |
| K8 | Keamanan & Integritas Antarmuka | 10% | Kredibilitas institusi negara |
| | **TOTAL** | **100%** | |

### 2.3 Rubrik Penilaian 0–10 (Deskriptor Level)

Rubrik ini **wajib digunakan identik** pada audit ulang. Penilai memilih level yang deskriptornya paling sesuai, lalu mencatat bukti pendukungnya.

| Level | Skor | Deskriptor Umum | Status |
|---|---|---|---|
| Gagal | 0–2 | Fungsi inti tidak tersedia / terdapat cacat fatal atau risiko keamanan aktif | 🔴 Kritis |
| Sangat Kurang | 2–4 | Tersedia namun gagal memenuhi standar minimum; menghambat mayoritas pengguna | 🔴 Kritis |
| Kurang | 4–6 | Berfungsi dasar, namun cacat signifikan & inkonsistensi meluas | ⚠️ Defisit |
| Cukup | 6–7.5 | Memenuhi standar dasar; masih ada celah yang terasa oleh pengguna | ⚠️ Memadai |
| Baik | 7.5–9 | Memenuhi standar profesional & regulasi; celah minor non-kritis | ✓ Baik |
| Sangat Baik | 9–10 | Praktik terbaik, teruji, terdokumentasi, dan konsisten menyeluruh | ✓ Unggul |

**Rubrik spesifik per kriteria** (indikator yang dinilai — dipakai sama persis saat re-audit):

| Kode | Indikator Terukur | Skor 4 (baseline) berarti | Skor 8.5+ (target) berarti |
|---|---|---|---|
| K1 | Kedalaman menu, label berbasis intent, breadcrumb, tautan rusak, akronim internal | Label organization-centric, ada tautan rusak, tanpa breadcrumb | Label citizen-centric, 0 tautan rusak, breadcrumb konsisten |
| K2 | Focal point, whitespace, panjang scroll beranda, jumlah seksi | Information overload, endless scroll | Hierarki jelas, seksi terkurasi, CTA menonjol |
| K3 | Jumlah langkah tugas inti, kejelasan CTA, kontinuitas antar-layanan | Alur terputus ke pihak ketiga, PPID manual | Alur tuntas dalam sistem, PPID online end-to-end |
| K4 | Uji 375 / 768 / 1440 px: overflow, skala tipografi, target sentuh ≥44px | Overflow horizontal, tipografi tidak skala | 0 overflow, tipografi fluid, target sentuh patuh |
| K5 | Kontras, hierarki heading, aria-label, navigasi keyboard, skip-link, alt text | Heading rusak, kontrol tanpa label, tanpa fitur bantu | WCAG 2.1 AA lolos, mode kontras & skip-link tersedia |
| K6 | Jumlah request, LCP, CLS, skor Lighthouse, bundling, status 5xx | 72 request, 5 CDN blocking, 503 intermiten | Lighthouse ≥ 90, aset ter-bundle & self-host, 0 5xx |
| K7 | Kepatuhan design token, keseragaman komponen, transisi antar-sistem | Inti seragam, ekosistem eksternal berbeda total | Satu bahasa visual lintas 3 produk |
| K8 | Injeksi/anomali tautan, HTTPS menyeluruh, integritas footer | Tautan injeksi aktif, ada `http://` | Bersih, HTTPS menyeluruh, terverifikasi |

### 2.4 Instrumen & Prosedur Pengukuran

Agar hasil dapat direplikasi, audit ulang **wajib** memakai instrumen dan kondisi berikut:

| Aspek | Instrumen | Prosedur Baku |
|---|---|---|
| Struktur & Navigasi | Inventarisasi sitemap manual | Telusuri seluruh menu & sub-menu; catat setiap destinasi, status hosting, dan tautan rusak |
| Responsivitas | Browser live | Uji pada **375px (mobile)**, **768px (tablet)**, **1440px (desktop)**; catat overflow & skala tipografi |
| Aksesibilitas | Accessibility tree + inspeksi | Periksa hierarki heading, accessible name kontrol, alt text, landmark, navigasi keyboard |
| Kecepatan & Performa | Network inspection + Lighthouse | Catat **jumlah request**, dependensi CDN eksternal, status code 5xx; ukur LCP/CLS/skor Lighthouse |
| Konsistensi | Perbandingan visual | Bandingkan komponen lintas ≥5 halaman & transisi ke sistem tertaut |
| Keamanan Antarmuka | Inspeksi footer & tautan keluar | Verifikasi anomali/injeksi tautan, skema HTTPS pada seluruh tautan |
| Heuristik | Nielsen 10 Heuristics | Nilai tiap heuristik: 🔴 Kritis / ⚠️ Perlu perbaikan / ✓ Memadai |

**Kondisi pengujian yang harus dijaga konstan:** halaman kunci yang sama (Beranda, satu halaman Profil, satu halaman layanan PPID), mode *cold load* (tanpa cache), viewport yang sama, dan pencatatan bukti (screenshot + data mentah) untuk setiap temuan.

### 2.5 Halaman Kunci Wajib Uji (Sampel Konstan)

Audit ulang **wajib menguji halaman dengan fungsi setara** agar perbandingan adil:

| # | Fungsi Halaman | Baseline (eksisting) | Padanan pada Sistem Baru |
|---|---|---|---|
| 1 | Beranda | `/home` | Beranda Website Utama |
| 2 | Konten profil statis | `/contents/3/Visi-Misi` | Halaman Visi-Misi |
| 3 | Layanan informasi PPID | `/contents/43/Pelayanan-Informasi` | Halaman Permohonan Informasi PPID |
| 4 | Listing berita | `/news/main/berita` | Halaman Berita |
| 5 | Detail konten | `/news/detail/{slug}` | Halaman Detail Berita |
| 6 | Direktori layanan | Ikon layanan beranda | Halaman Layanan Publik |

### 2.6 Formula Perhitungan

```
Skor Akhir (Basis B) = Σ (Skor Kriteria Kᵢ × Bobot Kᵢ)
Skor /100           = Skor Akhir × 10
Peningkatan (poin)  = Skor Audit Ulang − Skor Baseline
Peningkatan (%)     = (Skor Audit Ulang − Skor Baseline) ÷ Skor Baseline × 100%
```

**Verifikasi baseline (Basis B):**
`(4.0×0.15) + (5.5×0.10) + (5.0×0.15) + (5.5×0.10) + (4.5×0.15) + (4.0×0.15) + (6.0×0.10) + (2.0×0.10) = 4.53`

### 2.7 Target Peningkatan & Kriteria Keberhasilan

Target ditetapkan **konservatif dan dapat diverifikasi**, selaras dengan standar kualitas proposal (WCAG 2.1 AA, Lighthouse ≥ 90).

| Kode | Kriteria | Baseline | Target | Δ |
|---|---|---|---|---|
| K1 | Information Architecture | 4.0 | 8.5 | +4.5 |
| K2 | Visual Hierarchy & Layout | 5.5 | 8.5 | +3.0 |
| K3 | Usability & User Flow | 5.0 | 8.5 | +3.5 |
| K4 | Responsivitas | 5.5 | 9.0 | +3.5 |
| K5 | Aksesibilitas (WCAG 2.1 AA) | 4.5 | 9.0 | +4.5 |
| K6 | Kecepatan & Performa | 4.0 | 8.5 | +4.5 |
| K7 | Konsistensi UI | 6.0 | 9.0 | +3.0 |
| K8 | Keamanan Antarmuka | 2.0 | 8.0 | +6.0 |
| | **SKOR TERTIMBANG** | **4.53** | **8.62** | **+4.09** |
| | **Setara /100** | **45.2** | **86.2** | **+41.0** |
| | **Basis A (6 aspek)** | **4.5** | **8.58** | **+4.08** |

**Kriteria keberhasilan proyek (ambang minimum):**

| Indikator | Ambang Lulus |
|---|---|
| Skor tertimbang keseluruhan | ≥ **8.0 / 10** (naik ≥ 3.5 poin dari baseline) |
| Tidak ada kriteria berstatus Kritis | Seluruh K1–K8 ≥ **7.0** |
| Aksesibilitas | Lolos **WCAG 2.1 AA** pada halaman kunci |
| Performa | **Lighthouse ≥ 90**; tanpa error 5xx pada aset |
| Integritas tautan | **0 tautan rusak** & 0 anomali injeksi |
| Kemandirian konten | **0 konten resmi** di Canva/Google Sites/Drive pribadi |

### 2.8 Protokol Audit Ulang (Re-Audit)

1. **Waktu:** dijalankan pada Fase 4 (Pengujian & QA), sebelum serah terima.
2. **Penilai:** penilai yang sama dengan audit baseline, guna menjaga konsistensi interpretasi rubrik.
3. **Objek:** 6 halaman kunci pada §2.5 dengan fungsi setara.
4. **Prosedur:** ulangi §2.4 secara identik (viewport sama, cold load, instrumen sama).
5. **Bukti:** simpan screenshot, data network, dan catatan accessibility tree sebagai lampiran.
6. **Pelaporan:** sajikan tabel **Sebelum → Sesudah** per kriteria dengan bukti pendukung, memakai format §2.7.
7. **Independensi:** bila memungkinkan, sertakan validasi silang dari Tim Teknis Biro Humas untuk memperkuat objektivitas.

> **Catatan kejujuran metodologis.** Skor rubrik mengandung komponen penilaian ahli (*expert judgement*) sehingga tidak sepenuhnya bebas subjektivitas. Mitigasinya: deskriptor level yang eksplisit (§2.3), indikator terukur per kriteria, pencatatan bukti wajib, dan penilai yang konsisten. Untuk indikator yang murni objektif (jumlah request, status 5xx, skor Lighthouse, jumlah tautan rusak, kepatuhan WCAG), perbandingan bersifat kuantitatif penuh dan tidak bergantung pada interpretasi.

---

## 3. INVENTARISASI KONTEN & TAUTAN (SITEMAP)

Total **±58 destinasi unik** dipetakan dari 7 menu utama + layanan cepat + footer. Kolom *Hosting* menandai kepatuhan terhadap prinsip "hindari ketergantungan domain pihak ketiga".

### 3.1 Beranda
| Halaman | URL | Hosting |
|---|---|---|
| Beranda / Home | `/home` | Internal |

### 3.2 Profil (10 sub-menu)
| Sub-menu | URL | Catatan |
|---|---|---|
| Visi Misi | `/contents/3/Visi-Misi` | Internal ✓ |
| Tentang Kami | `/contents/4/Tentang-Kami` | Internal ✓ |
| Nilai KLH | `/contents/5/Nilai-KLH` | Internal ✓ |
| Tugas dan Fungsi | `/contents/6/Tugas-dan-Fungsi` | Internal ✓ |
| Struktur Organisasi | `…/content-images/…jpg` | ⚠️ Tautan ke **file JPG mentah**, bukan halaman |
| Profil Menteri | `/contents/8/Profil-Menteri` | Internal ✓ |
| Profil Wakil Menteri | `/contents/9/Profil-Wakil-Menteri` | Internal ✓ |
| Profil Pejabat | `/news/main/eselon1` | Internal ✓ |
| Unit Kerja | `/contents/42/Unit-Kerja` | Internal ✓ |

### 3.3 Program (7 sub-menu)
| Sub-menu | URL | Catatan |
|---|---|---|
| Kalpataru | `sitaru.kemenlh.go.id` | Subdomain |
| Proper | `proper.menlhk.go.id` | ⚠️ **Domain lama `menlhk`** (inkonsistensi identitas) |
| Adipura | `/contents/14/Adipura` | Internal ✓ |
| Adiwiyata | `/contents/15/Adiwiyata` | Internal ✓ |
| Proklim | `/contents/16/…` | Internal ✓ |
| Nirwasita Tantra | `/contents/17/…` | Internal ✓ |
| Ekonomi Sirkular | `/contents/18/…` | Internal ✓ |

### 3.4 Pelayanan Publik (8 sub-menu)
| Sub-menu | URL | Catatan |
|---|---|---|
| SP4N Lapor | `/news/main/lapor` | Internal ✓ |
| Publikasi | `/publikasi` | Internal ✓ (namun isi → Google Drive, lihat §3.9) |
| Layanan Pengadaan Barang Jasa | `/news/main/barang` | Internal ✓ |
| Laboratorium Pusarpedal | `pusarpedal.kemenlh.go.id` | ⚠️ **`http://` (non-HTTPS)** |
| Peraturan JDIH | `jdih.kemenlh.go.id` | Subdomain |
| E-Learning | `p2sdm.kemenlh.go.id` | Subdomain |
| E-LHKPN | `/news/main/lhkpn` | Internal ✓ |
| Statistik KLH | `statistik.kemenlh.go.id` | Subdomain |

### 3.5 PPID (10 sub-menu)
| Sub-menu | URL | Catatan |
|---|---|---|
| PPID Kemenlh | `/` | ⚠️ **Tautan rusak** (mengarah ke beranda) |
| Tugas dan Fungsi PPID | `/contents/57/…` | Internal ✓ |
| Struktur Organisasi PPID | `/news/detail/susunan-personil…` | Internal ✓ |
| Visi dan Misi PPID | `/contents/59/…` | Internal ✓ |
| Regulasi | `/regulation` | Internal ✓ |
| Pelayanan Informasi | `/contents/43/…` | Internal ✓ (proses manual, lihat §7) |
| Laporan PID | `/report` | Internal ✓ |
| Laporan Kinerja | `/news/main/rekaplkj` | Internal ✓ |
| Daftar Informasi Publik | `/PublicInformation` | Internal ✓ |
| Laporan Keuangan | `/news/main/keuangan` | Internal ✓ |

### 3.6 Berita (5 sub-menu)
| Sub-menu | URL |
|---|---|
| Berita | `/news/main/berita` |
| Siaran Pers | `/news/main/siaran_pers` |
| Pengumuman | `/news/main/pengumuman` |
| Agenda | `/news/main/agenda` |
| Artikel | `/news/main/artikel` |

### 3.7 Zona Integritas (12 sub-menu) — **titik kritis governance**
| Sub-menu | URL | Hosting |
|---|---|---|
| Dit. PLTTDLB3 & Non B3 | `plttdlb3.menlhk.go.id` | ⚠️ Domain lama + akronim |
| Dit. PB3 | `pb3.kemenlh.go.id` | Subdomain |
| Dit. PPLH | `/` | ⚠️ **Tautan rusak** (ke beranda) |
| PUSARPEDAL | `pusarpedal.kemenlh.go.id` | Subdomain |
| PUSDAL BALINUSRA | `pusdallhbalinusra.kemenlh.go.id` | Subdomain |
| PUSDAL SUMA | `pusdalsuma.go.id` | ⚠️ **Domain non-go.id terpisah** |
| Dit. PSLH | `pslh-gakkum-kemenlh.my.canva.site` | 🔴 **Canva Site** |
| Dit. PDLKWS | `sierra.kemenlh.go.id` | Subdomain |
| PUSDATIN KLH | `pusdatin-zi.kemenlh.go.id` | Subdomain |
| PSILH | `sites.google.com/view/satudatapsilh` | 🔴 **Google Sites** |
| Dit. MITIGASI | `sites.google.com/view/mitigasipi` | 🔴 **Google Sites** |
| Dit. PHPLH | `php-gakkum.kemenlh.go.id` | Subdomain |

### 3.8 Layanan Cepat (ikon beranda — 6 item)
| Layanan | URL | Hosting |
|---|---|---|
| PTSP | `pelayananterpadu.kemenlh.go.id` | Subdomain |
| Pengaduan | `kemenlh.lapor.go.id` | Eksternal (SP4N — wajar) |
| SRN PPI | `srn.kemenlh.go.id` | Subdomain |
| Bursa Karbon | `idxcarbon.co.id` | ⚠️ Domain pihak ketiga |
| PPID | `wa.me/+628111720073` | 🔴 **PPID = link WhatsApp**, bukan sistem |
| WCC | `lookerstudio.google.com/…` | 🔴 **Google Looker Studio** |

### 3.9 Aset Konten Tertanam (footer & seksi publikasi)
| Item | Temuan |
|---|---|
| Dokumen Publikasi | ±30+ tautan ke **`drive.google.com`** (file & folder pribadi) bercampur dengan PDF internal `/storage/publications/` |
| Tautan footer mencurigakan | `klimaservisi.srvs.me` ("klima servisi") — **indikasi injeksi/kerentanan CMS** |
| Penghitung statistik | `gnrcounter.com` (layanan hit-counter pihak ketiga) |
| Form PPID | Form permohonan `.doc` & form keberatan di **Google Drive** |

---

## 4. AUDIT PER ASPEK (KAK POIN 33 — 7 ASPEK WAJIB)

### 4.1 Struktur Halaman Website
**Temuan.** Struktur situs mengikuti taksonomi **organisasi birokrasi**, bukan kebutuhan pengguna. Menu "Zona Integritas" (12 item direktorat) dan "Profil" (10 item) mendominasi navigasi, sementara layanan inti publik tersebar di "Pelayanan Publik", "Layanan Cepat" (ikon beranda), dan "PPID" tanpa pengelompokan berbasis intent. Beberapa entri menu **bukan halaman** (Struktur Organisasi → file `.jpg`; beberapa direktorat → portal eksternal).

**Severity: Tinggi.** Melanggar prinsip citizen-centric IA & SPBE.

### 4.2 Navigasi Website
**Temuan.** Top-navbar dengan 6 dropdown. Sejumlah **tautan rusak** terkonfirmasi: "PPID Kemenlh" dan "Dit. PPLH" keduanya mengarah ke `/` (beranda). Penggunaan **akronim internal** (PLTTDLB3, PB3, PSLH, PDLKWS) melanggar heuristik Nielsen #2 *(Match between system and real world)*. Di mobile, dropdown bertingkat menyulitkan akses sub-menu (deep nav). Tidak ditemukan **breadcrumb** untuk orientasi pada halaman dalam.

**Severity: Tinggi.**

### 4.3 Tampilan Antarmuka Pengguna
**Temuan.** Identitas visual cukup seragam (warna hijau-toska + aksen oranye, font Poppins) namun terkesan **dated** dan padat. Beranda menerapkan pola *endless scrolling* (hero carousel → layanan → video → berita 5-tab → publikasi → prosedur → survey popup) yang mengaburkan focal point. Halaman konten (Visi-Misi) **text-heavy & statis** tanpa infografis — konsisten dengan pain point A.4.5.

**Severity: Sedang–Tinggi.**

### 4.4 Responsivitas Tampilan *(diuji live: 1440px & 375px)*
**Temuan — DIKOREKSI DARI ASUMSI AWAL.** Kontras dengan label "layout rusak di layar kecil", uji live menunjukkan **fondasi responsif Bootstrap berfungsi**: hamburger menu aktif, grid layanan & kartu turun ke kolom tunggal, hero ter-skala. Namun ada **cacat responsif nyata**:
- **Overflow horizontal** pada running-text berjalan ("Wujudkan Lingkungan Hidup de…") — teks terpotong keluar viewport mobile.
- **Tipografi tidak skala turun**: judul "Layanan Kementerian Lingkungan Hidup" terlalu besar di 375px, memakan ruang berlebih.
- **Menu overlay mobile semi-transparan**: teks konten di belakang menembus dan bertumpuk dengan item menu → keterbacaan turun (isu kontras).

**Severity: Sedang.** (Bukan "rusak total"; "fungsional dengan cacat".)

### 4.5 Konsistensi Desain
**Temuan.** Komponen dasar konsisten lintas halaman internal (header, footer, kartu). **Inkonsistensi terbesar terjadi pada transisi ke sistem pihak ketiga**: ketika pengguna mengeklik direktorat di Zona Integritas, mereka mendarat di Canva/Google Sites/subdomain dengan bahasa visual yang **sama sekali berbeda** — disorientasi (Nielsen #4 *Consistency and standards*). Pencampuran domain `kemenlh.go.id`/`menlhk.go.id`/`pusdalsuma.go.id` memperparah inkonsistensi identitas.

**Severity: Tinggi** (pada lapisan ekosistem), **Sedang** (pada halaman inti).

### 4.6 Aksesibilitas Pengguna (WCAG 2.1 AA) *(diuji live via accessibility tree)*
**Temuan.**
- **Hierarki heading rusak**: 5 judul berita di hero carousel semuanya berada pada level heading teratas (multiple top-level) — melanggar WCAG 1.3.1 *(Info and Relationships)* & 2.4.6 *(Headings and Labels)*.
- **Kontrol tanpa accessible name**: tombol prev/next carousel & tombol play video hanya berisi `<image>` tanpa label teks/aria.
- **Tidak ada fitur penunjang**: tidak ditemukan mode kontras tinggi, text-to-speech, atau skip-link.
- **Positif**: alt text tersedia pada gambar berita utama; landmark `navigation`, `region`, `contentinfo` terbaca; search box ada.

**Severity: Tinggi.** Konsisten dengan skor scorecard 4.5.

### 4.7 Kecepatan Akses Halaman *(diuji live via network inspection)*
**Temuan.**
- Beranda memicu **72 request** untuk satu kali load.
- **5 dependensi CDN eksternal render-blocking**: `code.jquery.com`, `cdn.jsdelivr.net` (Bootstrap), `cdnjs.cloudflare.com` (Font Awesome), `fonts.googleapis.com` + `fonts.gstatic.com`. Kegagalan/lambatnya salah satu CDN langsung memblokir render.
- **±30 file CSS dimuat terpisah** tanpa bundling/minification — boros round-trip HTTP.
- **HTTP 503 intermiten** pada `news-list.css`, `program-detail.css`, `visi-misi.css` saat beban tinggi → risiko halaman tampil tanpa styling pada cold-load.
- **Tidak ada strategi lazy-load** eksplisit pada banyak gambar berita beresolusi penuh.

**Severity: Tinggi.** Konsisten dengan pain point "loading > 5 detik, LCP rendah".

---

## 5. PEMETAAN KE HEURISTIC EVALUATION (NIELSEN 10)

| # | Heuristik | Status | Temuan ringkas |
|---|---|---|---|
| 1 | Visibility of system status | ⚠️ | Tidak ada status submission PPID; tidak ada feedback proses |
| 2 | Match system & real world | 🔴 | Akronim birokrasi (PLTTDLB3, PB3) di menu publik |
| 3 | User control & freedom | ⚠️ | Tidak ada breadcrumb; survey popup mengganggu |
| 4 | Consistency & standards | 🔴 | Transisi drastis ke Canva/Google Sites/subdomain |
| 5 | Error prevention | ⚠️ | Tautan rusak (PPID, Dit. PPLH → beranda) |
| 6 | Recognition over recall | ⚠️ | Layanan tersebar di 3 lokasi berbeda |
| 7 | Flexibility & efficiency | ⚠️ | Tidak ada quick-access terstruktur untuk layanan utama |
| 8 | Aesthetic & minimalist design | 🔴 | Information overload, endless scroll di beranda |
| 9 | Help users with errors | ⚠️ | Tidak teruji (perlu uji form), error handling minim |
| 10 | Help & documentation | ⚠️ | FAQ/bantuan tidak menonjol; prosedur PPID berupa gambar |

🔴 Kritis · ⚠️ Perlu perbaikan · ✓ Memadai

---

## 6. SCORECARD BASELINE (HASIL PENERAPAN METODOLOGI §2)

Audit live **mengonfirmasi** baseline scorecard proposal. Skor di bawah dihasilkan dengan rubrik §2.3, bobot §2.2, dan instrumen §2.4 — dan menjadi **angka pembanding resmi** untuk audit ulang pasca-pengembangan.

### 6.1 Skor per Kriteria (Basis B — 8 Kriteria Tertimbang)

| Kode | Kriteria | Titik Tinjau | Skor | Bobot | Skor × Bobot | Status | Bukti Temuan Utama |
|---|---|---|---|---|---|---|---|
| K1 | Information Architecture | Navigasi, Zona Integritas | 4.0 | 15% | 0.600 | 🔴 Kritis | Organization-centric, akronim internal, 3 tautan rusak |
| K2 | Visual Hierarchy & Layout | Beranda, Berita, Publikasi | 5.5 | 10% | 0.550 | ⚠️ Defisit | Information overload, endless scroll |
| K3 | Usability & User Flow | Program, Pelayanan, PPID | 5.0 | 15% | 0.750 | ⚠️ Defisit | Alur terputus ke pihak ketiga; PPID manual |
| K4 | Responsivitas | Beranda (375/1440px) | 5.5 | 10% | 0.550 | ⚠️ Defisit | Overflow running-text, tipografi tidak skala |
| K5 | Aksesibilitas (WCAG 2.1 AA) | Seluruh halaman | 4.5 | 15% | 0.675 | 🔴 Kritis | Hierarki heading rusak, kontrol tanpa label |
| K6 | Kecepatan & Performa | Beranda (72 request) | 4.0 | 15% | 0.600 | 🔴 Kritis | 5 CDN render-blocking, 503 intermiten |
| K7 | Konsistensi UI | Seluruh halaman | 6.0 | 10% | 0.600 | ⚠️ Memadai | Inti seragam; ekosistem eksternal berbeda |
| K8 | Keamanan Antarmuka | Footer | 2.0 | 10% | 0.200 | 🔴 Kritis | Tautan injeksi `klimaservisi.srvs.me` |
| | **SKOR TERTIMBANG** | **Keseluruhan** | | **100%** | **4.53** | **Substandar** | **Perlu perombakan arsitektur & desain menyeluruh** |

### 6.2 Rekonsiliasi Dua Basis

| Basis | Perhitungan | Skor | Setara /100 |
|---|---|---|---|
| **Basis A — 6 aspek** (Proposal A.4.4) | Rata-rata K1, K2, K3, K5, K7, K8 | **4.5** | 45.0 |
| **Basis B — 8 kriteria tertimbang** (audit ini) | Σ (skor × bobot) | **4.53** | 45.2 |

Selisih kedua basis hanya **0.03 poin**, sehingga **konsisten satu sama lain**. Narasi baseline **"4.5 / 10 — substandar"** tetap menjadi rujukan resmi lintas dokumen proyek.

---

## 7. SOROTAN: LAYANAN PPID (BASIS JUSTIFIKASI DIGITISASI)

Uji live halaman **Pelayanan Informasi** mengonfirmasi proses **sepenuhnya manual**:

1. Pemohon **mengunduh form `.doc`** (`FORM-PERMOHONAN-INFORMASI-PUBLIK-PPID-LINGKUNGAN-HIDUP.doc`).
2. Mengisi offline + menyiapkan surat permohonan + **scan KTP**.
3. **Mengirim via email** ke `humas@kemenlh.go.id` dengan format subjek manual.
4. Form **pengajuan keberatan** bahkan dihosting di **Google Drive**.
5. Di beranda, ikon "PPID" mengarah ke **nomor WhatsApp** (`wa.me/+628111720073`).

**Tidak tersedia**: form online, akun/login pemohon, unggah dokumen terstruktur, pelacakan status permohonan (lacak pemohon), atau klasifikasi informasi (berkala/serta-merta/setiap saat/dikecualikan) yang interaktif.

➡️ **Justifikasi langsung** untuk modul **Website & Mobile PPID** dengan submission & tracking online (Produk 2), serta **Dashboard Omni Channel** untuk menyatukan kanal email/WA yang kini terpisah.

---

## 8. REKOMENDASI STRATEGIS (JEMBATAN KE FASE 2)

| # | Rekomendasi | Memetakan ke |
|---|---|---|
| R1 | Rancang ulang IA **citizen-centric** dengan Mega Menu berbasis intent; hilangkan akronim internal | Fase 2.1 (User Flow & IA) |
| R2 | **Tarik konten pihak ketiga** (Google Drive/Sites/Canva/Looker) ke dalam portal/subdomain resmi | Prinsip governance · Fase 2–3 |
| R3 | Bangun **PPID digital**: form online, akun pemohon, unggah dokumen, lacak status, klasifikasi informasi | Produk 2 (Fase 2–3) |
| R4 | **Konsolidasi kanal** email/WA/medsos ke unified inbox | Produk 3 — Omni Channel |
| R5 | Optimasi performa: **self-host & bundle** aset (hapus 5 CDN eksternal), minify CSS, lazy-load, perbaiki 503 | Fase 3 (layout & handoff) · target Lighthouse ≥ 90 |
| R6 | Remediasi **aksesibilitas WCAG 2.1 AA**: hierarki heading benar, aria-label kontrol, skip-link, mode kontras | Design System (Fase 2.5) |
| R7 | Audit & bersihkan **anomali keamanan** footer (`klimaservisi.srvs.me`); migrasi `http://` → `https://` | Koordinasi tim teknis/keamanan |
| R8 | Perbaiki **tautan rusak** & entri menu non-halaman (PPID, Dit. PPLH, Struktur Organisasi) | Quick win Fase 1–2 |
| R9 | Ganti pendekatan konten **statis/text-heavy** dengan infografis & bagan dinamis | Fase 2.3 (Mockup) · Fase 3.1 (Aset) |

---

## 9. KETERBATASAN AUDIT

- Uji live terbatas pada **halaman kunci representatif** (Beranda, Visi-Misi, Pelayanan Informasi); halaman lain dianalisis dari struktur & pola template.
- Metrik performa bersifat **observasional** (jumlah request, status code, CDN); skor Lighthouse formal (LCP/CLS/TBT angka pasti) disarankan diukur pada tahap benchmarking dengan akun & lingkungan kontrol.
- Aksesibilitas dinilai dari accessibility tree & inspeksi visual; **audit WCAG penuh** (kontras warna per-elemen, navigasi keyboard end-to-end) disarankan sebagai langkah lanjutan.
- Anomali footer dilaporkan sebagai **indikasi**; verifikasi keamanan mendalam adalah ranah tim teknis/keamanan, bukan lingkup desain.

---

## 10. LANGKAH BERIKUTNYA

1. **Review & approval** laporan ini oleh PT Bening Semesta sebelum dimasukkan ke Laporan Pendahuluan.
2. Lanjut ke **Fase 1.2 — User Requirement** (wawancara/workshop), memakai temuan audit ini sebagai input.
3. Update **STATUS PROGRESS** di `PANDUAN_KERJA_UIUX_KLH.md`: tandai `1.1 Laporan Audit` → selesai.
4. **Kunci Bab 2 sebagai instrumen resmi proyek.** Metodologi ini menjadi acuan tunggal penilaian; setiap perubahan kriteria/bobot setelah baseline ditetapkan akan membatalkan komparabilitas skor.
5. **Jadwalkan re-audit pada Fase 4** (Pengujian & QA) mengikuti protokol §2.8, dengan keluaran tabel *Sebelum → Sesudah* per kriteria sebagai bukti peningkatan untuk Laporan Akhir & BAST.
6. **Gunakan §2.7 sebagai acceptance criteria desain.** Target per kriteria (K1–K8) sebaiknya dirujuk sejak Fase 2 agar keputusan desain terarah pada skor yang ingin dicapai, bukan dinilai belakangan.

---

### Design Tokens (referensi konsistensi deliverable)
`Primary KLH Green: #1B7A4B` · `Ikon: CoreUI Icons (MIT)` · `Charts: Chart.js` · `Aksesibilitas: WCAG 2.1 AA, Lighthouse ≥ 90` · `Responsif: desktop/tablet/mobile`

*Disusun untuk memenuhi KAK poin 33 (Pedoman Pengumpulan Data Lapangan) dan menjadi komponen "Analisis Website/Sistem Eksisting" pada Laporan Pendahuluan (Termin I).*
