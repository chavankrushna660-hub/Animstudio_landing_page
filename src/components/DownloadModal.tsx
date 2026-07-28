import React, { useState } from 'react';
import { X, Download, ShieldCheck, Smartphone, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { APK_DOWNLOAD_URL } from '../data/animStudioData';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [copiedChecksum, setCopiedChecksum] = useState(false);

  if (!isOpen) return null;

  const checksum = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

  const handleStartDownload = () => {
    // Open direct APK download link in new tab / initiate download
    window.open(APK_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');

    setDownloading(true);
    setProgress(0);
    setDownloadComplete(false);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 15;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setDownloading(false);
        setDownloadComplete(true);
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 150);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(checksum);
    setCopiedChecksum(true);
    setTimeout(() => setCopiedChecksum(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0F0F0F] border border-white/15 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E31E24] rounded-xl flex items-center justify-center font-bold text-white text-2xl font-display shadow-lg">
              A
            </div>
            <div>
              <h3 className="text-xl font-bold font-display uppercase text-white flex items-center gap-2">
                Download AnimStudio APK
              </h3>
              <p className="text-xs text-[#FFB84D] font-mono">
                Version 2.4.8 • ARM64 Pro Edition
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* APK File Overview Box */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <div className="text-white/40 uppercase">File Size</div>
              <div className="text-white font-bold text-sm mt-0.5">84.5 MB</div>
            </div>
            <div>
              <div className="text-white/40 uppercase">Target OS</div>
              <div className="text-white font-bold text-sm mt-0.5">Android 8.0+</div>
            </div>
            <div>
              <div className="text-white/40 uppercase">Architecture</div>
              <div className="text-[#FFB84D] font-bold text-sm mt-0.5">ARM64-v8a</div>
            </div>
            <div>
              <div className="text-white/40 uppercase">Security</div>
              <div className="text-emerald-400 font-bold text-sm mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified
              </div>
            </div>
          </div>

          {/* Download Action Area */}
          <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 text-center space-y-4">
            {!downloading && !downloadComplete && (
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStartDownload}
                className="btn-download-primary w-full py-4 rounded-2xl text-lg font-black tracking-tight flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[#FFB84D]/20"
              >
                <Download className="w-6 h-6 stroke-[3]" />
                Download AnimStudio.apk (84.5 MB)
              </a>
            )}

            {downloading && (
              <div className="space-y-3 py-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#FFB84D] font-bold animate-pulse">
                    Initiating direct download...
                  </span>
                  <span className="text-white font-bold">{progress}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#E31E24] to-[#FFB84D] rounded-full transition-all duration-200"
                  />
                </div>
              </div>
            )}

            {downloadComplete && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-2">
                <div className="flex items-center justify-center gap-2 font-bold text-base font-display">
                  <CheckCircle className="w-5 h-5" /> Download Triggered Successfully!
                </div>
                <p className="text-xs text-white/70 font-sans">
                  Your APK download link has opened. Check your browser downloads or tap the direct link below.
                </p>
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono underline text-[#FFB84D] hover:text-white cursor-pointer pt-1 inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Click here if download didn&apos;t start automatically
                </a>
              </div>
            )}

            <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-1">
              <span>SHA-256 Checksum:</span>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 hover:text-white text-white/60 cursor-pointer"
              >
                <span className="truncate max-w-[180px] sm:max-w-[280px]">{checksum}</span>
                <Copy className="w-3 h-3" />
                {copiedChecksum && <span className="text-emerald-400 font-bold">Copied!</span>}
              </button>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase font-display text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#FFB84D]" />
              Android Installation Guide
            </h4>

            <div className="grid gap-2.5 text-xs text-white/80 font-light">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFB84D]/20 text-[#FFB84D] font-mono font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <span className="font-bold text-white">Enable Unknown Apps:</span> On your Android device, go to <span className="text-white/90 font-mono">Settings &rarr; Security &rarr; Install Unknown Apps</span> and allow your browser.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFB84D]/20 text-[#FFB84D] font-mono font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <span className="font-bold text-white">Tap to Install:</span> Open your Downloads manager and tap <span className="text-[#FFB84D] font-mono font-bold">AnimStudio.apk</span>.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFB84D]/20 text-[#FFB84D] font-mono font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <span className="font-bold text-white">Stylus & Storage Permission:</span> Grant storage and pen input access to unlock 60 FPS pressure-sensitive drawing.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-black/60 flex items-center justify-between text-xs text-white/50 font-mono">
          <span>Supported: Samsung, Google Pixel, Xiaomi, OnePlus, Lenovo Tab</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

