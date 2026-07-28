import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/animStudioData';
import { GalleryItem } from '../types';
import { Maximize2, Sparkles, Layers, Play } from 'lucide-react';

interface ProductionGalleryProps {
  onSelectImage: (imageUrl: string, title: string) => void;
}

export const ProductionGallery: React.FC<ProductionGalleryProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', '360° Character Rig', 'Scene Composition', 'Mesh Warp & Liquify', 'Skeletal Rigging', 'Spline Control'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#B45309] text-xs font-mono font-extrabold uppercase tracking-widest mb-4">
          <Layers className="w-3.5 h-3.5 text-[#D97706]" />
          Artwork & Animation Showcase
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-slate-900 mb-4">
          ANIMATION <span className="text-[#D97706]">GALLERY</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Artwork and animation sequences created frame-by-frame directly on mobile devices with AnimStudio.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#F59E0B] text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectImage(item.imageUrl, `${item.title} by ${item.author}`)}
            className="image-container group cursor-pointer flex flex-col bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 text-[10px] font-mono text-amber-400">
                {item.category}
              </div>

              <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-mono text-[10px] font-black">
                {item.fps} FPS
              </div>

              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                <span className="p-3 rounded-full bg-[#F59E0B] text-slate-950 shadow-lg">
                  <Maximize2 className="w-5 h-5 stroke-[3]" />
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-bold font-display uppercase text-slate-900 group-hover:text-[#D97706] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3 font-mono">
                  By {item.author}
                </p>
                <p className="text-xs text-slate-600 line-clamp-2 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Format: {item.format}</span>
                <span className="text-[#D97706] font-bold">Inspect View &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
