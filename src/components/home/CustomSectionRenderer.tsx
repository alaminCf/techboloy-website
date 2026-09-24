import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionItem } from '../../context/CMSContext';
import { SectionHeader } from '../common/SectionHeader';

interface CustomSectionRendererProps {
  section: SectionItem;
}

export const CustomSectionRenderer: React.FC<CustomSectionRendererProps> = ({ section }) => {
  const layout = section.layout || 'media-text';

  // 1. Full Banner Layout
  if (layout === 'banner') {
    return (
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-purple/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          {section.badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-purple/20 text-purple-300 border border-brand-purple/40">
              <Sparkles className="w-3.5 h-3.5 text-brand-magenta" />
              <span>{section.badge}</span>
            </div>
          )}
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">
            {section.title}
          </h2>

          {section.subtitle && (
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {section.subtitle}
            </p>
          )}

          {section.ctaText && section.ctaLink && (
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={section.ctaLink}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
              >
                <span>{section.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {section.secondaryCtaText && section.secondaryCtaLink && (
                <Link
                  to={section.secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-brand-purple/50 transition-all"
                >
                  <span>{section.secondaryCtaText}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  // 2. Callout Box Layout
  if (layout === 'callout') {
    return (
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-purple/10 via-brand-magenta/5 to-slate-50 dark:to-slate-900/60 border border-brand-purple/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            {section.badge && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-brand-purple bg-brand-purple/10">
                {section.badge}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
              {section.title}
            </h3>
            {section.subtitle && (
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {section.subtitle}
              </p>
            )}
          </div>
          {section.ctaText && section.ctaLink && (
            <Link
              to={section.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex-shrink-0"
            >
              <span>{section.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>
    );
  }

  // 3. Feature Cards Layout
  if (layout === 'cards') {
    return (
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={section.badge || "Key Highlights"}
          title={section.title || "Feature Overview"}
          highlightWord={section.highlightWord}
          subtitle={section.subtitle}
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {['Strategic Planning', 'Agile Engineering', 'Continuous Evolution'].map((cardTitle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{cardTitle}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {section.subtitle || "High-performance enterprise systems aligned with measurable business objectives."}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 4. Default: Text + Media Layout
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            {section.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{section.badge}</span>
              </span>
            )}
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
              {section.title}
            </h2>

            {section.subtitle && (
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {section.subtitle}
              </p>
            )}

            {section.ctaText && section.ctaLink && (
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to={section.ctaLink}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
                >
                  <span>{section.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {section.secondaryCtaText && section.secondaryCtaLink && (
                  <Link
                    to={section.secondaryCtaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-purple transition-colors"
                  >
                    <span>{section.secondaryCtaText}</span>
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            {section.imageUrl ? (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src={section.imageUrl}
                  alt={section.imageAlt || section.title || 'Section Image'}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-80 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-8 text-center text-slate-400 text-sm">
                No image specified for this custom section. You can upload an image anytime in the section editor.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
