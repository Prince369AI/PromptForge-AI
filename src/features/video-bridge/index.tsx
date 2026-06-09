import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Video, ArrowRight, Wand2, Copy } from 'lucide-react';

export function VideoBridge() {
  const [basePrompt, setBasePrompt] = useState('A sleek futuristic sports car driving through a neon-lit rain-soaked city street at night.');
  const [converting, setConverting] = useState(false);
  const [videoPrompt, setVideoPrompt] = useState('');

  const handleBridge = () => {
    setConverting(true);
    setTimeout(() => {
      setVideoPrompt(`[Cinematic sequence, 24fps] Camera pans slowly from right to left tracking a sleek futuristic sports car driving through a neon-lit rain-soaked city street at night. Dynamic motion blur on the car wheels. Reflections of the neon signs ripple on the wet asphalt. Moody, atmospheric, high fidelity, 4k video, smooth movement.`);
      setConverting(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Image-to-Video Bridge</h1>
          <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider border border-blue-500/20">Veo 3</span>
        </div>
        <p className="text-muted-foreground mt-1">Convert static image descriptions into cinematic video generation prompts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
        
        <Card className="h-full border-border/60">
          <CardHeader>
            <CardTitle className="text-base">Base Image Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="h-40 resize-none text-base bg-muted/30"
              value={basePrompt}
              onChange={(e) => setBasePrompt(e.target.value)}
              placeholder="Enter your static image prompt here..."
            />
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="rounded-full h-16 w-16 shadow-lg hover:scale-105 transition-transform"
            onClick={handleBridge}
            disabled={converting || !basePrompt}
          >
            <Wand2 className={`h-6 w-6 ${converting ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        <Card className="h-full border-border/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Video className="w-24 h-24" />
          </div>
          <CardHeader>
            <CardTitle className="text-base flex justify-between items-center">
              <span>Optimized Video Prompt</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {videoPrompt ? (
              <div className="space-y-4">
                <div className="p-4 bg-muted/40 rounded-xl border border-border/50 font-medium text-base relative z-10 leading-relaxed">
                  {videoPrompt}
                </div>
                <div className="grid grid-cols-2 gap-3 z-10 relative">
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Camera Motion</Label>
                    <Select defaultValue="pan">
                      <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pan">Slow Pan</SelectItem>
                        <SelectItem value="zoom">Dolly Zoom</SelectItem>
                        <SelectItem value="static">Static Shot</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">Framerate Style</Label>
                    <Select defaultValue="24fps">
                      <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24fps">24fps (Cinematic)</SelectItem>
                        <SelectItem value="60fps">60fps (Smooth)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ) : (
                <div className="h-40 flex items-center justify-center text-muted-foreground text-sm">
                  Click the bridge button to generate video parameters.
                </div>
            )}
          </CardContent>
          {videoPrompt && (
            <CardFooter className="pt-0">
               <Button variant="secondary" className="w-full">
                 <Copy className="h-4 w-4 mr-2" /> Copy Prompt
               </Button>
            </CardFooter>
          )}
        </Card>

      </div>
    </div>
  );
}
