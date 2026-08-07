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
              col: 1,
              items: [
                { label: 'Kalpataru', desc: 'Perintis & pengabdi lingkungan', icon: 'award', href: 'pages/program/kalpataru.html' },
                { label: 'Adipura', desc: 'Kabupaten/kota bersih', icon: 'award', href: 'pages/program/adipura.html' },
                { label: 'Adiwiyata', desc: 'Sekolah peduli lingkungan', icon: 'book', href: 'pages/program/adiwiyata.html' },
                { label: 'Nirwasita Tantra', desc: 'Green leadership daerah', icon: 'flag', href: 'pages/program/nirwasita-tantra.html' }
              ]
            },
            {
              col: 2,
              items: [
                { label: 'PROPER', desc: 'Peringkat kinerja perusahaan', icon: 'factory', href: 'pages/program/proper.html' },
                { label: 'Program Kampung Iklim', desc: 'Aksi iklim berbasis komunitas', icon: 'sprout', href: 'pages/program/proklim.html' },
                { label: 'Ekonomi Sirkular', desc: 'Daur ulang & guna ulang', icon: 'recycle', href: 'pages/program/ekonomi-sirkular.html' },
                { label: 'SIPSN — Sampah Nasional', desc: 'Data pengelolaan sampah nasional', icon: 'recycle', href: 'https://sampahnasional.kemenlh.go.id/', ext: true }
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
                { label: 'Perizinan Lingkungan Hidup (PTSP)', icon: 'institution', href: 'pages/layanan/ptsp.html' },
                { label: 'OSS — Perizinan Berusaha', icon: 'external', href: 'https://oss.go.id', ext: true },
                { label: 'LPSE / SiRUP Pengadaan', icon: 'external', href: 'https://spse.inaproc.id/kemenlh', ext: true }
              ]
            },
            {
              col: 1, title: 'Regulasi & Pembelajaran',
              more: 'pages/layanan/regulasi-pembelajaran.html',
              items: [
                { label: 'Peraturan Lingkungan Hidup (JDIH)', icon: 'external', href: 'https://jdih.kemenlh.go.id', ext: true },
                { label: 'E-Learning Lingkungan', icon: 'external', href: 'https://p2sdm.kemenlh.go.id/', ext: true }
              ]
            },
            {
              col: 2, title: 'Pengaduan & Aspirasi',
              more: 'pages/layanan/pengaduan-aspirasi.html',
              items: [
                { label: 'SP4N-LAPOR!', icon: 'external', href: 'https://kemenlh.lapor.go.id/', ext: true },
                { label: 'Pengaduan LH (e-Gakkum)', icon: 'external', href: 'https://egakkum.kemenlh.go.id/', ext: true },
                { label: 'Whistleblowing System', icon: 'external', href: 'https://wbs.kemenlh.go.id/', ext: true }
              ]
            },
            {
              col: 3, title: 'Data, Lab & Pengujian',
              more: 'pages/layanan/data-lab-pengujian.html',
              items: [
                { label: 'ISPU — Kualitas Udara', icon: 'external', href: 'https://ispu.kemenlh.go.id/webv5/#/', ext: true },
                { label: 'Onlimo — Kualitas Air', icon: 'external', href: 'https://onlimo.kemenlh.go.id/app/', ext: true },
                { label: 'Bursa Karbon (IDXCarbon)', icon: 'external', href: 'https://idxcarbon.co.id', ext: true }
              ]
            }
          ],
          promo: {
            eyebrow: 'Layanan publik',
            title: 'Temukan layanan sesuai kebutuhan Anda',
            desc: 'Empat kelompok layanan — perizinan, pengaduan, data & pengujian, regulasi & pembelajaran.',
            cta: 'Semua Layanan', href: 'pages/layanan/index.html'
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
      /* Media sosial resmi KLH — tautan contoh, verifikasi handle sebelum produksi */
      socials: [
        { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/kementerianlh' },
        { icon: 'x', label: 'X (Twitter)', href: 'https://x.com/KementerianLH' },
        { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/kementerianlh' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@kementerianlingkunganhidup' },
        { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@kementerianlh' }
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
            { label: 'SP4N-LAPOR!', href: 'https://kemenlh.lapor.go.id/', ext: true },
            { label: 'OSS Berusaha', href: 'https://oss.go.id', ext: true },
            { label: 'LPSE', href: 'https://spse.inaproc.id/kemenlh', ext: true },
            { label: 'SiRUP LKPP', href: 'https://sirup.lkpp.go.id', ext: true },
            { label: 'e-LHKPN KPK', href: 'https://elhkpn.kpk.go.id', ext: true },
            { label: 'JDIH', href: 'https://jdih.kemenlh.go.id', ext: true }
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
