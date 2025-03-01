import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-elementary-accent via-elementary-secondary to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-elementary-accent/50">
          {/* Animated logo elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 className="w-6 h-6 text-white/80 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          </div>
          <Sparkles className="w-4 h-4 text-white absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-xl transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-300" />
          <div className="absolute -inset-1 bg-gradient-to-r from-elementary-accent to-elementary-secondary opacity-0 group-hover:opacity-30 rounded-xl blur transition-opacity duration-300" />
        </div>
      </div>
      <span className="font-bold text-xl tracking-tight group-hover:tracking-wide transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-elementary-accent via-elementary-secondary to-purple-600">
        RC
      </span>
    </div>
  );
}