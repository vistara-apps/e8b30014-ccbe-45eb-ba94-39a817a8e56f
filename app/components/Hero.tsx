'use client';

import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-surface to-bg border border-border p-8 md:p-12">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-accent font-semibold">Welcome to LighterBot Hub</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-fg mb-4 leading-tight">
          Trade Smarter with<br />
          <span className="text-accent">AI-Powered Strategies</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-6">
          Collaborate, learn, and trade 'lighter' assets with community-vetted bot strategies on Base. 
          Join challenges, earn badges, and grow your reputation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Explore Strategies
          </button>
          <button className="border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent opacity-5 rounded-full blur-2xl"></div>
    </section>
  );
}
