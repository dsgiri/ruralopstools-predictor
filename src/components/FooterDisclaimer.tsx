import React from 'react';

interface FooterDisclaimerProps {
  onNavigateToDisclaimer?: () => void;
}

export function FooterDisclaimer({ onNavigateToDisclaimer }: FooterDisclaimerProps) {
  return (
    <div className="w-full text-center text-xs text-slate-500 mt-8 pt-6 border-t border-slate-100 max-w-4xl mx-auto leading-relaxed">
      <p>
        <strong>Site Disclaimer:</strong> These figures and model outputs are estimates based on standard assumptions. This site is for informational purposes only and does not replace professional advice. We disclaim all liability for decisions arising from reliance on these results.
        {' '}
        {onNavigateToDisclaimer ? (
          <button onClick={onNavigateToDisclaimer} className="hover:text-[#2d5a27] underline transition-colors focus:outline-none">Read full disclaimer</button>
        ) : (
          <a href="https://ruralopstools.com/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a27] underline transition-colors focus:outline-none">Read full disclaimer</a>
        )}
      </p>
    </div>
  );
}
