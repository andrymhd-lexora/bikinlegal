import React from 'react';
import { ShieldCheck, ArrowRight, Bot, Users, Globe, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartConsultation: () => void;
  onExplorePricing: () => void;
  onOpenAIAdvisor: () => void;
}

export default function Hero({ onStartConsultation, onExplorePricing, onOpenAIAdvisor }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" id="hero-section">
      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Core column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1.5 rounded-full">
              <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300 font-mono tracking-wide">
                100% Sesuai Regulasi OSS RBA Terbaru
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Bangun Bisnis Legal <br/>
              <span className="text-gradient font-black">
                Tanpa Ribet & Aman.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              Dapatkan izin usaha (<strong className="text-white">PT, CV, PT Perorangan</strong>) 100% sesuai regulasi OSS RBA dengan pendampingan tim ahli hukum profesional. <span className="text-emerald-400 font-semibold">Virtual Office</span> tersedia nasional.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onStartConsultation}
                className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <span>Konsultasi Gratis Sekarang</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={onExplorePricing}
                className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-750 text-white font-bold px-8 py-4 rounded-xl transition-all cursor-pointer"
              >
                <span>Cek Pilihan Paket</span>
              </button>
            </div>

            <button
              onClick={onOpenAIAdvisor}
              className="group flex items-center space-x-3 bg-slate-900/40 hover:bg-slate-800/40 border border-slate-800/50 px-4 py-3 rounded-xl transition-all text-left w-full sm:max-w-md cursor-pointer"
            >
              <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">Tanya Legal Advisor AI</span>
                <span className="text-sm text-slate-200">Ingin tahu syarat izin F&B, Konstruksi atau PT? Tanyakan disini</span>
              </div>
            </button>
          </div>

          {/* Graphical Trust Widget */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="glass rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              {/* Blur Glowing accent background */}
              <div className="absolute top-0 right-0 w-32 h-32 accent-gradient blur-[85px] opacity-25"></div>
              
              <div className="space-y-6 relative z-10">
                
                {/* Visual legal permit card */}
                <div className="border border-white/5 rounded-xl p-4 bg-slate-950/40 flex items-center space-x-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">Dokumen Hukum Terintegrasi</span>
                    <span className="font-semibold text-slate-100 text-sm">Akta Pendirian, SK & NIB Terbit</span>
                  </div>
                </div>

                <div className="border border-white/5 rounded-xl p-4 bg-slate-950/40 flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">Area Jangkauan Layanan</span>
                    <span className="font-semibold text-slate-100 text-sm">Melayani Seluruh Indonesia 🇮🇩</span>
                  </div>
                </div>

                {/* Simulated live tracker */}
                <div className="border border-white/5 rounded-xl p-4 bg-slate-950/20 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-300">Skor Kepuasan Klien Kami</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">99.7% Sukses</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-full w-[99.7%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                    <span>1,200+ PT Terdaftar</span>
                    <span>850+ CV Sukses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Trust Bars segment */}
        <div className="mt-16 md:mt-24 border-t border-slate-800/80 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <Award className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-100 font-display">Resmi & Berpengalaman</p>
                <p className="text-xs text-slate-400">Terdaftar di Kemenkumham RI</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start2">
              <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-100 font-display">100% Sesuai Regulasi</p>
                <p className="text-xs text-slate-400">Sertifikasi OSS RBA Aman</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <Globe className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-100 font-display">Seluruh Indonesia</p>
                <p className="text-xs text-slate-400">Melayani 38 Provinsi Nasional</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <Users className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-100 font-display">Ribuan Klien Terbantu</p>
                <p className="text-xs text-slate-400">Dari Toko UMKM hingga KSO</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
