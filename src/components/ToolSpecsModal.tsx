import React from 'react';
import { TOOL_SPECS_DATABASE } from '../data/animStudioData';
import { X, Wrench, CheckCircle2, Sparkles, Command } from 'lucide-react';

interface ToolSpecsModalProps {
  toolChip: string | null;
  onClose: () => void;
  onOpenDownloadModal: () => void;
}

export const ToolSpecsModal: React.FC<ToolSpecsModalProps> = ({
  toolChip,
  onClose,
  onOpenDownloadModal,
}) => {
  if (!toolChip) return null;

  const spec = TOOL_SPECS_DATABASE[toolChip] || {
    chip: toolChip,
    name: `${toolChip} Tool Specification`,
    category: 'Pro Tool',
    shortcut: 'Custom',
    description: `Advanced vector control module optimized for mobile 60 FPS performance.`,
    features: ['High-precision stylus input', 'Sub-pixel accuracy', 'Undo/Redo stack history', 'Vulkan hardware acceleration'],
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full bg-[#0F0F0F] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="tool-chip bg-[#FFB84D]/20 text-[#FFB84D] border-[#FFB84D]/40 text-sm py-1.5 px-4 font-black">
              {spec.chip}
            </span>
            <div>
              <h3 className="text-xl font-bold font-display uppercase text-white">
                {spec.name}
              </h3>
              <span className="text-xs text-white/50 font-mono">
                Category: {spec.category}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-white/60">Keyboard Shortcut / Touch Gesture:</span>
            <span className="px-3 py-1 rounded bg-[#FFB84D]/10 text-[#FFB84D] border border-[#FFB84D]/20 font-bold flex items-center gap-1.5">
              <Command className="w-3.5 h-3.5" />
              {spec.shortcut}
            </span>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono text-white/40 mb-2">Overview</h4>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              {spec.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono text-[#FFB84D] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Key Engine Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {spec.features.map((feat) => (
                <div
                  key={feat}
                  className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-white/90 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-white/10 bg-black/60 flex items-center justify-between">
          <span className="text-xs font-mono text-white/40">Included in AnimStudio v2.4 APK</span>
          <button
            onClick={() => {
              onClose();
              onOpenDownloadModal();
            }}
            className="btn-download-primary px-5 py-2.5 rounded-full text-xs tracking-wider cursor-pointer"
          >
            Download APK
          </button>
        </div>
      </div>
    </div>
  );
};
