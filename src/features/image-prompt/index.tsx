import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image as ImageIcon, Video, Wand2, Plus, Sparkles, LayoutPanelLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [previewEnabled, setPreviewEnabled] = useState(true);
  const [qualityTier, setQualityTier] = useState('fast');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Return a nice placeholder from unsplash based on random tech term
      setGeneratedImage(`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Image Prompt Builder</h1>
          <p className="text-muted-foreground mt-1">Structured generation with exact aspect ratio control.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* PARAMS LIST */}
        <Card className="lg:col-span-5 h-[calc(100vh-12rem)] flex flex-col border-border/60">
          <CardHeader className="pb-4">
             <CardTitle className="text-lg">Generation Parameters</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-6 pr-2 -mr-2">
            
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Subject Description</Label>
              <Textarea 
                placeholder="A futuristic city with flying cars at sunset..." 
                className="resize-none h-24 text-base"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground uppercase font-semibold">Category</Label>
                <Select defaultValue="cinematic">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cinematic">Cinematic</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="product">Product Photo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground uppercase font-semibold">Mood / Lighting</Label>
                <Select defaultValue="dramatic">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dramatic">Dramatic</SelectItem>
                    <SelectItem value="soft">Soft & Airy</SelectItem>
                    <SelectItem value="studio">Studio Lighting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold flex items-center">
                  <LayoutPanelLeft className="w-4 h-4 mr-2" /> Aspect Ratio
                </Label>
                <Badge variant="outline" className="text-xs border-primary/20 text-primary">Gemini 3.1 Pro Syntax</Badge>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['1:1', '16:9', '9:16', '3:2'].map(ratio => (
                  <Button 
                    key={ratio} 
                    variant={aspectRatio === ratio ? "default" : "outline"}
                    className="w-full text-xs"
                    onClick={() => setAspectRatio(ratio)}
                  >
                    {ratio}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4 space-y-4 border border-border/50">
              <Label className="text-sm font-semibold text-muted-foreground uppercase block mb-2">Gemini Image Capabilities</Label>
              
              <Tabs defaultValue="fast" value={qualityTier} onValueChange={setQualityTier} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="fast">Fast (Banana 2)</TabsTrigger>
                  <TabsTrigger value="pro">4K Studio (Banana Pro)</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center justify-between pt-2">
                <Label className="font-medium flex items-center">
                  Preview generated image
                </Label>
                <Switch checked={previewEnabled} onCheckedChange={setPreviewEnabled} />
              </div>
            </div>

          </CardContent>
          <CardFooter className="pt-4 border-t border-border/50">
            <Button className="w-full h-12 text-md rounded-xl" onClick={handleGenerate} disabled={isGenerating || !prompt}>
              {isGenerating ? "Generating..." : "Generate Complete Prompt"}
            </Button>
          </CardFooter>
        </Card>

        {/* PREVIEW & OUTPUT */}
        <div className="lg:col-span-7 flex flex-col gap-6 h-[calc(100vh-12rem)]">
          <Card className="flex-1 overflow-hidden border-border/60 flex flex-col relative group">
            {generatedImage ? (
              <>
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <Badge className="bg-black/50 backdrop-blur text-white border-white/20 hover:bg-black/60 capitalize">
                    {qualityTier === 'fast' ? 'Nano Banana 2' : 'Nano Banana Pro'}
                  </Badge>
                  <Badge className="bg-black/50 backdrop-blur text-white border-white/20">
                    {aspectRatio}
                  </Badge>
                </div>
                <div className="w-full h-full bg-black/5">
                  <img src={generatedImage} alt="Generated output" className="w-full h-full object-cover" />
                </div>
                
                {/* Overlay actions on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <div className="flex gap-3 justify-end">
                    <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur">
                      <ImageIcon className="w-4 h-4 mr-2" /> Edit Image
                    </Button>
                    <Button variant="default" className="bg-black hover:bg-neutral-800 text-white border-none shadow-lg">
                      <Video className="w-4 h-4 mr-2" /> Animate to Veo 3
                    </Button>
                  </div>
                </div>
              </>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-muted/10">
                  <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                    <ImageIcon className="h-10 w-10 opacity-20" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-1">No Image Preview</h3>
                  <p className="max-w-sm">Enable image preview and generate a prompt to see Nano Banana in action.</p>
                </div>
            )}
          </Card>
          
          {/* Output prompt text */}
          <Card className="shrink-0">
             <CardContent className="p-4 flex gap-4 items-center">
              <div className="flex-1 bg-muted/30 border border-border/50 rounded-lg p-3 text-sm font-medium">
                {generatedImage 
                  ? `${prompt}, cinematic lighting, photorealistic, 8k resolution, highly detailed. --ar ${aspectRatio.replace(':', '')}`
                  : "Final structured prompt syntax will appear here..."
                }
              </div>
              <Button size="icon" variant="outline" className="shrink-0 h-11 w-11"><Wand2 className="w-5 h-5"/></Button>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
