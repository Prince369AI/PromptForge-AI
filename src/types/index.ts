export type ModelType = 'ChatGPT' | 'Gemini' | 'Claude' | 'Midjourney' | 'Flux' | 'Stable Diffusion' | 'Leonardo AI' | 'Ideogram' | 'Runway' | 'Kling' | 'Veo';
export type OutputStyle = 'Realistic' | 'Hyper Realistic' | 'Cinematic' | 'Luxury' | 'Commercial' | 'Viral Social Media' | 'Professional Photography' | 'Product Advertising' | 'Fashion Editorial' | 'Creative Art' | 'Minimalist' | 'Documentary';

export interface PromptSession {
  id: string;
  originalPrompt: string;
  enhancedPrompt: string | null;
  targetModel: ModelType;
  style: OutputStyle;
  createdAt: string;
}

export interface AppState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;

  // Gemini Capabilities Features flags
  smartModelSelection: boolean;
  setSmartModelSelection: (active: boolean) => void;
}
