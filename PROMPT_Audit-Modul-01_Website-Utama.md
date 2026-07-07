# PROMPT — Audit Desain & QA · Modul 01 · Website Utama

> Salin seluruh isi di bawah garis ini ke Claude Code. Jalankan di sesi terpisah dari audit modul lain. **Modul 01 sudah FINAL — sesi ini LAPORAN SAJA, jangan mengubah satu file pun di `klh-website-utama/`.**

---

Baca dulu `CLAUDE.md` di root workspace, lalu `docs/design.md` (tokens), `docs/F2_Checklist-Halaman.md` bagian **"01 · WEBSITE UTAMA"**, dan `docs/F1_Persona-Journey.md`. Catatan: `docs/F2_UserFlow-IA.md` tidak ada — gunakan checklist + `F2_Wireframe-notes.md` sebagai acuan IA.

**Tugas:** lakukan **audit desain + QA menyeluruh** terhadap `klh-website-utama/` (semua halaman di root + `pages/`, termasuk varian query string `?a=` `?p=` `?m=` `?id=` — uji ≥2 nilai berbeda per halaman template + tanpa query sebagai fallback). Hasilnya laporan, bukan perbaikan.

**Setup verifikasi:** `python3 -m http.server` dari root workspace + Playwright Chromium via venv baru (`python3 -m venv <scratchpad>/venv && pip install playwright && playwright install chromium` — tidak ada Playwright sistem). Gotcha yang sudah diketahui: sebelum screenshot full-page, scroll seluruh halaman dengan `scroll-behavior:auto` + jeda ~120ms agar seksi `[data-reveal]` tampil; abaikan 403 Google Fonts di sandbox.

**Dimensi audit (periksa per halaman, catat per temuan):**

1. **Kepatuhan token desain** — warna mentah di luar `tokens.css` (grep `#[0-9a-fA-F]` di `pages.css`/inline style), skala tipografi, spacing `--s1..--s16`, radius/shadow, container 1200px.
2. **Konsistensi komponen** — navbar/footer/kartu/tombol/status badge konsisten antar halaman; ikon hanya dari `icons.js` (tidak ada emoji); penanda "konten contoh" ada pada data dummy.
3. **Aksesibilitas WCAG 2.1 AA** — skip link ke `#konten`; tepat satu `h1`; `aria-current` di nav aktif; target sentuh ≥44px; status = ikon+teks; form ber-label + `aria-describedby` untuk error; `prefers-reduced-motion`; kontras AA (cek pasangan warna teks/latar yang dipakai, bukan hanya token); heading berurutan tanpa lompat.
4. **Responsif** — screenshot 1440px & 390px tiap halaman; di 390px jalankan cek `document.scrollWidth > 390` (overflow horizontal = temuan Mayor); sidebar/nav jadi pola mobile yang benar.
5. **Fungsional/QA** — nol error JS di console tiap halaman; link-check semua `href`/`src` internal (termasuk `window.KLH_ROOT` benar per kedalaman folder); dialog `data-ext` muncul untuk semua tautan eksternal; pencarian, filter indeks informasi, galeri, widget chatbot, toggle aksesibilitas (`klh-contrast`, `klh-fontsize` — hanya kunci ini di localStorage, dibungkus try/catch); halaman 404; buka minimal 2 halaman via `file://` untuk memastikan tetap jalan tanpa server.

**Deliverable:** tulis `docs/AUDIT_Modul-01_Website-Utama.md` berisi: (a) ringkasan eksekutif + skor per dimensi (1–5), (b) tabel temuan — kolom: ID (`A1-01`…), Severitas (Kritis / Mayor / Minor / Saran), Halaman, Lokasi (file:baris atau selector), Bukti (path screenshot), Rekomendasi perbaikan, (c) daftar halaman yang lolos bersih. Simpan screenshot di scratchpad, salin hanya yang jadi bukti temuan ke `docs/audit-bukti/modul-01/`. Terakhir update Log Deliverable di `docs/PANDUAN_KERJA_UIUX_KLH.md` (baris "Audit Modul 01 — tanggal — hasil").

**Ingat: jangan menyentuh file di `klh-website-utama/`.** Rekomendasi perbaikan cukup ditulis di laporan; keputusan eksekusi ada di saya. Kerjakan sampai laporan selesai tanpa menunggu saya.
