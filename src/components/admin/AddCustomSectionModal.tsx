import React, { useState } from 'react';
import { X, Plus, Layers, Layout, Sparkles } from 'lucide-react';
import { CustomSectionLayout, useCMS } from '../../context/CMSContext';
import { ImageUploadField } from '../common/ImageUploadField';

interface AddCustomSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCustomSectionModal: React.FC<AddCustomSectionModalProps> = ({
  isOpen,
  onClose
}) => {
  const { addCustomSection } = useCMS();

  const [name, setName] = useState('');
  const [layout, setLayout] = useState<CustomSectionLayout>('media-text');
  const [badge, setBadge] = useState('New Announcement');
  const [title, setTitle] = useState('');
  const [highlightWord, setHighlightWord] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ctaText, setCtaText] = useState('Learn More');
  const [ctaLink, setCtaLink] = useState('/contact');
  const [secondaryCtaText, setSecondaryCtaText] = useState('');
  const [secondaryCtaLink, setSecondaryCtaLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !title) return;

    addCustomSection({
      name,
      layout,
      badge,
      title,
      highlightWord,
      subtitle,
      imageUrl,
      ctaText,
      ctaLink,
      secondaryCtaText,
      secondaryCtaLink,
      enabled: true
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Add New Custom Section
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Design and place a new content block onto your website
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Section Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Section Label / Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="e.g. Special Offer Banner, Case Study Highlight, FAQ Block"
            />
          </div>

          {/* Layout Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Choose Layout Style
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'media-text', title: 'Text + Media', desc: 'Side-by-side headline & image' },
                { id: 'banner', title: 'Full Banner', desc: 'Centered high-impact dark gradient' },
                { id: 'callout', title: 'Callout Box', desc: 'Contained interactive card' },
                { id: 'cards', title: 'Feature Grid', desc: 'Multi-column value proposition' }
              ].map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLayout(l.id as CustomSectionLayout)}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    layout === l.id
                      ? 'bg-brand-purple/10 border-brand-purple text-brand-purple ring-2 ring-brand-purple/20'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{l.title}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{l.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Badge & Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Badge / Pill Tag
              </label>
              <input
                type="text"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. Special Announcement"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Gradient Highlight Word
              </label>
              <input
                type="text"
                value={highlightWord}
                onChange={(e) => setHighlightWord(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="Word to emphasize with gradient"
              />
            </div>
          </div>

          {/* Headline */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Headline / Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="e.g. Scaling Enterprise Operations with Intelligent Automation"
            />
          </div>

          {/* Subtitle / Paragraph */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Paragraph Description
            </label>
            <textarea
              rows={3}
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="Tell visitors about this new feature, service, or initiative..."
            />
          </div>

          {/* Image Uploader */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
            <ImageUploadField
              label="Section Image (Upload or URL)"
              value={imageUrl}
              onChange={(url) => setImageUrl(url)}
              helperText="Upload any image file or enter a photo URL for this section."
            />
          </div>

          {/* Primary CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Button Text
              </label>
              <input
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. Contact Our Team"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Button Link
              </label>
              <input
                type="text"
                value={ctaLink}
                onChange={(e) => setCtaLink(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. /contact"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Section to Website</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
