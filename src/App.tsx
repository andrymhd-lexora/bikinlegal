import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionTabs from './components/SolutionTabs';
import CustomerIndustryGuide from './components/IndustryGuide';
import PricingCalculator from './components/PricingCalculator';
import AIConsultant from './components/AIConsultant';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Type definitions internally
import { DiagnosticResult, BusinessIndustry } from './types';
import { Sparkles, ArrowRight, ShieldCheck, Landmark, Check, HelpCircle, Phone, Globe, Workflow, MessageCircle } from 'lucide-react';

export default function App() {
  // Navigation triggering callbacks
  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAIConsult = () => {
    const el = document.getElementById('ai-assistant-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDiagnostics = () => {
    const el = document.getElementById('diagnostics-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Interactive Diagnostic Wizard State
  const [diagStep, setDiagStep] = useState<1 | 2 | 3 | 'result'>(1);
  const [diag, setDiag] = useState<DiagnosticResult>({
    industry: 'tech',
    capitalSize: 'micro',
    readyToProceed: true,
    fullName: '',
    phone: '',
    needsSpace: false,
    recommendedPackageId: 'starter'
  });

  const runDiagnosticRecommend = () => {
    let pkg = 'starter';
    if (diag.capitalSize === 'large' || diag.industry === 'construction') {
      pkg = 'premium';
    } else if (diag.capitalSize === 'medium' || diag.needsSpace) {
      pkg = 'business';
    }
    setDiag(prev => ({ ...prev, recommendedPackageId: pkg }));
    setDiagStep('result');
  };

  const getPackageDetailedName = (id: string) => {
    if (id === 'premium') return 'ENTERPRISE COMPLETE (Bundling Lengkap Hukum & Web)';
    if (id === 'business') return 'PRO BUNDLE (Lengkap Dokumen & Identitas Visual)';
    return 'STANDAR BUNDLE (Dasar Hukum Utama & Validasi Kemenkumham)';
  };

  const getPackageDetailedPrice = (id: string) => {
    if (id === 'premium') return 'Rp 4.900.000';
    if (id === 'business') return 'Rp 4.400.000';
    return 'Rp 2.900.000';
  };

  const sendDiagnosticWhatsApp = () => {
    let text = `Halo BikinLegal.com, saya telah menyelesaikan kuisioner diagnosis sistem legalitas usaha:\n`;
    text += `- Nama: ${diag.fullName || 'User BikinLegal'}\n`;
    text += `- Sektor Bisnis: ${diag.industry.toUpperCase()}\n`;
    text += `- Skala Modal: ${diag.capitalSize.toUpperCase()}\n`;
    text += `- Kantor Fisik?: ${diag.needsSpace ? 'Ya, Butuh Ruko' : 'Tidak, Cukup Virtual Office'}\n`;
    text += `- Paket Direkomendasikan: *${getPackageDetailedName(diag.recommendedPackageId)}* (Mulai ${getPackageDetailedPrice(diag.recommendedPackageId)})\n\n`;
    text += `Mohon jadwal verifikasi KBLI kami oleh sekretaris hukum Anda. Terima kasih!`;

    window.open(`https://wa.me/6285830831654?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 pt-1">
      
      {/* 1. Header Navigation Bar */}
      <Navbar onAIChatClick={scrollToAIConsult} onPricingClick={scrollToPricing} />

      {/* 2. Hero segment (Impact / First 5 seconds) */}
      <Hero 
        onStartConsultation={scrollToDiagnostics} 
        onExplorePricing={scrollToPricing}
        onOpenAIAdvisor={scrollToAIConsult}
      />

      {/* 3. Interactive Diagnostic Tool (Cek Kebutuhan Legalitas Bisnis) */}
      <section className="py-20 bg-slate-950 border-b border-slate-900 text-left relative" id="diagnostics-section">
        {/* Decorative Grid background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_40%)]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-950/30">
              Interactive Diagnostic Wizard
            </span>
            <h2 className="text-3xl font-bold font-display tracking-tight text-white leading-tight">
              Cek Kebutuhan Legal Bisnismu Secara Instan
            </h2>
            <p className="text-sm text-slate-400 font-sans">
              Isi 3 pertanyaan di bawah ini untuk mendapatkan rancangan struktur badan usaha yang paling ideal bagi visi ekspansi bisnis Anda.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5">
              <Workflow className="h-64.5 w-64.5 text-blue-400" />
            </div>

            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <span className="text-xs font-mono font-bold text-slate-400">STATUS DIAGNOSIS:</span>
              <div className="flex space-x-2">
                <span className={`h-2.5 w-8 rounded-full ${diagStep === 1 ? 'bg-emerald-500' : 'bg-slate-850'}`} />
                <span className={`h-2.5 w-8 rounded-full ${diagStep === 2 ? 'bg-emerald-500' : 'bg-slate-850'}`} />
                <span className={`h-2.5 w-8 rounded-full ${diagStep === 3 ? 'bg-emerald-500' : 'bg-slate-850'}`} />
                <span className={`h-2.5 w-8 rounded-full ${diagStep === 'result' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-850'}`} />
              </div>
            </div>

            {/* Wizard Steps layout Panels */}
            {diagStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Langkah 1: Apa Sektor Usaha yang Ingin Anda Daftarkan?</h3>
                  <p className="text-xs text-slate-400 font-sans mt-1">Kami menggunakan ini untuk memetakan Klasifikasi KBLI dan tingkat risiko keamanan OSS RBA.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { id: 'tech', label: 'IT, Software & SaaS' },
                    { id: 'f&b', label: 'F&B, Kafe & Kuliner' },
                    { id: 'construction', label: 'Kontraktor & Konstruksi' },
                    { id: 'trading', label: 'Perdagangan & Ekspor' },
                    { id: 'tourism', label: 'Hotel & Sektor Wisata' },
                    { id: 'other', label: 'Jasa Kreatif & Umum' }
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setDiag({ ...diag, industry: ind.id as BusinessIndustry })}
                      className={`p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                        diag.industry === ind.id 
                          ? 'border-emerald-500/50 bg-emerald-500/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                          : 'border-white/5 bg-slate-950/30 text-slate-450 hover:border-white/10 hover:bg-slate-900/40 text-slate-300'
                      }`}
                    >
                      <span className="block text-xs font-bold font-display text-slate-100">{ind.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setDiagStep(2)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase flex items-center space-x-1.5 cursor-pointer shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    <span>Lanjutkan</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {diagStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Langkah 2: Berapa Estimasi Skala Modal Disetor Bisnis Anda?</h3>
                  <p className="text-xs text-slate-400 font-sans mt-1">Sistem OSS mengkategorikan skala usaha guna verifikasi pajak dan akreditasi pendaftaran.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { id: 'micro', label: 'Mikro (< Rp 1 Miliar)', desc: 'Cocok untuk PT Perorangan' },
                    { id: 'small', label: 'Kecil (Rp 1 - 5 Miliar)', desc: 'Ideal untuk PT biasa / CV' },
                    { id: 'medium', label: 'Menengah (Rp 5 - 10 M)', desc: 'Membuka KBLI Risiko Tinggi' },
                    { id: 'large', label: 'Besar / PMA (> Rp 10 M)', desc: 'Ekspor-Impor PMA besar' }
                  ].map((cap) => (
                    <button
                      key={cap.id}
                      onClick={() => setDiag({ ...diag, capitalSize: cap.id as any })}
                      className={`p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                        diag.capitalSize === cap.id 
                          ? 'border-emerald-500/50 bg-emerald-500/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                          : 'border-white/5 bg-slate-950/30 text-slate-450 hover:border-white/10 hover:bg-slate-900/40 text-slate-350'
                      }`}
                    >
                      <span className="block text-xs font-bold font-display text-slate-100">{cap.label}</span>
                      <span className="block text-[10px] text-slate-400 mt-1">{cap.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setDiagStep(1)}
                    className="border border-white/5 bg-slate-900/40 hover:bg-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-xs uppercase cursor-pointer"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setDiagStep(3)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase flex items-center space-x-1.5 cursor-pointer shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    <span>Lanjutkan</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {diagStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Langkah 3: Informasi Kontak & Layanan Domisili Kantor</h3>
                  <p className="text-xs text-slate-400 font-sans mt-1">Kami mendata ini untuk merancang draf pra-pendaftaran di database Kemenkumham KBLI.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-1 font-semibold">Nama Lengkap Pendiri</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Andry Mahardika"
                      value={diag.fullName}
                      onChange={(e) => setDiag({ ...diag, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-1 font-semibold">Tipe Sewa Domisili</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDiag({ ...diag, needsSpace: false })}
                        className={`py-3 rounded-xl border text-xs font-semibold cursor-pointer ${
                          !diag.needsSpace 
                            ? 'border-emerald-500/50 bg-emerald-500/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                            : 'border-white/5 bg-slate-950/30 text-slate-400 hover:border-white/10'
                        }`}
                      >
                        Virtual Office
                      </button>
                      <button
                        type="button"
                        onClick={() => setDiag({ ...diag, needsSpace: true })}
                        className={`py-3 rounded-xl border text-xs font-semibold cursor-pointer ${
                          diag.needsSpace 
                            ? 'border-emerald-500/50 bg-emerald-500/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                            : 'border-white/5 bg-slate-950/30 text-slate-400 hover:border-white/10'
                        }`}
                      >
                        Kantor Fisik / Ruko
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setDiagStep(2)}
                    className="border border-white/5 bg-slate-900/40 hover:bg-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-xs uppercase cursor-pointer"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={runDiagnosticRecommend}
                    disabled={!diag.fullName}
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 disabled:opacity-40 font-bold px-6 py-2.5 rounded-xl text-xs uppercase flex items-center space-x-1.5 cursor-pointer shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                  >
                    <span>Analisis Rekomendasi</span>
                    <Sparkles className="h-4 w-4 text-slate-950 fill-slate-950" />
                  </button>
                </div>
              </div>
            )}

            {diagStep === 'result' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <ShieldCheck className="h-6 w-6" />
                  <span className="font-mono text-sm font-bold uppercase tracking-wider">Hasil Analisis Sukses Dihitung</span>
                </div>

                <div className="bg-slate-950/40 border border-white/5 p-6 rounded-2xl text-left space-y-4">
                  <p className="text-sm font-sans text-slate-300">
                    Halo <strong className="text-white">{diag.fullName}</strong>, berdasarkan parameter sektor <strong className="text-emerald-400">{diag.industry.toUpperCase()}</strong> dan modal disetor skala <strong className="text-emerald-400">{diag.capitalSize.toUpperCase()}</strong>, berikut adalah struktur legalitas paling aman & sesuai regulasi OSS:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                    <div className="p-4 bg-slate-950/60 border border-white/5 rounded-xl">
                      <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Paket Pendirian Direkomendasikan</span>
                      <span className="font-bold text-slate-100 text-sm block mt-1">{getPackageDetailedName(diag.recommendedPackageId)}</span>
                    </div>

                    <div className="p-4 bg-slate-950/60 border border-white/5 rounded-xl">
                      <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Estimasi Harga Mulai</span>
                      <span className="font-bold text-emerald-400 text-sm block mt-1">{getPackageDetailedPrice(diag.recommendedPackageId)}</span>
                    </div>
                  </div>

                  <div className="pt-2 text-xs font-sans text-slate-400 leading-relaxed block bg-slate-950/20 p-4 rounded-xl border border-white/5">
                    💡 <strong>Analisis Tambahan:</strong> Sektor {diag.industry === 'tech' ? 'Portal Web IT wajib didaftarkan di portal Kominfo berupa Tanda Daftar PSE untuk menghindari pembatasan hosting portal.' : diag.industry === 'f&b' ? 'Kuliner diwajibkan menyertakan Izin Halal (selambat-lambatnya akhir tahun ini) guna memenuhi Undang-undang Jaminan Produk Halal.' : 'Konstruksi / Dagang Umum mewajibkan NPWP Badan tervalidasi KSWP agar NIB lolos sinkronisasi Bea Cukai.'}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                  <button
                    onClick={() => setDiagStep(1)}
                    className="border border-white/5 bg-slate-900/40 hover:bg-slate-800 text-slate-300 px-5 py-3 rounded-xl text-xs uppercase cursor-pointer"
                  >
                    Mulai Ulang Kuis
                  </button>
                  <button
                    onClick={sendDiagnosticWhatsApp}
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer hover:scale-[1.02] transition-transform"
                  >
                    <Phone className="h-4.5 w-4.5 fill-slate-950 stroke-none" />
                    <span>Klaim Hasil & Konsultasi Gratis</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 4. Problem section (Empathy Trigger) */}
      <ProblemSection />

      {/* 5. Solution block (Value Positioning) */}
      <SolutionTabs />

      {/* 6. Legal KBLI Sektor Guide */}
      <CustomerIndustryGuide />

      {/* 7. Service Packages Column & Pricing Custom Cost Calculator */}
      <PricingCalculator onSelectedPackage={(name) => {}} />

      {/* 8. AI Legal Consultant Chat Module (Server-side Gemini powered) */}
      <AIConsultant />

      {/* 9. Social Proof reviews & Collapsible FAQ disclosure cards */}
      <TestimonialsFAQ />

      {/* 10. Footer brand and disclaimer details */}
      <Footer />

      {/* WhatsApp Floating Action Widget (FAB with Chat dialog) */}
      <WhatsAppWidget />

    </div>
  );
}
