import React from 'react';
import { Beaker } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-default">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
            <Beaker className="h-6 w-6 text-navy-900 relative" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold text-navy-900 tracking-tight">
            Agent Efficiency Lab
          </span>
        </div>
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-electric-50 text-electric-700 ring-1 ring-inset ring-electric-700/10">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-500 mr-1.5 animate-pulse"></span>
            Beta Research
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;