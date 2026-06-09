import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Sparkles, BrainCircuit, Zap, Copy, Save, Share2, Download, Video, Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function UniversalOptimizer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  
  // Gemini Toggles
  const [highThinking, setHighThinking] = useState(true);
  const [proTier, setProTier] = useState(false);
  const [speedMode, setSpeedMode] = useState(false);
  
  const handleOptimize = () => {
    if (!input) return;
    setIsOptimizing(true);
    setTimeout(() => {
      setOutput(`A highly detailed, cinematic and photorealistic portrayal of the following concept: [${input}]. Shot on 35mm lens, dramatic volumetric lighting, incredibly sharp focus, 8k resolution, award winning composition. Rendered in Unreal Engine 5 with octane render, perfect color grading.`);
      setIsOptimizing(false);
    }, speedMode ? 500 : 1500);
  };

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full pb-8">
      
      {/* Left Panel: Input */}
      <div className="col-span-1 lg:col-span-8 flex flex-col gap-6 h-full">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4 flex-1 shadow-sm min-h-[300px]">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Draft Input Prompt</label>
            <span className="text-[10px] text-neutral-400 uppercase">{input.length} Tokens / Output Ready</span>
          </div>
          <textarea 
            className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-lg leading-relaxed text-neutral-800 placeholder-neutral-300 resize-none w-full" 
            placeholder="Describe your vision in raw detail... e.g., 'A portrait of a futuristic astronaut standing in a desert at sunset with gold armor.'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-50 mt-auto shrink-0">
             <select className="bg-neutral-100 border-none text-xs font-semibold outline-none focus:ring-0 rounded-lg px-4 py-4 appearance-none cursor-pointer">
               <option>Style: Photorealistic Luxury</option>
               <option>Style: Cinematic Sci-Fi</option>
               <option>Style: Commercial Fashion</option>
             </select>
             <button 
              className="flex-1 py-4 bg-black text-white text-sm font-bold rounded-xl hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              onClick={handleOptimize}
              disabled={isOptimizing || !input}
             >
               <Wand2 className="w-4 h-4" />
               {isOptimizing ? "OPTIMIZING..." : "ENHANCE WITH GEMINI INTELLIGENCE"}
             </button>
          </div>
        </div>

        {/* Output Section */}
        {output ? (
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm h-64 shrink-0 relative">
             <div className="flex justify-between items-center bg-white p-2 absolute top-4 right-4 rounded-lg shadow-sm border border-neutral-100 gap-2">
                <button className="text-neutral-500 hover:text-black hover:bg-neutral-100 p-1.5 rounded"><Copy className="w-4 h-4"/></button>
                <button className="text-neutral-500 hover:text-black hover:bg-neutral-100 p-1.5 rounded"><Save className="w-4 h-4"/></button>
             </div>
             <label className="text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2">
               <Check className="w-4 h-4"/> Optimized Output
             </label>
             <ScrollArea className="flex-1 pr-4 mt-2">
               <div className="text-base text-neutral-800 leading-relaxed font-medium select-all">
                 {output}
               </div>
             </ScrollArea>
          </div>
        ) : (
          <div className="h-48 shrink-0 bg-neutral-50 border border-dashed border-neutral-300 rounded-2xl flex flex-col items-center justify-center text-neutral-400 gap-2">
            <Sparkles className="w-8 h-8 opacity-20" />
            <span className="text-xs font-medium uppercase tracking-widest">Generated optimized output will appear here</span>
          </div>
        )}
      </div>

      {/* Right Panel: Capabilities & Toggles */}
      <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 h-full overflow-y-auto pr-2">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm shrink-0">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-neutral-900">
            <BrainCircuit className="w-4 h-4 text-black" />
            Gemini Capabilities
          </h3>
          
          <div className="space-y-4">
            <div className={`transition-all flex items-center justify-between p-3 rounded-xl border ${highThinking ? 'bg-neutral-50 border-neutral-200 shadow-sm' : 'bg-white border-neutral-100 opacity-60'}`}>
              <div>
                <div className="text-[11px] font-bold text-neutral-900">High Thinking</div>
                <div className="text-[10px] text-neutral-400 leading-tight mt-0.5">Gemini 3.1 Pro Reasoning</div>
              </div>
              <Switch checked={highThinking} onCheckedChange={(v) => { setHighThinking(v); if(v) setSpeedMode(false); }} className="data-[state=checked]:bg-black" />
            </div>

            <div className={`transition-all flex items-center justify-between p-3 rounded-xl border ${proTier ? 'bg-neutral-50 border-neutral-200 shadow-sm' : 'bg-white border-neutral-100 opacity-60'}`}>
              <div>
                <div className="text-[11px] font-bold text-neutral-900">4K Studio (Pro)</div>
                <div className="text-[10px] text-neutral-400 leading-tight mt-0.5">Nano Banana Pro Model</div>
              </div>
              <Switch checked={proTier} onCheckedChange={setProTier} className="data-[state=checked]:bg-black" />
            </div>

            <div className={`transition-all flex items-center justify-between p-3 rounded-xl border ${speedMode ? 'bg-neutral-50 border-neutral-200 shadow-sm' : 'bg-white border-neutral-100 opacity-60'}`}>
              <div>
                <div className="text-[11px] font-bold text-neutral-900">Speed Mode</div>
                <div className="text-[10px] text-neutral-400 leading-tight mt-0.5">3.1 Flash-Lite Latency</div>
              </div>
              <Switch checked={speedMode} onCheckedChange={(v) => { setSpeedMode(v); if(v) setHighThinking(false); }} className="data-[state=checked]:bg-black" />
            </div>
          </div>

          <div className="mt-8">
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Parameters</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                <div className="text-[9px] uppercase text-neutral-400 mb-1">Aspect Ratio</div>
                <div className="text-xs font-semibold text-neutral-900">16:9 Cinema</div>
              </div>
              <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                <div className="text-[9px] uppercase text-neutral-400 mb-1">Sampling</div>
                <div className="text-xs font-semibold text-neutral-900">K_Euler_A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Veo 3 Promo Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 text-white relative overflow-hidden shrink-0 mt-auto">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <span className="px-2 py-0.5 bg-white/20 rounded text-[9px] font-bold uppercase tracking-widest mb-3 inline-block">Veo 3 Capable</span>
            <h4 className="text-sm font-semibold mb-2">Ready to animate?</h4>
            <p className="text-[10px] text-neutral-300 leading-relaxed mb-4">Convert this prompt into a cinematic video prompt optimized for Veo 3 with motion parameters.</p>
            <button className="w-full py-2.5 bg-white text-black text-[11px] font-bold rounded-lg uppercase tracking-wider hover:bg-neutral-100 transition-colors">
              Image-to-Video Bridge
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

function Wand2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>
}
