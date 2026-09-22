import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Techboloy"
        description="Techboloy's privacy policy, data protection governance, and confidentiality practices."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Corporate Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 font-display">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mb-8">
            Last Updated: September 16, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-6 text-slate-600 dark:text-slate-300">
            <p>
              At <strong>Techboloy</strong>, accessible from https://techboloy.com, one of our main priorities is the privacy of our visitors and corporate clients. This Privacy Policy document outlines the types of information that is collected and recorded by Techboloy and how we use it.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">1. Information We Collect</h3>
            <p>
              When you submit a project request, consultation inquiry, or communicate with our engineering teams via email or WhatsApp, we collect information that you voluntarily disclose, such as your full name, company name, business email address, phone number, and project technical specifications.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">2. How We Use Your Information</h3>
            <p>
              We utilize the collected information strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reviewing project parameters and drafting technical feasibility proposals.</li>
              <li>Communicating direct status updates regarding your software deliverables.</li>
              <li>Maintaining secure server logs and infrastructure performance on TB Host platforms.</li>
              <li>Preventing fraudulent access and enforcing mutual non-disclosure agreements (NDAs).</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">3. Client Confidentiality & NDAs</h3>
            <p>
              All software source code, database architectures, customer datasets, and business logic created for or supplied by our clients remain 100% confidential. Techboloy executes mutual Non-Disclosure Agreements prior to commencing sensitive enterprise deployments.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">4. Cookies and Web Analytics</h3>
            <p>
              Techboloy uses industry-standard cookies to remember user interface preferences, monitor website load speeds, and understand aggregated visitor engagement metrics. No personally identifiable financial or authentication credentials are stored within cookies.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">5. Contact Our Data Governance Team</h3>
            <p>
              If you have any questions or require clarifications concerning our privacy standards, contact us directly at <a href="mailto:contact@techboloy.com" className="text-brand-purple font-semibold">contact@techboloy.com</a> or visit our corporate office at E-14/X, ICT Tower (14th Floor), Agargaon, Dhaka-1207, Bangladesh.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
