import React, { useRef, useState } from 'react';
import { Upload, Link as LinkIcon, X, Image as ImageIcon, Check } from 'lucide-react';

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  helperText?: string;
  placeholder?: string;
}

export const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  label,
  value,
  onChange,
  helperText = "Upload a file from your device or paste an image URL",
  placeholder = "https://example.com/image.jpg or /assets/..."
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeMode, setActiveMode] = useState<'upload' | 'url'>('upload');
  const [uploadError, setUploadError] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit for localStorage (max ~4MB recommended for localStorage)
    if (file.size > 4 * 1024 * 1024) {
      setUploadError('Image size exceeds 4MB. Please select a smaller image or use an image URL.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      if (result) {
        onChange(result);
      }
    };
    reader.onerror = () => {
      setUploadError('Failed to read file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const presetAssets = [
    { label: 'Award Photo', url: '/assets/award-photo.jpg' },
    { label: 'TB Fingerprint Icon', url: '/assets/tb-icon.png' },
    { label: 'TB White Logo', url: '/assets/tb-white-logo.png' },
    { label: 'Office Team', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80' },
    { label: 'Tech Code', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80' }
  ];

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
              Click to choose image from your computer
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              PNG, JPG, WebP, SVG (up to 4MB)
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
            {presetAssets.map((p) => (
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
        <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 p-2 flex items-center gap-3">
          <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-900 flex-shrink-0 flex items-center justify-center border border-slate-200 dark:border-slate-700">
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="flex-grow min-w-0">
            <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
              {value.startsWith('data:') ? 'Custom uploaded image (Data URL)' : value}
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
              <Check className="w-3 h-3" />
              <span>Image active & ready</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onChange('')}
            title="Remove image"
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
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
