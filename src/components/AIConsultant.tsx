import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Send, Bot, User, RefreshCw, Sparkles, CheckCircle, FileText, ChevronRight } from 'lucide-react';

export default function AIConsultant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Halo! Saya adalah **BikinLegal.com Legal Advisor AI**, asisten visual resmi BikinLegal.com. \n\nSaya menguasai regulasi pendaftaran **PT, CV, PT Perorangan, Virtual Office, Sertifikasi Halal, SPPL, PBG, SLF, hingga HAKI Merek di Indonesia**.\n\nAda yang bisa saya bantu atau analisis hari ini untuk mempermudah perizinan usahamu?",
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "Apa beda PT, CV, & PT Perorangan?",
    "Makanan F&B butuh izin halal & apa saja?",
    "Bagaimana aturan zonasi Virtual Office?",
    "Berapa lama proses pembuatan Akta Notaris?"
  ];

  // Prepared documents list
  const [prepCheck, setPrepCheck] = useState({
    ktp: false,
    npwp: false,
    namaBr: false,
    officeZon: false
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Gagal mengambil respon dari legal server kami.");
      }

      const data = await response.json();
      
      const serverMsg: ChatMessage = {
        id: data.message.id,
        role: data.message.role,
        text: data.message.text,
        timestamp: new Date(data.message.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, serverMsg]);
    } catch (e: any) {
      console.error(e);
      setErrorMsg("Koneksi gagal atau limit konsultasi terlampaui. Kamu bisa langsung klik tombol WhatsApp di kanan bawah untuk langsung terhubung dengan konsultan resmi manusia secara gratis!");
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: "Halo! Saya adalah **BikinLegal.com Legal Advisor AI**, asisten visual resmi BikinLegal.com. \n\nSaya menguasai regulasi pendaftaran **PT, CV, PT Perorangan, Virtual Office, Sertifikasi Halal, SPPL, PBG, SLF, hingga HAKI Merek di Indonesia**.\n\nAda yang bisa saya bantu atau analisis hari ini untuk mempermudah perizinan usahamu?",
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setErrorMsg(null);
  };

  // Convert markdown bold to JSX boldly
  const formatMessageText = (text: string) => {
    // Simple bold markdown formatter (**text**) and bullet tags
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      let content: React.ReactNode = line;
      
      // Look for bullet points
      const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      // Bold formatter
      const parts = cleanLine.split('**');
      if (parts.length > 1) {
        content = parts.map((part, pIdx) => {
          return pIdx % 2 === 1 ? <strong key={pIdx} className="text-emerald-300 font-bold">{part}</strong> : part;
        });
      }

      // Headers formats
      if (line.trim().startsWith('### ')) {
        return <h4 key={lIdx} className="text-base font-bold font-display text-white mt-4 mb-2">{line.trim().substring(4)}</h4>;
      }
      if (line.trim().startsWith('## ')) {
        return <h3 key={lIdx} className="text-lg font-bold font-display text-white mt-5 mb-3">{line.trim().substring(3)}</h3>;
      }

      if (isBullet) {
        return (
          <li key={lIdx} className="ml-4 list-disc text-sm text-slate-300 leading-relaxed font-sans mb-1">
            {content}
          </li>
        );
      }

      return (
        <p key={lIdx} className="text-sm text-slate-300 leading-relaxed font-sans mb-3">
          {content}
        </p>
      );
    });
  };

  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800 text-white" id="ai-assistant-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-900/30">
            INTELLIGENT DECISION ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Konsultasi Legal Instan dengan AI Advisor
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Dapatkan rekomendasi awal dokumen legal, pemetaan KBLI, serta perbandingan PT vs CV secara instan 24/7 sebelum memproses berkas resmi Anda bersama tim kami.
          </p>
        </div>

        {/* Outer Split Container layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          
          {/* Left panel instructions checklist */}
          <div className="lg:col-span-4 glass p-6 rounded-3xl text-left space-y-6 relative overflow-hidden">
            {/* Subtle light flair */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/5 blur-[75px] pointer-events-none"></div>
            
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">PREPARATION DECK</span>
              <h3 className="text-lg font-bold font-display text-white">Panduan Berkas Pendirian</h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Sebelum menandatangani Akta Notaris, periksa dokumen dasar berikut. Centang checklist untuk mengamankan progress Anda:
              </p>
            </div>

            {/* Checklist lists UI */}
            <div className="space-y-3 pt-2 relative z-10">
              <label className="flex items-start space-x-3 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={prepCheck.ktp} 
                  onChange={(e) => setPrepCheck({ ...prepCheck, ktp: e.target.checked })}
                  className="accent-emerald-500 rounded h-4 w-4 mt-0.5"
                />
                <span className={`text-xs ${prepCheck.ktp ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                  <strong>KTP Pengurus:</strong> KTP Direktur & Komisaris (Minimal 2 orang jika PT Reguler)
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={prepCheck.npwp} 
                  onChange={(e) => setPrepCheck({ ...prepCheck, npwp: e.target.checked })}
                  className="accent-emerald-500 rounded h-4 w-4 mt-0.5"
                />
                <span className={`text-xs ${prepCheck.npwp ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                  <strong>NPWP Pribadi:</strong> Wajib tervalidasi status Konfirmasi Status Wajib Pajak (KSWP)
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={prepCheck.namaBr} 
                  onChange={(e) => setPrepCheck({ ...prepCheck, namaBr: e.target.checked })}
                  className="accent-emerald-500 rounded h-4 w-4 mt-0.5"
                />
                <span className={`text-xs ${prepCheck.namaBr ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                  <strong>Opsi Nama PT:</strong> Siapkan minimal 3 penggalan kata bahasa Indonesia untuk dicek
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={prepCheck.officeZon} 
                  onChange={(e) => setPrepCheck({ ...prepCheck, officeZon: e.target.checked })}
                  className="accent-emerald-500 rounded h-4 w-4 mt-0.5"
                />
                <span className={`text-xs ${prepCheck.officeZon ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                  <strong>Bukti Domisili/Zonasi:</strong> Sertifikat ruko fisik komersial atau sewa Virtual Office kami
                </span>
              </label>
            </div>

            {/* Simulated legal info badge */}
            <div className="border border-white/5 p-4 rounded-2xl bg-slate-950/40 space-y-2 relative z-10">
              <div className="flex items-center space-x-2 text-emerald-400">
                <FileText className="h-4 w-4" />
                <span className="text-xs font-bold font-mono tracking-wider uppercase">Fasilitas Tambahan</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                Setiap pemesanan paket pendirian usaha di BikinLegal.com otomatis mendapatkan **free pengecekan merek & nama PT di Kemenkumham**.
              </p>
            </div>
          </div>

          {/* Right panel chat interactive block */}
          <div className="lg:col-span-8 glass rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[520px] relative">
            {/* Chat header banner */}
            <div className="bg-slate-950/40 p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl relative">
                  <Bot className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold font-display text-white">BikinLegal.com Legal AI Advisor</span>
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Consultation Engine v0.3</span>
                </div>
              </div>

              <button 
                onClick={resetChat}
                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Reset konsultasi"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>

            {/* Chat message flow container */}
            <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 text-left">
              {messages.map((msg) => {
                const isAI = msg.role === 'model';
                return (
                  <div 
                    key={msg.id}
                    className={`flex items-start space-x-3 max-w-[85%] ${isAI ? '' : 'ml-auto flex-row-reverse space-x-reverse'}`}
                  >
                    <div className={`p-2 rounded-xl flex-shrink-0 mt-1 ${isAI ? 'bg-slate-900 border border-white/5 text-emerald-400' : 'bg-emerald-950/60 text-white'}`}>
                      {isAI ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    
                    <div className={`rounded-2xl p-4 ${isAI ? 'bg-slate-950/40 text-slate-200 border border-white/5' : 'bg-emerald-950/30 text-white border border-emerald-900/40'}`}>
                      <div className="prose prose-invert prose-xs text-xs md:text-sm">
                        {formatMessageText(msg.text)}
                      </div>
                      <span className="text-[9px] text-slate-500 block text-right mt-1 font-mono tracking-widest">{msg.timestamp}</span>
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-slate-900 border border-white/5 text-emerald-400 rounded-xl">
                    <Bot className="h-4 w-4 animate-bounce" />
                  </div>
                  <div className="bg-slate-950/40 border border-white/5 text-slate-400 rounded-2xl p-4 text-xs font-sans italic flex items-center space-x-2">
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>BikinLegal.com Legal Advisor sedang menyelaraskan regulasi OSS...</span>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 bg-red-950/30 border border-red-900/40 text-red-300 text-xs rounded-2xl">
                  {errorMsg}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Smart Prompting stack */}
            <div className="px-4 py-2 border-t border-white/5 flex flex-wrap gap-1.5 justify-start bg-slate-950/20">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  disabled={loading}
                  className="text-[11px] bg-slate-900/60 hover:bg-slate-800 disabled:opacity-50 text-slate-300 px-3 py-1.5 rounded-full border border-white/5 transition-colors text-left font-sans cursor-pointer whitespace-nowrap"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Text input editor block */}
            <div className="p-4 bg-slate-950/60 border-t border-white/5 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Tulis pertanyaan legalitas usahamu disini... (e.g. Berapa modal PT?)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                disabled={loading}
                className="flex-grow bg-slate-950/80 border border-white/5 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim() || loading}
                className="p-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-slate-950 rounded-xl font-bold cursor-pointer transition-all flex-shrink-0 active:scale-95 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                <Send className="h-4.5 w-4.5 text-slate-950" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
