# AUDIT Desain & QA — Modul 02 · PPID Web

**Proyek:** Pengembangan Konten UI Website KLH/BPLH · PT Bening Guru Semesta
**Objek audit:** `klh-ppid-web/` — 15 file HTML (16 entri checklist; Chat Bot AI = widget lintas halaman) + fondasi CSS/JS
**Acuan:** `CLAUDE.md`, `docs/design.md`, `F2_Checklist-Halaman.md` §02, `F2_Wireframe-notes.md` (WF-02, WF-03), `F1_Persona-Journey.md` (P1 Sari, P2 Bayu), `PROMPT_Modul-02_PPID-Web.md`, pembanding `klh-website-utama/pages/ppid.html`
**Tanggal:** 7 Juli 2026 · **Auditor:** QA/desain (sesi audit terpisah)
**Metode:** review kode statis seluruh sumber + Playwright Chromium (venv) via `python3 -m http.server`: 15 halaman × (1440 px + 390 px), pemeriksaan error JS & `scrollWidth`, link-check 233 target internal, **49 uji interaksi otomatis**, uji `file://` pada 2 halaman.
**Bukti:** `docs/audit-bukti/modul-02/` — 30 screenshot render (pasca-perbaikan) + 8 screenshot interaksi.

---

## Ringkasan Eksekutif

Modul 02 **sehat dan sesuai spesifikasi**: fondasi (tokens/base/components/icons + logo) **byte-identik** dengan Modul 01, data dummy terpusat melebihi ambang minimum, alur inti WF-02 → WF-15 → WF-03 berfungsi, nol error JS di seluruh 30 render, dan seluruh tautan internal valid — termasuk saat dibuka via `file://`.

Audit menemukan **0 temuan Kritis, 6 Mayor, dan 4 Minor/Saran**. Sesuai protokol, **seluruh temuan Mayor telah diperbaiki** di `klh-ppid-web/` dan diverifikasi ulang (render 30 halaman bersih, 49/49 uji interaksi lolos). Temuan Minor/Saran dilaporkan tanpa perubahan kode. `klh-website-utama/` tidak disentuh.

| Verifikasi ulang pasca-perbaikan | Hasil |
|---|---|
| Error JS (15 hlm × 2 viewport) | **0** |
| Overflow horizontal 390 px | **0** (sebelumnya 2 halaman) |
| Uji interaksi otomatis | **49 lolos / 0 gagal** |
| Link-check internal | 233 target — semua valid |
| `file://` (index + lacak `?id=`) | Berfungsi, nol error |

## Skor per Dimensi (1–5)

| # | Dimensi | Skor | Catatan |
|---|---|---|---|
| 1 | Kepatuhan token & spesifikasi | **5** | Fondasi identik M01 (diff kosong); nol warna mentah di luar token (hanya `#fff`, konvensi yang sama dengan M01); format `PPID-2026-XXXXXX` konsisten; data terpusat di `ppid.js`: 14 DIP (≥12), 7 permohonan 5 status (≥6), 9 FAQ (≥8), 7 regulasi (≥6), 6 DIK; penanda "konten contoh" hadir di setiap halaman berdata. |
| 2 | Konsistensi komponen | **5** | Navbar sub-brand "PPID · KLH/BPLH" + "← Situs Utama"; timeline `.timeline` `.dot`/`.done`/`.now` identik M01 (+ varian `.rejected`); istilah & SLA 10+7 hari kerja serta 4 tahapan timeline konsisten dengan `pages/ppid.html` M01; 100 % ikon dari `icons.js` (semua nama terdaftar), tanpa emoji. |
| 3 | Aksesibilitas WCAG 2.1 AA | **4** | Skip link, satu `h1` terlihat/halaman, `aria-current`, stepper aksesibel (`aria-current="step"` + live region + fokus ke judul langkah), accordion `button`+`aria-expanded`, status = ikon+teks, `prefers-reduced-motion` dihormati, kontras & teks 200 % berfungsi. 3 temuan Mayor (A2-03, A2-04, A2-06) → **diperbaiki**. |
| 4 | Responsif | **4** | 1440/390 px rapi di 13 dari 15 halaman; 2 halaman overflow horizontal di 390 px (A2-01) → **diperbaiki**, kini 15/15 bersih; stepper & tabel DIP tetap terpakai di mobile (tabel scroll dalam `.tbl-wrap`). |
| 5 | Fungsional / QA | **4** | Nol error JS; stepper maju/mundur + validasi per langkah + tolak berkas invalid; lacak 5 skenario; jalur Ditolak → alasan + keberatan (banner konteks + prefill); login demo → riwayat (localStorage hanya kunci diizinkan, try/catch); filter+cari DIP; dialog `data-ext`. 2 temuan Mayor alur (A2-02, A2-05) → **diperbaiki**. |

**Rata-rata: 4,4 / 5** — layak serah terima setelah perbaikan; tidak ada blocker.

---

## Tabel Temuan

Severitas: **Kritis** (memblokir alur/berbahaya) · **Mayor** (melanggar spesifikasi/WCAG secara material) · **Minor** (penyimpangan kecil) · **Saran** (peningkatan).

| ID | Sev. | Halaman | Lokasi (file:baris)* | Temuan & Bukti | Rekomendasi | Status |
|---|---|---|---|---|---|---|
| A2-01 | Mayor | Beranda, Laporan Kinerja | `pages.css:16-19` (fix); `laporan-kinerja.html` blok `<style>` | Overflow horizontal di 390 px: `index.html` scrollWidth 399 px, `laporan-kinerja.html` 609 px. Penyebab terukur: track `1fr` `.stat-strip` tidak bisa menyusut di bawah min-content kartu (terukur 182 px + 169 px + gap 24 px > 342 px tersedia), dan kartu grid `#tren-grid` tanpa `min-width:0` sehingga tabel 533 px melebarkan track menjadi 585 px. Bukti: `index-mobile.png`, `laporan-kinerja-mobile.png` (pasca-fix, 390 px bersih). | `minmax(0,1fr)` pada `.stat-strip` (override di `pages.css`, fondasi tidak diubah) + `#tren-grid > .card { min-width:0 }`. | **Diperbaiki** — scrollWidth kini 390 px di semua halaman |
| A2-02 | Mayor | Lacak | `lacak.html:76-86` | Alur inti E2E putus: kirim stepper → `konfirmasi.html?id=PPID-2026-392561` → tombol "Lacak di Sini" → **"Nomor tidak ditemukan"**. Pain utama persona P2 ("buta setelah kirim") justru terulang di ujung alur demo. Bukti: `interaksi-lacak-id-baru.png`. | ID berformat sah (`PPID-\d{4}-\d{6}`) yang tak ada di data contoh dirender sebagai permohonan baru tahap 1 "Diterima" berlabel demo — bukan pesan error. | **Diperbaiki** — uji "lacak ID baru dari konfirmasi" lolos |
| A2-03 | Mayor | Masuk, Keberatan, Konsultasi | `masuk.html:121-126`, `keberatan.html:132-137`, `konsultasi.html:113-118` | Saat validasi gagal, fokus tidak dipindahkan ke field error pertama (`daftar.html` & `permohonan.html` sudah benar — inkonsisten). Spesifikasi audit §3 mensyaratkannya; terverifikasi otomatis: `activeElement` kosong pasca-submit invalid. | Tambah `focus()` ke `.field.err` pertama pada ketiga handler submit, pola sama dengan `daftar.html`. | **Diperbaiki** — fokus kini ke field error pertama |
| A2-04 | Mayor | Semua (header/drawer) | `pages.css:20-22` (fix) | Target sentuh < 44 px: tombol "Aksesibilitas" utilbar 31 px, tombol tutup drawer 40 px (tautan drawer 54 px ✓, burger ✓). Melanggar ketentuan CLAUDE.md target ≥ 44 px. | `min-height:44px` pada `.utilbtn`/`.utilbar__actions button` dan `min-width/height:44px` pada `.drawer__head .btn` via `pages.css`. | **Diperbaiki** — terukur 44 px |
| A2-05 | Mayor | Widget Chat Bot | `widgets.js:28-38` | Pertanyaan kunci SLA "berapa lama permohonan dijawab?" dijawab aturan generik "cara ajukan permohonan" karena regex `/ajukan\|permohonan\|…/` berada paling atas dan menang duluan. Saran chip "Lacak status permohonan" juga akan salah sasaran. Bukti: `interaksi-chatbot.png` (pasca-fix). | Urutkan aturan spesifik (SLA, lacak, tolak, dst.) lebih dulu; pola generik "ajukan/permohonan" dipindah paling akhir sebelum fallback. | **Diperbaiki** — jawaban SLA "10 hari kerja" tampil |
| A2-06 | Mayor | DIP | `dip.html:50-54, 118-130` | Chip filter kategori hanya menandai status aktif dengan kelas visual `.on` — tanpa `aria-pressed`, pembaca layar tidak tahu filter mana yang aktif (WCAG 4.1.2 Name/Role/Value). | `aria-pressed` pada keempat chip, disinkronkan saat klik & saat `?k=` dari beranda. | **Diperbaiki** — `false,true,false,false` terverifikasi |
| A2-07 | Minor | Daftar Akun | `daftar.html:46, 118` | Dua `<h1>` dalam satu dokumen (form + panel verifikasi email). Hanya satu yang terlihat pada satu waktu (panel lain `hidden`), sehingga lolos "satu h1 terlihat", tetapi outline dokumen memuat dua h1. | Jadikan judul panel verifikasi `<h2>` bergaya h1, atau pindahkan fokus ke judul saat panel berganti. | Dilaporkan |
| A2-08 | Minor | Ajukan Permohonan | `permohonan.html:199, 203` | `aria-label="Hapus <nama berkas>"` tidak meng-escape tanda kutip ganda; nama berkas mengandung `"` dapat memecah atribut (nama sudah di-escape untuk `<` saja). Kasus tepi — unggahan adalah simulasi. | Escape `"` → `&quot;` di `addFiles()`/`renderFiles()`. | Dilaporkan |
| A2-09 | Saran | Konfirmasi | `konfirmasi.html:88-95` | `navigator.clipboard.writeText()` dibungkus try/catch sinkron; penolakan Promise (izin clipboard) tidak tertangani — tombol tetap menampilkan "Tersalin" meski gagal. | Gunakan `.then/.catch` untuk status salin. | Dilaporkan |
| A2-10 | Saran | Keberatan | `keberatan.html:129` | Regex nomor registrasi menerima 4–6 digit (`\d{4,6}`) padahal format resmi 6 digit (`PPID-2026-XXXXXX`); pesan error pun menyebut format XXXXXX. Konsistensi validasi antar-halaman (lacak kini 6 digit). | Perketat ke `\d{6}`. | Dilaporkan |

\* Nomor baris = kondisi pasca-perbaikan pada file yang di-fix.

**Catatan lintas modul (tidak disentuh, sesuai larangan):** pola chip filter tanpa `aria-pressed` (A2-06) juga ada di M01 `pages/program/index.html` — masukkan ke daftar kandidat audit Modul 01. Tombol "Buka Portal PPID Online" di M01 `pages/ppid.html` masih placeholder `href="#"`; siap diarahkan ke `../klh-ppid-web/index.html` menunggu persetujuan (sudah dicatat di README M02).

---

## Cakupan Uji (detail)

1. **Render:** 15 halaman × 1440/390 px, scroll penuh sebelum screenshot (reveal `[data-reveal]`), `[hidden]{display:none!important}` terverifikasi ada di `pages.css`; abaikan 403 Google Fonts (sandbox).
2. **Lacak/konfirmasi:** `?id=` Diproses (000123), Selesai (000101), Ditolak (000087 → alasan + tautan keberatan + banner konteks & prefill di keberatan), ID tak valid (pesan anggun), tanpa query (fallback anggun di kedua halaman), ID baru hasil formulir (pasca-fix: tahap 1 Diterima).
3. **Stepper WF-02:** validasi menahan tiap langkah, fokus ke error, maju/mundur dengan data utuh, tolak `.exe` + pesan perbaikan, tolak lanjut tanpa berkas valid, ringkasan tinjau benar, `aria-current="step"` + live region, kirim → redirect `konfirmasi.html?id=`.
4. **Lainnya:** filter+cari DIP (6/14 Berkala; kosong anggun; `?k=` aktifkan chip), accordion FAQ (klik & keyboard), login demo → `?lanjut=` → riwayat (7 permohonan, 6 notifikasi) → keluar bersih, kunci localStorage hanya `klh-ppid-sesi`/`klh-contrast`/`klh-fontsize`, chatbot 2 skenario, dialog `data-ext` (JDIH) muncul & batal, skip link + satu h1 + `aria-current` nav di 15 halaman, target sentuh drawer/burger, `file://` beranda + lacak.

---

*Seluruh perbaikan diverifikasi ulang pada 7 Juli 2026; `klh-ppid-web.zip` diperbarui. Dokumen ini bagian dari deliverable QA PT Bening Guru Semesta.*
