# Proyek UI/UX KLH/BPLH — Prototipe HTML Hi-Fi

Prototipe antarmuka (hi-fi, klikabel) untuk **tiga produk digital Kementerian Lingkungan Hidup / Badan Pengendalian Lingkungan Hidup (KLH/BPLH)**, dikerjakan oleh **PT Bening Guru Semesta** sesuai Kerangka Acuan Kerja (KAK) proyek *Pengembangan Konten User Interface Website KLH/BPLH*.

Website eksisting (kemenlh.go.id) mendapat skor heuristik **Grade D (~41/100)** — navigasi mengikuti struktur birokrasi, tidak responsif, dan aksesibilitas rendah. Proyek ini merancang ulang seluruh pengalaman digital dengan prinsip **citizen-centric** (menu disusun berdasarkan niat pengguna, bukan struktur organisasi), **satu design system terpadu** lintas produk, dan **aksesibilitas WCAG 2.1 AA**.

> Seluruh konten (artikel, pejabat, statistik, kasus) adalah **data contoh berpenanda** — belum divalidasi PPK/Tim Teknis. Prototipe ini murni antarmuka: tanpa backend, seluruh aksi tulis adalah simulasi client-side.

## Produk / Modul

| Modul | Folder | Untuk siapa | Sekilas |
|---|---|---|---|
| 01 · Website Utama | [`klh-website-utama/`](klh-website-utama/) | Publik | Wajah digital resmi kementerian: profil, program, layanan, informasi |
| 02 · PPID Web | [`klh-ppid-web/`](klh-ppid-web/) | Publik (pemohon informasi) | Portal keterbukaan informasi publik — ajukan & lacak permohonan daring |
| 03 · Omni Channel Dashboard | [`klh-omni-dashboard/`](klh-omni-dashboard/) | Internal (agen layanan) | Satu meja kerja untuk komunikasi warga dari 7 kanal |
| 04 · CMS Konten | [`klh-cms/`](klh-cms/) | Internal (pengelola konten) | Admin pengelola konten lintas produk *(tambahan di luar KAK)* |

Rincian tiap produk ada di `README.md` masing-masing folder.

### 01 · Website Utama KLH/BPLH — 24 halaman

Situs resmi kementerian yang menjadi pintu masuk utama warga. Cakupan KAK: **Beranda**, **Profil** (visi-misi, struktur organisasi hingga Eselon 2, LHKPN, Zona Integritas), **7 Program** unggulan (Kalpataru, PROPER, Adipura, Adiwiyata, ProKlim, Nirwasita Tantra, Ekonomi Sirkular), **7 Pelayanan Publik** (perizinan, pengaduan, data & lab, regulasi, dsb.), gerbang **PPID**, **Informasi & Publikasi** (berita, siaran pers, agenda, galeri), dan **Chat Bot AI**.

### 02 · PPID Web — 16 halaman

PPID (*Pejabat Pengelola Informasi dan Dokumentasi*) adalah unit yang wajib dimiliki setiap badan publik menurut **UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik**. Produk ini menggantikan proses permohonan informasi manual (email/berkas Word) dengan **pengajuan daring ber-stepper, pelacakan status ber-timeline, dan jalur keberatan** — plus katalog informasi terbuka (DIP), regulasi, dan FAQ. Varian **PPID Mobile (Flutter, 8 layar)** masih dalam antrean pengerjaan.

### 03 · Omni Channel Dashboard — 13 halaman

Aplikasi **internal** bagi agen layanan publik. Warga menghubungi KLH lewat banyak kanal — WhatsApp, Instagram, Facebook, X, email, web form, dan SP4N-LAPOR! — yang selama ini terpisah-pisah. Dashboard ini menyatukannya: **Unified Inbox** 3 panel, **ticketing dengan SLA** (timer hidup, eskalasi), **routing & auto-reply**, **analytics**, **reporting**, dan **role management**.

### 04 · CMS Konten — 8 halaman *(di luar lingkup KAK)*

Usulan tambahan: admin "dapur konten" yang menjawab pertanyaan *dari mana konten ketiga produk dikelola*. Alur editorial **Draf → Menunggu Review → Terbit/Terjadwal** menerjemahkan prinsip "wajib approval pengguna jasa" ke antarmuka.

## Menjalankan

Tanpa build step, tanpa framework — vanilla HTML+CSS+JS. Buka `index.html` root untuk halaman indeks semua modul, atau:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Setiap folder modul mandiri (fondasi disalin, bukan dirujuk lintas folder) sehingga tetap berfungsi saat di-zip terpisah. Tautan antarmodul (mis. tombol "Buka Portal PPID Online") hanya aktif bila folder-folder berdampingan.

## Struktur repositori

```
├── index.html               # Indeks tautan ke semua modul & design system
├── klh-website-utama/       # Modul 01 (final — referensi fondasi)
├── klh-ppid-web/            # Modul 02
├── klh-omni-dashboard/      # Modul 03
├── klh-cms/                 # Modul 04
└── docs/                    # Deliverable fase: persona, MoSCoW, checklist halaman,
                             # wireframe notes, design tokens, design system (3 hlm), audit QA
```

## Standar yang dipegang

- **Design system terpadu** — token di `docs/design.md`: hijau KLH `#1B7A4B`, Plus Jakarta Sans / Inter / JetBrains Mono, spacing 4px, ikon Material Symbols via `icons.js` (bukan emoji).
- **WCAG 2.1 AA** — skip link, satu `h1`/halaman, target sentuh ≥ 44px, status = ikon + teks, form ber-label dengan error terasosiasi, `prefers-reduced-motion` dihormati, panel kontras tinggi & perbesaran teks.
- **Verifikasi tiap modul** — render Playwright 1440px & 390px nol error JS, link-check internal, dan uji interaksi otomatis (log lengkap di `docs/PANDUAN_KERJA_UIUX_KLH.md` dan `docs/AUDIT_*.md`).

---

*Kementerian Lingkungan Hidup / BPLH × PT Bening Guru Semesta · UI/UX: Abdan · Seluruh nama, kontak, dan kasus dalam prototipe adalah fiktif. © 2026*
