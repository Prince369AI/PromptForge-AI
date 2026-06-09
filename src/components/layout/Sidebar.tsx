import React from 'react';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';
import { 
  Wand2, 
  Image as ImageIcon, 
  Users, 
  Package, 
  PenTool, 
  Megaphone, 
  Library, 
  Activity, 
  Camera, 
  Video, 
  LayoutDashboard, 
  Globe 
} from 'lucide-react';

const GENERATION_ITEMS = [
  { id: 'optimizer', label: 'Universal Optimizer', icon: Wand2 },
  { id: 'image-prompt', label: 'Image Generator', icon: ImageIcon },
  { id: 'video-bridge', label: 'Video Bridge', icon: Video, badge: 'Veo 3' },
];

const ANALYSIS_ITEMS = [
  { id: 'analyzer', label: 'Prompt Analyzer', icon: Activity },
  { id: 'image-to-prompt', label: 'Image-2-Prompt', icon: Camera },
  { id: 'library', label: 'Prompt Library', icon: Library },
];

export function Sidebar() {
  const { activeTab, setActiveTab } = useStore();

  const renderNavGroup = (title: string, items: typeof GENERATION_ITEMS, isFirst = false) => (
    <>
      <div className={cn("text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-2 mb-2", !isFirst && "mt-6")}>
        {title}
      </div>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors text-sm",
              isActive 
                ? "bg-neutral-100 text-black" 
                : "text-neutral-500 hover:bg-neutral-50 hover:text-black"
            )}
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span className="truncate">{item.label}</span>
            {item.badge && (
              <span className="ml-auto text-[10px] uppercase font-bold bg-neutral-200 text-neutral-600 px-1.5 py-0.5 rounded-sm">
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </>
  );

  return (
    <aside className="w-64 border-r border-neutral-200 bg-white hidden md:flex flex-col shrink-0 z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
        </div>
        <span className="text-lg font-bold tracking-tight text-black truncate">
          PromptForge <span className="text-neutral-400 font-medium italic">AI</span>
        </span>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto w-full">
        {renderNavGroup('Generation', GENERATION_ITEMS, true)}
        {renderNavGroup('Analysis', ANALYSIS_ITEMS)}
      </nav>
      
      <div className="p-4 border-t border-neutral-100 mt-auto">
        <div className="bg-neutral-50 rounded-xl p-3 flex items-center gap-3 border border-neutral-100 cursor-pointer hover:bg-neutral-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-400 to-black shrink-0 relative overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Alex Sterling" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-xs font-semibold text-black truncate">Alex Sterling</div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-tighter truncate">Pro Membership</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
