import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ExternalLink, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  Code,
  TrendingUp,
  Palette,
  Briefcase,
  Compass
} from 'lucide-react';
import { academyInfo, academyTracks } from '../../data/academy';
import { SectionHeader } from '../common/SectionHeader';

const trackIconMap: Record<string, any> = {
  Code,
  TrendingUp,
  Palette,
  Briefcase,
  Compass,
  Sparkles
};

export const AcademySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-brand-purple/20 bg-brand-purple/5 text-brand-purple mb-4">
            <GraduationCap className="w-4 h-4 text-brand-magenta" />
            Techboloy Learning Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            {academyInfo.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {academyInfo.description}
          </p>
        </div>

        {/* Academy Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {academyInfo.stats.map((s) => (
            <div key={s.label} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <div className="text-2xl font-black text-brand-purple font-display">{s.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* 6 Academy Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academyTracks.map((track) => {
            const Icon = trackIconMap[track.icon] || BookOpen;

            return (
              <div
                key={track.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-purple/40 shadow-sm hover:shadow-card-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {track.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-purple transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {track.description}
                  </p>

                  {/* Topics Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {track.topics.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{track.level}</span>
                  <a
                    href={academyInfo.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-purple hover:text-brand-magenta inline-flex items-center gap-1"
                  >
                    <span>View Curriculum</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA: Dedicated Academy Portal */}
        <div className="text-center mt-14">
          <a
            href={academyInfo.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <span>Explore Techboloy Academy</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
