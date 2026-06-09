import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BrainCircuit, Activity, AlertTriangle, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PromptAnalyzer() {
  const [prompt, setPrompt] = useState('');
  const [isDeepAnalysis, setIsDeepAnalysis] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = () => {
    if (!prompt) return;
    setIsAnalyzing(true);
    setResults(null);
    
    // Simulate Gemini 3.1 Pro Analysis
    setTimeout(() => {
      setResults({
        score: 68,
        weaknesses: [
          "Lacks specific camera or lens terminology",
          "Lighting conditions are vaguely described",
          "Ambiguous subject positioning"
        ],
        strengths: [
          "Good atmospheric description",
          "Clear core concept"
        ],
        thinking: isDeepAnalysis ? [
          "Analyzing syntactic structure... Identified missing imperative modifiers.",
          "Evaluating Midjourney v6 compliance... Missing raw style parameters.",
          "Cross-referencing aesthetic database... Subject needs establishing shot context.",
          "Formulating optimization pathways based on 'cinematic' latent space."
        ] : null,
        optimized: "Cinematic establishing shot of [concept], shot on 35mm lens, golden hour volumetric lighting, anamorphic lens flare, sharp focus, 8k, Unreal Engine 5 render, cinematic color grading."
      });
      setIsAnalyzing(false);
    }, isDeepAnalysis ? 3500 : 1500); // Takes longer if deep analysis
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Prompt Analyzer & Enhancer</h1>
        <p className="text-muted-foreground mt-1">Deep structural analysis and quantitative scoring.</p>
      </div>

      <Card className="border-border/60 shadow-sm overflow-hidden relative">
        {isDeepAnalysis && <div className="absolute top-0 inset-x-0 h-1 bg-black"></div>}
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Prompt to Analyze</Label>
              <Badge variant="outline">{prompt.length} chars</Badge>
            </div>
            <Textarea 
              placeholder="Paste prompt here for structural analysis..."
              className="h-32 text-base resize-none focus-visible:ring-neutral-900"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-muted/40 p-4 rounded-xl border border-border/50">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-neutral-900" />
                <Label className="text-base font-semibold text-neutral-900">Enable High Thinking (Gemini 3.1 Pro)</Label>
              </div>
              <p className="text-sm text-muted-foreground ml-7">Perform extended reasoning, latent space mapping, and deep optimization. Takes ~3-8 seconds.</p>
            </div>
            <Switch 
              checked={isDeepAnalysis} 
              onCheckedChange={setIsDeepAnalysis}
              className="data-[state=checked]:bg-black"
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button 
              size="lg" 
              className="min-w-[150px] dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-900 bg-black text-white hover:bg-neutral-800" 
              onClick={handleAnalyze}
              disabled={isAnalyzing || !prompt}
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Prompt"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* RESULTS SECTON */}
      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
          <Card className="col-span-1 border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">Quality Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center h-40 w-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12" className="text-muted/30" />
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12" strokeDasharray="439.8" strokeDashoffset={439.8 - (439.8 * results.score) / 100} className="text-amber-500 transition-all duration-1000 ease-out" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold">{results.score}</span>
                  <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">/ 100</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Structural Diagnostics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                
                {results.thinking && (
                   <Accordion type="single" collapsible className="w-full bg-neutral-900/5 rounded-lg border border-neutral-900/10 px-4">
                     <AccordionItem value="thinking" className="border-none">
                       <AccordionTrigger className="hover:no-underline py-3">
                         <div className="flex items-center text-neutral-900 font-medium text-sm">
                           <BrainCircuit className="h-4 w-4 mr-2" />
                           View Gemini Thinking Process
                         </div>
                       </AccordionTrigger>
                       <AccordionContent>
                         <ul className="space-y-2 text-sm text-muted-foreground pb-2">
                           {results.thinking.map((step: string, i: number) => (
                             <li key={i} className="flex"><ChevronRight className="h-4 w-4 mr-1 text-neutral-400 shrink-0" /> {step}</li>
                           ))}
                         </ul>
                       </AccordionContent>
                     </AccordionItem>
                   </Accordion>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold flex items-center text-red-500">
                      <AlertTriangle className="h-4 w-4 mr-2" /> Critical Issues
                    </h4>
                    <ul className="space-y-2">
                      {results.weaknesses.map((w: string, i: number) => (
                        <li key={i} className="text-sm flex"><span className="mr-2">•</span> <span className="text-muted-foreground">{w}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold flex items-center text-emerald-500">
                      <CheckCircle2 className="h-4 w-4 mr-2" /> Strengths
                    </h4>
                    <ul className="space-y-2">
                      {results.strengths.map((s: string, i: number) => (
                        <li key={i} className="text-sm flex"><span className="mr-2">•</span> <span className="text-muted-foreground">{s}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Label className="text-sm font-semibold mb-2 block">Optimized Variant</Label>
                  <div className="bg-muted p-4 rounded-lg text-sm border border-border/50">
                    {results.optimized}
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
