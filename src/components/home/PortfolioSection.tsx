import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { SectionHeader } from '../common/SectionHeader';

export const PortfolioSection: React.FC = () => {
  const { portfolio } = useCMS();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web', 'Mobile', 'Software', 'Digital Marketing', 'SaaS'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Featured Work"
          title="Work That Speaks for Itself"
          highlightWord="Itself"
          subtitle="Explore recent digital products, custom platforms, and enterprise solutions engineered by our teams."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-gradient text-white shadow-glow-sm scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-brand-purple/40 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-card-elevated hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    {project.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-slate-200 truncate">
                    Client: {project.client}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 hover:bg-brand-gradient hover:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-brand-purple hover:text-brand-magenta border border-brand-purple/20 bg-brand-purple/5 hover:bg-brand-purple/10 transition-all"
          >
            <span>Explore Full Case Studies Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
