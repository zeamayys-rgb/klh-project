/* ============================================================
   KLH.content — data konten prototipe (dummy, siap diganti CMS)
   Dipakai oleh: program/detail, informasi/indeks & detail,
   struktur organisasi, agenda, galeri, dan pencarian.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  /* ---------- 7 Program Lingkungan (KAK WEB-MAIN-PRG) ---------- */
  KLH.programs = [
    {
      slug: 'kalpataru', name: 'Kalpataru', icon: 'award', tone: 'earth',
      tagline: 'Penghargaan tertinggi bagi perintis, pengabdi, penyelamat, dan pembina lingkungan hidup.',
      desc: 'Kalpataru diberikan kepada individu dan kelompok masyarakat yang berjasa luar biasa dalam melestarikan fungsi lingkungan hidup. Empat kategori penghargaan menjangkau perintis, pengabdi, penyelamat, dan pembina lingkungan.',
      audiens: 'Individu & kelompok masyarakat',
      periode: 'Pendaftaran Januari – Maret, penganugerahan Juni',
      manfaat: ['Pengakuan nasional atas dedikasi lingkungan', 'Pendampingan penguatan kapasitas komunitas', 'Jejaring penerima Kalpataru lintas daerah'],
      langkah: ['Siapkan profil kiprah lingkungan minimal 5 tahun terakhir', 'Ajukan usulan melalui Dinas LH provinsi atau daring', 'Lengkapi dokumen pendukung & verifikasi lapangan', 'Ikuti penilaian Dewan Pertimbangan Kalpataru']
    },
    {
      slug: 'proper', name: 'PROPER', icon: 'factory', tone: 'green',
      tagline: 'Program penilaian peringkat kinerja perusahaan dalam pengelolaan lingkungan hidup.',
      desc: 'PROPER mendorong ketaatan dan keunggulan (beyond compliance) perusahaan melalui peringkat Emas, Hijau, Biru, Merah, dan Hitam. Hasilnya diumumkan terbuka kepada publik setiap tahun.',
      audiens: 'Perusahaan & pelaku usaha',
      periode: 'Penilaian sepanjang tahun, publikasi Desember',
      manfaat: ['Citra ketaatan lingkungan yang terverifikasi', 'Insentif reputasi bagi peringkat Emas & Hijau', 'Peta jalan perbaikan bagi peringkat Merah'],
      langkah: ['Registrasi perusahaan pada sistem PROPER', 'Sampaikan dokumen swapantau berkala', 'Ikuti verifikasi lapangan tim penilai', 'Pantau hasil & tindak lanjuti rekomendasi']
    },
    {
      slug: 'adipura', name: 'Adipura', icon: 'award', tone: 'green',
      tagline: 'Apresiasi bagi kabupaten/kota terbersih dengan pengelolaan sampah berkelanjutan.',
      desc: 'Adipura menilai kinerja pemerintah kabupaten/kota dalam kebersihan, pengelolaan sampah, dan ruang terbuka hijau menuju kota berkelanjutan dan layak huni.',
      audiens: 'Pemerintah kabupaten/kota',
      periode: 'Pemantauan dua tahap per tahun anggaran',
      manfaat: ['Tolok ukur kinerja kebersihan kota', 'Motivasi kolaborasi warga & pemda', 'Praktik baik antar daerah dibagikan'],
      langkah: ['Pemda menyampaikan data pengelolaan sampah', 'Pemantauan lapangan tahap I & II', 'Penilaian dokumen kebijakan & TPA', 'Penganugerahan Adipura oleh Menteri']
    },
    {
      slug: 'adiwiyata', name: 'Adiwiyata', icon: 'book', tone: 'sky',
      tagline: 'Gerakan sekolah peduli dan berbudaya lingkungan hidup.',
      desc: 'Adiwiyata membina sekolah menerapkan Gerakan Peduli dan Berbudaya Lingkungan Hidup di Sekolah (PBLHS) — dari kurikulum, sarana, hingga pembiasaan warga sekolah.',
      audiens: 'Sekolah (SD–SMA/sederajat)',
      periode: 'Usulan Februari – April, penetapan akhir tahun',
      manfaat: ['Predikat Adiwiyata kabupaten/provinsi/nasional/mandiri', 'Karakter peduli lingkungan sejak dini', 'Efisiensi sumber daya sekolah'],
      langkah: ['Bentuk tim Adiwiyata & susun rencana Gerakan PBLHS', 'Terapkan aksi: sampah, energi, air, keanekaragaman hayati', 'Ajukan penilaian melalui Dinas LH setempat', 'Ikuti verifikasi & pembinaan berjenjang']
    },
    {
      slug: 'proklim', name: 'Program Kampung Iklim', icon: 'sprout', tone: 'green',
      tagline: 'Aksi adaptasi dan mitigasi perubahan iklim berbasis komunitas.',
      desc: 'ProKlim mendorong kampung, desa, dan komunitas melakukan aksi nyata iklim: panen air hujan, energi terbarukan skala rumah tangga, bank sampah, hingga penghijauan.',
      audiens: 'RT/RW, dusun, desa & komunitas',
      periode: 'Registrasi sepanjang tahun via SRN PPI',
      manfaat: ['Ketahanan kampung terhadap dampak iklim', 'Apresiasi ProKlim Utama & Lestari', 'Akses pendampingan & pendanaan mitra'],
      langkah: ['Daftarkan lokasi pada Sistem Registri Nasional (SRN PPI)', 'Dokumentasikan aksi adaptasi & mitigasi', 'Verifikasi oleh tim provinsi/nasional', 'Kembangkan menuju ProKlim Lestari']
    },
    {
      slug: 'nirwasita-tantra', name: 'Nirwasita Tantra', icon: 'flag', tone: 'earth',
      tagline: 'Green leadership award bagi kepala daerah dan DPRD.',
      desc: 'Nirwasita Tantra menilai kepemimpinan hijau kepala daerah berdasarkan Dokumen Informasi Kinerja Pengelolaan Lingkungan Hidup Daerah (DIKPLHD) dan inovasi kebijakan.',
      audiens: 'Pemerintah provinsi & kabupaten/kota',
      periode: 'Penyampaian DIKPLHD Maret – Mei',
      manfaat: ['Rekognisi kepemimpinan hijau daerah', 'Benchmark kebijakan lingkungan antar daerah', 'Mendorong isu lingkungan dalam RPJMD'],
      langkah: ['Susun DIKPLHD sesuai pedoman', 'Sampaikan dokumen kepada KLH/BPLH', 'Presentasi kepala daerah di hadapan dewan juri', 'Penganugerahan bersama DPRD']
    },
    {
      slug: 'ekonomi-sirkular', name: 'Ekonomi Sirkular', icon: 'recycle', tone: 'sky',
      tagline: 'Transformasi ekonomi: kurangi, gunakan ulang, daur ulang.',
      desc: 'Program Ekonomi Sirkular mendorong industri dan masyarakat meninggalkan pola ambil-pakai-buang menuju rantai nilai melingkar: desain ulang produk, guna ulang, dan daur ulang material.',
      audiens: 'Industri, UMKM & komunitas',
      periode: 'Pendampingan bergulir sepanjang tahun',
      manfaat: ['Efisiensi bahan baku & energi', 'Peluang usaha daur ulang & jasa perbaikan', 'Pengurangan timbulan sampah nasional'],
      langkah: ['Ikuti asesmen mandiri ekonomi sirkular', 'Susun peta jalan sirkular perusahaan/komunitas', 'Terapkan pilot: desain ulang, guna ulang, daur ulang', 'Laporkan capaian & raih apresiasi']
    }
  ];

  /* ---------- 9 modul Informasi & Publikasi ---------- */
  KLH.modules = [
    { slug: 'berita', label: 'Berita', icon: 'newspaper', desc: 'Kabar kegiatan dan capaian KLH/BPLH.' },
    { slug: 'siaran-pers', label: 'Siaran Pers', icon: 'megaphone', desc: 'Pernyataan resmi untuk media.' },
    { slug: 'pengumuman', label: 'Pengumuman', icon: 'bell', desc: 'Informasi layanan, seleksi & lelang.' },
    { slug: 'agenda', label: 'Agenda & Kalender', icon: 'calendar', desc: 'Hari besar lingkungan & agenda.' , href: 'pages/informasi/agenda.html' },
    { slug: 'artikel', label: 'Artikel', icon: 'document', desc: 'Ulasan dan edukasi lingkungan.' },
    { slug: 'video', label: 'Video & Podcast', icon: 'play', desc: 'Kanal audio-visual resmi.', href: 'pages/informasi/galeri.html' },
    { slug: 'publikasi', label: 'Publikasi & Buku', icon: 'book', desc: 'Laporan, statistik & buku.' },
    { slug: 'sk', label: 'Surat Keputusan', icon: 'document', desc: 'SK Menteri & pimpinan.' },
    { slug: 'permen', label: 'Peraturan Menteri', icon: 'scale', desc: 'Regulasi lingkup KLH/BPLH.' }
  ];

  /* ---------- Konten indeks & detail ----------
     Berita, siaran pers & pengumuman: konten nyata kemenlh.go.id
     (Juli 2026). Modul lain masih contoh, siap diganti CMS. ---------- */
  KLH.articles = [
    {
      slug: 'mangrove-sumbawa', module: 'berita', ph: 'ph', img: 'assets/img/news/mangrove-sumbawa.jpg',
      icon: 'sprout', title: 'Buka Peluang Ekonomi Hijau Baru, Menteri LH Tegaskan Semangat Tobat Ekologis Lewat Restorasi Mangrove di Sumbawa',
      date: '2026-07-07', views: 4107, author: 'Biro Humas',
      excerpt: 'Restorasi mangrove di Desa Labuhan Alas, Sumbawa menjadi wujud gerakan tobat ekologis nasional untuk melindungi pesisir dari krisis iklim.',
      body: ['Kementerian Lingkungan Hidup bersama mitra dunia usaha meluncurkan program pemulihan ekosistem mangrove di Desa Labuhan Alas, Sumbawa, sebagai wujud gerakan "tobat ekologis" nasional untuk melindungi pesisir dari krisis iklim.', 'Hingga pertengahan 2026, kolaborasi ini telah merehabilitasi 484 hektare kawasan pesisir di Nusa Tenggara Barat melalui skema padat karya yang melibatkan 1.500 warga lokal menanam 1,5 juta bibit mangrove jenis Rhizophora.', 'Restorasi mangrove berkontribusi pada target nasional penanaman dua miliar pohon sekaligus membuka peluang ekonomi berkelanjutan: perikanan lestari, ekowisata, dan usaha mikro berbasis jasa lingkungan pesisir.']
    },
    {
      slug: 'pasar-karbon-singapura', module: 'berita', ph: 'ph--sky', img: 'assets/img/news/pasar-karbon-singapura.jpg',
      icon: 'globe', title: 'Tak Sekadar Wacana, Menteri LH: Bersama Singapura Kita Kelola Pasar Karbon yang Berkeadilan dan Perkuat Pelestarian Alam',
      date: '2026-07-06', views: 3480, author: 'Biro Humas',
      excerpt: 'Indonesia dan Singapura menandatangani dua MoU strategis tentang perlindungan lingkungan dan kolaborasi kredit karbon berdasarkan Pasal 6 Persetujuan Paris.',
      body: ['Indonesia dan Singapura menandatangani dua Memorandum Saling Pengertian strategis tentang perlindungan lingkungan dan kolaborasi kredit karbon berdasarkan Pasal 6 Persetujuan Paris. Penandatanganan dipimpin Menteri Lingkungan Hidup Moh Jumhur Hidayat dan Menteri Keberlanjutan Singapura Grace Fu.', 'Kedua negara akan berkolaborasi melalui peningkatan kapasitas aparatur, riset bersama, pertukaran ahli teknis, dan proyek percontohan — termasuk mekanisme verifikasi dan transfer hasil mitigasi internasional berintegritas tinggi agar tidak terjadi penghitungan emisi ganda.', 'Pemerintah menekankan pasar karbon harus menjamin keadilan iklim yang inklusif: manfaat ekonominya dirasakan hingga masyarakat lokal dan masyarakat adat yang terdampak perubahan iklim.']
    },
    {
      slug: 'wamen-el-nino-tpa', module: 'berita', ph: 'ph--earth', img: 'assets/img/news/wamen-el-nino-tpa.jpg',
      icon: 'warning', title: 'Wamen LH Ingatkan Kepala Daerah Seluruh Indonesia Waspada Risiko Kebakaran Tempat Pemrosesan Akhir Akibat El Nino',
      date: '2026-07-05', views: 2965, author: 'Biro Humas',
      excerpt: 'Wakil Menteri LH Diaz Hendropriyono meninjau kebakaran TPA Jatiwaringin dan mengingatkan kepala daerah mengantisipasi risiko serupa akibat El Nino.',
      body: ['Wakil Menteri Lingkungan Hidup Diaz Hendropriyono meninjau langsung lokasi kebakaran Tempat Pemrosesan Akhir (TPA) Jatiwaringin, Tangerang, yang memasuki hari kelima, sekaligus mengingatkan seluruh kepala daerah mewaspadai risiko serupa akibat iklim ekstrem El Nino.', 'Prioritas penanganan adalah keselamatan warga sekitar dan pekerja TPA. KLH/BPLH memantau lewat drone dan dua unit mobile monitoring kualitas udara, serta berkoordinasi dengan Kementerian Kehutanan yang mengirim 30 personel Manggala Agni.', 'Pemadaman dilanjutkan dengan water bombing helikopter dan operasi modifikasi cuaca. Wamen menekankan komitmen daerah pada program waste-to-energy serta kepatuhan pada instruksi pencegahan kebakaran dari pemerintah pusat.']
    },
    {
      slug: 'tpa-jatiwaringin', module: 'siaran-pers', ph: 'ph--earth', img: 'assets/img/news/tpa-jatiwaringin.jpg',
      icon: 'megaphone', title: 'Penanganan Kebakaran TPA Jatiwaringin Tunjukkan Hasil, Menteri LH: Area Terbakar Tinggal 3,6 Persen',
      date: '2026-07-05', views: 4102, author: 'Biro Humas',
      excerpt: 'Setelah enam hari operasi intensif, luas area terbakar TPA Jatiwaringin berkurang dari 70 persen menjadi 3,6 persen.',
      body: ['Setelah enam hari operasi intensif, penanganan kebakaran TPA Jatiwaringin, Kabupaten Tangerang menunjukkan hasil signifikan: luas area terbakar berkurang dari sekitar 70 persen menjadi tinggal 3,6 persen berkat kolaborasi pemerintah pusat, daerah, BNPB, TNI, dan Polri. (Siaran Pers No. SR.145/HUMAS/KLH-BPLH/7/2026)', 'Menteri Lingkungan Hidup Moh Jumhur Hidayat mengingatkan pekerjaan belum selesai — cuaca panas masih berpotensi memicu kebakaran kembali, sehingga bupati dan wali kota diminta memperkuat mitigasi dan kesiapsiagaan TPA selama musim kemarau.', 'Penanganan memadukan water bombing, penyiraman, injeksi air ke lapisan bawah timbunan sampah, dan pemadaman darat berkelanjutan; modifikasi cuaca disiapkan saat kondisi atmosfer memungkinkan.']
    },
    {
      slug: 'kelana-anak-muda', module: 'berita', ph: 'ph--mist', img: 'assets/img/news/kelana-anak-muda.jpg',
      icon: 'people', title: 'KELANA Buktikan Anak Muda Bisa Jadi Penggerak Aksi Lingkungan',
      date: '2026-07-05', views: 2711, author: 'Biro Humas',
      excerpt: 'KELANA (Kenali Lingkungan Bareng Anak Muda) menjadi ruang belajar generasi muda memahami isu lingkungan dan ikut berkontribusi pada solusinya.',
      body: ['KELANA (Kenali Lingkungan Bareng Anak Muda) adalah inisiatif KLH/BPLH yang dirancang sebagai ruang pembelajaran generasi muda untuk memahami isu lingkungan dan turut berkontribusi dalam solusinya — memadukan kunjungan lapangan, diskusi publik, dan aktivitas di sekolah serta kampus.', 'Pada Episode 2, peserta mengunjungi fasilitas PGN Pagardewa untuk mempelajari praktik pengelolaan lingkungan sektor migas, termasuk manajemen limbah dan pemberdayaan masyarakat lokal.', 'Sepanjang Juli 2026, KLH/BPLH menggelar "KELANA Challenge: Spill Insight KELANA Episode 2" — mengajak peserta dan publik membagikan aksi nyata yang terinspirasi dari program ini.']
    },
    {
      slug: 'brebes-asri', module: 'berita', ph: 'ph', img: 'assets/img/news/brebes-asri.jpg',
      icon: 'sprout', title: 'Gerakan Brebes ASRI, Menteri Jumhur: Saatnya Memuliakan Bumi Bersama',
      date: '2026-07-03', views: 3155, author: 'Biro Humas',
      excerpt: 'Menteri LH memimpin Gerakan Brebes ASRI dan penanaman mangrove di Pantai Randusanga Kulon untuk mempercepat rehabilitasi ekosistem mangrove.',
      body: ['Menteri Lingkungan Hidup Moh Jumhur Hidayat memimpin Gerakan Brebes ASRI dan penanaman mangrove di Pantai Randusanga Kulon, Kabupaten Brebes, sebagai bagian dari percepatan rehabilitasi ekosistem mangrove nasional.', 'Indonesia memiliki sekitar 3,4 juta hektare hutan mangrove, namun hampir 800 ribu hektare di antaranya rusak dan membutuhkan pemulihan. Mangrove melindungi pesisir dari abrasi sekaligus menyerap emisi karbon.', '"Menanam hari ini bukan sekadar menumbuhkan pohon. Kita sedang menumbuhkan perlindungan, kesejahteraan, dan harapan," ujar Menteri Jumhur. Gerakan ini melibatkan pemda, kampus, dunia usaha, dan masyarakat umum.']
    },
    {
      slug: 'lantik-pejabat', module: 'berita', ph: 'ph--sky', img: 'assets/img/news/lantik-pejabat.jpg',
      icon: 'institution', title: 'Menteri LH Lantik Dua Pejabat Pimpinan Tinggi, Tekankan Percepatan Solusi Lingkungan',
      date: '2026-07-02', views: 1894, author: 'Biro Humas',
      excerpt: 'Menteri LH melantik Kepala Pusat Standardisasi Instrumen LH dan Kepala Pusat Pengembangan Generasi LH berdasarkan Kepmen No. 2210 Tahun 2026.',
      body: ['Menteri Lingkungan Hidup Moh Jumhur Hidayat melantik dua Pejabat Pimpinan Tinggi Pratama: Upik Siti Asliah Kamil sebagai Kepala Pusat Standardisasi Instrumen Lingkungan Hidup dan Lulu Agustina sebagai Kepala Pusat Pengembangan Generasi Lingkungan Hidup, berdasarkan Keputusan Menteri Nomor 2210 Tahun 2026.', 'Menteri menekankan kecepatan dan efektivitas mengatasi tantangan lingkungan tanpa mengorbankan kualitas dan integritas, termasuk percepatan standardisasi teknologi lingkungan bagi pemerintah daerah dan pelaku usaha.', '"Bangsa ini membutuhkan ketergesaan kita semua. Kita adalah birokrat, tetapi juga pejuang," pesan Menteri Jumhur kepada pejabat yang dilantik.']
    },
    {
      slug: 'seleksi-jpt-madya', module: 'pengumuman', ph: 'ph--sky', img: 'assets/img/news/seleksi-jpt-madya.jpg',
      icon: 'bell', title: 'Pengumuman Hasil Akhir Seleksi Jabatan Pimpinan Tinggi Madya Lingkup Kementerian Lingkungan Hidup',
      date: '2026-07-06', views: 5230, author: 'Panitia Seleksi',
      excerpt: 'Panitia seleksi mengumumkan hasil akhir seleksi terbuka Jabatan Pimpinan Tinggi Madya di lingkungan KLH/BPLH.',
      body: ['Panitia Seleksi mengumumkan hasil akhir seleksi terbuka Jabatan Pimpinan Tinggi (JPT) Madya di lingkungan Kementerian Lingkungan Hidup / Badan Pengendalian Lingkungan Hidup.', 'Dokumen pengumuman lengkap beserta daftar nama dapat diunduh melalui lampiran resmi pada portal kemenlh.go.id.']
    },
    {
      slug: 'mangrove-perpanjangan', module: 'pengumuman', ph: 'ph--mist', img: 'assets/img/news/mangrove-perpanjangan.jpg',
      icon: 'bell', title: 'Pengumuman Perpanjangan Unggah Rencana Kegiatan Penanaman Mangrove',
      date: '2026-07-03', views: 1642, author: 'Biro Humas',
      excerpt: 'Pendaftaran rencana kegiatan penanaman mangrove Hari Mangrove Sedunia 2026 diperpanjang hingga 15 Juli 2026.',
      body: ['Dalam rangka Hari Mangrove Sedunia 2026 bertema "Menjaga Mangrove, Mengamankan Generasi Mendatang", KLH mengundang pemerintah daerah, dunia usaha, organisasi masyarakat sipil, dan seluruh elemen masyarakat mengikuti aksi penanaman mangrove serentak pada 26 Juli 2026 pukul 07.00 WITA, dipusatkan di Bali.', 'Pendaftaran rencana kegiatan melalui formulir daring diperpanjang hingga 15 Juli 2026 agar seluruh pemangku kepentingan berkesempatan mendaftarkan kegiatan penanaman di wilayah masing-masing.']
    },
    {
      slug: 'panduan-pilah-sampah', module: 'artikel', ph: 'ph',
      icon: 'recycle', title: 'Panduan Praktis Memilah Sampah Rumah Tangga dari Dapur Sendiri',
      date: '2026-06-08', views: 8342, author: 'Tim Edukasi',
      excerpt: 'Tiga wadah sederhana di rumah dapat memangkas hingga 60% sampah yang berakhir di TPA.',
      body: ['Memilah sampah tidak memerlukan peralatan mahal. Tiga wadah — organik, anorganik daur ulang, dan residu — sudah cukup untuk memulai dari dapur sendiri.', 'Sampah organik dapat diolah menjadi kompos dengan ember tumpuk atau lubang biopori. Sampah daur ulang bernilai ekonomi bila disetorkan ke bank sampah terdekat.', 'Bila konsisten, rumah tangga dapat memangkas hingga 60% sampah yang berakhir di TPA — sekaligus mengurangi emisi metana.']
    },
    {
      slug: 'statistik-lh-2025', module: 'publikasi', ph: 'ph--sky',
      icon: 'book', title: 'Statistik Lingkungan Hidup Indonesia 2025 (Buku Digital)',
      date: '2026-05-30', views: 1937, author: 'Pusat Data',
      excerpt: 'Kompilasi data kualitas air, udara, tutupan lahan, dan pengelolaan sampah nasional — unduh gratis.',
      body: ['Buku Statistik Lingkungan Hidup Indonesia 2025 memuat kompilasi data kualitas air, udara, tutupan lahan, timbulan sampah, dan kinerja pengelolaan lingkungan seluruh provinsi.', 'Publikasi ini terbuka untuk peneliti, jurnalis, dan masyarakat umum. Seluruh tabel tersedia dalam format terbuka yang dapat diolah ulang.', 'Unduh versi PDF dan lampiran data melalui tautan pada halaman ini.']
    },
    {
      slug: 'sk-tim-adipura', module: 'sk', ph: 'ph--earth',
      icon: 'document', title: 'SK Penetapan Tim Penilai Adipura Tahun Anggaran 2026',
      date: '2026-05-22', views: 864, author: 'Sekretariat Utama',
      excerpt: 'Surat Keputusan penetapan susunan tim penilai Adipura beserta tugas dan wilayah kerjanya.',
      body: ['Surat Keputusan ini menetapkan susunan tim penilai Adipura Tahun Anggaran 2026 beserta pembagian wilayah kerja pemantauan.', 'Dokumen lengkap dapat diunduh pada lampiran halaman ini.']
    },
    {
      slug: 'permen-baku-mutu-air', module: 'permen', ph: 'ph',
      icon: 'scale', title: 'Peraturan Menteri tentang Baku Mutu Air Limbah Kegiatan Industri Tekstil',
      date: '2026-05-10', views: 2210, author: 'Biro Hukum',
      excerpt: 'Pembaruan parameter baku mutu air limbah bagi industri tekstil dengan masa transisi 18 bulan.',
      body: ['Peraturan Menteri ini memperbarui parameter baku mutu air limbah bagi kegiatan industri tekstil, menyesuaikan perkembangan teknologi pengolahan terbaik yang tersedia.', 'Pelaku usaha diberikan masa transisi 18 bulan sejak diundangkan untuk menyesuaikan instalasi pengolahan air limbah.', 'Naskah lengkap tersedia pada JDIH dan lampiran halaman ini.']
    }
  ];

  /* ---------- Struktur Organisasi (pimpinan: nama nyata; lainnya contoh) ---------- */
  KLH.pejabat = [
    { id: 'menteri', nama: 'Moh Jumhur Hidayat', jabatan: 'Menteri Lingkungan Hidup / Kepala BPLH', level: 1, icon: 'user',
      profil: 'Memimpin perumusan dan pelaksanaan kebijakan lingkungan hidup nasional serta pengendalian pembangunan berkelanjutan.' },
    { id: 'wamen', nama: 'Diaz Faisal Malik Hendropriyono', jabatan: 'Wakil Menteri Lingkungan Hidup / Wakil Kepala BPLH', level: 1, icon: 'user',
      profil: 'Membantu Menteri dalam koordinasi kebijakan strategis dan pengawasan pelaksanaan program prioritas.' },
    { id: 'sekut', nama: 'Ir. Bambang Nugraha, M.M.', jabatan: 'Sekretaris Utama', level: 2, icon: 'institution',
      profil: 'Mengoordinasikan dukungan administrasi, perencanaan, keuangan, dan kehumasan seluruh unit kerja.' },
    { id: 'dep1', nama: 'Dr. Ratih Kusumastuti, S.T., M.Env.', jabatan: 'Deputi Bidang Pengendalian Pencemaran', level: 2, icon: 'drop',
      profil: 'Menangani pengendalian pencemaran air, udara, dan limbah B3 termasuk pengawasan ketaatan usaha.' },
    { id: 'dep2', nama: 'Prof. Dr. Agus Hardiansyah', jabatan: 'Deputi Bidang Perubahan Iklim & Tata Lingkungan', level: 2, icon: 'sun',
      profil: 'Mengelola kebijakan mitigasi-adaptasi iklim, KLHS, dan instrumen tata lingkungan.' },
    { id: 'dep3', nama: 'Ir. Melati Anggraeni, M.Sc.', jabatan: 'Deputi Bidang Pengelolaan Sampah & Ekonomi Sirkular', level: 2, icon: 'recycle',
      profil: 'Memimpin transformasi pengelolaan sampah nasional dan penerapan ekonomi sirkular.' },
    { id: 'irjen', nama: 'Drs. Hendro Prakoso, Ak., CA.', jabatan: 'Inspektur Utama', level: 2, icon: 'shield',
      profil: 'Melaksanakan pengawasan internal, pembangunan Zona Integritas, dan pengelolaan LHKPN.' },
    { id: 'kap1', nama: 'Dr. Sinta Maharani, S.Si.', jabatan: 'Kepala Pusat Data & Informasi', level: 3, icon: 'chartline',
      profil: 'Mengelola satu data lingkungan hidup, pemantauan kualitas lingkungan, dan layanan informasi.' },
    { id: 'kap2', nama: 'Ir. Yoga Pratama, M.T.', jabatan: 'Kepala Pusat Laboratorium (Pusarpedal)', level: 3, icon: 'flask',
      profil: 'Menyelenggarakan layanan pengujian kualitas lingkungan yang terakreditasi.' }
  ];

  /* ---------- Agenda: hari besar lingkungan 2026 ---------- */
  KLH.agenda = [
    { d: '2026-01-10', label: 'Hari Gerakan Satu Juta Pohon', jenis: 'hari-besar' },
    { d: '2026-02-02', label: 'Hari Lahan Basah Sedunia', jenis: 'hari-besar' },
    { d: '2026-02-21', label: 'Hari Peduli Sampah Nasional (HPSN)', jenis: 'hari-besar' },
    { d: '2026-03-20', label: 'Hari Kehutanan Sedunia', jenis: 'hari-besar' },
    { d: '2026-03-22', label: 'Hari Air Sedunia', jenis: 'hari-besar' },
    { d: '2026-04-22', label: 'Hari Bumi', jenis: 'hari-besar' },
    { d: '2026-05-22', label: 'Hari Keanekaragaman Hayati', jenis: 'hari-besar' },
    { d: '2026-06-05', label: 'Hari Lingkungan Hidup Sedunia', jenis: 'hari-besar' },
    { d: '2026-06-08', label: 'Hari Laut Sedunia', jenis: 'hari-besar' },
    { d: '2026-07-15', label: 'Rakor Pengendalian Pencemaran Regional Jawa', jenis: 'agenda' },
    { d: '2026-07-22', label: 'Bimtek PROPER bagi Industri Wajib Lapor', jenis: 'agenda' },
    { d: '2026-07-15', label: 'Batas Unggah Rencana Penanaman Mangrove', jenis: 'agenda' },
    { d: '2026-07-26', label: 'Aksi Serentak Hari Mangrove Sedunia (pusat: Bali)', jenis: 'hari-besar' },
    { d: '2026-07-28', label: 'Sosialisasi Permen Baku Mutu Air Limbah Tekstil', jenis: 'agenda' },
    { d: '2026-08-17', label: 'Hari Kemerdekaan RI (libur nasional)', jenis: 'libur' },
    { d: '2026-09-16', label: 'Hari Ozon Internasional', jenis: 'hari-besar' },
    { d: '2026-11-05', label: 'Hari Cinta Puspa & Satwa Nasional', jenis: 'hari-besar' },
    { d: '2026-11-28', label: 'Hari Menanam Pohon Indonesia', jenis: 'hari-besar' }
  ];

  /* ---------- Galeri Video & Podcast ---------- */
  KLH.videos = [
    { id: 'v1', jenis: 'Video', durasi: '12:40', ph: 'ph', icon: 'play', title: 'Dokumenter: Kampung Iklim Wonolelo — Mandiri Energi & Pangan', views: 21400, date: '2026-06-12' },
    { id: 'v2', jenis: 'Podcast', durasi: '38:05', ph: 'ph--earth', icon: 'micro', title: 'Bincang Bumi Ep. 14 — Karbon Biru dan Masa Depan Pesisir', views: 8730, date: '2026-06-03' },
    { id: 'v3', jenis: 'Video', durasi: '06:18', ph: 'ph--sky', icon: 'play', title: 'Tutorial: Cara Mengajukan Permohonan Informasi via PPID Online', views: 15210, date: '2026-05-27' },
    { id: 'v4', jenis: 'Video', durasi: '09:52', ph: 'ph--mist', icon: 'play', title: 'Di Balik Layar Laboratorium Pusarpedal: Menguji Kualitas Air Sungai', views: 6480, date: '2026-05-18' },
    { id: 'v5', jenis: 'Podcast', durasi: '41:30', ph: 'ph', icon: 'micro', title: 'Bincang Bumi Ep. 13 — Ekonomi Sirkular untuk UMKM', views: 7902, date: '2026-05-06' },
    { id: 'v6', jenis: 'Video', durasi: '04:45', ph: 'ph--earth', icon: 'play', title: 'Sorotan PROPER 2025: Kisah Peringkat Emas', views: 11930, date: '2026-04-29' }
  ];

  /* ---------- Util format tanggal ---------- */
  KLH.fmtDate = function (iso) {
    var b = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    var p = iso.split('-');
    return parseInt(p[2], 10) + ' ' + b[parseInt(p[1], 10) - 1] + ' ' + p[0];
  };
  KLH.fmtViews = function (n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace('.', ',') + ' rb' : String(n);
  };
  KLH.qs = function (key) {
    return new URLSearchParams(location.search).get(key);
  };
})();
