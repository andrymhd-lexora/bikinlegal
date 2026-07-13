import React, { useState } from 'react';
import { AlertCircle, FileX, Landmark, Activity, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState<'problem' | 'impact'>('problem');

  const challenges = [
    {
      icon: <FileX className="h-6 w-6 text-red-400" />,
      title: "Proses OSS yang Membingungkan",
      desc: "Menyusun Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) yang tidak sesuai mengakibatkan perizinan usaha tidak berjalan atau terhambat verifikasi.",
      mitigation: "BikinLegal.com menganalisis KBLI yang presisi sesuai sektor usaha riil Anda untuk meminimalkan revisi OSS RBA."
    },
    {
      icon: <Landmark className="h-6 w-6 text-red-400" />,
      title: "Tidak Tahu Jenis Izin yang Dibutuhkan",
      desc: "Perbedaan risiko usaha (Rendah, Menengah, Tinggi) membutuhkan dokumen teknis bertingkat seperti UKL-UPL, SPPL, PBG, atau SLF yang sulit dinavigasi.",
      mitigation: "Tim ahli kami memandu kepatuhan bertahap agar tidak ada denda administrasi atau penyegelan tempat proyek."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-400" />,
      title: "Salah Input data → Otomatis Ditolak Sistem",
      desc: "Kesalahan nama PT, persentase modal dasar, susunan pengurus, atau zonasi wilayah berakibat penolakan instan oleh Ditjen Kemenkumham.",
      mitigation: "Sertifikasi pra-input draft akta notaris menjamin data lolos validasi pada pengajuan pertama."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-400" />,
      title: "Proses Lama, Berbelit & Biaya Tidak Pasti",
      desc: "Mengurus sendiri seringkali menghabiskan waktu berbulan-bulan berpindah dari notaris ke birokrat, dengan biaya tidak terduga di tengah jalan.",
      mitigation: "Sistem One-Stop Legal Platform kami memberikan estimasi harga pasti di muka & pemantauan berkas selesai tepat waktu."
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-900" id="problem-section">
      <div className="absolute inset-0 bg-radial-gradient-bottom opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase bg-red-950/40 px-3 py-1 rounded-full border border-red-900/30">
            EMPATHY TRIGGER & BARRIER ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Kenapa 80% Pengusaha Gagal di Tahap Legalitas?
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Mendirikan badan hukum di Indonesia rentan terhambat hambatan administratif. Ketahui tantangan utama sebelum Anda memulai langkah bisnis Anda.
          </p>
        </div>

        {/* Dynamic Selector Toggle */}
        <div className="flex justify-center mt-10">
          <div className="bg-slate-900/80 p-1 rounded-xl border border-slate-800/80 flex">
            <button
              onClick={() => setActiveTab('problem')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'problem'
                  ? 'bg-red-500 text-slate-950 shadow-[0_0_15px_rgba(239,68,68,0.3)] font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tantangan Administratif
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'impact'
                  ? 'bg-red-500 text-slate-950 shadow-[0_0_15px_rgba(239,68,68,0.3)] font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dampak Fatal Bagi Bisnis
            </button>
          </div>
        </div>

        {activeTab === 'problem' ? (
          /* Grid of challenges and integrated solutions */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {challenges.map((challenge, idx) => (
              <div 
                key={idx} 
                className="glass p-6 md:p-8 rounded-2xl hover:border-slate-700/60 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-red-950/40 rounded-xl group-hover:scale-105 transition-transform border border-red-500/10">
                      {challenge.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-100">{challenge.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400 font-sans">{challenge.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-start space-x-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-emerald-400/90 font-sans leading-relaxed text-left">
                      <strong className="text-emerald-400">Solusi BikinLegal.com:</strong> {challenge.mitigation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Red Banner: Akibat Fatal */
          <div className="mt-12 bg-gradient-to-r from-red-950/20 via-slate-950 to-slate-950 border border-red-900/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 top-0 opacity-10 pointer-events-none">
              <Activity className="w-96 h-96 text-red-500" />
            </div>
            <div className="max-w-2xl relative z-10 space-y-6 text-left">
              <div className="flex items-center space-x-2 text-red-400">
                <AlertCircle className="h-6 w-6 stroke-[2.5]" />
                <span className="font-mono text-sm font-bold uppercase tracking-wider">Peringatan Kepatuhan</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-100">
                “Bisnis tidak bisa berkembang, tersingkir dari tender, dan ditolak investor.”
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Tanpa legalitas resmi dan akurat yang tervalidasi oleh Kemenkumham dan sistem OSS RBA, bisnis Anda berisiko besar mengalami hambatan hukum:
              </p>

              <ul className="text-xs space-y-2 text-slate-400 font-mono">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 bg-red-500 rounded-full" />
                  <span>Denda administrasi pajak badan usaha yang menumpuk.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 bg-red-500 rounded-full" />
                  <span>Kegagalan verifikasi pembukaan rekening bank syariah/nasional.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 bg-red-500 rounded-full" />
                  <span>Gugurnya hak kepemilikan merek dagang karena ditiru kompetitor lebih dulu.</span>
                </li>
              </ul>

              <div className="pt-4 flex items-center space-x-3">
                <span className="text-sm font-semibold text-emerald-400">Mulailah dengan Benar bersama Kami</span>
                <span className="h-px bg-slate-800 flex-grow" />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
