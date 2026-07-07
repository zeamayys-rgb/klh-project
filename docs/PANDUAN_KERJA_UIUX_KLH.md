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
- [~] 2.4 Prototype interaktif *(**Modul 01 · Website Utama ✓**, **Modul 02 · PPID Web ✓**, dan **Modul 03 · Omni Channel Dashboard ✓** selesai sebagai prototipe HTML klikabel — lihat Log Deliverable; berikutnya: PPID Mobile 8 layar Flutter)*
- [x] 2.5 Design System *(`Design_System_KLH_BPLH.html` + `.png` 2x + `design.md` — 8 seksi, 13 komponen)*
- [ ] 2.6 BA Persetujuan Desain

**Fase 3 — Konten UI**
- [ ] 3.1 Aset konten UI
- [ ] 3.2 Layout responsif
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
