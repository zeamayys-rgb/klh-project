# F1 — User Persona & User Journey
## Fase 1.3 · Persona & Journey Mapping

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** Draft v1 · **Prasyarat terpenuhi:** `F1_Laporan-Audit.md`, `F1_User-Requirement.md`
**Bahan:** Stakeholder Map (§2) + User Requirement ber-ID (§4) dari dokumen 1.2

> **Catatan:** Persona di bawah adalah **persona berbasis bukti** — disintesis dari kelompok stakeholder, temuan audit, dan KAK; bukan dari riset primer berskala. Atribut spesifik (usia, kutipan, frekuensi) bersifat *representatif* dan akan dikalibrasi setelah wawancara/survei Bulan 1.

---

## 1. Tujuan

Menerjemahkan kelompok pengguna dan requirement menjadi **persona yang dapat dirujuk tim** dan **journey map** yang menyingkap titik gesekan (pain) serta peluang (opportunity) per tahap. Output ini memberi konteks manusiawi untuk prioritisasi (1.4) dan keputusan IA/wireframe (Fase 2).

**Rantai:** `Requirement (1.2)` → **`Persona & Journey (1.3 — dokumen ini)`** → `MoSCoW (1.4)` → `IA & Wireframe (Fase 2)`

---

## 2. Ringkasan Persona

| # | Persona | Tipe | Produk utama | UR yang relevan |
|---|---|---|---|---|
| P1 | **Sari** — Warga Pencari Layanan | Eksternal | Website Utama | UR-IA, UR-HOME, UR-SEARCH |
| P2 | **Bayu** — Pemohon Informasi Publik | Eksternal | PPID Web & Mobile | UR-PPID, UR-A11Y, UR-PERF |
| P3 | **Ratna** — Admin PPID / Pengelola Informasi | Internal | PPID + Omni Channel | UR-PPID-04, UR-OMNI |
| P4 | **Damar** — Jurnalis / Akademisi | Eksternal | Website Utama (data) | UR-CONTENT-01, UR-SEARCH |
| P5 | **Indah** — Admin Konten / Humas | Internal | Website Utama (CMS) | UR-GOV-01/02, UR-CONTENT |

---

## 3. Persona Detail

### P1 — Sari · Warga Pencari Layanan
- **Profil:** 34 th, ibu rumah tangga & wirausaha kecil, akses via smartphone, literasi digital menengah.
- **Tujuan:** lapor masalah lingkungan (mis. pencemaran), cek indeks kualitas udara, cari layanan tanpa paham struktur kementerian.
- **Frustrasi (dari audit):** menu pakai nama direktorat asing; beranda penuh berita tertumpuk; layout rusak di HP; loading lama.
- **Kebutuhan kunci:** UR-IA-01, UR-IA-03, UR-HOME-01, UR-PERF-02.
- **Kutipan representatif:** *"Saya cuma mau lapor — kenapa harus tahu nama direktoratnya dulu?"*

### P2 — Bayu · Pemohon Informasi Publik (PPID)
- **Profil:** 41 th, aktivis LSM lingkungan, rutin mengajukan permohonan informasi, sebagian dengan keterbatasan low-vision.
- **Tujuan:** ajukan permohonan informasi & lacak statusnya tanpa proses manual.
- **Frustrasi (dari audit):** harus kirim email/Word manual; tak ada form online; tak ada tracking; tak ada dukungan kontras/teks besar.
- **Kebutuhan kunci:** UR-PPID-01, UR-PPID-02, UR-PPID-03, UR-A11Y-02.
- **Kutipan representatif:** *"Setelah kirim email, saya buta — tidak tahu permohonan saya diproses atau tidak."*

### P3 — Ratna · Admin PPID / Pengelola Informasi
- **Profil:** 38 th, staf pengelola informasi, menangani permohonan + balasan multi-kanal setiap hari.
- **Tujuan:** kelola permohonan masuk dengan SLA jelas; balas WA/IG/email dari satu tempat.
- **Frustrasi (dari audit):** permohonan tersebar di email; kanal komunikasi terpisah-pisah; tidak ada pemantauan/SLA.
- **Kebutuhan kunci:** UR-PPID-04, UR-OMNI-01, UR-OMNI-02.
- **Kutipan representatif:** *"Saya buka lima aplikasi berbeda untuk membalas warga — pasti ada yang terlewat."*

### P4 — Damar · Jurnalis / Akademisi
- **Profil:** 29 th, jurnalis data lingkungan, butuh angka & publikasi yang dapat dikutip.
- **Tujuan:** temukan data, regulasi, dan publikasi resmi dengan cepat dan kredibel.
- **Frustrasi (dari audit):** konten text-heavy & statis; pencarian/filter lemah; sebagian konten di domain pihak ketiga (kredibilitas).
- **Kebutuhan kunci:** UR-CONTENT-01, UR-SEARCH-01, UR-GOV-01.
- **Kutipan representatif:** *"Datanya ada, tapi tersebar dan susah dipastikan ini sumber resmi atau bukan."*

### P5 — Indah · Admin Konten / Humas
- **Profil:** 33 th, staf Biro Humas, mengelola berita/agenda/publikasi.
- **Tujuan:** publikasikan konten resmi cepat, tanpa bergantung Canva/Google Sites, aman dari injeksi.
- **Frustrasi (dari audit):** ketergantungan alat pihak ketiga; temuan injeksi/SEO spam pada portal; konsistensi visual sulit dijaga.
- **Kebutuhan kunci:** UR-GOV-01, UR-GOV-02, UR-CONTENT-01.
- **Kutipan representatif:** *"Kalau konten resmi numpang di tool luar, kredibilitas kementerian yang dipertaruhkan."*

---

## 4. User Journey Maps

Format per tahap: **Aksi → Pikiran/Emosi → Pain (audit) → Peluang (requirement).**

### 4.1 Journey — Sari (Lapor masalah lingkungan via Website Utama)

| Tahap | Aksi | Emosi | Pain (audit) | Peluang (UR) |
|---|---|---|---|---|
| 1. Masuk | Buka beranda dari HP | Berharap | Beranda penuh, layout rusak di HP | UR-HOME-01, UR-PERF-02 |
| 2. Cari | Telusuri menu untuk "lapor" | Bingung | Label nama direktorat, dropdown beda | UR-IA-01, UR-IA-02 |
| 3. Temukan | Coba pencarian | Frustrasi | Pencarian/filter lemah | UR-SEARCH-01 |
| 4. Aksi | Akses kanal lapor | Ragu | Dialihkan ke sistem pihak ketiga (beda UI) | UR-IA-03, UR-GOV-01 |
| 5. Selesai | Kirim laporan | Lega/tidak yakin | Tak ada konfirmasi jelas | UR-HOME-01 |

**Emotion curve:** Berharap → ⬇ Bingung → ⬇ Frustrasi → ↔ Ragu → ⬆ sebagian lega.
**Momen kritis:** Tahap 2–3 (titik drop terbesar).

### 4.2 Journey — Bayu (Ajukan & lacak permohonan informasi via PPID)

| Tahap | Aksi | Emosi | Pain (audit) | Peluang (UR) |
|---|---|---|---|---|
| 1. Niat | Cari cara ajukan permohonan | Termotivasi | Tidak jelas alurnya | UR-PPID-01 |
| 2. Ajukan | Siapkan permohonan | Terbebani | Harus email/Word manual | UR-PPID-01 |
| 3. Kirim | Kirim berkas | Was-was | Tak ada akun/unggah online | UR-PPID-01 |
| 4. Tunggu | Menunggu respons | Cemas | Tak ada tracking status | UR-PPID-02 |
| 5. Akses | Cek dari HP | Kesal | Mobile tak responsif; tak ada app | UR-PPID-03, UR-A11Y-02 |

**Emotion curve:** Termotivasi → ⬇ Terbebani → ⬇ Was-was → ⬇⬇ Cemas (titik terendah) → ↔ Kesal.
**Momen kritis:** Tahap 4 (ketidakpastian status = sumber keluhan utama).

### 4.3 Journey — Ratna (Kelola permohonan & balas multi-kanal)

| Tahap | Aksi | Emosi | Pain (audit) | Peluang (UR) |
|---|---|---|---|---|
| 1. Pantau | Cek permohonan masuk | Siaga | Tersebar di email | UR-PPID-04 |
| 2. Sortir | Prioritaskan & assign | Kewalahan | Tak ada SLA/ticketing | UR-OMNI-02 |
| 3. Balas | Jawab via WA/IG/email | Lelah | Kanal terpisah, pindah app | UR-OMNI-01 |
| 4. Lacak | Pastikan tak ada terlewat | Cemas | Tak ada unified inbox | UR-OMNI-01 |
| 5. Lapor | Rekap kinerja | Terbebani | Reporting manual | UR-OMNI-02 |

**Emotion curve:** Siaga → ⬇ Kewalahan → ⬇ Lelah → ⬇ Cemas → ↔ Terbebani.
**Momen kritis:** Tahap 3–4 (risiko permohonan terlewat).

---

## 5. Ringkasan Peluang Lintas Persona

| Peluang | Persona terdampak | UR pendukung | Catatan untuk Fase 2 |
|---|---|---|---|
| IA citizen-centric + Mega Menu | P1, P4 | UR-IA-01/02/03 | Fondasi navigasi semua produk |
| Beranda kontekstual (hero layanan) | P1 | UR-HOME-01/02/03 | Kurangi overload, fokus layanan |
| PPID online + tracking + mobile | P2 | UR-PPID-01..04 | Modul prioritas tinggi |
| Unified inbox + SLA (Omni) | P3 | UR-OMNI-01/02 | Kebutuhan internal kritis |
| Aksesibilitas penuh | P2 (+semua) | UR-A11Y-01..03 | Wajib WCAG 2.1 AA |
| Konten kredibel & infografis | P4, P5 | UR-CONTENT-01, UR-GOV-01/02 | Lepas dari pihak ketiga |

---

## 6. Langkah Berikutnya

Persona & journey ini menjadi bahan **Fase 1.4 — MoSCoW**: setiap UR-ID di-rank berdasarkan dampak ke persona (terutama momen kritis di journey) dan tuntutan KAK.

> **Reminder:** centang ☑ `1.3 Persona & Journey` di STATUS PROGRESS pada `PANDUAN_KERJA_UIUX_KLH.md`.
