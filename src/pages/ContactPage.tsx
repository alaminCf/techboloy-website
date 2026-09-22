import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Building
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { useCMS } from '../context/CMSContext';

export const ContactPage: React.FC = () => {
  const { company, addInquiry } = useCMS();
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || 'Web & App Development';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService,
    budgetRange: '$2,500 - $5,000 (BDT 3L - 6L)',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log inquiry in CMS state / local storage
    addInquiry({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      serviceRequired: formData.serviceRequired,
      budgetRange: formData.budgetRange,
      projectDetails: formData.projectDetails
    });

    setSubmitted(true);
  };

  const servicesList = [
    'Web & App Development',
    'ERP & Software Solutions',
    'Digital Marketing & SEO',
    'UI/UX & Creative Design',
    'MVP & Product R&D',
    'Cloud, Hosting & TB Host',
    'EstatePilot SaaS Inquiry',
    'Other Custom Engineering'
  ];

  const budgetOptions = [
    'Under $1,500 (BDT 1.5L)',
    '$1,500 - $3,000 (BDT 1.5L - 3.5L)',
    '$3,000 - $7,000 (BDT 3.5L - 8L)',
    '$7,000 - $15,000 (BDT 8L - 18L)',
    '$15,000+ (Enterprise Tier)'
  ];

  return (
    <>
      <SEOHead
        title="Contact Us | Let's Build Something Meaningful - Techboloy"
        description="Get in touch with Techboloy at ICT Tower, Agargaon, Dhaka. Request a project proposal, technical audit, or SaaS consultation."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta" />
            <span>Connect with Techboloy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Let's Build Something <span className="text-gradient-purple">Meaningful.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tell us about your organization and technical objectives. Our directors will review your scope and provide actionable technical guidance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Cards & ICT Tower Agargaon Map (Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Main Contact Card */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                <h3 className="text-xl font-bold font-display">
                  Corporate Headquarters
                </h3>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">ICT Tower Office</span>
                      {company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.country}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-purple shrink-0" />
                    <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                      {company.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-purple shrink-0" />
                    <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                      {company.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-purple shrink-0" />
                    <span>Sunday – Thursday: 10:00 AM – 7:00 PM (GMT+6)</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <a
                    href={company.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm flex items-center justify-center gap-2 text-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Chat ({company.phone})</span>
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="w-full py-3 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 text-sm transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Direct Email</span>
                  </a>
                </div>
              </div>

              {/* Google Maps ICT Tower Agargaon Interactive Map Component */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="p-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-brand-purple" />
                  <span>ICT Tower, Agargaon, Dhaka Location Map</span>
                </div>
                <iframe
                  title="Techboloy Office Location at ICT Tower"
                  src="https://maps.google.com/maps?q=ICT%20Tower,%20Agargaon,%20Dhaka,%20Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-purple shrink-0" />
                <span>All project discussions and proprietary specs are protected under mutual non-disclosure (NDA).</span>
              </div>

            </div>

            {/* Right Column: Project Inquiry Form (Span 7) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Project Request Estimator
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill in the preliminary parameters of your project. We typically respond with a preliminary architecture breakdown within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-4 text-emerald-900 dark:text-emerald-200">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                    <h4 className="text-2xl font-bold">Project Request Submitted!</h4>
                    <p className="text-sm max-w-md mx-auto">
                      Thank you, <span className="font-semibold">{formData.name}</span>. We have logged your request for <span className="font-semibold">{formData.serviceRequired}</span>. A technical director will reach you at {formData.email} or {formData.phone} shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-xs bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Ahsan Habib"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g., Nexus Retail Ltd."
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address *
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Service Required *
                        </label>
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        >
                          {servicesList.map((srv) => (
                            <option key={srv} value={srv}>{srv}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Target Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        >
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Project Scope & Goals *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us what you are trying to build, your current bottlenecks, target deadlines, or any specific system requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Request</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};
