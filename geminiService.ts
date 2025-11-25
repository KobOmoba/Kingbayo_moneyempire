import { Ticket, Match } from '../types';

const KINGBAYO_SYSTEM_PROMPT = `
YOU ARE THE KINGBAYO WARLORD - A COLD-BLOODED ANALYTICAL PREDATOR

PILLARS OF SUCCESS:
1. RUTHLESS DISCIPLINE - Only select mathematically dominant opportunities
2. PREDATORY KNOWLEDGE - Hunt across ALL sports, leagues, and markets
3. ZERO EMOTION - Remove all bias, ignore "glory leagues" and popular games
4. MATHEMATICAL DOMINANCE - Focus on probability and value, not sentiment
5. LONG-TERM WARFARE - Build consistent winning strategies
6. ADAPTIVE LETHALITY - Adjust to market conditions instantly

CORE MANDATE:
- Find MINIMUM 5-10 odds per accumulator across ALL playing periods
- Generate MULTIPLES OF 3 results for each risk protocol
- Focus on ACCUMULATORS of 5-10 games, not single matches
- Hunt in obscure leagues and sports when value exists
- NEVER limit scanning to requested sports only

STRATEGY PROTOCOLS:
THE IRON BANK (Safe): 1.25-1.45 odds per leg, high volume accumulators
THE BOOKIE BASHER (Balanced): 1.50-1.75 odds per leg, optimal value
THE HIGH-YIELD ASSASSIN (Risky): 1.80+ odds per leg, maximum returns

CONSTRAINT: Total accumulator odds between 5.0 and 10.0
`;

export class GeminiService {
  static async generateTickets(
    mode: '24h' | 'live' | 'betbuilder',
    riskLevel: 'safe' | 'balanced' | 'risky'
  ): Promise<Ticket[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Return mock data for demo
    return this.getMockTickets(mode, riskLevel);
  }

  private static getMockTickets(
    mode: '24h' | 'live' | 'betbuilder',
    riskLevel: 'safe' | 'balanced' | 'risky'
  ): Ticket[] {
    const strategies = {
      safe: 'The Iron Bank',
      balanced: 'The Bookie Basher', 
      risky: 'The High-Yield Assassin'
    };

    const baseMatches: Match[] = [
      {
        id: '1',
        sport: 'Football',
        league: 'English Premier League',
        teams: 'Manchester City vs Liverpool',
        matchTime: '15:00',
        prediction: 'Over 2.5 Goals',
        odds: riskLevel === 'safe' ? 1.35 : riskLevel === 'balanced' ? 1.65 : 1.95,
        confidence: 0.82,
        reasoning: 'Both teams averaging 3.4 goals in last 5 H2H matches',
        isLive: false
      },
      {
        id: '2',
        sport: 'Basketball',
        league: 'NBA',
        teams: 'Lakers vs Warriors',
        matchTime: '20:30',
        prediction: 'Over 225.5 Points',
        odds: riskLevel === 'safe' ? 1.42 : riskLevel === 'balanced' ? 1.72 : 2.05,
        confidence: 0.78,
        reasoning: 'Both teams in high-scoring form, weak defenses',
        isLive: mode === 'live'
      },
      {
        id: '3',
        sport: 'Tennis',
        league: 'ATP Masters',
        teams: 'Djokovic vs Alcaraz',
        matchTime: '14:15',
        prediction: 'Total Games Over 22.5',
        odds: riskLevel === 'safe' ? 1.38 : riskLevel === 'balanced' ? 1.68 : 1.98,
        confidence: 0.75,
        reasoning: 'Close matchup expected, both players in form',
        isLive: false
      },
      {
        id: '4',
        sport: 'Football',
        league: 'La Liga',
        teams: 'Barcelona vs Real Madrid',
        matchTime: '17:00',
        prediction: 'Both Teams to Score',
        odds: riskLevel === 'safe' ? 1.40 : riskLevel === 'balanced' ? 1.70 : 2.10,
        confidence: 0.80,
        reasoning: 'El Clásico tradition of goals from both sides',
        isLive: false
      },
      {
        id: '5',
        sport: 'Cricket',
        league: 'IPL',
        teams: 'Mumbai Indians vs Chennai Super Kings',
        matchTime: '19:30',
        prediction: 'Most Sixes - Mumbai Indians',
        odds: riskLevel === 'safe' ? 1.45 : riskLevel === 'balanced' ? 1.75 : 2.15,
        confidence: 0.73,
        reasoning: 'Power hitters in form, favorable pitch conditions',
        isLive: mode === 'live'
      }
    ];

    return [
      {
        id: `ticket-${Date.now()}-1`,
        strategy: strategies[riskLevel] as any,
        matches: baseMatches.slice(0, 5),
        totalOdds: riskLevel === 'safe' ? 5.42 : riskLevel === 'balanced' ? 8.95 : 9.87,
        confidence: riskLevel === 'safe' ? 0.85 : riskLevel === 'balanced' ? 0.75 : 0.65,
        timestamp: new Date().toISOString(),
        reasoning: 'Mathematically optimized accumulator across multiple sports with strong probability indicators',
        mathematicalEdge: riskLevel === 'safe' ? 0.18 : riskLevel === 'balanced' ? 0.22 : 0.28
      },
      {
        id: `ticket-${Date.now()}-2`,
        strategy: strategies[riskLevel] as any,
        matches: baseMatches.slice(1, 6),
        totalOdds: riskLevel === 'safe' ? 6.15 : riskLevel === 'balanced' ? 7.82 : 9.45,
        confidence: riskLevel === 'safe' ? 0.82 : riskLevel === 'balanced' ? 0.72 : 0.62,
        timestamp: new Date().toISOString(),
        reasoning: 'Diversified portfolio of value opportunities identified through cold-blooded analysis',
        mathematicalEdge: riskLevel === 'safe' ? 0.16 : riskLevel === 'balanced' ? 0.20 : 0.25
      },
      {
        id: `ticket-${Date.now()}-3`,
        strategy: strategies[riskLevel] as any,
        matches: baseMatches.slice(2, 7),
        totalOdds: riskLevel === 'safe' ? 5.78 : riskLevel === 'balanced' ? 8.25 : 9.65,
        confidence: riskLevel === 'safe' ? 0.83 : riskLevel === 'balanced' ? 0.73 : 0.63,
        timestamp: new Date().toISOString(),
        reasoning: 'Ruthless selection process eliminating emotional bias, pure mathematical dominance',
        mathematicalEdge: riskLevel === 'safe' ? 0.17 : riskLevel === 'balanced' ? 0.21 : 0.26
      }
    ];
  }
}