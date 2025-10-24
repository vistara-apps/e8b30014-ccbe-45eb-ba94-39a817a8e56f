'use client';

import { Home, TrendingUp, Trophy, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: TrendingUp, label: 'Strategies', href: '/strategies' },
    { icon: Trophy, label: 'Challenges', href: '/challenges' },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-fg">LighterBot Hub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <button className="hidden md:block bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200">
            Connect Wallet
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-fg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <button className="w-full bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200">
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
