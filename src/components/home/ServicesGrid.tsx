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
  Check
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { SectionHeader } from '../common/SectionHeader';

const iconMap: Record<string, any> = {
  Code2,
  Layers,
  TrendingUp,
  Palette,
  Rocket,
  Cloud
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Our Solutions"
          title="Solutions Built Around Your Goals"
          highlightWord="Goals"
          subtitle="From digital presence to business automation, we help organizations build, improve and scale with technology."
          align="center"
        />

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-card-elevated hover:border-brand-purple/40 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-purple/10 to-brand-magenta/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-gradient group-hover:text-white group-hover:shadow-glow-sm transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Offerings Chips */}
                  <div className="space-y-2 mb-8 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Capabilities:
                    </div>
                    {service.subOfferings.slice(0, 5).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-magenta group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All CTA */}
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-slate-950 hover:bg-slate-800 dark:bg-brand-purple dark:hover:bg-brand-violet shadow-sm hover:scale-[1.02] transition-all"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
