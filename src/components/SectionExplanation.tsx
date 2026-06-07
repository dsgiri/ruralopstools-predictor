import React from 'react';

export function SectionExplanation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-12 sm:my-16 border-t border-slate-200 pt-12 sm:pt-16">
      <div className="bg-white/50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-4">How predictions work</h3>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start">
            <span className="mr-2.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f4ef] text-[10px] font-bold text-[#2d5a27]">1</span>
            <span><strong>Historical patterns:</strong> Models are trained on decades of regional agricultural, weather, and market data.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f4ef] text-[10px] font-bold text-[#2d5a27]">2</span>
            <span><strong>Current inputs:</strong> Real-time weather, soil moisture, pricing, and crop staging update the baselines.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f4ef] text-[10px] font-bold text-[#2d5a27]">3</span>
            <span><strong>Model estimates:</strong> Algorithms generate probability curves, not absolute certainties.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f4ef] text-[10px] font-bold text-[#2d5a27]">4</span>
            <span><strong>Confidence levels:</strong> Evaluates how strong the signals are converging on a single outcome.</span>
          </li>
        </ul>
      </div>

      <div className="bg-white/50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-4">Limits and assumptions</h3>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start">
            <span className="mr-2 text-slate-400">•</span>
            <span><strong>Data dependencies:</strong> Predictions are only as accurate as the input data quality and frequency.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-slate-400">•</span>
            <span><strong>Regional variance:</strong> Micro-climates and localized soil variations can swing outcomes outside the predicted bands.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-slate-400">•</span>
            <span><strong>Horizon uncertainty:</strong> Predictions extending past 3 months naturally hold lower statistical confidence.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-slate-400">•</span>
            <span><strong>Decision support only:</strong> Outputs are designed to <em className="font-medium text-slate-900">support your judgment</em>, never replace it.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
