import React from 'react';

const logoIconImg = "/logo_icon.jpg";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showTagline = false, size = 'md' }: LogoProps) {
  // Size-specific dimensions
  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center space-x-3 text-left ${className}`} id="brand-logo">
      {/* High-fidelity Logo Icon from Reference */}
      <div className={`${iconSizes[size]} relative flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white shadow-md flex items-center justify-center p-0.5`}>
        <img
          src={logoIconImg}
          alt="BikinLegal.com Logo"
          className="w-full h-full object-contain rounded-lg"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span className={`font-display font-extrabold ${textSizes[size]} tracking-tight text-white`}>
            Bikin
          </span>
          <span className={`font-display font-black ${textSizes[size]} tracking-tight text-[#10b981]`}>
            Legal
          </span>
          <span className={`font-display font-extrabold ${textSizes[size]} tracking-tight text-slate-300`}>
            .com
          </span>
        </div>
      </div>
    </div>
  );
}
