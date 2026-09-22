import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  FileText, 
  Layers,
  CalendarCheck,
  Send,
  MessageSquare
} from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { productsData } from '../../data/products';
import { companyData } from '../../data/company';
import { useCMS } from '../../context/CMSContext';

export const EstatePilotPage: React.FC = () => {
  const { addInquiry } = useCMS();
  const product = productsData[0];
  const [demoRequested, setDemoRequested] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    unitsCount: '50-200'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Real Estate Firm',
      serviceRequired: 'EstatePilot PropTech SaaS Demo',
      budgetRange: `Scale: ${formData.unitsCount} units`,
      projectDetails: `Demo requested for EstatePilot PropTech ERP. Units managed: ${formData.unitsCount}. Company: ${formData.company || 'Not specified'}.`
    });
    setDemoRequested(true);
  };

  return (
    <>
      <SEOHead
        title="EstatePilot | Smart Real Estate CRM & Property Management Platform"
        description="EstatePilot is a cloud-based real estate management platform developed by Techboloy to digitize leads, property sales, and building progress."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-brand-purple">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-purple">Products</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">EstatePilot</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-slate-950 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto p-8 sm:p-16 relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-magenta/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/20 text-purple-300 border border-brand-purple/40">
              <Building2 className="w-3.5 h-3.5 text-brand-magenta" />
              <span>Real Estate Operating System</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display">
              ESTATE<span className="text-gradient-purple">PILOT</span>
            </h1>

            <p className="text-xl text-brand-magenta font-semibold">
              {product.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {product.features.map((f) => (
                <span key={f} className="px-3 py-1 rounded-lg text-xs bg-slate-900 border border-slate-700 text-slate-200">
                  {f}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#demo-form"
                className="px-8 py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk with PropTech Specialist</span>
              </a>
            </div>
          </div>
        </section>

        {/* Deep Dive Modules Breakdown */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              Built for Modern Developers & Property Managers
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              EstatePilot replaces disconnected spreadsheets and delayed paperwork with an integrated digital workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.modules.map((mod, idx) => (
              <div
                key={mod.title}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-purple/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-2 block">
                    Module 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {mod.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-magenta shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Request Form Section */}
        <section id="demo-form" className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Request an EstatePilot Guided Demo
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Our PropTech consultants will walk you through live building inventory management and payment schedule workflows.
                </p>
              </div>

              {demoRequested ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3 text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold">Demo Request Received!</h4>
                  <p className="text-xs">
                    Our team will contact you at {formData.phone || formData.email} within 24 business hours to arrange your customized walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Real Estate Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="E.g., Skyview Developers Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 17XX-XXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Approximate Residential/Commercial Units Managed
                    </label>
                    <select
                      value={formData.unitsCount}
                      onChange={(e) => setFormData({ ...formData, unitsCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    >
                      <option value="Under 50">Under 50 Units (Single Project)</option>
                      <option value="50-200">50 - 200 Units (Mid-size Developer)</option>
                      <option value="200-1000">200 - 1,000 Units (Large Developer)</option>
                      <option value="1000+">1,000+ Units (Enterprise Group)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Demo Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>
        </section>

      </div>
    </>
  );
};
