import React from 'react';
import { Globe, TrendingUp, Target } from 'lucide-react';

const SourceList: React.FC = () => {
  const huntingGrounds = [
    {
      id: 'football',
      sport: 'Football',
      leagues: ['UEFA Champions League', 'English Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Eredivisie', 'Primeira Liga', 'MLS', 'J-League', 'A-League', 'All Global Leagues']
    },
    {
      id: 'basketball',
      sport: 'Basketball', 
      leagues: ['NBA', 'EuroLeague', 'CBA', 'ACB', 'NBL', 'All Global Leagues']
    },
    {
      id: 'tennis',
      sport: 'Tennis',
      leagues: ['ATP Tour', 'WTA Tour', 'Grand Slams', 'All Global Tournaments']
    },
    {
      id: 'cricket',
      sport: 'Cricket',
      leagues: ['IPL', 'Big Bash', 'PSL', 'All Global Tournaments']
    },
    {
      id: 'rugby',
      sport: 'Rugby',
      leagues: ['Super Rugby', 'Premiership', 'Top 14', 'All Global Leagues']
    },
    {
      id: 'hockey',
      sport: 'Hockey',
      leagues: ['NHL', 'KHL', 'SHL', 'All Global Leagues']
    },
    {
      id: 'volleyball',
      sport: 'Volleyball',
      leagues: ['All Global Professional Leagues']
    },
    {
      id: 'handball',
      sport: 'Handball',
      leagues: ['All Global Professional Leagues']
    }
  ];

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Globe className="w-5 h-5 text-emerald-400" />
        <h2 className="text-lg font-bold text-white">Global Hunting Grounds</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {huntingGrounds.map((ground) => (
          <div key={ground.id} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="flex items-center space-x-2 mb-3">
              <Target className="w-4 h-4 text-amber-400" />
              <h3 className="text-white font-semibold text-sm">{ground.sport}</h3>
            </div>
            <ul className="space-y-1">
              {ground.leagues.map((league, index) => (
                <li key={`${ground.id}-league-${index}`} className="text-slate-400 text-xs flex items-center">
                  <TrendingUp className="w-3 h-3 mr-2 text-emerald-400" />
                  {league}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-slate-900/30 rounded-lg border border-slate-700">
        <p className="text-slate-300 text-sm text-center">
          <span className="text-emerald-400 font-bold">KINGBAYO PROTOCOL:</span>{' '}
          Hunting across 1000+ daily events. No league ignored. No value overlooked.
        </p>
      </div>
    </div>
  );
};

export default SourceList;
