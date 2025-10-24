'use client';

import { Heart, Star, TrendingUp } from 'lucide-react';

interface Strategy {
  id: string;
  name: string;
  creator: string;
  pnl: number;
  likes: number;
  rating: number;
  assets: string[];
}

interface StrategyCardProps {
  strategy: Strategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  return (
    <div className="bg-surface rounded-lg p-5 border border-border hover:border-accent transition-all duration-200 hover:shadow-card cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors duration-200 mb-1">
            {strategy.name}
          </h3>
          <p className="text-sm text-muted">{strategy.creator}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
          strategy.pnl > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {strategy.pnl > 0 ? '+' : ''}{strategy.pnl}%
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {strategy.assets.map((asset) => (
          <span 
            key={asset}
            className="px-2 py-1 bg-bg rounded text-xs font-medium text-accent border border-border"
          >
            {asset}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{strategy.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-muted">
            <Star className="w-4 h-4 fill-current text-yellow-500" />
            <span className="text-sm">{strategy.rating}</span>
          </div>
        </div>
        <button className="text-accent hover:text-fg transition-colors duration-200 text-sm font-medium flex items-center gap-1">
          View
          <TrendingUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
