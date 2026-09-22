import React from 'react';
import { 
  Target, 
  Layers, 
  Maximize2, 
  Users2, 
  Handshake, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const WhyTechboloy: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Business-First Thinking",
      desc: "We start with your business problem, not just the technology. Every line of code and user interface is engineered to advance your bottom line, streamline overhead, and unlock quantifiable commercial gains.",
      icon: Target
    },
    {
      number: "02",
      title: "End-to-End Capability",
      desc: "Strategy, design, development, marketing and technology support under one roof. No fractured communications, no vendor finger-pointing—just a unified team executing against your strategic roadmap.",
      icon: Layers
    },
    {
      number: "03",
      title: "Scalable Solutions",
      desc: "Solutions designed to grow with your business. We build with modular microservices, clean database schemas, and edge-native architectures that comfortably absorb exponential user and transactional growth.",
      icon: Maximize2
    },
    {
      number: "04",
      title: "Human Collaboration",
      desc: "Close communication, transparent workflows and collaborative execution. We operate as an extension of your internal team with bi-weekly sprint demos, shared Slack channels, and direct engineer access.",
      icon: Users2
    },
    {
      number: "05",
      title: "Long-Term Partnership",
      desc: "We aim to build lasting relationships, not one-time projects. From Day 1 to post-launch scaling and future venture pivots, we remain your committed technology growth partner.",
      icon: Handshake
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Why Techboloy"
          title="Why Businesses Choose Techboloy"
          highlightWord="Techboloy"
          subtitle="We combine global software engineering rigor with business acumen to deliver predictable, high-value outcomes."
          align="center"
        />

        {/* 5 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className={`relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-purple/50 shadow-sm hover:shadow-card-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-display text-slate-300 dark:text-slate-700 group-hover:text-brand-purple transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-brand-purple group-hover:bg-brand-gradient group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-purple transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs font-semibold text-brand-purple group-hover:text-brand-magenta flex items-center gap-1.5 transition-colors">
                  <span>Guaranteed Commitment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
