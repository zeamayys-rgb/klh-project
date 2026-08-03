/* ============================================================
   KLH.menu — Arsitektur Informasi (sumber: F2_UserFlow-IA.md §3)
   Satu sumber kebenaran untuk navbar, mega menu, drawer & footer.
   Semua href relatif terhadap ROOT situs; komponen menambahkan
   window.KLH_ROOT sesuai kedalaman halaman.
   `ext: true` = membuka sistem eksternal (ikon ↗ + teks bantu).
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  KLH.menu = {

    nav: [
      { id: 'beranda', label: 'Beranda', href: 'index.html' },

      {
        id: 'profil', label: 'Profil',
        panel: {
          cols: 2,
          groups: [
            {
              col: 1, title: 'Kenali KLH/BPLH',
              items: [
                { label: 'Tentang KLH/BPLH', desc: 'Visi, misi & nilai', icon: 'leaf', href: 'pages/profil/tentang.html' },
                { label: 'Tugas & Fungsi', desc: 'Mandat kelembagaan', icon: 'document', href: 'pages/profil/tugas-fungsi.html' }
              ]
            },
            {
              col: 2, title: 'Organisasi',
              items: [
                { label: 'Struktur Organisasi', desc: 'Bagan interaktif pimpinan', icon: 'people', href: 'pages/profil/struktur-organisasi.html' },
                { label: 'Tata Kelola & Integritas', desc: 'Zona Integritas · LHKPN', icon: 'shield', href: 'pages/profil/tata-kelola.html' }
              ]
            }
          ],
          promo: {
            eyebrow: 'Transparansi',
            title: 'Bagan organisasi kini interaktif',
            desc: 'Telusuri pimpinan hingga Eselon 2 beserta profil & LHKPN.',
            cta: 'Lihat Struktur', href: 'pages/profil/struktur-organisasi.html'
          }
        }
      },

      {
        id: 'program', label: 'Program',
        panel: {
          cols: 2,
          groups: [
            {
              col: 1, title: 'Penghargaan & Apresiasi',
              items: [
                { label: 'Kalpataru', desc: 'Perintis & pengabdi lingkungan', icon: 'award', href: 'pages/program/kalpataru.html' },
                { label: 'Adipura', desc: 'Kabupaten/kota bersih', icon: 'award', href: 'pages/program/detail.html?p=adipura' },
                { label: 'Adiwiyata', desc: 'Sekolah peduli lingkungan', icon: 'book', href: 'pages/program/adiwiyata.html' },
                { label: 'Nirwasita Tantra', desc: 'Green leadership daerah', icon: 'flag', href: 'pages/program/detail.html?p=nirwasita-tantra' }
              ]
            },
            {
              col: 2, title: 'Kinerja & Partisipasi',
              items: [
                { label: 'PROPER', desc: 'Peringkat kinerja perusahaan', icon: 'factory', href: 'pages/program/proper.html' },
                { label: 'Program Kampung Iklim', desc: 'Aksi iklim berbasis komunitas', icon: 'sprout', href: 'pages/program/detail.html?p=proklim' },
                { label: 'Ekonomi Sirkular', desc: 'Daur ulang & guna ulang', icon: 'recycle', href: 'pages/program/detail.html?p=ekonomi-sirkular' }
              ]
            }
          ],
          promo: {
            eyebrow: 'Partisipatif',
            title: 'Setiap program punya jalur "Cara Ikut Serta"',
            desc: 'Warga, sekolah, komunitas & dunia usaha dapat terlibat langsung.',
            cta: 'Semua Program', href: 'pages/program/index.html'
          }
        }
      },

      {
        id: 'layanan', label: 'Layanan',
        panel: {
          cols: 3,
          groups: [
            {
              col: 1, title: 'Perizinan & Pengadaan',
              more: 'pages/layanan/perizinan-pengadaan.html',
              items: [
                { label: 'PTSP Lingkungan Hidup', icon: 'institution', href: 'pages/layanan/perizinan-pengadaan.html' },
                { label: 'OSS — Perizinan Berusaha', icon: 'external', href: 'https://oss.go.id', ext: true },
                { label: 'LPSE / SiRUP Pengadaan', icon: 'external', href: 'https://spse.inaproc.id/kemenlh', ext: true }
              ]
            },
            {
              col: 1, title: 'Regulasi & Pembelajaran',
              more: 'pages/layanan/regulasi-pembelajaran.html',
              items: [
                { label: 'JDIH — Produk Hukum', icon: 'scale', href: 'pages/layanan/regulasi-pembelajaran.html' },
                { label: 'E-Learning Lingkungan', icon: 'book', href: 'pages/layanan/regulasi-pembelajaran.html' }
              ]
            },
            {
              col: 2, title: 'Pengaduan & Aspirasi',
              more: 'pages/layanan/pengaduan-aspirasi.html',
              items: [
                { label: 'Lapor Pencemaran / Kerusakan', icon: 'megaphone', href: 'pages/layanan/pengaduan-aspirasi.html' },
                { label: 'SP4N-LAPOR!', icon: 'external', href: 'https://www.lapor.go.id', ext: true },
                { label: 'Waste Crisis Center (WCC)', icon: 'phone', href: 'pages/layanan/pengaduan-aspirasi.html' }
              ]
            },
            {
              col: 3, title: 'Data, Lab & Pengujian',
              more: 'pages/layanan/data-lab-pengujian.html',
              items: [
                { label: 'Laboratorium Pusarpedal', icon: 'flask', href: 'pages/layanan/data-lab-pengujian.html' },
                { label: 'SRN PPI — Registri Iklim', icon: 'external', href: 'https://srn.kemenlh.go.id', ext: true },
                { label: 'Bursa Karbon (IDXCarbon)', icon: 'external', href: 'https://idxcarbon.co.id', ext: true }
              ]
            }
          ],
          promo: {
            eyebrow: 'Layanan populer',
            title: 'Lapor Pencemaran Lingkungan',
            desc: 'Sampaikan aduan pencemaran atau kerusakan — dipantau hingga tuntas.',
            cta: 'Lapor Sekarang', href: 'pages/layanan/pengaduan-aspirasi.html'
          }
        }
      },

      {
        id: 'informasi', label: 'Informasi & Publikasi',
        panel: {
          cols: 3,
          groups: [
            {
              col: 1, title: 'Kabar Terkini',
              items: [
                { label: 'Berita', icon: 'newspaper', href: 'pages/informasi/indeks.html?m=berita' },
                { label: 'Siaran Pers', icon: 'megaphone', href: 'pages/informasi/indeks.html?m=siaran-pers' },
                { label: 'Pengumuman', icon: 'bell', href: 'pages/informasi/indeks.html?m=pengumuman' }
              ]
            },
            {
              col: 2, title: 'Wawasan & Media',
              items: [
                { label: 'Artikel', icon: 'document', href: 'pages/informasi/indeks.html?m=artikel' },
                { label: 'Video & Podcast', icon: 'play', href: 'pages/informasi/galeri.html' },
                { label: 'Agenda & Kalender', icon: 'calendar', href: 'pages/informasi/agenda.html' }
              ]
            },
            {
              col: 3, title: 'Dokumen Resmi',
              items: [
                { label: 'Publikasi & Buku', icon: 'book', href: 'pages/informasi/indeks.html?m=publikasi' },
                { label: 'Surat Keputusan', icon: 'document', href: 'pages/informasi/indeks.html?m=sk' },
                { label: 'Peraturan Menteri', icon: 'scale', href: 'pages/informasi/indeks.html?m=permen' }
              ]
            }
          ],
          promo: {
            eyebrow: 'Jangan terlewat',
            title: 'Kalender Hari Lingkungan 2026',
            desc: 'Hari besar lingkungan, agenda kementerian & hari libur nasional.',
            cta: 'Buka Agenda', href: 'pages/informasi/agenda.html'
          }
        }
      },

      { id: 'ppid', label: 'Informasi Publik (PPID)', href: 'pages/ppid.html' }
    ],

    /* ---- Footer (WF-01 §3.6: tautan eksisting + peta situs) ---- */
    footer: {
      tagline: 'Wujudkan lingkungan hidup dengan aksi nyata — setiap tindakan kecil berdampak besar bagi bumi kita.',
      contact: [
        { icon: 'pin', text: 'Menara Plaza Kuningan, Jl. H.R. Rasuna Said Kav. C11-14, Kuningan, Jakarta Selatan' },
        { icon: 'phone', text: '(021) 8580101 · (021) 8580103' },
        { icon: 'envelope', text: 'layanan@kemenlh.go.id' }
      ],
      cols: [
        {
          title: 'Peta Situs',
          links: [
            { label: 'Profil KLH/BPLH', href: 'pages/profil/tentang.html' },
            { label: 'Program Lingkungan', href: 'pages/program/index.html' },
            { label: 'Layanan Publik', href: 'pages/layanan/index.html' },
            { label: 'Informasi & Publikasi', href: 'pages/informasi/indeks.html?m=berita' },
            { label: 'Informasi Publik (PPID)', href: 'pages/ppid.html' },
            { label: 'Agenda & Kalender', href: 'pages/informasi/agenda.html' }
          ]
        },
        {
          title: 'Layanan Cepat',
          links: [
            { label: 'Lapor Pencemaran', href: 'pages/layanan/pengaduan-aspirasi.html' },
            { label: 'Ajukan Informasi (PPID)', href: 'pages/ppid.html' },
            { label: 'Perizinan PTSP', href: 'pages/layanan/perizinan-pengadaan.html' },
            { label: 'Cek Kualitas Udara', href: 'pages/layanan/data-lab-pengujian.html' },
            { label: 'Pencarian Situs', href: 'pages/pencarian.html' }
          ]
        },
        {
          title: 'Tautan Sistem',
          links: [
            { label: 'SP4N-LAPOR!', href: 'https://www.lapor.go.id', ext: true },
            { label: 'OSS Berusaha', href: 'https://oss.go.id', ext: true },
            { label: 'LPSE', href: 'https://spse.inaproc.id/kemenlh', ext: true },
            { label: 'SiRUP LKPP', href: 'https://sirup.lkpp.go.id', ext: true },
            { label: 'e-LHKPN KPK', href: 'https://elhkpn.kpk.go.id', ext: true },
            { label: 'JDIH', href: 'pages/layanan/regulasi-pembelajaran.html' },
            { label: 'SRN PPI', href: 'https://srn.kemenlh.go.id', ext: true }
          ]
        }
      ],
      legal: [
        { label: 'Kebijakan Privasi', href: 'pages/404.html' },
        { label: 'Aksesibilitas', href: 'pages/404.html' },
        { label: 'Syarat Penggunaan', href: 'pages/404.html' }
      ]
    }
  };
})();
