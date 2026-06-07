import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 text-sm text-slate-400">
            <span className="font-bold tracking-widest uppercase text-[10px] text-slate-500">predictor.ruralutilitycost.com</span>
            <div className="flex gap-4 text-[10px] uppercase tracking-widest font-medium">
              <span>Data Refresh: 02:45 UTC</span>
              <span className="hidden sm:inline">|</span>
              <span>Model Engine: v2.4.1-stable</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <a href="https://ruralutilitycost.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
              About Us
            </a>
            <a href="https://ruralutilitycost.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
              Contact Us
            </a>
            <a href="https://ruralutilitycost.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
              Privacy Policy
            </a>
            <a href="https://ruralutilitycost.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
              Terms of Use
            </a>
            <a href="https://ruralutilitycost.com/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Rural Utility Cost. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
