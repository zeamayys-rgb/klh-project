# PROMPT — Modul 03 · Omni Channel Dashboard (13 halaman)

> Salin seluruh isi di bawah garis ini ke Claude Code. Pastikan `CLAUDE.md`, folder `docs/`, dan `klh-website-utama/` sudah ada di root workspace.

---

Baca dulu `CLAUDE.md` di root workspace, lalu: `docs/F2_Checklist-Halaman.md` bagian **"03 · OMNI CHANNEL DASHBOARD"**, `docs/F2_UserFlow-IA.md` (alur omni channel & 7 kanal), `docs/F2_Wireframe-notes.md` (**WF-04 Unified Inbox**), `docs/design.md`, dan `docs/F1_Persona-Journey.md` (persona **P3 Ratna — agen layanan internal**, pengguna utama produk ini).

**Tugas:** buat **Modul 03 · Omni Channel Dashboard** sebagai prototipe HTML statis di folder baru `klh-omni-dashboard/`, mengikuti semua konvensi CLAUDE.md. Modul 01 (`klh-website-utama/`) adalah referensi kualitas dan sumber fondasi — salin `tokens.css`, `base.css`, `components.css`, `icons.js` ke folder modul ini agar mandiri.

**Perbedaan penting dari Modul 01:** ini aplikasi internal (bukan situs publik). Bangun **app shell** baru: `<klh-sidebar>` (navigasi ikon+label, collapsible, `aria-current`), `<klh-topbar>` (pencarian global, panel notifikasi, dropdown profil pengguna), area konten fluid — bukan navbar/footer marketing. Tetap responsif: sidebar menjadi drawer di <1024px.

**13 halaman (urutan pengerjaan — Must dulu):**

Gelombang A (Must):
1. `login.html` — email+sandi, placeholder MFA (kode OTP demo) & tombol SSO; captcha hanya placeholder visual
2. `index.html` — Dashboard KPI: statistik pengunjung/interaksi, performa sistem, grafik aktivitas (Chart.js inline UMD, `animation:false`)
3. `inbox.html` — **Unified Inbox sesuai WF-04**: daftar percakapan 7 kanal (termasuk SP4N-LAPOR!, WhatsApp, Instagram, email, web form) + filter kanal/status + panel percakapan & balas; layout 3 panel
4. `tiket.html` — Ticketing/SLA: tabel tiket, status Open→In Progress→Closed, disposisi, rating, filter
5. `tiket-detail.html?t=` — template detail: riwayat percakapan, **SLA timer**, tombol eskalasi & disposisi
6. `reporting.html` — laporan + tombol ekspor PDF/Excel/CSV (demo)

Gelombang B (Should/Could):
7. `routing.html` — Routing & Auto-Reply: kategori, template balasan
8. `analytics.html` — heatmap (grid dummy), click/scroll, device/browser breakdown
9. `role.html` — Role Management 6 peran (Super Admin → Viewer), matriks izin
10. `keamanan.html` — MFA, SSO, audit trail, activity log (tabel)
11. `kanal.html` — Manajemen Kanal: status koneksi WA/IG/email/SP4N-LAPOR!
12. `profil.html` — profil pengguna/akun
13. Panel Notifikasi — komponen di topbar (escalation & sistem), bukan halaman terpisah

**Data dummy** terpusat di `assets/js/data/omni.js`: ≥12 percakapan lintas 7 kanal, ≥10 tiket dengan SLA bervariasi (termasuk yang mendekati/lewat tenggat → indikator visual), KPI, 6 peran, log audit. Nama & kasus fiktif tapi realistis (pengaduan pencemaran, permohonan informasi, dsb.).

**Kerjakan iteratif:** fondasi + app shell dulu → verifikasi render → per gelombang. Ikuti protokol verifikasi CLAUDE.md (Playwright 1440px & 390px, nol error JS, link-check, uji interaksi: filter inbox, kirim balasan demo, SLA timer, ekspor). Terakhir: `README.md` modul, zip, update `docs/F2_Checklist-Halaman.md` + `docs/PANDUAN_KERJA_UIUX_KLH.md` (Log Deliverable).

Konfirmasi rencana singkat (struktur folder + pembagian gelombang) sebelum mulai menulis kode, lalu kerjakan sampai selesai tanpa menunggu saya.
