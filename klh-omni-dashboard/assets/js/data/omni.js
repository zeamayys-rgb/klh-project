/* ============================================================
   KLH.omni — "CMS" dummy terpusat Modul 03 · Omni Channel Dashboard
   Seluruh entri adalah KONTEN CONTOH untuk prototipe UI —
   nama, nomor, dan kasus fiktif; siap diganti data sistem produksi.
   Dipakai oleh: index, inbox, tiket, tiket-detail, reporting,
   routing, analytics, role, keamanan, kanal, profil + appshell.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  /* ---- Sesi demo client-side (flag saja, bukan data inti) ----
     Dipakai topbar (nama agen) & login. Selalu try/catch. */
  KLH.session = {
    get: function () {
      try { return JSON.parse(localStorage.getItem('klh-omni-sesi')); } catch (e) { return null; }
    },
    set: function (s) {
      try { localStorage.setItem('klh-omni-sesi', JSON.stringify(s)); } catch (e) {}
    },
    clear: function () {
      try { localStorage.removeItem('klh-omni-sesi'); } catch (e) {}
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

  KLH.omni = {

    /* ---- Jangkar waktu demo (agar SLA timer stabil diprediksi) ---- */
    now: '2026-07-07T09:30:00',

    /* ---- Agen aktif (persona P3) ---- */
    agen: {
      nama: 'Ratna Prameswari', inisial: 'RP',
      jabatan: 'Agen Layanan · PPID', unit: 'Biro Hubungan Masyarakat',
      email: 'ratna.prameswari@klh.go.id', telepon: '+62 811-9000-217',
      peran: 'Agen', sejak: '2023-04-17'
    },

    /* ---- 7 kanal resmi ---- */
    kanal: [
      { id: 'wa',    label: 'WhatsApp',    icon: 'chwa',    tone: 'green'  },
      { id: 'ig',    label: 'Instagram',   icon: 'chig',    tone: 'earth'  },
      { id: 'fb',    label: 'Facebook',    icon: 'chfb',    tone: 'sky'    },
      { id: 'x',     label: 'X (Twitter)', icon: 'chx',     tone: 'neutral'},
      { id: 'email', label: 'Email',       icon: 'envelope',tone: 'sky'    },
      { id: 'web',   label: 'Web Form',    icon: 'globe',   tone: 'green'  },
      { id: 'lapor', label: 'SP4N-LAPOR!', icon: 'megaphone', tone: 'earth'}
    ],

    /* ---- Percakapan Unified Inbox (≥12, lintas 7 kanal) ----
       status: baru | berjalan | menunggu | selesai ---- */
    percakapan: [
      {
        id: 'C-2141', kanal: 'wa', nama: 'Sari Wulandari', kontak: '+62 812-77xx-1904',
        subjek: 'Pencemaran air sungai dekat pabrik tekstil', status: 'baru', belum: 2,
        waktu: '2026-07-07T09:12:00', tiket: 'TKT-2026-0731',
        pesan: [
          { dari: 'warga', t: '2026-07-07T09:08:00', isi: 'Selamat pagi. Saya mau lapor, air Sungai Cikembang di belakang pabrik tekstil Desa Margaasih berubah hitam dan berbau sejak kemarin sore.' },
          { dari: 'warga', t: '2026-07-07T09:12:00', isi: 'Ikan banyak yang mati mengambang. Saya kirim fotonya ya. [foto-sungai.jpg]' }
        ]
      },
      {
        id: 'C-2140', kanal: 'lapor', nama: 'Bagus Priyambodo', kontak: 'LAPOR!-19042871',
        subjek: 'Asap pembakaran limbah di kawasan industri', status: 'berjalan', belum: 1,
        waktu: '2026-07-07T08:47:00', tiket: 'TKT-2026-0730',
        pesan: [
          { dari: 'warga', t: '2026-07-06T15:20:00', isi: 'Setiap malam ada pembakaran limbah di kawasan industri Jatake. Asapnya masuk ke perumahan, anak saya jadi batuk-batuk.' },
          { dari: 'agen', t: '2026-07-06T15:41:00', isi: 'Terima kasih atas laporannya, Bapak Bagus. Laporan kami teruskan ke Ditjen Pengendalian Pencemaran untuk verifikasi lapangan. Nomor tiket Anda TKT-2026-0730.' },
          { dari: 'warga', t: '2026-07-07T08:47:00', isi: 'Tadi malam masih terjadi lagi. Kapan petugas turun ke lokasi?' }
        ]
      },
      {
        id: 'C-2139', kanal: 'email', nama: 'Dr. Nurhayati Sambas', kontak: 'nurhayati.s@univ-lestari.ac.id',
        subjek: 'Permohonan data IKLH per provinsi 2023–2025', status: 'berjalan', belum: 0,
        waktu: '2026-07-07T08:15:00', tiket: 'TKT-2026-0728',
        pesan: [
          { dari: 'warga', t: '2026-07-06T10:02:00', isi: 'Dengan hormat, saya dosen Fakultas Teknik Lingkungan Universitas Lestari. Saya bermaksud meminta data Indeks Kualitas Lingkungan Hidup per provinsi 2023–2025 untuk penelitian. Terlampir surat pengantar.' },
          { dari: 'agen', t: '2026-07-07T08:15:00', isi: 'Yth. Ibu Nurhayati, permohonan Anda telah kami catat dan diteruskan ke Pusat Data & Informasi. Estimasi jawaban 3 hari kerja. Sebagian data juga tersedia terbuka di portal PPID kami.' }
        ]
      },
      {
        id: 'C-2138', kanal: 'ig', nama: '@warga.hijau', kontak: 'DM Instagram',
        subjek: 'Tanya syarat ikut program Adiwiyata sekolah', status: 'baru', belum: 1,
        waktu: '2026-07-07T07:58:00', tiket: null,
        pesan: [
          { dari: 'warga', t: '2026-07-07T07:58:00', isi: 'Min, sekolah kami mau daftar program Adiwiyata. Syarat dan jadwal pendaftarannya di mana ya? Terima kasih 🙏' }
        ]
      },
      {
        id: 'C-2137', kanal: 'web', nama: 'Hendro Kusnadi', kontak: 'hendro.kusnadi@mail.com',
        subjek: 'Status permohonan informasi PPID-2026-0409', status: 'menunggu', belum: 0,
        waktu: '2026-07-06T16:40:00', tiket: 'TKT-2026-0725',
        pesan: [
          { dari: 'warga', t: '2026-07-06T14:05:00', isi: 'Saya mengajukan permohonan informasi dokumen izin lingkungan PT Karya Bumi tanggal 29 Juni (ID PPID-2026-0409), sampai sekarang belum ada jawaban.' },
          { dari: 'agen', t: '2026-07-06T16:40:00', isi: 'Bapak Hendro, permohonan Anda sedang dalam pemrosesan unit teknis. Kami menunggu konfirmasi Ditjen Planologi — akan kami kabari maksimal 8 Juli. Mohon maaf atas menunggunya.' }
        ]
      },
      {
        id: 'C-2136', kanal: 'fb', nama: 'Yulia Rahmawati', kontak: 'fb.com/yulia.rahma',
        subjek: 'TPA liar di pinggir jalan kabupaten', status: 'berjalan', belum: 1,
        waktu: '2026-07-06T15:12:00', tiket: 'TKT-2026-0724',
        pesan: [
          { dari: 'warga', t: '2026-07-05T19:30:00', isi: 'Ada tumpukan sampah liar makin besar di pinggir Jalan Raya Cibarusah. Sudah 2 minggu tidak diangkut, baunya sampai ke rumah warga.' },
          { dari: 'agen', t: '2026-07-06T09:02:00', isi: 'Terima kasih, Ibu Yulia. Kami koordinasikan dengan DLH Kabupaten Bekasi. Bisa dibantu titik lokasi persisnya (patokan/koordinat)?' },
          { dari: 'warga', t: '2026-07-06T15:12:00', isi: 'Dekat jembatan Kali Ulu, sebelum SPBU. Ini fotonya. [tpa-liar.jpg]' }
        ]
      },
      {
        id: 'C-2135', kanal: 'x', nama: '@akarsenja', kontak: 'DM X',
        subjek: 'ISPU Jakarta hari ini tidak update di situs', status: 'selesai', belum: 0,
        waktu: '2026-07-06T11:26:00', tiket: 'TKT-2026-0722',
        pesan: [
          { dari: 'warga', t: '2026-07-06T09:15:00', isi: 'Halo min, data ISPU DKI di situs kok masih menampilkan kemarin? Padahal langit sudah kelihatan pekat.' },
          { dari: 'agen', t: '2026-07-06T10:05:00', isi: 'Terima kasih infonya. Ada gangguan sinkronisasi stasiun pemantau pagi ini, tim sedang memulihkan.' },
          { dari: 'agen', t: '2026-07-06T11:26:00', isi: 'Update: data ISPU sudah normal kembali dan menampilkan pukul 10.00. Terima kasih sudah melapor!' }
        ]
      },
      {
        id: 'C-2134', kanal: 'wa', nama: 'Ahmad Zulkifli', kontak: '+62 813-24xx-8871',
        subjek: 'Penebangan pohon di kawasan lindung', status: 'berjalan', belum: 0,
        waktu: '2026-07-06T10:44:00', tiket: 'TKT-2026-0721',
        pesan: [
          { dari: 'warga', t: '2026-07-05T13:10:00', isi: 'Pak/Bu, ada aktivitas penebangan pohon pakai alat berat di kawasan lindung Bukit Sarongge. Apa itu ada izinnya?' },
          { dari: 'agen', t: '2026-07-06T10:44:00', isi: 'Terima kasih, Bapak Ahmad. Laporan kami eskalasikan ke Balai Gakkum wilayah Jawa Barat untuk pengecekan izin dan patroli. Perkembangan akan kami informasikan lewat nomor ini.' }
        ]
      },
      {
        id: 'C-2133', kanal: 'email', nama: 'PT Mitra Hijau Sejahtera', kontak: 'legal@mitrahijau.co.id',
        subjek: 'Klarifikasi kelengkapan dokumen persetujuan lingkungan', status: 'menunggu', belum: 0,
        waktu: '2026-07-05T16:08:00', tiket: 'TKT-2026-0718',
        pesan: [
          { dari: 'warga', t: '2026-07-05T14:30:00', isi: 'Kami telah mengunggah dokumen adendum ANDAL sesuai catatan verifikator tanggal 1 Juli. Mohon konfirmasi apakah dokumen sudah lengkap untuk lanjut tahap penilaian.' },
          { dari: 'agen', t: '2026-07-05T16:08:00', isi: 'Terima kasih. Dokumen Anda sedang diperiksa tim teknis PTSP. Status dapat dipantau di akun OSS; kami targetkan konfirmasi paling lambat 9 Juli.' }
        ]
      },
      {
        id: 'C-2132', kanal: 'lapor', nama: 'Rukmini Handayani', kontak: 'LAPOR!-19042613',
        subjek: 'Limbah B3 dibuang ke lahan kosong', status: 'berjalan', belum: 0,
        waktu: '2026-07-05T11:52:00', tiket: 'TKT-2026-0716',
        pesan: [
          { dari: 'warga', t: '2026-07-04T20:41:00', isi: 'Ada truk buang drum-drum mencurigakan ke lahan kosong belakang gudang di Kecamatan Taktakan. Warna cairannya kehitaman, baunya menyengat sekali.' },
          { dari: 'agen', t: '2026-07-05T11:52:00', isi: 'Laporan Anda kami tangani dengan prioritas tinggi, Ibu Rukmini. Tim pengawasan limbah B3 dijadwalkan verifikasi lapangan besok. Identitas pelapor kami rahasiakan.' }
        ]
      },
      {
        id: 'C-2131', kanal: 'web', nama: 'Andika Prasetyo', kontak: 'andika.pras@mail.com',
        subjek: 'Sampah plastik menumpuk di muara pantai', status: 'selesai', belum: 0,
        waktu: '2026-07-04T15:35:00', tiket: 'TKT-2026-0712',
        pesan: [
          { dari: 'warga', t: '2026-07-03T09:22:00', isi: 'Muara Pantai Tirtamaya penuh sampah plastik kiriman pasca hujan besar. Mohon dikoordinasikan pembersihannya, banyak wisatawan berkunjung akhir pekan.' },
          { dari: 'agen', t: '2026-07-03T11:19:00', isi: 'Terima kasih, Bapak Andika. Kami koordinasikan dengan DLH Kabupaten Indramayu dan komunitas bersih pantai setempat.' },
          { dari: 'agen', t: '2026-07-04T15:35:00', isi: 'Pembersihan dilaksanakan hari ini oleh 40 petugas gabungan; 2,3 ton sampah terangkut. Terima kasih atas kepeduliannya. Boleh bantu nilai layanan kami? ⭐' }
        ]
      },
      {
        id: 'C-2130', kanal: 'ig', nama: '@komunitas.mangrove', kontak: 'DM Instagram',
        subjek: 'Ajakan kolaborasi penanaman mangrove', status: 'menunggu', belum: 0,
        waktu: '2026-07-04T10:18:00', tiket: null,
        pesan: [
          { dari: 'warga', t: '2026-07-04T09:47:00', isi: 'Halo admin! Komunitas kami berencana menanam 5.000 bibit mangrove di pesisir Brebes bulan Agustus. Apakah bisa berkolaborasi dengan KLH untuk pendampingan teknis?' },
          { dari: 'agen', t: '2026-07-04T10:18:00', isi: 'Halo! Terima kasih atas inisiatifnya 🌱 Proposal bisa dikirim ke kerjasama@klh.go.id. Kami teruskan juga ke Ditjen Pengelolaan Pesisir untuk penjajakan pendampingan.' }
        ]
      },
      {
        id: 'C-2129', kanal: 'wa', nama: 'Slamet Riyadi', kontak: '+62 857-11xx-3320',
        subjek: 'Kebisingan mesin genset ruko melebihi jam malam', status: 'selesai', belum: 0,
        waktu: '2026-07-03T14:27:00', tiket: 'TKT-2026-0709',
        pesan: [
          { dari: 'warga', t: '2026-07-02T22:15:00', isi: 'Genset deretan ruko di Jalan Kenanga nyala sampai jam 2 pagi tiap hari. Suaranya bising sekali, warga tidak bisa tidur.' },
          { dari: 'agen', t: '2026-07-03T08:40:00', isi: 'Terima kasih, Bapak Slamet. Aduan kebisingan kami teruskan ke DLH Kota untuk pengukuran baku mutu kebisingan malam ini.' },
          { dari: 'agen', t: '2026-07-03T14:27:00', isi: 'Hasil pengukuran 68 dB (melebihi baku mutu malam 55 dB). Pemilik ruko diberi surat peringatan dan wajib memasang peredam maksimal 14 hari. Kasus kami tutup, terima kasih.' }
        ]
      },
      {
        id: 'C-2128', kanal: 'email', nama: 'Majalah GreenVoice', kontak: 'redaksi@greenvoice.id',
        subjek: 'Permintaan wawancara Dirjen soal ekonomi sirkular', status: 'baru', belum: 1,
        waktu: '2026-07-07T06:50:00', tiket: null,
        pesan: [
          { dari: 'warga', t: '2026-07-07T06:50:00', isi: 'Selamat pagi, kami dari redaksi GreenVoice bermaksud mengajukan wawancara dengan Dirjen terkait peta jalan ekonomi sirkular 2026–2030. Mohon informasi prosedur dan ketersediaan jadwal.' }
        ]
      },
      {
        id: 'C-2127', kanal: 'fb', nama: 'Karang Taruna Sukamaju', kontak: 'fb.com/kt.sukamaju',
        subjek: 'Permohonan bibit pohon untuk penghijauan desa', status: 'selesai', belum: 0,
        waktu: '2026-07-02T13:05:00', tiket: 'TKT-2026-0705',
        pesan: [
          { dari: 'warga', t: '2026-07-01T16:33:00', isi: 'Kami pemuda Desa Sukamaju ingin mengadakan penghijauan lahan kritis. Apakah bisa mendapat bantuan bibit pohon dari persemaian KLH?' },
          { dari: 'agen', t: '2026-07-02T13:05:00', isi: 'Bisa! Permohonan bibit gratis diajukan ke Persemaian Permanen terdekat (Rumpin) dengan surat permohonan desa. Panduan lengkap sudah kami kirim via Messenger. Semangat menghijaukan! 🌳' }
        ]
      }
    ],

    /* ---- Tiket (≥10, SLA bervariasi: aman / mendekati / lewat tenggat) ----
       status: Open | In Progress | Closed · prioritas: Tinggi | Sedang | Rendah ---- */
    tiket: [
      { id: 'TKT-2026-0731', subjek: 'Pencemaran air Sungai Cikembang (pabrik tekstil)', kanal: 'wa',
        pemohon: 'Sari Wulandari', kategori: 'Pengaduan Pencemaran', prioritas: 'Tinggi',
        status: 'Open', agen: null, disposisi: null, rating: null,
        dibuat: '2026-07-07T09:15:00', tenggat: '2026-07-07T13:15:00', percakapan: 'C-2141' },
      { id: 'TKT-2026-0730', subjek: 'Asap pembakaran limbah kawasan industri Jatake', kanal: 'lapor',
        pemohon: 'Bagus Priyambodo', kategori: 'Pengaduan Pencemaran', prioritas: 'Tinggi',
        status: 'In Progress', agen: 'Ratna Prameswari', disposisi: 'Ditjen Pengendalian Pencemaran', rating: null,
        dibuat: '2026-07-06T15:30:00', tenggat: '2026-07-07T10:00:00', percakapan: 'C-2140' },
      { id: 'TKT-2026-0728', subjek: 'Permohonan data IKLH per provinsi 2023–2025', kanal: 'email',
        pemohon: 'Dr. Nurhayati Sambas', kategori: 'Permohonan Informasi', prioritas: 'Sedang',
        status: 'In Progress', agen: 'Ratna Prameswari', disposisi: 'Pusat Data & Informasi', rating: null,
        dibuat: '2026-07-06T10:10:00', tenggat: '2026-07-09T10:10:00', percakapan: 'C-2139' },
      { id: 'TKT-2026-0725', subjek: 'Tindak lanjut permohonan PPID-2026-0409', kanal: 'web',
        pemohon: 'Hendro Kusnadi', kategori: 'Permohonan Informasi', prioritas: 'Sedang',
        status: 'In Progress', agen: 'Dimas Anggara', disposisi: 'Ditjen Planologi', rating: null,
        dibuat: '2026-07-06T14:12:00', tenggat: '2026-07-08T14:12:00', percakapan: 'C-2137' },
      { id: 'TKT-2026-0724', subjek: 'TPA liar Jalan Raya Cibarusah', kanal: 'fb',
        pemohon: 'Yulia Rahmawati', kategori: 'Pengaduan Persampahan', prioritas: 'Sedang',
        status: 'In Progress', agen: 'Ratna Prameswari', disposisi: 'DLH Kab. Bekasi', rating: null,
        dibuat: '2026-07-06T08:50:00', tenggat: '2026-07-07T08:50:00', percakapan: 'C-2136' },
      { id: 'TKT-2026-0722', subjek: 'Data ISPU DKI tidak diperbarui', kanal: 'x',
        pemohon: '@akarsenja', kategori: 'Gangguan Sistem', prioritas: 'Tinggi',
        status: 'Closed', agen: 'Ratna Prameswari', disposisi: 'Pusat Data & Informasi', rating: 5,
        dibuat: '2026-07-06T09:20:00', tenggat: '2026-07-06T13:20:00', selesai: '2026-07-06T11:26:00', percakapan: 'C-2135' },
      { id: 'TKT-2026-0721', subjek: 'Penebangan pohon kawasan lindung Bukit Sarongge', kanal: 'wa',
        pemohon: 'Ahmad Zulkifli', kategori: 'Penegakan Hukum', prioritas: 'Tinggi',
        status: 'In Progress', agen: 'Fajar Nugroho', disposisi: 'Balai Gakkum Jabar', rating: null,
        dibuat: '2026-07-05T13:30:00', tenggat: '2026-07-08T13:30:00', percakapan: 'C-2134' },
      { id: 'TKT-2026-0718', subjek: 'Klarifikasi dokumen persetujuan lingkungan (adendum ANDAL)', kanal: 'email',
        pemohon: 'PT Mitra Hijau Sejahtera', kategori: 'Perizinan', prioritas: 'Sedang',
        status: 'In Progress', agen: 'Dimas Anggara', disposisi: 'PTSP', rating: null,
        dibuat: '2026-07-05T14:45:00', tenggat: '2026-07-09T14:45:00', percakapan: 'C-2133' },
      { id: 'TKT-2026-0716', subjek: 'Dugaan pembuangan limbah B3 ilegal — Taktakan', kanal: 'lapor',
        pemohon: 'Rukmini Handayani', kategori: 'Pengaduan Pencemaran', prioritas: 'Tinggi',
        status: 'In Progress', agen: 'Ratna Prameswari', disposisi: 'Dit. Pengawasan Limbah B3', rating: null,
        dibuat: '2026-07-05T09:00:00', tenggat: '2026-07-07T09:00:00', percakapan: 'C-2132' },
      { id: 'TKT-2026-0712', subjek: 'Sampah plastik muara Pantai Tirtamaya', kanal: 'web',
        pemohon: 'Andika Prasetyo', kategori: 'Pengaduan Persampahan', prioritas: 'Sedang',
        status: 'Closed', agen: 'Ratna Prameswari', disposisi: 'DLH Kab. Indramayu', rating: 4,
        dibuat: '2026-07-03T09:30:00', tenggat: '2026-07-05T09:30:00', selesai: '2026-07-04T15:35:00', percakapan: 'C-2131' },
      { id: 'TKT-2026-0709', subjek: 'Kebisingan genset ruko Jalan Kenanga', kanal: 'wa',
        pemohon: 'Slamet Riyadi', kategori: 'Pengaduan Kebisingan', prioritas: 'Rendah',
        status: 'Closed', agen: 'Fajar Nugroho', disposisi: 'DLH Kota Serang', rating: 5,
        dibuat: '2026-07-03T08:30:00', tenggat: '2026-07-06T08:30:00', selesai: '2026-07-03T14:27:00', percakapan: 'C-2129' },
      { id: 'TKT-2026-0705', subjek: 'Permohonan bibit pohon penghijauan Desa Sukamaju', kanal: 'fb',
        pemohon: 'Karang Taruna Sukamaju', kategori: 'Program & Kemitraan', prioritas: 'Rendah',
        status: 'Closed', agen: 'Ratna Prameswari', disposisi: 'Persemaian Permanen Rumpin', rating: 5,
        dibuat: '2026-07-01T16:40:00', tenggat: '2026-07-04T16:40:00', selesai: '2026-07-02T13:05:00', percakapan: 'C-2127' }
    ],

    /* ---- Riwayat aktivitas per tiket (untuk tiket-detail) ---- */
    tiketLog: {
      'TKT-2026-0730': [
        { t: '2026-07-06T15:30:00', aksi: 'Tiket dibuat otomatis dari SP4N-LAPOR!', oleh: 'Sistem' },
        { t: '2026-07-06T15:38:00', aksi: 'Ditetapkan ke agen Ratna Prameswari (routing: Pengaduan Pencemaran)', oleh: 'Sistem' },
        { t: '2026-07-06T15:41:00', aksi: 'Balasan pertama dikirim ke pelapor', oleh: 'Ratna Prameswari' },
        { t: '2026-07-06T15:45:00', aksi: 'Disposisi ke Ditjen Pengendalian Pencemaran', oleh: 'Ratna Prameswari' },
        { t: '2026-07-07T08:47:00', aksi: 'Pelapor mengirim pesan tindak lanjut', oleh: 'Sistem' }
      ]
    },

    /* ---- KPI Dashboard ---- */
    kpi: [
      { label: 'Interaksi Masuk Hari Ini', nilai: '186', delta: '+12%', arah: 'naik', icon: 'inbox', ket: 'vs. rata-rata 7 hari' },
      { label: 'Tiket Aktif', nilai: '47', delta: '8 prioritas tinggi', arah: 'tetap', icon: 'ticket', ket: 'Open + In Progress' },
      { label: 'SLA Terpenuhi (30 hari)', nilai: '94,2%', delta: '+1,8%', arah: 'naik', icon: 'check', ket: 'target ≥ 90%' },
      { label: 'Rata-rata Respons Pertama', nilai: '14 mnt', delta: '−3 mnt', arah: 'naik', icon: 'clock', ket: 'seluruh kanal, jam kerja' }
    ],

    /* ---- Statistik pengunjung & performa sistem (dashboard) ---- */
    pengunjung: { hariIni: '12.480', sesi: '15.213', durasi: '3 mnt 42 dtk', puncak: '10.00–11.00 WIB' },
    sistem: [
      { label: 'Uptime platform (30 hari)', nilai: '99,95%', status: 'ok' },
      { label: 'Waktu muat rata-rata', nilai: '1,8 dtk', status: 'ok' },
      { label: 'Sinkronisasi kanal', nilai: '6/7 normal', status: 'warn' },
      { label: 'Antrean pesan', nilai: '3 pesan', status: 'ok' }
    ],

    /* ---- Grafik aktivitas 7 hari (line) + distribusi kanal (doughnut) ---- */
    aktivitas: {
      label: ['1 Jul', '2 Jul', '3 Jul', '4 Jul', '5 Jul', '6 Jul', '7 Jul'],
      masuk: [142, 158, 171, 149, 121, 163, 186],
      selesai: [130, 151, 160, 144, 118, 149, 122]
    },
    distribusiKanal: {
      label: ['WhatsApp', 'SP4N-LAPOR!', 'Email', 'Web Form', 'Instagram', 'Facebook', 'X (Twitter)'],
      nilai: [34, 19, 16, 12, 9, 6, 4]
    },

    /* ---- 6 peran + matriks izin (role.html) ---- */
    izinDaftar: [
      'Lihat dashboard & laporan', 'Balas percakapan inbox', 'Kelola tiket & disposisi',
      'Eskalasi lintas unit', 'Ekspor data laporan', 'Kelola routing & template',
      'Kelola kanal & integrasi', 'Kelola pengguna & peran', 'Akses audit trail'
    ],
    peran: [
      { nama: 'Super Admin', jumlah: 2,  desc: 'Kendali penuh platform, integrasi, dan keamanan.', izin: [1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { nama: 'Admin',       jumlah: 4,  desc: 'Kelola operasional harian, pengguna, dan routing.', izin: [1, 1, 1, 1, 1, 1, 1, 1, 0] },
      { nama: 'Supervisor',  jumlah: 6,  desc: 'Pantau kinerja tim, setujui eskalasi & disposisi.', izin: [1, 1, 1, 1, 1, 0, 0, 0, 0] },
      { nama: 'Agen',        jumlah: 18, desc: 'Balas percakapan dan tangani tiket sesuai penugasan.', izin: [1, 1, 1, 1, 0, 0, 0, 0, 0] },
      { nama: 'Analis',      jumlah: 5,  desc: 'Akses analytics & laporan untuk evaluasi layanan.', izin: [1, 0, 0, 0, 1, 0, 0, 0, 0] },
      { nama: 'Viewer',      jumlah: 9,  desc: 'Hanya melihat dashboard — tanpa aksi apa pun.', izin: [1, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    /* ---- Audit trail / activity log (keamanan.html) ---- */
    audit: [
      { t: '2026-07-07T09:24:11', user: 'ratna.prameswari', aksi: 'Membalas percakapan C-2140 (SP4N-LAPOR!)', ip: '10.20.4.31', hasil: 'ok' },
      { t: '2026-07-07T09:02:47', user: 'dimas.anggara', aksi: 'Mengubah status TKT-2026-0725 → In Progress', ip: '10.20.4.18', hasil: 'ok' },
      { t: '2026-07-07T08:41:03', user: 'sistem', aksi: 'Sinkronisasi kanal X (Twitter) gagal — token kedaluwarsa', ip: '—', hasil: 'gagal' },
      { t: '2026-07-07T08:30:00', user: 'sistem', aksi: 'Eskalasi otomatis TKT-2026-0724 (SLA terlewati)', ip: '—', hasil: 'peringatan' },
      { t: '2026-07-07T08:12:39', user: 'ratna.prameswari', aksi: 'Masuk dengan MFA (OTP aplikasi)', ip: '10.20.4.31', hasil: 'ok' },
      { t: '2026-07-07T07:58:21', user: 'admin.harun', aksi: 'Memperbarui template balasan "Pengaduan diterima"', ip: '10.20.2.7', hasil: 'ok' },
      { t: '2026-07-06T22:14:55', user: 'tidak dikenal', aksi: 'Percobaan masuk gagal (5×) akun supervisor.lia', ip: '103.148.xx.9', hasil: 'gagal' },
      { t: '2026-07-06T17:03:12', user: 'super.wisnu', aksi: 'Menonaktifkan integrasi kanal X (Twitter)', ip: '10.20.1.2', hasil: 'ok' },
      { t: '2026-07-06T16:45:30', user: 'fajar.nugroho', aksi: 'Ekspor laporan mingguan (XLSX)', ip: '10.20.4.22', hasil: 'ok' },
      { t: '2026-07-06T15:38:02', user: 'sistem', aksi: 'Routing otomatis TKT-2026-0730 → Ratna Prameswari', ip: '—', hasil: 'ok' }
    ],

    /* ---- Notifikasi topbar (eskalasi & sistem) ---- */
    notifikasi: [
      { jenis: 'eskalasi', judul: 'SLA terlewati — TKT-2026-0724', isi: 'TPA liar Jalan Raya Cibarusah melewati tenggat 08.50. Segera tindak lanjuti atau eskalasikan.', t: '2026-07-07T08:51:00', url: 'tiket-detail.html?t=TKT-2026-0724', baru: true },
      { jenis: 'eskalasi', judul: 'SLA < 1 jam — TKT-2026-0730', isi: 'Asap pembakaran limbah Jatake mendekati tenggat 10.00. Pelapor baru mengirim pesan tindak lanjut.', t: '2026-07-07T08:47:00', url: 'tiket-detail.html?t=TKT-2026-0730', baru: true },
      { jenis: 'sistem', judul: 'Kanal X (Twitter) terputus', isi: 'Token integrasi kedaluwarsa sejak 08.41. DM baru tidak masuk ke inbox sampai disambungkan ulang.', t: '2026-07-07T08:41:00', url: 'kanal.html', baru: true },
      { jenis: 'sistem', judul: 'Percobaan masuk mencurigakan diblokir', isi: '5 kali gagal masuk pada akun supervisor.lia dari IP eksternal. Akun dikunci sementara 30 menit.', t: '2026-07-06T22:15:00', url: 'keamanan.html', baru: false },
      { jenis: 'eskalasi', judul: 'Tiket baru prioritas tinggi', isi: 'TKT-2026-0731 pencemaran Sungai Cikembang masuk dari WhatsApp — belum ditetapkan ke agen.', t: '2026-07-07T09:15:00', url: 'tiket-detail.html?t=TKT-2026-0731', baru: true }
    ],

    /* ---- Routing & auto-reply (routing.html) ---- */
    routingKategori: [
      { nama: 'Pengaduan Pencemaran', kanal: 'Semua kanal', tujuan: 'Tim Pengaduan → Ditjen Pengendalian Pencemaran', sla: '4 jam', prioritas: 'Tinggi', aktif: true },
      { nama: 'Permohonan Informasi', kanal: 'Email · Web Form', tujuan: 'Tim PPID → unit teknis terkait', sla: '3 hari kerja', prioritas: 'Sedang', aktif: true },
      { nama: 'Perizinan & PTSP', kanal: 'Email · Web Form', tujuan: 'Tim PTSP', sla: '2 hari kerja', prioritas: 'Sedang', aktif: true },
      { nama: 'Penegakan Hukum', kanal: 'Semua kanal', tujuan: 'Supervisor → Balai Gakkum wilayah', sla: '1 hari kerja', prioritas: 'Tinggi', aktif: true },
      { nama: 'Program & Kemitraan', kanal: 'Media sosial', tujuan: 'Tim Humas', sla: '2 hari kerja', prioritas: 'Rendah', aktif: true },
      { nama: 'Umum / Lainnya', kanal: 'Semua kanal', tujuan: 'Antrean umum agen', sla: '1 hari kerja', prioritas: 'Rendah', aktif: false }
    ],
    template: [
      { nama: 'Pengaduan diterima', kategori: 'Pengaduan Pencemaran', isi: 'Terima kasih atas laporan Anda. Laporan tercatat dengan nomor tiket {{tiket}} dan diteruskan ke {{unit}}. Perkembangan akan kami sampaikan melalui kanal ini.' },
      { nama: 'Permohonan informasi dicatat', kategori: 'Permohonan Informasi', isi: 'Permohonan informasi Anda telah kami catat ({{tiket}}). Sesuai UU 14/2008, jawaban disampaikan paling lambat 10 hari kerja.' },
      { nama: 'Butuh data tambahan', kategori: 'Umum', isi: 'Agar laporan dapat kami verifikasi, mohon lengkapi: titik lokasi (patokan/koordinat), waktu kejadian, dan foto/video pendukung.' },
      { nama: 'Kasus selesai + rating', kategori: 'Umum', isi: 'Tindak lanjut telah selesai kami laksanakan. Terima kasih atas partisipasi Anda menjaga lingkungan. Berkenan menilai layanan kami? {{tautan_rating}}' },
      { nama: 'Di luar jam layanan', kategori: 'Auto-reply', isi: 'Pesan Anda kami terima di luar jam layanan (Sen–Jum 08.00–16.00 WIB). Kami akan merespons pada jam kerja berikutnya. Untuk darurat lingkungan, hubungi call center 24 jam.' }
    ],

    /* ---- Status koneksi kanal (kanal.html) ---- */
    koneksi: [
      { id: 'wa', akun: '+62 811-1500-321 (WhatsApp Business API)', status: 'terhubung', sinkron: '2026-07-07T09:28:00', pesanHariIni: 63 },
      { id: 'lapor', akun: 'Instansi KLH/BPLH — API SP4N-LAPOR!', status: 'terhubung', sinkron: '2026-07-07T09:25:00', pesanHariIni: 35 },
      { id: 'email', akun: 'layanan@klh.go.id (IMAP/SMTP)', status: 'terhubung', sinkron: '2026-07-07T09:29:00', pesanHariIni: 30 },
      { id: 'web', akun: 'Form kontak situs klh.go.id', status: 'terhubung', sinkron: '2026-07-07T09:30:00', pesanHariIni: 22 },
      { id: 'ig', akun: '@kementerianlh (Instagram Graph API)', status: 'terhubung', sinkron: '2026-07-07T09:27:00', pesanHariIni: 17 },
      { id: 'fb', akun: 'Kementerian Lingkungan Hidup (Messenger)', status: 'gangguan', sinkron: '2026-07-07T07:55:00', pesanHariIni: 11, ket: 'Webhook lambat — antrean 3 pesan' },
      { id: 'x', akun: '@KementerianLH (X API v2)', status: 'terputus', sinkron: '2026-07-07T08:41:00', pesanHariIni: 8, ket: 'Token kedaluwarsa — perlu otorisasi ulang' }
    ],

    /* ---- Laporan periodik (reporting.html) ---- */
    laporan: [
      { periode: 'Juni 2026', interaksi: 4218, tiket: 1174, slaOk: '93,8%', respons: '15 mnt', rating: '4,6' },
      { periode: 'Mei 2026', interaksi: 3987, tiket: 1093, slaOk: '92,4%', respons: '17 mnt', rating: '4,5' },
      { periode: 'April 2026', interaksi: 4402, tiket: 1215, slaOk: '91,7%', respons: '18 mnt', rating: '4,5' },
      { periode: 'Maret 2026', interaksi: 4155, tiket: 1132, slaOk: '90,2%', respons: '21 mnt', rating: '4,4' },
      { periode: 'Februari 2026', interaksi: 3720, tiket: 1018, slaOk: '89,6%', respons: '24 mnt', rating: '4,3' },
      { periode: 'Januari 2026', interaksi: 3894, tiket: 1067, slaOk: '88,9%', respons: '26 mnt', rating: '4,3' }
    ],
    laporanKategori: {
      label: ['Pengaduan Pencemaran', 'Permohonan Informasi', 'Persampahan', 'Perizinan', 'Penegakan Hukum', 'Program & Kemitraan', 'Lainnya'],
      nilai: [312, 268, 187, 142, 96, 88, 81]
    },

    /* ---- Analytics (analytics.html) ---- */
    analytics: {
      device: { label: ['Mobile', 'Desktop', 'Tablet'], nilai: [63, 31, 6] },
      browser: { label: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Lainnya'], nilai: [58, 22, 9, 7, 4] },
      halaman: [
        { path: '/layanan/pengaduan', judul: 'Pengaduan & Aspirasi', kunjungan: 4831, klik: '18,2%', scroll: '74%' },
        { path: '/ppid/permohonan', judul: 'Form Permohonan Informasi', kunjungan: 3204, klik: '22,7%', scroll: '81%' },
        { path: '/', judul: 'Beranda', kunjungan: 2988, klik: '9,4%', scroll: '52%' },
        { path: '/ppid/lacak', judul: 'Lacak Permohonan', kunjungan: 2410, klik: '31,5%', scroll: '88%' },
        { path: '/informasi/ispu', judul: 'Indeks Kualitas Udara', kunjungan: 1975, klik: '12,1%', scroll: '61%' }
      ]
    }
  };

  /* ---- Helper pencarian ---- */
  KLH.findTiket = function (id) {
    return KLH.omni.tiket.find(function (t) {
      return t.id.toUpperCase() === String(id).trim().toUpperCase();
    }) || null;
  };
  KLH.findPercakapan = function (id) {
    return KLH.omni.percakapan.find(function (c) { return c.id === id; }) || null;
  };
  KLH.kanalInfo = function (id) {
    return KLH.omni.kanal.find(function (k) { return k.id === id; }) || KLH.omni.kanal[0];
  };
})();
