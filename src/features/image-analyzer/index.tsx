import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, ImageIcon, Sparkles, SlidersHorizontal, ImagePlus } from 'lucide-react';

export function ImageToPrompt() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleUploadClick = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResult("A highly detailed photograph of a neon-lit cyberpunk street alleyway at midnight. Reflections in puddles, atmospheric haze, shot on vintage anamorphic lens, teal and orange cinematic color grading, hyper-realistic, 8k resolution, Unreal Engine 5 aesthetic.");
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Image-to-Prompt Analysis</h1>
        <p className="text-muted-foreground mt-1">Extract prompts, styles, and camera parameters using Gemini 3.1 Pro Vision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/60 shadow-sm border-dashed">
          <CardContent className="flex flex-col items-center justify-center h-80 p-6 text-center">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Upload Visual Target</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-[250px]">
              Drag and drop an image, or click to browse. Gemini Vision will extract the precise prompt.
            </p>
            <Button onClick={handleUploadClick} disabled={analyzing} className="w-full max-w-[200px]">
              {analyzing ? "Analyzing Image..." : "Select Image"}
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm overflow-hidden flex flex-col">
          <CardHeader className="bg-muted/30 pb-4 border-b border-border/50">
            <CardTitle className="text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" /> Extracted Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col justify-center bg-background">
            {result ? (
              <div className="space-y-4">
                <div className="p-4 bg-muted/40 rounded-xl border border-border/50 text-foreground font-medium leading-relaxed">
                  {result}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="border border-border/50 rounded-lg p-3">
                     <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">Extracted Style</span>
                     <span className="text-sm font-medium">Cyberpunk / Moody</span>
                  </div>
                  <div className="border border-border/50 rounded-lg p-3">
                     <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">Camera Guess</span>
                     <span className="text-sm font-medium">Anamorphic 35mm</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <ImageIcon className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>Awaiting image upload.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
