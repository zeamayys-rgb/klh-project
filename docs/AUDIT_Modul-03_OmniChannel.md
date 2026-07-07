# AUDIT Desain & QA — Modul 03 · Omni Channel Dashboard

**Tanggal audit:** 7 Juli 2026 · **Auditor:** QA/desain (sesi audit terpisah)
**Objek:** `klh-omni-dashboard/` — 12 file HTML + panel notifikasi topbar (13 entri checklist)
**Acuan:** `CLAUDE.md` · `docs/design.md` · `docs/F2_Checklist-Halaman.md` §03 · `docs/F2_Wireframe-notes.md` (WF-04, WF-22–26) · `docs/F1_Persona-Journey.md` (P3 Ratna) · `PROMPT_Modul-03_OmniChannel.md`
**Metode:** telaah statis seluruh kode (12 HTML, `pages.css`, `appshell.js`, `omni.js`, `main.js`, fondasi) + uji runtime Playwright Chromium (`python3 -m http.server`, viewport 1440×900 & 390×844, konsol, scrollWidth, interaksi kunci, varian query, `file://`).
**Bukti:** `docs/audit-bukti/modul-03/` (34 berkas — screenshot per halaman 1440/390, bukti bug `bug-*`, bukti perbaikan `fix-*`, `hasil-runtime-sisa.json`).

---

## Ringkasan eksekutif

Modul 03 **solid dan sesuai spesifikasi** pada arsitektur, token, data terpusat, dan alur inti: 24 pemeriksaan halaman (konsol + scrollWidth 390) **semuanya lulus tanpa error JS dan tanpa overflow horizontal**; seluruh interaksi kunci (login→MFA→dashboard, filter inbox 7 kanal, balas demo, template, tab/filter tiket, SLA timer hidup, eskalasi/disposisi, ekspor PDF/Excel/CSV, panel notifikasi, matriks 6 peran, audit log, persistensi preferensi a11y, `file://`) berfungsi.

Audit menemukan **1 temuan Kritis dan 3 Mayor** — semuanya **sudah diperbaiki dan diverifikasi ulang** (20 cek pasca-perbaikan lulus, termasuk regresi desktop):

1. **A3-01 (Kritis)** — di <1024px, menutup drawer lewat klik scrim/Escape meninggalkan overlay scrim yang **memblokir seluruh klik halaman** (aplikasi tak bisa dipakai sampai reload).
2. **A3-02 (Mayor)** — kartu di `kanal.html` **hilang permanen** (opacity 0) setelah aksi "Otorisasi ulang"/"Sinkronkan semua" karena `data-reveal` pada markup yang dirender ulang.
3. **A3-03 (Mayor)** — tautan sidebar tetap dapat menerima fokus keyboard saat drawer tertutup (fokus tersembunyi off-screen, WCAG 2.4.3) dan fokus tidak dikelola saat buka/tutup drawer.
4. **A3-04 (Mayor)** — hasil pencarian global topbar disembunyikan 180 ms setelah blur sehingga **tidak pernah terjangkau lewat keyboard**.

Temuan Minor/Saran (dilaporkan, tidak diwajibkan diperbaiki) berpusat pada semantik ARIA (listbox/tab), target sentuh <44 px di popover, dan kontras mikro-teks.

## Skor per dimensi (1–5)

| # | Dimensi | Skor | Catatan |
|---|---|---|---|
| 1 | Kepatuhan token & spesifikasi | **5** | Fondasi disalin identik dari Modul 01 (mandiri, tanpa referensi lintas folder); Chart.js 4.4.1 UMD lokal `assets/js/vendor/chart.umd.js` + `animation:false`; data terpusat `omni.js` melebihi ambang (15 percakapan lintas 7 kanal, 12 tiket SLA bervariasi aman/mendekati/lewat, KPI, 6 peran, 10 log audit); markup bebas konten dinamis hard-coded; penanda "konten contoh" di sidebar + `demo-note` tiap halaman. Palet chart berupa literal nilai token (kanvas tidak membaca CSS var) — wajar. |
| 2 | Konsistensi app shell | **4** | `<klh-sidebar>` (ikon+label, collapsible, `aria-current`) & `<klh-topbar>` (pencarian global, notifikasi, profil, a11y) konsisten di 11 halaman; login tanpa app shell ✓; ikon 100% dari `icons.js` (audit nama ikon: semua terdefinisi); SLA/status selalu ikon+teks. Dikurangi bug scrim & sinkronisasi `aria-expanded` (A3-01/05, kini diperbaiki). |
| 3 | Aksesibilitas WCAG 2.1 AA | **3 → 4 setelah perbaikan** | Skip link ✓ · satu `h1`/halaman ✓ · form login ber-label + error ikon+teks via `aria-describedby` ✓ · tabel ber-`scope="col"` + `aria-label` ✓ · grafik punya alternatif teks (`role="img"` + `aria-label` naratif angka, data juga tersedia sebagai tabel/daftar) ✓ · `prefers-reduced-motion` dihormati ✓ · preferensi kontras/teks persist ✓. Kekurangan awal: fokus tersembunyi & fokus tak terkelola pada drawer (A3-03, diperbaiki), pencarian tak terjangkau keyboard (A3-04, diperbaiki); sisanya Minor (A3-06…A3-09). |
| 4 | Responsif | **5** | 12 halaman × 2 viewport: `scrollWidth` ≤ 390 semua; inbox 3 panel → pola mobile jelas (daftar↔percakapan via `show-conv` + tombol kembali, panel info menyusut dulu di <1280); tabel tergulir dalam `.tbl-wrap` (dengan `position:relative` menahan `.sr-only`); KPI/grid runtuh bertahap 4→2→1. |
| 5 | Fungsional / QA | **3 → 5 setelah perbaikan** | Nol error JS di 12 halaman + `file://` (2 halaman); link-check internal lulus (semua `href`/`src` valid, `KLH_ROOT` dideklarasikan 12/12); seluruh interaksi kunci lulus. Skor awal tertahan oleh A3-01 (aplikasi terkunci di mobile) & A3-02; keduanya diperbaiki + diverifikasi ulang tanpa regresi. |

## Tabel temuan

| ID | Severitas | Halaman | Lokasi | Temuan & bukti | Rekomendasi | Status |
|---|---|---|---|---|---|---|
| A3-01 | **Kritis** | Semua halaman ber-app-shell, viewport <1024px | `appshell.js` (handler scrim/Escape/burger) · `pages.css` `.sb-scrim` | Menutup drawer via klik scrim atau Escape hanya melepas `body.sb-open` tanpa menyembunyikan scrim (`hidden` tidak di-reset) → overlay gelap `z-index:135` menutupi halaman dan **memblokir semua interaksi** (Playwright: klik burger timeout 30 dtk, `elementFromPoint` = `sb-scrim`). Bukti: `bug-scrim-390.png`. | Satu fungsi terpusat `KLH.setDrawer(buka)` yang menyinkronkan `body.sb-open`, `scrim.hidden`, `aria-expanded` burger, dan fokus; dipakai burger, scrim, dan Escape. | **Diperbaiki** — verifikasi: `fix-drawer-390.png`, 8 cek pass |
| A3-02 | **Mayor** | `kanal.html` | `kanal.html` fungsi `render()` | Kartu kanal diberi `data-reveal` (opacity 0 sampai di-observe IntersectionObserver saat DOMContentLoaded); setelah "Otorisasi ulang"/"Sinkronkan semua" grid dirender ulang → elemen baru tak pernah di-observe → **semua kartu tak terlihat permanen** (opacity 0 terukur). Bukti: `bug-kanal-rerender-1440.png`. | Hapus `data-reveal` dari markup yang dirender ulang (animasi reveal hanya untuk konten statis). | **Diperbaiki** — verifikasi: `fix-kanal-rerender-1440.png` (opacity 1 setelah kedua aksi) |
| A3-03 | **Mayor** | Semua halaman ber-app-shell, <1024px | `pages.css` media <1024 `.sidebar` · `appshell.js` | Drawer tertutup hanya `translateX(-100%)` → 12 tautan sidebar tetap dalam urutan Tab (fokus tersembunyi off-screen, WCAG 2.4.3); saat dibuka fokus tidak dipindahkan ke drawer, saat ditutup tidak dikembalikan ke burger ("fokus terkelola" pada spesifikasi). Terverifikasi runtime: `.sb-link.focus()` berhasil saat drawer tertutup. | `visibility:hidden` saat tertutup (ikut transisi agar animasi tetap halus) + `KLH.setDrawer` memindahkan fokus ke tautan pertama saat buka dan kembali ke burger saat tutup. | **Diperbaiki** — verifikasi: fokus tak bisa masuk saat tertutup, pindah ke drawer saat terbuka, kembali ke burger saat ditutup |
| A3-04 | **Mayor** | Semua halaman ber-app-shell | `appshell.js` (pencarian global) | `blur` + `setTimeout(180ms)` menyembunyikan `#tb-sr` tepat setelah pengguna menekan Tab → tautan hasil pencarian **tidak pernah dapat dijangkau keyboard** (terverifikasi: setelah Tab, `hidden=true`, fokus terlempar ke body). | Ganti dengan `focusout` pada pembungkus `.tb-search` yang hanya menutup bila `relatedTarget` di luar area + Escape menutup dan mengembalikan fokus ke input. | **Diperbaiki** — verifikasi: `fix-search-keyboard-1440.png` (Tab → fokus di hasil pertama `inbox.html?c=C-2141`, tutup saat fokus keluar, Escape berfungsi) |
| A3-05 | Minor | idem A3-01 | `appshell.js` | `aria-expanded` burger tidak disinkronkan saat drawer ditutup via scrim/Escape (hanya via klik burger). | Termasuk cakupan `KLH.setDrawer`. | **Diperbaiki** (bersama A3-01) |
| A3-06 | Minor | `inbox.html` | daftar percakapan (`role="listbox"` + tombol `role="option"`) | Pola ARIA listbox menjanjikan navigasi panah + `aria-activedescendant` yang tidak diimplementasikan; tombol sudah natively focusable sehingga semantik ganda membingungkan SR. | Ganti ke `<ul>` biasa (atau `role="list"`) dengan tombol di dalamnya; `aria-selected` diganti `aria-current="true"`. | Dilaporkan |
| A3-07 | Minor | `tiket.html` | toolbar (`role="tablist"/"tab"`) | Tab filter status tanpa `tabpanel` terasosiasi dan tanpa navigasi panah — bukan pola tab sesungguhnya (memfilter tabel yang sama). | Gunakan tombol filter dengan `aria-pressed` (seperti chip filter notifikasi). | Dilaporkan |
| A3-08 | Minor | Topbar & pengaturan | `pages.css` `.a11y-ctrl button` (38px) · `.notif-filter .fchip` (32px) · `.switch` (46×26) | Beberapa kontrol di popover/pengaturan di bawah target sentuh 44px. | Naikkan `min-height`/`min-width` ke 44px atau tambah padding hit-area (mis. pseudo-element). | Dilaporkan |
| A3-09 | Minor | Inbox & tiket-detail | `pages.css` `.msg time` (10.5px, `--ink-400` pada putih ≈ 3,9:1) | Stempel waktu pesan warga di bawah rasio AA teks kecil 4,5:1. | Gunakan `--ink-500` (≈ 5,9:1) untuk stempel waktu pesan warga. | Dilaporkan |
| A3-10 | Saran | `tiket-detail.html` | banner `#tkt-404` | Akses **tanpa** query menampilkan pesan yang sama dengan ID tidak valid ("Tiket tidak ditemukan") — fallback berjalan anggun, tetapi pesannya kurang tepat untuk kasus tanpa nomor. | Bedakan copy: tanpa query → "Tidak ada nomor tiket pada tautan — menampilkan contoh tiket aktif." | Dilaporkan |
| A3-11 | Saran | `login.html` | input OTP | Tempel (paste) kode 6 digit hanya mengisi kotak pertama. | Handler `paste` yang mendistribusikan digit ke seluruh kotak. | Dilaporkan |
| A3-12 | Saran | `login.html` · `profil.html` | validasi form | `aria-invalid="true"` tidak diset pada input yang gagal validasi (error sudah terasosiasi via `aria-describedby`). | Set/lepas `aria-invalid` di `setErr()`. | Dilaporkan |
| A3-13 | Saran | `inbox.html` | `<section class="ib-conv" aria-live="polite">` | Live region mencakup seluruh panel percakapan — setiap render ulang berpotensi dibacakan penuh oleh screen reader. | Persempit `aria-live` ke elemen status kecil (mis. konfirmasi kirim). | Dilaporkan |
| A3-14 | Saran | `index.html` | KPI "Rata-rata Respons Pertama" | Delta "−3 mnt" memakai ikon naik/warna sukses (arah = perbaikan). Konsisten secara makna, tapi ikon panah-naik untuk angka yang turun bisa membingungkan sekilas. | Pertimbangkan ikon panah-turun hijau untuk metrik "lebih kecil lebih baik". | Dilaporkan |

## Hasil uji runtime (ringkasan)

- **Konsol:** 12 halaman × 1440px — nol error JS (403 Google Fonts diabaikan sesuai protokol); ulang pasca-perbaikan pada index/inbox/kanal/tiket — tetap nol.
- **Responsif:** 12 halaman × 390px — `scrollWidth` = 390 semua (tidak ada overflow).
- **`tiket-detail.html?t=`:** `TKT-2026-0728` (aman/ok) · `TKT-2026-0730` (mendekati → kelas `warn`) · `TKT-2026-0724` (lewat → "−00:40:00 melewati tenggat", timer berdetak per detik) · `?t=TIDAK-VALID` dan tanpa query → banner + fallback tiket aktif pertama, nol error.
- **Interaksi:** login validasi kosong → 3 pesan error; login→MFA→redirect + nama sesi di topbar ✓ · filter inbox kanal (15→3 WA) / status / cari + buka percakapan + template variabel terisi + kirim balasan ✓ · tab & filter tiket ✓ · eskalasi/disposisi/ubah status/balas di tiket-detail menambah log ✓ · ekspor PDF/Excel/CSV toast ✓ · panel notifikasi buka/filter/tandai dibaca/Escape ✓ · saklar routing ✓ · matriks 6 peran × 9 izin ✓ · filter audit ✓ · preferensi kontras+teks persist antar halaman ✓.
- **`file://`:** `login.html` & `index.html` dibuka langsung — render + nol error.
- **Pasca-perbaikan:** 20 cek verifikasi (A3-01…A3-04 + regresi konsol 4 halaman + sidebar desktop collapse) — semua lulus.

## Berkas yang diubah pada perbaikan

- `assets/js/components/appshell.js` — fungsi terpusat `KLH.setDrawer()` (scrim + `aria-expanded` + fokus), handler burger/scrim/Escape memakainya; pencarian global: `focusout` ber-`relatedTarget` + Escape (menggantikan `blur`+timeout).
- `assets/css/pages.css` — drawer <1024px: `visibility` ikut transisi (mencegah fokus tersembunyi tanpa mematikan animasi).
- `kanal.html` — `data-reveal` dihapus dari kartu yang dirender ulang.
- `klh-omni-dashboard.zip` diperbarui setelah verifikasi ulang.

> Seluruh temuan Minor/Saran (A3-06…A3-14) berdampak rendah dan tidak menghalangi serah terima; direkomendasikan masuk backlog penyempurnaan bersama modul lain agar konsisten lintas produk.
