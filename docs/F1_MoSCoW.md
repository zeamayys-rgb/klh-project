# F1 — Prioritisasi Fitur (MoSCoW)
## Fase 1.4 · Must / Should / Could / Won't

**Proyek:** Pengembangan Konten User Interface Website KLH/BPLH
**Vendor:** PT Bening Semesta · **Penyusun:** Abdan (UI/UX Designer)
**Status:** Draft v1 · **Prasyarat terpenuhi:** `F1_User-Requirement.md`, `F1_Persona-Journey.md`
**Bahan:** UR-IDs (§4 dok 1.2) + momen kritis journey (dok 1.3)

> **Catatan:** Prioritisasi awal disusun konsultan berbasis (a) tuntutan wajib KAK, (b) severity audit, (c) dampak ke momen kritis persona. **Ranking final disahkan bersama PPK/Tim Teknis** pada Workshop Sesi 3 (Bulan 1) via Berita Acara.

---

## 1. Kriteria Penilaian

Tiap UR dinilai pada tiga sumbu (skor 1–3), totalnya menentukan kategori MoSCoW:

| Sumbu | 1 | 2 | 3 |
|---|---|---|---|
| **Mandat KAK** | Tidak disebut | Disinggung | Eksplisit diwajibkan |
| **Severity audit** | Rendah | Sedang | Tinggi/Kritis |
| **Dampak persona** | Minor | Sedang | Momen kritis journey |

**Pemetaan total → kategori:** 8–9 = **Must** · 6–7 = **Should** · 4–5 = **Could** · <4 atau di luar lingkup = **Won't (fase ini)**.

---

## 2. Tabel Prioritisasi (Skoring)

| UR-ID | Kebutuhan | KAK | Sev | Persona | Total | Kategori |
|---|---|:--:|:--:|:--:|:--:|---|
| UR-PPID-01 | Form permohonan informasi online (akun + unggah) | 3 | 3 | 3 | 9 | **MUST** |
| UR-PPID-02 | Pelacakan status permohonan real-time | 3 | 3 | 3 | 9 | **MUST** |
| UR-IA-01 | IA citizen-centric (label by intent) | 3 | 3 | 3 | 9 | **MUST** |
| UR-A11Y-01 | Dukungan pembaca layar (ARIA/alt) | 3 | 3 | 3 | 9 | **MUST** |
| UR-A11Y-02 | Mode kontras tinggi & ukuran teks | 3 | 3 | 3 | 9 | **MUST** |
| UR-PERF-02 | Layout responsif desktop/tablet/mobile | 3 | 3 | 3 | 9 | **MUST** |
| UR-OMNI-01 | Unified inbox lintas kanal | 3 | 3 | 3 | 9 | **MUST** |
| UR-IA-02 | Navigasi konsisten antar halaman | 2 | 3 | 3 | 8 | **MUST** |
| UR-HOME-01 | Hero akses cepat layanan esensial | 2 | 3 | 3 | 8 | **MUST** |
| UR-PPID-03 | Aplikasi mobile PPID (Flutter) | 3 | 2 | 3 | 8 | **MUST** |
| UR-PPID-04 | Antarmuka admin PPID + SLA | 3 | 2 | 3 | 8 | **MUST** |
| UR-A11Y-03 | Navigasi penuh via keyboard | 3 | 2 | 3 | 8 | **MUST** |
| UR-OMNI-02 | Ticketing + SLA + routing/auto-reply | 3 | 2 | 3 | 8 | **MUST** |
| UR-IA-03 | Akses layanan ≤3 klik (Mega Menu) | 2 | 2 | 3 | 7 | **SHOULD** |
| UR-HOME-02 | Arsip via pencarian (no endless scroll) | 2 | 2 | 3 | 7 | **SHOULD** |
| UR-PERF-01 | Waktu muat cepat (Lighthouse ≥90) | 2 | 3 | 2 | 7 | **SHOULD** |
| UR-SEARCH-01 | Pencarian terpusat + filter | 2 | 3 | 2 | 7 | **SHOULD** |
| UR-GOV-01 | Konten resmi lepas pihak ketiga (CMS sendiri) | 2 | 3 | 2 | 7 | **SHOULD** |
| UR-GOV-02 | Antarmuka terisolasi dari injeksi skrip | 2 | 3 | 2 | 7 | **SHOULD** |
| UR-CONTENT-01 | Visualisasi data / infografis interaktif | 2 | 2 | 2 | 6 | **SHOULD** |
| UR-HOME-03 | Komponen carousel stabil | 1 | 2 | 2 | 5 | **COULD** |

---

## 3. Hasil MoSCoW (Ringkas)

### MUST — wajib ada untuk memenuhi KAK & menutup pain point kritis (13)
`UR-PPID-01`, `UR-PPID-02`, `UR-PPID-03`, `UR-PPID-04`, `UR-IA-01`, `UR-IA-02`, `UR-HOME-01`, `UR-A11Y-01`, `UR-A11Y-02`, `UR-A11Y-03`, `UR-PERF-02`, `UR-OMNI-01`, `UR-OMNI-02`
> Inti nilai proyek: digitalisasi PPID end-to-end, IA citizen-centric, aksesibilitas WCAG, responsivitas, dan unified inbox Omni Channel.

### SHOULD — penting, dikerjakan bila kapasitas memadai (7)
`UR-IA-03`, `UR-HOME-02`, `UR-PERF-01`, `UR-SEARCH-01`, `UR-GOV-01`, `UR-GOV-02`, `UR-CONTENT-01`
> Memperkuat pengalaman & tata kelola; sebagian dependen pada keputusan teknis backend/CMS.

### COULD — nilai tambah bila waktu tersisa (1)
`UR-HOME-03`
> Perbaikan stabilitas carousel; dapat ditangani sebagai bagian implementasi komponen.

### WON'T (fase ini) — di luar lingkup penawaran saat ini
- Integrasi penuh sistem perizinan pihak ketiga end-to-end (di luar lingkup UI/UX, ranah backend/integrasi terpisah).
- Fitur AI lanjutan di luar Chat Bot dasar yang disebut KAK.
- Migrasi data historis konten lama (ranah pengembangan, bukan UI/UX).
> Dicatat agar ekspektasi jelas; dapat menjadi kandidat fase/kontrak lanjutan.

---

## 4. Implikasi untuk Fase 2 (Urutan Kerja)

Urutan disarankan mengikuti bobot Must + ketergantungan:

1. **Design System** (fondasi semua produk) — selaraskan dengan UR-IA-02, UR-A11Y, UR-PERF-02.
2. **IA & Mega Menu** (UR-IA-01/02/03) — prasyarat semua wireframe.
3. **PPID flow** (UR-PPID-01..04) — modul prioritas, momen kritis tertinggi.
4. **Beranda kontekstual** (UR-HOME-01/02).
5. **Dashboard Omni Channel** (UR-OMNI-01/02).
6. Lapisan **Should/Could** menyusul pada iterasi berikutnya.

---

## 5. Penutup Fase 1

Dengan selesainya 1.1–1.4, kontribusi UI/UX untuk **Laporan Pendahuluan** lengkap: audit → requirement tertelusur → persona/journey → prioritas. Seluruhnya menunggu **approval pengguna jasa** sebelum masuk Fase 2.

> **Reminder:** centang ☑ `1.4 MoSCoW` (dan pastikan 1.2, 1.3 juga tercentang) di STATUS PROGRESS pada `PANDUAN_KERJA_UIUX_KLH.md`. Checkpoint akhir Fase 1 tercapai.
