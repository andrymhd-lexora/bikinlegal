import { PricingPackage, ClientReview, BusinessIndustry } from './types';

export interface ChecklistItem {
  name: string;
  included: boolean;
}

export interface DetailedPackage {
  id: string;
  name: string;
  subtitle: string;
  priceNum: number;
  priceFormatted: string;
  processTime: string;
  isPopular?: boolean;
  isPro?: boolean;
  features: ChecklistItem[];
  bonuses: ChecklistItem[];
}

export interface LegalityCategory {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  packages: DetailedPackage[];
}

// Global legacy fallback for backward compatibility
export const PRACING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'STANDAR',
    badge: 'Proses Cepat',
    subtitle: 'Layanan administrasi dasar pendirian legalitas instan & tervalidasi.',
    basePrice: 2900000,
    features: [
      'Pengecekan & Pemesanan Nama Resmi',
      'Pengesahan SK Kemenkumham Negara',
      'Akta Pendirian Hukum Terdaftar',
      'Nomor Induk Berusaha (NIB) Dasar',
      'NPWP Badan Usaha Akurat & Valid'
    ],
    recommendedFor: 'UMKM Mandiri, Startup Digital, & Mitra Kemitraan',
    colorScheme: 'emerald'
  },
  {
    id: 'business',
    name: 'PRO BUNDLE',
    badge: 'Pilihan Utama',
    subtitle: 'Paket lengkap pendirian ditambah sertifikasi komprehensif penunjang bisnis resmi.',
    basePrice: 4400000,
    features: [
      'Semua layanan paket Standar lengkap',
      'Akun OSS & Akun Gmail Resmi Perusahaan',
      'Desain Visual Brand (Logo & Kop Surat Resmi)',
      'Desain Kartu Nama & Company Profile Elegan',
      'Pernyataan Mandiri K3L & SPPL Lingkungan'
    ],
    recommendedFor: 'Startup Founders, Vendor Proyek Pemerintah, & Kontraktor',
    colorScheme: 'blue'
  },
  {
    id: 'premium',
    name: 'ENTERPRISE COMPLETE',
    badge: 'Solusi Menyeluruh',
    subtitle: 'Infrastruktur legalitas & branding corporate mutlak terlindungi dan siap ekspansi.',
    basePrice: 4900000,
    features: [
      'Seluruh penunjang dokumen di kelas PRO',
      'Pembuatan Website Resmi (Company Profile)',
      'Template Perjanjian Kerja Sama (PKS) Hukum',
      'Bonus Pembukaan Rekening Giro Bank BUMN Terpercaya',
      'Pendampingan Verifikasi OSS RBA Lapangan'
    ],
    recommendedFor: 'Korporasi Besar, Produsen, Manufaktur, Eksportir, & Yayasan/Koperasi.',
    colorScheme: 'purple'
  }
];

export const DETAILED_PRICING_CATEGORIES: LegalityCategory[] = [
  {
    id: 'pt_persero',
    title: 'PT Persero / PT Biasa',
    subtitle: 'Jasa Pendirian PT Perseroan Terbatas lengkap dengan SK Kemenkumham, Akta Notaris, & Dokumen Pendukung Saham.',
    tagline: 'Ideal untuk modal kerjasama multishares, CV naik kelas, & tender proyek swasta/pemerintah.',
    packages: [
      {
        id: 'pt_standar',
        name: 'STANDAR',
        subtitle: 'Dokumen pokok administrasi legalitas badan hukum esensial.',
        priceNum: 3400000,
        priceFormatted: '3.4 Jt',
        processTime: 'Proses Max 3 hk',
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: false },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: false },
          { name: 'Pernyataan Mandiri K3L', included: false },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: false }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: false },
          { name: 'Desain Kop Surat', included: false },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile', included: false },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: false },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'pt_premium',
        name: 'PREMIUM',
        subtitle: 'Badan hukum lengkap siap pakai untuk operasional penuh.',
        priceNum: 3900000,
        priceFormatted: '3.9 Jt',
        processTime: 'Proses Max 10 hk',
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: false },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'pt_pro',
        name: 'PRO',
        subtitle: 'Lengkap dengan branding & perlengkapan identitas perusahaan.',
        priceNum: 4400000,
        priceFormatted: '4.4 Jt',
        processTime: 'Proses Max 5 hk',
        isPro: true,
        isPopular: true,
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'pt_enterprise',
        name: 'ENTERPRISE',
        subtitle: 'Solusi paripurna dengan Website Resmi, Rekening Bisnis & PKS lengkap.',
        priceNum: 4900000,
        priceFormatted: '4.9 Jt',
        processTime: 'Proses Max 7 hk',
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: true },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: true }
        ]
      }
    ]
  },
  {
    id: 'pt_perorangan',
    title: 'PT Perorangan',
    subtitle: 'Pendirian PT skala mikro & kecil oleh pendiri tunggal (tanpa partner pemegang saham eksternal).',
    tagline: 'Selesai super cepat dalam hitungan hari, syarat KTP + NPWP pendiri saja.',
    packages: [
      {
        id: 'ptp_standar',
        name: 'STANDAR',
        subtitle: 'Deklarasi badan hukum mandiri esensial.',
        priceNum: 750000,
        priceFormatted: '750 Ribu',
        processTime: 'Proses Max 3 hk',
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Sertifikat Pendirian PT', included: true },
          { name: 'Pernyataan Pendirian PT', included: true },
          { name: 'NPWP Perusahaan', included: false },
          { name: 'SKT Pajak', included: false },
          { name: 'NIB Perusahaan', included: false },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: false },
          { name: 'Pernyataan Mandiri K3L', included: false },
          { name: 'Sertifikat Standar / SPPL', included: false }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: false },
          { name: 'Desain Kop Surat', included: false },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile', included: false },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: false },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'ptp_premium',
        name: 'PREMIUM',
        subtitle: 'Legalitas perorangan dengan dokumen operasional lengkap.',
        priceNum: 1500000,
        priceFormatted: '1.5 Jt',
        processTime: 'Proses Max 10 hk',
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Sertifikat Pendirian PT', included: true },
          { name: 'Pernyataan Pendirian PT', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: false },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'ptp_pro',
        name: 'PRO',
        subtitle: 'Lengkap dengan branding identitas visual & dokumen perlindungan hukum.',
        priceNum: 2100000,
        priceFormatted: '2.1 Jt',
        processTime: 'Proses Max 5 hk',
        isPro: true,
        isPopular: true,
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Sertifikat Pendirian PT', included: true },
          { name: 'Pernyataan Pendirian PT', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'ptp_enterprise',
        name: 'ENTERPRISE',
        subtitle: 'Paket maksimal dengan Website & Rekening Bisnis tervalidasi.',
        priceNum: 2600000,
        priceFormatted: '2.6 Jt',
        processTime: 'Proses Max 7 hk',
        features: [
          { name: 'Cek & Pesan Nama PT', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Sertifikat Pendirian PT', included: true },
          { name: 'Pernyataan Pendirian PT', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: true },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: true }
        ]
      }
    ]
  },
  {
    id: 'cv_kemitraan',
    title: 'CV (Persekutuan Komanditer)',
    subtitle: 'Jasa Pendirian CV dengan Akta Notaris Otentik, pendaftaran SABU Kemenkumham, & kelengkapan izin komersial.',
    tagline: 'Pilihan ekonomis terbaik untuk usaha patungan tanpa perseroan saham yang kaku.',
    packages: [
      {
        id: 'cv_standar',
        name: 'STANDAR',
        subtitle: 'Sertifikat SABU & Akta Pendirian pokok tanpa izin sektoral.',
        priceNum: 2900000,
        priceFormatted: '2.9 Jt',
        processTime: 'Proses Max 3 hk',
        features: [
          { name: 'Cek & Pesan Nama CV', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: false },
          { name: 'SKT Pajak', included: false },
          { name: 'NIB Perusahaan', included: false },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: false },
          { name: 'Pernyataan Mandiri K3L', included: false },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: false }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: false },
          { name: 'Desain Kop Surat', included: false },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile (Max 7 Hlm)', included: false },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: false },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'cv_premium',
        name: 'PREMIUM',
        subtitle: 'Kemitraan aman siap pakai untuk operasional penuh.',
        priceNum: 3900000,
        priceFormatted: '3.9 Jt',
        processTime: 'Proses Max 10 hk',
        features: [
          { name: 'Cek & Pesan Nama CV', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: false },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile (Max 7 Hlm)', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'cv_pro',
        name: 'PRO',
        subtitle: 'Ekosistem legal & visual brand terintegrasi.',
        priceNum: 4400000,
        priceFormatted: '4.4 Jt',
        processTime: 'Proses Max 5 hk',
        isPro: true,
        isPopular: true,
        features: [
          { name: 'Cek & Pesan Nama CV', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile (Max 7 Hlm)', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: false }
        ]
      },
      {
        id: 'cv_enterprise',
        name: 'ENTERPRISE',
        subtitle: 'Solusi terlengkap siap menangkan tender besar kementerian.',
        priceNum: 4900000,
        priceFormatted: '4.9 Jt',
        processTime: 'Proses Max 7 hk',
        features: [
          { name: 'Cek & Pesan Nama CV', included: true },
          { name: 'SK KEMENKUMHAM', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Perusahaan', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Perusahaan', included: true },
          { name: 'Penyertaan UMK (Terkait Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL (Resiko Menengah Rendah)', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Perusahaan', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile (Max 7 Hlm)', included: true },
          { name: 'Web Site', included: true },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Perusahaan (BRI & Mandiri Jabodetabek)', included: true }
        ]
      }
    ]
  },
  {
    id: 'yayasan',
    title: 'Yayasan (Sosial/Keagamaan)',
    subtitle: 'Pendirian Badan Hukum Yayasan non-profit berbasis kegiatan sosial, kemanusiaan, & keagamaan.',
    tagline: 'Cocok untuk Sekolah, Rumah Ibadah, Panti Asuhan, & Lembaga Filantropi.',
    packages: [
      {
        id: 'yys_standar',
        name: 'STANDAR',
        subtitle: 'Pengesahan akta & SK pokok pendirian yayasan resmi.',
        priceNum: 3800000,
        priceFormatted: '3.8 Jt',
        processTime: 'Akta Notaris & SK Kemenkumham Resmi',
        features: [
          { name: 'Cek & Pesan Nama Yayasan', included: true },
          { name: 'SK KEMENKUMHAM Pengesahan', included: true },
          { name: 'Dokumen Salinan Akta PT/Yayasan', included: true },
          { name: 'Dokumen Fisik Asli', included: true }
        ],
        bonuses: []
      },
      {
        id: 'yys_enterprise',
        name: 'ENTERPRISE',
        subtitle: 'Paket lengkap pendaftaran seluruh izin operasional komprehensif yayasan.',
        priceNum: 4900000,
        priceFormatted: '4.9 Jt',
        processTime: 'Paket Legalitas Yayasan Paripurna',
        isPopular: true,
        features: [
          { name: 'Cek & Pesan Nama Yayasan', included: true },
          { name: 'SK KEMENKUMHAM Pengesahan', included: true },
          { name: 'Akta Pendirian Otentik Notaris', included: true },
          { name: 'NPWP Yayasan Resmi', included: true },
          { name: 'SKT Pajak Terdaftar', included: true },
          { name: 'NIB Yayasan (Nomor Induk Berusaha)', included: true },
          { name: 'Penyertaan UMK (Lingkup Tata Ruang)', included: true },
          { name: 'Sertifikat Standar Kepatuhan', included: true },
          { name: 'SPPL Dinas Lingkungan Hidup', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik Seluruh Berkas', included: true },
          { name: 'Akun OSS & Gmail Pengurus', included: true },
          { name: 'Bonus Pengurusan Rekening Yayasan (BRI/Mandiri)', included: true }
        ]
      }
    ]
  },
  {
    id: 'koperasi',
    title: 'Koperasi (Ekonomi Rakyat)',
    subtitle: 'Pembentukan Koperasi Produsen, Konsumen, atau Jasa Berbadan Hukum berazaskan kekeluargaan.',
    tagline: 'Sistem kepatuhan prima, perolehan legalitas Koperasi instan & terarah.',
    packages: [
      {
        id: 'kop_standar',
        name: 'STANDAR',
        subtitle: 'Pengesahan akta & SK pendirian dasar Koperasi.',
        priceNum: 2900000,
        priceFormatted: '2.9 Jt',
        processTime: 'Proses Max 3 hk',
        features: [
          { name: 'Cek & Pesan Nama Koperasi', included: true },
          { name: 'SK KEMENKUMHAM Berbadan Hukum', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Koperasi', included: false },
          { name: 'SKT Pajak', included: false },
          { name: 'NIB Koperasi', included: false },
          { name: 'Penyertaan UMK (Tata Ruang)', included: false },
          { name: 'Pernyataan Mandiri K3L', included: false },
          { name: 'Sertifikat Standar / SPPL', included: false }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Koperasi', included: false },
          { name: 'Desain Kop Surat', included: false },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile', included: false },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: false },
          { name: 'Rekening Koperasi (BRI & Mandiri)', included: false }
        ]
      },
      {
        id: 'kop_premium',
        name: 'PREMIUM',
        subtitle: 'Badan hukum Koperasi siap operasional penuh.',
        priceNum: 3900000,
        priceFormatted: '3.9 Jt',
        processTime: 'Proses Max 10 hk',
        features: [
          { name: 'Cek & Pesan Nama Koperasi', included: true },
          { name: 'SK KEMENKUMHAM Berbadan Hukum', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Koperasi', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Koperasi', included: true },
          { name: 'Penyertaan UMK (Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Koperasi', included: false },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: false },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Koperasi (BRI & Mandiri)', included: false }
        ]
      },
      {
        id: 'kop_pro',
        name: 'PRO',
        subtitle: 'Branding lengkap & kelengkapan administrasi prima.',
        priceNum: 4400000,
        priceFormatted: '4.4 Jt',
        processTime: 'Proses Max 5 hk',
        isPro: true,
        isPopular: true,
        features: [
          { name: 'Cek & Pesan Nama Koperasi', included: true },
          { name: 'SK KEMENKUMHAM Berbadan Hukum', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Koperasi', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Koperasi', included: true },
          { name: 'Penyertaan UMK (Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Koperasi', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: false },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Koperasi (BRI & Mandiri)', included: false }
        ]
      },
      {
        id: 'kop_enterprise',
        name: 'ENTERPRISE',
        subtitle: 'Paket maksimal dengan Website & Rekening Giro Koperasi tervalidasi.',
        priceNum: 4900000,
        priceFormatted: '4.9 Jt',
        processTime: 'Proses Max 7 hk',
        features: [
          { name: 'Cek & Pesan Nama Koperasi', included: true },
          { name: 'SK KEMENKUMHAM Berbadan Hukum', included: true },
          { name: 'Akta Pendirian', included: true },
          { name: 'NPWP Koperasi', included: true },
          { name: 'SKT Pajak', included: true },
          { name: 'NIB Koperasi', included: true },
          { name: 'Penyertaan UMK (Tata Ruang)', included: true },
          { name: 'Pernyataan Mandiri K3L', included: true },
          { name: 'Sertifikat Standar / SPPL', included: true }
        ],
        bonuses: [
          { name: 'Dokumen Fisik', included: true },
          { name: 'Akun OSS & Gmail', included: true },
          { name: 'Desain Logo Koperasi', included: true },
          { name: 'Desain Kop Surat', included: true },
          { name: 'Desain Kartu Nama', included: true },
          { name: 'Desain Company Profile', included: true },
          { name: 'Web Site', included: true },
          { name: 'Template PKS', included: true },
          { name: 'Rekening Koperasi (BRI & Mandiri)', included: true }
        ]
      }
    ]
  }
];

export interface IndustryLicensingDetails {
  title: string;
  badge: string;
  description: string;
  kbliExamples: string;
  licenseSteps: string[];
  tips: string;
}

export const INDUSTRY_GUIDES: Record<BusinessIndustry, IndustryLicensingDetails> = {
  tech: {
    title: 'Startup Teknologi & SaaS IT',
    badge: 'Sektor Portal Web/Digital',
    description: 'Fokus pada izin platform online, perlindungan server, data privasi pengguna, dan hak cipta software.',
    kbliExamples: '62019 (Aktivitas Jasa Teknologi Informasi Lainnya), 63121 (Portal Web dan/atau Platform Digital).',
    licenseSteps: [
      'Pendirian PT (Wajib PT untuk KBLI Portal Web jika ingin integrasi Payment Gateway)',
      'NIB Risiko Rendah atau Menengah Rendah',
      'Pendaftaran PSE Kominfo (Penyelenggara Sistem Elektronik) - Wajib untuk Fintech/SaaS',
      'HAKI Hak Cipta source code & Sertifikasi Merek Brand Utama',
      'Kebijakan Privasi (Privacy Policy) & Syarat & Ketentuan (T&C) berstandar hukum'
    ],
    tips: 'Sangat disarankan mendirikan PT Reguler (bukan perorangan) untuk memudahkan pembagian saham kepada co-founders atau investor tahap awal.'
  },
  'f&b': {
    title: 'Kuliner, F&B, & Restoran',
    badge: 'Sektor Makanan & Minuman',
    description: 'Fokus pada standar kebersihan pangan, halal, keamanan konsumen, serta legalitas lokasi usaha.',
    kbliExamples: '56101 (Restoran), 56301 (Bar), 10792 (Industri Produk Kue basah).',
    licenseSteps: [
      'Pendirian PT/CV atau PT Perorangan (untuk skala mikro)',
      'NIB dengan pemenuhan SPPL (Izin Lingkungan)',
      'PIRT (Pangan Industri Rumah Tangga) untuk produk retail di rumah',
      'Sertifikasi Halal (wajib di Indonesia mulai Oktober 2024)',
      'Sertifikat Laik Sehat (SLS) dari Dinas Kesehatan untuk restoran skala menengah-besar',
      'Izin BPOM (MD) jika mendistribusikan eceran skala besar'
    ],
    tips: 'Gunakan Virtual Office dengan izin khusus atau sewa tempat fisik zonasi komersial. Zonasi perumahan sering ditolak dinas kesehatan setempat!'
  },
  construction: {
    title: 'Kontraktor & Konstruksi Umum',
    badge: 'Sektor Infrastruktur',
    description: 'Memerlukan kualifikasi teknis tinggi, sertifikasi keahlian tenaga kerja, dan asuransi proyek.',
    kbliExamples: '41011 (Konstruksi Gedung Hunian), 42111 (Konstruksi Jalan Raya).',
    licenseSteps: [
      'Pendirian PT Penanaman Modal Lokal (Kualifikasi K1/K2/K3 atau M1/M2)',
      'SBU Konstruksi (Sertifikat Badan Usaha) dari LPJK setelah divalidasi Asosiasi',
      'SKK Konstruksi (Sertifikat Kompetensi Kerja) untuk Penanggung Jawab Teknis Badan Usaha (PJTBU)',
      'NIB Risiko Menengah Tinggi / Tinggi',
      'Persetujuan Bangunan Gedung (PBG) & Pendaftaran BPJS Ketenagakerjaan Proyek'
    ],
    tips: 'Tender konstruksi mewajibkan PT dengan kualifikasi legalitas lengkap. Segera sertifikasi ISO 9001 untuk melipatgandakan peluang menang tender!'
  },
  trading: {
    title: 'Perdagangan Umum & Ekspor-Impor',
    badge: 'Sektor Distribusi & Ritel',
    description: 'Meliputi perdagangan antar-daerah maupun lintas batas negara dengan dokumen kepabeanan lengkap.',
    kbliExamples: '46900 (Perdagangan Besar Berbagai Macam Barang), 47111 (Toko Kelontong Modern).',
    licenseSteps: [
      'Pendirian PT / CV (disarankan PT kelas Menengah/Besar)',
      'NIB yang berfungsi sekaligus sebagai **API-U** (Angka Pengenal Importir Umum)',
      'Registrasi Kepabeanan di Ditjen Bea Cukai untuk mendapatkan Nomor Identitas Kepabeanan (NIK)',
      'NPWP Badan Usaha yang tervalidasi KSWP (Konfirmasi Status Wajib Pajak)',
      'Persetujuan Impor (PI) atau Laporan Surveyor (LS) tergantung jenis barang'
    ],
    tips: 'KBLI perdagangan besar tidak dapat disatukan dengan KBLI perdagangan eceran dalam satu izin operasional jika skala modal berbeda jauh.'
  },
  tourism: {
    title: 'Pariwisata, Perhotelan, & Travel Agen',
    badge: 'Sektor Jasa Wisata',
    description: 'Memerlukan TDUP (Tanda Daftar Usaha Pariwisata) yang kini terintegrasi langsung dalam OSS RBA.',
    kbliExamples: '79111 (Aktivitas Agen Perjalanan Wisata), 55111 (Hotel Bintang).',
    licenseSteps: [
      'Pendirian PT atau CV dengan alamat komersial tervalidasi',
      'NIB dengan rincian pemenuhan standar pariwisata par-1',
      'Penetapan Standar Usaha Jasa Perjalanan Wisata',
      'UKL-UPL atau SPPL Lingkungan tergantung luas lahan/bangunan',
      'Asuransi Tanggung Jawab Hukum bagi Wisatawan'
    ],
    tips: 'Usaha tour travel sangat riskan terhadap komplain konsumen. Memiliki PT berbadan hukum membuat aset pribadi Anda 100% aman terlindungi.'
  },
  other: {
    title: 'Sektor Bisnis Kreatif & Jasa Umum',
    badge: 'Lainnya / Jasa Konsultasi',
    description: 'Menyediakan jasa konsultasi manajemen, agensi pemasaran, desain grafis, fotografi, kehumasan, dll.',
    kbliExamples: '70209 (Aktivitas Konsultasi Manajemen Lainnya), 73100 (Periklanan).',
    licenseSteps: [
      'Pendirian PT Perorangan, CV, atau PT Reguler',
      'NIB Risiko Rendah (Selesai dalam 1 hari kerja!)',
      'NPWP Badan Usaha & Pengukuhan PKP (jika omset > 4.8 Miliar setahun)',
      'Membuka Layanan Rekening Giro Korporasi'
    ],
    tips: 'Jasa jasa kreatif sangat mudah diurus legalitasnya. Pengurusan dokumen bisa rampung kurang dari 48 jam bersama tim ekspres kami.'
  }
};

export const MOCK_REVIEWS: ClientReview[] = [
  {
    name: 'Andi Wijaya',
    company: 'CV Sinar Abadi Logistics',
    role: 'Direktur Utama',
    stars: 5,
    content: 'Awalnya pusing dengan urusan zonasi Jakarta dan pengisian KBLI di sistem OSS RBA. Tim BikinPT.id memberi rekomendasi Virtual Office strategis dan mengurus NIB saya sampai beres dalam hitungan hari. Transparan, ramah, dan sangat profesional!',
    date: '12 Mei 2026'
  },
  {
    name: 'Siti Rahmawati',
    company: 'Nusantara Food Tech',
    role: 'Founder',
    stars: 5,
    content: 'Mengurus PT Perorangan & Sertifikasi Halal kini tidak perlu ribet ke banyak loket. Semuanya dihandle oleh satu akun di BikinPT.id. Sangat hemat biaya buat UMKM seperti saya. Recommended seller!',
    date: '28 April 2026'
  },
  {
    name: 'Robertus Chen',
    company: 'PT Global Indo Persada',
    role: 'Chief Operational Officer',
    stars: 5,
    content: 'Kami membutuhkan pengurusan izin PBG, SLF, serta sertifikasi ISO 9001 untuk keperluan tender kementerian dalam 2 minggu. Komunikasi luar biasa cepat, data diproses real-time, dan verifikator lapangan sangat terbantu dengan pendampingan hukum BikinPT.id.',
    date: '3 Juni 2026'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Apakah BikinPT.id melayani pemesanan luar daerah?',
    a: 'Ya! Layanan kami mencakup seluruh wilayah Indonesia (Sabang sampai Merauke). Sistem kami terintegrasi secara digital dengan notaris daerah dan pemda setempat, sehingga Anda tidak perlu datang ke kantor fisik kami.'
  },
  {
    q: 'Berapa lama proses pembuatan Akta Notaris dan SK Kemenkumham?',
    a: 'Untuk PT Perorangan instan 1 hari kerja setelah berkas lengkap. Untuk CV & PT Reguler, pembuatan akta notaris hingga keluarnya Keputusan Kemenkumham rata-rata memakan waktu 3 sampai 5 hari kerja.'
  },
  {
    q: 'Apakah bisa menyewa Virtual Office dari BikinPT.id?',
    a: 'Tentu! Kami menyediakan Virtual Office yang lolos verifikasi zonasi komersial pemerintah. Sangat aman digunakan untuk verifikasi fisik perpajakan (PKP) dan pengurusan NIB OSS.'
  },
  {
    q: 'Bagaimana sistem pembayaran pengurusan legalitas di sini?',
    a: 'Pembayaran dilakukan secara aman melalui transfer korporasi resmi kami. Kami juga melayani sistem pembayaran bertahap (Down Payment di awal dan pelunasan setelah dokumen disetujui).'
  }
];
