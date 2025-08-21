import React from 'react';
import { CheckCircle } from 'lucide-react';
import { This } from '@/components/This';

export function Header() {
  return (
    <div className="relative">
      <This />
      <header className="app-header relative z-10">
        <CheckCircle className="h-6 w-6" />
        <h1 className="text-xl font-bold">Mini Todo</h1>
        <div className="ml-auto flex items-center gap-4">
          <button className="text-sm text-primary hover:text-primary-600 transition-colors">
            Dashboard
          </button>
          <button className="text-sm text-primary hover:text-primary-600 transition-colors">
            Tasks
          </button>
          <button className="text-sm text-primary hover:text-primary-600 transition-colors">
            Settings
          </button>
          <button className="text-sm text-primary hover:text-primary-600 transition-colors">
            Blog
          </button>
        </div>
      </header>
    </div>
  );
}