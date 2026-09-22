import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Share2, Tag } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { useCMS } from '../context/CMSContext';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { insights } = useCMS();
  const post = insights.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const relatedPosts = insights.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <SEOHead
        title={`${post.title} | Techboloy Insights`}
        description={post.excerpt}
        schemaType="Article"
        schemaData={{
          headline: post.title,
          image: post.coverImage,
          datePublished: post.publishedAt,
          author: {
            "@type": "Person",
            name: post.author.name
          }
        }}
      />

      <article className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Breadcrumb Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-brand-purple">Home</Link>
            <span>/</span>
            <Link to="/insights" className="hover:text-brand-purple">Insights</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium truncate">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-purple/10 text-brand-purple">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight font-display">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-slate-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[480px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-lg">
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 whitespace-pre-line text-sm sm:text-base">
            {post.content}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 not-prose mt-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1"
              >
                <Tag className="w-3 h-3 text-brand-magenta" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
            Related Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                to={`/insights/${rel.slug}`}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-purple/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-bold text-brand-magenta uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors mt-1">
                    {rel.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-all">
                  <span>Read Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </>
  );
};
