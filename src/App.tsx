import React, { useState } from 'react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode 
        ? 'bg-slate-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-backdrop-blur:bg-slate-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  KINGBAYO PRO
                </h1>
                <p className="text-slate-400 text-sm">Money Empire</p>
              </div>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            KINGBAYO MONEY EMPIRE
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Cold-blooded analytical predator hunting across global markets. 
            Mathematical dominance through ruthless discipline.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold text-emerald-400 mb-2">AI-Powered Analysis</h3>
              <p className="text-slate-400 text-sm">Advanced algorithms for high-probability predictions</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-cyan-400 mb-2">Real-Time Data</h3>
              <p className="text-slate-400 text-sm">Live market insights and opportunity detection</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-bold text-purple-400 mb-2">Profit Optimization</h3>
              <p className="text-slate-400 text-sm">Maximize returns with disciplined strategies</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
            Generate AI Predictions
          </button>
          <p className="text-slate-500 text-sm mt-4">
            Advanced sports analytics platform coming soon...
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              © {new Date().getFullYear()} AariNAT Company Limited
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              Responsible Gambling: This is a sports analytics tool, not gambling advice. 
              Only bet what you can afford to lose. The house always has an edge.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
