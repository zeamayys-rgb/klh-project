/* ============================================================
   KLH.cms — data dummy terpusat Modul 04 · CMS Konten KLH/BPLH
   Seluruh entri adalah KONTEN CONTOH untuk prototipe UI —
   nama, dokumen, dan tanggal fiktif; siap diganti data produksi.
   Dipakai oleh: login, index, konten, konten-edit, agenda,
   media, pengguna, ppid, ppid-tiket + cmsshell.
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
    omni: { label: 'Omni Channel',  cls: 'bg-orange' }
  };
  KLH.produkBadge = function (p) {
    var v = PRODUK[p] || PRODUK.web;
    return '<span class="badge ' + v.cls + '">' + v.label + '</span>';
  };

  /* ---- Badge status tiket PPID (Baru → Diteruskan → Selesai | Ditolak) ---- */
  var TIKET_STATUS = {
    baru:       { label: 'Menunggu Verifikasi', cls: 'bg-warning' },
    diteruskan: { label: 'Diproses Unit',       cls: 'bg-info' },
    selesai:    { label: 'Selesai',             cls: 'bg-success' },
    ditolak:    { label: 'Ditolak',             cls: 'bg-danger' }
  };
  KLH.ppidBadge = function (s) {
    var v = TIKET_STATUS[s] || TIKET_STATUS.baru;
    return '<span class="badge ' + v.cls + '">' + v.label + '</span>';
  };
  KLH.ppidLabel = function (s) { return (TIKET_STATUS[s] || TIKET_STATUS.baru).label; };

  /* ---- Deadline tiket PPID ----
     Sistem men-set deadline 7 hari sejak pengajuan; Humas dapat
     mengubahnya (satuan hari) → simpan di t.deadlineHari.
     > 7 hari = proses panjang → surat perpanjangan tersedia. ---- */
  /* Default global dapat diubah lewat "Pengaturan deadline" di ppid.html */
  KLH.ppidDefaultHari = function () {
    return (KLH.cms.ppid && KLH.cms.ppid.defaultHari) || 7;
  };
  KLH.ppidDeadline = function (t) {
    var d = new Date(t.t);
    d.setDate(d.getDate() + (t.deadlineHari || KLH.ppidDefaultHari()));
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  };
  KLH.ppidSisaHari = function (t) {
    return Math.ceil((new Date(KLH.ppidDeadline(t)) - new Date(KLH.cms.now.split('T')[0])) / 864e5);
  };
  KLH.deadlineBadge = function (t) {
    if (t.status === 'selesai' || t.status === 'ditolak') return '';
    var s = KLH.ppidSisaHari(t);
    /* lewat = maroon (teks putih) · mepet 0–1 hari = merah muda · ≤2 = kuning */
    var cls = s < 0 ? 'bg-maroon' : (s <= 1 ? 'bg-danger' : (s <= 2 ? 'bg-warning' : 'bg-neutral'));
    var lbl = s < 0 ? 'Lewat ' + (-s) + ' hari' : 'Sisa ' + s + ' hari';
    return '<span class="badge ' + cls + '">' + lbl + '</span>';
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
      { id: 'kontributor', nama: 'Kontributor', ket: 'Menulis draf; tidak dapat menerbitkan (wajib review).', jumlah: 4 }
    ],
    izin: [
      { label: 'Tulis & sunting draf',            admin: 1, editor: 1, kontributor: 1 },
      { label: 'Terbitkan konten Website Utama',  admin: 1, editor: 1, kontributor: 0 },
      { label: 'Kelola pustaka media',            admin: 1, editor: 1, kontributor: 0 },
      { label: 'Kelola pengguna & peran',         admin: 1, editor: 0, kontributor: 0 }
    ],
    pengguna: [
      { nama: 'Dewi Anggraini', inisial: 'DA', email: 'dewi.anggraini@klh.go.id', peran: 'Editor Konten', unit: 'Biro Humas', aktif: '2026-07-07T10:02:00', status: 'aktif' },
      { nama: 'Fajar Nugraha', inisial: 'FN', email: 'fajar.nugraha@klh.go.id', peran: 'Kontributor', unit: 'Biro Humas', aktif: '2026-07-07T08:44:00', status: 'aktif' },
      { nama: 'Bimo Aji Saputro', inisial: 'BA', email: 'bimo.saputro@klh.go.id', peran: 'Admin Utama', unit: 'Pusdatin', aktif: '2026-07-06T13:05:00', status: 'aktif' },
      { nama: 'Rio Pratama', inisial: 'RI', email: 'rio.pratama@klh.go.id', peran: 'Kontributor', unit: 'Ditjen PPKL', aktif: '2026-07-05T09:30:00', status: 'aktif' },
      { nama: 'Sari Kusuma (nonaktif)', inisial: 'SK', email: 'sari.kusuma@klh.go.id', peran: 'Editor Konten', unit: 'Biro Humas', aktif: '2026-05-02T11:00:00', status: 'nonaktif' }
    ],

    /* ---- Tiket PPID — pengajuan informasi publik dari Portal PPID ----
       Alur: publik mengajukan → Humas menolak ATAU meneruskan ke unit
       terkait → unit menindaklanjuti (wajib kategori + tag informasi,
       output tautan/PDF) ATAU menolak. Semua penolakan wajib beralasan,
       dapat diperkuat dokumen pendukung (PDF, opsional).
       Kategori "dikecualikan" tidak tayang publik — jawaban dikirim
       personal ke akun pemohon. ---- */
    ppid: {
      defaultHari: 7, /* deadline default sistem — dapat diubah tim Humas */
      unit: ['Sekretariat Jenderal', 'Biro Humas', 'Biro Hukum', 'Pusat Data & Informasi',
             'Ditjen Pengendalian Pencemaran', 'Ditjen Penegakan Hukum', 'Ditjen Planologi'],
      kategori: [
        { slug: 'berkala', label: 'Informasi Berkala', tags: ['Laporan Kinerja', 'Laporan Keuangan', 'Program & Anggaran', 'Profil Lembaga'] },
        { slug: 'serta-merta', label: 'Informasi Serta-Merta', tags: ['Berita', 'Siaran Pers', 'Pengumuman', 'Peringatan Dini'] },
        { slug: 'setiap-saat', label: 'Informasi Setiap Saat', tags: ['Data & Statistik', 'Perizinan', 'Perjanjian', 'Prosedur Layanan'] },
        { slug: 'dikecualikan', label: 'Informasi Dikecualikan', tags: [] }
      ],
      tiket: [
        { id: 'PPID-2026-000162', t: '2026-07-07T08:20:00', status: 'baru',
          pemohon: { nama: 'Sari Wulandari', email: 'sari.wulandari@mail.com', wa: '0812-3456-7801' },
          info: 'Data indeks kualitas air Sungai Ciliwung 2023–2025',
          tujuan: 'Bahan penelitian skripsi teknik lingkungan',
          riwayat: [
            { t: '2026-07-07T08:20:00', label: 'Pengajuan diterima', ket: 'Formulir masuk melalui Portal PPID Online' }
          ] },
        { id: 'PPID-2026-000161', t: '2026-07-06T15:05:00', status: 'baru',
          pemohon: { nama: 'Yayasan Hijau Lestari', email: 'sekretariat@hijaulestari.or.id', wa: '0813-9002-4415' },
          info: 'Salinan perjanjian kerja sama rehabilitasi mangrove dengan pemda pesisir',
          tujuan: 'Pemantauan pelaksanaan program oleh masyarakat sipil',
          riwayat: [
            { t: '2026-07-06T15:05:00', label: 'Pengajuan diterima', ket: 'Formulir masuk melalui Portal PPID Online' }
          ] },
        { id: 'PPID-2026-000158', t: '2026-07-04T10:40:00', status: 'diteruskan', unit: 'Pusat Data & Informasi', deadlineHari: 14,
          pemohon: { nama: 'Rendra Maulana', email: 'rendra.maulana@mail.com', wa: '0821-7788-1290' },
          info: 'Data timbulan sampah nasional per provinsi 2025',
          tujuan: 'Analisis kebijakan pengelolaan sampah daerah',
          riwayat: [
            { t: '2026-07-04T10:40:00', label: 'Pengajuan diterima', ket: 'Formulir masuk melalui Portal PPID Online — deadline otomatis 7 hari' },
            { t: '2026-07-05T09:12:00', label: 'Diteruskan ke unit terkait', ket: 'Humas meneruskan ke Pusat Data & Informasi' },
            { t: '2026-07-06T14:30:00', label: 'Deadline diperpanjang', ket: 'Humas mengubah deadline menjadi 14 hari — surat perpanjangan tersedia untuk pemohon' }
          ] },
        { id: 'PPID-2026-000156', t: '2026-07-03T13:25:00', status: 'diteruskan', unit: 'Ditjen Planologi',
          pemohon: { nama: 'PT Media Kabar Nusantara', email: 'redaksi@kabarnusantara.id', wa: '0811-2004-5566' },
          info: 'Daftar izin lingkungan yang diterbitkan semester I 2026',
          tujuan: 'Bahan liputan jurnalistik investigatif',
          riwayat: [
            { t: '2026-07-03T13:25:00', label: 'Pengajuan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
            { t: '2026-07-03T16:02:00', label: 'Diteruskan ke unit terkait', ket: 'Humas meneruskan ke Ditjen Planologi' }
          ] },
        { id: 'PPID-2026-000149', t: '2026-06-28T09:10:00', status: 'selesai', unit: 'Biro Humas',
          kategori: 'serta-merta', tag: 'Siaran Pers',
          output: { jenis: 'link', url: 'https://klh.go.id/informasi/siaran-pers-citarum-iii' },
          catatan: 'Siaran pers resmi telah tayang; tautan sama dengan yang dipublikasikan di kanal media KLH.',
          pemohon: { nama: 'Andini Prameswari', email: 'andini.pr@mail.com', wa: '0857-1122-3344' },
          info: 'Pernyataan resmi penanganan pencemaran Sungai Citarum tahap III',
          tujuan: 'Verifikasi informasi yang beredar di media sosial',
          riwayat: [
            { t: '2026-06-28T09:10:00', label: 'Pengajuan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
            { t: '2026-06-29T10:30:00', label: 'Diteruskan ke unit terkait', ket: 'Humas meneruskan ke Biro Humas (siaran pers)' },
            { t: '2026-07-01T14:15:00', label: 'Ditindaklanjuti', ket: 'Kategori Serta-Merta · tag Siaran Pers — tautan dipublikasikan ke daftar informasi' }
          ] },
        { id: 'PPID-2026-000144', t: '2026-06-24T11:55:00', status: 'selesai', unit: 'Ditjen Penegakan Hukum',
          kategori: 'dikecualikan', tag: '',
          output: { jenis: 'pdf', file: 'jawaban-ppid-2026-000144.pdf', ukuran: '1,1 MB' },
          pemohon: { nama: 'Bagus Prakoso', email: 'bagus.prakoso@mail.com', wa: '0819-4455-6070' },
          info: 'Ringkasan status penanganan pengaduan yang ia laporkan sendiri',
          tujuan: 'Mengetahui tindak lanjut pengaduan pribadi',
          riwayat: [
            { t: '2026-06-24T11:55:00', label: 'Pengajuan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
            { t: '2026-06-25T08:40:00', label: 'Diteruskan ke unit terkait', ket: 'Humas meneruskan ke Ditjen Penegakan Hukum' },
            { t: '2026-06-30T15:20:00', label: 'Ditindaklanjuti', ket: 'Kategori Dikecualikan — jawaban PDF dikirim personal ke akun pemohon, tidak tayang publik' }
          ] },
        { id: 'PPID-2026-000141', t: '2026-06-20T14:30:00', status: 'ditolak',
          tolak: { oleh: 'Humas', alasan: 'Informasi memuat data pribadi pihak ketiga yang dilindungi (Pasal 17 huruf h UU 14/2008). Pemohon berhak mengajukan keberatan.', dok: 'dasar-penolakan-000141.pdf' },
          pemohon: { nama: 'Cahyo Nugroho', email: 'cahyo.nugroho@mail.com', wa: '0838-9911-2233' },
          info: 'Daftar nama dan alamat lengkap pelapor pengaduan 2025',
          tujuan: 'Kajian partisipasi masyarakat',
          riwayat: [
            { t: '2026-06-20T14:30:00', label: 'Pengajuan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
            { t: '2026-06-23T10:05:00', label: 'Pengajuan ditolak', ket: 'Ditolak Humas — alasan & dokumen dasar penolakan dikirim ke pemohon' }
          ] }
      ]
    },

    /* ---- Notifikasi CMS ---- */
    notifikasi: [
      { jenis: 'review', baru: true, judul: '2 artikel menunggu review', isi: '"Rehabilitasi Mangrove" & "TPA Jatiwaringin" dikirim kontributor.', url: 'konten.html?status=review', t: '2026-07-07T09:48:00' },
      { jenis: 'sistem', baru: true, judul: 'Konten terjadwal akan tayang', isi: '"Gerakan Kelana" tayang otomatis 9 Jul 07.00 WIB.', url: 'konten-edit.html?id=ART-0908', t: '2026-07-07T07:00:00' },
      { jenis: 'sistem', baru: false, judul: 'Pencadangan konten berhasil', isi: 'Cadangan otomatis harian tersimpan (06.00 WIB).', url: 'index.html', t: '2026-07-07T06:00:00' }
    ],

    /* ---- Aktivitas terakhir (log ringkas) ---- */
    aktivitas: [
      { siapa: 'Dewi Anggraini', aksi: 'menerbitkan artikel', obj: 'Wamen LH Tinjau Penanganan El Nino', t: '2026-07-07T09:20:00' },
      { siapa: 'Fajar Nugraha', aksi: 'mengirim ke review', obj: 'Perpanjangan Rehabilitasi Mangrove', t: '2026-07-06T15:40:00' },
      { siapa: 'Rio Pratama', aksi: 'mengunggah media', obj: 'tpa-jatiwaringin.jpg', t: '2026-07-06T11:08:00' },
      { siapa: 'Bimo Aji Saputro', aksi: 'menambah pengguna', obj: 'Rio Pratama (Kontributor)', t: '2026-07-05T09:31:00' },
      { siapa: 'Dewi Anggraini', aksi: 'menjadwalkan konten', obj: 'Gerakan Kelana — 9 Jul 07.00', t: '2026-07-04T16:20:00' }
    ]
  };
})();
