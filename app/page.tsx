'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Trophy, Users, Zap } from 'lucide-react';
import { StrategyCard } from './components/StrategyCard';
import { ChallengeCard } from './components/ChallengeCard';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';

interface Strategy {
  id: string;
  name: string;
  creator: string;
  pnl: number;
  likes: number;
  rating: number;
  assets: string[];
}

interface Challenge {
  id: string;
  name: string;
  participants: number;
  prizePool: string;
  endTime: string;
  status: 'active' | 'upcoming' | 'ended';
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const topStrategies: Strategy[] = [
    {
      id: '1',
      name: 'Momentum Scalper Pro',
      creator: '@cryptowhale',
      pnl: 47.3,
      likes: 234,
      rating: 4.8,
      assets: ['ETH', 'BTC', 'SOL']
    },
    {
      id: '2',
      name: 'DeFi Yield Optimizer',
      creator: '@yieldmaster',
      pnl: 32.1,
      likes: 189,
      rating: 4.6,
      assets: ['USDC', 'DAI', 'AAVE']
    },
    {
      id: '3',
      name: 'Arbitrage Hunter',
      creator: '@arbking',
      pnl: 28.7,
      likes: 156,
      rating: 4.5,
      assets: ['UNI', 'SUSHI', 'LINK']
    }
  ];

  const activeChallenge: Challenge = {
    id: '1',
    name: 'Weekly Trading Championship',
    participants: 342,
    prizePool: '5 ETH',
    endTime: '2024-01-20T23:59:59',
    status: 'active'
  };

  const stats = [
    { icon: Users, label: 'Active Traders', value: '2,847' },
    { icon: TrendingUp, label: 'Total Strategies', value: '1,234' },
    { icon: Trophy, label: 'Challenges Won', value: '456' },
    { icon: Zap, label: 'Avg. Daily Volume', value: '$2.4M' }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-accent text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <Hero />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-surface rounded-lg p-4 border border-border hover:border-accent transition-colors duration-200"
            >
              <stat.icon className="w-6 h-6 text-accent mb-2" />
              <div className="text-2xl font-bold text-fg">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Active Challenge */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-fg flex items-center gap-2">
              <Trophy className="w-6 h-6 text-accent" />
              Active Challenge
            </h2>
          </div>
          <ChallengeCard challenge={activeChallenge} />
        </section>

        {/* Top Strategies */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-fg flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-accent" />
              Top Performing Strategies
            </h2>
            <button className="text-accent hover:text-fg transition-colors duration-200 text-sm font-medium">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topStrategies.map((strategy) => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface rounded-lg p-8 border border-border text-center">
          <h3 className="text-2xl font-bold text-fg mb-3">Ready to Start Trading?</h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Join thousands of traders using AI-powered strategies to maximize returns on Base
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200">
              Browse Strategies
            </button>
            <button className="border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-200">
              Create Strategy
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
