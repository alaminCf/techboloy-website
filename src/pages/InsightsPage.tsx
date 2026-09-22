import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { useCMS } from '../context/CMSContext';

export const InsightsPage: React.FC = () => {
  const { insights } = useCMS();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Technology', 'Business', 'Digital Marketing', 'AI', 'Web Development', 'Startup'];

  const filteredPosts = insights.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Tech Insights, Engineering & Growth | Techboloy"
        description="Perspectives from Techboloy's software architects, product designers, and growth specialists on modern technology and enterprise scaling."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <SectionHeader
            badge="Thought Leadership"
            title="Insights, Ideas & Technology"
            highlightWord="Technology"
            subtitle="Explore our latest analysis on software architecture, enterprise automation, practical AI, and performance growth."
            align="center"
          />

          {/* Search & Category Filter Bar */}
          <div className="max-w-3xl mx-auto mt-6 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, framework, or concept..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

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

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No insights found matching your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-card-elevated hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-900">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-brand-magenta border border-brand-magenta/30">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.publishedAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors mb-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-800">
                    <Link
                      to={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-magenta pt-3 group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  );
};
