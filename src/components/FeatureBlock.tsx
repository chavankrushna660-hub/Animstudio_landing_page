import React from 'react';
import { FeatureItem } from '../types';
import { Maximize2, Info, ChevronRight, Sparkles } from 'lucide-react';

interface FeatureBlockProps {
  feature: FeatureItem;
  onSelectImage: (imageUrl: string, title: string) => void;
  onSelectToolSpec: (toolName: string) => void;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  feature,
  onSelectImage,
  onSelectToolSpec,
}) => {
  const isRight = feature.alignment === 'right';

  return (
    <div 
      id={feature.id} 
      className="feature-block relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-24 border-b border-slate-200/80 py-16"
    >
      {/* Background Section Number */}
      <span 
        className="section-num" 
        style={isRight ? { left: 'auto', right: '-20px' } : { left: '-20px' }}
      >
        {feature.num}
      </span>

      {/* Content Column */}
      <div className={`relative z-10 ${isRight ? 'order-1 lg:order-2 lg:text-right' : 'order-1'}`}>
        {feature.badge && (
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-[#B45309] font-bold uppercase tracking-wider mb-4 ${isRight ? 'ml-auto' : ''}`}>
            <Sparkles className="w-3 h-3 text-[#D97706]" />
            {feature.badge}
          </div>
        )}

        <h2 className="text-4xl sm:text-5xl font-black uppercase mb-6 tracking-tighter font-display leading-[0.95] text-slate-900">
          {feature.title.replace(feature.highlightText, '').trim()}{' '}
          <span className="text-[#D97706] inline-block">{feature.highlightText}</span>{' '}
          {feature.afterHighlight || ''}
        </h2>

        <p className="detail-text mb-8 text-slate-600 font-normal leading-relaxed text-base sm:text-lg">
          {feature.description}
        </p>

        {/* Tool Chips */}
        <div className={`flex flex-wrap gap-2.5 mb-6 ${isRight ? 'justify-start lg:justify-end' : 'justify-start'}`}>
          {feature.tools.map((tool) => (
            <button
              key={tool}
              onClick={() => onSelectToolSpec(tool)}
              className="tool-chip cursor-pointer"
              title={`View ${tool} specification details`}
            >
              <span>{tool}</span>
              <Info className="w-3 h-3 opacity-70 hover:opacity-100" />
            </button>
          ))}
        </div>

        {/* Technical specs summary line */}
        <div className={`pt-4 border-t border-slate-200 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-500 ${isRight ? 'justify-start lg:justify-end' : 'justify-start'}`}>
          <div>Module: <span className="text-slate-800 font-semibold">{feature.specDetails.engineModule}</span></div>
          <div>Precision: <span className="text-slate-800 font-semibold">{feature.specDetails.precision}</span></div>
        </div>
      </div>

      {/* Image Container Column */}
      <div className={`order-2 ${isRight ? 'lg:order-1' : ''}`}>
        <div 
          onClick={() => onSelectImage(feature.image, feature.title)}
          className="image-container group cursor-pointer relative overflow-hidden bg-white border border-slate-200 shadow-md shadow-slate-200/80 rounded-3xl"
        >
          <img 
            src={feature.image} 
            alt={feature.title} 
            className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Enlarge overlay on hover */}
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
            <span className="px-5 py-2.5 rounded-full bg-[#F59E0B] text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg">
              <Maximize2 className="w-4 h-4 stroke-[3]" />
              Inspect HD View
            </span>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-[10px] font-mono text-slate-200">
            Click to inspect HD UI
          </div>
        </div>
      </div>
    </div>
  );
};
