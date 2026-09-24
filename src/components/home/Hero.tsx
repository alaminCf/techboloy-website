import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Cloud,
  Code2
} from 'lucide-react';

import { SectionItem } from '../../context/CMSContext';

interface HeroProps {
  section?: SectionItem;
}

export const Hero: React.FC<HeroProps> = ({ section }) => {
  const badgeText = section?.badge || "Next-Generation Digital Transformation & Venture Studio";
  const titleText = section?.title || "Technology That Moves Your Business Forward.";
  const highlight = section?.highlightWord || "Business Forward.";
  const subtitleText = section?.subtitle || "We build digital products, custom software solutions and growth systems that help businesses innovate, scale and succeed.";
  const ctaLabel = section?.ctaText || "Start a Project";
  const ctaUrl = section?.ctaLink || "/contact";
  const secondaryLabel = section?.secondaryCtaText || "Explore Our Services";
  const secondaryUrl = section?.secondaryCtaLink || "/services";
  const watermarkImg = section?.imageUrl || "/assets/tb-icon.png";

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Abstract Animated Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[140px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-magenta/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle fingerprint circuit watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
        <img src={watermarkImg} alt="" className="w-[600px] h-[600px] object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Headline & Action (Span 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-brand-purple/40 bg-brand-purple/10 text-purple-200 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-magenta" />
              </span>
              <span>{badgeText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] font-display">
              {titleText.includes(highlight) ? (
                <>
                  <span className="text-white">{titleText.split(highlight)[0]}</span>
                  <span className="text-gradient-purple">{highlight}</span>
                  <span className="text-white">{titleText.split(highlight)[1]}</span>
                </>
              ) : (
                <span className="text-white">{titleText}</span>
              )}
            </h1>

            {/* Supporting Line */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitleText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to={ctaUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-gradient hover:shadow-glow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={secondaryUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-purple/60 backdrop-blur-md transition-all duration-200 flex items-center justify-center"
              >
                {secondaryLabel}
              </Link>
            </div>

            {/* Secondary Small Tagline */}
            <div className="pt-2 text-xs sm:text-sm font-semibold tracking-widest text-slate-400 uppercase flex items-center justify-center lg:justify-start gap-3">
              <span>Technology</span>
              <span className="text-brand-magenta">•</span>
              <span>Strategy</span>
              <span className="text-brand-magenta">•</span>
              <span>Design</span>
              <span className="text-brand-magenta">•</span>
              <span>Growth</span>
            </div>

          </div>

          {/* Right Column: Premium Abstract 3D / Digital Tech Composition (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Glowing Backdrop Card */}
              <div className="relative p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-6 overflow-hidden">
                
                {/* Visual Ambient gradient bar */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-magenta/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-brand-purple/30 rounded-full blur-2xl" />

                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">techboloy-core.v2</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Cloud Systems 99.9% Uptime
                  </div>
                </div>

                {/* Central Visual: Software + AI + Cloud Metric Grid */}
                <div className="space-y-4 relative z-10">
                  
                  {/* Metric Box 1: Digital Transformation Velocity */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-brand-purple/50 transition-colors">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-magenta" />
                        Enterprise Automation Index
                      </span>
                      <span className="text-emerald-400 font-semibold">+320% Efficiency</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-brand-gradient h-full rounded-full w-[84%] animate-pulse" />
                    </div>
                  </div>

                  {/* Dual Cards: Software Engineering + AI Pipelines */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-brand-purple/20 text-brand-purple flex items-center justify-center mb-2">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-slate-400">Architecture</div>
                      <div className="text-sm font-bold text-white mt-0.5">Microservices</div>
                      <div className="text-[10px] text-brand-magenta mt-1">Zero Tech Debt</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-brand-magenta/20 text-brand-magenta flex items-center justify-center mb-2">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-slate-400">Intelligent Layer</div>
                      <div className="text-sm font-bold text-white mt-0.5">AI Integrations</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Active Automated Agents</div>
                    </div>
                  </div>

                  {/* Terminal Snippet Preview */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1">
                    <div className="text-brand-purple flex items-center gap-1">
                      <Terminal className="w-3 h-3" />
                      <span>deploy --stage=production --target=global</span>
                    </div>
                    <div className="text-emerald-400">✔ Cloud cluster verified (TB Host Tier-4)</div>
                    <div className="text-slate-500">→ Syncing Real Estate ERP & CRM pipelines...</div>
                  </div>

                </div>

                {/* Floating Badge (Bottom Right) */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-brand-purple/20 to-brand-magenta/20 border border-brand-purple/30 text-xs font-semibold text-slate-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-magenta" />
                    <span>ISO / Global Grade Security</span>
                  </div>
                  <span className="text-emerald-400">Active</span>
                </div>

              </div>

              {/* Decorative floating badge outside card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-700 shadow-glow-sm backdrop-blur-xl animate-float">
                <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-bold text-sm">
                  TB
                </div>
                <div>
                  <div className="text-xs font-bold text-white">EstatePilot SaaS</div>
                  <div className="text-[10px] text-slate-400">Flagship PropTech Engine</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
