import React from 'react';
import { Download, Sparkles, ShieldCheck, Zap, Layers, Cpu, Film, ChevronRight, CheckCircle2, Wand2, Compass } from 'lucide-react';

interface HeroProps {
  onOpenDownloadModal: () => void;
  onOpenPlayground?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownloadModal }) => {
  return (
    <section className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#FAFAFA]">
      {/* Background ambient light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] bg-amber-200/40 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-rose-200/30 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FAFAFA]/80 to-[#FAFAFA] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(217, 119, 6, 0.2) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* FIRST TOP IMAGE SHOWCASE: Liquify Brush & Mesh Deformation Engine (Above headline) */}
        <div className="w-full max-w-3xl mb-8 relative rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-slate-900 shadow-2xl shadow-amber-500/15 p-2 sm:p-3 group">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 flex items-center justify-center">
            <img
              src="https://i.ibb.co/TBMPn1tZ/Chat-GPT-Image-Jul-28-2026-02-08-55-PM.png"
              alt="AnimStudio Liquify Brush & Mesh Deformation Workspace"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            {/* Top Badge Overlay */}
            <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 font-mono text-[11px] font-extrabold px-3 py-1 rounded-lg border border-amber-500/40 shadow-md backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              #1 LIQUIFY BRUSH &amp; MESH DEFORMATION ENGINE
            </div>
            {/* Bottom Tool Spec Badge */}
            <div className="absolute bottom-3 right-3 bg-slate-900/90 text-slate-200 font-mono text-[11px] px-3 py-1 rounded-lg border border-slate-700 shadow-md backdrop-blur-md hidden sm:flex items-center gap-2">
              <Wand2 className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Real-time Sub-pixel Vertex Grid Deformation</span>
            </div>
          </div>
        </div>

        {/* Clean Hero Headline */}
        <h1 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-slate-900 mb-6 max-w-5xl">
          DRAW &amp; ANIMATE <br />
          <span className="text-[#D97706] drop-shadow-sm">
            FRAME-BY-FRAME
          </span> <br />
          ON MOBILE DEVICE.
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl text-slate-600 font-normal leading-relaxed mb-10">
          AnimStudio is a dedicated frame-by-frame 2D animation app designed for Android tablets and phones. Sketch keyframes, layer onion skin ghosts, edit timeline clips, and export directly at <span className="text-slate-900 font-bold">60 FPS</span>.
        </p>

        {/* IMAGE SHOWCASE GRID BELOW SUBTITLE */}
        <div className="w-full max-w-5xl flex flex-col gap-8 mb-12 text-left">
          {/* SECOND IMAGE SHOWCASE: Multi-Plane Scene Composition & Parallax Camera */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-3 sm:p-4 shadow-xl shadow-slate-200/80 relative group">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 flex items-center justify-center">
              <img 
                src="https://i.ibb.co/wNdc6PML/Chat-GPT-Image-Jul-28-2026-02-12-56-PM.png"
                alt="Multi-Plane Scene Composition & Parallax Camera Workspace"
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              {/* HUD Overlays */}
              <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-500/40 text-[11px] font-mono text-amber-400 font-bold flex items-center gap-2 shadow-md">
                <Compass className="w-4 h-4 text-[#D97706]" />
                <span>#2 MULTI-PLANE SCENE COMPOSITION &amp; PARALLAX CAMERA</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2">
                <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Multi-Layer Depth &amp; Camera Motion</span>
                </div>
                <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-amber-400 font-bold hidden sm:block">
                  2.5D Vector Blending Modes
                </div>
              </div>
            </div>
          </div>

          {/* TWO-COLUMN SHOWCASE: Onion Skinning & Skeletal Rigging */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SHOWCASE 3: Onion Skinning & Walk Cycle */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-3 sm:p-4 shadow-xl shadow-slate-200/80 relative group flex flex-col">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 flex items-center justify-center mb-3">
                <img 
                  src="https://i.ibb.co/Y4cn2hcg/Chat-GPT-Image-Jul-28-2026-03-02-39-PM.png"
                  alt="Onion Skinning Walk Cycle Timeline Workspace"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 z-20 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/40 text-[10px] font-mono text-amber-400 font-bold flex items-center gap-1.5 shadow-md">
                  <Film className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>ONION SKINNING WALK CYCLE</span>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-base font-bold font-display text-slate-900 mb-1 flex items-center gap-2">
                  <span>Dual-Layer Ghosting &amp; Keyframe Timeline</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Precision onion skinning with customizable pre/post ghost colors for smooth walk cycles.
                </p>
              </div>
            </div>

            {/* SHOWCASE 4: Skeletal Rigging & Inverse Kinematics */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-3 sm:p-4 shadow-xl shadow-slate-200/80 relative group flex flex-col">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 flex items-center justify-center mb-3">
                <img 
                  src="https://i.ibb.co/S4pDYdx6/Chat-GPT-Image-Jul-28-2026-02-27-22-PM.png"
                  alt="Skeletal Bone Rigging & IK Solver Workspace"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 z-20 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/40 text-[10px] font-mono text-amber-400 font-bold flex items-center gap-1.5 shadow-md">
                  <Layers className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>SKELETAL BONE RIGGING</span>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-base font-bold font-display text-slate-900 mb-1 flex items-center gap-2">
                  <span>BioRig IK &amp; Quaternion Skinning</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hierarchy bone rigging with fast inverse kinematics solvers for character animation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button: Single Primary Direct APK Download Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenDownloadModal}
            className="btn-download-primary px-10 sm:px-14 py-5 rounded-full text-lg sm:text-xl tracking-tight flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer shadow-lg shadow-amber-500/25"
          >
            <Download className="w-6 h-6 stroke-[3]" />
            <span>Download Android APK (Direct Link)</span>
          </button>

          <a
            href="#features"
            className="px-8 sm:px-10 py-5 rounded-full text-base sm:text-lg font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
          >
            <span>Explore App Features</span>
            <ChevronRight className="w-5 h-5 text-slate-500" />
          </a>
        </div>

        {/* Live App Interface Banner Image Card */}
        <div className="w-full max-w-4xl relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/60 p-2 sm:p-4 mb-16">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 flex items-center justify-center group">
            {/* Grid graphic background */}
            <svg className="w-full h-full absolute inset-0 text-amber-500/20 opacity-40 pointer-events-none" viewBox="0 0 800 450">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="800" height="450" fill="url(#grid)" />
            </svg>

            {/* Showcase Image */}
            <img 
              src="https://i.ibb.co/Y4cn2hcg/Chat-GPT-Image-Jul-28-2026-03-02-39-PM.png"
              alt="AnimStudio Mobile Frame-by-Frame Interface"
              className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />

            {/* Overlay UI elements simulating live app HUD */}
            <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-700 text-[11px] font-mono text-[#F59E0B] flex items-center gap-2 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              FRAME-BY-FRAME CANVAS • 60 FPS • HD RENDER
            </div>

            <div className="absolute bottom-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2 shadow-md text-xs text-slate-200 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Android Stylus Pressure Support</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left flex items-start gap-3.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-amber-50 text-[#D97706] border border-amber-200">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-slate-900">60 FPS</div>
              <div className="text-xs text-slate-500 font-medium">Hardware Accelerated</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left flex items-start gap-3.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-amber-50 text-[#D97706] border border-amber-200">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-slate-900">Frame Tools</div>
              <div className="text-xs text-slate-500 font-medium">Onion Skin &amp; Vector</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left flex items-start gap-3.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-amber-50 text-[#D97706] border border-amber-200">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-slate-900">ARM64 APK</div>
              <div className="text-xs text-slate-500 font-medium">Responsive Stylus Engine</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left flex items-start gap-3.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-amber-50 text-[#D97706] border border-amber-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-slate-900">Direct Download</div>
              <div className="text-xs text-slate-500 font-medium">Safe &amp; Clean Install</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

