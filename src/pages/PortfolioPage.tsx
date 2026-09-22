import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { useCMS } from '../context/CMSContext';

export const PortfolioPage: React.FC = () => {
  const { portfolio } = useCMS();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Web', 'Mobile', 'Software', 'Digital Marketing', 'SaaS'];

  const filteredProjects = portfolio.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Portfolio & Case Studies | Techboloy"
        description="Browse Techboloy's case studies across Web, Mobile apps, ERP systems, SaaS platforms, and digital marketing."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <SectionHeader
            badge="Proven Track Record"
            title="Work That Speaks for Itself"
            highlightWord="Itself"
            subtitle="Explore our portfolio of scalable web apps, mobile systems, custom enterprise ERP platforms, and venture solutions."
            align="center"
          />

          {/* Search and Category Filter Bar */}
          <div className="max-w-3xl mx-auto mt-6 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by technology (React, Next.js, Node.js...) or keyword..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-gradient text-white shadow-glow-sm scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No projects found matching your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-card-elevated hover:border-brand-purple/50 transition-all duration-300"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-purple-300 border border-purple-500/30">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="text-xs text-slate-400 font-semibold mb-1">
                        Client: {project.client}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
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
                      className="w-full py-3 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-brand-gradient hover:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all group/btn"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  );
};
