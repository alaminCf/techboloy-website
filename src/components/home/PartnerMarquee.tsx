import React from 'react';
import { partnersData } from '../../data/partners';

export const PartnerMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by Businesses, Ventures & Ecosystem Partners
        </h3>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex w-max animate-marquee gap-8">
          {[...partnersData, ...partnersData, ...partnersData].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-brand-purple/60 transition-all shrink-0 select-none group"
            >
              <div className="w-8 h-8 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold text-xs group-hover:bg-brand-gradient group-hover:text-white transition-all">
                {partner.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
                <span className="block text-[10px] text-slate-500 font-medium">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
