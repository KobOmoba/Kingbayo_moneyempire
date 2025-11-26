import React from 'react';
import { Ticket, Match } from '../types';
import { TrendingUp, Clock, Zap, Crown, Target, BarChart3 } from 'lucide-react';

interface TicketDisplayProps {
  tickets: Ticket[];
  isLoading: boolean;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ tickets, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={`skeleton-${i}`} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 animate-pulse">
            <div className="h-6 bg-slate-700 rounded mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((j) => (
                <div key={`skeleton-line-${j}`} className="h-4 bg-slate-700 rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tickets.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="relative inline-block mb-6">
          <Crown className="w-20 h-20 text-slate-600 mx-auto" />
          <Target className="w-8 h-8 text-amber-400 absolute -top-2 -right-2 animate-bounce-slow" />
        </div>
        <h3 className="text-2xl font-bold text-slate-400 mb-3 bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
          Hunting Grounds Ready
        </h3>
        <p className="text-slate-500 text-lg mb-4 max-w-md mx-auto">
          No tickets generated yet. Initiate scan to uncover mathematically dominant opportunities.
        </p>
        <div className="flex justify-center items-center space-x-4 text-slate-600">
          <BarChart3 className="w-5 h-5" />
          <span className="text-sm">Cold-blooded analysis awaiting command</span>
        </div>
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

  const getStrategyIcon = (strategy: string) => {
    switch (strategy) {
      case 'The Iron Bank': return '🏦';
      case 'The Bookie Basher': return '💥';
      case 'The High-Yield Assassin': return '🎯';
      default: return '👑';
    }
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/20 group">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getStrategyColor(ticket.strategy)} p-4 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-300"></div>
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getStrategyIcon(ticket.strategy)}</span>
            <h3 className="text-white font-bold text-lg">{ticket.strategy}</h3>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="text-white text-sm font-bold">
              {ticket.totalOdds.toFixed(2)}x
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 relative z-10">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              Edge: {(ticket.mathematicalEdge * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              {ticket.matches.length} Legs
            </span>
          </div>
        </div>
      </div>

      {/* Matches */}
      <div className="p-4 max-h-96 overflow-y-auto">
        {ticket.matches.map((match, index) => (
          <MatchRow key={`${ticket.id}-match-${match.id || index}`} match={match} />
        ))}
      </div>

      {/* Footer */}
      <div className="bg-slate-900/50 p-4 border-t border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-sm font-medium">Confidence</span>
          <span className="text-emerald-400 font-bold text-lg">
            {(ticket.confidence * 100).toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
          <div
            className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${ticket.confidence * 100}%` }}
          ></div>
        </div>
        <p className="text-slate-400 text-xs italic line-clamp-2 border-l-2 border-emerald-500 pl-2">
          {ticket.reasoning}
        </p>
      </div>
    </div>
  );
};

const MatchRow: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className="border-b border-slate-700/50 pb-3 mb-3 last:border-b-0 last:mb-0 last:pb-0 group/match">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs text-slate-500 bg-slate-700 px-2 py-1 rounded font-medium">
              {match.sport}
            </span>
            {match.isLive && (
              <span className="flex items-center space-x-1 bg-red-500/20 px-2 py-1 rounded group-hover/match:bg-red-500/30 transition-colors">
                <Zap className="w-3 h-3 text-red-400 animate-pulse" />
                <span className="text-xs text-red-400 font-bold">LIVE</span>
              </span>
            )}
          </div>
          <h4 className="text-white text-sm font-semibold group-hover/match:text-cyan-300 transition-colors">
            {match.teams}
          </h4>
          <p className="text-slate-400 text-xs mt-1">{match.league}</p>
        </div>
        <div className="text-right">
          <div className="text-emerald-400 font-bold text-lg group-hover/match:scale-110 transition-transform">
            {match.odds.toFixed(2)}
          </div>
          <div className="text-slate-500 text-xs font-medium">odds</div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-slate-300 text-sm font-medium">
            {match.prediction}
          </span>
          <span className="text-slate-500 text-xs font-bold">
            {(match.confidence * 100).toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-400 h-1 rounded-full transition-all duration-300"
            style={{ width: `${match.confidence * 100}%` }}
          ></div>
        </div>
        <p className="text-slate-500 text-xs italic line-clamp-2 mt-2">
          {match.reasoning}
        </p>
      </div>
    </div>
  );
};

export default TicketDisplay;
