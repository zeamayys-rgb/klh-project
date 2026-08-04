# PANDUAN KERJA — UI/UX Designer · Proyek KLH/BPLH
> **File ini adalah CONTEXT PRIMER.** Upload file ini di awal setiap chat baru sebagai pengganti membaca seluruh proposal. Cukup satu file ini, hemat token.

---

## CARA PAKAI FILE INI (BACA DULU — UNTUK CLAUDE & ABDAN)

**Instruksi untuk Claude di chat baru:**
1. Baca file ini lebih dulu untuk memahami konteks proyek, peran, dan posisi pekerjaan saat ini.
2. **WAJIB:** Sebelum mengerjakan fase apa pun, MINTA/BACA dahulu deliverable dari fase-fase SEBELUMNYA yang sudah dikerjakan (lihat kolom "File Output" di setiap fase). Jangan mulai dari nol — desain harus konsisten & berkelanjutan dengan hasil sebelumnya.
3. Jika Abdan menyebut "lanjut fase X", langsung buka bagian Fase X di file ini, cek prasyarat (deliverable fase sebelumnya), lalu kerjakan point demi point.
4. Selalu pakai **Design Tokens** (lihat bagian bawah) agar konsisten lintas semua deliverable.
5. Setiap selesai 1 deliverable, ingatkan Abdan untuk **update bagian "STATUS PROGRESS"** di file ini (centang ☑) dan simpan output ke folder kerja.

**Instruksi untuk Abdan:**
- Simpan semua output desain di satu folder (mis. `KLH-UIUX/`) dengan penamaan konsisten (lihat "Konvensi Penamaan File").
- Di chat baru: upload file ini **+** file deliverable fase sebelumnya yang relevan. Tidak perlu upload ulang seluruh proposal.
- Update checklist STATUS PROGRESS setiap selesai 1 point.

---

## KONTEKS PROYEK (RINGKAS)

| Item | Detail |
|---|---|
| **Klien** | Kementerian Lingkungan Hidup / Badan Pengendalian Lingkungan Hidup (KLH/BPLH) |
| **Vendor** | PT Bening Semesta |
| **Peran saya** | Abdan — UI/UX Designer (Desain Grafis) · 3.0 Man-Month |
| **Sertifikasi** | Figma Certified · Google UX Design |
| **Durasi** | 3 bulan pengerjaan + 4 bulan pendampingan pasca-proyek |
| **Tools** | Figma (desain) · ClickUp (manajemen) |
| **Metodologi** | Design Thinking / UCD (fase desain) + Agile-Scrum, sprint 2 mingguan (fase dev) |
| **Website eksisting** | https://kemenlh.go.id — framework eksisting CodeIgniter → target Laravel |
| **Skor heuristik eksisting** | Grade D (~41/100) — basis justifikasi redesign |

### 3 Produk × Modul yang Didesain
1. **Website Utama KLH/BPLH** — Beranda, Profil (visi-misi, struktur s/d Eselon 2, LHKPN, Zona Integritas), Program (7), Pelayanan Publik (7), PPID, Informasi, Chat Bot AI.
2. **Website & Mobile PPID** (Flutter untuk mobile) — Beranda (info berkala/serta-merta/setiap saat/dikecualikan), Profil PPID, Regulasi, Layanan Informasi (DIP/DIK), Permohonan (login/akun/unggah), Lacak Pemohon, FAQ, Chat Bot AI.
3. **Dashboard Omni Channel** — Statistik pengunjung & interaksi, monitor kanal, grafik aktivitas, performa sistem, unified inbox, routing & auto-reply, analytics, ticketing/SLA, reporting, role management.

### Prinsip Kunci (selalu diterapkan)
- **Citizen-centric IA**: menu by user-intent, bukan struktur birokrasi. Hindari akronim internal (mis. "Dit. PLTTDLB3").
- **Design System terpadu**: 1 bahasa visual & komponen reusable lintas 3 produk.
- **Aksesibilitas WCAG 2.1 AA**: kontras, navigasi keyboard, label ARIA, alt text, target Lighthouse ≥ 90.
- **PPID digitization**: ganti proses manual (email/Word) → submission & tracking online.
- **Hindari ketergantungan domain pihak ketiga** (Canva/Google Sites) untuk konten resmi.
- Setiap keluaran **WAJIB approval pengguna jasa** sebelum lanjut.

---

## ALUR FASE (PETA BESAR)

```
FASE 1 ──> FASE 2 ──> FASE 3 ──> FASE 4 ──> FASE 5 ──> PASCA
Analisis   Desain &   Konten     Uji &      Dok &      Pendampingan
Kebutuhan  Design Sys UI         Refinement Serah Trm  (4 bulan)
(Bln 1)    (Bln 1-2)  (Bln 2-3)  (Bln 3)    (Bln 3)
```
**Dependensi:** tiap fase butuh output fase sebelumnya. Jangan loncat tanpa cek prasyarat.

---

# FASE 1 — Inisiasi & Analisis Kebutuhan
**Timeline:** Bulan 1 · **Prasyarat:** — (fase awal)

| # | Point Pekerjaan | Output | File Output (simpan sebagai) |
|---|---|---|---|
| 1.1 | Audit website eksisting (kemenlh.go.id): struktur, navigasi, responsivitas, konsistensi, aksesibilitas, kecepatan + inventarisasi konten/tautan | Laporan Audit/Analisis | `F1_Laporan-Audit.md` |
| 1.2 | Identifikasi kebutuhan pengguna (wawancara/workshop) → User Requirement | Dok. User Requirement | `F1_User-Requirement.md` |
| 1.3 | Penyusunan User Persona & User Journey | Dok. User Needs | `F1_Persona-Journey.md` |
| 1.4 | Prioritisasi fitur dengan MoSCoW (Must/Should/Could/Won't) | Daftar prioritas fitur | `F1_MoSCoW.md` |

**Catatan:** Heuristic evaluation (Nielsen + WCAG 2.1 AA + SPBE/GDS) sudah ada → Grade D ~41/100. Gunakan sebagai dasar audit.
**Checkpoint akhir fase:** kontribusi ke Laporan Pendahuluan (disetujui akhir Bulan 1).

---

# FASE 2 — Perancangan UI/UX & Design System ⭐ (FASE INTI)
**Timeline:** Bulan 1–2 · **Prasyarat:** BACA `F1_User-Requirement.md`, `F1_Persona-Journey.md`, `F1_MoSCoW.md`

| # | Point Pekerjaan | Output | File Output |
|---|---|---|---|
| 2.1 | User Flow & Arsitektur Informasi (IA) seluruh produk — citizen-centric, Mega Menu | User Flow / IA | `F2_UserFlow-IA.md` / Figma |
| 2.2 | Wireframe seluruh fitur (Web Utama, PPID web & mobile, Dashboard) | Wireframe | Figma + `F2_Wireframe-notes.md` |
| 2.3 | Mockup high-fidelity seluruh halaman | Mockup | Figma + export PNG |
| 2.4 | Prototype interaktif (Figma) | Prototype | Figma (link) |
| 2.5 | **Design System**: komponen UI, tipografi, warna, grid — identitas KLH | Design System | `F2_DesignSystem.html` + Figma |
| 2.6 | Usulan alternatif desain → presentasi (didukung MP) | BA Persetujuan Desain | (MP) |

**Komponen UI wajib (reusable):** sidebar nav, top navbar, notification panel, search bar, user profile dropdown, widget cards, data tables, interactive charts, filter panel, responsive layout (desktop/tablet/mobile).

**Sudah ada (jangan buat ulang dari nol — pakai sebagai basis):**
- Design System HTML (KLH green #1B7A4B, CoreUI Icons, Chart.js)
- Dashboard Omni Channel mockup HTML
- Homepage redesign HTML
→ semua sudah dirender ke PNG resolusi tinggi (Lampiran C / Form T-5).

**Checkpoint akhir fase:** Berita Acara Persetujuan Desain.

---

# FASE 3 — Pengembangan Konten UI
**Timeline:** Bulan 2–3 · **Prasyarat:** BACA `F2_DesignSystem.*`, mockup & prototype final (Fase 2)
**Peran:** pendukung (lead di Software Engineer) — fokus saya pada aset & konsistensi.

| # | Point Pekerjaan | Output | File Output |
|---|---|---|---|
| 3.1 | Pengembangan elemen konten UI: teks UI/microcopy, ikon, ilustrasi, komponen visual | Aset konten UI | `F3_Assets/` (ikon, ilustrasi) |
| 3.2 | Layouting responsif & adaptif (desktop/tablet/mobile) | Spesifikasi layout | `F3_Layout-Spec.md` |
| 3.3 | Integrasi konten dgn prinsip usability & UX + branding instansi | Pedoman konten | bagian dari design system |
| 3.4 | Handoff ke Software Engineer (spesifikasi + aset) | Dok. Handoff | `F3_Handoff.md` + Figma Dev Mode |

**Checkpoint:** frontend ≥85% pada gerbang Termin II.

---

# FASE 4 — Pengujian, Evaluasi & Refinement
**Timeline:** Bulan 3 · **Prasyarat:** BACA `F3_Handoff.md`, modul hasil dev, mockup final

| # | Point Pekerjaan | Output | File Output |
|---|---|---|---|
| 4.1 | Dukung pengujian fungsi UI, kompatibilitas browser, responsif mobile | (kontribusi) Laporan Uji | `F4_UI-Test-notes.md` |
| 4.2 | Usability Testing & UAT bersama pengguna jasa | Laporan UAT | `F4_Laporan-UAT.md` |
| 4.3 | Evaluasi hasil desain berdasarkan feedback pengguna | Daftar temuan | bagian Laporan UAT |
| 4.4 | Refinement / penyempurnaan desain UI sesuai hasil uji | Desain final (revisi) | Figma (versi final) |

**Checkpoint:** daftar perbaikan ditutup, desain final disetujui.

---

# FASE 5 — Dokumentasi & Serah Terima
**Timeline:** Bulan 3 · **Prasyarat:** BACA semua deliverable Fase 2 & 4 (final)

| # | Point Pekerjaan | Output | File Output |
|---|---|---|---|
| 5.1 | Dokumen desain UI/UX lengkap & sistematis | Dok. Desain UI/UX | `F5_Dok-Desain-UIUX.md/docx` |
| 5.2 | UI Guideline / Style Guide | Style Guide | `F5_Style-Guide.html/pdf` |
| 5.3 | Kontribusi Laporan Akhir & dukungan BAST | (kontribusi) | (MP/Admin) |

**Checkpoint:** Dokumentasi & BAST · sistem live.

---

# PASCA-PROYEK — Pendampingan (4 Bulan)
**Prasyarat:** seluruh dokumen final tersedia.
- Konsultasi teknis & rekomendasi perbaikan desain.
- Penyempurnaan minor sesuai kebutuhan instansi.
- Output: `PASCA_Konsultasi-Log.md` (catatan tiap sesi).

---

## DESIGN TOKENS (KONSISTENSI — SELALU PAKAI INI)

```
Primary (KLH Green) : #1B7A4B
Icon set            : CoreUI Icons (MIT, SVG line) — JANGAN emoji untuk deliverable resmi
Charts              : Chart.js (inline UMD bundle, bukan CDN) — animation:false saat render
Aksesibilitas       : WCAG 2.1 AA · target Lighthouse ≥ 90
Responsif           : desktop / tablet / mobile (wajib ketiganya)
```

**Catatan teknis rendering (bila pakai bash/Playwright untuk export PNG):**
- `device_scale_factor=2`, `wait_for_timeout(1500–2500ms)`, Chart.js `animation:false`.
- Chart.js & ikon di-embed inline (CDN tidak reliabel di lingkungan terisolasi); npm registry OK.

---

## KONVENSI PENAMAAN FILE
```
F<no fase>_<NamaDeliverable>.<ext>
contoh: F2_DesignSystem.html · F4_Laporan-UAT.md
Aset    : F3_Assets/icon-*.svg
Versi   : tambahkan _v2, _final bila revisi
```

---

## STATUS PROGRESS (UPDATE TIAP SELESAI — centang ☑)

**Fase 1 — Analisis**
- [x] 1.1 Laporan Audit *(`F1_Laporan-Audit.md` — Grade D ~41/100, 4.6/10)*
- [x] 1.2 User Requirement *(`F1_User-Requirement.md` — stakeholder map §2, UR-ID §4, tabel telusur audit→requirement, kebutuhan non-fungsional)*
- [x] 1.3 Persona & Journey *(`F1_Persona-Journey.md` — 5 persona P1–P5, 3 journey map)*
- [x] 1.4 MoSCoW *(`F1_MoSCoW.md` — 21 UR-ID, scoring 3 sumbu)*

**Fase 2 — Desain & Design System**
- [x] 2.1 User Flow & IA *(`F2_UserFlow-IA.md` — 4 menu utama citizen-centric, mega menu, Flow A serah-terima SP4N-LAPOR!)*
- [x] 2.2 Wireframe *(`F2_Wireframe-notes.md` — 26 frame lo-fi + §7 dokumentasi hi-fi)*
- [~] 2.3 Mockup high-fidelity *(Figma: 4 hero screen HF-WEB-01 / HF-PPID-01 / HF-OMNI-01 / HF-PPID-M01 ✓ — menunggu feedback sebelum scaling 61 halaman)*
- [~] 2.4 Prototype interaktif *(**Modul 01 · Website Utama ✓**, **Modul 02 · PPID Web ✓**, **Modul 02b · PPID Mobile ✓** (`klh-ppid-mobile/`, 8 layar UI HTML), dan **Modul 03 · Omni Channel Dashboard ✓** selesai sebagai prototipe HTML klikabel — lihat Log Deliverable; berikutnya: implementasi Flutter + backend PPID Mobile di luar lingkup UI)*
- [x] 2.5 Design System *(`Design_System_KLH_BPLH.html` + `.png` 2x + `design.md` — 8 seksi, 13 komponen)*
- [ ] 2.6 BA Persetujuan Desain

**Fase 3 — Konten UI**
- [x] 3.1 Aset konten UI *(`Design_System_KLH_BPLH_2_Komponen.html` — halaman 02 DS: 71 ikon produksi, aset lambang/leafmark/placeholder/foto, 70+ komponen dari 3 modul, peta komponen×modul)*
- [x] 3.2 Layout responsif *(`Design_System_KLH_BPLH_2_Layout.html` — halaman 03 DS: tangga breakpoint resmi, grid & kontainer, 7 template halaman, pola adaptif komponen, checklist QA layout)*
- [ ] 3.3 Pedoman konten
- [ ] 3.4 Handoff

**Fase 4 — Uji & Refinement**
- [ ] 4.1 UI Test notes
- [ ] 4.2 Laporan UAT
- [ ] 4.3 Evaluasi feedback
- [ ] 4.4 Refinement final

**Fase 5 — Dokumentasi**
- [ ] 5.1 Dok Desain UI/UX
- [ ] 5.2 Style Guide
- [ ] 5.3 Laporan Akhir

**Pasca**
- [ ] Pendampingan 4 bulan

> Keterangan: `[ ]` belum · `[~]` proses · `[x]` selesai

### LOG DELIVERABLE

**4 Agu 2026 — Revisi M01 dari review user (lanjutan) SELESAI**
- **Menu Program flat:** judul section "Penghargaan & Apresiasi" / "Kinerja & Partisipasi" dihapus dari dropdown Program (mega menu desktop + drawer mobile) — renderer navbar.js kini melewati heading bila grup tanpa `title`; menu lain tidak berubah.
- **Layanan redirect baru:** ISPU — Kualitas Udara → `ispu.kemenlh.go.id/webv5/#/` dan Onlimo — Kualitas Air → `onlimo.kemenlh.go.id/app/` ditambahkan ke mega menu (grup Data, Lab & Pengujian) + kartu halaman `data-lab-pengujian.html` (menggantikan kartu "Pemantauan Kualitas Udara & Air" yang tanpa tautan), pola `ext: true` dengan dialog handoff.
- **Halaman baru `pages/layanan/ptsp.html`:** profil PTSP Lingkungan Hidup — visi & misi, tugas & fungsi (3 kartu), Standar Pelayanan Perizinan (poster resmi + ringkasan teks: dasar hukum, persyaratan & waktu 1 hari kerja, biaya PNBP Rp 3.675.000/Rp 2.780.000, produk layanan), Maklumat Layanan (poster), kontak pengaduan (email/situs↗/WA). Konten & kedua poster diambil dari `pelayananterpadu.kemenlh.go.id` (poster diekstrak dari base64 halaman sumber → `assets/img/ptsp-standar-pelayanan.jpg`, `ptsp-maklumat-layanan.jpg`). Tautan PTSP di mega menu (menu.js) + kartu Perizinan & Pengadaan (layanan.js) diarahkan ke halaman baru. Aksi pengisian formulir permohonan → `ptsp.kemenlh.go.id` (dialog handoff): tombol "Isi Formulir Permohonan" di hero + pita CTA `cta-band` sebelum kontak.
- Verifikasi: Playwright `ptsp.html` 1440px + 390px — nol error JS, nol overflow, semua link/img internal 200, dialog `data-ext` teruji; reveal kartu Visi dicek khusus (artefak screenshot, tampil normal saat scroll nyata).

**3 Agu 2026 — Revisi M01 dari review user (Excel `docs/administrative/Mapping-Hirarki-Menu-KLH.xlsx`, tab "Web Redesign") SELESAI**
- **2.3 Struktur Organisasi:** susunan kartu jadi foto pejabat (slot `image-slot` lingkaran, siap diisi foto asli) → jabatan → nama → LHKPN; label "Pimpinan/Pimpinan Tinggi Madya/Pratama" dihapus (juga di `detail-jabatan.html`); susunan pejabat sesuai review: Menteri, Wamen, Sekretariat Kementerian/Sekretariat Utama, 5 Deputi (Tata Lingkungan & SDA Berkelanjutan · Pengendalian Pencemaran & Kerusakan LH · Pengelolaan Sampah, Limbah & B3 · Pengendalian Perubahan Iklim & Tata Kelola NEK · Penegakan Hukum LH), Inspektorat Utama (Ittama); dua Kapus level-3 lama dihapus.
- **3.1 Kalpataru:** `detail.html?p=kalpataru#ikut` disinkronkan dengan `kalpataru.html` — langkah & tombol kini via SITARU (`sitaru.kemenlh.go.id`), bukan PPID.
- **3.2 PROPER:** halaman khusus baru `pages/program/proper.html` (desain mengikuti pola Kalpataru) — definisi PROPER sesuai review, linimasa sejarah 1995/1998/2002/2019 + tautan `proper.kemenlh.go.id/proper/sejarah`, kartu Kriteria Ketaatan & Beyond Compliance, 5 kartu Peringkat Warna (Emas–Hitam), Cara Ikut Serta 4 langkah SIMPEL, tombol Daftar → `simpel.kemenlh.go.id/2023/landing`.
- **3.3 Adipura:** langkah baru (SIPSN → klarifikasi → penilaian dokumen & TPA → penganugerahan), tombol "Daftar/Ajukan Usulan" DIHAPUS, tautan "Data lengkap Adipura" → `kemenlh.go.id/contents/14/Adipura`; desc menyebut 4 jenjang (Kencana/Adipura/Sertifikat/Kota Kotor — sumber laman resmi).
- **3.4 Adiwiyata:** halaman khusus baru `pages/program/adiwiyata.html` (pola Kalpataru) — konten dari `kemenlh.go.id/contents/15/Adiwiyata` (tahapan, jenjang SD–SMK, manfaat, Permen LH 5/2025), registrasi via SIDIA.
- **3.5 Ekonomi Sirkular:** halaman khusus baru `pages/program/ekonomi-sirkular.html` (pola ProKlim/Nirwasita) — konten dari `kemenlh.go.id/contents/18/Ekonomi-Sirkular` (dari linear menuju sirkular, 4 prinsip utama, manfaat strategis, Cara Ikut Serta 4 langkah, peran KLH & BPLH); hero pakai infografis `assets/img/pragram_ekonomisirkular.png` (frame 1:1 agar teks infografis tidak terpotong); menu.js + `page:` di content.js diarahkan ke halaman baru, `detail.html?p=ekonomi-sirkular` tetap sebagai ringkasan.
- **3.6 Adipura:** halaman khusus baru `pages/program/adipura.html` (pola ProKlim) — restrukturisasi konten dari materi user + `kemenlh.go.id/contents/14/Adipura`: sejarah 1986–2025 (kartu linimasa), latar belakang Adipura 8.0, mekanisme 5 tahap + prasyarat (tanpa TPS liar, TPA controlled landfill), bobot pemantauan 20/30/50 dengan sub-bobot, 4 kriteria penghargaan + ambang nilai (Kencana >85% · Adipura 75–85% · Sertifikat 60–74% · Kota Kotor <60%), tata laksana submit data (4 tautan bit.ly ber-`data-ext`), penyederhanaan kriteria 291→88, pembaharuan sistem (digital, real-time, akurasi); hero pakai foto `program_adipura.jpg`; menu.js + `page:` di content.js diarahkan ke halaman baru, `detail.html?p=adipura` tetap sebagai ringkasan. Catatan: frasa sumber "Peraturan Menteri tentang Adiwiyata" pada tahap klarifikasi ditulis netral "Peraturan Menteri" (diduga typo sumber — perlu konfirmasi).
- **4.8 SRN PPI:** link error `srn.menlhk.go.id` → **`srn.kemenlh.go.id`** (terverifikasi 200); sekalian LPSE `lpse.menlhk.go.id` (mati) → **`spse.inaproc.id/kemenlh`** di menu.js + layanan.js.
- Teknis: `KLH.programs` kini punya field `page` (halaman khusus), `daftar` (objek eksternal / `null` = tanpa tombol), `info`; helper `KLH.progHref()` dipakai beranda/indeks program/pencarian/detail agar semua tautan program otomatis ke halaman khusus.
- Verifikasi: Playwright **10 halaman × 2 viewport nol error JS & nol overflow** (404 sidecar `.image-slots.state.json` = bawaan image-slot, benign); dialog `data-ext` teruji SIMPEL/SIDIA/SITARU; tombol Adipura terverifikasi hilang. Belum ditindaklanjuti (butuh konfirmasi klien, kolom Remark BGS): konten menu baru 2.4/4.1/4.4/4.6/5.5/5.6/5.7, halaman news SP4N-LAPOR & Agenda. Target redirect Laboratorium/JDIH/E-Learning SUDAH dikonfirmasi & diterapkan (lihat entri di bawah).
- **Redirect langsung Laboratorium/JDIH/E-Learning** (konfirmasi user 3 Agu 2026): tiga layanan redirect kini menaut langsung ke situs eksternal dengan dialog handoff `data-ext` — Laboratorium Pusarpedal → `pusarpedal.kemenlh.go.id`, JDIH → `jdih.kemenlh.go.id`, E-Learning → `p2sdm.kemenlh.go.id` — tanpa singgah di halaman kelompok layanan. Titik yang diubah: mega menu + footer "Tautan Sistem" (menu.js), kartu layanan di halaman kelompok (layanan.js, pola `ext: true`), kartu akses cepat "JDIH Regulasi" di beranda, dan tautan "Buka JDIH" di `profil/tugas-fungsi.html`. Halaman kelompok `regulasi-pembelajaran.html` & `data-lab-pengujian.html` tetap ada (masih memuat layanan lain: e-LHKPN, Permen, SRN PPI, IDXCarbon, pemantauan kualitas udara).

**10 Jul 2026 — Perbaikan seluruh temuan audit 3 modul SELESAI** (permintaan Abdan — termasuk pengecualian eksplisit status final M01)
- **M01 (A1-01…A1-12):** overflow utilbar 390px, kontras `--ink-400`→`--ink-500`, dialog `data-ext` global di `main.js` + focus trap, target sentuh 44px (utilbar/pager/footer), penanda "Prototipe · konten contoh" global di footer + template detail, `aria-label` toggle kontras, `<h5>`→`<h2>/<h3>`, token turunan warna mentah, satuan statistik AA, emoji/✓ diganti ikon, `CLAUDE.md` primary `#005952`. A1-13 (kerangka dirender JS) dicatat sebagai batasan handoff di README M01.
- **M02 (A2-07…A2-10):** h1 ganda `daftar.html`, escape `"` nama berkas, Promise clipboard, regex registrasi 6 digit.
- **M03 (A3-06…A3-14):** listbox→tombol+`aria-current`, tablist→`aria-pressed`, target sentuh popover/switch 44px, kontras stempel waktu, copy 404 tanpa query, paste OTP terdistribusi, `aria-invalid`, `aria-live` dipersempit, arah KPI `turun-baik`.
- Verifikasi: Playwright **94 render (47 halaman × 2 viewport) nol error JS & nol overflow**; 40 cek terarah lolos (focus trap, regresi Esc drawer/mega, ukuran target terukur, paste OTP, aria state). Detail per temuan di bagian "Tindak Lanjut" masing-masing `docs/AUDIT_Modul-0*.md`; bukti baru `docs/audit-bukti/modul-01/fix-*.png`. `klh-ppid-web.zip` & `klh-omni-dashboard.zip` diperbarui.

**7 Jul 2026 — Modul 04 · CMS Konten (prototipe HTML, permintaan tambahan) SELESAI** → folder `klh-cms/`
- **CMS admin lintas produk** (di luar lingkup 3 modul KAK — permintaan Abdan): kelola berita/pengumuman/agenda Website Utama, DIP/regulasi/FAQ PPID, pustaka media, pengguna & peran. **Alur editorial Draf → Menunggu Review → Terbit/Terjadwal** menerjemahkan prinsip "wajib approval"; Kontributor tidak bisa menerbitkan, konten PPID wajib disetujui Verifikator PPID.
- 8 halaman: login (captcha, sesi `klh-cms-sesi`) → dashboard (KPI, antrean review lintas produk, log aktivitas, kartu 3 produk + pratinjau) → daftar konten (filter status `?status=`, cari, hapus) → **editor** (slug hidup, toolbar demo, foto unggulan dari pustaka + alt wajib, jadwal tayang, panel status) → agenda (3 jenis, form tervalidasi) → PPID (tab DIP/Regulasi/FAQ, klasifikasi UU 14/2008, dialog unggah→review) → media (**alt text wajib** — ditolak tanpa alt) → pengguna (4 peran + matriks izin).
- Arsitektur: fondasi + app shell disalin/diadaptasi dari Modul 03 (`cmsshell.js` — nav CMS, badge antrean, notifikasi Review/Sistem, pencarian global); data dummy terpusat `assets/js/data/cms.js`; 9 foto media = salinan pustaka M01 agar folder mandiri; jangkar waktu 7 Jul 2026 10.15 WIB.
- Verifikasi: Playwright 9 varian URL × (1440px + 390px) **nol error JS, nol overflow**, **32 uji interaksi lolos**. Satu bug pola lama tertangkap & diperbaiki saat verifikasi (grid inline menimpa media query — pelajaran A2-01). Kartu "04 · CMS Konten" ditambahkan ke `index.html` root.

**7 Jul 2026 — Fase 3 point 3.1 & 3.2 SELESAI: Design System v2.1 jadi suite 3 halaman** → `docs/Design_System_KLH_BPLH_2.html` (+2 halaman baru + `docs/ds-assets/`)
- **Restrukturisasi:** aset visual & komponen DIPISAH dari fondasi. Hal. **01 Fondasi** (`Design_System_KLH_BPLH_2.html`, dirampingkan 618→260KB): prinsip/identitas, warna, tipografi, grid-spasi-elevasi, WCAG. Hal. **02 Komponen & Aset** (`_Komponen.html`, point 3.1): seksi ikon/dasar/navigasi/data/umpan-balik/pola/situs/aplikasi dipindah ke sini + diperkaya komponen nyata ketiga modul. Hal. **03 Standar Layout** (`_Layout.html`, point 3.2). Nav tab lintas halaman + subnav lengket per halaman; tautan Berikutnya/Sebelumnya.
- **3.1 — Aset & komponen dari 3 modul:** galeri **71 ikon produksi** (57 inti + 14 omni, digenerate dari `icons.js` modul yang di-embed), aset lambang (3 berkas) + `KLH.leafmark()` + placeholder `.ph` + 9 foto berita; komponen baru terdokumentasi: navbar sub-brand PPID, kartu radio pemohon, captcha, OTP, konfirmasi+nomor registrasi, timeline Ditolak, badge/timer SLA, heatmap, matriks peran, panel notifikasi, **Unified Inbox 3 panel (WF-04) mini**, kartu status kanal, saklar pengaturan, pita CTA, bagan organisasi, daftar langkah; + tabel **Peta Komponen × Modul** (ketertelusuran; fondasi terverifikasi byte-identik lintas modul).
- **3.2 — Standar layout:** tangga breakpoint resmi (<768 / 768–1023 / 1024–1279 / ≥1280 + minor 640/900), kontainer 1200/1380/1440, irama spasi, **7 template halaman** (marketing, indeks+sidebar, form stepper, auth split, app shell, inbox 3-panel, dashboard KPI) dengan diagram desktop+mobile, tabel pola adaptif 13 komponen, checklist QA layout dari temuan audit (overflow 390, target 44px, `[hidden]`, `min-width:0`, fokus drawer, reduced-motion).
- **Aset bersama `docs/ds-assets/`:** `logo-klh.png` (didekode dari base64), `chart.umd.js` (Chart.js 4.4.1 diekstrak — kini TIDAK lagi tertanam di hal. Fondasi), `klh-icons.js` (salinan icons.js modul, superset omni).
- Verifikasi: Playwright 3 halaman × (1440px + 390px) **nol error JS, nol overflow**, 11 uji interaksi lolos (galeri 71 ikon, chart, akordeon, tab, chip, mode gelap, kontras, perbesar teks, nav antarhalaman), link-check 9 target internal, uji `file://` 3 halaman bersih. Catatan: `design.md` belum menyebut struktur 3 halaman (kandidat pemutakhiran kecil).

**7 Jul 2026 — AUDIT Desain & QA Modul 02 · PPID Web SELESAI (Mayor semua diperbaiki)** → `docs/AUDIT_Modul-02_PPID-Web.md` + `klh-ppid-web.zip` (diperbarui)
- Cakupan: 15 halaman × Playwright 1440px & 390px (nol error JS, cek scrollWidth), link-check 233 target internal, **49 uji interaksi otomatis** (stepper WF-02 E2E → konfirmasi → lacak, 6 skenario `?id=`, keberatan berkonteks, DIP filter+cari, FAQ, login demo→riwayat→keluar, chatbot, `data-ext`, `file://` 2 hlm), analisis statis token/a11y; fondasi terverifikasi **byte-identik** M01.
- Hasil: **0 Kritis · 6 Mayor · 2 Minor · 2 Saran** — skor dimensi: Token 5 · Konsistensi 5 · A11y 4 · Responsif 4 · Fungsional 4 (rata-rata 4,4).
- **Mayor semuanya DIPERBAIKI + verifikasi ulang bersih (30 render, 49/49 interaksi):** A2-01 overflow 390px beranda & laporan-kinerja (`minmax(0,1fr)` stat-strip + `min-width:0` kartu grid) · A2-02 lacak ID baru hasil formulir → "tidak ditemukan" (kini fallback tahap 1 "Diterima" demo) · A2-03 fokus ke error pertama di masuk/keberatan/konsultasi · A2-04 target sentuh <44px tombol Aksesibilitas utilbar & tutup drawer · A2-05 urutan regex chatbot (pertanyaan SLA terjawab aturan generik) · A2-06 chip filter DIP tanpa `aria-pressed`.
- Minor/Saran dilaporkan (A2-07…A2-10: dua `h1` DOM di daftar.html, escape kutip aria-label berkas, Promise clipboard, regex keberatan 4–6 digit). Bukti: `docs/audit-bukti/modul-02/` (38 berkas). Berkas diubah: `pages.css` · `lacak.html` · `masuk.html` · `keberatan.html` · `konsultasi.html` · `laporan-kinerja.html` · `dip.html` · `widgets.js`. Catatan lintas modul: pola chip tanpa `aria-pressed` juga ada di M01 (`pages/program/index.html`) — kandidat perbaikan M01 bila disetujui.

**7 Jul 2026 — AUDIT Desain & QA Modul 03 · Omni Channel Dashboard SELESAI (Kritis & Mayor diperbaiki)** → `docs/AUDIT_Modul-03_OmniChannel.md` + `klh-omni-dashboard.zip` (diperbarui)
- Cakupan: 12 halaman + panel notifikasi, statis + runtime Playwright 1440px & 390px — 24 cek halaman **nol error JS & tanpa overflow**; interaksi kunci lolos semua; `tiket-detail.html?t=` teruji SLA aman/mendekati/lewat + ID invalid + tanpa query; `file://` 2 halaman.
- Hasil: **1 Kritis · 3 Mayor · 5 Minor · 5 Saran** — skor dimensi: Token 5 · App shell 4 · A11y 3→4 · Responsif 5 · Fungsional 3→**5** (pasca-perbaikan).
- **Kritis/Mayor semuanya DIPERBAIKI + diverifikasi ulang (20 cek pasca-fix lolos, nol regresi):** A3-01 scrim drawer memblokir seluruh klik setelah tutup via scrim/Escape di <1024px → `KLH.setDrawer()` terpusat (scrim, `aria-expanded`, fokus) · A3-02 kartu `kanal.html` hilang permanen (opacity 0) setelah re-render → `data-reveal` dihapus dari markup dinamis · A3-03 fokus tersembunyi tautan sidebar saat drawer tertutup + fokus tak terkelola → `visibility` ikut transisi + fokus dikelola · A3-04 hasil pencarian global tak terjangkau keyboard (blur+180 ms) → `focusout` ber-`relatedTarget` + Escape.
- Minor/Saran dilaporkan di tabel A3-05…A3-14 (ARIA listbox/tablist, target sentuh popover <44px, kontras stempel waktu 10,5px, paste OTP, `aria-invalid`, copy fallback tanpa query, dsb.). Bukti: `docs/audit-bukti/modul-03/` (34 berkas: screenshot semua halaman × 2 viewport, `bug-*`, `fix-*`). Berkas diubah: `appshell.js` · `pages.css` · `kanal.html`.

**7 Jul 2026 — AUDIT Desain & QA Modul 01 · Website Utama SELESAI (laporan saja, modul tidak diubah)** → `docs/AUDIT_Modul-01_Website-Utama.md` + bukti `docs/audit-bukti/modul-01/`
- Cakupan: 20 file HTML sebagai **35 varian URL** (query valid/invalid/tanpa query) × Playwright 1440px & 390px; link-check runtime 101 tautan; 18 uji interaksi; uji `file://`; analisis statis tokens/a11y.
- Hasil: **0 Kritis · 5 Mayor · 6 Minor · 2 Saran** — skor dimensi: Token 4 · Konsistensi 4 · A11y 3 · Responsif 3 · Fungsional **5** (nol error JS, nol tautan putus, semua interaksi lolos).
- Mayor (semua di komponen bersama, perbaikan ≈1 sesi): overflow 390px `.utilbar` di semua halaman (A1-01) · kontras teks meta `--ink-400` 3,92:1 (A1-02) · dialog `data-ext` tidak merata — hanya 4 hlm layanan (A1-03) · target sentuh <44px utilbar/footer (A1-04) · penanda "konten contoh" belum merata, termasuk LHKPN fiktif (A1-05).
- Eksekusi perbaikan **menunggu persetujuan** (Modul 01 final). Rekomendasi berlaku juga sbg. lesson-learned Modul 02/03 (pola utilbar/navbar & penanda konten).

**21 Jul 2026 — Modul 02b · PPID Mobile (prototipe UI HTML) SELESAI** → `klh-ppid-mobile.zip`
- Menutup **gap T1 / KAK G1** (Aplikasi Mobile PPID) di **level UI/UX** — 8 layar HTML/CSS/JS di dalam **bingkai perangkat** (390×844 di desktop; penuh-layar ≤460px). Bukan Flutter penuh: implementasi Flutter + backend menyusul (di luar lingkup UI).
- Fondasi & **data `ppid.js` dipakai ulang byte-identik** dari Modul 02 (paritas web–mobile: nomor & status permohonan sama). Khusus modul: `mobile.css` + `app.js` (chrome aplikasi `<klh-statusbar>`/`<klh-appbar>`/`<klh-botnav>` + FAB chat, helper status badge/timeline/dialog eksternal/**toast "push notification"**). `window.KLH_ROOT = ''`.
- Layar: Splash/Onboarding → Masuk (email/sandi/**CAPTCHA**/lupa sandi) → Buat Akun (identitas lengkap 10 field) → Beranda (ringkasan status + aksi cepat + notif) → **Ajukan Permohonan** (stepper 3 langkah: rincian/kronologi singkat → **unggah dokumen** → tinjau & kirim → nomor registrasi) → **Lacak** (timeline `.timeline` + `?id=` + simulasi notif) → Riwayat (saring status) → **Chat Bot AI** (RAG disimulasikan, chip saran).
- Verifikasi: Playwright 9 halaman × (1440px + 390px) **nol error JS**, link-check internal lolos, uji interaksi kunci lolos (login+CAPTCHA, stepper — visibilitas tombol per langkah, unggah berkas, lacak `?id=`, saring riwayat, chat, toast). Perbaikan a11y: `[hidden]{display:none!important}` (mengalahkan `.btn` inline-flex), warna heading splash & status bar brand.
- Bug fix bermakna: atribut `hidden` pada `.btn` tak berlaku karena `.btn{display:inline-flex}` menang spesifisitas → tombol Kirim bocor di langkah 2; diperbaiki global.

**7 Jul 2026 — Modul 03 · Omni Channel Dashboard (prototipe HTML) SELESAI** → `klh-omni-dashboard.zip`
- 13 entri checklist / 12 file HTML (Panel Notifikasi = komponen topbar `<klh-topbar>`, bukan halaman). Struktur datar satu level, `window.KLH_ROOT = ''`.
- Aplikasi **internal** (persona P3 Ratna) — **app shell baru** menggantikan navbar/footer marketing: `<klh-sidebar>` gelap ikon+label (collapsible, `aria-current`, badge, drawer <1024px) + `<klh-topbar>` (pencarian global percakapan/tiket, panel notifikasi eskalasi & sistem, panel aksesibilitas kontras/teks, dropdown profil). Fondasi disalin dari Modul 01; **Chart.js 4.4.1 UMD di-embed lokal** (`assets/js/vendor/chart.umd.js`, `animation:false`) — diekstrak dari Design System, bukan CDN.
- Gelombang A/Must: Login (MFA OTP demo + SSO simulasi + captcha placeholder) → Dashboard KPI (grafik aktivitas & distribusi kanal, performa sistem, tiket perlu perhatian) → **Unified Inbox 3 panel (WF-04)** 15 percakapan × 7 kanal + filter kanal/status/cari + balas ber-template → Ticketing/SLA (tab Open→In Progress→Closed, badge SLA aman/mendekati/lewat) → Detail Tiket `?t=` (**SLA timer hidup** `role="timer"`, eskalasi, disposisi, log) → Reporting (ekspor PDF/Excel/CSV demo, tren SLA).
- Gelombang B/C: Routing & Auto-Reply (6 aturan + 5 template bervariabel), Analytics (heatmap jam×hari deterministik, klik/scroll, device/browser), Role Management (6 peran + matriks 9 izin), Keamanan (kebijakan MFA/SSO + audit trail ber-filter), Manajemen Kanal (status koneksi 7 kanal + otorisasi ulang demo), Profil.
- Data dummy terpusat `assets/js/data/omni.js`: 15 percakapan, 12 tiket SLA bervariasi (termasuk mendekati/lewat tenggat), KPI, 6 peran, 10 log audit, 5 notifikasi. **Jangkar waktu demo 7 Jul 2026 09.30 WIB** menjaga skenario SLA tetap bermakna. Sesi login demo = flag `localStorage` (`klh-omni-sesi`) ber-try/catch.
- Verifikasi: Playwright 12 halaman × (1440px + 390px) **nol error JS**, tanpa overflow 390px, link-check internal lolos, **32 uji interaksi lolos** (login+MFA→redirect, notifikasi filter/tandai-dibaca, pencarian global, kontras & teks 120%, sidebar ciut, filter inbox, kirim balasan+template, tab/filter tiket, SLA timer berdetak, eskalasi→log, ekspor→toast, saklar routing, otorisasi ulang kanal, filter audit, dialog `data-ext`).
- Catatan: mode gelap dashboard (DS §9) belum diimplementasikan — menunggu prioritas klien. Berikutnya: **PPID Mobile (8 layar Flutter)**.

**7 Jul 2026 — Modul 02 · PPID Web (prototipe HTML) SELESAI** → `klh-ppid-web.zip`
- 16 halaman checklist / 15 file HTML (Chat Bot AI PPID = widget `<klh-widgets>` lintas halaman). Struktur datar satu level, `window.KLH_ROOT = ''`.
- Fondasi disalin dari Modul 01 (`tokens.css` + `base.css` + `components.css` + `icons.js` + pola `footer.js`) agar folder mandiri; **navbar varian sub-brand "PPID · KLH/BPLH"** (5 tautan datar, tombol Lacak/Masuk/Ajukan, tautan "← Situs Utama").
- Alur inti pemohon (Gelombang A/Must): Beranda → Masuk/Daftar (captcha placeholder, verifikasi email simulasi) → **form stepper 4 langkah (WF-02)** dengan validasi per langkah & dropzone → Konfirmasi `?id=` → **Lacak (WF-03)** timeline `.timeline` + jalur Ditolak → Keberatan (WF-17, banner konteks).
- Data dummy terpusat `assets/js/data/ppid.js`: 14 DIP, 7 permohonan (status bervariasi; 2 Ditolak beralasan), 9 FAQ, 7 regulasi, 6 DIK. Sesi login demo = flag `localStorage` ber-try/catch (bukan data inti).
- Verifikasi: Playwright screenshot 15 halaman × (1440px + 390px), **nol error JS**, link-check internal lolos, 19 uji interaksi lolos (stepper maju/mundur + validasi + tolak berkas invalid, lacak valid/invalid/ditolak, filter+cari DIP, accordion FAQ, login→riwayat→keluar, dialog `data-ext`).
- **Jembatan M01:** tombol "Buka Portal PPID Online" di `klh-website-utama/pages/ppid.html` kini dapat diarahkan ke `../klh-ppid-web/index.html` (dan demo lacak ke `../klh-ppid-web/lacak.html`) — **Modul 01 belum diubah**, menunggu persetujuan PPK/Tim Teknis.
- Catatan: `docs/F2_UserFlow-IA.md` dirujuk prompt tetapi tidak ada di workspace — IA diambil dari `F2_Checklist-Halaman.md` + `F2_Wireframe-notes.md`.

**7 Jul 2026 — Modul 01 · Website Utama (prototipe HTML) SELESAI** → `klh-website-utama.zip`
- 24 halaman checklist / 20 file HTML — halaman template (`indeks.html?m=` · `detail.html?a=` · `detail.html?p=` · `detail-jabatan.html?id=`) mewakili beberapa entri sekaligus.
- Vanilla HTML+CSS+JS tanpa build step. **Fondasi bersama siap dipakai ulang Modul 02 & 03:** `assets/css/tokens.css` + `base.css` + `components.css` dan `assets/js/components/icons.js`.
- Konvensi kunci: `window.KLH_ROOT` per kedalaman halaman; data dummy terpusat di `assets/js/data/` (pengganti CMS); dialog serah-terima tautan eksternal (`data-ext`) mengimplementasikan Flow A.
- Verifikasi: render Playwright desktop 1440px & mobile 390px, link-check internal lolos, interaksi teruji (mega menu, drawer, kalender navigasi bulan, lacak PPID, pencarian `?q=`, dialog eksternal). Tanpa error JS.
- Konten (artikel, pejabat, agenda, statistik) = dummy berpenanda — menunggu validasi PPK/Tim Teknis.
- **Jembatan Modul 02:** `pages/ppid.html` — tombol "Buka Portal PPID Online" + anchor `#lacak` tinggal diarahkan ke rute Modul 02.

---

## PROMPT CEPAT UNTUK CHAT BARU (copy-paste)
> "Ini panduan kerja proyek UI/UX KLH (terlampir). Saya mau lanjut **Fase __ point __**. Tolong baca panduan ini + deliverable fase sebelumnya yang saya lampirkan, lalu kerjakan point tersebut dengan konsisten memakai design tokens. Jangan mulai dari nol."
