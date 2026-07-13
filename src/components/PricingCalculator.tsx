import React, { useState, useMemo } from 'react';
import { DETAILED_PRICING_CATEGORIES, LegalityCategory, DetailedPackage } from '../data';
import { CalculatorState } from '../types';
import { CheckCircle2, ChevronRight, Phone, Calculator, HelpCircle, Landmark, ShieldCheck, Tag, ThumbsUp, XCircle, Award, ChevronDown, X } from 'lucide-react';

export interface AddonOption {
  id: string;
  category: string;
  categoryEmoji: string;
  name: string;
  price: number;
  description: string;
}

export const ADDON_OPTIONS: AddonOption[] = [
  // 🛡️ Perlindungan & Sertifikasi
  {
    id: 'haki',
    category: 'Perlindungan & Sertifikasi',
    categoryEmoji: '🛡️',
    name: 'Merek / HAKI',
    price: 5000000,
    description: 'Perlindungan nama merek/logo usaha secara legal terdaftar resmi di Ditjen KI Kemenkumham RI. (+Rp 5.000.000)'
  },
  {
    id: 'halal',
    category: 'Perlindungan & Sertifikasi',
    categoryEmoji: '🛡️',
    name: 'Sertifikat Halal',
    price: 6500000,
    description: 'Sertifikasi kehalalan produk pangan, kosmetik, atau obat-obatan oleh BPJPH Kemenag. (+Rp 6.500.000)'
  },
  {
    id: 'bpom',
    category: 'Perlindungan & Sertifikasi',
    categoryEmoji: '🛡️',
    name: 'BPOM (Izin Edar)',
    price: 8500000,
    description: 'Persetujuan izin edar pangan obat/kosmetik dari Badan Pengawas Obat dan Makanan. (+Rp 8.500.000)'
  },
  {
    id: 'pirt',
    category: 'Perlindungan & Sertifikasi',
    categoryEmoji: '🛡️',
    name: 'PIRT (Pangan Industri Rumah Tangga)',
    price: 2500000,
    description: 'Pendaftaran izin industri rumah tangga untuk jaminan keamanan produk pangan olahan mikro. (+Rp 2.500.000)'
  },
  {
    id: 'sni',
    category: 'Perlindungan & Sertifikasi',
    categoryEmoji: '🛡️',
    name: 'SNI (Standar Nasional Indonesia)',
    price: 15000000,
    description: 'Sertifikasi pemenuhan kualitas mutu barang jasa sesuai Standar Nasional Indonesia. (+Rp 15.000.000)'
  },
  {
    id: 'nkv',
    category: 'Perlindungan & Sertifikasi',
    categoryEmoji: '🛡️',
    name: 'NKV (Nomor Kontrol Veteriner)',
    price: 9500000,
    description: 'Sertifikat bukti higienis sanitasi unit usaha produk hewan pangan atau non-pangan. (+Rp 9.500.000)'
  },
  {
    id: 'iso',
    category: 'Perlindungan & Sertifikasi',
    categoryEmoji: '🛡️',
    name: 'Sertifikasi ISO 9001:2015',
    price: 3900000,
    description: 'Akreditasi sistem manajemen mutu bertaraf internasional penunjang ekspor & kualifikasi tender. (+Rp 3.900.000)'
  },

  // 🌍 Bangunan/Konstruksi
  {
    id: 'pbg',
    category: 'Bangunan/Konstruksi',
    categoryEmoji: '🌍',
    name: 'PBG (Persetujuan Bangunan Gedung)',
    price: 4900000,
    description: 'Izin kelayakan mendirikan/memodifikasi konstruksi bangunan berdasarkan fungsi zonasi ruang. (+Rp 4.900.000)'
  },
  {
    id: 'slf',
    category: 'Bangunan/Konstruksi',
    categoryEmoji: '🌍',
    name: 'SLF (Sertifikat Laik Fungsi)',
    price: 5500000,
    description: 'Sertifikat tanda laik fungsi operasional bangunan gedung demi keselamatan kerja. (+Rp 5.500.000)'
  },
  {
    id: 'sppl',
    category: 'Bangunan/Konstruksi',
    categoryEmoji: '🌍',
    name: 'Izin Lingkungan SPPL',
    price: 850000,
    description: 'Pernyataan sanggup memantau dampak lingkungan usaha mikro/kecil non-amdal. (+Rp 850.000)'
  },
  {
    id: 'ukl_upl',
    category: 'Bangunan/Konstruksi',
    categoryEmoji: '🌍',
    name: 'UKL-UPL',
    price: 18500000,
    description: 'Dokumen kajian mendalam lingkungan hidup bagi jenis usaha dengan dampak lingkungan sedang. (+Rp 18.500.000)'
  },

  // 🛂 Keimigrasian
  {
    id: 'visa',
    category: 'Keimigrasian',
    categoryEmoji: '🛂',
    name: 'VISA Kunjungan Bisnis',
    price: 3500000,
    description: 'Pengurusan visa masuk delegasi, investor, atau kebutuhan bisnis Indonesia. (+Rp 3.500.000)'
  },
  {
    id: 'kitas',
    category: 'Keimigrasian',
    categoryEmoji: '🛂',
    name: 'KITAS (Tinggal Terbatas)',
    price: 9500000,
    description: 'Izin tinggal terbatas & dokumen izin kerja tenaga asing penjamin badan usaha. (+Rp 9.500.000)'
  },
  {
    id: 'kitap',
    category: 'Keimigrasian',
    categoryEmoji: '🛂',
    name: 'KITAP (Tinggal Tetap)',
    price: 18000000,
    description: 'Pengajuan izin tinggal tetap bagi personil ekspatriat atau pemodal jangka panjang. (+Rp 18.000.000)'
  },

  // 🏥 Perizinan Khusus
  {
    id: 'idak',
    category: 'Perizinan Khusus',
    categoryEmoji: '🏥',
    name: 'IDAK (Izin Distribusi Alat Kesehatan)',
    price: 12000000,
    description: 'Sertifikasi kelayakan sarana distribusi & penyimpanan alat kesehatan resmi Kemenkes. (+Rp 12.000.000)'
  },
  {
    id: 'izin_klinik',
    category: 'Perizinan Khusus',
    categoryEmoji: '🏥',
    name: 'Izin Operasional Klinik',
    price: 15000000,
    description: 'Legalitas operasional resmi klinik pratama / utama pelayanan kesehatan masyarakat. (+Rp 15.000.000)'
  },
  {
    id: 'izin_apotek',
    category: 'Perizinan Khusus',
    categoryEmoji: '🏥',
    name: 'Izin Usaha Apotek',
    price: 10000000,
    description: 'Lisensi resmi pendirian apotek dan peredaran sediaan farmasi di wilayah kab/kota. (+Rp 10.000.000)'
  },
  {
    id: 'izin_operasional_khusus',
    category: 'Perizinan Khusus',
    categoryEmoji: '🏥',
    name: 'Izin Operasional Usaha Khusus',
    price: 8000000,
    description: 'Rekomendasi teknis & izin komersial khusus sektoral instansi teknis kementerian. (+Rp 8.000.000)'
  },

  // 🕋 Perizinan Travel & Umroh
  {
    id: 'ppiu',
    category: 'Perizinan Travel & Umroh',
    categoryEmoji: '🕋',
    name: 'PPIU (Izin Operasional Umroh)',
    price: 25000000,
    description: 'Penyelenggara Perjalanan Ibadah Umroh legal terakreditasi resmi oleh Kementerian Agama. (+Rp 25.000.000)'
  },
  {
    id: 'travel_religi',
    category: 'Perizinan Travel & Umroh',
    categoryEmoji: '🕋',
    name: 'Perizinan Travel Wisata Religi',
    price: 12000000,
    description: 'Izin operasional agen biro perjalanan wisata khusus ziarah dan religi keagamaan. (+Rp 12.000.000)'
  }
];

interface PricingCalculatorProps {
  onSelectedPackage: (pkgName: string) => void;
}

export default function PricingCalculator({ onSelectedPackage }: PricingCalculatorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('pt_persero');

  // Custom calculator state
  const [calc, setCalc] = useState<CalculatorState>({
    companyType: 'pt',
    packageId: 'pt_standar',
    officeType: 'virtual',
    includeHaki: false,
    includeOsm: true,
    includeSppl: false,
    includePbgSlf: false,
    includeIso: false,
    selectedAddonIds: [],
    durationMonths: 12
  });

  // Calculate estimated price
  const estimatedPrice = useMemo(() => {
    let total = 0;

    // 1. Company Type base price
    let basePrice = 0;
    if (calc.packageId) {
      let foundPrice = null;
      for (const category of DETAILED_PRICING_CATEGORIES) {
        const pkg = category.packages.find(p => p.id === calc.packageId);
        if (pkg) {
          foundPrice = pkg.priceNum;
          break;
        }
      }
      if (foundPrice !== null) {
        basePrice = foundPrice;
      }
    }

    if (basePrice === 0) {
      if (calc.companyType === 'pt_perorangan') {
        basePrice = 750000;
      } else if (calc.companyType === 'cv') {
        basePrice = 2900000;
      } else if (calc.companyType === 'yayasan') {
        basePrice = 3800000;
      } else if (calc.companyType === 'koperasi') {
        basePrice = 2900000;
      } else {
        basePrice = 3400000; // PT Regular / Biasa
      }
    }

    total += basePrice;

    // 2. Office/Zoning
    if (calc.officeType === 'virtual') {
      total += 990000; // Virtual Office JKT/Jamb Premium
    }

    // 3. Add-ons
    if (calc.selectedAddonIds && calc.selectedAddonIds.length > 0) {
      calc.selectedAddonIds.forEach((addonId) => {
        const option = ADDON_OPTIONS.find(opt => opt.id === addonId);
        if (option) {
          total += option.price;
        }
      });
    }

    return total;
  }, [calc]);

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  });

  const sendCustomQuoteWhatsApp = () => {
    let desc = `Halo BikinLegal.com, saya mengkonfigurasi estimasi legalitas bisnis kustom:\n`;
    
    let structureStr = '';
    if (calc.packageId) {
      let foundPkg = null;
      let foundCategory = null;
      for (const category of DETAILED_PRICING_CATEGORIES) {
        const pkg = category.packages.find(p => p.id === calc.packageId);
        if (pkg) {
          foundPkg = pkg;
          foundCategory = category;
          break;
        }
      }
      if (foundPkg && foundCategory) {
        structureStr = `${foundCategory.title} (Paket ${foundPkg.name} - ${formatter.format(foundPkg.priceNum)})`;
      }
    }

    if (!structureStr) {
      structureStr = calc.companyType === 'pt_perorangan' ? 'PT Perorangan' : 
                     calc.companyType === 'cv' ? 'CV (Persekutuan)' : 
                     calc.companyType === 'yayasan' ? 'Yayasan (Sosial/Keagamaan)' : 
                     calc.companyType === 'koperasi' ? 'Koperasi (Ekonomi Rakyat)' : 
                     'PT Persero / Biasa';
    }

    desc += `- Jenis Usaha: ${structureStr}\n`;
    desc += `- Kantor: ${calc.officeType === 'virtual' ? 'Virtual Office Premium (12 Bulan)' : 'Gunakan Kantor Fisik Sendiri'}\n`;
    
    const addons: string[] = [];
    if (calc.selectedAddonIds && calc.selectedAddonIds.length > 0) {
      calc.selectedAddonIds.forEach(addonId => {
        const option = ADDON_OPTIONS.find(opt => opt.id === addonId);
        if (option) {
          addons.push(`${option.name} (${formatter.format(option.price)})`);
        }
      });
    }
    
    if (addons.length > 0) {
      desc += `- Izin Tambahan: ${addons.join(', ')}\n`;
    }
    desc += `Estimasi Total Biaya: *${formatter.format(estimatedPrice)}*\n\nMohon dibantu verifikasi KBLI dan konsultasi gratis di hub ini. Terimakasih!`;

    window.open(`https://wa.me/6285830831654?text=${encodeURIComponent(desc)}`, '_blank');
  };

  const sendDetailedWhatsApp = (categoryName: string, packageName: string, price: string) => {
    const text = `Halo BikinLegal.com, saya tertarik memesan layanan:\n- *Kategori:* ${categoryName}\n- *Paket:* ${packageName}\n- *Biaya Jasa:* ${price}\n\nMohon informasi persyaratan berkas awal dan cara pendaftaran. Terima kasih!`;
    window.open(`https://wa.me/6285830831654?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Find currently active category
  const activeCategory = useMemo(() => {
    return DETAILED_PRICING_CATEGORIES.find(c => c.id === selectedCategory) || DETAILED_PRICING_CATEGORIES[0];
  }, [selectedCategory]);

  const categoriesTabList = [
    { id: 'pt_persero', label: 'PT Persero / Biasa' },
    { id: 'pt_perorangan', label: 'PT Perorangan' },
    { id: 'cv_kemitraan', label: 'CV (Persekutuan)' },
    { id: 'yayasan', label: 'Yayasan' },
    { id: 'koperasi', label: 'Koperasi' }
  ];

  const gridCols = activeCategory.packages.length === 2
    ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="py-20 bg-slate-950 text-white border-b border-slate-900" id="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-900/30">
            TRANSPARENT VALUE BUNDLES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Pilihan Paket Pendirian Usaha Terbaik
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Pilih kategori badan hukum Anda di bawah ini untuk melihat rincian komparasi paket all-in terlengkap sesuai brosur brosur resmi BikinLegal.com.
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex justify-center mt-10">
          <div className="bg-slate-900/80 p-1.5 rounded-2xl border border-white/5 flex flex-wrap justify-center gap-1.5 max-w-4xl">
            {categoriesTabList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  onSelectedPackage(cat.label);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Tagline */}
        <div className="text-center mt-8 max-w-3xl mx-auto bg-slate-900/40 border border-white/5 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
          <h4 className="font-display font-bold text-slate-200 text-base sm:text-lg tracking-tight">Kategori: {activeCategory.title}</h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-2xl mx-auto">{activeCategory.subtitle}</p>
          <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase block mt-2">✓ {activeCategory.tagline}</span>
        </div>

        {/* Packages Columns layout */}
        <div className={`grid ${gridCols} gap-6 mt-12 items-stretch`}>
          {activeCategory.packages.map((pkg) => {
            const hasBonuses = pkg.bonuses && pkg.bonuses.length > 0;
            
            // Premium/Enterprise styling gets cyan accents, PRO gets emerald, Standar gets neutral slate
            const isStandar = pkg.name === 'STANDAR';
            const isPremium = pkg.name === 'PREMIUM';
            const isPro = pkg.isPro || pkg.name === 'PRO';
            const isEnterprise = pkg.name === 'ENTERPRISE';

            const borderCls = isPro 
              ? 'border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.12)] ring-1 ring-emerald-500/20' 
              : isEnterprise
              ? 'border-cyan-500/55 shadow-[0_0_30px_rgba(6,182,212,0.16)] ring-1 ring-cyan-500/35'
              : isPremium
              ? 'border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.12)] ring-1 ring-blue-500/20'
              : 'border-white/5 hover:border-white/10';
 
            const buttonCls = isEnterprise || isPremium
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-slate-950 font-extrabold shadow-[0_0_15px_rgba(6,182,212,0.25)]'
              : isPro
              ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.25)]'
              : 'bg-slate-900 border border-white/10 hover:bg-slate-800 text-slate-200';

            const badgeBgCls = isEnterprise
              ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
              : isPro
              ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300'
              : isPremium
              ? 'bg-blue-950/60 border-blue-500/30 text-blue-300'
              : 'bg-slate-900 border-white/5 text-slate-400';

            return (
              <div 
                key={pkg.id}
                className={`glass border ${borderCls} rounded-3xl p-5 md:p-6 flex flex-col justify-between transition-all hover:scale-[1.01] relative`}
              >
                {/* Visual accent glow */}
                {isPro && <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-[55px] pointer-events-none"></div>}
                {isEnterprise && <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-[55px] pointer-events-none"></div>}
                {isPremium && <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[55px] pointer-events-none"></div>}

                <div className="space-y-5 text-left relative z-10 flex-grow flex flex-col">
                  {/* Card Identifier */}
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-slate-400">PAKET LAYANAN</span>
                    {isPro ? (
                      <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border ${badgeBgCls} flex items-center space-x-1`}>
                        <ThumbsUp className="h-2.5 w-2.5 text-emerald-400" />
                        <span>👍 POPULER</span>
                      </span>
                    ) : (
                      <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border ${badgeBgCls}`}>
                        {pkg.name} BUNDLE
                      </span>
                    )}
                  </div>

                  {/* Header Title & Sub */}
                  <div className="space-y-1">
                    <h3 className={`font-display font-black text-xl tracking-tight ${
                      isPro ? 'text-emerald-400' : isEnterprise ? 'text-cyan-400' : isPremium ? 'text-blue-400' : 'text-slate-100'
                    }`}>{pkg.name}</h3>
                    <p className="text-[11px] text-slate-400 font-sans min-h-[36px] leading-relaxed">{pkg.subtitle}</p>
                    <div className="inline-block px-2.5 py-0.5 mt-1.5 rounded-full bg-slate-900 border border-white/5">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-tight">{pkg.processTime}</span>
                    </div>
                  </div>

                  {/* Features List with explicit Check/Cross style */}
                  <div className="pt-4 border-t border-white/5 space-y-3 flex-grow">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">PROSES UTAMA</span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 w-full text-left">
                          {feat.included ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-4 w-4 text-slate-600 flex-shrink-0 mt-0.5 opacity-60" />
                          )}
                          <span className={`text-[11px] leading-relaxed font-sans font-medium ${
                            feat.included ? 'text-slate-200' : 'text-slate-500 line-through decoration-slate-900/60'
                          }`}>{feat.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bonus list */}
                  {hasBonuses && (
                    <div className="pt-4 border-t border-white/5 space-y-3">
                      <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block">BONUS LAYANAN</span>
                      <ul className="space-y-2.5">
                        {pkg.bonuses.map((bonus, idx) => (
                          <li key={idx} className="flex items-start space-x-2 w-full">
                            {bonus.included ? (
                              <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="h-4 w-4 text-slate-600 flex-shrink-0 mt-0.5 opacity-60" />
                            )}
                            <span className={`text-[11px] leading-relaxed font-sans font-medium ${
                              bonus.included ? 'text-slate-200' : 'text-slate-500 line-through decoration-slate-900/60'
                            }`}>{bonus.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom actions */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-4 text-left relative z-10">
                  <div className="text-center bg-slate-950/40 p-2.5 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">BIAYA JASA</span>
                    <span className="text-3xl font-black font-display text-white tracking-tight">{pkg.priceFormatted}</span>
                    <span className="text-[10px] text-slate-400 block mt-1">100% All-In Selesai Pas</span>
                  </div>

                  <button
                    onClick={() => sendDetailedWhatsApp(activeCategory.title, pkg.name, pkg.priceFormatted)}
                    className={`w-full py-3 rounded-xl text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 ${buttonCls} active:scale-95 transition-all text-center uppercase cursor-pointer shadow-lg`}
                  >
                    <Phone className="h-3.5 w-3.5 fill-current stroke-none" />
                    <span>PESAN SEKARANG</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Calculator Widget */}
        <div className="mt-20 glass rounded-3xl p-6 md:p-10 lg:p-12 text-left relative overflow-hidden" id="custom-calculator">
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
            <Calculator className="w-96 h-96 text-emerald-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Form control parameters column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 font-mono tracking-widest uppercase font-bold">
                  <Calculator className="h-3.5 w-3.5" />
                  <span>Interactive Cost Modeler</span>
                </span>
                <h3 className="text-2xl font-bold font-display text-white">Rancang Izin & Perkiraan Harga Kustom</h3>
                <p className="text-sm font-sans text-slate-400">
                  Formulir ini memadukan jenis badan usaha utama pilihan Anda, alamat tempat usaha, dan izin sektoral khusus yang dibutuhkan. Estimasi harga transparan & real-time dihitung.
                </p>
              </div>

              {/* 1. Select company type */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">1. Pilih Struktur Badan Usaha Utama & Paket</label>
                
                <div className="relative">
                  <select
                    value={calc.packageId || ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      let compType: 'pt' | 'cv' | 'pt_perorangan' | 'yayasan' | 'koperasi' = 'pt';
                      if (val.startsWith('ptp_')) {
                        compType = 'pt_perorangan';
                      } else if (val.startsWith('cv_')) {
                        compType = 'cv';
                      } else if (val.startsWith('yys_')) {
                        compType = 'yayasan';
                      } else if (val.startsWith('kop_')) {
                        compType = 'koperasi';
                      } else {
                        compType = 'pt';
                      }
                      setCalc({
                        ...calc,
                        companyType: compType,
                        packageId: val
                      });
                    }}
                    className="w-full bg-slate-900 text-slate-100 border border-white/10 rounded-xl p-3.5 pr-10 text-xs sm:text-sm font-sans focus:border-emerald-500 focus:outline-none cursor-pointer appearance-none outline-none transition-colors"
                  >
                    {DETAILED_PRICING_CATEGORIES.map((category) => {
                      let mappedTitle = category.title;
                      if (category.id === 'pt_persero') mappedTitle = 'PT Persero / Biasa';
                      else if (category.id === 'pt_perorangan') mappedTitle = 'PT Perorangan';
                      else if (category.id === 'cv_kemitraan') mappedTitle = 'CV (Persekutuan)';
                      else if (category.id === 'yayasan') mappedTitle = 'Yayasan';
                      else if (category.id === 'koperasi') mappedTitle = 'Koperasi';

                      return (
                        <optgroup key={category.id} label={mappedTitle} className="bg-slate-950 text-slate-300 font-semibold py-1">
                          {category.packages.map((pkg) => (
                            <option
                              key={pkg.id}
                              value={pkg.id}
                              className="bg-slate-900 text-slate-200 py-1"
                            >
                              {mappedTitle} - Paket {pkg.name} ({formatter.format(pkg.priceNum)})
                            </option>
                          ))}
                        </optgroup>
                      );
                    })}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>

                {/* Selected Package Details preview under select dropdown */}
                {calc.packageId && (() => {
                  let selectedPkg = null;
                  let selectedCatTitle = '';
                  for (const category of DETAILED_PRICING_CATEGORIES) {
                    const pkg = category.packages.find(p => p.id === calc.packageId);
                    if (pkg) {
                      selectedPkg = pkg;
                      selectedCatTitle = category.title;
                      break;
                    }
                  }
                  if (!selectedPkg) return null;
                  return (
                    <div className="mt-2 p-3.5 bg-slate-950/40 rounded-xl border border-white/5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                          Detail Paket Terpilih:
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedPkg.subtitle}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900 border border-white/5 px-2.5 py-1 rounded shrink-0 self-start sm:self-auto">
                        Biaya Dasar: {formatter.format(selectedPkg.priceNum)}
                      </span>
                    </div>
                  );
                })()}
              </div>
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">2. Pilih Infrastruktur Alamat Kantor</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalc({ ...calc, officeType: 'virtual' })}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      calc.officeType === 'virtual' 
                        ? 'border-emerald-500 bg-emerald-950/20 text-white' 
                        : 'border-white/5 bg-slate-950/40 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="block text-sm font-bold font-display text-slate-100">Sewa Virtual Office (12 Bulan)</span>
                      <span className="block text-[11px] text-slate-400 mt-1">Alamat komersial elit, surat menyurat diproses resmi. (+Rp 990 Ribu)</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalc({ ...calc, officeType: 'none' })}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      calc.officeType === 'none' 
                        ? 'border-emerald-500 bg-emerald-950/20 text-white' 
                        : 'border-white/5 bg-slate-950/40 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="block text-sm font-bold font-display text-slate-100">Saya Memiliki Alamat Sendiri</span>
                      <span className="block text-[11px] text-slate-400 mt-1">Sertifikat hak milik ruko/ruang atau zonasi komersial mandiri. (+Rp 0)</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* 3. Add-ons selector dropdown */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 font-sans">
                    3. Tambahkan Dokumen Kepatuhan Khusus / Izin Sektoral (Opsional)
                  </label>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded self-start sm:self-auto">
                    {calc.selectedAddonIds.length} Layanan Ditambahkan
                  </span>
                </div>

                <div className="relative">
                  <select
                    value=""
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val && !calc.selectedAddonIds.includes(val)) {
                        setCalc({
                          ...calc,
                          selectedAddonIds: [...calc.selectedAddonIds, val]
                        });
                      }
                    }}
                    className="w-full bg-slate-900/90 text-slate-100 border border-white/10 rounded-xl p-3.5 pr-10 text-xs sm:text-sm font-sans focus:border-emerald-500 focus:outline-none cursor-pointer appearance-none outline-none transition-colors"
                  >
                    <option value="" disabled className="text-slate-500">
                      -- Klik untuk pilih izin tambahan... --
                    </option>
                    
                    <optgroup label="🛡️ Perlindungan & Sertifikasi" className="bg-slate-955 text-slate-300 font-semibold py-1">
                      {ADDON_OPTIONS.filter(o => o.category === 'Perlindungan & Sertifikasi').map(opt => (
                        <option 
                          key={opt.id} 
                          value={opt.id} 
                          disabled={calc.selectedAddonIds.includes(opt.id)}
                          className="bg-slate-900 text-slate-200 disabled:text-slate-600 py-1 cursor-pointer"
                        >
                          {opt.name} ({formatter.format(opt.price)})
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="🌍 Bangunan / Konstruksi" className="bg-slate-955 text-slate-300 font-semibold py-1">
                      {ADDON_OPTIONS.filter(o => o.category === 'Bangunan/Konstruksi').map(opt => (
                        <option 
                          key={opt.id} 
                          value={opt.id} 
                          disabled={calc.selectedAddonIds.includes(opt.id)}
                          className="bg-slate-900 text-slate-200 disabled:text-slate-600 py-1 cursor-pointer"
                        >
                          {opt.name} ({formatter.format(opt.price)})
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="🛂 Keimigrasian" className="bg-slate-955 text-slate-300 font-semibold py-1">
                      {ADDON_OPTIONS.filter(o => o.category === 'Keimigrasian').map(opt => (
                        <option 
                          key={opt.id} 
                          value={opt.id} 
                          disabled={calc.selectedAddonIds.includes(opt.id)}
                          className="bg-slate-900 text-slate-200 disabled:text-slate-600 py-1 cursor-pointer"
                        >
                          {opt.name} ({formatter.format(opt.price)})
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="🏥 Perizinan Khusus" className="bg-slate-955 text-slate-300 font-semibold py-1">
                      {ADDON_OPTIONS.filter(o => o.category === 'Perizinan Khusus').map(opt => (
                        <option 
                          key={opt.id} 
                          value={opt.id} 
                          disabled={calc.selectedAddonIds.includes(opt.id)}
                          className="bg-slate-900 text-slate-200 disabled:text-slate-600 py-1 cursor-pointer"
                        >
                          {opt.name} ({formatter.format(opt.price)})
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="🕋 Perizinan Travel & Umroh" className="bg-slate-955 text-slate-300 font-semibold py-1">
                      {ADDON_OPTIONS.filter(o => o.category === 'Perizinan Travel & Umroh').map(opt => (
                        <option 
                          key={opt.id} 
                          value={opt.id} 
                          disabled={calc.selectedAddonIds.includes(opt.id)}
                          className="bg-slate-900 text-slate-200 disabled:text-slate-600 py-1 cursor-pointer"
                        >
                          {opt.name} ({formatter.format(opt.price)})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>

                {/* Display Selected Add-ons info list */}
                <div className="space-y-2 mt-4">
                  {calc.selectedAddonIds.length === 0 ? (
                    <div className="border border-white/5 bg-slate-950/20 rounded-xl p-4 text-center">
                      <span className="text-xs text-slate-400 block">Belum ada dokumen kepatuhan tambahan yang dipilih. Silakan pilih dari menu dropdown di atas.</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1">
                      {calc.selectedAddonIds.map((addonId) => {
                        const opt = ADDON_OPTIONS.find(o => o.id === addonId);
                        if (!opt) return null;
                        return (
                          <div 
                            key={opt.id}
                            className="bg-slate-900/60 border border-white/5 rounded-xl p-3 flex items-start justify-between gap-3 text-left hover:border-slate-800 transition-all"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-bold text-slate-100 flex items-center gap-1">
                                  <span>{opt.categoryEmoji}</span>
                                  <span>{opt.name}</span>
                                </span>
                                <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-1.5 py-0.2 rounded shrink-0">
                                  {formatter.format(opt.price)}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{opt.description}</p>
                            </div>
                            
                            <button
                              type="button"
                              onClick={() => {
                                setCalc({
                                  ...calc,
                                  selectedAddonIds: calc.selectedAddonIds.filter(id => id !== opt.id)
                                });
                              }}
                              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all shrink-0 cursor-pointer"
                              title="Hapus pilihan"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Price block summary ticket card column */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 text-left shadow-2xl self-stretch flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 accent-gradient blur-[80px] opacity-20 pointer-events-none"></div>
              
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 tracking-wider flex items-center space-x-1">
                  <Tag className="h-3 w-3 stroke-[3.5]" />
                  <span>Estimasi Biaya Transparan</span>
                </span>
                
                <h4 className="text-lg font-bold font-display text-white">Rangkuman Kebutuhan Legal</h4>
                
                 {/* Cost factors stack */}
                <div className="space-y-3 pt-3 border-t border-white/5 text-xs font-sans">
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-slate-400 text-left">
                      {(() => {
                        if (calc.packageId) {
                          let foundPkg = null;
                          let foundCategory = null;
                          for (const category of DETAILED_PRICING_CATEGORIES) {
                            const pkg = category.packages.find(p => p.id === calc.packageId);
                            if (pkg) {
                              foundPkg = pkg;
                              foundCategory = category;
                              break;
                            }
                          }
                          if (foundPkg && foundCategory) {
                            let cleanCatTitle = foundCategory.title;
                            if (foundCategory.id === 'pt_persero') cleanCatTitle = 'PT Persero';
                            else if (foundCategory.id === 'pt_perorangan') cleanCatTitle = 'PT Perorangan';
                            else if (foundCategory.id === 'cv_kemitraan') cleanCatTitle = 'CV (Persekutuan)';
                            else if (foundCategory.id === 'yayasan') cleanCatTitle = 'Yayasan';
                            else if (foundCategory.id === 'koperasi') cleanCatTitle = 'Koperasi';
                            return `${cleanCatTitle} (${foundPkg.name})`;
                          }
                        }
                        return calc.companyType === 'pt_perorangan' ? 'PT Perorangan Base' : 
                               calc.companyType === 'cv' ? 'CV Base' : 
                               calc.companyType === 'yayasan' ? 'Yayasan Base' : 
                               calc.companyType === 'koperasi' ? 'Koperasi Base' : 
                               'PT Regular Base';
                      })()}
                    </span>
                    <span className="font-mono text-slate-200 font-semibold shrink-0">
                      {(() => {
                        if (calc.packageId) {
                          let foundPkg = null;
                          for (const category of DETAILED_PRICING_CATEGORIES) {
                            const pkg = category.packages.find(p => p.id === calc.packageId);
                            if (pkg) {
                              foundPkg = pkg;
                              break;
                            }
                          }
                          if (foundPkg) {
                            return formatter.format(foundPkg.priceNum);
                          }
                        }
                        return calc.companyType === 'pt_perorangan' ? formatter.format(750000) : 
                               calc.companyType === 'cv' ? formatter.format(2900000) : 
                               calc.companyType === 'yayasan' ? formatter.format(3800000) : 
                               calc.companyType === 'koperasi' ? formatter.format(2900000) : 
                               formatter.format(3400000);
                      })()}
                    </span>
                  </div>

                  {calc.officeType === 'virtual' && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Virtual Office (12 Bulan)</span>
                      <span className="font-mono text-emerald-400 font-semibold">{formatter.format(990000)}</span>
                    </div>
                  )}

                  {calc.selectedAddonIds && calc.selectedAddonIds.map(addonId => {
                    const opt = ADDON_OPTIONS.find(o => o.id === addonId);
                    if (!opt) return null;
                    return (
                      <div key={opt.id} className="flex justify-between items-start gap-4">
                        <span className="text-slate-400 text-left">{opt.name} ({opt.category})</span>
                        <span className="font-mono text-slate-200 shrink-0">{formatter.format(opt.price)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Huge total price block */}
              <div className="pt-6 border-t border-white/5 space-y-4 relative z-10">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-slate-400 font-mono tracking-widest uppercase">Estimasi Total</span>
                  <span className="text-3xl font-bold text-white tracking-tight font-display">{formatter.format(estimatedPrice)}</span>
                </div>
                
                <p className="text-[10px] text-slate-400 italic">
                  *Harga di atas merupakan estimasi transparan. Hubungi kami untuk kualifikasi KBLI dan opsi cicilan pembayaran bertahap.
                </p>

                <button
                  onClick={sendCustomQuoteWhatsApp}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 active:scale-95 transition-all uppercase text-xs md:text-sm cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <Phone className="h-4.5 w-4.5 fill-slate-950 stroke-none" />
                  <span>Klaim Penawaran Ini Via WA</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
