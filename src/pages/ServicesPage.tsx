import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Layers, 
  TrendingUp, 
  Palette, 
  Rocket, 
  Cloud, 
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { servicesData } from '../data/services';

const iconMap: Record<string, any> = {
  Code2,
  Layers,
  TrendingUp,
  Palette,
  Rocket,
  Cloud
};

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services & Digital Capabilities | Techboloy"
        description="Explore Techboloy's 6 core services: Web & App Development, ERP & Software, Digital Marketing, UI/UX Design, MVP R&D, and Cloud Hosting."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <SectionHeader
            badge="Full-Lifecycle Digital Services"
            title="Comprehensive Technology Solutions Built to Scale"
            highlightWord="Scale"
            subtitle="From architectural planning and custom development to cloud infrastructure and growth marketing, we provide full-lifecycle technical capabilities under one roof."
            align="center"
          />
        </div>

        {/* Services List with Detailed Sub-Offerings */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Code2;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-brand-purple/40 transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Details (Span 7) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-magenta">
                          {service.badge}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Sub Offerings Grid */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Included Offerings:
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {service.subOfferings.map((sub) => (
                          <div key={sub} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                            <span className="truncate">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Tech Stack:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
                      >
                        <span>View In-Depth Solution Architecture</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables Card (Span 5) */}
                  <div className="lg:col-span-5">
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Guaranteed Deliverables
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="text-brand-magenta font-bold mt-0.5">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                        <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                          Delivery Standard:
                        </span>
                        Full source code ownership, automated deployment pipelines, and 30-day post-launch warranty.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center mt-20">
          <div className="p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Have a Specialized Requirement Not Listed?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Our engineering team builds custom integrations, legacy API bridges, and bespoke enterprise systems.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
