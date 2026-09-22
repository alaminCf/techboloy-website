import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Zap, Users, Code } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const AboutShort: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with authentic Award & Technology Collaboration (Span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Visual: Team & Award Showcase */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 group">
                <img 
                  src="/assets/award-photo.jpg" 
                  alt="Techboloy Team Receiving Recognition Award" 
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/80 backdrop-blur-md text-xs font-semibold mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Excellence in Digital Innovation</span>
                  </div>
                  <h4 className="text-lg font-bold leading-snug">
                    Recognized for High-Impact Software Solutions & Youth Tech Enablement
                  </h4>
                </div>
              </div>

              {/* Floating Synergy Card */}
              <div className="absolute -bottom-8 -right-6 sm:bottom-6 sm:-right-8 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl max-w-[260px] space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Headquarters</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">ICT Tower, Dhaka</div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2">
                  Operating in the heart of Bangladesh's national technology ecosystem.
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values (Span 6) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <SectionHeader
              badge="About Techboloy"
              title="Built to Turn Technology Into Growth."
              highlightWord="Growth."
              align="left"
            />

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed -mt-8">
              Techboloy is a technology and digital solutions company helping businesses and individuals turn ideas into practical digital experiences. From software and websites to digital marketing, ERP solutions, product development and professional technology training, we bring strategy, creativity and technology together.
            </p>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Tailored Engineering</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bespoke software adapted strictly to your unique business mechanics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">End-to-End Execution</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Strategy, UI/UX, full-stack code, hosting, and performance marketing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">SaaS & Venture Incubation</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Creators of EstatePilot, TB Host, and CareMate platforms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Academy Mentorship</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Training the next echelon of software engineers and growth marketers.</p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-brand-purple dark:hover:bg-brand-violet shadow-sm transition-all group"
              >
                <span>More About Techboloy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
