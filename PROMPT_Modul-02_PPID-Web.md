# PROMPT — Modul 02 · PPID Web (16 halaman)

> Salin seluruh isi di bawah garis ini ke Claude Code. Jalankan di sesi TERPISAH dari Modul 03. Pastikan `CLAUDE.md`, folder `docs/`, dan `klh-website-utama/` sudah ada di root workspace.

---

Baca dulu `CLAUDE.md` di root workspace, lalu: `docs/F2_Checklist-Halaman.md` bagian **"02 · PPID WEB"**, `docs/F2_UserFlow-IA.md` (alur permohonan informasi), `docs/F2_Wireframe-notes.md` (**WF-02 Form Permohonan stepper** dan **WF-03 Lacak Permohonan** — dua template inti modul ini), `docs/design.md`, dan `docs/F1_Persona-Journey.md` (persona **P1 Sari — warga pemohon informasi**). Lihat juga `klh-website-utama/pages/ppid.html` — halaman gerbang PPID di Modul 01 yang berisi demo pelacakan & klasifikasi 4 kategori; Modul 02 ini adalah portal penuhnya, jaga konsistensi istilah, SLA (10+7 hari kerja), dan tahapan timeline.

**Tugas:** buat **Modul 02 · PPID Web** sebagai prototipe HTML statis di folder baru `klh-ppid-web/`, mengikuti semua konvensi CLAUDE.md. Salin fondasi (`tokens.css`, `base.css`, `components.css`, `icons.js`) dari Modul 01 agar folder mandiri. Navbar boleh varian sub-brand "PPID KLH/BPLH" (lebih ringkas dari navbar Modul 01) + tautan "← Situs Utama KLH/BPLH".

**16 halaman (urutan pengerjaan — Must dulu):**

Gelombang A (Must — alur inti pemohon):
1. `index.html` — Beranda PPID: 4 kategori informasi (Berkala / Serta-Merta / Setiap Saat / Dikecualikan), CTA Ajukan & Lacak
2. `masuk.html` — email, sandi, captcha **placeholder visual saja**, lupa sandi; login demo client-side (flag sesi di localStorage, try/catch)
3. `daftar.html` — registrasi identitas lengkap (NIK/badan hukum) + langkah verifikasi email (simulasi)
4. `permohonan.html` — **Form stepper sesuai WF-02**: Data Pemohon → Rincian Informasi → Unggah Dokumen → Tinjau & Kirim; validasi per langkah, progres stepper aksesibel
5. `konfirmasi.html?id=` — tampil ID registrasi (format `PPID-2026-XXXXXX`), estimasi SLA, tombol "Lacak di sini"
6. `lacak.html?id=` — **sesuai WF-03**: timeline status (komponen `.timeline` dengan `.dot`/`.done`/`.now` seperti Modul 01), estimasi jawaban, jalur "Ditolak" → tautan Pengajuan Keberatan

Gelombang B (Should):
7. `profil-ppid.html` — tugas & fungsi, struktur, visi & misi PPID
8. `regulasi.html` — dasar hukum keterbukaan informasi (UU 14/2008 dkk.)
9. `dip.html` — Daftar Informasi Publik: tabel + filter kategori + pencarian judul
10. `faq.html` — accordion aksesibel (button + `aria-expanded`)
11. `riwayat.html` — daftar permohonan pengguna + status + notifikasi (perlu "login" demo)
12. `keberatan.html` — form pengajuan keberatan (jalur dari status Ditolak)
13. Chat Bot AI PPID — pakai ulang pola widget `<klh-widgets>` Modul 01, sesuaikan jawaban demo seputar PPID

Gelombang C (Could):
14. `dik.html` — Daftar Informasi Dikecualikan (tabel + dasar pengecualian)
15. `laporan-kinerja.html` — laporan layanan informasi tahunan (statistik + unduhan dummy)
16. `konsultasi.html` — form permohonan konsultasi

**Data dummy** terpusat di `assets/js/data/ppid.js`: ≥12 entri DIP, ≥6 permohonan dengan status bervariasi (Diterima / Verifikasi / Diproses / Selesai / Ditolak) untuk lacak & riwayat, FAQ ≥8, regulasi ≥6. Status "Ditolak" harus menampilkan alasan + tautan keberatan.

**Kerjakan iteratif:** fondasi + navbar varian dulu → verifikasi render → per gelombang. Ikuti protokol verifikasi CLAUDE.md (Playwright 1440px & 390px, nol error JS, link-check, uji interaksi: stepper maju/mundur + validasi, lacak dengan ID valid & tidak valid, filter DIP, accordion FAQ). Terakhir: `README.md` modul, zip, update `docs/F2_Checklist-Halaman.md` + `docs/PANDUAN_KERJA_UIUX_KLH.md` (Log Deliverable) — dan catat bahwa tombol "Buka Portal PPID Online" di `klh-website-utama/pages/ppid.html` kini bisa diarahkan ke `../klh-ppid-web/index.html` (jangan ubah Modul 01 tanpa persetujuan; cukup catat di README).

Konfirmasi rencana singkat (struktur folder + pembagian gelombang) sebelum mulai menulis kode, lalu kerjakan sampai selesai tanpa menunggu saya.
