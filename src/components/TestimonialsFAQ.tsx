import React, { useState } from 'react';
import { MOCK_REVIEWS, FAQ_ITEMS } from '../data';
import { ClientReview } from '../types';
import { Star, ChevronDown, ChevronUp, Check, ShieldCheck, Sparkles, Plus } from 'lucide-react';

export default function TestimonialsFAQ() {
  const [reviews, setReviews] = useState<ClientReview[]>(MOCK_REVIEWS);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Review submission state
  const [newReview, setNewReview] = useState({
    name: '',
    company: '',
    role: '',
    stars: 5,
    content: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content || !newReview.company) return;

    const reviewObj: ClientReview = {
      name: newReview.name,
      company: newReview.company,
      role: newReview.role || 'Partner Usaha',
      stars: newReview.stars,
      content: newReview.content,
      date: 'Hari ini'
    };

    setReviews([reviewObj, ...reviews]);
    setSubmitSuccess(true);
    setNewReview({ name: '', company: '', role: '', stars: 5, content: '' });
    
    // Clear success banner after 4 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowForm(false);
    }, 4000);
  };

  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800 text-white" id="social-proof-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Proof Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-900/30">
            CLIENT SUCCESS & TRUST METRICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Dipercaya oleh Ribuan Usaha Sejak Berdiri
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Kami menjaga reputasi pertumbuhan bisnis klien kami. Mulai dari UMKM mandiri, pendiri teknologi, rintisan kreatif, hingga pengembang konstruksi besar.
          </p>
        </div>

        {/* Client trust logos mockups */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12 opacity-65 text-slate-400 text-xs font-mono tracking-widest uppercase">
          <span className="flex items-center space-x-1"><Check className="h-4 w-4 text-emerald-500" /> <span>UMKM PERAKITAN</span></span>
          <span className="flex items-center space-x-1"><Check className="h-4 w-4 text-emerald-500" /> <span>STARTUP FOUNDATIONS</span></span>
          <span className="flex items-center space-x-1"><Check className="h-4 w-4 text-emerald-500" /> <span>KONTRAKTOR BUMN</span></span>
          <span className="flex items-center space-x-1"><Check className="h-4 w-4 text-emerald-500" /> <span>AGEN EKSPOR</span></span>
        </div>

        {/* Reviews Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-start">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="glass p-6 md:p-8 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden"
            >
              {rev.date === 'Hari ini' && (
                <div className="absolute right-0 top-0 bg-emerald-500 text-slate-950 text-[10px] font-bold font-mono tracking-widest py-1 px-3 rounded-bl-xl uppercase">
                  Baru
                </div>
              )}

              <div className="space-y-4">
                {/* Stars widget */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star 
                      key={sIdx} 
                      className={`h-4 w-4 ${sIdx < rev.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`} 
                    />
                  ))}
                </div>

                <p className="text-xs md:text-sm leading-relaxed text-slate-300 font-sans italic min-h-[110px]">
                  “{rev.content}”
                </p>
              </div>

              {/* Author stack */}
              <div className="pt-4 mt-6 border-t border-white/5 flex justify-between items-end">
                <div>
                  <span className="block text-sm font-bold font-display text-slate-100">{rev.name}</span>
                  <span className="block text-[11px] text-slate-400 font-mono tracking-wider">{rev.role} — {rev.company}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave testimony interactive widget form */}
        <div className="max-w-2xl mx-auto mt-10">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 mx-auto text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-all bg-slate-950/40 border border-white/5 py-3 px-6 rounded-xl cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Tulis Pengalaman Legalitas Anda</span>
            </button>
          ) : (
            <form onSubmit={handleReviewSubmit} className="glass rounded-2xl p-6 md:p-8 text-left space-y-4 shadow-xl">
              <h4 className="text-base font-bold font-display text-white flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
                <span>Bagikan Ulasan Kamu Seberapa Cepat Prosedur Notaris Kami</span>
              </h4>

              {submitSuccess && (
                <div className="p-3 bg-emerald-950/50 border border-emerald-900/40 text-emerald-300 text-xs rounded-xl flex items-center space-x-2">
                  <ShieldCheck className="h-4.5 w-4.5" />
                  <span>Ulasan Anda sukses ditambahkan ke live list utama! Terimakasih.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-1 font-semibold">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 rounded-xl px-4 py-2 text-xs focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-1 font-semibold">Nama Perusahaan / CV</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: PT Kreatif Nusantara"
                    value={newReview.company}
                    onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 rounded-xl px-4 py-2 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-1 font-semibold">Jabatan Anda</label>
                  <input
                    type="text"
                    placeholder="Contoh: Owner / Managing Director"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 rounded-xl px-4 py-2 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-1 font-semibold">Rating Bintang</label>
                  <select
                    value={newReview.stars}
                    onChange={(e) => setNewReview({ ...newReview, stars: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 rounded-xl px-4 py-2 text-xs focus:outline-none cursor-pointer"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Bintang)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Bintang)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-1 font-semibold">Ulasan Singkat</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Ceritakan seberapa cepat dan terbantu kepatuhan usahamu di BikinPT.id..."
                  value={newReview.content}
                  onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 rounded-xl px-4 py-2 text-xs focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-slate-900 border border-white/5 text-xs font-semibold rounded-lg hover:bg-slate-850 transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-emerald-600 transition-all cursor-pointer shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                >
                  Submit Ulasan
                </button>
              </div>
            </form>
          )}
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-28 border-t border-white/5 pt-16 max-w-4xl mx-auto text-left space-y-8" id="faq-section">
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase font-bold">RELIABILITY RESOLUTIONS</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Pertanyaan Terdaftar yang Sering Diajukan (FAQ)</h3>
            <p className="text-xs md:text-sm text-slate-400 font-sans">
              Segala kekhawatiran administrasi Anda sebelum memulai pendaftaran CV/PT kami bahas lugas berikut ini.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-250 cursor-pointer select-none"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex justify-between items-center p-5 md:p-6 hover:bg-slate-950/60 transition-colors">
                    <span className="font-bold text-slate-100 text-sm md:text-base font-display tracking-wide">{item.q}</span>
                    {isOpen ? <ChevronUp className="h-5 w-5 text-emerald-400 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />}
                  </div>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 bg-slate-950/60 text-slate-300 font-sans text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
