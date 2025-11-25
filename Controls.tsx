import React from 'react';
import { Settings, Scan, Target } from 'lucide-react';

interface ControlsProps {
  mode: '24h' | 'live' | 'betbuilder';
  riskLevel: 'safe' | 'balanced' | 'risky';
  sportFilter: string;
  isLoading: boolean;
  onModeChange: (mode: '24h' | 'live' | 'betbuilder') => void;
  onRiskChange: (risk: 'safe' | 'balanced' | 'risky') => void;
  onSportFilterChange: (sport: string) => void;
  onGenerate: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  mode,
  riskLevel,
  sportFilter,
  isLoading,
  onModeChange,
  onRiskChange,
  onSportFilterChange,
  onGenerate
}) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center">
          <Settings className="w-5 h-5 mr-2 text-emerald-400" />
          Ruthless Analysis Protocol
        </h2>
        <div className="text-sm text-slate-400">
          Status: <span className="text-emerald-400">READY TO HUNT</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Mode Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Battle Mode
          </label>
          <select
            value={mode}
            onChange={(e) => onModeChange(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="24h">24H Accumulator</option>
            <option value="live">Live Scanner</option>
            <option value="betbuilder">Bet Builder</option>
          </select>
        </div>

        {/* Risk Protocol */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Risk Protocol
          </label>
          <select
            value={riskLevel}
            onChange={(e) => onRiskChange(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="safe">The Iron Bank</option>
            <option value="balanced">The Bookie Basher</option>
            <option value="risky">The High-Yield Assassin</option>
          </select>
        </div>

        {/* Sport Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Hunting Ground
          </label>
          <select
            value={sportFilter}
            onChange={(e) => onSportFilterChange(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Sports & Leagues</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="cricket">Cricket</option>
            <option value="rugby">Rugby</option>
            <option value="hockey">Hockey</option>
            <option value="volleyball">Volleyball</option>
            <option value="handball">Handball</option>
          </select>
        </div>

        {/* Generate Button */}
        <div className="flex items-end">
          <button
            onClick={onGenerate}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Scan className="w-4 h-4 mr-2 animate-spin" />
                SCANNING...
              </>
            ) : (
              <>
                <Target className="w-4 h-4 mr-2" />
                INITIATE SCAN
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mode Description */}
      <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
        <p className="text-sm text-slate-300">
          {mode === '24h' && '24H Accumulator: Pre-match analysis across global markets'}
          {mode === 'live' && 'Live Scanner: Real-time momentum shift detection'}
          {mode === 'betbuilder' && 'Bet Builder: Correlated market opportunity builder'}
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Protocol: {riskLevel.toUpperCase()} | Target: 5.0-10.0 Total Odds | Matches: 5-10 Legs
        </p>
      </div>
    </div>
  );
};

export default Controls;