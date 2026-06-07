import React from 'react';
import { Sprout } from 'lucide-react';

interface NavigationProps {
  currentView: 'hub' | 'favorites' | string;
  onNavigate: (view: string) => void;
}

export function Navigation({ currentView, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'plan', label: 'Plan', disabled: true },
    { id: 'forecast', label: 'Forecast', disabled: true },
    { id: 'what-if', label: 'What If', disabled: true },
    { id: 'hub', label: 'Predictor', disabled: false },
    { id: 'favorites', label: 'My favorites', disabled: false },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full h-16 bg-[#2d5a27] text-white flex items-center shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div 
          className="flex items-center gap-2 mr-4 sm:mr-8 md:mr-12 cursor-pointer group shrink-0"
          onClick={() => onNavigate('hub')}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#2d5a27] font-bold">
            <Sprout className="h-5 w-5" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight hidden sm:block">
            RuralPredictor
          </span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 ml-auto lg:ml-0 overflow-x-auto no-scrollbar pt-1 w-full justify-start sm:justify-start">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => !item.disabled && onNavigate(item.id)}
              disabled={item.disabled}
              className={`
                whitespace-nowrap text-sm font-medium transition-all pb-1
                ${item.disabled ? 'opacity-50 cursor-not-allowed hidden md:block' : 'opacity-80 hover:opacity-100'}
                ${currentView === item.id && !item.disabled ? 'opacity-100 border-b-2 border-white' : 'border-b-2 border-transparent'}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
