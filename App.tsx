import React, { useState, useCallback } from 'react';
import { Ticket, AppState, SportFilter } from './types';
import { GeminiService } from './service/geminiService';
import Header from './components/Header';
import Controls from './components/Controls';
import TicketDisplay from './components/TicketDisplay';
import SourceList from './components/SourceList';
import HistoryPanel from './components/HistoryPanel';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    tickets: [],
    isLoading: false,
    error: null,
    mode: '24h',
    riskLevel: 'balanced',
    sportFilter: 'all',
    darkMode: true,
    history: []
  });

  const generateTickets = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const newTickets = await GeminiService.generateTickets(state.mode, state.riskLevel);
      setState(prev => ({
        ...prev,
        tickets: newTickets,
        history: [...prev.history, ...newTickets],
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        isLoading: false
      }));
    }
  }, [state.mode, state.riskLevel]);

  const clearHistory = useCallback(() => {
    setState(prev => ({ ...prev, history: [] }));
  }, []);

  const exportCSV = useCallback(() => {
    const headers = ['Strategy', 'Total Odds', 'Confidence', 'Matches', 'Timestamp'];
    const csvData = state.history.map(ticket => [
      ticket.strategy,
      ticket.totalOdds,
      ticket.confidence,
      ticket.matches.length,
      ticket.timestamp
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kingbayotickets-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }, [state.history]);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      state.darkMode 
        ? 'bg-slate-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <Header 
        darkMode={state.darkMode}
        toggleDarkMode={() => setState(prev => ({ ...prev, darkMode: !prev.darkMode }))}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            KINGBAYO MONEY EMPIRE
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Cold-blooded analytical predator hunting across global markets. 
            Mathematical dominance through ruthless discipline.
          </p>
        </div>

        {/* Controls */}
        <Controls
          mode={state.mode}
          riskLevel={state.riskLevel}
          sportFilter={state.sportFilter}
          isLoading={state.isLoading}
          onModeChange={(mode) => setState(prev => ({ ...prev, mode }))}
          onRiskChange={(risk) => setState(prev => ({ ...prev, riskLevel: risk }))}
          onSportFilterChange={(sport) => setState(prev => ({ ...prev, sportFilter: sport as SportFilter }))}
          onGenerate={generateTickets}
        />

        {/* Error Display */}
        {state.error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
            <p className="text-red-400 text-center">{state.error}</p>
          </div>
        )}

        {/* Source List */}
        <SourceList />

        {/* Ticket Display */}
        <div className="my-8">
          <TicketDisplay 
            tickets={state.tickets} 
            isLoading={state.isLoading}
          />
        </div>

        {/* History Panel */}
        <HistoryPanel
          history={state.history}
          onClearHistory={clearHistory}
          onExportCSV={exportCSV}
        />
      </main>

      {/* Footer */}
      <footer className={`border-t ${
        state.darkMode ? 'border-slate-800 bg-slate-900' : 'border-gray-200 bg-white'
      } py-8`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              © {new Date().getFullYear()} AariNAT Company Limited
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              Responsible Gambling: This is a sports analytics tool, not gambling advice. 
              Only bet what you can afford to lose. The house always has an edge. 
              KingBayo Money Empire promotes mathematical analysis and disciplined investment strategies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;