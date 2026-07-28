import { FeatureItem, GalleryItem, BenchmarkMetric, ToolSpec } from '../types';

export const APK_DOWNLOAD_URL = 'https://github.com/chavankrushna660-hub/click-counter-fun/raw/refs/heads/main/public/files/base.apk';

export const FEATURE_BLOCKS: FeatureItem[] = [
  {
    id: 'feature-01',
    num: '01',
    title: 'Pro Workspace',
    highlightText: 'Workspace',
    description: 'The AnimStudio interface is built for professional focus. Featuring the signature Light Orange Theme, it provides a high-contrast environment that reduces eye strain during long production hours. Manage complex hierarchies with the advanced tree view, and access 150+ tools with a single tap.',
    tools: ['SEL', 'PEN', 'BRS', 'ERS'],
    image: 'https://i.ibb.co/Y4cn2hcg/Chat-GPT-Image-Jul-28-2026-03-02-39-PM.png',
    alignment: 'left',
    badge: 'Core UI',
    specDetails: {
      engineModule: 'AnimStudio UI Framework v2.4',
      gpuAcceleration: 'Vulkan / OpenGL ES 3.2',
      precision: '64-bit Floating Point Canvas',
      keyCapabilities: ['Multi-panel docking layout', 'Sub-pixel vector stroke rendering', 'Custom touch shortcut wheel', 'Dynamic RAM caching up to 120 FPS']
    }
  },
  {
    id: 'feature-02',
    num: '02',
    title: 'Elite Mesh Warp',
    highlightText: 'Mesh Warp',
    description: 'The MSH (Mesh Wrap) tool allows you to subdivide any vector object into a high-density vertex grid. This enables organic stretching, muscle simulation, and fluid transformations that are impossible in standard vector apps. Control every node with surgical precision.',
    tools: ['Vertex Edit', 'Subdivision', 'MSH'],
    image: 'https://i.ibb.co/TBMPn1tZ/Chat-GPT-Image-Jul-28-2026-02-08-55-PM.png',
    alignment: 'right',
    badge: 'Deformation Engine',
    specDetails: {
      engineModule: 'DynaMesh Vector Solver 3.0',
      gpuAcceleration: 'Hardware Shader Warp',
      precision: '0.001mm Vertex Delta Precision',
      keyCapabilities: ['Adaptive Triangulation Mesh', 'Soft-Selection Weight Painting', 'Real-Time Stress/Tension Maps', 'Non-destructive Layer Modifiers']
    }
  },
  {
    id: 'feature-03',
    num: '03',
    title: 'Skeletal Rigging',
    highlightText: 'Rigging',
    description: 'Build complex characters with the industry-standard Bone System. Link parts using a robust Parent-Child hierarchy, and utilize Inverse Kinematics (IK) for natural joint movement. Your character\'s anatomy will hold together perfectly even during extreme poses.',
    tools: ['IK/FK', 'Bones', 'Hierarchy'],
    image: 'https://i.ibb.co/S4pDYdx6/Chat-GPT-Image-Jul-28-2026-02-27-22-PM.png',
    alignment: 'left',
    badge: 'Character Rigging',
    specDetails: {
      engineModule: 'BioRig IK/FK Solver Engine',
      gpuAcceleration: 'Compute Shader Bone Weighting',
      precision: 'Dual Quaternion Skinning',
      keyCapabilities: ['2-Bone & N-Bone IK Constraints', 'Angle Limits & Stretch Stiffness', 'Auto Skinning Weight Calculation', 'Pose Library Export & Mirroring']
    }
  },
  {
    id: 'feature-04',
    num: '04',
    title: 'Puppet Pins',
    highlightText: 'Pins',
    description: 'Place interactive PINs to define flex points and joints without complex rigging. Perfect for secondary motion like hair, fabric, or subtle organic breathing effects. The engine calculates smooth deformations in real-time.',
    tools: ['PIN', 'Warp'],
    image: 'https://i.ibb.co/WpzZM0Yj/Chat-GPT-Image-Jul-28-2026-02-05-25-PM.png',
    alignment: 'right',
    badge: 'Quick Deformation',
    specDetails: {
      engineModule: 'PinPhysics 2.1',
      gpuAcceleration: 'Real-time Spring Constraints',
      precision: 'Dynamic Mass-Spring Mesh Solver',
      keyCapabilities: ['Overlap & Stiff Pins', 'Secondary Spring Physics', 'Drag-and-Animate Keyframing', 'Influence Radius Sliders']
    }
  },
  {
    id: 'feature-05',
    num: '05',
    title: 'Spline Path Control',
    highlightText: 'Path Control',
    afterHighlight: '',
    description: 'Fit your drawings to a Bezier Spline (SPL). This tool allows strokes to follow a curved path, maintaining volume while bending. Ideal for tentacles, snakes, or liquid movements where the stroke must follow a specific trajectory.',
    tools: ['SPL', 'Bezier'],
    image: 'https://i.ibb.co/gFLBKHmM/Chat-GPT-Image-Jul-28-2026-02-03-26-PM.png',
    alignment: 'left',
    badge: 'Path Deformer',
    specDetails: {
      engineModule: 'CurveDeform Spline Matrix',
      gpuAcceleration: 'GPU Tesselation Pipeline',
      precision: 'Sub-pixel Arc Length Parameterization',
      keyCapabilities: ['Continuous Tangent Matching', 'Variable Width Along Path', 'Path Offset & Repeat Tiling', 'Dynamic Curve Flow Keyframes']
    }
  },
  {
    id: 'feature-06',
    num: '06',
    title: 'Liquify Brush',
    highlightText: 'Brush',
    description: 'The LQB (Liquify Brush) lets you sculpt your vectors like clay. Push, pull, twist, and bloat geometry interactively. This tool is essential for expressive facial animation and quick silhouette adjustments.',
    tools: ['LQB', 'Sculpt'],
    image: 'https://i.ibb.co/5hhK997C/Chat-GPT-Image-Jul-28-2026-02-01-47-PM.png',
    alignment: 'right',
    badge: 'Sculpting',
    specDetails: {
      engineModule: 'ClaySculpt Vector Brush Engine',
      gpuAcceleration: 'Compute Shader Distortion',
      precision: 'Pressure-Sensitive Stylus Sampling',
      keyCapabilities: ['Push, Twirl, Reconstruct Mode', 'Stylus Pressure & Tilt Support', 'Smooth Polygon Relaxation', 'Undo-History Brush Layers']
    }
  },
  {
    id: 'feature-07',
    num: '07',
    title: '360° Studio Wizard',
    highlightText: 'Studio Wizard',
    description: 'Transform 2D drawings into pseudo-3D turnarounds. Register multiple angles (front, side, 3/4) and let the 360° Wizard interpolate between them. Create immersive depth and rotation without leaving the 2D workspace.',
    tools: ['360', 'Turnaround'],
    image: 'https://i.ibb.co/FL4B3m1z/Chat-GPT-Image-Jul-28-2026-02-10-33-PM.png',
    alignment: 'left',
    badge: 'Pseudo-3D Engine',
    specDetails: {
      engineModule: 'OrthoTurnaround 3D Interpolator',
      gpuAcceleration: 'Hardware Normal Map Synthesis',
      precision: 'Keyframe Slice Morphing',
      keyCapabilities: ['Multi-angle Key Dialing', 'Parallax Depth Layers', 'Automatic Mesh Cross-fading', 'Gumball Rotation Gizmo']
    }
  },
  {
    id: 'feature-08',
    num: '08',
    title: 'Scene Composition',
    highlightText: 'Composition',
    description: 'Manage large-scale environments with ease. AnimStudio supports unlimited layers, background masking, and advanced blending modes. Build complex worlds with parallax depth using our multi-plane camera logic.',
    tools: ['Layers', 'Blend'],
    image: 'https://i.ibb.co/wNdc6PML/Chat-GPT-Image-Jul-28-2026-02-12-56-PM.png',
    alignment: 'right',
    badge: 'Multi-plane Scene',
    specDetails: {
      engineModule: 'StageCompositor Pro Engine',
      gpuAcceleration: 'HDR 32-bit Color Pipeline',
      precision: 'Parallax Z-Depth Sorting',
      keyCapabilities: ['Multi-camera Focal Lengths', 'Blending Modes (Multiply, Add, Screen)', 'Clipping Mask Hierarchies', 'Depth of Field Blur']
    }
  },
  {
    id: 'feature-10',
    num: '10',
    title: 'Geometry Control',
    highlightText: 'Control',
    description: 'Deep dive into the underlying geometry. Optimize your paths, simplify nodes, and manage mesh density to balance performance and quality. The Mesh Edit Mode gives you total control over the mathematical core of your art.',
    tools: ['Nodes', 'Path'],
    image: 'https://i.ibb.co/HTmsZgDt/Chat-GPT-Image-Jul-28-2026-02-33-28-PM.png',
    alignment: 'left',
    badge: 'Vector Math',
    specDetails: {
      engineModule: 'PolyReduce Math Core',
      gpuAcceleration: 'Parallel Vector Simplification',
      precision: 'Exact Bezier Point Control',
      keyCapabilities: ['Auto Curve Simplification', 'Boolean Path Operations', 'Symmetry & Grid Snap', 'Sub-node Align & Distribute']
    }
  },
  {
    id: 'feature-11',
    num: '11',
    title: 'Export Pipeline',
    highlightText: 'Pipeline',
    description: 'Export your masterpieces in 4K MP4, animated GIF, or lossless PNG sequences. The hardware-accelerated encoder ensures fast renders directly on your mobile device. Supports custom frame rates up to 60 FPS.',
    tools: ['MP4', 'GIF', '4K'],
    image: 'https://i.ibb.co/NdHC3nwZ/Chat-GPT-Image-Jul-28-2026-02-37-47-PM.png',
    alignment: 'right',
    badge: 'Mobile Renderer',
    specDetails: {
      engineModule: 'MediaCodec Hardware Encoder',
      gpuAcceleration: 'NVENC / Mali-GPU Direct Export',
      precision: 'Lossless 4K 60 FPS H.265/AVC',
      keyCapabilities: ['ProRes & PNG Sequence Export', 'Transparent Alpha Channel Video', 'Custom Bitrate & Audio Sync', 'Background Batch Rendering']
    }
  },
  {
    id: 'feature-12',
    num: '12',
    title: 'Smart Logic',
    highlightText: 'Logic',
    description: 'Automate repetitive motions with Loop & Custom Logic. Define when-then sequences and timeouts to create self-animating cycles, perfect for walk cycles and environmental FX.',
    tools: ['Loop', 'Logic'],
    image: 'https://i.ibb.co/FLC4QH9y/Chat-GPT-Image-Jul-28-2026-02-02-02-PM.png',
    alignment: 'left',
    badge: 'Animation Logic',
    specDetails: {
      engineModule: 'AnimLogic Script Machine',
      gpuAcceleration: 'Zero-overhead Logic Engine',
      precision: 'Deterministic State Evaluation',
      keyCapabilities: ['Cycle Loop Point Generators', 'Event Triggers & Audio Cues', 'Parameter Drivers & Oscillators', 'Modular State Machine']
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mecha Armor Turnaround',
    author: 'Kira Vance (Lead Animator)',
    category: '360° Character Rig',
    imageUrl: 'https://i.ibb.co/5gMkBW49/Chat-GPT-Image-Jul-28-2026-02-23-36-PM.png',
    fps: 60,
    format: '4K MP4 / 60 FPS',
    description: 'Complete 360-degree character turn crafted using Skeletal Rigging and 360° Studio Wizard in AnimStudio.'
  },
  {
    id: 'gal-2',
    title: 'Cyberpunk Alley - Parallax World',
    author: 'Ren Tanaka',
    category: 'Scene Composition',
    imageUrl: 'https://i.ibb.co/wNdc6PML/Chat-GPT-Image-Jul-28-2026-02-12-56-PM.png',
    fps: 60,
    format: 'Multi-plane Scene',
    description: 'Interactive environment utilizing 42 layers, depth blur, and vector blending modes.'
  },
  {
    id: 'gal-3',
    title: 'Dragon Flame Mesh Deformation',
    author: 'Alex Vance',
    category: 'Mesh Warp & Liquify',
    imageUrl: 'https://i.ibb.co/TBMPn1tZ/Chat-GPT-Image-Jul-28-2026-02-08-55-PM.png',
    fps: 60,
    format: '60 FPS Physics',
    description: 'Organic flame animation driven by Liquify Brush and Mesh Warp subdivision.'
  },
  {
    id: 'gal-4',
    title: 'Skeletal Action Walk Cycle',
    author: 'Elena Rostova',
    category: 'Skeletal Rigging',
    imageUrl: 'https://i.ibb.co/S4pDYdx6/Chat-GPT-Image-Jul-28-2026-02-27-22-PM.png',
    fps: 60,
    format: '2Bone IK System',
    description: 'High-speed character locomotion using Inverse Kinematics and Parent-Child hierarchy.'
  },
  {
    id: 'gal-5',
    title: 'Vector Spline Creature Motion',
    author: 'David Chen',
    category: 'Spline Control',
    imageUrl: 'https://i.ibb.co/gFLBKHmM/Chat-GPT-Image-Jul-28-2026-02-03-26-PM.png',
    fps: 60,
    format: 'Bezier Path Flow',
    description: 'Fluid aquatic movement created by constraining vector paths along dynamic Bezier curves.'
  },
  {
    id: 'gal-6',
    title: 'Smart Logic FX Simulation',
    author: 'Studio AnimX',
    category: 'Smart Logic Engine',
    imageUrl: 'https://i.ibb.co/FLC4QH9y/Chat-GPT-Image-Jul-28-2026-02-02-02-PM.png',
    fps: 60,
    format: 'Procedural Logic',
    description: 'Automated environmental particles triggered by parameter drivers and loop cycles.'
  }
];

export const BENCHMARK_METRICS: BenchmarkMetric[] = [
  {
    name: 'Canvas Render Framerate',
    animStudioScore: 60,
    standardAppScore: 24,
    unit: 'FPS',
    higherIsBetter: true,
    description: 'Sustained hardware-accelerated playback with 500+ active vector layers.'
  },
  {
    name: 'Mesh Warp Calculation Time',
    animStudioScore: 1.2,
    standardAppScore: 18.5,
    unit: 'ms/frame',
    higherIsBetter: false,
    description: 'Time required to deform a 10,000 vertex mesh grid in real time.'
  },
  {
    name: 'IK Bone Rig Solving Latency',
    animStudioScore: 0.4,
    standardAppScore: 8.2,
    unit: 'ms',
    higherIsBetter: false,
    description: 'Input-to-render response time when dragging skeletal joint targets.'
  },
  {
    name: '4K Export Speed (10s Animation)',
    animStudioScore: 4.8,
    standardAppScore: 32.0,
    unit: 'seconds',
    higherIsBetter: false,
    description: 'Hardware MediaCodec encoding time on ARM64 mobile hardware.'
  }
];

export const TOOL_SPECS_DATABASE: Record<string, ToolSpec> = {
  SEL: {
    chip: 'SEL',
    name: 'Universal Select & Transform',
    category: 'Selection',
    shortcut: 'V',
    description: 'Multi-object select, rotation anchor adjustment, and bounding box transform with sub-pixel snapping.',
    features: ['Lasso & Box Select', 'Anchor point re-positioning', 'Multi-layer selection grouping', 'Numerical transform inputs']
  },
  PEN: {
    chip: 'PEN',
    name: 'Precision Pen & Vector Draw',
    category: 'Drawing',
    shortcut: 'P',
    description: 'Industry-standard Bezier pen tool for drawing crisp vector strokes with smooth curvature controls.',
    features: ['Auto-smooth Bezier handles', 'Pressure-to-width mapping', 'Corner vs Smooth node toggles', 'Live path preview']
  },
  BRS: {
    chip: 'BRS',
    name: 'Pro Vector Brush',
    category: 'Drawing',
    shortcut: 'B',
    description: 'Natural media vector brush engine supporting pressure, tilt, and velocity dynamics.',
    features: ['Custom textured brush tips', 'Streamline path smoothing', 'Dynamic taper control', 'Real-time vector expansion']
  },
  ERS: {
    chip: 'ERS',
    name: 'Smart Vector Eraser',
    category: 'Drawing',
    shortcut: 'E',
    description: 'Vector stroke slicing and object eraser that cleanly recalculates paths and end caps.',
    features: ['Stroke intersection erase', 'Area vector mask eraser', 'Opacity feathering', 'Soft node trim']
  },
  'Vertex Edit': {
    chip: 'Vertex Edit',
    name: 'Vertex Node Sculptor',
    category: 'Deformation',
    shortcut: 'V',
    description: 'Direct vertex manipulation tool for tweaking individual mesh grid points in 2D space.',
    features: ['Soft selection falloff', 'Group vertex lock', 'Normal vector alignment', 'Coordinates inspector']
  },
  Subdivision: {
    chip: 'Subdivision',
    name: 'Mesh Subdivider',
    category: 'Deformation',
    shortcut: 'Shift + S',
    description: 'Increases mesh density dynamically to provide hyper-detailed local deformation capabilities.',
    features: ['Adaptive quad-to-tri conversion', 'Density heatmaps', 'Sub-mesh masking', 'Edge loop insertion']
  },
  MSH: {
    chip: 'MSH',
    name: 'Mesh Wrap Generator',
    category: 'Deformation',
    shortcut: 'M',
    description: 'Applies a deformation cage over vector shapes for organic bending and muscle flexing.',
    features: ['Auto boundary wrapping', 'Curvature-preserving warp', 'Envelope control points', 'Bake deformation to path']
  },
  'IK/FK': {
    chip: 'IK/FK',
    name: 'Kinematic Solver Switch',
    category: 'Rigging',
    shortcut: 'K',
    description: 'Seamlessly blend between Forward Kinematics (FK) and Inverse Kinematics (IK) during keyframing.',
    features: ['IK/FK Snap & Match', 'Stretchable bone dynamics', 'Joint angle constraints', 'Pole target pinning']
  },
  Bones: {
    chip: 'Bones',
    name: 'Skeletal Bone Builder',
    category: 'Rigging',
    shortcut: 'Shift + B',
    description: 'Create articulated skeletal hierarchies with custom bone thickness and skinning weights.',
    features: ['Parent-child bone links', 'Weight painting brush', 'Bone rotation locks', 'Visual bone color coding']
  },
  Hierarchy: {
    chip: 'Hierarchy',
    name: 'Node Tree & Outliner',
    category: 'Rigging',
    shortcut: 'H',
    description: 'Comprehensive layer and bone tree outliner for managing deep animation rigs effortlessly.',
    features: ['Drag-and-drop parenting', 'Search & filter by type', 'Lock & visibility toggles', 'Group instance duplication']
  },
  PIN: {
    chip: 'PIN',
    name: 'Puppet Flex Pin',
    category: 'Puppet Physics',
    shortcut: 'Ctrl + P',
    description: 'Drop deformation pins onto artwork for instant squash, stretch, and secondary motion.',
    features: ['Position & Rotation pins', 'Spring mass physics', 'Pin stiffness slider', 'Overlap depth sorting']
  },
  SPL: {
    chip: 'SPL',
    name: 'Spline Curve Path Deformer',
    category: 'Paths',
    shortcut: 'S',
    description: 'Bends vector objects along a master Bezier guide curve with full volume retention.',
    features: ['Curve length lock', 'Spline twist & roll', 'Path offset animation', 'Multi-object spline constraint']
  },
  LQB: {
    chip: 'LQB',
    name: 'Liquify Clay Sculpt Brush',
    category: 'Sculpting',
    shortcut: 'L',
    description: 'Pushes, pulls, and distorts artwork geometry like digital clay in real-time.',
    features: ['Push / Pull mode', 'Twirl clockwise / CCW', 'Bloat & Pinch', 'Reconstruct restore brush']
  },
  360: {
    chip: '360',
    name: '360° Turnaround Dial',
    category: 'Studio Wizard',
    shortcut: 'Alt + R',
    description: 'Interactive rotation gizmo that interpolates artwork across multiple registered angles.',
    features: ['Dial angle controller', 'Keyframe angle registration', 'Symmetry mirror option', 'Depth parallax stack']
  },
  MP4: {
    chip: 'MP4',
    name: 'Hardware MP4 / H.265 Encoder',
    category: 'Export',
    shortcut: 'Ctrl + E',
    description: 'Ultra-fast hardware-accelerated mobile rendering engine outputting crisp 4K 60FPS video.',
    features: ['H.264 & H.265 codecs', 'Variable & Constant Bitrate', 'Audio track muxing', 'GPU Direct encode']
  },
  Loop: {
    chip: 'Loop',
    name: 'Smart Logic Cycle Generator',
    category: 'Logic Engine',
    shortcut: 'Ctrl + L',
    description: 'Creates seamlessly looping animation cycles with customizable easing curves and ping-pong modes.',
    features: ['Loop start/end points', 'Ping-pong reversal', 'Phase offset sliders', 'Parametric frequency drivers']
  }
};
