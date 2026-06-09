import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Copy, Heart, Clock } from 'lucide-react';

const MOCK_PROMPTS = [
  { id: 1, title: 'Cinematic Portrait', category: 'Photography', likes: 1240, prompt: 'Close up portrait of a young woman with neon face paint, cinematic lighting, 35mm lens, depth of field, neon city background, highly detailed, 8k.' },
  { id: 2, title: 'Minimalist Architecture', category: 'Architecture', likes: 890, prompt: 'A minimalist concrete house in a dense forest, morning mist, soft diffused lighting, architectural photography, brutalism, ultra realistic.' },
  { id: 3, title: 'Cyberpunk Drone', category: 'Sci-Fi', likes: 2100, prompt: 'A highly detailed cyberpunk delivery drone flying in the rain, neon reflections, incredibly detailed mechanical parts, Unreal Engine 5 render.' },
  { id: 4, title: 'Food Editorial', category: 'Food', likes: 654, prompt: 'Professional food photography of a gourmet burger on a wooden board, dark background, dramatic moody lighting, flying ingredients, high resolution.' },
  { id: 5, title: 'Web Design Landing Page', category: 'UI/UX', likes: 1450, prompt: 'A beautiful modern SaaS website landing page, clean UI, dark mode, dashboard in the background, sleek design, dribbble style.' },
  { id: 6, title: 'Cosmic Landscape', category: 'Fantasy Art', likes: 3200, prompt: 'An alien landscape with giant glowing crystals, twin moons in the sky, starry night, digital illustration, trending on artstation, masterpiece.' },
];

export function PromptLibrary() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight">Prompt Library</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore over 10,000+ curated, high-quality prompts created and tested by the community.
        </p>
        <div className="w-full max-w-2xl relative mt-4">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search prompts by keyword, style, or model..." 
            className="w-full h-12 pl-12 rounded-full text-base bg-background border-border/80 shadow-sm"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {['Photography', 'Hyper Realistic', 'Architecture', 'Commercial', 'UI/UX'].map(tag => (
            <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm cursor-pointer hover:bg-secondary/80">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROMPTS.map((item) => (
          <Card key={item.id} className="border-border/60 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
             <CardHeader className="pb-3">
               <div className="flex justify-between items-start mb-2">
                 <Badge variant="outline" className="text-xs">{item.category}</Badge>
                 <div className="flex items-center text-muted-foreground text-xs font-medium">
                   <Heart className="w-3.5 h-3.5 mr-1" /> {item.likes}
                 </div>
               </div>
               <CardTitle className="text-lg leading-tight line-clamp-1">{item.title}</CardTitle>
             </CardHeader>
             <CardContent className="flex-1">
               <div className="bg-muted/40 p-3 rounded-md text-sm text-muted-foreground line-clamp-4 relative">
                 {item.prompt}
                 <div className="absolute inset-0 bg-gradient-to-t from-muted/40 to-transparent pointer-events-none"></div>
               </div>
             </CardContent>
             <CardFooter className="pt-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <Button variant="default" className="flex-1" size="sm">
                 <Copy className="h-4 w-4 mr-2" /> Copy Prompt
               </Button>
               <Button variant="secondary" size="icon" className="h-9 w-9">
                 <Heart className="h-4 w-4" />
               </Button>
             </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
