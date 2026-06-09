import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState } from '../types';

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      activeTab: 'optimizer',
      setActiveTab: (activeTab) => set({ activeTab }),

      smartModelSelection: false,
      setSmartModelSelection: (smartModelSelection) => set({ smartModelSelection }),
    }),
    {
      name: 'promptforge-storage',
    }
  )
);
