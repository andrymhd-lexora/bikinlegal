import React, { useState } from 'react';
import { Shield, Phone, Menu, X, Landmark, Bot, HelpCircle } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onAIChatClick: () => void;
  onPricingClick: () => void;
}

export default function Navbar({ onAIChatClick, onPricingClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Halo BikinLegal.com, saya tertarik berkonsultasi mengenai perizinan legalitas bisnis saya.');
    window.open(`https://wa.me/6285830831654?text=${text}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5 text-white" id="main-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo Brand */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo size="sm" showTagline={true} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('problem-section')} 
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Tantangan Usaha
            </button>
            <button 
              onClick={() => scrollToSection('solution-section')} 
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Layanan legal
            </button>
            <button 
              onClick={() => scrollToSection('industry-section')} 
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Panduan KBLI
            </button>
            <button 
              onClick={onPricingClick} 
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Paket Harga
            </button>
            <button 
              onClick={onAIChatClick}
              className="flex items-center space-x-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/20 px-3 py-1.5 rounded-full border border-emerald-500/10 cursor-pointer"
            >
              <Bot className="h-4 w-4 animate-pulse" />
              <span>AI Legal Advisor</span>
            </button>
          </div>

          {/* Call to action & Menu Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="desktop-whatsapp-cta"
              onClick={openWhatsApp}
              className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-sm font-bold px-4 py-2.5 rounded-lg active:scale-95 transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)] font-sans"
            >
              <Phone className="h-4 w-4 text-slate-950 fill-slate-950" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection('problem-section')}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Tantangan Usaha
          </button>
          <button
            onClick={() => scrollToSection('solution-section')}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Layanan Legal
          </button>
          <button
            onClick={() => scrollToSection('industry-section')}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Panduan KBLI
          </button>
          <button
            onClick={onPricingClick}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Paket Harga
          </button>
          <button
            onClick={() => { setIsOpen(false); onAIChatClick(); }}
            className="flex items-center space-x-2 w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-emerald-400 hover:bg-emerald-950/20"
          >
            <Bot className="h-5 w-5" />
            <span>AI Legal Advisor (Tanya AI)</span>
          </button>
          <div className="pt-2">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center space-x-2 w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-lg shadow-lg"
            >
              <Phone className="h-5 w-5 fill-slate-950" />
              <span>WhatsApp Hub 24/7</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
