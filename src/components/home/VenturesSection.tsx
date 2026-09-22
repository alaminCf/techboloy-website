import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { venturesData } from '../../data/ventures';
import { SectionHeader } from '../common/SectionHeader';

export const VenturesSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Venture Studio"
          title="More Than a Technology Company."
          highlightWord="Technology Company."
          subtitle="We build, support and grow technology-driven ventures that transform foundational industries."
          align="center"
        />

        {/* 4 Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venturesData.map((venture) => (
            <div
              key={venture.id}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-purple/60 shadow-sm hover:shadow-card-elevated hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Logo badge + Status */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shadow-glow-sm">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-white text-base">
                      {venture.logoPlaceholder}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                    {venture.status}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-brand-purple uppercase tracking-wider mb-1">
                  {venture.category}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors mb-2">
                  {venture.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {venture.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800 mb-6">
                  {venture.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-brand-magenta shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {venture.websiteUrl.startsWith('http') ? (
                <a
                  href={venture.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-brand-gradient hover:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Visit {venture.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <Link
                  to={venture.websiteUrl}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-brand-gradient hover:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Explore Platform</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Venture Studio Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-brand-purple/10 via-brand-magenta/10 to-transparent border border-brand-purple/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Have an ambitious venture idea?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              We partner with founders through technical co-founding, equity engineering, and seed prototyping.
            </p>
          </div>
          <Link
            to="/ventures"
            className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-brand-purple dark:hover:bg-brand-violet transition-all whitespace-nowrap"
          >
            Learn About Venture Studio
          </Link>
        </div>

      </div>
    </section>
  );
};
