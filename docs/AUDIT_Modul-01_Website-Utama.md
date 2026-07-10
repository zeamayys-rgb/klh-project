# AUDIT Desain & QA — Modul 01 · Website Utama KLH/BPLH

**Proyek:** Pengembangan Konten UI Website KLH/BPLH · PT Bening Guru Semesta
**Tanggal audit:** 7 Juli 2026 · **Sifat:** laporan saja — **tidak ada file modul yang diubah**
**Ruang lingkup:** `klh-website-utama/` — 20 file HTML, diuji sebagai **35 varian URL** (termasuk varian query `?m=` `?a=` `?p=` `?id=` valid / tidak valid / tanpa query)
**Metode:** Playwright Chromium via `python3 -m http.server` — screenshot 1440px & 390px penuh per varian, pemantauan konsol & request gagal, link-check runtime (101 tautan internal), pemeriksaan DOM terprogram (h1, skip link, `aria-current`, alt, nama aksesibel, target sentuh, rasio kontras terkomputasi, urutan heading), 14 uji interaksi + 4 re-probe terarah, uji `file://` 2 halaman, serta analisis statis CSS/JS.
**Acuan:** `CLAUDE.md` · `docs/design.md` (v2) · `docs/F2_Checklist-Halaman.md` §01 · `docs/F2_Wireframe-notes.md` · `docs/F1_Persona-Journey.md`.

---

## A. Ringkasan Eksekutif

Modul 01 **sangat sehat secara fungsional**: nol error JavaScript di seluruh 35 varian halaman, nol request gagal, 101/101 tautan internal valid, `KLH_ROOT` benar di 20/20 halaman, seluruh interaksi kunci bekerja (mega menu, drawer, pencarian, filter, kalender, dialog serah-terima, chatbot, toolbar aksesibilitas dengan persistensi), dan tetap berfungsi penuh via `file://`. Kualitas visual konsisten dan profesional; fondasi token v2 dipatuhi dengan disiplin tinggi.

Temuan bermakna terkonsentrasi di **komponen bersama**, bukan halaman individual — artinya perbaikan murah (satu titik, efek seluruh situs). Empat hal utama: (1) **overflow horizontal 54px di 390px pada semua halaman** akibat `.utilbar` tanpa aturan responsif; (2) **teks meta `--ink-400` gagal kontras AA** (3,92:1) di ±13 halaman; (3) **dialog serah-terima `data-ext` hanya hidup di 4 halaman layanan** — tautan eksternal yang sama di mega menu/beranda/profil membuka tab baru tanpa konfirmasi; (4) **penanda "konten contoh" hanya ada di 5 halaman** padahal berita, profil pejabat + status LHKPN, dan statistik fiktif tampil tanpa penanda. Tidak ada temuan Kritis.

### Skor per Dimensi (1–5)

| Dimensi | Skor | Catatan singkat |
|---|:---:|---|
| 1. Kepatuhan token & spesifikasi | **4** | Token v2 dipakai disiplin; sisa warna mentah kecil di `components.css`; drift dokumen CLAUDE.md (A1-12) |
| 2. Konsistensi komponen & pola | **4** | Visual & ikon sangat konsisten; satu pola inti (`data-ext`) tidak merata (A1-03) |
| 3. Aksesibilitas WCAG 2.1 AA | **3** | Fondasi kuat (skip link, aria-current, alt 100%, keyboard OK); gagal kontras meta, target sentuh, label toggle (A1-02/04/05/06/07/08) |
| 4. Responsif | **3** | Layout konten adaptif baik; overflow utilbar menyeret semua halaman (A1-01) |
| 5. Fungsional / QA | **5** | Nol error JS, nol tautan putus, semua interaksi + fallback query invalid anggun, `file://` OK |

---

## B. Tabel Temuan

Severitas: **Kritis** (menghalangi penggunaan) · **Mayor** (melanggar standar proyek/WCAG AA, dampak luas) · **Minor** (pelanggaran terbatas/best-practice) · **Saran** (peningkatan opsional).
Ringkas: **0 Kritis · 5 Mayor · 6 Minor · 2 Saran**.

| ID | Sev. | Halaman | Lokasi | Temuan & Rekomendasi | Bukti |
|---|---|---|---|---|---|
| A1-01 | **Mayor** | Semua (20/20) | `assets/css/components.css:55-74` (`.utilbar`) | `scrollWidth` = **444px pada viewport 390px** di seluruh halaman — `.utilbar .container` flex `space-between` tanpa media query: brand membungkus 4 baris, aksi ("Masuk") terpotong keluar layar. Melanggar WCAG 1.4.10 Reflow. **Rekomendasi:** di `<768px` sembunyikan teks brand panjang (sisakan "Portal Resmi") dan ciutkan tombol utilbar menjadi ikon-saja ber-`aria-label`, atau izinkan `flex-wrap` + `row-gap`; target `scrollWidth ≤ 390`. | `audit-bukti/modul-01/ix-utilbar-390.png`, `index-390.png` |
| A1-02 | **Mayor** | ±13 hlm (detail artikel, indeks, galeri, beranda) | `tokens.css` `--ink-400:#75847F` dipakai `small`/`time` 12–14px | Teks meta (tanggal, "dilihat × kali") **3,92:1 pada putih** dan **3,59:1 pada `--bg`** — di bawah AA 4,5:1 untuk teks normal. **Rekomendasi:** ganti teks meta ke `--ink-500` (#51625E ≈ 6,4:1); cadangkan `--ink-400` untuk teks besar (≥24px / 18,66px bold) atau state disabled; tambahkan catatan pemakaian di `design.md` §4.5. | `audit-bukti/modul-01/detail-a1-1440.png` (blok meta di bawah judul) |
| A1-03 | **Mayor** | Semua (mega menu) + beranda, tata-kelola, struktur, detail-jabatan | `navbar.js:29-31`, `data/menu.js` (`ext:true`), `index.html:93,98`, `pages/profil/*` | Dialog serah-terima **hanya diimplementasikan `layanan-kelompok.js`** (4 hlm layanan). Tautan eksternal identik di mega menu (7 domain: OSS, LPSE, SP4N-LAPOR!, SiRUP, SRN, IDXCarbon, e-LHKPN), kartu beranda, dan halaman profil membuka tab baru langsung. SP4N-LAPOR! berperilaku beda tergantung lokasi klik — inkonsisten dengan konvensi CLAUDE.md ("tautan eksternal diberi `data-ext` → dialog"). Mitigasi yang sudah ada: ikon ↗ + `sr-only` "membuka situs lain" + `rel="noopener"`. **Rekomendasi:** angkat handler `openHo()` dari `layanan-kelompok.js` ke `main.js` (delegasi global `[data-ext]`), lalu beri atribut `data-ext` pada semua entri `ext:true` di `menu.js` & kartu beranda/profil. | `audit-bukti/modul-01/ix-megamenu.png` (tautan ↗ tanpa dialog) vs `ix-dataext-dialog.png` (dialog bekerja di hlm layanan) |
| A1-04 | **Mayor** | Semua | `.utilbar button` 31px · footer link 22px · `.pager` 40px · `.nav-link` 40–42px (desktop) | Kontrol di bawah standar proyek **"target sentuh ≥ 44px"** (CLAUDE.md): tombol utilbar 31px & tautan footer 22px **tampil juga di mobile**; footer 22px bahkan di bawah WCAG 2.2 AA (24px). Pembanding: drawer mobile sudah benar (54px). **Rekomendasi:** `min-height:44px` untuk utilbar & pager; beri `padding-block` pada tautan footer (≥12px) minimal pada breakpoint sentuh. | data terukur di `sweep-results.json`; visual `index-390.png` |
| A1-05 | **Mayor** | detail artikel (7 slug), detail-jabatan (9 id), program, beranda (statistik) | Konten `assets/js/data/content.js` dirender tanpa penanda | Penanda "konten contoh" hanya ada di **5 halaman** (agenda "Konten contoh", galeri "Pratinjau antarmuka", ppid, struktur-organisasi, tata-kelola). **Berita ber-tanggal & jumlah-dilihat fiktif, nama pejabat + status LHKPN fiktif, dan angka statistik beranda tampil tanpa penanda** — berisiko dikutip sebagai fakta saat demo (CLAUDE.md: "konten dummy selalu berpenanda"; Log Deliverable M01 mengklaim "dummy berpenanda" — belum merata). **Rekomendasi:** penanda global satu titik — badge kecil "Prototipe · konten contoh" di footer (`footer.js`) atau ribbon utilbar — plus baris keterangan pada template detail artikel & detail jabatan. | `audit-bukti/modul-01/jabatan-menteri-1440.png` (LHKPN "Lapor 2025 ✓" tanpa penanda) |
| A1-06 | Minor | Semua (panel aksesibilitas) | `widgets.js:41-42,130-138` | Toggle "Kontras tinggi" bernama aksesibel **"Aktif"** saja — label "Kontras tinggi" ada di `span.lbl` yang tidak terasosiasi (tanpa `aria-labelledby`); screen reader mendengar "Aktif, tombol, belum ditekan" tanpa konteks. (Tombol ukuran teks sudah baik: "Perbesar teks".) **Rekomendasi:** `aria-label="Aktifkan kontras tinggi"` atau `aria-labelledby` ke id label. Fungsi & persistensi sendiri **lolos**: `data-contrast=high` + `klh-contrast` bertahan setelah reload. | `audit-bukti/modul-01/ix-a11y-panel.png` |
| A1-07 | Minor | 4 hlm layanan | `layanan-kelompok.js:66-99` | Dialog serah-terima `aria-modal="true"` **tanpa focus trap** — 3× Tab keluar dari dialog ke konten belakang; setelah Esc fokus jatuh ke skip link, bukan kembali ke tautan pemicu. Fokus awal (→ "Lanjutkan") dan Esc-untuk-tutup sudah benar. **Rekomendasi:** loop fokus sederhana (keydown Tab pada elemen pertama/terakhir) + simpan/kembalikan elemen pemicu saat tutup. | `audit-bukti/modul-01/ix-dataext-dialog.png` |
| A1-08 | Minor | Semua | `footer.js:15`, `navbar.js:34` (`<h5>`) | Komponen bersama memakai `<h5>` untuk judul kolom footer & panel mega menu → **lompatan heading h1→h5 / h2→h5 di semua halaman** (35/35 varian terdeteksi). Bukan kegagalan AA keras, tapi menurunkan navigasi per-heading screen reader. **Rekomendasi:** ganti ke `<h2>`/`<h3>` dengan kelas visual kecil (mis. `.h-label`), atau `role="heading" aria-level="2"`. | `sweep-results.json` (headingJump per halaman) |
| A1-09 | Minor | — | `components.css:40-44,378-380` dll. | Warna mentah di luar token: `#A93226` (hover btn-danger), `#3A1B02` (teks btn-orange), `#0A5A3A`/`#8E2A1F` (teks alert), plus `#fff` ±30 titik. Kontrasnya aman, tapi melanggar `design.md` §12 ("dilarang hardcode di komponen") dan menyulitkan theming (mode gelap DS §9 kelak). **Rekomendasi:** tambahkan token turunan (`--danger-700`, `--on-orange`, `--success-ink`, `--on-primary`) di `tokens.css` saat sprint tema berikutnya. | statis (grep) |
| A1-10 | Minor | beranda, tata-kelola | akhiran `%`/satuan `small` pada angka statistik (`--g-500 #07887D`, 18px) | Kontras **4,35:1** — tepat di bawah 4,5:1 untuk ukuran <18,66px non-bold. **Rekomendasi:** pakai `--g-600` untuk teks satuan, atau jadikan bagian angka besar (≥24px). | `sweep-results.json` |
| A1-11 | Minor | Semua (chatbot), detail artikel | `widgets.js:61` ("👋"), `pages/informasi/detail.html:60` ("✓") | Emoji 👋 di sapaan chatbot dan karakter "✓" sebagai indikator sukses salin-tautan. Larangan CLAUDE.md tepatnya untuk *emoji sebagai ikon*; ini area abu-abu, tapi demi konsistensi bahasa visual (semua ikon dari `icons.js`) dan render lintas-platform yang stabil sebaiknya diseragamkan. **Rekomendasi:** hapus 👋; ganti "✓" dengan `KLH.iconSVG('check')`. | `audit-bukti/modul-01/ix-chatbot.png` |
| A1-12 | Saran | — | `CLAUDE.md` §Design tokens | CLAUDE.md masih menyebut **primary `#1B7A4B`** (palet v1 wireframe), sedangkan implementasi & `design.md` v2 = **`#005952`** (`--g-600`). Modul 02/03 sudah benar ikut tokens.css, tapi drift ini bisa menyesatkan sesi/vendor berikutnya. **Rekomendasi:** perbarui satu baris di CLAUDE.md. | `tokens.css:16` vs CLAUDE.md |
| A1-13 | Saran | Semua | `navbar.js:79` | Skip link, navbar, dan footer **dirender via JS** — tanpa JavaScript halaman tak punya navigasi/skip link. Untuk prototipe dapat diterima (semua target uji ber-JS); catat sebagai batasan handoff produksi (SSR/HTML statis untuk kerangka utama). | — |

---

## C. Hasil per Halaman

**Tidak ada defek unik per halaman.** Seluruh temuan bersumber di komponen/tokens bersama (utilbar, navbar/mega menu, footer, panel a11y, dialog, data). 35/35 varian lolos pemeriksaan halaman-spesifik berikut:

- **Nol error JS & nol request gagal** — 35/35 varian (termasuk 403 fonts tidak terjadi; semua aset lokal).
- **Link-check:** 101 tautan internal unik (statik + hasil render JS) → **0 putus**. Semua `src` gambar/skrip termuat (0 respons ≥400).
- **Struktur dasar:** `lang="id"` ✓, tepat **satu `h1`** ✓ (termasuk 4 halaman layanan yang h1-nya dirender JS), skip link + target `#konten` ✓, `aria-current` nav ✓ (35/35; pada 404 memang tak ada menu aktif — benar secara semantik), **semua `<img>` ber-`alt`** ✓, tidak ada tombol tanpa nama aksesibel ✓.
- **Template & fallback:** `indeks.html?m=` (berita/video/permen), `detail.html?a=`, `detail.html?p=`, `detail-jabatan.html?id=` — nilai valid ✓; **nilai tak dikenal & tanpa query jatuh anggun** (daftar default/pesan kosong, tanpa error) ✓.
- **Interaksi (18 uji, semua lolos):** mega menu (aria-expanded, Esc menutup — verifikasi ulang: sembunyi via `visibility`, fokus tetap di pemicu) · drawer mobile (aria-expanded, Esc, tinggi tautan 54px) · pencarian `?q=` + status kosong · sidebar indeks pindah modul + cari-dalam-modul · filter audiens program (7→3 kartu) · kalender agenda maju/mundur (Juli→Agustus→Juni 2026) · bagan struktur → detail jabatan · dialog `data-ext` (buka, fokus ke Lanjutkan, Batal & Esc menutup, scrim) · salin tautan artikel (badge "Tautan tersalin ✓" muncul) · chatbot (buka, balasan bot) · toolbar aksesibilitas (kontras + ukuran teks 150%, **persisten setelah reload**, kunci localStorage hanya `klh-contrast`/`klh-fontsize` ber-try/catch) · 404 (tautan kembali + pencarian).
- **`file://`:** `index.html` & `pages/profil/detail-jabatan.html?id=menteri` — render penuh (navbar, footer, 160/131 ikon SVG), nol error. ✓
- **Galeri video:** pemutar sengaja belum ditautkan — **ada keterangan "Pratinjau antarmuka"** di halaman; bukan defek.

## D. Catatan Metodologi (false positive yang disingkirkan)

1. Deteksi kontras otomatis awalnya menandai teks putih/`--g-200` hero "1,09–1,21:1" di 27 halaman — **false positive**: latar hero adalah *background-image* gradien `--g-800→--g-900` yang tidak terbaca pemindai `backgroundColor`; rasio riil ±10–13:1 (AAA). Diverifikasi manual via `components.css:243-248` + screenshot.
2. "Mega menu tidak menutup dengan Esc" pada uji pertama — **false positive**: menu menutup via `visibility:hidden` (display tetap `grid`); `aria-expanded` menjadi `false`. Lolos.
3. `aria-current` absen di 404 — **bukan defek**; tidak ada item nav yang aktif di halaman error.

## E. Lampiran Bukti

`docs/audit-bukti/modul-01/`: `ix-utilbar-390.png` (A1-01) · `index-390.png` (A1-01/04) · `detail-a1-1440.png` (A1-02) · `ix-megamenu.png` + `ix-dataext-dialog.png` (A1-03/07) · `jabatan-menteri-1440.png` (A1-05) · `ix-a11y-panel.png` (A1-06) · `ix-chatbot.png` (A1-11) · `index-1440.png` (referensi kualitas visual) · `ix-drawer-390.png` (pembanding positif target sentuh).
Data mentah lengkap (35 varian × screenshot 1440/390, `sweep-results.json`, `interactions-results.json`) di scratchpad sesi audit.

---

## F. Tindak Lanjut Perbaikan (10 Juli 2026)

Atas permintaan pemilik proyek, **seluruh temuan A1-01 … A1-12 telah diperbaiki** (A1-13 dicatat sebagai batasan handoff di README modul). Ringkasan implementasi:

| ID | Perbaikan |
|---|---|
| A1-01 | `components.css`: media query <768px — teks panjang utilbar dibungkus `span.utilbar__long` (disembunyikan di mobile), `flex-wrap` sebagai pengaman. `scrollWidth` kini 390/390 di semua halaman. |
| A1-02 | Seluruh `color: var(--ink-400)` di `components.css` & `pages.css` → `--ink-500`; catatan pemakaian ditambah di `design.md` §4.5. |
| A1-03 | Handler dialog serah-terima diangkat ke `main.js` (delegasi global `[data-ext]`); atribut `data-ext` ditambahkan di mega menu & drawer (`navbar.js`), footer (`footer.js`), kartu beranda, dan tautan e-LHKPN/SiRUP/LPSE di halaman profil. `layanan-kelompok.js` tidak lagi memuat dialog lokal. |
| A1-04 | `min-height:44px` tombol utilbar & pager; tautan footer diberi `padding-block:12px` + margin negatif (hit-area ≥44px tanpa mengubah ritme visual). |
| A1-05 | Badge global "Prototipe · konten contoh" di `footer.js` (tampil di semua halaman) + baris penanda pada template detail artikel & detail jabatan. |
| A1-06 | Toggle kontras kini ber-`aria-label="Aktifkan kontras tinggi"`. |
| A1-07 | Dialog di `main.js` dilengkapi loop fokus Tab/Shift+Tab; Esc mengembalikan fokus ke pemicu (fallback ke tombol nav induk bila pemicu berada di mega menu yang sudah menutup); `stopPropagation` fase capture agar Esc tidak ikut menutup menu di belakang dialog. |
| A1-08 | `<h5>` → `<h3>` (kolom mega menu) dan `<h2 class="footer-h">` (kolom footer); nol `<h5>` tersisa. |
| A1-09 | Token turunan `--danger-700`, `--on-orange`, `--success-ink`, `--danger-ink` ditambahkan di `tokens.css` dan dipakai `components.css`. |
| A1-10 | Satuan statistik: `--g-600` / `--b-600` / `--o-700` (AA untuk teks <18,66px). |
| A1-11 | Emoji 👋 dihapus dari sapaan chatbot; "✓" salin-tautan diganti ikon `check` dari `icons.js`. |
| A1-12 | `CLAUDE.md` diperbarui: primary `#005952` (`--g-600`). |

**Verifikasi ulang (Playwright Chromium, 10 Jul 2026):** 20 halaman × 2 viewport (40 render M01) — nol error JS, nol overflow 390px; 18+ cek terarah lolos (dialog `data-ext` dari mega menu/kartu beranda/halaman layanan, focus trap + pengembalian fokus, regresi Esc drawer & mega menu, target sentuh terukur 44–46px, badge footer, penanda konten contoh, nol `<h5>`). Bukti: `audit-bukti/modul-01/fix-utilbar-390.png`, `fix-dataext-megamenu.png`, `fix-footer-badge.png`.

---

*Audit oleh Claude Code (sesi 7 Jul 2026) atas permintaan PROMPT_Audit-Modul-01. Tindak lanjut perbaikan dieksekusi & diverifikasi ulang pada 10 Jul 2026 atas permintaan pemilik proyek (pengecualian eksplisit atas status final Modul 01).*
