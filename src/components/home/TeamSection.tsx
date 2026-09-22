import React, { useState } from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { SectionHeader } from '../common/SectionHeader';

export const TeamSection: React.FC = () => {
  const { team } = useCMS();
  const [activeTab, setActiveTab] = useState<'leadership' | 'core'>('leadership');

  const displayedMembers = team.filter((m) => m.category === activeTab);

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Leadership & Team"
          title="Meet the People Behind Techboloy"
          highlightWord="Techboloy"
          subtitle="Experienced software architects, product visionaries, and digital growth specialists dedicated to your digital success."
          align="center"
        />

        {/* Tab Switcher: Leadership vs Core Engineering */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
              activeTab === 'leadership'
                ? 'bg-slate-900 text-white dark:bg-brand-purple shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Executive Leadership
          </button>
          <button
            onClick={() => setActiveTab('core')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
              activeTab === 'core'
                ? 'bg-slate-900 text-white dark:bg-brand-purple shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Core Engineering & Growth Team
          </button>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedMembers.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-card-elevated hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* LinkedIn Shortcut */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-brand-purple hover:text-white hover:bg-brand-purple flex items-center justify-center shadow-md transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                {/* Profile Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-brand-magenta mt-0.5 mb-3">
                    {member.position}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                    {member.specialization.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-brand-gradient hover:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
