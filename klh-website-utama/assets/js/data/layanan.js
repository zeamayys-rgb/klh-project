/* ============================================================
   KLH.layanan — 4 kelompok layanan berbasis niat pengguna
   (F2_UserFlow-IA.md §3.2). Dipakai indeks + 4 halaman kelompok
   melalui renderer bersama layanan-kelompok.js.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  KLH.layanan = {
    'perizinan-pengadaan': {
      title: 'Perizinan & Pengadaan',
      icon: 'institution', tone: 'green',
      lead: 'Untuk pelaku usaha dan mitra: perizinan lingkungan satu pintu serta informasi pengadaan barang/jasa pemerintah.',
      niat: 'Saya ingin mengurus izin atau mengikuti pengadaan',
      services: [
        { name: 'PTSP Lingkungan Hidup', icon: 'institution', desc: 'Pelayanan Terpadu Satu Pintu untuk persetujuan lingkungan, teknis, dan layanan perizinan kementerian.', cta: 'Lihat persyaratan' },
        { name: 'OSS — Perizinan Berusaha', icon: 'external', desc: 'Pengurusan perizinan berusaha berbasis risiko dilakukan melalui sistem OSS nasional.', href: 'https://oss.go.id', ext: true },
        { name: 'LPSE KLH/BPLH', icon: 'external', desc: 'Layanan Pengadaan Secara Elektronik: paket tender dan non-tender kementerian.', href: 'https://spse.inaproc.id/kemenlh', ext: true },
        { name: 'SiRUP — Rencana Umum Pengadaan', icon: 'external', desc: 'Telusuri rencana pengadaan tahunan KLH/BPLH pada portal SiRUP LKPP.', href: 'https://sirup.lkpp.go.id', ext: true }
      ],
      note: { type: 'info', icon: 'clock', title: 'Standar layanan PTSP', text: 'Kelengkapan berkas diverifikasi maksimal 3 hari kerja. Status permohonan dapat dipantau melalui akun pemohon.' }
    },

    'pengaduan-aspirasi': {
      title: 'Pengaduan & Aspirasi',
      icon: 'megaphone', tone: 'earth',
      lead: 'Melihat pencemaran atau kerusakan lingkungan? Sampaikan — setiap laporan diberi nomor tiket dan dipantau hingga tuntas.',
      niat: 'Saya ingin melaporkan masalah lingkungan',
      services: [
        { name: 'Pengaduan Lingkungan KLH', icon: 'megaphone', desc: 'Formulir pengaduan resmi kementerian untuk dugaan pencemaran dan/atau kerusakan lingkungan. Dapat dilampiri foto/video.', cta: 'Isi formulir pengaduan' },
        { name: 'SP4N-LAPOR!', icon: 'external', desc: 'Kanal pengaduan nasional lintas instansi. Laporan Anda otomatis diteruskan ke unit yang berwenang.', href: 'https://www.lapor.go.id', ext: true },
        { name: 'Call Center (WCC)', icon: 'phone', desc: 'Konsultasi dan pengaduan melalui pusat kontak 1500-XXX, Senin–Jumat 08.00–16.00 WIB.', cta: 'Lihat jam layanan' },
        { name: 'Whistleblowing System', icon: 'shield', desc: 'Laporkan dugaan pelanggaran integritas pegawai KLH/BPLH. Kerahasiaan pelapor dijamin.', cta: 'Lapor secara rahasia' }
      ],
      steps: {
        title: 'Bagaimana laporan Anda diproses?',
        items: ['Laporan diterima & diberi nomor tiket (notifikasi ke email/HP Anda)', 'Verifikasi & telaah oleh tim pengaduan (maks. 5 hari kerja)', 'Tindak lanjut: pengawasan lapangan / koordinasi daerah', 'Hasil disampaikan kepada pelapor & laporan ditutup']
      },
      note: { type: 'warning', icon: 'warning', title: 'Keadaan darurat lingkungan?', text: 'Untuk kejadian yang mengancam keselamatan (kebocoran B3, kebakaran lahan aktif), hubungi Call Center dan aparat setempat terlebih dahulu.' }
    },

    'data-lab-pengujian': {
      title: 'Data, Lab & Pengujian',
      icon: 'flask', tone: 'sky',
      lead: 'Akses data kualitas lingkungan, layanan laboratorium terakreditasi, serta registri aksi iklim nasional.',
      niat: 'Saya butuh data atau pengujian lingkungan',
      services: [
        { name: 'Pemantauan Kualitas Udara & Air', icon: 'drop', desc: 'Data indeks kualitas udara (ISPU) 34 kota dan kualitas air sungai prioritas, diperbarui berkala.', cta: 'Lihat data terkini' },
        { name: 'Laboratorium Pusarpedal', icon: 'flask', desc: 'Layanan pengujian parameter lingkungan (air, udara, tanah, limbah) terakreditasi KAN.', cta: 'Tarif & prosedur uji' },
        { name: 'SRN PPI — Registri Iklim', icon: 'external', desc: 'Sistem Registri Nasional Pengendalian Perubahan Iklim: daftarkan aksi mitigasi/adaptasi Anda.', href: 'https://srn.kemenlh.go.id', ext: true },
        { name: 'Bursa Karbon (IDXCarbon)', icon: 'external', desc: 'Perdagangan unit karbon Indonesia bagi pelaku usaha peserta nilai ekonomi karbon.', href: 'https://idxcarbon.co.id', ext: true }
      ],
      note: { type: 'info', icon: 'chartline', title: 'Data terbuka', text: 'Sebagian besar dataset tersedia dalam format terbuka (CSV/JSON) dan dapat dimintakan melalui PPID bila belum dipublikasikan.' }
    },

    'regulasi-pembelajaran': {
      title: 'Regulasi & Pembelajaran',
      icon: 'scale', tone: 'green',
      lead: 'Temukan produk hukum lingkungan hidup dan tingkatkan kapasitas melalui pembelajaran daring.',
      niat: 'Saya mencari peraturan atau ingin belajar',
      services: [
        { name: 'JDIH — Dokumentasi Hukum', icon: 'scale', desc: 'Jaringan Dokumentasi dan Informasi Hukum: UU, PP, Peraturan Menteri, dan SK dalam satu pencarian.', cta: 'Telusuri produk hukum' },
        { name: 'E-Learning Lingkungan', icon: 'book', desc: 'Kelas daring gratis: pengelolaan sampah, PROPER, kader lingkungan, dan aksi iklim komunitas.', cta: 'Lihat katalog kelas' },
        { name: 'e-LHKPN', icon: 'external', desc: 'Pelaporan Harta Kekayaan Penyelenggara Negara bagi pejabat wajib lapor (sistem KPK).', href: 'https://elhkpn.kpk.go.id', ext: true },
        { name: 'Peraturan Menteri Terbaru', icon: 'document', desc: 'Daftar Peraturan Menteri LH terbit terbaru beserta ringkasan pokok pengaturannya.', href: 'pages/informasi/indeks.html?m=permen', internal: true }
      ],
      note: { type: 'info', icon: 'book', title: 'Butuh tafsir resmi?', text: 'Permohonan penjelasan regulasi dapat diajukan melalui layanan konsultasi PPID atau Call Center.' }
    }
  };
})();
