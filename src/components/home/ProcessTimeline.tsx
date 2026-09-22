import React from 'react';
import { 
  Search, 
  Compass, 
  PenTool, 
  Code2, 
  Rocket, 
  TrendingUp 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "Understand the business, goals and challenges through stakeholder interviews, requirement audits, and market landscape analysis.",
      icon: Search
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Define the roadmap, technology stack and solution architecture to ensure predictable execution and maximum ROI.",
      icon: Compass
    },
    {
      step: "03",
      title: "Design",
      desc: "Create user-focused UI/UX and visual direction with interactive Figma prototypes and scalable component systems.",
      icon: PenTool
    },
    {
      step: "04",
      title: "Build",
      desc: "Develop, integrate and test the product using agile two-week sprints, type-safe code, and automated CI/CD pipelines.",
      icon: Code2
    },
    {
      step: "05",
      title: "Launch",
      desc: "Deploy and launch the solution with zero-downtime cutover, CDN caching, security audits, and staff adoption training.",
      icon: Rocket
    },
    {
      step: "06",
      title: "Grow",
      desc: "Optimize, maintain and scale through continuous telemetry monitoring, conversion rate optimization, and new feature iterations.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-purple/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Our Methodology"
          title="How We Turn Ideas Into Results"
          highlightWord="Results"
          subtitle="A structured, transparent engineering lifecycle designed to eliminate uncertainty and ship world-class digital products."
          align="center"
          darkTheme={true}
        />

        {/* Timeline Grid with Progress Line */}
        <div className="relative mt-16">
          {/* Subtle Progress Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-purple opacity-30 -translate-y-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-brand-purple/60 shadow-lg hover:shadow-glow-sm hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-black font-display text-brand-magenta">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-brand-gradient group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] uppercase font-mono tracking-widest text-slate-500">
                    Phase {item.step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
