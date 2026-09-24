import React, { useState, useEffect } from 'react';
import { X, Save, Eye, Layers, Sparkles, Layout, Globe, ArrowRight } from 'lucide-react';
import { SectionItem, CustomSectionLayout, useCMS } from '../../context/CMSContext';
import { ImageUploadField } from '../common/ImageUploadField';

interface SectionEditModalProps {
  section: SectionItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SectionEditModal: React.FC<SectionEditModalProps> = ({
  section,
  isOpen,
  onClose
}) => {
  const { updateSection } = useCMS();

  const [formData, setFormData] = useState<Partial<SectionItem>>({});

  useEffect(() => {
    if (section) {
      setFormData({
        name: section.name,
        badge: section.badge || '',
        title: section.title || '',
        highlightWord: section.highlightWord || '',
        subtitle: section.subtitle || '',
        description: section.description || '',
        imageUrl: section.imageUrl || '',
        imageAlt: section.imageAlt || '',
        ctaText: section.ctaText || '',
        ctaLink: section.ctaLink || '',
        secondaryCtaText: section.secondaryCtaText || '',
        secondaryCtaLink: section.secondaryCtaLink || '',
        layout: section.layout || 'media-text',
        customHtml: section.customHtml || '',
        enabled: section.enabled
      });
    }
  }, [section]);

  if (!isOpen || !section) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection(section.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Edit Section: <span className="text-brand-purple">{section.name}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {section.type === 'system' ? 'Core Platform Section' : 'Custom Added Section'} • Order #{section.order}
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
        <form onSubmit={handleSave} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Section Display Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Internal Section Label
            </label>
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="e.g. Hero Banner"
              required
            />
          </div>

          {/* Badge / Pill Text */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Section Badge / Subtitle Tag
            </label>
            <input
              type="text"
              value={formData.badge || ''}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="e.g. Next-Generation Digital Transformation"
            />
          </div>

          {/* Main Title & Highlight Word */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Main Headline / Title
              </label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="Section headline"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Gradient Highlight Word
              </label>
              <input
                type="text"
                value={formData.highlightWord || ''}
                onChange={(e) => setFormData({ ...formData, highlightWord: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. Business Forward"
              />
            </div>
          </div>

          {/* Subtitle / Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Subtitle / Supporting Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.subtitle || formData.description || ''}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value, description: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple leading-relaxed"
              placeholder="Descriptive copy explaining the section's message..."
            />
          </div>

          {/* Image Upload Component */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
            <ImageUploadField
              label="Section Main Image (Upload or URL)"
              value={formData.imageUrl || ''}
              onChange={(newUrl) => setFormData({ ...formData, imageUrl: newUrl })}
              helperText="Upload any photo from your computer (converts to data URL) or enter an image link. Appears on Hero, About, EstatePilot & Custom sections."
            />
          </div>

          {/* Primary Call To Action */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Primary Button Text
              </label>
              <input
                type="text"
                value={formData.ctaText || ''}
                onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. Start a Project"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Primary Button Link
              </label>
              <input
                type="text"
                value={formData.ctaLink || ''}
                onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. /contact or https://..."
              />
            </div>
          </div>

          {/* Secondary Call To Action */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Secondary Button Text (Optional)
              </label>
              <input
                type="text"
                value={formData.secondaryCtaText || ''}
                onChange={(e) => setFormData({ ...formData, secondaryCtaText: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. Explore Services"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Secondary Button Link (Optional)
              </label>
              <input
                type="text"
                value={formData.secondaryCtaLink || ''}
                onChange={(e) => setFormData({ ...formData, secondaryCtaLink: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="e.g. /services"
              />
            </div>
          </div>

          {/* Custom Section Specific Options */}
          {section.type === 'custom' && (
            <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 space-y-3">
              <div className="text-xs font-bold text-brand-purple flex items-center gap-1.5">
                <Layout className="w-4 h-4" />
                <span>Custom Section Layout</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'media-text', label: 'Text + Media' },
                  { id: 'banner', label: 'Full Banner' },
                  { id: 'callout', label: 'Callout Box' },
                  { id: 'cards', label: 'Feature Cards' }
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, layout: l.id as CustomSectionLayout })}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      formData.layout === l.id
                        ? 'bg-brand-purple text-white border-brand-purple shadow-sm'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-purple/50'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Visibility Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Section Visibility</div>
              <div className="text-[11px] text-slate-500">Show or hide this section on the live website</div>
            </div>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, enabled: !formData.enabled })}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                formData.enabled
                  ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-500 border border-slate-300 dark:border-slate-600'
              }`}
            >
              {formData.enabled ? 'Live (Visible)' : 'Hidden (Disabled)'}
            </button>
          </div>

          {/* Modal Actions */}
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
              <Save className="w-4 h-4" />
              <span>Save & Apply Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
