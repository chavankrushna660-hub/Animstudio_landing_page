import React, { useState } from 'react';
import { Download, Smartphone, Sparkles, Menu, X, Cpu, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  onOpenPlayground?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-nav py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      {/* Brand Logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-3.5 cursor-pointer group"
      >
        <div className="w-10 h-10 bg-[#E31E24] rounded-xl flex items-center justify-center font-bold text-white text-2xl shadow-md shadow-[#E31E24]/20 group-hover:scale-105 transition-transform duration-300">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase font-display leading-none text-slate-900">
            ANIM <span className="text-[#D97706]">STUDIO</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-0.5">
            Frame-By-Frame Mobile App
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-700">
        <button 
          onClick={() => scrollToSection('features')} 
          className="hover:text-[#D97706] transition-colors cursor-pointer"
        >
          Features
        </button>
        <button 
          onClick={() => scrollToSection('interactive-demo')} 
          className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 cursor-pointer text-[#D97706] font-bold"
        >
          <Sparkles className="w-4 h-4 text-[#D97706]" />
          Engine Demo
        </button>
        <button 
          onClick={() => scrollToSection('benchmarks')} 
          className="hover:text-[#D97706] transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <Cpu className="w-4 h-4 text-slate-500" />
          Performance
        </button>
        <button 
          onClick={() => scrollToSection('gallery')} 
          className="hover:text-[#D97706] transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <Layers className="w-4 h-4 text-slate-500" />
          Gallery
        </button>
      </div>

      {/* Action Buttons */}
      <div className="hidden sm:flex items-center gap-3">
        <button
          onClick={onOpenDownloadModal}
          className="btn-download-primary px-7 py-2.5 rounded-full text-xs tracking-wider flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
        >
          <Download className="w-4 h-4 stroke-[3]" />
          Download Android APK
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-200">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-left py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('interactive-demo')} 
            className="text-left py-2 text-base font-semibold text-[#D97706] flex items-center gap-2 border-b border-slate-100"
          >
            <Sparkles className="w-4 h-4" />
            Engine Demo
          </button>
          <button 
            onClick={() => scrollToSection('benchmarks')} 
            className="text-left py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Performance Metrics
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="text-left py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Animation Gallery
          </button>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDownloadModal(); }}
              className="w-full btn-download-primary py-3.5 rounded-xl text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Download Android APK
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

