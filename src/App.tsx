/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useStore } from '@/store/useStore';
import { UniversalOptimizer } from '@/features/optimizer';
import { ImageGenerator } from '@/features/image-prompt';
import { VideoBridge } from '@/features/video-bridge';
import { PromptAnalyzer } from '@/features/analyzer';
import { ImageToPrompt } from '@/features/image-analyzer';
import { PromptLibrary } from '@/features/library';

// Simple placeholder components for undefined features
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col border border-dashed border-border rounded-xl p-12 text-center items-center justify-center h-[60vh]">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-muted-foreground max-w-md">This module is part of the extensive PromptForge architecture and is scheduled for implementation in phase 2.</p>
  </div>
);

export default function App() {
  const { activeTab } = useStore();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'optimizer': return <UniversalOptimizer />;
      case 'image-prompt': return <ImageGenerator />;
      case 'video-bridge': return <VideoBridge />;
      case 'analyzer': return <PromptAnalyzer />;
      case 'image-to-prompt': return <ImageToPrompt />;
      case 'library': return <PromptLibrary />;
      default: return <Placeholder title="Coming Soon" />;
    }
  };

  return (
    <DashboardLayout>
      {renderActiveTab()}
    </DashboardLayout>
  );
}

