import React from 'react';
import { Ticket, Match } from '../types';
import { TrendingUp, Clock, Zap, Crown } from 'lucide-react';

interface TicketDisplayProps {
  tickets: Ticket[];
  isLoading: boolean;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ tickets, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 animate-pulse">
            <div className="h-6 bg-slate-700 rounded mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((j) => (
                <div key={j} className="h-4 bg-slate-700 rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tickets.length === 0) {
    return (
      <div className="text-center py-12">
        <Crown className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-slate-400 mb-2">
          No Tickets Generated
        </h3>
        <p className="text-slate-500">
          Initiate scan to uncover profitable accumulators
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

const TicketCard: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  const getStrategyColor = (strategy: string) => {
    switch (strategy) {
      case 'The Iron Bank': return 'from-blue-500 to-cyan-400';
      case 'The Bookie Basher': return 'from-amber-500 to-orange-400';
      case 'The High-Yield Assassin': return 'from-red-500 to-pink-400';
      default: return 'from-emerald-500 to-cyan-400';
    }
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-200">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getStrategyColor(ticket.strategy)} p-4`}>
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg">{ticket.strategy}</h3>
          <div className="bg-white/20 px-2 py-1 rounded-full">
            <span className="text-white text-sm font-bold">
              {ticket.totalOdds.toFixed(2)}x
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-white text-sm">
              Edge: {(ticket.mathematicalEdge * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white text-sm">
              {ticket.matches.length} Legs
            </span>
          </div>
        </div>
      </div>

      {/* Matches */}
      <div className="p-4 max-h-96 overflow-y-auto">
        {ticket.matches.map((match, index) => (
          <MatchRow key={index} match={match} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div className="bg-slate-900/50 p-4 border-t border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-sm">Confidence</span>
          <span className="text-emerald-400 font-bold">
            {(ticket.confidence * 100).toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${ticket.confidence * 100}%` }}
          ></div>
        </div>
        <p className="text-slate-400 text-xs mt-2 italic">
          {ticket.reasoning}
        </p>
      </div>
    </div>
  );
};

const MatchRow: React.FC<{ match: Match; index: number }> = ({ match, index }) => {
  return (
    <div className="border-b border-slate-700/50 pb-3 mb-3 last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs text-slate-500 bg-slate-700 px-2 py-1 rounded">
              {match.sport}
            </span>
            {match.isLive && (
              <span className="flex items-center space-x-1 bg-red-500/20 px-2 py-1 rounded">
                <Zap className="w-3 h-3 text-red-400" />
                <span className="text-xs text-red-400 font-bold">LIVE</span>
              </span>
            )}
          </div>
          <h4 className="text-white text-sm font-medium">{match.teams}</h4>
          <p className="text-slate-400 text-xs">{match.league}</p>
        </div>
        <div className="text-right">
          <div className="text-emerald-400 font-bold text-lg">
            {match.odds.toFixed(2)}
          </div>
          <div className="text-slate-500 text-xs">odds</div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-slate-300 text-sm font-medium">
            {match.prediction}
          </span>
          <span className="text-slate-500 text-xs">
            {match.confidence * 100}%
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1">
          <div
            className="bg-amber-500 h-1 rounded-full"
            style={{ width: `${match.confidence * 100}%` }}
          ></div>
        </div>
        <p className="text-slate-500 text-xs italic">
          {match.reasoning}
        </p>
      </div>
    </div>
  );
};

export default TicketDisplay;