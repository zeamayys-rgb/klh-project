# PROMPT — Audit Desain & QA · Modul 03 · Omni Channel Dashboard

> Salin seluruh isi di bawah garis ini ke Claude Code. Jalankan di sesi terpisah dari audit modul lain. Modul 03 **boleh diperbaiki**: temuan Kritis & Mayor langsung di-fix, Minor/Saran cukup dilaporkan.

---

Baca dulu `CLAUDE.md` di root workspace, lalu `docs/design.md`, `docs/F2_Checklist-Halaman.md` bagian **"03 · OMNI CHANNEL DASHBOARD"**, `docs/F2_Wireframe-notes.md` (**WF-04 Unified Inbox**), `docs/F1_Persona-Journey.md` (persona P3 Ratna — agen internal), dan `PROMPT_Modul-03_OmniChannel.md` (spesifikasi asli — audit menilai kesesuaian terhadapnya). Catatan: `docs/F2_UserFlow-IA.md` tidak ada. Pembanding kualitas: `klh-website-utama/`.

**Tugas:** audit desain + QA menyeluruh `klh-omni-dashboard/` — 12 file HTML (login, index, inbox, tiket, tiket-detail, reporting, routing, analytics, role, keamanan, kanal, profil) + panel notifikasi di topbar. Uji `tiket-detail.html?t=` dengan ≥2 tiket berbeda kondisi SLA (normal & mendekati/lewat tenggat), 1 ID tidak valid, dan tanpa query (fallback anggun).

**Setup verifikasi:** `python3 -m http.server` dari root workspace + Playwright Chromium via venv baru (`python3 -m venv <scratchpad>/venv && pip install playwright && playwright install chromium` — tidak ada Playwright sistem). Gotcha yang sudah diketahui: pastikan `pages.css` punya `[hidden]{display:none!important}`; sebelum screenshot full-page scroll seluruh halaman (`scroll-behavior:auto`, jeda ~120ms) agar `[data-reveal]` tampil; di 390px cek `document.scrollWidth > 390` — waspadai inline `grid-template-columns`, grid item tanpa `min-width:0`, `.sr-only` dalam sel tabel lolos dari `.tbl-wrap`; abaikan 403 Google Fonts.

**Dimensi audit:**

1. **Kepatuhan token & spesifikasi** — warna mentah di luar `tokens.css`; fondasi disalin dari Modul 01 (mandiri, tanpa referensi lintas folder); Chart.js UMD embed lokal (`assets/js/vendor/chart.umd.js`, bukan CDN) dengan `animation:false`; data terpusat di `assets/js/data/omni.js` (≥12 percakapan lintas 7 kanal termasuk SP4N-LAPOR!/WA/IG/email/web form, ≥10 tiket dengan variasi SLA, KPI, 6 peran, log audit) — markup bebas konten dinamis hard-coded; penanda "konten contoh" ada.
2. **Konsistensi app shell** — `<klh-sidebar>` (ikon+label, collapsible, `aria-current`) & `<klh-topbar>` (pencarian global, panel notifikasi, dropdown profil) konsisten di semua halaman; login tanpa app shell; ikon hanya `icons.js`; indikator SLA mendekati/lewat tenggat = ikon+teks+warna (bukan warna saja).
3. **Aksesibilitas WCAG 2.1 AA** — skip link; satu `h1`; target ≥44px; sidebar drawer di <1024px bisa dioperasikan keyboard (fokus terkelola, Escape menutup); tabel tiket/audit punya header terasosiasi; grafik Chart.js punya alternatif teks (ringkasan angka atau tabel tersembunyi aksesibel); form login ber-label + error `aria-describedby`; kontras AA — perhatikan badge status & label kanal; `prefers-reduced-motion`.
4. **Responsif** — 1440px & 390px semua halaman + cek scrollWidth 390; inbox 3 panel harus punya pola mobile yang jelas (panel bertumpuk/berpindah, bukan terpotong); tabel dapat digulir dalam `.tbl-wrap`.
5. **Fungsional/QA** — nol error JS; link-check internal + `KLH_ROOT`; interaksi kunci: filter inbox per kanal & status, buka percakapan + kirim balasan demo, filter tabel tiket, SLA timer di tiket-detail, tombol eskalasi & disposisi, ekspor PDF/Excel/CSV (demo), panel notifikasi buka/tutup, matriks izin 6 peran, login → MFA placeholder → dashboard; localStorage hanya flag sesi demo + preferensi aksesibilitas (try/catch); dialog `data-ext` untuk tautan eksternal; 2 halaman dicek via `file://`.

**Deliverable:** (a) `docs/AUDIT_Modul-03_OmniChannel.md` — ringkasan + skor per dimensi (1–5) + tabel temuan (ID `A3-01`…, Severitas Kritis/Mayor/Minor/Saran, Halaman, Lokasi file:baris, Bukti screenshot, Rekomendasi, Status: Diperbaiki/Dilaporkan); (b) **perbaiki semua temuan Kritis & Mayor** di `klh-omni-dashboard/`, verifikasi ulang halaman yang tersentuh, lalu perbarui `klh-omni-dashboard.zip`; (c) bukti ke `docs/audit-bukti/modul-03/`; (d) update Log Deliverable `docs/PANDUAN_KERJA_UIUX_KLH.md`. **Jangan menyentuh `klh-website-utama/`.**

Kerjakan sampai selesai tanpa menunggu saya; laporkan ringkasan temuan + apa yang diperbaiki di akhir.
