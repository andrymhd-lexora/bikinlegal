import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Home, MessageSquare, ArrowLeft, Bot, User, RefreshCw, Check, AlertCircle } from 'lucide-react';

const logoIconImg = '/logo_icon.jpg';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'home' | 'chat'>('home');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Halo! Saya adalah **BikinLegal.com Legal Advisor AI**.\n\nSaya siap membantu Anda menganalisis kebutuhan pendirian **PT, CV, PT Perorangan, Virtual Office, Sertifikasi Halal, SPPL, PBG, SLF, hingga HAKI Merek di Indonesia**.\n\nSilakan ketik pertanyaan Anda di bawah, atau klik tombol **Lanjut ke WhatsApp** kapan saja untuk langsung dibantu konsultan manusia!",
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "Apa beda PT, CV, & PT Perorangan?",
    "Makanan F&B butuh izin halal apa saja?",
    "Bagaimana aturan zonasi Virtual Office?",
    "Berapa biaya pengurusan HAKI Merek?"
  ];

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    // If opening, default to home view or reset states nicely
    if (!isOpen) {
      setErrorMsg(null);
    }
  };

  const handleStartWhatsAppDirect = () => {
    const text = encodeURIComponent('Halo BikinLegal.com, saya tertarik berkonsultasi mengenai perizinan legalitas bisnis saya.');
    window.open(`https://wa.me/6285830831654?text=${text}`, '_blank');
  };

  const handleStartWhatsAppWithContext = () => {
    // Get last user question or last conversation content to send to WhatsApp
    const userMsgs = messages.filter(m => m.role === 'user');
    const lastQuestion = userMsgs.length > 0 ? userMsgs[userMsgs.length - 1].text : '';
    
    let text = 'Halo BikinLegal.com, saya ingin berkonsultasi mengenai perizinan legalitas bisnis saya.';
    if (lastQuestion) {
      text = `Halo BikinLegal.com, saya ingin melanjutkan konsultasi dari AI Chat mengenai:\n\n"${lastQuestion}"\n\nMohon dibantu informasi selengkapnya. Terima kasih!`;
    }
    
    window.open(`https://wa.me/6285830831654?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (viewMode === 'chat' && isOpen) {
      scrollToBottom();
    }
  }, [messages, loading, viewMode, isOpen]);

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
        throw new Error("Gagal mengambil respon dari server.");
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
      setErrorMsg("Koneksi bermasalah atau kuota AI penuh. Silakan klik tombol 'Lanjut ke WhatsApp' di atas untuk respon instan dari CS kami.");
    } finally {
      setLoading(false);
    }
  };

  const formatMessageText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      let content: React.ReactNode = line;
      
      const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      const parts = cleanLine.split('**');
      if (parts.length > 1) {
        content = parts.map((part, pIdx) => {
          return pIdx % 2 === 1 ? <strong key={pIdx} className="text-emerald-300 font-bold">{part}</strong> : part;
        });
      }

      if (line.trim().startsWith('### ')) {
        return <h5 key={lIdx} className="text-xs font-bold font-display text-white mt-2 mb-1">{line.trim().substring(4)}</h5>;
      }

      if (isBullet) {
        return (
          <li key={lIdx} className="ml-3 list-disc text-xs text-slate-200 leading-relaxed font-sans mb-1">
            {content}
          </li>
        );
      }

      return (
        <p key={lIdx} className="text-xs text-slate-200 leading-relaxed font-sans mb-1.5 last:mb-0">
          {content}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-[360px] max-w-[calc(100vw-2rem)] bg-slate-950 rounded-[2rem] shadow-2xl overflow-hidden mb-4 border border-white/10 text-white flex flex-col select-none"
            id="whatsapp-chat-box"
          >
            {viewMode === 'home' ? (
              /* =======================================
                 1. HOME SCREEN (Looks like Tawk.to / Live Chat Dashboard)
                 ======================================= */
              <div className="flex flex-col">
                {/* Header (Green Area) */}
                <div className="bg-emerald-500 p-8 pb-10 text-center flex flex-col items-center relative rounded-b-[2rem]">
                  {/* Brand Logo */}
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-1.5 shadow-lg border border-white/20 mb-5 relative">
                    <img
                      src={logoIconImg}
                      alt="BikinLegal.com Logo"
                      className="w-full h-full object-contain rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                  </div>

                  {/* Dynamic greeting text matching the reference screenshot */}
                  <h3 className="text-lg font-bold tracking-tight leading-snug max-w-[260px] mx-auto text-white">
                    We are live and ready to chat with you now.
                  </h3>
                  <p className="text-xs text-emerald-100/80 mt-1.5 font-medium">
                    Say something to start a live chat.
                  </p>

                  {/* Close button top right */}
                  <button
                    onClick={toggleWidget}
                    className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                    title="Tutup"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* Interactive Card: "New Conversation" opens the Interactive AI chat state */}
                <div className="px-5 -mt-5 relative z-10">
                  <button
                    onClick={() => setViewMode('chat')}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-left rounded-2xl p-5 shadow-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group border border-white/5"
                  >
                    <div className="space-y-1">
                      <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        Mulai Tanya AI Advisor
                      </span>
                      <span className="block text-[11px] text-slate-400 font-medium">
                        Respon cepat dibantu asisten AI resmi kami
                      </span>
                    </div>
                    <div className="w-9 h-9 bg-emerald-950/40 border border-emerald-500/30 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <Send className="h-4 w-4 text-emerald-400 group-hover:text-slate-950 transition-colors rotate-45 -translate-x-0.5 translate-y-0.5" />
                    </div>
                  </button>
                </div>

                {/* Direct WhatsApp Option Card */}
                <div className="px-5 mt-3">
                  <button
                    onClick={handleStartWhatsAppDirect}
                    className="w-full bg-emerald-950/20 hover:bg-emerald-950/40 text-left rounded-2xl p-4 border border-emerald-500/15 flex items-center space-x-3.5 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                      <MessageCircle className="h-5 w-5 text-emerald-400 group-hover:text-slate-950 fill-emerald-400/10" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-bold text-emerald-400">
                        Lanjut ke WhatsApp CS
                      </span>
                      <span className="block text-[10px] text-slate-400 truncate">
                        Terhubung instan dengan konsultan resmi
                      </span>
                    </div>
                  </button>
                </div>

                {/* Bottom Panel with Navigation Icons */}
                <div className="bg-slate-900 mt-6 px-8 py-4 border-t border-white/5 flex items-center justify-around text-slate-400">
                  <button
                    onClick={() => setViewMode('home')}
                    className="flex flex-col items-center space-y-1 text-emerald-400 transition-colors cursor-pointer"
                    title="Home"
                  >
                    <Home className="h-5.5 w-5.5" />
                  </button>

                  <button
                    onClick={() => setViewMode('chat')}
                    className="flex flex-col items-center space-y-1 hover:text-emerald-400 text-slate-500 transition-colors cursor-pointer"
                    title="Chat"
                  >
                    <MessageSquare className="h-5.5 w-5.5" />
                  </button>
                </div>

                {/* Powered by */}
                <div className="bg-slate-950 py-2.5 text-center text-[10px] text-slate-500 font-mono border-t border-white/5">
                  Powered by BikinLegal.com CS
                </div>
              </div>
            ) : (
              /* =======================================
                 2. INTERACTIVE AI CHAT VIEW (Supports live AI queries & forward to WA)
                 ======================================= */
              <div className="flex flex-col h-[520px]">
                
                {/* Chat Header */}
                <div className="bg-slate-900 border-b border-white/5 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <button
                      onClick={() => setViewMode('home')}
                      className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Kembali ke Menu"
                    >
                      <ArrowLeft className="h-4.5 w-4.5" />
                    </button>
                    <div className="w-8 h-8 rounded-lg overflow-hidden border border-emerald-500/20 bg-slate-950 flex items-center justify-center p-0.5 relative">
                      <img
                        src={logoIconImg}
                        alt="AI"
                        className="w-full h-full object-contain rounded"
                      />
                      <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 border border-slate-900" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">Legal AI Advisor</span>
                      <span className="block text-[9px] text-emerald-400 font-mono tracking-wider uppercase font-semibold">Active Support</span>
                    </div>
                  </div>

                  <button
                    onClick={toggleWidget}
                    className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Tutup"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* Persistent WhatsApp Call-To-Action Banner inside chat */}
                <div className="bg-gradient-to-r from-emerald-950/40 to-slate-950 px-4 py-2 border-b border-emerald-500/10 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-medium">Buntu? Lanjut di WhatsApp kami</span>
                  </div>
                  <button
                    onClick={handleStartWhatsAppWithContext}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center space-x-1 transition-all active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="h-3 w-3 fill-slate-950 text-slate-950" />
                    <span>Lanjut WA</span>
                  </button>
                </div>

                {/* Messages List Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-2`}
                    >
                      {m.role === 'model' && (
                        <div className="w-6.5 h-6.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 mt-1">
                          <Bot className="h-3.5 w-3.5" />
                        </div>
                      )}
                      
                      <div className="flex flex-col max-w-[82%]">
                        <div
                          className={`p-3 rounded-2xl text-xs font-sans ${
                            m.role === 'user'
                              ? 'bg-emerald-500 text-slate-950 font-medium rounded-tr-none'
                              : 'bg-slate-900 text-slate-200 border border-white/5 rounded-tl-none'
                          }`}
                        >
                          {m.role === 'user' ? m.text : formatMessageText(m.text)}
                        </div>
                        <span className="text-[9px] text-slate-500 mt-1 self-end font-mono">
                          {m.timestamp}
                        </span>
                      </div>

                      {m.role === 'user' && (
                        <div className="w-6.5 h-6.5 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center flex-shrink-0 text-slate-400 mt-1">
                          <User className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </div>
                  ))}

                  {loading && (
                    <div className="flex justify-start items-start space-x-2">
                      <div className="w-6.5 h-6.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 animate-spin mt-1">
                        <RefreshCw className="h-3.5 w-3.5" />
                      </div>
                      <div className="p-3 bg-slate-900 text-slate-400 border border-white/5 rounded-2xl rounded-tl-none text-xs italic font-sans flex items-center space-x-1.5">
                        <span>Menyelaraskan regulasi...</span>
                      </div>
                    </div>
                  )}

                  {errorMsg && (
                    <div className="p-3 bg-red-950/30 border border-red-500/20 text-red-300 rounded-xl text-xs flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggested Chips (Show if messages list is short or to help prompt) */}
                {messages.length < 3 && !loading && (
                  <div className="px-4 pb-2.5 flex flex-wrap gap-1.5">
                    {suggestedPrompts.map((chipText, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => handleSend(chipText)}
                        className="text-[10px] text-left text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/5 px-2.5 py-1 rounded-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                      >
                        {chipText}
                      </button>
                    ))}
                  </div>
                )}

                {/* Bottom Input Area */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(input);
                  }}
                  className="bg-slate-900 border-t border-white/5 p-3 flex items-center space-x-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Tulis pertanyaan legalitas..."
                    className="flex-1 bg-slate-950 text-xs border border-white/5 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-2.5 rounded-xl transition-all active:scale-95 cursor-pointer flex-shrink-0 disabled:opacity-50"
                    disabled={loading || !input.trim()}
                  >
                    <Send className="h-3.5 w-3.5 text-slate-950 fill-slate-950 rotate-45 -translate-x-0.5 translate-y-0.5" />
                  </button>
                </form>

              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Action Button (FAB) */}
      <button
        onClick={toggleWidget}
        className="flex items-center justify-center w-15 h-15 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative group"
        id="whatsapp-fab"
        title="Hubungi CS Kami"
      >
        {/* Pulsing ring animation when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        
        {/* Toggle icon animation */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6 text-slate-950" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6 text-slate-950 fill-slate-950" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

    </div>
  );
}
