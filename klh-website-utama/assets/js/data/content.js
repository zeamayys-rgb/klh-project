/* ============================================================
   KLH.content — data konten prototipe (dummy, siap diganti CMS)
   Dipakai oleh: program/detail, informasi/indeks & detail,
   struktur organisasi, agenda, galeri, dan pencarian.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};
  var R = window.KLH_ROOT || '';

  /* ---------- 7 Program Lingkungan (KAK WEB-MAIN-PRG) ---------- */
  KLH.programs = [
    {
      slug: 'kalpataru', name: 'Kalpataru', icon: 'award', tone: 'earth',
      page: 'pages/program/kalpataru.html',
      tagline: 'Penghargaan tertinggi bagi perintis, pengabdi, penyelamat, dan pembina lingkungan hidup.',
      desc: 'Kalpataru diberikan kepada individu dan kelompok masyarakat yang berjasa luar biasa dalam melestarikan fungsi lingkungan hidup. Tiga jenis penghargaan: Kalpataru Adya (kategori Perintis, Pengabdi, Penyelamat, dan Pembina Lingkungan), Kalpataru Yuvan bagi generasi muda, dan Kalpataru Lestari bagi penerima yang konsisten berkiprah.',
      audiens: 'Individu & kelompok masyarakat',
      periode: 'Pendaftaran Januari – Maret, penganugerahan Juni',
      manfaat: ['Pengakuan nasional atas dedikasi lingkungan', 'Pendampingan penguatan kapasitas komunitas', 'Jejaring penerima Kalpataru lintas daerah'],
      langkah: ['Siapkan profil kiprah lingkungan calon (perorangan atau kelompok)', 'Ajukan usulan secara daring melalui aplikasi SITARU (sitaru.kemenlh.go.id)', 'Lengkapi dokumen pendukung & ikuti verifikasi lapangan', 'Penilaian Dewan Pertimbangan Kalpataru & penganugerahan'],
      daftar: { label: 'Usulkan Calon (SITARU)', href: 'https://sitaru.kemenlh.go.id/auth/login', ext: 'SITARU — Sistem Informasi Penghargaan Kalpataru' }
    },
    {
      slug: 'proper', name: 'PROPER', icon: 'factory', tone: 'green',
      page: 'pages/program/proper.html',
      tagline: 'Program Penilaian Peringkat Kinerja Perusahaan dalam Pengelolaan Lingkungan Hidup.',
      desc: 'PROPER adalah singkatan dari Program Penilaian Peringkat Kinerja Perusahaan dalam Pengelolaan Lingkungan Hidup — evaluasi kinerja bagi penanggung jawab usaha dan/atau kegiatan di bidang pengelolaan lingkungan hidup, dengan peringkat warna Emas, Hijau, Biru, Merah, dan Hitam.',
      audiens: 'Perusahaan & pelaku usaha',
      periode: 'Penilaian sepanjang tahun, publikasi Desember',
      manfaat: ['Citra ketaatan lingkungan yang terverifikasi', 'Insentif reputasi bagi peringkat Emas & Hijau', 'Peta jalan perbaikan bagi peringkat Merah'],
      langkah: ['Registrasi perusahaan pada sistem SIMPEL', 'Sampaikan dokumen swapantau berkala', 'Ikuti verifikasi lapangan tim penilai', 'Pantau hasil & tindak lanjuti rekomendasi'],
      daftar: { label: 'Daftar / Ajukan Usulan', href: 'https://simpel.kemenlh.go.id/2023/landing', ext: 'SIMPEL — Sistem Pelaporan Elektronik' }
    },
    {
      slug: 'adipura', name: 'Adipura', icon: 'award', tone: 'green',
      page: 'pages/program/adipura.html',
      tagline: 'Apresiasi bagi kabupaten/kota terbersih dengan pengelolaan sampah berkelanjutan.',
      desc: 'Adipura menilai kinerja pemerintah kabupaten/kota dalam kebersihan, pengelolaan sampah, dan kualitas lingkungan perkotaan. Empat jenjang apresiasi: Adipura Kencana, Adipura, Sertifikat Adipura, dan predikat Kota Kotor.',
      audiens: 'Pemerintah kabupaten/kota',
      periode: 'Pemantauan dua tahap per tahun anggaran',
      manfaat: ['Tolok ukur kinerja kebersihan kota', 'Motivasi kolaborasi warga & pemda', 'Praktik baik antar daerah dibagikan'],
      langkah: ['Pemda menyampaikan data pengelolaan sampah pada sistem SIPSN', 'Klarifikasi kota/kabupaten', 'Penilaian dokumen kebijakan & TPA', 'Penganugerahan Adipura oleh Menteri'],
      daftar: null,
      info: { label: 'Data lengkap Adipura', href: 'https://kemenlh.go.id/contents/14/Adipura' }
    },
    {
      slug: 'adiwiyata', name: 'Adiwiyata', icon: 'book', tone: 'sky',
      page: 'pages/program/adiwiyata.html',
      tagline: 'Gerakan sekolah peduli dan berbudaya lingkungan hidup.',
      desc: 'Adiwiyata adalah program nasional untuk mewujudkan sekolah yang peduli dan berbudaya lingkungan — mengintegrasikan pendidikan lingkungan ke pembelajaran intrakurikuler, kokurikuler, dan ekstrakurikuler pada jenjang SD/MI hingga SMA/SMK sederajat.',
      audiens: 'Sekolah (SD–SMA/SMK sederajat)',
      periode: 'Usulan Februari – April, penetapan akhir tahun',
      manfaat: ['Penghargaan berjenjang kabupaten/kota, provinsi & nasional', 'Karakter peduli lingkungan sejak dini', 'Budaya sekolah bersih, sehat & hijau'],
      langkah: ['Bentuk tim & susun rencana Gerakan PBLHS, terbitkan SK Tim Sekolah Adiwiyata', 'Usulkan sekolah ke perangkat daerah bidang lingkungan hidup', 'Registrasi melalui Sistem Informasi Adiwiyata (SIDIA)', 'Ikuti penilaian & pembinaan berjenjang hingga tingkat nasional'],
      daftar: { label: 'Registrasi SIDIA', href: 'https://pusatpglhk.bp2sdm.menlhk.go.id/sidia/register', ext: 'SIDIA — Sistem Informasi Adiwiyata' },
      info: { label: 'Info lengkap Adiwiyata', href: 'https://kemenlh.go.id/contents/15/Adiwiyata' }
    },
    {
      slug: 'proklim', name: 'Program Kampung Iklim', icon: 'sprout', tone: 'green',
      page: 'pages/program/proklim.html',
      tagline: 'Aksi adaptasi dan mitigasi perubahan iklim berbasis komunitas.',
      desc: 'ProKlim adalah gerakan nasional berbasis komunitas untuk adaptasi dampak perubahan iklim dan mitigasi emisi gas rumah kaca secara berkelanjutan — dari tingkat RT/RW, dusun, hingga desa dan kelurahan.',
      audiens: 'RT/RW, dusun, desa & komunitas',
      periode: 'Registrasi sepanjang tahun via SRN PPI',
      manfaat: ['Ketahanan kampung terhadap dampak iklim', 'Apresiasi berjenjang Pratama, Madya, Utama & Trofi Nasional', 'Akses pendampingan teknis & pendanaan mitra'],
      langkah: ['Identifikasi lokasi potensial — pemda, komunitas, atau lembaga mengusulkan wilayahnya', 'Pendaftaran & verifikasi oleh tim KLH/BPLH berdasarkan indikator adaptasi dan mitigasi', 'Pendampingan & fasilitasi: pelatihan, bimbingan teknis, dan dukungan pelaksanaan', 'Evaluasi & apresiasi: sertifikat, piagam, hingga trofi ProKlim Nasional'],
      info: { label: 'Info lengkap ProKlim', href: 'https://kemenlh.go.id/contents/16/Program-Kampung-Iklim-Proklim' },
      konten: [
        '<figure style="margin:0">',
        '<img src="', R, 'assets/img/proklim.jpg" alt="Warga bergotong royong menanam dan mengelola lingkungan pada lokasi Program Kampung Iklim" loading="lazy" style="width:100%;display:block;border-radius:var(--r-xl);box-shadow:var(--sh-2);aspect-ratio:16/9;object-fit:cover">',
        '<figcaption style="font-size:var(--t-xs);color:var(--ink-500);margin-top:var(--s2)">Aksi komunitas pada lokasi Program Kampung Iklim.</figcaption>',
        '</figure>',
        '<div class="prose">',
        '<h2 style="font-size:var(--t-h3)">Tujuan ProKlim</h2>',
        '<p>ProKlim berfokus pada aksi nyata di tingkat lokal dengan empat tujuan utama:</p>',
        '<ul><li>Meningkatkan pemahaman masyarakat mengenai perubahan iklim.</li>',
        '<li>Menumbuhkan inisiatif pengelolaan sumber daya berbasis potensi lokal.</li>',
        '<li>Berkontribusi pada penurunan emisi gas rumah kaca nasional.</li>',
        '<li>Membangun ketahanan iklim wilayah secara berkelanjutan.</li></ul>',
        '<h2 style="font-size:var(--t-h3)">Ruang Lingkup Kegiatan</h2>',
        '</div>',
        '<div class="grid grid--2" style="margin-top:var(--s5)">',
        '<div class="card"><div class="card__body" style="padding:var(--s5)">',
        '<span class="svc-card__icon" style="margin-bottom:var(--s3)">', KLH.iconSVG('drop', 'icon'), '</span>',
        '<h3 style="font-size:var(--t-h4)">Adaptasi Perubahan Iklim</h3>',
        '<ul style="margin:var(--s3) 0 0;padding-left:var(--s5);color:var(--ink-700);font-size:var(--t-sm);display:grid;gap:var(--s2)">',
        '<li>Pengelolaan sumber daya air: sumur resapan, panen air hujan, embung desa.</li>',
        '<li>Ketahanan pangan: pertanian organik, kebun vertikal.</li>',
        '<li>Kesehatan masyarakat & pengurangan risiko bencana.</li></ul>',
        '</div></div>',
        '<div class="card"><div class="card__body" style="padding:var(--s5)">',
        '<span class="svc-card__icon" style="margin-bottom:var(--s3)">', KLH.iconSVG('recycle', 'icon'), '</span>',
        '<h3 style="font-size:var(--t-h4)">Mitigasi Perubahan Iklim</h3>',
        '<ul style="margin:var(--s3) 0 0;padding-left:var(--s5);color:var(--ink-700);font-size:var(--t-sm);display:grid;gap:var(--s2)">',
        '<li>Pengelolaan sampah terpadu: daur ulang & pengomposan.</li>',
        '<li>Efisiensi energi & pemanfaatan energi terbarukan.</li>',
        '<li>Penghijauan & konservasi kawasan.</li></ul>',
        '</div></div>',
        '</div>',
        '<div class="prose"><h2 style="font-size:var(--t-h3)">Kategori Apresiasi</h2>',
        '<p>Lokasi ProKlim dinilai berjenjang sesuai perkembangan aksinya:</p></div>',
        '<div class="grid grid--2" style="margin-top:var(--s5)">',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('sprout', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">ProKlim Pratama</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Inisiatif awal aksi adaptasi dan mitigasi di tingkat komunitas.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('leaf', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">ProKlim Madya</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Kegiatan berjalan aktif dengan partisipasi warga yang meluas.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('tree', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">ProKlim Utama</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Kelembagaan kuat dan kegiatan berkelanjutan.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('award', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Trofi ProKlim Nasional</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Praktik terbaik nasional yang menjadi teladan antar daerah.</p></div></div>',
        '</div>',
        '<p style="font-size:var(--t-xs);color:var(--ink-500);margin-top:var(--s6)">Sumber: <a href="https://kemenlh.go.id/contents/16/Program-Kampung-Iklim-Proklim" target="_blank" rel="noopener noreferrer" data-ext="kemenlh.go.id">kemenlh.go.id — Program Kampung Iklim (ProKlim)</a></p>'
      ].join('')
    },
    {
      slug: 'nirwasita-tantra', name: 'Nirwasita Tantra', icon: 'flag', tone: 'earth',
      page: 'pages/program/nirwasita-tantra.html',
      tagline: 'Green leadership award bagi kepala daerah dan DPRD.',
      desc: 'Nirwasita Tantra adalah penghargaan pemerintah bagi kepala daerah yang berhasil merumuskan dan menerapkan kebijakan pembangunan berkelanjutan berwawasan lingkungan — dinilai dari Status Lingkungan Hidup Daerah (SLHD) dan inovasi kebijakannya.',
      audiens: 'Pemerintah provinsi & kabupaten/kota',
      periode: 'Penyerahan SLHD paling lambat 30 April, penganugerahan Juni',
      manfaat: ['Rekognisi kepemimpinan hijau daerah', 'Basis data lingkungan daerah yang kuat', 'Insentif & sinergi kebijakan pusat–daerah'],
      langkah: ['Susun SLHD (Buku I–III) sesuai pedoman terbaru', 'Unggah di laman resmi daerah & kirim PDF ke nirwasitatantra@kemenlh.go.id', 'Ikuti penapisan dokumen & penilaian Dewan Pertimbangan', 'Penganugerahan pada puncak acara Hari Lingkungan Hidup'],
      info: { label: 'Info lengkap Nirwasita Tantra', href: 'https://kemenlh.go.id/contents/17/Nirwasita-Tantra-Green-Leadership' },
      konten: [
        '<div class="prose">',
        '<h2 style="font-size:var(--t-h3)">SLHD sebagai dasar penilaian</h2>',
        '<p>Penilaian berbasis <strong>Status Lingkungan Hidup Daerah (SLHD)</strong> — laporan tahunan kinerja pengelolaan lingkungan hidup yang disusun pemerintah daerah. Mulai 2026, pedoman SLHD yang disempurnakan menggantikan DIKPLHD, mencakup keanekaragaman hayati, kualitas air, laut &amp; pesisir, kualitas udara, lahan &amp; hutan, pengelolaan sampah &amp; limbah, perubahan iklim, serta risiko bencana.</p>',
        '<h2 style="font-size:var(--t-h3)">Tujuan program</h2>',
        '<ul><li>Memperkuat basis data & informasi lingkungan daerah.</li>',
        '<li>Evaluasi mandiri kebijakan pemda berbasis data lingkungan hidup.</li>',
        '<li>Meningkatkan pemahaman pengambil kebijakan berbasis data.</li>',
        '<li>Memperkuat sinergi kebijakan pemerintah pusat–daerah.</li>',
        '<li>Menjadi informasi publik tentang lingkungan & kebijakan pemda.</li>',
        '<li>Insentif bagi daerah: penghargaan hingga dana insentif daerah.</li></ul>',
        '<h2 style="font-size:var(--t-h3)">Tiga buku SLHD</h2>',
        '</div>',
        '<div class="grid grid--3" style="margin-top:var(--s5)">',
        '<div class="card"><div class="card__body" style="padding:var(--s5)"><span class="svc-card__icon" style="margin-bottom:var(--s3)">', KLH.iconSVG('document', 'icon'), '</span><h3 style="font-size:var(--t-body)">Buku I<br>Ringkasan Eksekutif</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin-top:var(--s2)">Tabel analisis DPSIR pada delapan matra isu lingkungan.</p></div></div>',
        '<div class="card"><div class="card__body" style="padding:var(--s5)"><span class="svc-card__icon" style="margin-bottom:var(--s3)">', KLH.iconSVG('book', 'icon'), '</span><h3 style="font-size:var(--t-body)">Buku II<br>Laporan Utama</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin-top:var(--s2)">Hubungan kausalitas pemicu, status, akibat, dan upaya perbaikan kualitas lingkungan.</p></div></div>',
        '<div class="card"><div class="card__body" style="padding:var(--s5)"><span class="svc-card__icon" style="margin-bottom:var(--s3)">', KLH.iconSVG('list', 'icon'), '</span><h3 style="font-size:var(--t-body)">Buku III<br>Tabel & Lampiran</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin-top:var(--s2)">Data utama dan data tambahan sesuai tata cara yang ditentukan.</p></div></div>',
        '</div>',
        '<div class="prose"><h2 style="font-size:var(--t-h3)">Komponen penilaian</h2></div>',
        '<div class="grid grid--2" style="margin-top:var(--s5)">',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('check', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Kelengkapan SLHD</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Ketiga buku disusun lengkap sesuai pedoman.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('award', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Keaktifan program KLH</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Adipura, PROPER, Adiwiyata, ProKlim & Kalpataru.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('chartline', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">IKLH</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Indeks kualitas air, udara, lahan, dan pesisir laut.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('speech', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Wawancara</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Klarifikasi langsung oleh Kementerian Lingkungan Hidup.</p></div></div>',
        '</div>',
        '<div class="card tonal" style="box-shadow:none;margin-top:var(--s8)"><div class="card__body" style="padding:var(--s5)">',
        '<span class="eyebrow">Linimasa Nirwasita Tantra 2026</span>',
        '<ul style="margin:var(--s3) 0 0;padding-left:var(--s5);color:var(--ink-700);font-size:var(--t-sm);display:grid;gap:var(--s2)">',
        '<li><strong>Desember 2025</strong> — diseminasi & sosialisasi pedoman penyusunan SLHD.</li>',
        '<li><strong>30 April 2026</strong> — batas waktu penyerahan SLHD (unggah di laman daerah & PDF ke <a href="mailto:nirwasitatantra@kemenlh.go.id">nirwasitatantra@kemenlh.go.id</a>).</li>',
        '<li><strong>Mei 2026</strong> — penapisan dokumen & penilaian Dewan Pertimbangan.</li>',
        '<li><strong>Juni 2026</strong> — penganugerahan pada puncak acara Hari Lingkungan Hidup.</li></ul>',
        '</div></div>',
        '<div class="prose"><h2 style="font-size:var(--t-h3)">Dasar hukum</h2>',
        '<ul><li>UU No. 32 Tahun 2009 tentang Perlindungan & Pengelolaan Lingkungan Hidup, Pasal 62 ayat (1).</li>',
        '<li>UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik, Pasal 2 ayat (3).</li>',
        '<li>PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan & Pengelolaan Lingkungan Hidup.</li></ul></div>',
        '<p style="font-size:var(--t-xs);color:var(--ink-500);margin-top:var(--s6)">Sumber: <a href="https://kemenlh.go.id/contents/17/Nirwasita-Tantra-Green-Leadership" target="_blank" rel="noopener noreferrer" data-ext="kemenlh.go.id">kemenlh.go.id — Nirwasita Tantra (Green Leadership)</a></p>'
      ].join('')
    },
    {
      slug: 'ekonomi-sirkular', name: 'Ekonomi Sirkular', icon: 'recycle', tone: 'sky',
      page: 'pages/program/ekonomi-sirkular.html',
      tagline: 'Transformasi ekonomi: kurangi, gunakan ulang, daur ulang.',
      desc: 'Ekonomi Sirkular adalah pendekatan pembangunan yang menempatkan efisiensi pemanfaatan sumber daya dan perlindungan lingkungan hidup sebagai satu kesatuan yang tidak terpisahkan — beralih dari pola linear ambil–olah–buang menuju pengurangan limbah, guna ulang, dan pencegahan pencemaran sejak hulu.',
      audiens: 'Industri, UMKM & komunitas',
      periode: 'Pendampingan bergulir sepanjang tahun',
      manfaat: ['Efisiensi sumber daya & energi', 'Lapangan kerja hijau & peluang usaha daur ulang', 'Pengurangan pencemaran & tekanan sumber daya alam'],
      langkah: ['Ikuti asesmen mandiri ekonomi sirkular', 'Susun peta jalan sirkular perusahaan/komunitas', 'Terapkan pilot: desain ulang, guna ulang, daur ulang', 'Laporkan capaian & raih apresiasi'],
      info: { label: 'Info lengkap Ekonomi Sirkular', href: 'https://kemenlh.go.id/contents/18/Ekonomi-Sirkular' },
      konten: [
        '<div class="prose">',
        '<h2 style="font-size:var(--t-h3)">Dari linear menuju sirkular</h2>',
        '<p>Model produksi dan konsumsi dialihkan dari ekonomi linear (ambil–olah–buang) ke sistem yang menekankan pengurangan limbah, pemanfaatan kembali sumber daya, serta pencegahan pencemaran sejak hulu — sehingga nilai material dipertahankan selama mungkin dalam rantai ekonomi.</p>',
        '<h2 style="font-size:var(--t-h3)">Empat prinsip utama</h2>',
        '</div>',
        '<div class="grid grid--2" style="margin-top:var(--s5)">',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('sun', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Efisiensi & konservasi sumber daya</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Desain produk dan proses yang hemat energi serta bahan baku.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('clock', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Perpanjangan siklus hidup produk</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Guna ulang dan perbaikan agar produk terpakai lebih lama.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('recycle', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Limbah sebagai sumber daya</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Daur ulang mengubah limbah menjadi bahan baku baru.</p></div></div>',
        '<div class="card nilai-chip"><span class="svc-card__icon">', KLH.iconSVG('shield', 'icon'), '</span><div><h3 style="font-size:var(--t-body);margin-bottom:2px">Pencegahan pencemaran</h3><p style="font-size:var(--t-sm);color:var(--ink-500);margin:0">Terintegrasi dalam siklus produk secara menyeluruh, dari desain hingga akhir pakai.</p></div></div>',
        '</div>',
        '<div class="prose"><h2 style="font-size:var(--t-h3)">Manfaat strategis</h2>',
        '<ul><li>Menurunkan tekanan terhadap sumber daya alam.</li>',
        '<li>Mengurangi pencemaran dan timbulan sampah.</li>',
        '<li>Meningkatkan efisiensi ekonomi & menciptakan lapangan kerja hijau.</li>',
        '<li>Mendukung pencapaian target pembangunan berkelanjutan & pengendalian perubahan iklim.</li></ul></div>',
        '<div class="card tonal tonal--sky" style="box-shadow:none;margin-top:var(--s8)"><div class="card__body" style="padding:var(--s5);display:flex;gap:var(--s4);align-items:flex-start">',
        '<span style="flex:none;margin-top:2px;color:var(--klh-green-700)">', KLH.iconSVG('institution', 'icon'), '</span>',
        '<p style="margin:0;font-size:var(--t-sm)"><strong>Peran KLH & BPLH:</strong> Kementerian Lingkungan Hidup merumuskan kebijakan nasional ekonomi sirkular; Badan Pengendalian Lingkungan Hidup menjalankan fungsi pemantauan, pengawasan, dan penegakan hukum lingkungan.</p>',
        '</div></div>',
        '<p style="font-size:var(--t-xs);color:var(--ink-500);margin-top:var(--s6)">Sumber: <a href="https://kemenlh.go.id/contents/18/Ekonomi-Sirkular" target="_blank" rel="noopener noreferrer" data-ext="kemenlh.go.id">kemenlh.go.id — Ekonomi Sirkular</a></p>'
      ].join('')
    },
    {
      slug: 'sipsn', name: 'SIPSN — Sampah Nasional', icon: 'recycle', tone: 'earth',
      external: 'https://sampahnasional.kemenlh.go.id/',
      tagline: 'Sistem Informasi Pengelolaan Sampah Nasional — data timbulan, pengurangan, dan penanganan sampah.',
      audiens: 'Pemerintah daerah & publik'
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
      slug: 'sp-hari-mangrove', module: 'siaran-pers', ph: 'ph',
      icon: 'megaphone', title: 'Siaran Pers: Aksi Serentak Hari Mangrove Sedunia 2026 Dipusatkan di Bali, Seluruh Daerah Diajak Menanam',
      date: '2026-07-04', views: 2380, author: 'Biro Humas',
      excerpt: 'KLH mengajak pemerintah daerah, dunia usaha, dan masyarakat mengikuti aksi penanaman mangrove serentak pada 26 Juli 2026. (Konten contoh)',
      body: ['Kementerian Lingkungan Hidup mengundang seluruh elemen masyarakat mengikuti aksi penanaman mangrove serentak dalam rangka Hari Mangrove Sedunia 2026 bertema "Menjaga Mangrove, Mengamankan Generasi Mendatang", dipusatkan di Bali pada 26 Juli 2026. (Konten contoh — siaran pers prototipe)', 'Pendaftaran rencana kegiatan dilakukan melalui formulir daring hingga 15 Juli 2026. Setiap daerah didorong menyelenggarakan penanaman di wilayah pesisirnya masing-masing.', 'Aksi ini merupakan bagian dari percepatan rehabilitasi ekosistem mangrove nasional serta kontribusi pada target penanaman dua miliar pohon.']
    },
    {
      slug: 'sp-kolaborasi-daerah', module: 'siaran-pers', ph: 'ph--sky',
      icon: 'megaphone', title: 'Siaran Pers: KLH Perkuat Kolaborasi Pemantauan Kualitas Lingkungan Bersama Pemerintah Daerah',
      date: '2026-07-01', views: 1875, author: 'Biro Humas',
      excerpt: 'KLH dan pemerintah daerah memperluas jangkauan pemantauan kualitas udara dan air secara kontinu. (Konten contoh)',
      body: ['Kementerian Lingkungan Hidup memperkuat kolaborasi dengan pemerintah daerah untuk memperluas jangkauan pemantauan kualitas udara (ISPU) dan kualitas air (Onlimo) secara kontinu. (Konten contoh — siaran pers prototipe)', 'Data pemantauan terintegrasi menjadi dasar Indeks Kualitas Lingkungan Hidup yang dapat diakses publik melalui portal resmi.', 'Pemerintah daerah diminta memastikan keandalan stasiun pemantau serta menindaklanjuti indikasi penurunan kualitas lingkungan di wilayahnya.']
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

  /* ---------- Struktur Organisasi (susunan sesuai review Mapping Hirarki
     Menu, tab Web Redesign 2.3; pimpinan: nama nyata, lainnya contoh) ---------- */
  KLH.pejabat = [
    { id: 'menteri', nama: 'Moh Jumhur Hidayat', jabatan: 'Menteri Lingkungan Hidup / Kepala BPLH', level: 1, icon: 'user',
      foto: 'assets/img/pejabat/pejabat1.jpg', fotoPos: 'center top',
      profil: 'Memimpin perumusan dan pelaksanaan kebijakan lingkungan hidup nasional serta pengendalian pembangunan berkelanjutan.',
      bio: [
        '<h3>Biografi</h3>',
        '<p>Moh Jumhur Hidayat resmi dilantik sebagai Menteri Lingkungan Hidup/Kepala Badan Pengendalian Lingkungan Hidup (KLH/BPLH) oleh Presiden Prabowo Subianto pada Senin, 27 April 2026. Pelantikan tersebut sebagai bagian dari komitmen pemerintah dalam memperkuat tata kelola lingkungan hidup nasional yang berkelanjutan dan berkeadilan.</p>',
        '<p>Menteri Jumhur yang lahir pada 18 Februari 1968 di Bandung, Jawa Barat, selama ini dikenal sebagai sosok aktivis pergerakan dan pemberdayaan rakyat, hingga memperjuangkan nasib para buruh dan pekerja. Pada tahun 2007 – 2014, beliau menjabat sebagai Kepala Badan Nasional Penempatan dan Perlindungan Tenaga Kerja Indonesia (BNP2TKI), sementara itu di tahun 2022 – 2027 aktif sebagai Ketua Umum Konfederasi Serikat Pekerja Seluruh Indonesia (KSPSI).</p>',
        '<p>Sebagai sosok yang memiliki rekam jejak panjang di bidang kebijakan publik dan tata kelola pemerintahan, Moh Jumhur Hidayat dikenal memiliki kapasitas kepemimpinan yang kuat serta pemahaman strategis terhadap isu-isu pembangunan nasional, termasuk tantangan lingkungan hidup yang semakin kompleks.</p>',
        '<p>Pada tahun 1996, beliau meraih gelar sarjana dari Universitas Nasional, dan di tahun 2013 meraih gelar Magister Sains dari Universitas Indonesia. Latar belakang pendidikan dan pengalamannya di berbagai posisi strategis pemerintahan menjadi modal penting dalam mendorong transformasi kebijakan lingkungan yang adaptif, responsif, dan berbasis data.</p>',
        '<p>Dalam mengemban amanah sebagai Menteri Lingkungan Hidup/Kepala BPLH, Moh Jumhur Hidayat menegaskan komitmennya untuk memperkuat sinergi antara pemerintah pusat dan daerah, dunia usaha, akademisi, serta masyarakat dalam upaya perlindungan dan pengelolaan lingkungan hidup. Fokus utama kepemimpinannya mencakup pengendalian pencemaran dan kerusakan lingkungan, pengelolaan sampah terpadu, penguatan ekonomi sirkular, serta percepatan aksi mitigasi dan adaptasi perubahan iklim.</p>',
        '<p>Selain itu, beliau juga menekankan pentingnya penguatan komunikasi publik dan transparansi informasi lingkungan sebagai bagian dari upaya membangun kepercayaan masyarakat. KLH/BPLH di bawah kepemimpinannya diharapkan mampu menjadi institusi yang tidak hanya responsif terhadap isu lingkungan, tetapi juga proaktif dalam mengedukasi dan menggerakkan partisipasi publik.</p>',
        '<p>Dengan kepemimpinan Moh Jumhur Hidayat, KLH/BPLH optimistis dapat memperkuat peran strategis dalam menjaga kualitas lingkungan hidup Indonesia, sekaligus mendukung agenda pembangunan nasional menuju Indonesia yang hijau, tangguh, dan berkelanjutan.</p>',
        '<h3>Pendidikan</h3>',
        '<ul><li>Sarjana — Universitas Nasional (1996).</li>',
        '<li>Magister Sains — Universitas Indonesia (2013).</li></ul>',
        '<h3>Riwayat karier</h3>',
        '<ul style="display:grid;gap:var(--s2);color:var(--ink-700)">',
        '<li>2026 – kini · Menteri Lingkungan Hidup / Kepala BPLH.</li>',
        '<li>2022 – 2027 · Ketua Umum Konfederasi Serikat Pekerja Seluruh Indonesia (KSPSI).</li>',
        '<li>2007 – 2014 · Kepala Badan Nasional Penempatan dan Perlindungan Tenaga Kerja Indonesia (BNP2TKI).</li></ul>',
        '<p style="font-size:var(--t-xs);color:var(--ink-500)">Sumber: <a href="https://kemenlh.go.id/contents/8/Profil-Menteri" target="_blank" rel="noopener noreferrer" data-ext="kemenlh.go.id">kemenlh.go.id — Profil Menteri</a></p>'
      ].join('') },
    { id: 'wamen', nama: 'Diaz Faisal Malik Hendropriyono', jabatan: 'Wakil Menteri Lingkungan Hidup / Wakil Kepala BPLH', level: 1, icon: 'user',
      foto: 'assets/img/pejabat/pejabat2.png', fotoPos: '55% top', fotoCss: 'transform:scale(2.1);transform-origin:54% 8%',
      profil: 'Membantu Menteri dalam koordinasi kebijakan strategis dan pengawasan pelaksanaan program prioritas.',
      bio: [
        '<h3>Biografi</h3>',
        '<p>Diaz Faisal Malik Hendropriyono, B.Sc., M.P.A., M.B.A., M.A., Ph.D dilantik sebagai Wakil Menteri Lingkungan Hidup/Wakil Kepala Badan Pengendalian Lingkungan Hidup pada tanggal 21 Oktober 2024. Sebelum penugasan ini, beliau merupakan anggota Staf Khusus Kepresidenan pada masa pemerintahan Presiden Ke-7 RI, Joko Widodo (2019–2024).</p>',
        '<p>Perjalanan karirnya dimulai pada tahun 1999 di PT. KIA Otomotif Indonesia. Beliau juga pernah bekerja sebagai analis di perusahaan konsultan publik di Amerika Serikat. Setelah kembali ke Indonesia, beliau menjadi Direktur di PT. Ulam Sari Samudra. Selanjutnya pada tahun 2015 beliau menjadi Komisaris PT. Telkomsel.</p>',
        '<p>Wamen Diaz, sapaan akrabnya, lahir pada tanggal 25 September 1978, mengenyam pendidikan di Norwich Military University, Amerika Serikat. Kemudian beliau melanjutkan studi di Hawaii Pacific University dengan mengambil dua program yaitu Master of Business Administration dan Master of Arts in Global Leadership.</p>',
        '<p>Ruang lingkup bidang tugas Wakil Menteri/Wakil Kepala meliputi: membantu Menteri/Kepala dalam perumusan dan/atau pelaksanaan kebijakan Kementerian LH/BPLH; dan membantu Menteri/Kepala dalam mengoordinasikan pencapaian kebijakan strategis lintas unit organisasi jabatan pimpinan tinggi madya di lingkungan Kementerian LH/BPLH.</p>',
        '<h3>Pendidikan</h3>',
        '<ul><li>Norwich Military University, Amerika Serikat.</li>',
        '<li>Hawaii Pacific University — Master of Business Administration dan Master of Arts in Global Leadership.</li></ul>',
        '<h3>Riwayat karier</h3>',
        '<ul style="display:grid;gap:var(--s2);color:var(--ink-700)">',
        '<li>2024 – kini · Wakil Menteri Lingkungan Hidup / Wakil Kepala BPLH.</li>',
        '<li>2019 – 2024 · Staf Khusus Kepresidenan pada pemerintahan Presiden Joko Widodo.</li>',
        '<li>2015 · Komisaris PT Telkomsel.</li>',
        '<li>Direktur PT Ulam Sari Samudra; analis pada perusahaan konsultan publik di Amerika Serikat; PT KIA Otomotif Indonesia (1999).</li></ul>',
        '<p style="font-size:var(--t-xs);color:var(--ink-500)">Sumber: <a href="https://kemenlh.go.id/contents/9/Profil-Wakil-Menteri" target="_blank" rel="noopener noreferrer" data-ext="kemenlh.go.id">kemenlh.go.id — Profil Wakil Menteri</a></p>'
      ].join('') },
    { id: 'sekut', nama: 'Ir. Bambang Nugraha, M.M.', jabatan: 'Sekretariat Kementerian / Sekretariat Utama', level: 2, icon: 'institution',
      profil: 'Mengoordinasikan dukungan administrasi, perencanaan, keuangan, dan kehumasan seluruh unit kerja.' },
    { id: 'dep-tata', nama: 'Dr. Sinta Maharani, S.Si.', jabatan: 'Deputi Bidang Tata Lingkungan dan Sumber Daya Alam Berkelanjutan', level: 2, icon: 'leaf',
      profil: 'Mengelola instrumen tata lingkungan, KLHS, dan pemanfaatan sumber daya alam berkelanjutan.' },
    { id: 'dep-pencemaran', nama: 'Dr. Ratih Kusumastuti, S.T., M.Env.', jabatan: 'Deputi Bidang Pengendalian Pencemaran dan Kerusakan Lingkungan', level: 2, icon: 'drop',
      profil: 'Menangani pengendalian pencemaran air, udara, dan kerusakan lingkungan termasuk pengawasan ketaatan usaha.' },
    { id: 'dep-sampah', nama: 'Ir. Melati Anggraeni, M.Sc.', jabatan: 'Deputi Bidang Pengelolaan Sampah, Limbah, dan Bahan Berbahaya dan Beracun', level: 2, icon: 'recycle',
      profil: 'Memimpin transformasi pengelolaan sampah, limbah, dan B3 nasional serta penerapan ekonomi sirkular.' },
    { id: 'dep-iklim', nama: 'Prof. Dr. Agus Hardiansyah', jabatan: 'Deputi Bidang Pengendalian Perubahan Iklim dan Tata Kelola Nilai Ekonomi Karbon', level: 2, icon: 'sun',
      profil: 'Mengelola kebijakan mitigasi-adaptasi iklim serta tata kelola nilai ekonomi karbon.' },
    { id: 'dep-gakkum', nama: 'Ir. Yoga Pratama, M.T.', jabatan: 'Deputi Bidang Penegakan Hukum Lingkungan Hidup', level: 2, icon: 'scale',
      profil: 'Melaksanakan pengawasan, penerapan sanksi administratif, dan penegakan hukum lingkungan hidup.' },
    { id: 'ittama', nama: 'Drs. Hendro Prakoso, Ak., CA.', jabatan: 'Inspektorat Utama (Ittama)', level: 2, icon: 'shield',
      profil: 'Melaksanakan pengawasan internal, pembangunan Zona Integritas, dan pengelolaan LHKPN.' }
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

  /* ---------- Util link program: halaman khusus bila ada ---------- */
  KLH.progHref = function (p) {
    return p.page || 'pages/program/detail.html?p=' + p.slug;
  };

  /* ---------- Util format tanggal ---------- */
  KLH.fmtDate = function (iso) {
    var b = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    var p = iso.split('-');
    return parseInt(p[2], 10) + ' ' + b[parseInt(p[1], 10) - 1] + ' ' + p[0];
  };
  KLH.fmtViews = function (n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace('.', ',') + ' rb' : String(n);
  };
  /* Konten contoh — angka suka & komentar dummy menunggu CMS;
     bisa dioverride per artikel via field `likes` / `comments`. */
  KLH.likesOf = function (a) { return a.likes != null ? a.likes : Math.round(a.views * 0.032); };
  KLH.commentsOf = function (a) { return a.comments != null ? a.comments : 3; };
  KLH.qs = function (key) {
    return new URLSearchParams(location.search).get(key);
  };
})();
