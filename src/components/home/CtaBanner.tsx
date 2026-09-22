import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { companyData } from '../../data/company';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-gradient opacity-15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-brand-purple/40 bg-brand-purple/10 text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-brand-magenta" />
          <span>Let's Create Tomorrow Together</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display">
          Have an Idea? <span className="text-gradient-purple">Let's Build It.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us what you're trying to build, improve or grow. Our team will help you find the right technology path.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-9 py-4 rounded-xl text-base font-bold text-white bg-brand-gradient hover:shadow-glow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={companyData.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-4 rounded-xl text-base font-semibold text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/80 hover:border-emerald-600 transition-all duration-200 flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Talk to Us via WhatsApp</span>
          </a>
        </div>

        {/* Office Contact Info Strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
          <span>Headquarters: ICT Tower (14th Floor), Agargaon, Dhaka</span>
          <span>•</span>
          <a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
            {companyData.phone}
          </a>
          <span>•</span>
          <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
            {companyData.email}
          </a>
        </div>

      </div>
    </section>
  );
};
