import React from 'react';
import { Box, Building2, CheckCircle2, ExternalLink } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const ProductsManagerTab: React.FC = () => {
  const { products, ventures } = useCMS();
  const estatePilot = products[0];

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      
      {/* Flagship Product */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            Flagship Product: EstatePilot
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            PropTech SaaS platform developed in-house by Techboloy.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{estatePilot.name}</h3>
              <div className="text-xs text-brand-magenta font-semibold mt-0.5">{estatePilot.tagline}</div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-purple/20 text-purple-300 border border-brand-purple/40">
              Active Production SaaS
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {estatePilot.fullDescription}
          </p>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              SaaS Feature Chips:
            </h4>
            <div className="flex flex-wrap gap-2">
              {estatePilot.features.map((f) => (
                <span key={f} className="px-3 py-1 rounded-xl text-xs bg-slate-950 border border-slate-800 text-slate-200">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {estatePilot.modules.map((m) => (
              <div key={m.title} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <h5 className="text-xs font-bold text-white">{m.title}</h5>
                <p className="text-[11px] text-slate-400">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ventures Ecosystem */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            Techboloy Ventures Ecosystem
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Incubated and active startups operating across technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ventures.map((v) => (
            <div key={v.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center font-bold text-white text-xs">
                    {v.logoPlaceholder}
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {v.status}
                  </span>
                </div>

                <div className="text-[11px] text-brand-purple font-semibold">{v.category}</div>
                <h4 className="text-base font-bold text-white">{v.name}</h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-3">{v.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs">
                <span className="text-slate-500 font-mono text-[10px] truncate block">{v.websiteUrl}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
