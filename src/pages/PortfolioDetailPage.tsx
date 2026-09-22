import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  TrendingUp, 
  ShieldCheck, 
  Layers,
  ArrowLeft 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { useCMS } from '../context/CMSContext';

export const PortfolioDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { portfolio } = useCMS();
  const project = portfolio.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedProjects = portfolio.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      <SEOHead
        title={`${project.title} | Techboloy Case Study`}
        description={project.shortDescription}
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-brand-purple">Home</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-brand-purple">Portfolio</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">{project.title}</span>
          </nav>
        </div>

        {/* Case Study Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple">
              <span>{project.category} Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display">
              {project.title}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-sm">
              <div>
                <span className="text-xs text-slate-400 block">Client / Industry:</span>
                <span className="font-bold text-slate-900 dark:text-white">{project.client}</span>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
              <div>
                <span className="text-xs text-slate-400 block">Category:</span>
                <span className="font-bold text-slate-900 dark:text-white">{project.category}</span>
              </div>
              {project.liveUrl && (
                <>
                  <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
                  <div>
                    <span className="text-xs text-slate-400 block">Live Deployment:</span>
                    {project.liveUrl.startsWith('http') ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-brand-purple hover:text-brand-magenta inline-flex items-center gap-1"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to={project.liveUrl}
                        className="font-bold text-brand-purple hover:text-brand-magenta inline-flex items-center gap-1"
                      >
                        <span>View Product Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image Cover */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 h-[380px] sm:h-[480px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Challenge & Solution Architecture */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8 space-y-10">
              
              {/* Challenge */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  The Challenge
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  The Techboloy Solution Architecture
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technical Stack Employed:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Key Results / Metrics */}
            <div className="lg:col-span-4">
              <div className="p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-magenta" />
                  Key Quantifiable Results
                </h3>

                <div className="space-y-4">
                  {project.results.map((res) => (
                    <div key={res.label} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-3xl font-black text-gradient-purple font-display">
                        {res.metric}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    to="/contact"
                    className="w-full py-3.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <span>Build a Similar Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Related Projects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
            Explore Other Case Studies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/portfolio/${rel.slug}`}
                className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-purple/40 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-brand-magenta uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors mt-0.5">
                    {rel.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-purple group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};
