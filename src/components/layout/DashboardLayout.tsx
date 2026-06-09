import React, { useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useStore } from '@/store/useStore';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Clean Minimalism Layout Structure
  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-neutral-900 font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto w-full h-full max-w-[1200px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
