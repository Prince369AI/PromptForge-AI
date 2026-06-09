import React from 'react';
import { useStore } from '@/store/useStore';
import { Sparkles, Moon, Sun, Search, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  const { theme, setTheme, activeTab } = useStore();

  const getPageTitle = () => {
    switch(activeTab) {
      case 'optimizer': return 'Universal Optimizer';
      case 'image-prompt': return 'Image Generator';
      case 'video-bridge': return 'Video Bridge (Veo 3)';
      case 'analyzer': return 'Prompt Analyzer';
      case 'image-to-prompt': return 'Image-to-Prompt';
      case 'library': return 'Prompt Library';
      case 'dashboard': return 'Dashboard';
      case 'community': return 'Community';
      default: return 'Workspace';
    }
  };

  return (
    <header className="h-16 border-b border-neutral-200 bg-white flex items-center justify-between px-8 shrink-0 relative z-10 w-full">
      <div className="flex items-center gap-4">
        {/* Mobile menu logic could plug in here if needed */}
        <div className="mr-4 flex items-center md:hidden">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
        </div>
        <div className="hidden md:block text-sm text-neutral-400">
          Workspace / <span className="text-black font-medium underline underline-offset-4 decoration-neutral-200">{getPageTitle()}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[11px] font-medium text-neutral-600">System: Gemini 3.1 Pro (Active)</span>
        </div>
        
        <nav className="flex items-center space-x-2">
          <button 
            className="p-2 text-neutral-400 hover:text-black transition-colors rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className="p-2 text-neutral-400 hover:text-black transition-colors rounded-full hidden sm:flex">
             <Settings className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
