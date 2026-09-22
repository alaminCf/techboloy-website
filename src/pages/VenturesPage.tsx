import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { venturesData } from '../data/ventures';

export const VenturesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Ventures Studio | Techboloy"
        description="Learn how Techboloy incubates, engineers, and scales digital ventures like EstatePilot, CareMate, TB Host, and Feminity."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <SectionHeader
            badge="Venture Studio Model"
            title="Building High-Impact Technology Ventures"
            highlightWord="Technology Ventures"
            subtitle="We don't merely consult—we invest our core engineering talent, product architecture, and operational capital into independent startups solving fundamental needs."
            align="center"
          />
        </div>

        {/* Ventures Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {venturesData.map((venture, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={venture.id}
                className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Details (Span 7) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shadow-glow-sm">
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-white text-lg">
                          {venture.logoPlaceholder}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                            {venture.category}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                            {venture.status}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                          {venture.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-brand-magenta font-semibold">
                      {venture.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {venture.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Value Propositions:
                      </h4>
                      <ul className="space-y-1.5">
                        {venture.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-magenta shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      {venture.websiteUrl.startsWith('http') ? (
                        <a
                          href={venture.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-brand-purple dark:hover:bg-brand-violet transition-all"
                        >
                          <span>Visit {venture.name} Website</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          to={venture.websiteUrl}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
                        >
                          <span>Explore Product Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Status Card (Span 5) */}
                  <div className="lg:col-span-5">
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Techboloy Venture Contribution
                      </h4>
                      <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                          <span className="font-semibold text-slate-900 dark:text-white">Technical Architecture:</span>
                          <span className="text-brand-purple font-mono">100% In-House</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                          <span className="font-semibold text-slate-900 dark:text-white">Cloud Hosting:</span>
                          <span className="text-brand-purple font-mono">TB Host Cloud</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                          <span className="font-semibold text-slate-900 dark:text-white">Growth Engine:</span>
                          <span className="text-brand-purple font-mono">SEO & Meta Ad Funnels</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Co-founder / Pitch your startup section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
          <div className="p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/20 text-purple-300">
              <HeartHandshake className="w-4 h-4 text-brand-magenta" />
              <span>Technical Co-Founding</span>
            </div>
            <h3 className="text-3xl font-extrabold font-display">
              Are You a Domain Expert with an Unbuilt Idea?
            </h3>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We partner with industry veterans to build venture-scale MVPs in exchange for equity and technical stewardship.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
              >
                <span>Pitch Your Venture to Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
