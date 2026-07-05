import React from 'react';
import { FooterDisclaimer } from './FooterDisclaimer';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          
          {/* Brand & Description (Left) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div>
              <span className="font-bold tracking-widest uppercase text-xs text-slate-700 block mb-1">predictor.ruralopstools.com</span>
              <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                Predictor is the model-based prediction and confidence hub, part of the <a href="https://ruralopstools.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-slate-800 font-medium transition-colors">Rural Ops Tools</a> ecosystem.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-[10px] uppercase tracking-widest font-semibold text-slate-400">
              <span>Data Refresh: 02:45 UTC</span>
              <span className="hidden sm:inline text-slate-200">|</span>
              <span>Model Engine: v2.4.1-stable</span>
            </div>
          </div>
          
          {/* Links & Copyright (Right) */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <a href="https://ruralopstools.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
                About
              </a>
              <a href="https://ruralopstools.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
                Contact
              </a>
              <a href="https://ruralopstools.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
                Privacy Policy
              </a>
              <a href="https://ruralopstools.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
                Terms of Use
              </a>
              <a href="https://ruralopstools.com/license" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
                License
              </a>
              <button onClick={() => onNavigate('disclaimer')} className="hover:text-[#2d5a27] transition-colors focus:outline-none">
                Disclaimer
              </button>
            </div>
            
            <div className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} Rural Ops Tools. All rights reserved.
            </div>
          </div>

        </div>
        
        <FooterDisclaimer onNavigateToDisclaimer={() => onNavigate('disclaimer')} />
      </div>
    </footer>
  );
}
