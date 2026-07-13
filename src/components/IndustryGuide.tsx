import React, { useState } from 'react';
import { INDUSTRY_GUIDES } from '../data';
import { BusinessIndustry } from '../types';
import { Layers, Lightbulb, CheckCircle2, ChevronRight, HelpCircle, Bot } from 'lucide-react';

export default function IndustryGuide() {
  const [selectedIndustry, setSelectedIndustry] = useState<BusinessIndustry>('tech');

  const guide = INDUSTRY_GUIDES[selectedIndustry];

  const industries: { id: BusinessIndustry; label: string }[] = [
    { id: 'tech', label: 'IT & Startup' },
    { id: 'f&b', label: 'Kuliner & F&B' },
    { id: 'construction', label: 'Kontraktor' },
    { id: 'trading', label: 'Dagang & Ekspor' },
    { id: 'tourism', label: 'Pariwisata' },
    { id: 'other', label: 'Jasa Kreatif' }
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900 text-white" id="industry-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content bar */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-900/30">
            KBLI & COMPLIANCE SECTORS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Panduan Alur Legal Sesuai Sektor Bisnismu
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Setiap industri memiliki kode KBLI khusus dan instansi teknis yang berhak memverifikasi. Pilih sektor bisnis Anda untuk melihat detail izin pendukung wajib.
          </p>
        </div>

        {/* Industry pills buttons stack */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-5 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                selectedIndustry === ind.id
                  ? 'bg-gradient-to-r from-emerald-500 _to-emerald-600 bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-900/60 border border-white/5 hover:bg-slate-800 text-slate-300'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Selected Sector Layout */}
        <div className="mt-10 glass rounded-3xl p-6 md:p-10 text-left relative overflow-hidden">
          {/* Accent light highlight */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/5 blur-[95px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block bg-emerald-950/40 border border-emerald-900/30 w-fit px-2.5 py-1 rounded-md">
                  {guide.badge}
                </span>
                <h3 className="text-2xl font-bold font-display text-white">{guide.title}</h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed text-left">{guide.description}</p>
              </div>

              {/* KBLI hints */}
              <div className="bg-slate-950/40 border border-white/5 p-4 rounded-2xl space-y-2">
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider block">CONTOH KBLI YANG COCOK</span>
                <p className="text-xs font-mono font-medium text-emerald-400 leading-relaxed bg-emerald-950/10 p-2.5 rounded-lg border border-emerald-950/35">
                  {guide.kbliExamples}
                </p>
              </div>

              {/* Pro tips with Lightbulb */}
              <div className="bg-emerald-950/10 border border-emerald-500/10 p-4 rounded-xl flex items-start space-x-3">
                <Lightbulb className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-emerald-400">Tips Legalitas Pro:</span>
                  <p className="text-xs leading-relaxed text-slate-300 font-sans">{guide.tips}</p>
                </div>
              </div>
            </div>

            {/* Right steps timeline process */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">TAHAPAN IZIN OPERASIONAL WAJIB</h4>
              
              <div className="space-y-4">
                {guide.licenseSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-950/40 border border-white/5 rounded-2xl hover:border-slate-800 transition-colors">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="space-y-1 leading-relaxed text-left">
                      <p className="text-sm text-slate-200 font-semibold font-sans">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA call to direct support */}
              <div className="pt-4 flex items-center justify-between text-xs text-slate-400 font-mono font-semibold bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>NIB & Akta Legal Terbit kurang dari 7 Hari</span>
                </span>
                <a href="#custom-calculator" className="text-emerald-400 hover:text-emerald-300 flex items-center space-x-1">
                  <span>Inquire KBLI</span>
                  <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
