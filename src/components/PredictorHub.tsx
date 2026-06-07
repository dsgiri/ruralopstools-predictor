import React, { useState, useMemo } from 'react';
import { TOOLS } from '../data';
import { ToolCategory } from '../types';
import { ToolCard } from './ToolCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { SectionExplanation } from './SectionExplanation';

interface PredictorHubProps {
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onOpenTool: (id: string) => void;
}

const CATEGORIES: ToolCategory[] = [
  'Crop prediction',
  'Livestock prediction',
  'Input demand prediction',
  'Price movement prediction',
  'Yield risk prediction',
  'Weather-linked prediction',
  'Disease / pest risk prediction'
];

type SortOption = 'newest' | 'mostUsed' | 'alphabetical';

export function PredictorHub({ favorites, onToggleFavorite, onOpenTool }: PredictorHubProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'All'>('All');
  const [sortBy, setSortBy] = useState<SortOption>('mostUsed');

  const filteredAndSortedTools = useMemo(() => {
    let result = TOOLS;

    if (selectedCategory !== 'All') {
      result = result.filter(t => t.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'newest') {
        return (a.newest === b.newest) ? 0 : a.newest ? -1 : 1;
      }
      if (sortBy === 'mostUsed') {
        return (a.mostUsed === b.mostUsed) ? 0 : a.mostUsed ? -1 : 1;
      }
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const favoritesList = useMemo(() => {
    return TOOLS.filter(t => favorites.includes(t.id));
  }, [favorites]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
          Prediction & Insight Hub
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Access model-driven predictions for crops, livestock, and markets. 
          Use these insights to estimate likely outcomes with measured confidence bands.
        </p>
      </div>

      {favoritesList.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Your Favorites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoritesList.map(tool => (
              <ToolCard 
                key={`fav-${tool.id}`}
                tool={tool}
                isFavorite={true}
                onToggleFavorite={(e) => onToggleFavorite(tool.id, e)}
                onClick={() => onOpenTool(tool.id)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <div className="relative w-full sm:max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm focus:border-[#2d5a27] focus:outline-none focus:ring-1 focus:ring-[#2d5a27] transition-colors"
            placeholder="Search tools by name, category, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-slate-500 hidden sm:block" />
            <select
              className="block w-full sm:w-auto rounded-xl border border-slate-300 bg-white py-3 pl-3 pr-8 text-sm focus:border-[#2d5a27] focus:outline-none focus:ring-1 focus:ring-[#2d5a27]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as ToolCategory | 'All')}
              aria-label="Filter by category"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <select
            className="block w-full sm:w-auto rounded-xl border border-slate-300 bg-white py-3 pl-3 pr-8 text-sm focus:border-[#2d5a27] focus:outline-none focus:ring-1 focus:ring-[#2d5a27]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            aria-label="Sort tools"
          >
            <option value="mostUsed">Sort: Most Used</option>
            <option value="newest">Sort: Newest</option>
            <option value="alphabetical">Sort: A-Z</option>
          </select>
        </div>
      </div>

      {filteredAndSortedTools.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-slate-200 rounded-3xl">
          <p className="text-lg font-medium text-slate-900 mt-4">No tools found</p>
          <p className="text-sm text-slate-500 mt-1">Try adjusting your search or category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedTools.map(tool => (
            <ToolCard 
              key={tool.id}
              tool={tool}
              isFavorite={favorites.includes(tool.id)}
              onToggleFavorite={(e) => onToggleFavorite(tool.id, e)}
              onClick={() => onOpenTool(tool.id)}
            />
          ))}
        </div>
      )}

      <SectionExplanation />
    </div>
  );
}
