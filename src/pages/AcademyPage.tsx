import React from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Users,
  Award,
  Code,
  TrendingUp,
  Palette,
  Briefcase,
  Compass
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { academyInfo, academyTracks } from '../data/academy';

const iconMap: Record<string, any> = {
  Code,
  TrendingUp,
  Palette,
  Briefcase,
  Compass,
  Sparkles
};

export const AcademyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Techboloy Academy | Learn. Build. Grow."
        description="Techboloy Academy trains individuals and corporate teams in practical software development, digital marketing, UI/UX, and technology careers."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <SectionHeader
            badge="Professional Technology Education"
            title="Practical Skills Engineered for Modern Careers"
            highlightWord="Modern Careers"
            subtitle={academyInfo.description}
            align="center"
          />
        </div>

        {/* Ecosystem Highlight Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta">
                Official Academy Portal
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Dedicated Learning Management System
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Techboloy Academy operates as an independent learning ecosystem with dedicated course modules, live batches, code sandboxes, and personalized mentorship.
              </p>
            </div>
            <a
              href={academyInfo.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all whitespace-nowrap inline-flex items-center gap-2"
            >
              <span>Visit academy.techboloy.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Comprehensive Learning Tracks */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display mb-10 text-center">
            Comprehensive Curriculum Tracks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academyTracks.map((track) => {
              const IconComponent = iconMap[track.icon] || BookOpen;

              return (
                <div
                  key={track.id}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {track.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {track.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {track.description}
                    </p>

                    <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Syllabus Topics:
                      </div>
                      <ul className="space-y-1.5">
                        {track.topics.map((tp) => (
                          <li key={tp} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-magenta shrink-0" />
                            <span>{tp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Level: {track.level}</span>
                    <a
                      href={academyInfo.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-purple hover:text-brand-magenta inline-flex items-center gap-1"
                    >
                      <span>Enroll in Batch</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
};
