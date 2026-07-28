import React from 'react';
import { X, Download, ZoomIn, Info } from 'lucide-react';

interface ImageLightboxModalProps {
  imageUrl: string | null;
  title: string | null;
  onClose: () => void;
  onOpenDownloadModal: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  imageUrl,
  title,
  onClose,
  onOpenDownloadModal,
}) => {
  if (!imageUrl) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl w-full bg-[#0A0A0A] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
      >
        {/* Top Bar */}
        <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-black/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB84D]" />
            <h3 className="text-lg font-bold font-display uppercase text-white truncate max-w-md">
              {title || 'High-Res Preview'}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDownloadModal}
              className="btn-download-primary px-4 py-2 rounded-full text-xs tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 stroke-[3]" />
              Get Android APK
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="p-4 overflow-auto flex items-center justify-center bg-black/80 flex-1 min-h-[300px]">
          <img
            src={imageUrl}
            alt={title || 'Preview'}
            className="max-h-[75vh] w-auto object-contain rounded-xl border border-white/10 shadow-2xl"
          />
        </div>

        {/* Bottom Bar */}
        <div className="p-4 px-6 border-t border-white/10 bg-black/80 flex flex-wrap items-center justify-between text-xs font-mono text-white/50">
          <div>High-Resolution Render • 4K Canvas • Vulkan Accelerated</div>
          <div className="text-[#FFB84D]">Click outside or X to close preview</div>
        </div>
      </div>
    </div>
  );
};
