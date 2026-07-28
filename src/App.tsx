import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBlock } from './components/FeatureBlock';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ProductionGallery } from './components/ProductionGallery';
import { EngineBenchmarks } from './components/EngineBenchmarks';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ToolSpecsModal } from './components/ToolSpecsModal';
import { FEATURE_BLOCKS, APK_DOWNLOAD_URL } from './data/animStudioData';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{ url: string | null; title: string | null }>({
    url: null,
    title: null,
  });
  const [selectedToolSpec, setSelectedToolSpec] = useState<string | null>(null);

  const handleOpenDownloadModal = () => {
    window.open(APK_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
    setDownloadModalOpen(true);
  };

  const handleOpenPlayground = () => {
    const el = document.getElementById('interactive-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-[#F59E0B] selection:text-black font-sans">
      {/* Top Navbar */}
      <Navbar
        onOpenDownloadModal={handleOpenDownloadModal}
        onOpenPlayground={handleOpenPlayground}
      />

      {/* Hero Header */}
      <Hero
        onOpenDownloadModal={handleOpenDownloadModal}
        onOpenPlayground={handleOpenPlayground}
      />

      {/* Main Feature Blocks Walkthrough */}
      <section id="features" className="max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="py-12 border-b border-slate-200 text-center">
          <span className="text-xs font-mono uppercase text-[#D97706] tracking-widest font-extrabold">
            FEATURE OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-slate-900 mt-2 tracking-tight">
            FRAME-BY-FRAME TOOLS &amp; CAPABILITIES
          </h2>
        </div>

        {FEATURE_BLOCKS.map((feature) => (
          <FeatureBlock
            key={feature.id}
            feature={feature}
            onSelectImage={(url, title) => setLightboxState({ url, title })}
            onSelectToolSpec={(tool) => setSelectedToolSpec(tool)}
          />
        ))}
      </section>

      {/* Interactive Web Demo Studio */}
      <InteractivePlayground />

      {/* Production Art Gallery */}
      <ProductionGallery
        onSelectImage={(url, title) => setLightboxState({ url, title })}
      />

      {/* Hardware Engine Benchmarks */}
      <EngineBenchmarks />

      {/* Footer & Final Call To Action */}
      <Footer
        onOpenDownloadModal={handleOpenDownloadModal}
      />

      {/* Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <ImageLightboxModal
        imageUrl={lightboxState.url}
        title={lightboxState.title}
        onClose={() => setLightboxState({ url: null, title: null })}
        onOpenDownloadModal={handleOpenDownloadModal}
      />

      <ToolSpecsModal
        toolChip={selectedToolSpec}
        onClose={() => setSelectedToolSpec(null)}
        onOpenDownloadModal={handleOpenDownloadModal}
      />
    </div>
  );
}
