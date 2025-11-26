import React from 'react';
import { Crown, Zap, Brain } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-lg border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Crown className="w-8 h-8 text-emerald-400" />
              <Zap className="w-4 h-4 text-amber-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                KingBayo Money Empire
              </h1>
              <p className="text-xs text-slate-400 flex items-center">
                <Brain className="w-3 h-3 mr-1" />
                Cold-Blooded Analytical Predator
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-white font-medium">LIVE</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-300">Powered by AI</span>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              {darkMode ? (
                <span className="text-amber-400 text-sm">☀️</span>
              ) : (
                <span className="text-slate-300 text-sm">🌙</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;