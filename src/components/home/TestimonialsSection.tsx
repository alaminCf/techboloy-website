import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { SectionHeader } from '../common/SectionHeader';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Verified Client Reviews"
          title="What Our Partners Say About Working With Us"
          highlightWord="Working With Us"
          subtitle="Real client outcomes and authentic testimonials verified directly from our Google Reviews profile."
          align="center"
        />

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-card-elevated hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Stars & Google Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Google Verified</span>
                  </div>
                </div>

                {/* Review Quote Text */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=7c3aed&color=fff`;
                  }}
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trustindex Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              ★ 5.0 Rating
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span>Rated 5.0 out of 5 stars by business clients on Google</span>
          </div>
        </div>

      </div>
    </section>
  );
};
