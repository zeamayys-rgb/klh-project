/* ============================================================
   KLH.ppid — "CMS" dummy terpusat Modul 02 · PPID Web
   Seluruh entri adalah KONTEN CONTOH untuk prototipe UI —
   siap diganti data sistem PPID sebenarnya.
   Dipakai oleh: dip, dik, faq, regulasi, lacak, riwayat,
   keberatan, laporan-kinerja, konfirmasi.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  /* ---- Sesi demo client-side (flag saja, bukan data inti) ----
     Dipakai navbar (nama akun) & riwayat. Selalu try/catch. */
  KLH.session = {
    get: function () {
      try { return JSON.parse(localStorage.getItem('klh-ppid-sesi')); } catch (e) { return null; }
    },
    set: function (s) {
      try { localStorage.setItem('klh-ppid-sesi', JSON.stringify(s)); } catch (e) {}
    },
    clear: function () {
      try { localStorage.removeItem('klh-ppid-sesi'); } catch (e) {}
    }
  };

  /* ---- Util kecil bersama ---- */
  KLH.qs = function (name) {
    try { return new URLSearchParams(window.location.search).get(name) || ''; } catch (e) { return ''; }
  };
  var BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  KLH.fmtDate = function (iso) {
    var p = String(iso).split('-');
    if (p.length !== 3) return iso;
    return parseInt(p[2], 10) + ' ' + (BULAN[parseInt(p[1], 10) - 1] || p[1]) + ' ' + p[0];
  };

  KLH.ppid = {

    /* ---- 4 kategori informasi (UU 14/2008) ----
       Struktur mengikuti pola PPID Kemendag: tiap kategori punya
       "tag informasi" sendiri; entri DIP mengacu (kategori, tag). */
    kategori: [
      { slug: 'berkala', label: 'Informasi Berkala', icon: 'calendar', tone: 'green',
        desc: 'Diumumkan rutin tanpa diminta: laporan kinerja, laporan keuangan, program kerja, dan profil lembaga.',
        tags: ['Laporan Kinerja', 'Laporan Keuangan', 'Program & Anggaran', 'Profil Lembaga'] },
      { slug: 'serta-merta', label: 'Informasi Serta-Merta', icon: 'megaphone', tone: 'sky',
        desc: 'Diumumkan segera karena menyangkut hajat hidup orang banyak: peringatan pencemaran, bencana, dan darurat lingkungan.',
        tags: ['Berita', 'Siaran Pers', 'Pengumuman', 'Peringatan Dini'] },
      { slug: 'setiap-saat', label: 'Informasi Setiap Saat', icon: 'folder', tone: 'earth',
        desc: 'Tersedia dan dapat diminta kapan saja: DIP, regulasi, perjanjian, dan data pendukung.',
        tags: ['Data & Statistik', 'Perizinan', 'Perjanjian', 'Prosedur Layanan'] },
      { slug: 'dikecualikan', label: 'Informasi Dikecualikan', icon: 'lock', tone: 'neutral',
        desc: 'Tidak dapat diberikan berdasarkan pengujian konsekuensi (Pasal 17 UU KIP), mis. data pribadi dan rahasia negara.' }
    ],

    /* ---- Daftar Informasi Publik ----
       Output tiap entri hanya 2 jenis:
       - output 'link' → url (berita, program, halaman web, dsb.)
       - output 'pdf'  → dokumen terlampir (ukuran) */
    dip: [
      { no: 'DIP-001', judul: 'Laporan Kinerja Instansi Pemerintah (LAKIP) 2025', kategori: 'berkala', tag: 'Laporan Kinerja', unit: 'Sekretariat Jenderal', tanggal: '2026-02-10', output: 'pdf', ukuran: '4,2 MB',
        ringkas: 'Capaian kinerja tahunan seluruh unit kerja KLH/BPLH beserta realisasi indikator utama.' },
      { no: 'DIP-002', judul: 'Laporan Keuangan Audited Tahun Anggaran 2025', kategori: 'berkala', tag: 'Laporan Keuangan', unit: 'Biro Keuangan', tanggal: '2026-04-22', output: 'pdf', ukuran: '6,8 MB',
        ringkas: 'Laporan keuangan yang telah diaudit BPK dengan opini dan catatan atas laporan keuangan.' },
      { no: 'DIP-003', judul: 'Rencana Strategis KLH/BPLH 2025–2029', kategori: 'berkala', tag: 'Program & Anggaran', unit: 'Biro Perencanaan', tanggal: '2025-03-14', output: 'pdf', ukuran: '3,1 MB',
        ringkas: 'Arah kebijakan, sasaran strategis, dan kerangka pendanaan lima tahunan.' },
      { no: 'DIP-004', judul: 'Ringkasan Program Kerja & Anggaran 2026', kategori: 'berkala', tag: 'Program & Anggaran', unit: 'Biro Perencanaan', tanggal: '2026-01-08', output: 'pdf', ukuran: '2,0 MB',
        ringkas: 'Ringkasan DIPA dan program prioritas tahun berjalan.' },
      { no: 'DIP-005', judul: 'Profil Pejabat & Struktur Organisasi', kategori: 'berkala', tag: 'Profil Lembaga', unit: 'Biro Kepegawaian', tanggal: '2026-06-01', output: 'link', url: '../klh-website-utama/pages/profil/struktur-organisasi.html',
        ringkas: 'Struktur organisasi dan profil pimpinan — tersedia sebagai halaman web yang selalu mutakhir.' },
      { no: 'DIP-006', judul: 'Laporan Layanan Informasi Publik PPID 2025', kategori: 'berkala', tag: 'Laporan Kinerja', unit: 'PPID', tanggal: '2026-03-02', output: 'pdf', ukuran: '1,6 MB',
        ringkas: 'Rekapitulasi permohonan, keberatan, dan waktu layanan informasi selama setahun.' },
      { no: 'DIP-007', judul: 'Peringatan Dini Kualitas Udara Jabodetabek (ISPU)', kategori: 'serta-merta', tag: 'Peringatan Dini', unit: 'Ditjen Pengendalian Pencemaran', tanggal: '2026-07-04', output: 'link', url: '../klh-website-utama/pages/informasi/indeks.html',
        ringkas: 'Pantauan ISPU harian dan imbauan bagi kelompok sensitif saat kualitas udara menurun.' },
      { no: 'DIP-008', judul: 'Status Darurat Kebakaran Hutan & Lahan', kategori: 'serta-merta', tag: 'Peringatan Dini', unit: 'Ditjen Pengendalian Perubahan Iklim', tanggal: '2026-07-01', output: 'link', url: '../klh-website-utama/pages/informasi/indeks.html',
        ringkas: 'Status siaga karhutla per provinsi beserta langkah tanggap darurat yang berjalan.' },
      { no: 'DIP-009', judul: 'Siaran Pers: Penanganan Pencemaran Sungai Citarum Tahap III', kategori: 'serta-merta', tag: 'Siaran Pers', unit: 'Biro Humas', tanggal: '2026-06-28', output: 'link', url: '../klh-website-utama/pages/informasi/detail.html',
        ringkas: 'Pernyataan resmi kementerian atas progres pemulihan Sungai Citarum.' },
      { no: 'DIP-010', judul: 'Berita: Rehabilitasi Mangrove Pesisir Utara Diperpanjang', kategori: 'serta-merta', tag: 'Berita', unit: 'Biro Humas', tanggal: '2026-06-20', output: 'link', url: '../klh-website-utama/pages/informasi/detail.html',
        ringkas: 'Target 12.000 hektare mangrove direhabilitasi hingga akhir 2027.' },
      { no: 'DIP-011', judul: 'Pengumuman Penghentian Sementara Aktivitas Industri Terdampak', kategori: 'serta-merta', tag: 'Pengumuman', unit: 'Ditjen Penegakan Hukum', tanggal: '2026-06-15', output: 'pdf', ukuran: '640 KB',
        ringkas: 'Salinan pengumuman resmi penghentian sementara kegiatan yang mencemari lingkungan.' },
      { no: 'DIP-012', judul: 'Daftar Izin Lingkungan yang Diterbitkan 2025', kategori: 'setiap-saat', tag: 'Perizinan', unit: 'Ditjen Planologi', tanggal: '2026-01-20', output: 'pdf', ukuran: '820 KB',
        ringkas: 'Rekap izin lingkungan terbit per sektor dan provinsi sepanjang 2025.' },
      { no: 'DIP-013', judul: 'Data Indeks Kualitas Lingkungan Hidup per Provinsi', kategori: 'setiap-saat', tag: 'Data & Statistik', unit: 'Pusat Data & Informasi', tanggal: '2025-12-12', output: 'pdf', ukuran: '1,4 MB',
        ringkas: 'IKLH tahunan: indeks kualitas air, udara, dan tutupan lahan seluruh provinsi.' },
      { no: 'DIP-014', judul: 'Rekapitulasi Pengaduan Lingkungan 2025', kategori: 'setiap-saat', tag: 'Data & Statistik', unit: 'Ditjen Penegakan Hukum', tanggal: '2026-02-05', output: 'pdf', ukuran: '2,3 MB',
        ringkas: 'Statistik pengaduan masuk, ditindaklanjuti, dan selesai per kanal pelaporan.' },
      { no: 'DIP-015', judul: 'Perjanjian Kerja Sama dengan Pemerintah Daerah', kategori: 'setiap-saat', tag: 'Perjanjian', unit: 'Biro Hukum', tanggal: '2025-11-03', output: 'pdf', ukuran: '5,5 MB',
        ringkas: 'Himpunan PKS pengelolaan lingkungan hidup antara KLH/BPLH dan pemda.' },
      { no: 'DIP-016', judul: 'Standar Pelayanan Publik KLH/BPLH', kategori: 'setiap-saat', tag: 'Prosedur Layanan', unit: 'Biro Humas', tanggal: '2024-09-17', output: 'pdf', ukuran: '980 KB',
        ringkas: 'Standar layanan, maklumat pelayanan, dan prosedur pengaduan layanan publik.' }
    ],

    /* ---- Daftar Informasi Dikecualikan ---- */
    dik: [
      { no: 'DIK-001', judul: 'Data pribadi pemohon informasi dan pelapor pengaduan', dasar: 'Pasal 17 huruf h UU 14/2008', jangka: 'Selama data pribadi dilindungi UU' },
      { no: 'DIK-002', judul: 'Dokumen proses penyidikan tindak pidana lingkungan yang sedang berjalan', dasar: 'Pasal 17 huruf a UU 14/2008', jangka: 'Hingga proses hukum berkekuatan tetap' },
      { no: 'DIK-003', judul: 'Hasil uji laboratorium yang menjadi barang bukti perkara', dasar: 'Pasal 17 huruf a UU 14/2008', jangka: 'Hingga proses hukum berkekuatan tetap' },
      { no: 'DIK-004', judul: 'Memorandum internal antar pimpinan sebelum keputusan ditetapkan', dasar: 'Pasal 17 huruf i UU 14/2008', jangka: 'Hingga keputusan ditetapkan' },
      { no: 'DIK-005', judul: 'Rincian sistem keamanan infrastruktur data kementerian', dasar: 'Pasal 17 huruf c UU 14/2008', jangka: '10 tahun, dapat ditinjau' },
      { no: 'DIK-006', judul: 'Informasi rahasia dagang pelaku usaha dalam dokumen PROPER', dasar: 'Pasal 17 huruf b UU 14/2008', jangka: 'Selama bernilai rahasia dagang' }
    ],

    /* ---- Regulasi (≥6) ---- */
    regulasi: [
      { no: 'UU No. 14 Tahun 2008', judul: 'Keterbukaan Informasi Publik', ket: 'Payung hukum hak atas informasi: kategori informasi, mekanisme permohonan, keberatan, dan sengketa informasi.', tahun: 2008, jenis: 'Undang-Undang' },
      { no: 'UU No. 25 Tahun 2009', judul: 'Pelayanan Publik', ket: 'Standar pelayanan publik termasuk keterbukaan dan akuntabilitas penyelenggara layanan.', tahun: 2009, jenis: 'Undang-Undang' },
      { no: 'UU No. 32 Tahun 2009', judul: 'Perlindungan dan Pengelolaan Lingkungan Hidup', ket: 'Menjamin hak masyarakat atas informasi lingkungan hidup (Pasal 65).', tahun: 2009, jenis: 'Undang-Undang' },
      { no: 'PP No. 61 Tahun 2010', judul: 'Pelaksanaan UU Keterbukaan Informasi Publik', ket: 'Ketentuan teknis pelaksanaan UU KIP: kewajiban badan publik dan penetapan PPID.', tahun: 2010, jenis: 'Peraturan Pemerintah' },
      { no: 'Perki No. 1 Tahun 2021', judul: 'Standar Layanan Informasi Publik', ket: 'Standar layanan, jangka waktu 10+7 hari kerja, format permohonan, dan maklumat pelayanan.', tahun: 2021, jenis: 'Peraturan Komisi Informasi' },
      { no: 'Perki No. 1 Tahun 2013', judul: 'Prosedur Penyelesaian Sengketa Informasi Publik', ket: 'Tata cara pengajuan dan penyelesaian sengketa informasi di Komisi Informasi.', tahun: 2013, jenis: 'Peraturan Komisi Informasi' }
    ],

    /* ---- Permohonan (≥6, status bervariasi) untuk lacak & riwayat ----
       Status: Diterima → Verifikasi → Diproses → Selesai | Ditolak
       step: posisi timeline 1–4. ---- */
    permohonan: [
      { id: 'PPID-2026-000123', tanggal: '2026-07-01', info: 'Data indeks kualitas air Sungai Ciliwung 2023–2025',
        status: 'Diproses', step: 3, estimasi: '2026-07-15',
        riwayat: [
          { t: '2026-07-01', label: 'Permohonan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
          { t: '2026-07-02', label: 'Verifikasi kelengkapan', ket: 'Identitas dan tujuan permohonan terverifikasi' },
          { t: '2026-07-03', label: 'Pemrosesan oleh unit teknis', ket: 'Diteruskan ke Pusat Data & Informasi' }
        ] },
      { id: 'PPID-2026-000101', tanggal: '2026-06-12', info: 'Salinan izin lingkungan PT Contoh Industri Hijau',
        status: 'Selesai', step: 4, estimasi: '2026-06-26',
        riwayat: [
          { t: '2026-06-12', label: 'Permohonan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
          { t: '2026-06-13', label: 'Verifikasi kelengkapan', ket: 'Identitas dan tujuan permohonan terverifikasi' },
          { t: '2026-06-16', label: 'Pemrosesan oleh unit teknis', ket: 'Diteruskan ke Ditjen Planologi' },
          { t: '2026-06-24', label: 'Jawaban dikirim', ket: 'Dokumen PDF dikirim ke email terdaftar' }
        ] },
      { id: 'PPID-2026-000145', tanggal: '2026-07-04', info: 'Rekapitulasi anggaran program Adipura 2025',
        status: 'Verifikasi', step: 2, estimasi: '2026-07-18',
        riwayat: [
          { t: '2026-07-04', label: 'Permohonan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
          { t: '2026-07-06', label: 'Verifikasi kelengkapan', ket: 'Sedang diperiksa petugas PPID' }
        ] },
      { id: 'PPID-2026-000152', tanggal: '2026-07-06', info: 'Data timbulan sampah nasional per provinsi 2025',
        status: 'Diterima', step: 1, estimasi: '2026-07-20',
        riwayat: [
          { t: '2026-07-06', label: 'Permohonan diterima', ket: 'Formulir masuk melalui Portal PPID Online' }
        ] },
      { id: 'PPID-2026-000087', tanggal: '2026-05-20', info: 'Berita acara penyidikan kasus pencemaran PT Contoh',
        status: 'Ditolak', step: 4, estimasi: '2026-06-03',
        alasan: 'Informasi termasuk kategori dikecualikan — dokumen proses penegakan hukum yang sedang berjalan (Pasal 17 huruf a UU 14/2008). Anda berhak mengajukan keberatan.',
        riwayat: [
          { t: '2026-05-20', label: 'Permohonan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
          { t: '2026-05-21', label: 'Verifikasi kelengkapan', ket: 'Identitas dan tujuan permohonan terverifikasi' },
          { t: '2026-05-25', label: 'Pemrosesan oleh unit teknis', ket: 'Uji konsekuensi oleh PPID dan unit terkait' },
          { t: '2026-06-02', label: 'Permohonan ditolak', ket: 'Surat penolakan dikirim beserta dasar pengecualian' }
        ] },
      { id: 'PPID-2026-000098', tanggal: '2026-06-02', info: 'Standar baku mutu emisi industri semen',
        status: 'Selesai', step: 4, estimasi: '2026-06-16',
        riwayat: [
          { t: '2026-06-02', label: 'Permohonan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
          { t: '2026-06-03', label: 'Verifikasi kelengkapan', ket: 'Identitas dan tujuan permohonan terverifikasi' },
          { t: '2026-06-05', label: 'Pemrosesan oleh unit teknis', ket: 'Diteruskan ke Ditjen Pengendalian Pencemaran' },
          { t: '2026-06-12', label: 'Jawaban dikirim', ket: 'Tautan unduhan dikirim ke email terdaftar' }
        ] },
      { id: 'PPID-2026-000076', tanggal: '2026-05-08', info: 'Daftar nama & alamat lengkap pelapor pengaduan 2025',
        status: 'Ditolak', step: 4, estimasi: '2026-05-22',
        alasan: 'Informasi memuat data pribadi pihak ketiga yang dilindungi (Pasal 17 huruf h UU 14/2008). Anda berhak mengajukan keberatan.',
        riwayat: [
          { t: '2026-05-08', label: 'Permohonan diterima', ket: 'Formulir masuk melalui Portal PPID Online' },
          { t: '2026-05-11', label: 'Verifikasi kelengkapan', ket: 'Identitas dan tujuan permohonan terverifikasi' },
          { t: '2026-05-13', label: 'Pemrosesan oleh unit teknis', ket: 'Uji konsekuensi oleh PPID' },
          { t: '2026-05-19', label: 'Permohonan ditolak', ket: 'Surat penolakan dikirim beserta dasar pengecualian' }
        ] }
    ],

    /* ---- FAQ (≥8) ---- */
    faq: [
      { q: 'Siapa saja yang boleh mengajukan permohonan informasi?', a: 'Setiap warga negara Indonesia (perorangan) dan badan hukum Indonesia berhak mengajukan permohonan informasi publik. Perorangan cukup melampirkan NIK/KTP; badan hukum melampirkan akta pendirian.' },
      { q: 'Berapa lama permohonan saya dijawab?', a: 'PPID wajib menjawab paling lambat <b>10 hari kerja</b> sejak permohonan terverifikasi, dan dapat diperpanjang <b>7 hari kerja</b> dengan pemberitahuan tertulis (Perki 1/2021).' },
      { q: 'Apakah layanan informasi publik berbayar?', a: 'Tidak. Layanan permohonan informasi gratis. Biaya hanya mungkin timbul untuk penggandaan atau pengiriman dokumen fisik, sesuai standar biaya yang diumumkan.' },
      { q: 'Bagaimana cara melacak status permohonan saya?', a: 'Gunakan menu <b>Lacak Permohonan</b> dan masukkan nomor registrasi (format PPID-2026-XXXXXX) yang dikirim ke email Anda setelah permohonan terverifikasi.' },
      { q: 'Apa yang terjadi jika permohonan saya ditolak?', a: 'Anda menerima surat penolakan beserta alasan dan dasar hukumnya. Anda berhak mengajukan <b>keberatan</b> kepada Atasan PPID paling lambat 30 hari kerja sejak penolakan diterima.' },
      { q: 'Ke mana jika keberatan saya juga tidak dijawab memuaskan?', a: 'Anda dapat mengajukan <b>penyelesaian sengketa informasi</b> ke Komisi Informasi paling lambat 14 hari kerja sejak tanggapan Atasan PPID diterima (Perki 1/2013).' },
      { q: 'Informasi apa saja yang tidak dapat diberikan?', a: 'Informasi yang dikecualikan berdasarkan uji konsekuensi Pasal 17 UU 14/2008 — antara lain data pribadi, dokumen penegakan hukum yang berjalan, dan rahasia negara. Daftarnya terbuka di halaman <b>Informasi Dikecualikan</b>.' },
      { q: 'Apakah saya harus datang langsung ke kantor?', a: 'Tidak perlu. Seluruh proses — pendaftaran akun, pengajuan, unggah dokumen, hingga pelacakan — dapat dilakukan daring melalui portal ini. Meja layanan tatap muka tetap tersedia bagi yang membutuhkan.' },
      { q: 'Format dokumen apa yang bisa saya minta?', a: 'Anda dapat memilih format salinan digital (PDF/XLSX dikirim via email) atau salinan cetak (diambil/dikirim). Pilih format saat mengisi langkah "Rincian Informasi" pada formulir.' }
    ],

    /* ---- Laporan layanan informasi tahunan ---- */
    laporan: {
      tahun: [
        { th: 2023, masuk: 214, dikabulkan: 187, ditolak: 15, keberatan: 6, rerata: '6,2 hari' },
        { th: 2024, masuk: 268, dikabulkan: 241, ditolak: 14, keberatan: 5, rerata: '5,4 hari' },
        { th: 2025, masuk: 342, dikabulkan: 315, ditolak: 12, keberatan: 4, rerata: '4,8 hari' }
      ],
      unduhan: [
        { judul: 'Laporan Layanan Informasi Publik 2025', format: 'PDF', ukuran: '1,6 MB' },
        { judul: 'Laporan Layanan Informasi Publik 2024', format: 'PDF', ukuran: '1,4 MB' },
        { judul: 'Laporan Layanan Informasi Publik 2023', format: 'PDF', ukuran: '1,3 MB' },
        { judul: 'Register Permohonan Informasi 2025', format: 'XLSX', ukuran: '640 KB' }
      ]
    }
  };
})();
