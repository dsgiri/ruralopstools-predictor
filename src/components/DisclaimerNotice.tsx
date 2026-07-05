import React from 'react';
import { DISCLAIMER_TEXT } from '../constants/legal';
import { AlertCircle } from 'lucide-react';

interface DisclaimerNoticeProps {
  text?: string;
  className?: string;
  variant?: 'short' | 'standard';
  toolSpecificText?: string;
}

export function DisclaimerNotice({ 
  text, 
  className = '', 
  variant = 'standard',
  toolSpecificText
}: DisclaimerNoticeProps) {
  const baseText = text || DISCLAIMER_TEXT[variant];
  const fullText = toolSpecificText ? `${baseText} ${toolSpecificText}` : baseText;

  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm leading-relaxed ${className}`}>
      <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
      <div>
        <p><strong>{variant === 'short' ? 'Notice:' : 'Disclaimer:'}</strong> {fullText.replace(/^Disclaimer:\s*/, '')}</p>
      </div>
    </div>
  );
}
