/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { PredictorHub } from './components/PredictorHub';
import { FavoritesPage } from './components/FavoritesPage';
import { ToolDetail } from './components/ToolDetail';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'hub' | 'favorites' | 'detail'>('hub');
  const [activeToolId, setActiveToolId] = useState<string | null>(null);
  const [favorites, setFavorites] = useLocalStorage<string[]>('rural-utility-favorites', []);

  const handleNavigate = (view: string) => {
    if (view === 'hub' || view === 'favorites') {
      setCurrentView(view);
      setActiveToolId(null);
      window.scrollTo(0, 0);
    }
  };

  const handleOpenTool = (toolId: string) => {
    setActiveToolId(toolId);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleToggleFavorite = (toolId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      if (prev.includes(toolId)) {
        return prev.filter(id => id !== toolId);
      } else {
        return [...prev, toolId];
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#2d5a27]/20 selection:text-[#2d5a27]">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-1 pb-16">
        {currentView === 'hub' && (
          <PredictorHub 
            favorites={favorites} 
            onToggleFavorite={handleToggleFavorite} 
            onOpenTool={handleOpenTool}
          />
        )}
        
        {currentView === 'favorites' && (
          <FavoritesPage 
            favorites={favorites} 
            onToggleFavorite={handleToggleFavorite} 
            onOpenTool={handleOpenTool}
          />
        )}
        
        {currentView === 'detail' && activeToolId && (
          <ToolDetail 
            toolId={activeToolId} 
            isFavorite={favorites.includes(activeToolId)}
            onToggleFavorite={handleToggleFavorite}
            onBack={() => handleNavigate('hub')}
            onOpenTool={handleOpenTool}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

