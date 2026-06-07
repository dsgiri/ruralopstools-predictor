import React from 'react';
import { PredictorTool } from '../types';
import { Badge } from './ui/Badge';
import { Heart, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ToolCardProps {
  tool: PredictorTool;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  onClick: () => void;
}

export function ToolCard({ tool, isFavorite, onToggleFavorite, onClick }: ToolCardProps) {
  const getCategoryTheme = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('crop')) return 'text-[#2d5a27] bg-[#f0f4ef]';
    if (lower.includes('livestock')) return 'text-blue-600 bg-blue-50';
    if (lower.includes('price') || lower.includes('demand')) return 'text-purple-600 bg-purple-50';
    if (lower.includes('disease') || lower.includes('pest') || lower.includes('risk')) return 'text-red-600 bg-red-50';
    if (lower.includes('weather')) return 'text-orange-600 bg-orange-50';
    return 'text-[#2d5a27] bg-[#f0f4ef]';
  };

  const getConfidenceBar = (level: string) => {
    if (level === 'High') {
      return <div className="w-full max-w-[6rem] h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="bg-green-500 w-[85%] h-full"></div></div>;
    }
    if (level === 'Medium') {
      return <div className="w-full max-w-[6rem] h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="bg-amber-500 w-[60%] h-full"></div></div>;
    }
    return <div className="w-full max-w-[6rem] h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="bg-red-500 w-[30%] h-full"></div></div>;
  };

  const formatCategory = (category: string) => {
    return category.replace(' prediction', '').replace(' movement', '').replace(' / pest risk', '').replace(' risk', '');
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative group cursor-pointer h-full"
    >
      <button
        onClick={onToggleFavorite}
        aria-label={isFavorite ? `Remove ${tool.title} from favorites` : `Add ${tool.title} to favorites`}
        className={cn("absolute top-5 right-5 transition-colors z-10", isFavorite ? "text-red-500" : "text-slate-300 hover:text-red-500")}
      >
        <Heart className={cn("h-5 w-5", isFavorite ? "fill-current" : "")} />
      </button>

      <div>
        <span className={cn("text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block", getCategoryTheme(tool.category))}>
          {formatCategory(tool.category)}
        </span>
        <h3 className="font-bold text-slate-800 mt-3 group-hover:text-[#2d5a27] transition-colors pr-8">
          {tool.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
      </div>

      <div className="flex items-end justify-between flex-1 border-t border-slate-50 pt-4 mt-2">
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-center justify-between text-[11px] font-medium">
            <div className="flex flex-col gap-1.5 w-1/2">
              <span className="text-slate-400 uppercase tracking-tighter">Confidence</span>
              {getConfidenceBar(tool.confidence)}
            </div>
            <div className="text-right w-1/2">
              <span className="text-slate-400 block uppercase tracking-tighter">Horizon</span>
              <span className="text-slate-700 block mt-0.5">{tool.horizon}</span>
            </div>
          </div>
        </div>
      </div>
      
      <button className="w-full py-2.5 mt-2 bg-[#2d5a27] text-white rounded-lg text-xs font-bold hover:bg-[#23471e] transition-colors group-hover:shadow-sm">
        Launch Tool
      </button>
    </div>
  );
}
