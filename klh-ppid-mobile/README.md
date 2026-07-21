# Modul 02b — Aplikasi Mobile PPID KLH/BPLH (prototipe UI)

Prototipe **antarmuka** aplikasi mobile PPID sebagai HTML/CSS/JS statis — menutup **gap T1** (KAK Keluaran #2: "Pengembangan Fitur PPID dan Aplikasi Mobile PPID"). Pada tahap UI/UX ini kita **tidak** membangun aplikasi Flutter penuh; berkas ini adalah representasi front-end (design-to-code) untuk divalidasi sebelum diserahkan ke tim pengembang.

> **Lingkup:** hanya front-end (HTML + CSS + JS vanilla). Seluruh aksi tulis adalah **simulasi client-side**; tidak ada backend. Implementasi produksi memakai Flutter (lihat KAK & `docs/F2_UserFlow-IA.md §4.2`).

## Cara membuka

```bash
# dari folder ini
python3 -m http.server 8000
# lalu buka http://localhost:8000/  (redirect ke splash.html)
```

Bisa juga dibuka langsung via `file://` (mulai dari `splash.html` atau `index.html`).

## Layar (8, sesuai KAK & F2 §4.2)

| Layar | Berkas | Isi utama |
|---|---|---|
| Splash / Onboarding | `splash.html` | Brand + CTA Masuk / Buat Akun / Lihat sebagai tamu |
| Masuk | `masuk.html` | Login: email, kata sandi (toggle lihat), **CAPTCHA**, lupa sandi |
| Buat Akun | `daftar.html` | Identitas lengkap (nama, telp, alamat, profesi, tempat profesi, provinsi/kabupaten/kota, email, sandi) + verifikasi email |
| Beranda App | `beranda.html` | Sapaan, ringkasan status, aksi cepat, permohonan terkini, notif |
| Ajukan Permohonan | `permohonan.html` | Stepper 3 langkah: rincian (kronologi singkat) → **unggah dokumen** → tinjau & kirim → nomor registrasi |
| Lacak Permohonan | `lacak.html` | Input nomor registrasi → **timeline status**; dukung `?id=` |
| Riwayat | `riwayat.html` | Daftar permohonan + saring status → tautan ke Lacak |
| Chat Bot AI | `chatbot.html` | Asisten RAG (disimulasikan) dengan chip saran |

Navigasi bawah (bottom nav) 4 tab — Beranda · Ajukan · Lacak · Riwayat — plus FAB Chat Bot AI. **Notifikasi push** perubahan status disimulasikan lewat toast (mis. di Beranda saat dimuat).

## Arsitektur (konsisten Modul 01/02)

- **Vanilla HTML+CSS+JS, tanpa build step.** Custom element klasik (tanpa ES module).
- **Fondasi dipakai ulang byte-identik** dari Modul 02 (PPID Web): `assets/css/tokens.css`, `base.css`, `components.css`, `assets/js/components/icons.js`, dan **data `assets/js/data/ppid.js`** (nomor & status permohonan sama → paritas web–mobile).
- **Khusus modul ini:** `assets/css/mobile.css` (bingkai perangkat, app bar, bottom nav, splash, chat, toast) dan `assets/js/app.js` (chrome aplikasi `<klh-statusbar>`/`<klh-appbar>`/`<klh-botnav>` + helper status badge, timeline, dialog eksternal, toast).
- **`window.KLH_ROOT`** dideklarasikan tiap halaman (`''`) sebelum skrip bersama.
- **Urutan skrip:** `icons.js` → `data/ppid.js` → `app.js` → markup → skrip inline halaman.
- **Bingkai perangkat** 390×844 di desktop; **penuh-layar** di viewport ≤460px (aplikasi sesungguhnya).
- **Tanpa localStorage untuk data inti** — hanya flag sesi demo (`klh-ppid-sesi`), dibungkus try/catch.

## Aksesibilitas (WCAG 2.1 AA)

Skip link ke `#app` · satu `h1` per layar · `aria-current` pada tab aktif · target sentuh ≥44px · status = ikon + teks (bukan warna saja) · form ber-label + error terasosiasi (`aria-describedby`, `role="alert"`) · `prefers-reduced-motion` dihormati · mode kontras tinggi tersedia lewat token bersama.

## Verifikasi (Playwright Chromium)

- Screenshot mobile 390px & desktop 1440px seluruh layar — **lulus**.
- **0 error JS** pada 9 halaman × 2 viewport (abaikan 403 Google Fonts di sandbox).
- Link-check internal — semua tautan valid.
- Uji interaksi kunci: login validasi + CAPTCHA, stepper 3 langkah (visibilitas tombol per langkah), unggah berkas, lacak `?id=`, saring riwayat, chat RAG, toast notifikasi.

## Status paritas KAK

Menutup **G1 / T1**. Sub-cakupan KAK mobile terpenuhi di level UI: Login (+CAPTCHA, lupa sandi), Buat Akun (identitas lengkap), Laporan permohonan (kronologi singkat + unggah dokumen), Lacak Pemohon (ID + progres + notifikasi), Chat Bot AI. Backend (Flutter/Laravel/.NET, PostgreSQL, REST/GraphQL) di luar lingkup UI.
