# PROMPT — Audit Desain & QA · Modul 02 · PPID Web

> Salin seluruh isi di bawah garis ini ke Claude Code. Jalankan di sesi terpisah dari audit modul lain. Modul 02 **boleh diperbaiki**: temuan Kritis & Mayor langsung di-fix, Minor/Saran cukup dilaporkan.

---

Baca dulu `CLAUDE.md` di root workspace, lalu `docs/design.md`, `docs/F2_Checklist-Halaman.md` bagian **"02 · PPID WEB"**, `docs/F2_Wireframe-notes.md` (**WF-02 Form Permohonan** & **WF-03 Lacak**), `docs/F1_Persona-Journey.md` (persona P1 Sari), dan `PROMPT_Modul-02_PPID-Web.md` (spesifikasi asli — audit menilai kesesuaian terhadapnya). Catatan: `docs/F2_UserFlow-IA.md` tidak ada. Pembanding kualitas & konsistensi: `klh-website-utama/` (khususnya `pages/ppid.html` — istilah, SLA 10+7 hari kerja, tahapan timeline harus konsisten).

**Tugas:** audit desain + QA menyeluruh `klh-ppid-web/` — 15 file HTML (index, masuk, daftar, permohonan, konfirmasi, lacak, profil-ppid, regulasi, dip, faq, riwayat, keberatan, dik, laporan-kinerja, konsultasi) + widget chatbot. Uji `konfirmasi.html?id=` & `lacak.html?id=` dengan ≥2 ID valid berbeda status, 1 ID tidak valid, dan tanpa query (fallback harus anggun).

**Setup verifikasi:** `python3 -m http.server` dari root workspace + Playwright Chromium via venv baru (`python3 -m venv <scratchpad>/venv && pip install playwright && playwright install chromium` — tidak ada Playwright sistem). Gotcha yang sudah diketahui: pastikan `pages.css` punya `[hidden]{display:none!important}` (author CSS `display:inline-flex` bisa mengalahkan aturan UA); sebelum screenshot full-page scroll seluruh halaman (`scroll-behavior:auto`, jeda ~120ms) agar `[data-reveal]` tampil; di 390px cek `document.scrollWidth > 390` — waspadai inline `grid-template-columns`, grid item tanpa `min-width:0`, dan `.sr-only` di dalam sel tabel yang lolos dari `.tbl-wrap` (fix: `.tbl-wrap{position:relative}`); abaikan 403 Google Fonts.

**Dimensi audit:**

1. **Kepatuhan token & spesifikasi** — warna mentah di luar `tokens.css`; fondasi identik dengan Modul 01 (tokens/base/components/icons disalin, bukan referensi lintas folder); format ID `PPID-2026-XXXXXX`; data dummy terpusat di `assets/js/data/ppid.js` (≥12 DIP, ≥6 permohonan status bervariasi, ≥8 FAQ, ≥6 regulasi) — tidak ada konten dinamis hard-coded di markup; penanda "konten contoh" ada.
2. **Konsistensi komponen** — navbar sub-brand PPID + tautan "← Situs Utama"; timeline `.timeline` `.dot`/`.done`/`.now` sama dengan Modul 01; ikon hanya `icons.js`.
3. **Aksesibilitas WCAG 2.1 AA** — skip link; satu `h1`; `aria-current`; target ≥44px; stepper aksesibel (progres terbaca screen reader, langkah aktif jelas); validasi form: error terasosiasi via `aria-describedby` + fokus pindah ke error pertama; accordion FAQ = `button` + `aria-expanded`; status permohonan = ikon+teks; kontras AA; `prefers-reduced-motion`.
4. **Responsif** — 1440px & 390px semua halaman + cek scrollWidth 390; stepper & tabel DIP harus tetap terpakai di mobile.
5. **Fungsional/QA** — nol error JS; link-check internal + `KLH_ROOT` benar; alur inti end-to-end: isi stepper WF-02 maju/mundur dengan validasi per langkah → konfirmasi → lacak; jalur Ditolak menampilkan alasan + tautan ke `keberatan.html`; login demo (flag sesi localStorage dalam try/catch, hanya kunci yang diizinkan) → `riwayat.html` menuntut "login"; filter & pencarian DIP; chatbot menjawab konteks PPID; dialog `data-ext` di tautan eksternal; 2 halaman dicek via `file://`.

**Deliverable:** (a) `docs/AUDIT_Modul-02_PPID-Web.md` — ringkasan + skor per dimensi (1–5) + tabel temuan (ID `A2-01`…, Severitas Kritis/Mayor/Minor/Saran, Halaman, Lokasi file:baris, Bukti screenshot, Rekomendasi, Status: Diperbaiki/Dilaporkan); (b) **perbaiki semua temuan Kritis & Mayor** di `klh-ppid-web/`, verifikasi ulang halaman yang tersentuh (screenshot + nol error JS), lalu perbarui `klh-ppid-web.zip`; (c) bukti ke `docs/audit-bukti/modul-02/`; (d) update Log Deliverable `docs/PANDUAN_KERJA_UIUX_KLH.md`. **Jangan menyentuh `klh-website-utama/`.**

Kerjakan sampai selesai tanpa menunggu saya; laporkan ringkasan temuan + apa yang diperbaiki di akhir.
