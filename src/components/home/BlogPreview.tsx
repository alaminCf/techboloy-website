import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { SectionHeader } from '../common/SectionHeader';

export const BlogPreview: React.FC = () => {
  const { insights } = useCMS();

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Thought Leadership"
          title="Insights, Ideas & Technology"
          highlightWord="Technology"
          subtitle="Perspectives from our engineering leads and product strategists on software architecture, AI, and scalable digital transformation."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="group rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-card-elevated hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
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

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-magenta transition-colors pt-2 group-hover:translate-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-purple/40 hover:text-brand-purple transition-all"
          >
            <span>Explore All Insights & Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
