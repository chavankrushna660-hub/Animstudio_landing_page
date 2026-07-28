import React from 'react';
import { Download, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenDownloadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownloadModal }) => {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] bg-[#FFB84D]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Final CTA Section */}
      <section className="py-32 md:py-48 text-center px-6 relative z-10 max-w-5xl mx-auto">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#E31E24] rounded-3xl mx-auto mb-10 flex items-center justify-center font-black text-5xl md:text-6xl text-white font-display shadow-2xl shadow-[#E31E24]/30 hover:scale-105 transition-transform">
          A
        </div>

        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase font-display tracking-tight text-white mb-10 leading-[0.9]">
          THE SUITE <br />
          <span className="text-[#FFB84D]">IS WAITING.</span>
        </h2>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
          Join thousands of mobile animators, storytellers, and vector artists creating at 60 FPS.
        </p>

        <button
          onClick={onOpenDownloadModal}
          className="btn-download-primary px-12 sm:px-20 py-6 rounded-full text-2xl tracking-tight inline-flex items-center gap-3 cursor-pointer shadow-2xl shadow-[#FFB84D]/30"
        >
          <Download className="w-8 h-8 stroke-[3]" />
          <span>Download Android APK</span>
        </button>

        <p className="mt-12 text-white/30 uppercase tracking-[0.4em] text-xs font-mono font-bold">
          VERSION 2.4.8 | ARM64-v8a | PROFESSIONAL EDITION
        </p>
      </section>

      {/* Bottom Legal / Meta Footer */}
      <div className="py-8 px-6 md:px-12 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold font-display uppercase tracking-wider">ANIMSTUDIO</span>
          <span>© {new Date().getFullYear()} AnimStudio Engine Team. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 text-white/60">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" /> Virus Scan Clean
          </span>
          <button 
            onClick={onOpenDownloadModal}
            className="hover:text-[#FFB84D] cursor-pointer"
          >
            Direct APK Download
          </button>
        </div>
      </div>
    </footer>
  );
};
