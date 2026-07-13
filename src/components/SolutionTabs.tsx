import React, { useState } from 'react';
import { Landmark, Building2, Terminal, ShieldAlert, Award, FileSpreadsheet, CheckCircle2, UserCheck, Check } from 'lucide-react';

export default function SolutionTabs() {
  const [activeCategory, setActiveCategory] = useState<'badan' | 'alamat' | 'izin' | 'haki'>('badan');

  const categories = [
    { id: 'badan', label: 'Pendirian Badan Usaha', icon: <Landmark className="h-4 w-4" /> },
    { id: 'alamat', label: 'Virtual Office & Domisili', icon: <Building2 className="h-4 w-4" /> },
    { id: 'izin', label: 'Izin Teknis & OSS', icon: <FileSpreadsheet className="h-4 w-4" /> },
    { id: 'haki', label: 'Sertifikasi HAKI & ISO', icon: <Award className="h-4 w-4" /> }
  ] as const;

  const contentMap = {
    badan: {
      title: "One Stop Business Legal Ecosystem: Pendirian Badan Usaha",
      desc: "Kami mempercepat proses pembuatan entitas usaha berbadan hukum resmi yang disahkan Kemenkumham. Aman, berizin lengkap, dan kredibel untuk skala nasional.",
      items: [
        { label: "Pendirian PT (Perseroan Terbatas)", sub: "Kemitraan modal ganda untuk tender, investasi, & operasional skala besar." },
        { label: "PT Perorangan (UMKM)", sub: "Khusus pendiri tunggal dengan laporan keuangan sederhana & modal terjangkau." },
        { label: "CV (Persekutuan Komanditer)", sub: "Lebih mudah ditarik & modal minimum fleksibel bagi pengusaha lokal." },
        { label: "Yayasan & Koperasi", sub: "Izin badan hukum nirlaba atau gotong royong terdaftar resmi." }
      ]
    },
    alamat: {
      title: "Solusi Alamat Bisnis Prestisius & Legalitas Domisili",
      desc: "Kami menyediakan Virtual Office premium dengan izin zonasi komersial resmi. Sangat mendukung verifikasi lapangan pajak (PKP) dan surat-menyurat perkantoran.",
      items: [
        { label: "Alamat Kantor Bisnis Premium", sub: "Terletak di kawasan komersial CBD elit Jakarta dan perwakilan daerah Jambi." },
        { label: "Pengurusan PKP Terjamin", sub: "Siap mendampingi visitasi dari kantor pajak setempat sampai disetujui." },
        { label: "Sewa Kantor Fisik Bersama", sub: "Fasilitas meeting room, resepsionis, & penanganan surat fisik." },
        { label: "Nomor Telepon Khusus Perusahaan", sub: "Peralihan panggilan internal dinomori korporat yang kredibel." }
      ]
    },
    izin: {
      title: "Sertifikasi OSS RBA & Kepatuhan Perizinan Teknis",
      desc: "Menyeleraskan KBLI dengan pemenuhan standar risiko dinas setempat demi keamanan aset dan hak operasional kerja yang berkelanjutan.",
      items: [
        { label: "NIB (Nomor Induk Berusaha)", sub: "Kunci akses tunggal semua aktivitas ekspor-impor (API-U) & operasional." },
        { label: "Izin Lingkungan SPPL", sub: "Pernyataan pengelolaan dampak lingkungan wajib bagi usaha kategori risiko rendah-menengah." },
        { label: "PBG & SLF Pendampingan", sub: "Persetujuan Bangunan Gedung dan Sertifikat Laik Fungsi fisik." },
        { label: "Izin Sektoral KBLI Teknis", sub: "Pendaftaran BPOM, Halal MUI, dan Dinas Kesehatan setempat." }
      ]
    },
    haki: {
      title: "Pendaftaran Hak Kekayaan Intelektual & Sertifikasi Standard Mutu",
      desc: "Perkuat hak eksklusif brand Anda di mata hukum dan tingkatkan standar manajemen internal agar siap melayani mitra internasional.",
      items: [
        { label: "Pendaftaran Merek & Hak Cipta", sub: "Melindungi logo, nama brand, & karya tulis digital dari pencurian kompetitor." },
        { label: "Sertifikasi ISO 9001:2015", sub: "Standar sistem manajemen mutu untuk melipatgandakan nilai jual di pasar." },
        { label: "Sertifikasi ISO 14001 & 45001", sub: "Sertifikat manajemen lingkungan serta kesehatan & keselamatan kerja korporasi." },
        { label: "Kepatuhan Hukum Berkelanjutan", sub: "Audit internal dokumen kepatuhan hukum untuk transaksi internasional." }
      ]
    }
  };

  const activeContent = contentMap[activeCategory];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800 text-white" id="solution-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-900/30">
            BUSINESS SOLUTIONS INTERFACE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Semua Solusi Legalitas dalam Satu Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            BikinLegal.com menyatukan seluruh infrastruktur legalitas, domisili kantor, izin teknis lingkungan, hingga sertifikasi paten dalam satu ekosistem terpadu.
          </p>
        </div>

        {/* Tab switcher buttons bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 _to-emerald-600 bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-900/60 border border-white/5 hover:bg-slate-850 text-slate-300'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content panels */}
        <div className="mt-10 glass rounded-3xl p-6 md:p-10 lg:p-12 text-left relative overflow-hidden">
          {/* Subtle decoration gradient */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 blur-[95px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left intro text info */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white leading-tight">
                {activeContent.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-400 font-sans">
                {activeContent.desc}
              </p>
              
              <div className="inline-flex items-center space-x-2 bg-emerald-950/20 border border-emerald-500/10 px-4 py-2.5 rounded-xl">
                <UserCheck className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Dukungan penuh tim legal dan notaris ahli kami.</span>
              </div>
            </div>

            {/* Right bullet lists cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeContent.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-950/40 border border-white/5 p-5 rounded-2xl flex items-start space-x-3 hover:border-slate-850 transition-colors"
                >
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-100 text-sm font-display tracking-wide">{item.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
