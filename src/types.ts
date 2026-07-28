export interface FeatureItem {
  id: string;
  num: string;
  title: string;
  highlightText: string;
  afterHighlight?: string;
  description: string;
  tools: string[];
  image: string;
  alignment: 'left' | 'right';
  badge?: string;
  specDetails: {
    engineModule: string;
    gpuAcceleration: string;
    precision: string;
    keyCapabilities: string[];
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  author: string;
  category: string;
  imageUrl: string;
  fps: number;
  format: string;
  description: string;
}

export interface BenchmarkMetric {
  name: string;
  animStudioScore: number;
  standardAppScore: number;
  unit: string;
  higherIsBetter: boolean;
  description: string;
}

export interface ToolSpec {
  chip: string;
  name: string;
  category: string;
  shortcut: string;
  description: string;
  features: string[];
}
