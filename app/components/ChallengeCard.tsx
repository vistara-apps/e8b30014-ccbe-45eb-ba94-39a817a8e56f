'use client';

import { Clock, Trophy, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Challenge {
  id: string;
  name: string;
  participants: number;
  prizePool: string;
  endTime: string;
  status: 'active' | 'upcoming' | 'ended';
}

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const end = new Date(challenge.endTime).getTime();
      const now = new Date().getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('Ended');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(interval);
  }, [challenge.endTime]);

  return (
    <div className="bg-gradient-to-br from-accent/10 to-surface rounded-lg p-6 border border-accent/30 hover:border-accent transition-all duration-200 hover:shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-accent" />
            <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full uppercase">
              {challenge.status}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-fg mb-2">{challenge.name}</h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-surface/50 rounded-lg p-3 border border-border">
          <div className="flex items-center gap-2 text-muted mb-1">
            <Users className="w-4 h-4" />
            <span className="text-xs">Participants</span>
          </div>
          <div className="text-xl font-bold text-fg">{challenge.participants}</div>
        </div>
        <div className="bg-surface/50 rounded-lg p-3 border border-border">
          <div className="flex items-center gap-2 text-muted mb-1">
            <Trophy className="w-4 h-4" />
            <span className="text-xs">Prize Pool</span>
          </div>
          <div className="text-xl font-bold text-accent">{challenge.prizePool}</div>
        </div>
        <div className="bg-surface/50 rounded-lg p-3 border border-border">
          <div className="flex items-center gap-2 text-muted mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-xs">Time Left</span>
          </div>
          <div className="text-xl font-bold text-fg">{timeLeft}</div>
        </div>
      </div>

      <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-2">
        <Trophy className="w-5 h-5" />
        Join Challenge
      </button>
    </div>
  );
}
