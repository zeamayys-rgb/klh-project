/* ============================================================
   KLH.menu — navigasi Modul 02 · PPID Web (sub-brand PPID KLH/BPLH)
   Varian ringkas dari Modul 01: tautan datar tanpa mega menu.
   Semua href relatif terhadap ROOT modul; komponen menambahkan
   window.KLH_ROOT sesuai kedalaman halaman.
   ============================================================ */
(function () {
  'use strict';
  window.KLH = window.KLH || {};

  KLH.menu = {

    nav: [
      { id: 'beranda',  label: 'Beranda',           href: 'index.html' },
      { id: 'dip',      label: 'Daftar Informasi',  href: 'dip.html' },
      { id: 'profil',   label: 'Profil PPID',       href: 'profil-ppid.html' },
      { id: 'regulasi', label: 'Regulasi',          href: 'regulasi.html' },
      { id: 'faq',      label: 'FAQ',               href: 'faq.html' }
    ],

    footer: {
      tagline: 'Pejabat Pengelola Informasi dan Dokumentasi KLH/BPLH — melayani hak Anda atas informasi publik sesuai UU No. 14 Tahun 2008.',
      contact: [
        { icon: 'pin', text: 'Menara Plaza Kuningan, Jl. H.R. Rasuna Said Kav. C11-14, Kuningan, Jakarta Selatan' },
        { icon: 'phone', text: '(021) 8580101 · Senin–Jumat 08.00–15.30 WIB' },
        { icon: 'envelope', text: 'ppid@kemenlh.go.id' }
      ],
      cols: [
        {
          title: 'Layanan Pemohon',
          links: [
            { label: 'Ajukan Permohonan', href: 'permohonan.html' },
            { label: 'Lacak Permohonan', href: 'lacak.html' },
            { label: 'Riwayat & Notifikasi', href: 'riwayat.html' },
            { label: 'Pengajuan Keberatan', href: 'keberatan.html' },
            { label: 'Permohonan Konsultasi', href: 'konsultasi.html' }
          ]
        },
        {
          title: 'Informasi Publik',
          links: [
            { label: 'Daftar Informasi Publik', href: 'dip.html' },
            { label: 'Informasi Dikecualikan', href: 'dik.html' },
            { label: 'Regulasi', href: 'regulasi.html' },
            { label: 'Laporan Kinerja', href: 'laporan-kinerja.html' },
            { label: 'FAQ', href: 'faq.html' }
          ]
        },
        {
          title: 'Tautan Terkait',
          links: [
            { label: 'Situs Utama KLH/BPLH', href: '../klh-website-utama/index.html' },
            { label: 'Komisi Informasi Pusat', href: 'https://komisiinformasi.go.id', ext: true },
            { label: 'SP4N-LAPOR!', href: 'https://www.lapor.go.id', ext: true },
            { label: 'JDIH Nasional', href: 'https://jdihn.go.id', ext: true }
          ]
        }
      ],
      legal: [
        { label: 'Dasar Hukum Layanan', href: 'regulasi.html' },
        { label: 'Bantuan & FAQ', href: 'faq.html' }
      ]
    }
  };
})();
