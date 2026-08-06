/* ============================================================
   KLH.cms — data dummy terpusat Modul 04 · CMS Konten KLH/BPLH
   Seluruh entri adalah KONTEN CONTOH untuk prototipe UI —
   nama, dokumen, dan tanggal fiktif; siap diganti data produksi.
   Dipakai oleh: login, index, konten, konten-edit, agenda, ppid,
   media, pengguna + cmsshell.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  /* ---- Sesi demo client-side (flag saja, bukan data inti) ---- */
  KLH.session = {
    get: function () {
      try { return JSON.parse(localStorage.getItem('klh-cms-sesi')); } catch (e) { return null; }
    },
    set: function (s) {
      try { localStorage.setItem('klh-cms-sesi', JSON.stringify(s)); } catch (e) {}
    },
    clear: function () {
      try { localStorage.removeItem('klh-cms-sesi'); } catch (e) {}
    }
  };

  /* ---- Util kecil bersama ---- */
  KLH.qs = function (name) {
    try { return new URLSearchParams(window.location.search).get(name) || ''; } catch (e) { return ''; }
  };
  var BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  KLH.fmtDate = function (iso) {
    var d = String(iso).split('T')[0].split('-');
    if (d.length !== 3) return iso;
    return parseInt(d[2], 10) + ' ' + (BULAN[parseInt(d[1], 10) - 1] || d[1]) + ' ' + d[0];
  };
  KLH.fmtTime = function (iso) {
    var t = String(iso).split('T')[1];
    return t ? t.slice(0, 5) : '';
  };
  KLH.fmtDateTime = function (iso) {
    return KLH.fmtDate(iso) + ' · ' + KLH.fmtTime(iso);
  };

  /* ---- Badge status alur konten (Draf → Review → Terbit) ---- */
  var STATUS = {
    terbit:   { label: 'Terbit',            cls: 'bg-success' },
    review:   { label: 'Menunggu Review',   cls: 'bg-warning' },
    draf:     { label: 'Draf',              cls: 'bg-neutral' },
    terjadwal:{ label: 'Terjadwal',         cls: 'bg-info' },
    arsip:    { label: 'Diarsipkan',        cls: 'bg-neutral' }
  };
  KLH.statusBadge = function (s) {
    var v = STATUS[s] || STATUS.draf;
    return '<span class="badge ' + v.cls + '"><span class="dot" aria-hidden="true"></span>' + v.label + '</span>';
  };
  KLH.statusLabel = function (s) { return (STATUS[s] || STATUS.draf).label; };

  /* ---- Badge produk tujuan ---- */
  var PRODUK = {
    web:  { label: 'Website Utama', cls: 'bg-brand' },
    ppid: { label: 'PPID',          cls: 'bg-info' },
    omni: { label: 'Omni Channel',  cls: 'bg-orange' }
  };
  KLH.produkBadge = function (p) {
    var v = PRODUK[p] || PRODUK.web;
    return '<span class="badge ' + v.cls + '">' + v.label + '</span>';
  };

  KLH.cms = {

    /* ---- Jangkar waktu demo ---- */
    now: '2026-07-07T10:15:00',

    /* ---- Admin aktif (persona pengelola konten) ---- */
    admin: {
      nama: 'Dewi Anggraini', inisial: 'DA',
      peran: 'Editor Konten', unit: 'Biro Hubungan Masyarakat',
      email: 'dewi.anggraini@klh.go.id'
    },

    /* ---- Artikel / konten Website Utama ---- */
    artikel: [
      { id: 'ART-0912', judul: 'Wamen LH Tinjau Penanganan Dampak El Nino di TPA Regional', kategori: 'Berita', penulis: 'Dewi Anggraini', status: 'terbit', t: '2026-07-05T09:20:00', foto: 'wamen-el-nino-tpa.jpg', ringkas: 'Kunjungan kerja meninjau kesiapan TPA menghadapi musim kemarau panjang.' },
      { id: 'ART-0911', judul: 'Perpanjangan Program Rehabilitasi Mangrove Pesisir Utara', kategori: 'Berita', penulis: 'Fajar Nugraha', status: 'review', t: '2026-07-06T15:40:00', foto: 'mangrove-perpanjangan.jpg', ringkas: 'Target 12.000 hektare mangrove direhabilitasi hingga akhir 2027.' },
      { id: 'ART-0910', judul: 'Indonesia–Singapura Jajaki Kerja Sama Pasar Karbon', kategori: 'Berita', penulis: 'Dewi Anggraini', status: 'terbit', t: '2026-07-04T13:05:00', foto: 'pasar-karbon-singapura.jpg', ringkas: 'Nota kesepahaman perdagangan karbon lintas negara memasuki tahap teknis.' },
      { id: 'ART-0909', judul: 'Pengumuman Seleksi Terbuka JPT Madya di Lingkungan KLH', kategori: 'Pengumuman', penulis: 'Sekretariat', status: 'terbit', t: '2026-07-03T08:00:00', foto: 'seleksi-jpt-madya.jpg', ringkas: 'Pendaftaran dibuka 7–21 Juli 2026 melalui portal SSCASN.' },
      { id: 'ART-0908', judul: 'Gerakan Kelana: Anak Muda Menjaga Alam Nusantara', kategori: 'Program', penulis: 'Rio Pratama', status: 'terjadwal', t: '2026-07-09T07:00:00', foto: 'kelana-anak-muda.jpg', ringkas: 'Kampanye kolaborasi komunitas muda di 34 provinsi — tayang otomatis 9 Juli.' },
      { id: 'ART-0907', judul: 'Brebes Asri: Kolaborasi Kabupaten Menuju Adipura', kategori: 'Berita', penulis: 'Fajar Nugraha', status: 'terbit', t: '2026-07-02T10:30:00', foto: 'brebes-asri.jpg', ringkas: 'Praktik baik pengelolaan sampah kabupaten dengan partisipasi warga.' },
      { id: 'ART-0906', judul: 'Penanaman Mangrove Serentak di Teluk Sumbawa', kategori: 'Berita', penulis: 'Dewi Anggraini', status: 'terbit', t: '2026-07-01T09:00:00', foto: 'mangrove-sumbawa.jpg', ringkas: '25.000 bibit ditanam bersama masyarakat pesisir dan TNI AL.' },
      { id: 'ART-0905', judul: 'Optimalisasi TPA Jatiwaringin Pasca-Revitalisasi', kategori: 'Berita', penulis: 'Rio Pratama', status: 'review', t: '2026-07-06T11:10:00', foto: 'tpa-jatiwaringin.jpg', ringkas: 'Kapasitas olah sampah naik 40% dengan teknologi sanitary landfill.' },
      { id: 'ART-0904', judul: 'Menteri LH Lantik Pejabat Pimpinan Tinggi Pratama', kategori: 'Berita', penulis: 'Sekretariat', status: 'terbit', t: '2026-06-30T14:00:00', foto: 'lantik-pejabat.jpg', ringkas: 'Sebelas pejabat dilantik untuk memperkuat pengendalian lingkungan.' },
      { id: 'ART-0903', judul: 'Panduan Pengelolaan Sampah Rumah Tangga (Draf)', kategori: 'Program', penulis: 'Dewi Anggraini', status: 'draf', t: '2026-07-06T16:55:00', foto: '', ringkas: 'Materi edukasi pemilahan sampah — menunggu foto & infografik.' }
    ],

    /* ---- Agenda & kegiatan (kalender M01) ---- */
    agenda: [
      { id: 'AGD-114', judul: 'Rakor Pengendalian Karhutla Semester II', jenis: 'agenda', mulai: '2026-07-10', lokasi: 'Kantor KLH Jakarta', status: 'terbit' },
      { id: 'AGD-113', judul: 'Hari Populasi Sedunia', jenis: 'hari', mulai: '2026-07-11', lokasi: '—', status: 'terbit' },
      { id: 'AGD-112', judul: 'Sosialisasi Perizinan Pengelolaan Limbah B3 (batch 3)', jenis: 'agenda', mulai: '2026-07-15', lokasi: 'Daring · Zoom', status: 'review' },
      { id: 'AGD-111', judul: 'Penanaman Serentak Hari Mangrove Sedunia', jenis: 'agenda', mulai: '2026-07-26', lokasi: 'Teluk Jakarta', status: 'terbit' },
      { id: 'AGD-110', judul: 'Hari Mangrove Sedunia', jenis: 'hari', mulai: '2026-07-26', lokasi: '—', status: 'terbit' },
      { id: 'AGD-109', judul: 'Cuti Bersama (contoh)', jenis: 'libur', mulai: '2026-07-17', lokasi: '—', status: 'draf' }
    ],

    /* ---- PIC agenda (nama contoh, dengan eselon) ---- */
    pic: [
      { nama: 'Dr. Ir. Bambang Prasetyo, M.Sc.', eselon: 1 },
      { nama: 'Dra. Sri Rahayu Ningsih, M.Si.', eselon: 1 },
      { nama: 'Ir. Agus Salim Widodo, M.T.', eselon: 2 },
      { nama: 'Dewi Kartika Sari, S.T., M.Env.', eselon: 2 },
      { nama: 'Rudi Hermawan, S.Si., M.Sc.', eselon: 3 },
      { nama: 'Fitri Handayani, S.Hut.', eselon: 3 },
      { nama: 'Andika Mahesa Putra, S.KM.', eselon: 4 }
    ],

    /* ---- PPID: Daftar Informasi Publik ---- */
    dip: [
      { id: 'DIP-2026-041', judul: 'Laporan Kinerja Instansi Pemerintah (LKjIP) 2025', klas: 'berkala', format: 'PDF', ukuran: '4,2 MB', t: '2026-06-28', status: 'terbit' },
      { id: 'DIP-2026-040', judul: 'Daftar Izin Pengelolaan Limbah B3 Triwulan II 2026', klas: 'berkala', format: 'PDF', ukuran: '1,8 MB', t: '2026-07-01', status: 'terbit' },
      { id: 'DIP-2026-039', judul: 'Peringatan Dini Kualitas Udara Jabodetabek', klas: 'serta-merta', format: 'PDF', ukuran: '640 KB', t: '2026-07-05', status: 'terbit' },
      { id: 'DIP-2026-038', judul: 'Rencana Strategis KLH/BPLH 2025–2029', klas: 'setiap-saat', format: 'PDF', ukuran: '6,1 MB', t: '2026-05-12', status: 'terbit' },
      { id: 'DIP-2026-037', judul: 'Statistik Pengaduan Lingkungan Semester I 2026', klas: 'berkala', format: 'XLSX', ukuran: '890 KB', t: '2026-07-06', status: 'review' },
      { id: 'DIP-2026-036', judul: 'Hasil Uji Laboratorium Kualitas Air Sungai (Juni)', klas: 'berkala', format: 'PDF', ukuran: '2,3 MB', t: '2026-07-03', status: 'terbit' },
      { id: 'DIP-2026-035', judul: 'Dokumen Kajian Internal Penegakan Hukum (contoh)', klas: 'dikecualikan', format: '—', ukuran: '—', t: '2026-06-20', status: 'terbit' },
      { id: 'DIP-2026-034', judul: 'Daftar Aset Barang Milik Negara 2025', klas: 'setiap-saat', format: 'PDF', ukuran: '3,4 MB', t: '2026-04-30', status: 'draf' }
    ],

    /* ---- PPID: Regulasi ---- */
    regulasi: [
      { id: 'REG-021', judul: 'UU No. 14 Tahun 2008 — Keterbukaan Informasi Publik', jenis: 'Undang-Undang', t: '2008-04-30', status: 'terbit' },
      { id: 'REG-020', judul: 'UU No. 32 Tahun 2009 — Perlindungan & Pengelolaan LH', jenis: 'Undang-Undang', t: '2009-10-03', status: 'terbit' },
      { id: 'REG-019', judul: 'PP No. 22 Tahun 2021 — Penyelenggaraan Perlindungan LH', jenis: 'Peraturan Pemerintah', t: '2021-02-02', status: 'terbit' },
      { id: 'REG-018', judul: 'Permen LHK ttg Pelayanan Informasi Publik (konsolidasi)', jenis: 'Peraturan Menteri', t: '2024-01-15', status: 'terbit' },
      { id: 'REG-017', judul: 'SOP Layanan Permohonan Informasi PPID (rev. 3)', jenis: 'SOP Internal', t: '2026-06-01', status: 'review' }
    ],

    /* ---- PPID: FAQ ---- */
    faq: [
      { id: 'FAQ-01', q: 'Bagaimana cara mengajukan permohonan informasi publik?', a: 'Melalui Portal PPID daring: buat akun, isi formulir 4 langkah, lampirkan identitas, lalu pantau lewat halaman Lacak.', status: 'terbit' },
      { id: 'FAQ-02', q: 'Berapa lama permohonan saya dijawab?', a: 'Maksimal 10 hari kerja sejak permohonan lengkap, dapat diperpanjang 7 hari kerja dengan pemberitahuan tertulis (UU 14/2008).', status: 'terbit' },
      { id: 'FAQ-03', q: 'Apa itu informasi yang dikecualikan?', a: 'Informasi yang tidak dapat diberikan berdasarkan Pasal 17 UU 14/2008, mis. data pribadi atau proses penegakan hukum.', status: 'terbit' },
      { id: 'FAQ-04', q: 'Bagaimana jika permohonan saya ditolak?', a: 'Anda berhak mengajukan keberatan kepada Atasan PPID dalam 30 hari kerja sejak penolakan diterima.', status: 'terbit' },
      { id: 'FAQ-05', q: 'Apakah layanan PPID berbayar?', a: 'Tidak. Seluruh layanan informasi publik gratis; biaya penggandaan/pengiriman (bila ada) ditanggung pemohon sesuai ketentuan.', status: 'terbit' },
      { id: 'FAQ-06', q: 'Kanal apa saja untuk menghubungi KLH/BPLH?', a: 'WhatsApp resmi, email, formulir web, Instagram, X, dan SP4N-LAPOR! — semuanya terpantau di satu sistem terpadu.', status: 'review' }
    ],

    /* ---- Pustaka media ---- */
    media: [
      { file: 'wamen-el-nino-tpa.jpg', alt: 'Wakil Menteri LH meninjau area TPA regional', ukuran: '148 KB', t: '2026-07-05' },
      { file: 'mangrove-perpanjangan.jpg', alt: 'Bibit mangrove siap tanam di area persemaian', ukuran: '132 KB', t: '2026-07-04' },
      { file: 'pasar-karbon-singapura.jpg', alt: 'Pertemuan bilateral delegasi Indonesia dan Singapura', ukuran: '126 KB', t: '2026-07-04' },
      { file: 'seleksi-jpt-madya.jpg', alt: 'Suasana seleksi terbuka jabatan pimpinan tinggi', ukuran: '119 KB', t: '2026-07-03' },
      { file: 'kelana-anak-muda.jpg', alt: 'Relawan muda menanam pohon pada kampanye Kelana', ukuran: '141 KB', t: '2026-07-02' },
      { file: 'brebes-asri.jpg', alt: 'Kawasan hijau tertata di Kabupaten Brebes', ukuran: '155 KB', t: '2026-07-02' },
      { file: 'mangrove-sumbawa.jpg', alt: 'Penanaman mangrove bersama warga pesisir Sumbawa', ukuran: '137 KB', t: '2026-07-01' },
      { file: 'tpa-jatiwaringin.jpg', alt: 'Alat berat beroperasi di TPA Jatiwaringin', ukuran: '129 KB', t: '2026-06-30' },
      { file: 'lantik-pejabat.jpg', alt: 'Pelantikan pejabat pimpinan tinggi pratama', ukuran: '122 KB', t: '2026-06-30' }
    ],

    /* ---- Pengguna & peran CMS ---- */
    peran: [
      { id: 'admin', nama: 'Admin Utama', ket: 'Akses penuh seluruh produk, pengguna, dan pengaturan.', jumlah: 2 },
      { id: 'editor', nama: 'Editor Konten', ket: 'Menulis, menyunting, dan menerbitkan konten Website Utama.', jumlah: 3 },
      { id: 'ppid', nama: 'Verifikator PPID', ket: 'Mengelola DIP/DIK, regulasi, FAQ, dan menyetujui konten PPID.', jumlah: 2 },
      { id: 'kontributor', nama: 'Kontributor', ket: 'Menulis draf; tidak dapat menerbitkan (wajib review).', jumlah: 4 }
    ],
    izin: [
      { label: 'Tulis & sunting draf',            admin: 1, editor: 1, ppid: 1, kontributor: 1 },
      { label: 'Terbitkan konten Website Utama',  admin: 1, editor: 1, ppid: 0, kontributor: 0 },
      { label: 'Kelola DIP/DIK & regulasi PPID',  admin: 1, editor: 0, ppid: 1, kontributor: 0 },
      { label: 'Kelola pustaka media',            admin: 1, editor: 1, ppid: 1, kontributor: 0 },
      { label: 'Kelola pengguna & peran',         admin: 1, editor: 0, ppid: 0, kontributor: 0 }
    ],
    pengguna: [
      { nama: 'Dewi Anggraini', inisial: 'DA', email: 'dewi.anggraini@klh.go.id', peran: 'Editor Konten', unit: 'Biro Humas', aktif: '2026-07-07T10:02:00', status: 'aktif' },
      { nama: 'Fajar Nugraha', inisial: 'FN', email: 'fajar.nugraha@klh.go.id', peran: 'Kontributor', unit: 'Biro Humas', aktif: '2026-07-07T08:44:00', status: 'aktif' },
      { nama: 'Ratna Prameswari', inisial: 'RP', email: 'ratna.prameswari@klh.go.id', peran: 'Verifikator PPID', unit: 'PPID', aktif: '2026-07-06T16:20:00', status: 'aktif' },
      { nama: 'Bimo Aji Saputro', inisial: 'BA', email: 'bimo.saputro@klh.go.id', peran: 'Admin Utama', unit: 'Pusdatin', aktif: '2026-07-06T13:05:00', status: 'aktif' },
      { nama: 'Rio Pratama', inisial: 'RI', email: 'rio.pratama@klh.go.id', peran: 'Kontributor', unit: 'Ditjen PPKL', aktif: '2026-07-05T09:30:00', status: 'aktif' },
      { nama: 'Sari Kusuma (nonaktif)', inisial: 'SK', email: 'sari.kusuma@klh.go.id', peran: 'Editor Konten', unit: 'Biro Humas', aktif: '2026-05-02T11:00:00', status: 'nonaktif' }
    ],

    /* ---- Notifikasi CMS ---- */
    notifikasi: [
      { jenis: 'review', baru: true, judul: '2 artikel menunggu review', isi: '"Rehabilitasi Mangrove" & "TPA Jatiwaringin" dikirim kontributor.', url: 'konten.html?status=review', t: '2026-07-07T09:48:00' },
      { jenis: 'review', baru: true, judul: 'DIP menunggu persetujuan', isi: 'Statistik Pengaduan Semester I 2026 (XLSX) menunggu Verifikator PPID.', url: 'ppid.html', t: '2026-07-07T08:15:00' },
      { jenis: 'sistem', baru: true, judul: 'Konten terjadwal akan tayang', isi: '"Gerakan Kelana" tayang otomatis 9 Jul 07.00 WIB.', url: 'konten-edit.html?id=ART-0908', t: '2026-07-07T07:00:00' },
      { jenis: 'sistem', baru: false, judul: 'Pencadangan konten berhasil', isi: 'Cadangan otomatis harian tersimpan (06.00 WIB).', url: 'index.html', t: '2026-07-07T06:00:00' },
      { jenis: 'review', baru: false, judul: 'FAQ baru menunggu review', isi: '"Kanal apa saja untuk menghubungi KLH/BPLH?" dari Biro Humas.', url: 'ppid.html', t: '2026-07-06T15:12:00' }
    ],

    /* ---- Aktivitas terakhir (log ringkas) ---- */
    aktivitas: [
      { siapa: 'Dewi Anggraini', aksi: 'menerbitkan artikel', obj: 'Wamen LH Tinjau Penanganan El Nino', t: '2026-07-07T09:20:00' },
      { siapa: 'Fajar Nugraha', aksi: 'mengirim ke review', obj: 'Perpanjangan Rehabilitasi Mangrove', t: '2026-07-06T15:40:00' },
      { siapa: 'Ratna Prameswari', aksi: 'memperbarui DIP', obj: 'Peringatan Dini Kualitas Udara', t: '2026-07-06T14:02:00' },
      { siapa: 'Rio Pratama', aksi: 'mengunggah media', obj: 'tpa-jatiwaringin.jpg', t: '2026-07-06T11:08:00' },
      { siapa: 'Bimo Aji Saputro', aksi: 'menambah pengguna', obj: 'Rio Pratama (Kontributor)', t: '2026-07-05T09:31:00' },
      { siapa: 'Dewi Anggraini', aksi: 'menjadwalkan konten', obj: 'Gerakan Kelana — 9 Jul 07.00', t: '2026-07-04T16:20:00' }
    ]
  };
})();
