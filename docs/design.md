# Design System v2 — Kementerian Lingkungan Hidup / BPLH

**Versi:** 2.0 — palet diekstrak dari lambang resmi instansi
**Disusun oleh:** PT Bening Guru Semesta — UI/UX Consulting
**Acuan:** KAK Jasa Konsultan Pengembangan Konten User Interface Website (poin 15.2.b)
**Standar:** WCAG 2.1 AA · SPBE (Perpres 95/2018) · prinsip User-Centered Design
**File pendamping:** `Design_System_KLH_BPLH.html` (referensi visual interaktif) · `Design_System_KLH_BPLH.png`

---

## 1. Pendahuluan

Pedoman antarmuka baku untuk tiga produk digital KLH/BPLH di bawah satu bahasa visual terpadu:

1. **Website Utama KLH/BPLH** — portal informasi dan layanan publik.
2. **PPID (Web & Mobile)** — layanan informasi publik dan permohonan.
3. **Dashboard Omni Channel** — pengelolaan kanal komunikasi internal.

**Pembeda v2:** seluruh palet warna di-anchor pada tiga warna eksak yang diekstrak piksel-demi-piksel dari lambang resmi KLH/BPLH — hijau `#005952` (primer), biru `#147DEF` dan oranye `#F97910` (sekunder). Setiap token diekspresikan sebagai CSS Custom Property, siap dipetakan ke Figma Variables dan token Flutter.

---

## 2. Prinsip Desain

| Prinsip | Penjelasan |
|---|---|
| **Berpihak pada Warga** | Label dan alur mengikuti niat pengguna (citizen-centric), bukan nomenklatur birokrasi. |
| **Inklusif & Setara** | Kontras, keyboard, dan ARIA memenuhi WCAG 2.1 AA bagi seluruh kemampuan pengguna. |
| **Konsisten** | Komponen reusable lintas tiga produk; menurunkan beban kognitif dan biaya pemeliharaan. |
| **Bertema Lingkungan** | Palet lambang, ruang putih jernih, dan motif alam merepresentasikan identitas KLH. |

---

## 3. Identitas & Lambang

- Warna lambang (hasil ekstraksi): **Hijau `#005952`** (kelopak utama · rgb 0,89,82), **Biru `#147DEF`** (elemen air · rgb 20,125,239), **Oranye `#F97910`** (elemen energi · rgb 249,121,16).
- **Area bersih** minimum di sekeliling lambang = tinggi satu kelopak; **ukuran tampil minimum 32px**.
- Lambang selalu pada latar putih/terang atau dalam lingkaran putih di atas latar gelap; jangan mengubah warna, memutar, atau memberi efek.

---

## 4. Warna

### 4.1 Hijau KLH — PRIMER (anchor logo di 600)

| Token | Hex | Token | Hex |
|---|---|---|---|
| `--g-50` | `#F1F8F8` | `--g-500` | `#07887D` |
| `--g-100` | `#DEF2F1` | **`--g-600`** | **`#005952` ← logo** |
| `--g-200` | `#B8EAE6` | `--g-700` | `#00453F` |
| `--g-300` | `#7CDED6` | `--g-800` | `#003631` |
| `--g-400` | `#25D0C2` | `--g-900` | `#002623` |

Penggunaan: aksi utama (600), hover (700), header/sidebar (800), footer (900), latar lembut (50–100), aksen grafik (400–500).

### 4.2 Biru KLH — SEKUNDER (anchor logo di 500)

| Token | Hex | Token | Hex |
|---|---|---|---|
| `--b-50` | `#EFF5FA` | **`--b-500`** | **`#147DEF` ← logo** |
| `--b-100` | `#DAE8F6` | `--b-600` | `#0E66C4` |
| `--b-200` | `#B1D0F1` | `--b-700` | `#0B529D` |
| `--b-300` | `#77B1EE` | `--b-800` | `#083E77` |
| `--b-400` | `#4596ED` | `--b-900` | `#062D56` |

Peran: informasi & data — tautan teks, visualisasi, elemen informatif. **Catatan kontras:** `#147DEF` = 4.03:1 pada putih (hanya teks besar/ikon/grafik); untuk tombol & teks normal gunakan `--b-600` (5.65:1).

### 4.3 Oranye KLH — SEKUNDER (anchor logo di 500)

| Token | Hex | Token | Hex |
|---|---|---|---|
| `--o-50` | `#FCF4EE` | **`--o-500`** | **`#F97910` ← logo** |
| `--o-100` | `#F9E4D2` | `--o-600` | `#D66305` |
| `--o-200` | `#F8C8A0` | `--o-700` | `#AE5104` |
| `--o-300` | `#F7A664` | `--o-800` | `#863E03` |
| `--o-400` | `#FA8F38` | `--o-900` | `#632E03` |

Peran: sorotan & energi — aksen garis, penanda notifikasi, CTA kampanye (maks ±10% halaman). **Jangan** memakai teks putih di atas oranye-500; gunakan teks gelap, atau oranye-700+ sebagai warna teks di latar terang.

### 4.4 Warna Status

| Status | Teks | Latar | Garis |
|---|---|---|---|
| Sukses | `--success #0E7A4E` | `#DCF3E7` | `#9BDDBC` |
| Peringatan | `--warning #AE5104` | `#F9E4D2` | `#F8C8A0` |
| Gagal | `--danger #C03A2B` | `#FBE3E0` | `#EFAFA6` |
| Informasi | `--infoc #0B529D` | `#DAE8F6` | `#B1D0F1` |

### 4.5 Netral (bernuansa teal)

| Token | Hex | Penggunaan |
|---|---|---|
| `--ink-900` | `#10201D` | Teks utama (16.85:1 pada putih) |
| `--ink-700` | `#283835` | Judul sekunder |
| `--ink-500` | `#51625E` | Teks pendukung |
| `--ink-400` | `#75847F` | Hanya teks besar (≥24px / ≥18,66px bold), placeholder, atau state disabled — **3,92:1 pada putih, gagal AA untuk teks normal**; teks meta/keterangan pakai `--ink-500` |
| `--ink-300` | `#A6B2AE` | Nonaktif |
| `--line` / `--line-strong` | `#E1E8E6` / `#C7D2CF` | Garis / border input |
| `--surface` / `--surface-2` / `--surface-3` | `#FFFFFF` / `#F5F9F8` / `#EBF2F0` | Permukaan |
| `--bg` | `#F2F6F5` | Latar halaman |

### 4.6 Pasangan Teruji WCAG

| Pasangan | Rasio | Level |
|---|---|---|
| Putih pada Hijau-600 | 8.23:1 | AAA |
| Putih pada Biru-600 | 5.65:1 | AA |
| Putih pada Biru-500 (logo) | 4.03:1 | AA teks besar saja |
| Oranye-800 pada Oranye-100 | 6.31:1 | AA |
| Hijau-800 pada Hijau-100 | 11.5:1 | AAA |
| Biru-700 pada Biru-100 | 6.22:1 | AA |

Aturan: teks normal ≥ 4.5:1, teks besar ≥ 3:1. Warna tidak boleh menjadi satu-satunya pembawa makna.

---

## 5. Tipografi

| Peran | Font | Bobot |
|---|---|---|
| Display/Judul | **Plus Jakarta Sans** (font asal Indonesia) | 400–800 |
| Isi | **Inter** | 400–700 |
| Data/Kode | **JetBrains Mono** | 400–500 |

Skala: Display `clamp(32→48px)/800` · H1 `32/700` · H2 `24/700` · H3 `20/700` · H4 `17/700` · Body `16/400` · Small `14` · XS `12`. Tinggi baris: judul 1.18, isi 1.6. Dasar 16px, skala hingga 200% tanpa kehilangan konten; panjang baris ideal 60–75 karakter.

---

## 6. Tata Letak

- **Grid 12 kolom**, kontainer maks **1200px**, gutter **24px**. Breakpoint: `<768` mobile (1 kolom), `768–1024` tablet (8), `>1024` desktop (12).
- **Spasi kelipatan 4px:** `--s1..--s16` = 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- **Radius:** xs 4 · sm 8 · md 12 · lg 16 · xl 24 · pill 999.
- **Elevasi:** `--sh-1` (kartu diam) · `--sh-2` (hover/dropdown) · `--sh-3` (modal/frame) — bayangan berbasis `rgba(0,54,49,…)` agar senada palet.

---

## 7. Ikonografi

CoreUI Icons (MIT) — kanvas 24×24, gaya garis, `fill: currentColor`. Ikon fungsional wajib `aria-label`; dekoratif `aria-hidden="true"`. Sekitar 77 ikon tertanam sebagai sprite inline dalam file HTML (navigasi, aksi, status, domain lingkungan: leaf, recycle, drop, fire, factory, truck).

---

## 8. Komponen (Inventori v2)

**Dasar** — Tombol (primary hijau, blue, orange CTA, secondary, outline — hover diisi `--g-50` pada 40% opasitas agar terbaca di latar terang & gelap, ghost — hover diisi `--g-50` penuh + border `--g-600` agar perubahan status jelas, danger; ukuran sm/md/lg; icon-only; loading; disabled) · Badge status · Chip filter · Tag removable · Search bar · Filter panel · Form (input, select, textarea, checkbox, radio, switch; status error/valid; hint perbaikan) · Dropzone unggah + file chip · Alert 4 varian.

**Navigasi** — Breadcrumb · Tabs (garis & pill) · Pagination · Stepper (alur permohonan 4 langkah) · Mega menu citizen-centric (3 kolom + panel akses cepat) · Accordion FAQ · User profile dropdown · Tooltip.

**Data** — Widget KPI (ikon + nilai + tren) · Data table (header hijau-700, badge in-cell, kolom angka mono) · Timeline pelacakan status · List group unduhan · Progress bar (3 warna) · Avatar & avatar group.

**Umpan balik** — Modal konfirmasi · Toast (success/info/danger) · Skeleton loading · Empty state · Spinner.

**Pola khusus KLH** — Kartu layanan (PTSP, Pengaduan, SRN PPI, Bursa Karbon, PPID, WCC) · Kartu berita · **Widget Chat Bot AI** (amanat KAK) · Toolbar aksesibilitas (kontras, perbesar teks, reset) · Footer instansi (alamat Menara Plaza Kuningan) · App frame dashboard (sidebar + topbar + KPI + chart).

**Chart** — Chart.js tertanam inline (bukan CDN): line (tren) & doughnut (distribusi kanal), palet dari token, `animation:false` untuk render sinkron.

Microcopy: kata kerja aktif berorientasi hasil ("Kirim Permohonan"), pesan error menjelaskan cara perbaikan ("NIK harus 16 digit").

---

## 9. Mode Tampilan

| Mode | Mekanisme |
|---|---|
| Gelap (dashboard) | `[data-theme="dark"]` — permukaan `#0B1614/#122019`, teks `#E8F2EF` |
| Kontras tinggi | `[data-contrast="high"]` — primary & garis menggelap, teks sekunder → ink-900 |
| Perbesar teks | Toolbar menaikkan `font-size` root 100→120→140% |
| Reduksi gerak | `prefers-reduced-motion` menonaktifkan seluruh animasi |

---

## 10. Aksesibilitas (WCAG 2.1 AA)

- [x] Kontras teruji per pasangan (lihat §4.6)
- [x] Seluruh interaksi dapat diakses keyboard; fokus `:focus-visible` outline biru 3px
- [x] Label ARIA pada ikon fungsional; skip-link "Lewati ke konten utama"
- [x] Skala teks 200% tanpa kehilangan konten; warna bukan satu-satunya pembawa makna
- Selaras UU 25/2009 (Pelayanan Publik), UU 14/2008 (KIP — modul PPID), SPBE.

---

## 11. Penerapan per Produk

| Produk | Komponen dominan |
|---|---|
| **Website Utama** | Mega menu, hero, kartu layanan & berita, search bar, chatbot, footer instansi, toolbar a11y |
| **PPID Web & Mobile** | Stepper permohonan, form + dropzone, tabs klasifikasi, timeline pelacakan, tabel, alert |
| **Dashboard Omni Channel** | Sidebar, topbar, widget KPI, data table, chart interaktif, mode gelap, manajemen peran |

---

## 12. Tata Kelola

- **Single source of truth:** semua nilai dari token `:root`; dilarang hardcode di komponen.
- **Penamaan berbasis peran** (`--success`, bukan `--green`); skala warna berbasis anchor logo.
- **Handoff:** token siap dipetakan ke Figma Variables & Flutter (PPID mobile).
- **Living documentation:** diperbarui tiap sprint; aset diserahkan lengkap agar instansi mandiri pasca serah terima.

---

## Lampiran — Token Inti (CSS)

```css
:root{
  /* Hijau KLH — primer (anchor logo 600) */
  --g-600:#005952; --g-700:#00453F; --g-800:#003631; --g-100:#DEF2F1;
  /* Biru KLH — sekunder (anchor logo 500) */
  --b-500:#147DEF; --b-600:#0E66C4; --b-700:#0B529D; --b-100:#DAE8F6;
  /* Oranye KLH — sekunder (anchor logo 500) */
  --o-500:#F97910; --o-700:#AE5104; --o-100:#F9E4D2;
  /* Status */
  --success:#0E7A4E; --warning:#AE5104; --danger:#C03A2B; --infoc:#0B529D;
  /* Netral */
  --ink-900:#10201D; --ink-500:#51625E; --line:#E1E8E6;
  --surface:#FFFFFF; --surface-2:#F5F9F8; --bg:#F2F6F5;
  /* Tipografi & layout */
  --font-display:'Plus Jakarta Sans',sans-serif; --font-body:'Inter',sans-serif;
  --container:1200px; --gutter:24px; --r-sm:8px; --r-md:12px; --r-lg:16px;
}
```

---

*Design System v2 untuk Kementerian Lingkungan Hidup / Badan Pengendalian Lingkungan Hidup — disusun oleh PT Bening Guru Semesta. Palet bersumber dari lambang resmi instansi. © 2026.*
