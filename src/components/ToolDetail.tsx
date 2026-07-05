import React, { useMemo } from 'react';
import { TOOLS } from '../data';
import { Badge } from './ui/Badge';
import { Heart, ArrowLeft, Info, AlertTriangle, PlayCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { ConfidenceChart } from './ConfidenceChart';
import { useSEO } from '../hooks/useSEO';
import { DisclaimerNotice } from './DisclaimerNotice';

interface ToolDetailProps {
  toolId: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onBack: () => void;
  onOpenTool: (id: string) => void; // for related tools
}

export function ToolDetail({ toolId, isFavorite, onToggleFavorite, onBack, onOpenTool }: ToolDetailProps) {
  const tool = useMemo(() => TOOLS.find(t => t.id === toolId), [toolId]);

  useSEO({
    title: tool ? `${tool.title} | RuralPredictor` : 'Tool Not Found | RuralPredictor',
    description: tool?.description || 'Detailed agricultural prediction model and insights.',
    keywords: tool ? `${tool.category.toLowerCase()}, ${tool.predictionType.toLowerCase()}, agricultural prediction model` : undefined
  });

  if (!tool) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-lg font-medium text-slate-800">Tool not found</p>
        <button onClick={onBack} className="mt-4 text-[#2d5a27] hover:underline">Go back</button>
      </div>
    );
  }

  const relatedTools = TOOLS.filter(t => tool.relatedToolIds.includes(t.id));

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <button 
        onClick={onBack}
        className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Hub
      </button>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 sm:p-8 md:p-12 border-b border-slate-100 bg-slate-50 relative">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="pr-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d5a27] bg-[#f0f4ef] px-2.5 py-1 rounded-full mb-3 inline-block">
                {tool.category.replace(' prediction', '').replace(' movement', '').replace(' / pest risk', '').replace(' risk', '')}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {tool.title}
              </h1>
            </div>
            <button
              onClick={(e) => onToggleFavorite(tool.id, e)}
              aria-label={isFavorite ? `Remove ${tool.title} from favorites` : `Add ${tool.title} to favorites`}
              className="absolute top-6 sm:top-8 md:top-12 right-6 sm:right-8 md:right-12 rounded-full p-2.5 sm:p-3 bg-white shadow-sm text-slate-400 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
            >
              <Heart 
                className={cn("h-5 w-5 sm:h-6 sm:w-6 transition-all", isFavorite ? "fill-red-500 text-red-500" : "fill-transparent")} 
              />
            </button>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-6 sm:mb-8">
            {tool.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="outline" className="bg-white px-3 py-1 font-mono text-sm shadow-sm">{tool.horizon} Horizon</Badge>
            <Badge variant={
              tool.confidence === 'High' ? 'success' : 
              tool.confidence === 'Medium' ? 'warning' : 'danger'
            } className="px-3 py-1 text-sm shadow-sm">
              {tool.confidence} Confidence Level
            </Badge>
            <Badge variant="outline" className="bg-white px-3 py-1 text-sm shadow-sm text-slate-600">
              {tool.predictionType}
            </Badge>
          </div>

          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#2d5a27] text-white rounded-xl font-bold text-lg hover:bg-[#23471e] transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:ring-offset-2">
            <PlayCircle className="h-6 w-6" />
            Launch Predictor
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          <div className="p-6 sm:p-8 md:p-12 lg:col-span-2">
            <section className="mb-10 sm:mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-[#2d5a27]" />
                <h2 className="text-2xl font-bold text-slate-900">Model Output & Confidence</h2>
              </div>
              <p className="text-slate-700 mb-6 font-medium leading-relaxed">
                {tool.predictionOutput}
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 mb-6">
                <h3 className="text-sm font-bold tracking-wide text-slate-500 uppercase mb-4">Uncertainty Band Projection (Example)</h3>
                <ConfidenceChart />
              </div>
              
              <DisclaimerNotice />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How this Model Works</h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                {tool.modelExplanation}
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">Key Assumptions</h3>
                    <ul className="list-disc list-inside space-y-2 text-amber-800">
                      {tool.assumptions.map((assumption, idx) => (
                        <li key={idx} className="leading-relaxed">{assumption}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="p-6 sm:p-8 md:p-12 bg-slate-50">
            <section className="mb-10 sm:mb-12">
              <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Inputs & Signals Used</h3>
              <ul className="space-y-3">
                {tool.inputsUsed.map((input, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-200/50 text-[10px] font-bold text-slate-600 border border-slate-300/50">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 font-medium">{input}</span>
                  </li>
                ))}
              </ul>
            </section>

            {relatedTools.length > 0 && (
              <section className="pt-8 border-t border-slate-200">
                <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-6">Related Predictors</h3>
                <div className="space-y-4">
                  {relatedTools.map(rt => (
                    <button
                      key={rt.id}
                      onClick={() => onOpenTool(rt.id)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-[#2d5a27]/30 hover:shadow-sm transition-all group"
                    >
                      <h4 className="font-bold text-slate-900 group-hover:text-[#2d5a27] truncate">{rt.title}</h4>
                      <p className="text-sm text-slate-500 mt-1 truncate">{rt.category}</p>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
