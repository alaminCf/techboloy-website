import React from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const ServicesManagerTab: React.FC = () => {
  const { services } = useCMS();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      <div>
        <h2 className="text-2xl font-bold text-white font-display">
          Services & Digital Solutions Overview
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Review the 6 core pillars of Techboloy service offerings, deliverables, and capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => (
          <div
            key={srv.id}
            className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-magenta">
                Pillar 0{idx + 1} • {srv.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950 text-slate-400 border border-slate-800 font-mono">
                /services/{srv.slug}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">{srv.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{srv.shortDescription}</p>

            {/* Sub-Offerings */}
            <div className="pt-2 border-t border-slate-800 space-y-1.5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sub-Capabilities:</div>
              <div className="flex flex-wrap gap-1.5">
                {srv.subOfferings.map((sub) => (
                  <span key={sub} className="px-2.5 py-1 rounded-lg text-[10px] bg-slate-950 text-slate-300 border border-slate-800">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-2 border-t border-slate-800">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tech Stack:</div>
              <div className="flex flex-wrap gap-1">
                {srv.technologies.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-brand-purple/10 text-brand-purple font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
