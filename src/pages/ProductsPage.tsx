import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { productsData } from '../data/products';

export const ProductsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Software Products & SaaS Platforms | Techboloy"
        description="Discover proprietary cloud products developed by Techboloy, including EstatePilot for real estate property and CRM management."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <SectionHeader
            badge="Proprietary SaaS Solutions"
            title="Software Products Built to Digitize Industries"
            highlightWord="Digitize"
            subtitle="Beyond custom client engineering, Techboloy conceives, architects, and scales vertical SaaS platforms addressing critical operational bottlenecks."
            align="center"
          />
        </div>

        {/* Featured Products Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/20 text-purple-300 border border-brand-purple/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta" />
                    <span>{product.badge}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
                    {product.name}
                  </h2>

                  <p className="text-brand-magenta font-semibold text-sm sm:text-base">
                    {product.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {product.fullDescription}
                  </p>

                  {/* Modules Pills */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Primary Software Capabilities:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feat) => (
                        <span key={feat} className="px-3 py-1 rounded-lg text-xs bg-slate-800 border border-slate-700 text-slate-200">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/products/${product.slug}`}
                      className="px-8 py-3.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>Explore {product.name} Platform</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-8 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 text-center transition-all"
                    >
                      Schedule Product Demo
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                      <span className="font-bold text-white flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-purple" />
                        System Architecture Highlights
                      </span>
                      <span className="text-emerald-400 font-mono">Multi-Tenant</span>
                    </div>

                    <div className="space-y-3">
                      {product.modules.slice(0, 3).map((mod) => (
                        <div key={mod.title} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <h4 className="text-xs font-bold text-white mb-1">{mod.title}</h4>
                          <p className="text-[11px] text-slate-400">{mod.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-center text-xs text-slate-400 border-t border-slate-800">
                      Cloud hosted on high-speed BDIX & International infrastructure.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Future Products in Incubation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            More Software Products in R&D
          </h3>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Our engineering lab is currently piloting AI-driven inventory replenishment tools, healthcare scheduling agents, and cloud deployment managers.
          </p>
        </div>

      </div>
    </>
  );
};
