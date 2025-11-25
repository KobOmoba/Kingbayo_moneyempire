import React from 'react';
import { Ticket } from '../types';
import { History, Download, Trash2 } from 'lucide-react';

interface HistoryPanelProps {
  history: Ticket[];
  onClearHistory: () => void;
  onExportCSV: () => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ 
  history, 
  onClearHistory, 
  onExportCSV 
}) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <History className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-bold text-white">War Room History</h2>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={onExportCSV}
            disabled={history.length === 0}
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          
          <button
            onClick={onClearHistory}
            disabled={history.length === 0}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 disabled:bg-slate-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-8">
          <History className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400">No historical data yet</p>
          <p className="text-slate-500 text-sm">Generated tickets will appear here</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {history.slice().reverse().map((ticket) => (
            <HistoryItem key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </div>
  );
};

const HistoryItem: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  return (
    <div className="bg-slate-900/30 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            ticket.strategy === 'The Iron Bank' ? 'bg-blue-500/20 text-blue-400' :
            ticket.strategy === 'The Bookie Basher' ? 'bg-amber-500/20 text-amber-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {ticket.strategy}
          </span>
          <span className="text-white font-bold">{ticket.totalOdds.toFixed(2)}x</span>
        </div>
        <span className="text-slate-400 text-xs">
          {new Date(ticket.timestamp).toLocaleTimeString()}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-300">
          {ticket.matches.length} matches
        </span>
        <span className="text-emerald-400 font-medium">
          {(ticket.confidence * 100).toFixed(0)}% confidence
        </span>
      </div>
    </div>
  );
};

export default HistoryPanel;