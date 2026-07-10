# Modul 01 · Website Utama KLH/BPLH — Prototipe HTML

Prototipe statis hi-fi untuk Website Utama Kementerian Lingkungan Hidup / BPLH (24 halaman checklist `F2_Checklist-Halaman.md`). Vanilla HTML + CSS + JS — **tanpa build step**, dapat dibuka langsung dari file atau server statis apa pun.

## Tentang produk ini (konteks KAK)

Website Utama adalah **wajah digital resmi kementerian** — pintu masuk pertama warga, jurnalis, pelaku usaha, dan pemerintah daerah. Ia menggantikan kemenlh.go.id eksisting yang pada audit heuristik mendapat **Grade D (~41/100)**: navigasi mengikuti struktur birokrasi (nama direktorat & akronim internal seperti "Dit. PLTTDLB3"), konten resmi tersebar di domain pihak ketiga (Canva/Google Sites), dan aksesibilitas rendah.

Jawaban desainnya adalah **IA citizen-centric**: menu disusun berdasarkan *apa yang ingin dilakukan pengguna*, bukan *bagan organisasi kementerian*. Cakupan KAK terpetakan ke empat area utama:

| Area | Artinya bagi pengguna | Isi (per KAK) |
|---|---|---|
| **Profil** | "Siapa kementerian ini dan bisakah saya percaya?" | Visi-misi, tugas & fungsi, struktur organisasi interaktif s/d Eselon 2, tata kelola & integritas (Zona Integritas, LHKPN per pejabat) |
| **Program** | "Program lingkungan apa yang bisa saya ikuti?" | 7 program: Kalpataru, PROPER, Adipura, Adiwiyata, ProKlim, Nirwasita Tantra, Ekonomi Sirkular — tiap detail ber-CTA "Cara Ikut Serta" |
| **Layanan** | "Saya perlu mengurus sesuatu" | 7 pelayanan publik dikelompokkan per niat: Perizinan & Pengadaan (PTSP, OSS, LPSE) · Pengaduan & Aspirasi (SP4N-LAPOR!) · Data, Lab & Pengujian · Regulasi & Pembelajaran |
| **Informasi** | "Ada kabar apa?" | Berita, siaran pers, pengumuman, agenda & kalender, artikel, video & podcast, publikasi, produk hukum |

Dua elemen lintas halaman melengkapi: **gerbang PPID** (jembatan ke Modul 02) dan **Chat Bot AI** (widget persisten). Layanan yang berada di sistem eksternal (OSS, LPSE, SP4N-LAPOR!) tidak direplikasi — pengguna diserahterimakan lewat dialog "Anda akan diarahkan ke …" agar konteks tidak hilang (Flow A).

Persona utama: **P1 Sari** (warga yang ingin mengadu/mencari informasi tanpa paham struktur birokrasi). Modul ini juga menjadi **sumber fondasi** (token, komponen, ikon) yang disalin oleh Modul 02–04.

## Menjalankan

```bash
# Opsi 1: buka index.html langsung di browser (file://)
# Opsi 2: server lokal (disarankan, agar query string ?p= ?m= ?a= konsisten)
python3 -m http.server 8080
# lalu buka http://localhost:8080
```

## Struktur

```
klh-website-utama/
├── index.html                        # Beranda (WF-01)
├── pages/
│   ├── ppid.html                     # Gerbang PPID (+ #ajukan, #lacak)
│   ├── pencarian.html                # Pencarian situs (?q=)
│   ├── 404.html
│   ├── profil/
│   │   ├── tentang.html              # Visi, misi, nilai
│   │   ├── tugas-fungsi.html
│   │   ├── struktur-organisasi.html  # Bagan interaktif dari KLH.pejabat
│   │   ├── detail-jabatan.html       # Template (?id=)
│   │   └── tata-kelola.html          # ZI · LHKPN · WBS
│   ├── program/
│   │   ├── index.html                # 7 program + filter audiens
│   │   └── detail.html               # Template (?p=slug)
│   ├── layanan/
│   │   ├── index.html                # 4 kelompok niat pengguna
│   │   ├── perizinan-pengadaan.html      ┐
│   │   ├── pengaduan-aspirasi.html       │ shell identik, dirender
│   │   ├── data-lab-pengujian.html       │ layanan-kelompok.js
│   │   └── regulasi-pembelajaran.html    ┘ via <body data-kelompok>
│   └── informasi/
│       ├── indeks.html               # Template 7 modul (?m=slug)
│       ├── detail.html               # Template artikel (?a=slug)
│       ├── agenda.html               # Kalender interaktif
│       └── galeri.html               # Video & podcast + filter
└── assets/
    ├── css/
    │   ├── tokens.css                # Design tokens (dari design.md)
    │   ├── base.css                  # Reset, tipografi, grid, section
    │   ├── components.css            # Navbar, footer, card, form, dsb.
    │   └── pages.css                 # Gaya khusus halaman
    └── js/
        ├── components/               # <klh-navbar> <klh-footer> <klh-widgets> <klh-icon>
        ├── data/                     # menu.js · content.js · layanan.js  ← "CMS" dummy
        ├── pages/layanan-kelompok.js
        └── main.js                   # Reveal-on-scroll, KLH.newsCard
```

**Catatan jumlah file vs checklist:** 20 file HTML melayani 24 halaman checklist karena halaman bertipe template (`indeks.html?m=…`, `detail.html?a=…`, `detail.html?p=…`, `detail-jabatan.html?id=…`) mewakili beberapa entri sekaligus.

## Konvensi penting

1. **`window.KLH_ROOT`** — setiap halaman mendeklarasikan kedalamannya sebelum memuat skrip bersama: `''` (root), `'../'` (pages/), `'../../'` (pages/&lt;seksi&gt;/). Semua komponen membangun tautan dengan prefiks ini sehingga navbar/footer berfungsi di semua kedalaman.
2. **Urutan skrip** — icons.js → data (menu/content/layanan) → navbar/footer/widgets → markup → main.js. Komponen berbentuk custom element klasik (tanpa module) agar aman di `file://`.
3. **Data = "CMS" sementara** — semua konten dummy terkonsentrasi di `assets/js/data/`. Saat integrasi backend, ganti sumber objek `KLH.*` tanpa menyentuh markup.
4. **Tautan eksternal** — ditandai `data-ext`; dialog serah-terima ("Anda akan diarahkan ke …") mengimplementasikan Flow A F2_UserFlow-IA (SP4N-LAPOR!, OSS, LPSE, dst.).
5. **Aksesibilitas (WCAG 2.1 AA)** — skip link, satu `h1`/halaman, `aria-current`, target sentuh ≥44px, status ikon+teks, panel aksesibilitas (kontras tinggi & ukuran huruf → `localStorage`), `prefers-reduced-motion` dihormati (slideshow beranda).
6. **Konten contoh** — artikel, pejabat, agenda, dan statistik bersifat *dummy* dan diberi penanda pada UI; menunggu validasi PPK/Tim Teknis sebelum produksi.

## Ekstensi ke Modul 02 (PPID) & 03 (Omni Channel)

- Gunakan pola yang sama: salin `assets/css/tokens.css` + `base.css` + `components.css` sebagai fondasi bersama, tambah `pages.css` per modul.
- `pages/ppid.html` telah menyiapkan titik jembatan: tombol "Buka Portal PPID Online" dan pelacakan `#lacak` tinggal diarahkan ke rute Modul 02.
- Ikon (`icons.js`) dan data-format util (`KLH.fmtDate`, `KLH.fmtViews`, `KLH.qs`) dapat dipakai lintas modul.

## Verifikasi yang sudah dilakukan

- Render Chromium (Playwright) desktop 1440px & mobile 390px: beranda, mega menu, drawer, org chart, 4 kelompok layanan, dialog serah-terima eksternal, kalender (navigasi bulan), pelacakan PPID, pencarian (?q=), 404 — tanpa error JS.
- Link-check internal seluruh `href`/`src` — lolos.
- Satu-satunya error konsol di sandbox: Google Fonts 403 (pembatasan jaringan sandbox; normal di lingkungan riil).

## Tindak lanjut audit (10 Jul 2026)

Seluruh temuan `docs/AUDIT_Modul-01_Website-Utama.md` (A1-01…A1-12) telah diperbaiki dan diverifikasi ulang (Playwright 20 halaman × 2 viewport — nol error JS, nol overflow 390px). Ringkasan perubahan ada di bagian "Tindak Lanjut Perbaikan" dokumen audit tersebut.

**Batasan handoff produksi (A1-13):** skip link, navbar, dan footer dirender via JavaScript (custom element). Tanpa JS halaman tidak memiliki navigasi/skip link — dapat diterima untuk prototipe, tetapi untuk produksi kerangka utama sebaiknya di-SSR / HTML statis.
