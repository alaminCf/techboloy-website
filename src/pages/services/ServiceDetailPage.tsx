import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Code2, 
  Layers, 
  TrendingUp, 
  Palette, 
  Rocket, 
  Cloud,
  HelpCircle,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { servicesData } from '../../data/services';

const iconMap: Record<string, any> = {
  Code2,
  Layers,
  TrendingUp,
  Palette,
  Rocket,
  Cloud
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <>
      <SEOHead
        title={`${service.title} | Techboloy Services`}
        description={service.shortDescription}
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-brand-purple">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-brand-purple">Services</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">{service.title}</span>
          </nav>
        </div>

        {/* Hero Section of Service */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta" />
                <span>{service.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {service.fullDescription}
              </p>

              {/* Technologies */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Engineered With:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="px-8 py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Request a Project Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-center transition-all"
                >
                  View Related Case Studies
                </Link>
              </div>
            </div>

            {/* Right Card: Sub-Offerings Matrix */}
            <div className="lg:col-span-4">
              <div className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple text-white flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Included Specializations
                </h3>
                <ul className="space-y-2.5">
                  {service.subOfferings.map((sub) => (
                    <li key={sub} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-magenta shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Deliverables & Key Features */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display mb-10 text-center">
              What You Receive as Standard Deliverables
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display mb-12 text-center">
            How We Deliver {service.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <span className="text-2xl font-black text-brand-purple font-display">{step.step}</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Accordion */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display mb-8 text-center flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-brand-purple" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={faq.question}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base gap-4"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-purple shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <p className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Bottom Contact CTA */}
        <div className="max-w-4xl mx-auto px-4 text-center mt-16">
          <div className="p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Ready to Kickstart Your {service.title}?
            </h3>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Our engineering team will prepare an architectural breakdown and scope estimate within 24 hours.
            </p>
            <div className="pt-2">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
