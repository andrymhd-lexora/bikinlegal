import React, { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Landmark, Heart } from 'lucide-react';
import Logo from './Logo';
import LegalModals from './LegalModals';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const openWhatsApp = () => {
    const text = encodeURIComponent('Halo BikinLegal.com, saya ingin berkonsultasi mengenai perizinan legalitas usaha.');
    window.open(`https://wa.me/6285830831654?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-left pt-16 pb-8 font-sans" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-6">
            <Logo size="md" showTagline={true} />

            <p className="text-xs md:text-sm leading-relaxed max-w-sm text-slate-400">
              BikinLegal.com adalah merek layanan dan produk dari PT. Bikin Legalitas Bisnis, penyedia infrastruktur legalitas, perizinan berusaha kementerian teknis, domisili zonasi bisnis, dan kepatuhan hukum korporasi terintegrasi di Indonesia.
            </p>

            <div className="flex flex-col space-y-2 text-xs font-mono">
              <span className="text-emerald-400">⚖️ Legal | 🚀 Scalable | 🇮🇩 Nationwide</span>
              <span className="text-slate-500">Izin Kemenkumham: AHU-0034689.AH.01.01.Tahun 2026</span>
            </div>
          </div>

          {/* Service Links Column */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white">Paket Legalitas</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#pricing-section" className="hover:text-emerald-400 transition-colors">Starter CV / PT Perorangan</a>
              </li>
              <li>
                <a href="#pricing-section" className="hover:text-emerald-400 transition-colors">Business Growth PT Umum</a>
              </li>
              <li>
                <a href="#pricing-section" className="hover:text-emerald-400 transition-colors">Corporate Premium ISO & HAKI</a>
              </li>
              <li>
                <a href="#custom-calculator" className="hover:text-emerald-400 transition-colors font-semibold text-emerald-400 flex items-center space-x-1">
                  <span>Custom Estimator</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Map Columns */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white">Hubungi Kami</h4>
            
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start space-x-3.5">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Kantor Pusat:</strong> Jl Bungur I Kebayoran Lama Jakarta Selatan
                </span>
              </li>

              <li className="flex items-center space-x-3.5">
                <Phone className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                <span className="cursor-pointer hover:text-emerald-400 transition-all font-mono" onClick={openWhatsApp}>
                  +62 858-3083-1654 (WhatsApp 24/7)
                </span>
              </li>

              <li className="flex items-center space-x-3.5">
                <Mail className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                <span className="font-mono">info@bikinlegal.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer credit & details */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
          <div className="text-slate-500 font-sans space-y-1 flex-grow">
            <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 text-slate-400">
              <p>
                © 2026 BikinLegal.com. All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-800">•</span>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-500 text-xs font-semibold"
                id="footer-terms-btn"
              >
                Syarat & Ketentuan
              </button>
              <span className="text-slate-800">•</span>
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-cyan-400 transition-colors cursor-pointer text-slate-500 text-xs font-semibold"
                id="footer-privacy-btn"
              >
                Kebijakan Privasi
              </button>
            </div>
            <p className="text-[10px] text-slate-600 pt-1">
              BikinLegal.com adalah merek terdaftar dan produk resmi dari PT. Bikin Legalitas Bisnis. Sistem ini beroperasi penuh dan berintegrasi dengan regulasi OSS RBA Kemenkumham Republik Indonesia.
            </p>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-600 font-mono text-[10px] flex-shrink-0">
            <span>Build with care for business builders nationwide</span>
          </div>
        </div>

        {/* Legal Modals */}
        <LegalModals type={activeModal} onClose={() => setActiveModal(null)} />


      </div>
    </footer>
  );
}
