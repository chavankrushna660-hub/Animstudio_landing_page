import React from 'react';
import { BENCHMARK_METRICS } from '../data/animStudioData';
import { Cpu, Zap, CheckCircle, ShieldAlert, Award } from 'lucide-react';

export const EngineBenchmarks: React.FC = () => {
  return (
    <section id="benchmarks" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#B45309] text-xs font-mono font-extrabold uppercase tracking-widest mb-4">
          <Cpu className="w-3.5 h-3.5 text-[#D97706]" />
          Hardware Acceleration &amp; Performance
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-slate-900 mb-4">
          ENGINE <span className="text-[#D97706]">PERFORMANCE</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Benchmarked on Android ARM64 hardware to deliver smooth 60 FPS frame-by-frame editing.
        </p>
      </div>

      {/* Benchmarks Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {BENCHMARK_METRICS.map((metric) => {
          const isHigherBetter = metric.higherIsBetter;
          const studioScore = metric.animStudioScore;
          const standardScore = metric.standardAppScore;

          // calculate relative bar percentage
          const maxVal = Math.max(studioScore, standardScore) * 1.15;
          const studioPct = Math.min(100, Math.max(12, (studioScore / maxVal) * 100));
          const standardPct = Math.min(100, Math.max(12, (standardScore / maxVal) * 100));

          return (
            <div
              key={metric.name}
              className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold font-display uppercase text-slate-900 mb-1">
                    {metric.name}
                  </h3>
                  <p className="text-xs text-slate-500">{metric.description}</p>
                </div>
                <span className="p-2 rounded-xl bg-amber-50 text-[#D97706] border border-amber-200">
                  <Zap className="w-5 h-5" />
                </span>
              </div>

              {/* Comparison Bars */}
              <div className="space-y-4 pt-2">
                {/* AnimStudio Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-[#D97706] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      AnimStudio (ARM64 Optimized)
                    </span>
                    <span className="font-extrabold text-slate-900">
                      {studioScore} {metric.unit}
                    </span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      style={{ width: `${studioPct}%` }}
                      className="h-full bg-gradient-to-r from-[#E31E24] to-[#F59E0B] rounded-full transition-all duration-1000 shadow-sm"
                    />
                  </div>
                </div>

                {/* Standard App Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-500">
                    <span>Standard Mobile App</span>
                    <span>
                      {standardScore} {metric.unit}
                    </span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      style={{ width: `${standardPct}%` }}
                      className="h-full bg-slate-300 rounded-full transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>
                  {isHigherBetter
                    ? `${(studioScore / standardScore).toFixed(1)}x Smooth Performance`
                    : `${(standardScore / studioScore).toFixed(1)}x Faster Processing`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Video / Engine Performance Showcase Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="image-container p-6 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 mb-4 border border-slate-800 flex items-center justify-center">
            {/* Vector GPU animation simulation canvas */}
            <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden group">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#F59E0B] animate-spin [animation-duration:8s] flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-solid border-[#E31E24] animate-ping [animation-duration:2s]" />
              </div>
              <div className="absolute top-3 left-3 bg-slate-900/90 text-white px-3 py-1 rounded text-[10px] font-mono text-amber-400 border border-slate-700">
                STRESS TEST: 10,000 VERTICES @ 60 FPS
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold font-display uppercase text-slate-900 mb-2">
            Real-Time Mesh Rendering
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Maintains smooth 60 FPS when manipulating multi-layered vector characters containing over 10,000 mesh points.
          </p>
        </div>

        <div className="image-container p-6 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 mb-4 border border-slate-800 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
              {/* IK Bone Solver visual simulation */}
              <svg className="w-full h-full">
                <circle cx="120" cy="80" r="8" fill="#F59E0B" />
                <circle cx="200" cy="140" r="8" fill="#E31E24" />
                <circle cx="280" cy="90" r="8" fill="#F59E0B" />
                <line x1="120" y1="80" x2="200" y2="140" stroke="#F59E0B" strokeWidth="4" />
                <line x1="200" y1="140" x2="280" y2="90" stroke="#E31E24" strokeWidth="4" />
              </svg>
              <div className="absolute top-3 left-3 bg-slate-900/90 text-white px-3 py-1 rounded text-[10px] font-mono text-emerald-400 border border-slate-700">
                STYLUS LATENCY: &lt; 1.0 MS
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold font-display uppercase text-slate-900 mb-2">
            Responsive Stylus Tracking
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Fast stylus input sampling provides natural pen pressure, tilt sensitivity, and immediate visual stroke feedback.
          </p>
        </div>
      </div>
    </section>
  );
};
