import React, { useRef, useState } from 'react';
import { Upload, Link as LinkIcon, X, Check, Sun, Moon } from 'lucide-react';

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  helperText?: string;
  placeholder?: string;
  presets?: { label: string; url: string }[];
  previewDarkDefault?: boolean;
}

export const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  label,
  value,
  onChange,
  helperText = "Upload a file from your device or paste an image URL",
  placeholder = "https://example.com/image.jpg or /assets/...",
  presets,
  previewDarkDefault = false
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeMode, setActiveMode] = useState<'upload' | 'url'>('upload');
  const [uploadError, setUploadError] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [previewDark, setPreviewDark] = useState<boolean>(previewDarkDefault);

  const defaultPresetAssets = presets || [
    { label: 'TB Light Logo', url: '/assets/tb-logo-light.png' },
    { label: 'TB Dark Logo', url: '/assets/tb-logo-dark.png' },
    { label: 'TB White Logo', url: '/assets/tb-logo-white.png' },
    { label: 'TB Icon', url: '/assets/tb-icon.png' },
    { label: 'Award Photo', url: '/assets/award-photo.jpg' }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Reject huge files over 10MB to protect device memory
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Image size exceeds 10MB. Please choose a smaller image.');
      return;
    }

    setIsProcessing(true);

    // If SVG, directly read as DataURL to retain vector precision
    if (file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setIsProcessing(false);
        const result = uploadEvent.target?.result as string;
        if (result) onChange(result);
      };
      reader.onerror = () => {
        setIsProcessing(false);
        setUploadError('Failed to read SVG file.');
      };
      reader.readAsDataURL(file);
      return;
    }

    // For raster images (PNG, JPG, WebP), compress client-side via canvas
    // to keep localStorage usage well within browser limits (~30KB - 80KB)
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const rawDataUrl = uploadEvent.target?.result as string;
      if (!rawDataUrl) {
        setIsProcessing(false);
        return;
      }

      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          let { width, height } = img;
          const maxDimension = 640; // Generous for crisp retina displays

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            setIsProcessing(false);
            onChange(rawDataUrl);
            return;
          }

          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);

          // Preserve transparency with PNG encoding
          const optimizedDataUrl = canvas.toDataURL('image/png', 0.9);
          setIsProcessing(false);
          onChange(optimizedDataUrl);
        } catch (err) {
          setIsProcessing(false);
          onChange(rawDataUrl);
        }
      };

      img.onerror = () => {
        setIsProcessing(false);
        setUploadError('Failed to decode image.');
      };

      img.src = rawDataUrl;
    };

    reader.onerror = () => {
      setIsProcessing(false);
      setUploadError('Failed to read file from disk.');
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          {label}
        </label>
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-[11px]">
          <button
            type="button"
            onClick={() => setActiveMode('upload')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${
              activeMode === 'upload'
                ? 'bg-white dark:bg-slate-700 text-brand-purple shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Upload className="w-3 h-3" />
            <span>Upload File</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('url')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${
              activeMode === 'url'
                ? 'bg-white dark:bg-slate-700 text-brand-purple shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <LinkIcon className="w-3 h-3" />
            <span>Image URL</span>
          </button>
        </div>
      </div>

      {activeMode === 'upload' ? (
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-brand-purple rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50 dark:bg-slate-900/50 hover:bg-brand-purple/5 group"
          >
            <Upload className="w-6 h-6 mx-auto text-slate-400 group-hover:text-brand-purple transition-colors mb-1.5" />
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              {isProcessing ? 'Optimizing & compressing image...' : 'Click to select image from your device'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              PNG, JPG, WebP, SVG (Auto-optimized for instant cloud & storage sync)
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
          />
          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-slate-500">Presets:</span>
            {defaultPresetAssets.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => onChange(p.url)}
                className={`text-[10px] px-2 py-0.5 rounded-md border transition-all ${
                  value === p.url
                    ? 'bg-brand-purple/10 border-brand-purple text-brand-purple font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-purple/50'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {uploadError && (
        <div className="text-xs text-rose-500 font-medium">{uploadError}</div>
      )}

      {/* Image Preview */}
      {value && (
        <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 p-2.5 flex items-center gap-3">
          {/* Preview Box with Dark/Light Toggle */}
          <div 
            className={`w-16 h-14 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-1.5 transition-colors ${
              previewDark ? 'bg-slate-950' : 'bg-white'
            }`}
          >
            <img
              src={value}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="flex-grow min-w-0">
            <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
              {value.startsWith('data:') ? 'Custom uploaded image (Ready)' : value}
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
              <Check className="w-3 h-3" />
              <span>Image active & saved</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setPreviewDark(!previewDark)}
              title={previewDark ? "View on white background" : "View on dark background"}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {previewDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => onChange('')}
              title="Remove image"
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {helperText && (
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          {helperText}
        </p>
      )}
    </div>
  );
};
