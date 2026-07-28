import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RefreshCw, Sparkles, Sliders, Layers, Move, RotateCcw, Cpu, Eye, EyeOff } from 'lucide-react';

interface Point {
  x: number;
  y: number;
  label: string;
}

export const InteractivePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mesh' | 'rig' | 'turnaround' | 'timeline'>('mesh');

  // --- 1. MESH WARP STATE ---
  const [meshPoints, setMeshPoints] = useState<Point[]>([
    { x: 120, y: 100, label: 'P1 (Top Left)' },
    { x: 280, y: 100, label: 'P2 (Top Right)' },
    { x: 120, y: 260, label: 'P3 (Bottom Left)' },
    { x: 280, y: 260, label: 'P4 (Bottom Right)' },
    { x: 200, y: 180, label: 'P5 (Center Core)' },
  ]);
  const [draggingPoint, setDraggingPoint] = useState<number | null>(null);
  const meshCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // --- 2. SKELETAL RIG STATE ---
  const [joints, setJoints] = useState<{ x: number; y: number; name: string }[]>([
    { x: 200, y: 70, name: 'Head' },
    { x: 200, y: 150, name: 'Torso' },
    { x: 130, y: 180, name: 'Left Hand' },
    { x: 270, y: 180, name: 'Right Hand' },
    { x: 160, y: 290, name: 'Left Foot' },
    { x: 240, y: 290, name: 'Right Foot' },
  ]);
  const [draggingJoint, setDraggingJoint] = useState<number | null>(null);

  // --- 3. 360 TURNAROUND STATE ---
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(false);

  // --- 4. TIMELINE PLAYER STATE ---
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [fps, setFps] = useState<24 | 30 | 60>(60);
  const [onionSkinning, setOnionSkinning] = useState(true);

  // Auto rotate effect
  useEffect(() => {
    let interval: any;
    if (autoRotate) {
      interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 3) % 360);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Timeline player effect
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev % 60) + 1);
      }, 1000 / fps);
    }
    return () => clearInterval(interval);
  }, [isPlaying, fps]);

  // Canvas drawing for Mesh Warp
  useEffect(() => {
    const canvas = meshCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid background for light canvas
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw deformed vector mesh polygon
    ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(meshPoints[0].x, meshPoints[0].y);
    ctx.quadraticCurveTo(meshPoints[4].x, meshPoints[4].y, meshPoints[1].x, meshPoints[1].y);
    ctx.quadraticCurveTo(meshPoints[4].x, meshPoints[4].y, meshPoints[3].x, meshPoints[3].y);
    ctx.quadraticCurveTo(meshPoints[4].x, meshPoints[4].y, meshPoints[2].x, meshPoints[2].y);
    ctx.quadraticCurveTo(meshPoints[4].x, meshPoints[4].y, meshPoints[0].x, meshPoints[0].y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw mesh wireframe triangles
    ctx.strokeStyle = 'rgba(227, 30, 36, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(meshPoints[i].x, meshPoints[i].y);
      ctx.lineTo(meshPoints[4].x, meshPoints[4].y);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Draw vertex handles
    meshPoints.forEach((pt, index) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, index === 4 ? 9 : 7, 0, Math.PI * 2);
      ctx.fillStyle = index === 4 ? '#E31E24' : '#F59E0B';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }, [meshPoints]);

  const handleMeshMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = meshCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    meshPoints.forEach((pt, idx) => {
      const dist = Math.hypot(pt.x - mouseX, pt.y - mouseY);
      if (dist < 18) {
        setDraggingPoint(idx);
      }
    });
  };

  const handleMeshMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (draggingPoint === null) return;
    const canvas = meshCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = Math.max(20, Math.min(canvas.width - 20, e.clientX - rect.left));
    const mouseY = Math.max(20, Math.min(canvas.height - 20, e.clientY - rect.top));

    setMeshPoints((prev) =>
      prev.map((pt, idx) => (idx === draggingPoint ? { ...pt, x: mouseX, y: mouseY } : pt))
    );
  };

  const resetMesh = () => {
    setMeshPoints([
      { x: 120, y: 100, label: 'P1 (Top Left)' },
      { x: 280, y: 100, label: 'P2 (Top Right)' },
      { x: 120, y: 260, label: 'P3 (Bottom Left)' },
      { x: 280, y: 260, label: 'P4 (Bottom Right)' },
      { x: 200, y: 180, label: 'P5 (Center Core)' },
    ]);
  };

  // Skeletal IK drag
  const handleJointMouseDown = (idx: number) => {
    setDraggingJoint(idx);
  };

  const handleRigMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggingJoint === null) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(20, Math.min(rect.width - 20, e.clientX - rect.left));
    const y = Math.max(20, Math.min(rect.height - 20, e.clientY - rect.top));

    setJoints((prev) =>
      prev.map((j, idx) => (idx === draggingJoint ? { ...j, x, y } : j))
    );
  };

  const resetRig = () => {
    setJoints([
      { x: 200, y: 70, name: 'Head' },
      { x: 200, y: 150, name: 'Torso' },
      { x: 130, y: 180, name: 'Left Hand' },
      { x: 270, y: 180, name: 'Right Hand' },
      { x: 160, y: 290, name: 'Left Foot' },
      { x: 240, y: 290, name: 'Right Foot' },
    ]);
  };

  return (
    <section id="interactive-demo" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#B45309] text-xs font-mono font-extrabold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
          Interactive Web Studio Demo
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-slate-900 mb-4">
          TEST THE <span className="text-[#D97706]">ANIMSTUDIO</span> ENGINE
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Experience frame-by-frame vector deformation, skeletal IK joints, 360° turnaround, and 60 FPS timeline rendering right in your browser.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
        <button
          onClick={() => setActiveTab('mesh')}
          className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'mesh'
              ? 'bg-[#F59E0B] text-slate-950 shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Move className="w-4 h-4" />
          Mesh Warp
        </button>

        <button
          onClick={() => setActiveTab('rig')}
          className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'rig'
              ? 'bg-[#F59E0B] text-slate-950 shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Sliders className="w-4 h-4" />
          Skeletal Rig
        </button>

        <button
          onClick={() => setActiveTab('turnaround')}
          className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'turnaround'
              ? 'bg-[#F59E0B] text-slate-950 shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <RotateCcw className="w-4 h-4" />
          360° Studio
        </button>

        <button
          onClick={() => setActiveTab('timeline')}
          className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'timeline'
              ? 'bg-[#F59E0B] text-slate-950 shadow-md shadow-amber-500/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          60 FPS Timeline
        </button>
      </div>

      {/* TAB 1: MESH WARP SANDBOX */}
      {activeTab === 'mesh' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 grid lg:grid-cols-12 gap-8 items-center shadow-lg shadow-slate-200/60">
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative border border-slate-300 rounded-2xl overflow-hidden bg-slate-50 shadow-inner">
              <canvas
                ref={meshCanvasRef}
                width={400}
                height={360}
                onMouseDown={handleMeshMouseDown}
                onMouseMove={handleMeshMouseMove}
                onMouseUp={() => setDraggingPoint(null)}
                className="cursor-crosshair touch-none"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 text-white px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-mono text-amber-400">
                Drag handles to warp vector mesh
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3 font-mono text-center">
              DynaMesh Solver v3.0 • Hardware Shader Active
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#D97706] tracking-wider font-extrabold">Module 02</span>
              <h3 className="text-3xl font-black uppercase font-display text-slate-900 mt-1 mb-3">
                Vector Mesh Warp
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Drag vertex nodes to deform shapes dynamically. In the mobile app, this supports smooth frame-by-frame muscle stretching, clothes swaying, and character expressions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
              <div className="flex justify-between">
                <span>Subdivision Nodes:</span>
                <span className="text-[#D97706] font-bold">5 Precision Control Handles</span>
              </div>
              <div className="flex justify-between">
                <span>GPU Warp Latency:</span>
                <span className="text-emerald-600 font-bold">0.02ms (Direct Vulkan Shader)</span>
              </div>
              <div className="flex justify-between">
                <span>Curvature Control:</span>
                <span className="text-slate-900 font-semibold">Sub-pixel Bezier Curve</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetMesh}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all border border-slate-200"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Handles
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SKELETAL RIG SIMULATOR */}
      {activeTab === 'rig' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 grid lg:grid-cols-12 gap-8 items-center shadow-lg shadow-slate-200/60">
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              onMouseMove={handleRigMouseMove}
              onMouseUp={() => setDraggingJoint(null)}
              className="relative w-[400px] h-[360px] border border-slate-300 rounded-2xl overflow-hidden bg-slate-50 shadow-inner select-none"
            >
              <svg className="w-full h-full absolute inset-0">
                {/* Bone Lines */}
                <line x1={joints[0].x} y1={joints[0].y} x2={joints[1].x} y2={joints[1].y} stroke="#D97706" strokeWidth="4" />
                <line x1={joints[1].x} y1={joints[1].y} x2={joints[2].x} y2={joints[2].y} stroke="#E31E24" strokeWidth="4" />
                <line x1={joints[1].x} y1={joints[1].y} x2={joints[3].x} y2={joints[3].y} stroke="#E31E24" strokeWidth="4" />
                <line x1={joints[1].x} y1={joints[1].y} x2={joints[4].x} y2={joints[4].y} stroke="#D97706" strokeWidth="4" />
                <line x1={joints[1].x} y1={joints[1].y} x2={joints[5].x} y2={joints[5].y} stroke="#D97706" strokeWidth="4" />
              </svg>

              {/* Joint Handles */}
              {joints.map((joint, idx) => (
                <div
                  key={joint.name}
                  onMouseDown={() => handleJointMouseDown(idx)}
                  style={{ left: `${joint.x}px`, top: `${joint.y}px` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#D97706] flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform shadow-md group"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E31E24]" />
                  <span className="absolute left-9 bg-slate-900 text-[10px] font-mono text-white px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {joint.name}
                  </span>
                </div>
              ))}

              <div className="absolute top-3 left-3 bg-slate-900/90 text-white px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-mono text-amber-400">
                Drag joint nodes to test Inverse Kinematics
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3 font-mono text-center">
              BioRig IK Solver • Dual Quaternion Skinning
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#D97706] tracking-wider font-extrabold">Module 03</span>
              <h3 className="text-3xl font-black uppercase font-display text-slate-900 mt-1 mb-3">
                Skeletal IK Solver
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Drag the hand or foot joint nodes. In AnimStudio, Inverse Kinematics automatically calculates natural bone movement so character posing is fast and intuitive.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
              <div className="flex justify-between">
                <span>Joint Hierarchy:</span>
                <span className="text-[#D97706] font-bold">Parent-Child Linked (6 Joint Nodes)</span>
              </div>
              <div className="flex justify-between">
                <span>IK Constraint Solving:</span>
                <span className="text-emerald-600 font-bold">0.04ms / Frame</span>
              </div>
            </div>

            <button
              onClick={resetRig}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all border border-slate-200"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Pose
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: 360 TURNAROUND VIEWER */}
      {activeTab === 'turnaround' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 grid lg:grid-cols-12 gap-8 items-center shadow-lg shadow-slate-200/60">
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-[400px] h-[360px] border border-slate-300 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-6 shadow-inner">
              <div 
                style={{ transform: `rotateY(${rotationAngle}deg)` }}
                className="w-48 h-64 transition-transform duration-75 flex flex-col items-center justify-center relative perspective-1000"
              >
                {/* 3D Character Silhouette Simulation */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#E31E24] to-[#F59E0B] shadow-xl border-2 border-white flex items-center justify-center text-white font-black text-3xl font-display">
                  A
                </div>
                <div className="w-28 h-36 mt-3 rounded-2xl bg-white border border-amber-300 shadow-md flex items-center justify-center text-xs font-mono text-[#D97706] font-bold">
                  360 RIG
                </div>
              </div>

              <div className="absolute top-3 left-3 bg-slate-900/90 text-white px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-mono text-amber-400">
                Rotation Angle: {rotationAngle}°
              </div>
            </div>

            {/* Slider Controls */}
            <div className="w-full max-w-[400px] mt-4 flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="360"
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="w-full accent-[#F59E0B] cursor-pointer"
              />
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  autoRotate ? 'bg-[#E31E24] text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {autoRotate ? 'Pause Spin' : 'Auto Spin'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#D97706] tracking-wider font-extrabold">Module 07</span>
              <h3 className="text-3xl font-black uppercase font-display text-slate-900 mt-1 mb-3">
                360° Character Turnaround
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Smoothly rotate flat drawing layers in 360° space with depth stacks and clean vector interpolation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
              <div className="flex justify-between">
                <span>Depth Parallax Stacks:</span>
                <span className="text-[#D97706] font-bold">8 Parallax Layers</span>
              </div>
              <div className="flex justify-between">
                <span>Angle Keyframes:</span>
                <span className="text-emerald-600 font-bold">Continuous Bezier Crossfade</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: 60 FPS TIMELINE PLAYER */}
      {activeTab === 'timeline' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 grid lg:grid-cols-12 gap-8 items-center shadow-lg shadow-slate-200/60">
          <div className="lg:col-span-7 flex flex-col items-center w-full">
            <div className="relative w-full max-w-[440px] h-[260px] border border-slate-300 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-6 shadow-inner">
              {/* Animated Bouncing Vector Preview */}
              <div
                style={{
                  transform: `translateY(${Math.sin((currentFrame / 60) * Math.PI * 2) * 45}px) rotate(${currentFrame * 6}deg)`,
                }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#E31E24] shadow-xl border-2 border-white flex items-center justify-center text-white font-black text-2xl font-display transition-transform duration-75"
              >
                {currentFrame}
              </div>

              {/* Onion Skinning Ghosts */}
              {onionSkinning && (
                <>
                  <div
                    style={{
                      transform: `translateY(${Math.sin(((currentFrame - 4) / 60) * Math.PI * 2) * 45}px) scale(0.9)`,
                    }}
                    className="absolute w-20 h-20 rounded-2xl border border-amber-400/50 bg-amber-500/10 pointer-events-none opacity-50"
                  />
                  <div
                    style={{
                      transform: `translateY(${Math.sin(((currentFrame + 4) / 60) * Math.PI * 2) * 45}px) scale(0.9)`,
                    }}
                    className="absolute w-20 h-20 rounded-2xl border border-rose-400/50 bg-rose-500/10 pointer-events-none opacity-50"
                  />
                </>
              )}

              <div className="absolute top-3 left-3 bg-slate-900/90 text-white px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-mono text-amber-400">
                FRAME: {currentFrame} / 60 • {fps} FPS
              </div>
            </div>

            {/* Timeline Transport Bar */}
            <div className="w-full max-w-[440px] mt-4 p-3 bg-slate-100 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-lg bg-[#F59E0B] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-600">Target FPS:</span>
                  {([24, 30, 60] as const).map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setFps(rate)}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-bold cursor-pointer ${
                        fps === rate ? 'bg-[#F59E0B] text-slate-950' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {rate}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setOnionSkinning(!onionSkinning)}
                  className={`p-2 rounded-lg border text-xs cursor-pointer ${
                    onionSkinning
                      ? 'bg-amber-100 border-amber-300 text-[#B45309]'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                  title="Toggle Onion Skinning Ghosts"
                >
                  {onionSkinning ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

              {/* Frame Scrubber */}
              <input
                type="range"
                min="1"
                max="60"
                value={currentFrame}
                onChange={(e) => setCurrentFrame(Number(e.target.value))}
                className="w-full accent-[#F59E0B] cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#D97706] tracking-wider font-extrabold">Module 11</span>
              <h3 className="text-3xl font-black uppercase font-display text-slate-900 mt-1 mb-3">
                60 FPS Mobile Timeline
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy smooth 60 FPS frame playback with onion skinning overlays and responsive frame scrubber controls.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
              <div className="flex justify-between">
                <span>Render Engine:</span>
                <span className="text-[#D97706] font-bold">Vulkan Buffered Canvas</span>
              </div>
              <div className="flex justify-between">
                <span>Onion Skin Ghosts:</span>
                <span className="text-emerald-600 font-bold">Pre/Post Keyframe Overlays</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
