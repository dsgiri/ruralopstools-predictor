import React from 'react';
import { TOOLS } from '../data';
import { ToolCard } from './ToolCard';
import { HeartCrack } from 'lucide-react';

interface FavoritesPageProps {
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onOpenTool: (id: string) => void;
}

export function FavoritesPage({ favorites, onToggleFavorite, onOpenTool }: FavoritesPageProps) {
  const favoritesList = TOOLS.filter(t => favorites.includes(t.id));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-3xl mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
          My Favorites
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Quick access to your saved prediction tools and models.
        </p>
      </div>

      {favoritesList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center bg-slate-50 border border-slate-100 rounded-3xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-slate-400 mb-6">
            <HeartCrack className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No favorites yet</h3>
          <p className="text-slate-500 mt-2 max-w-sm">
            You haven't saved any prediction tools to your favorites. 
            Click the heart icon on any tool card to save it here for quick access.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoritesList.map(tool => (
            <ToolCard 
              key={tool.id}
              tool={tool}
              isFavorite={true}
              onToggleFavorite={(e) => onToggleFavorite(tool.id, e)}
              onClick={() => onOpenTool(tool.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
