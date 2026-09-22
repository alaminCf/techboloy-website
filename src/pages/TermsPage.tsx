import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Techboloy"
        description="Terms of service, engineering engagement standards, and intellectual property terms for Techboloy clients."
      />

      <div className="pt-28 pb-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 font-display">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 mb-8">
            Last Updated: September 16, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-6 text-slate-600 dark:text-slate-300">
            <p>
              Welcome to <strong>Techboloy</strong>. By accessing our websites, contracting our bespoke engineering teams, or subscribing to our SaaS platforms (such as EstatePilot or TB Host), you agree to be bound by the following terms and conditions.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">1. Engagement & Deliverables</h3>
            <p>
              All custom software development, mobile application builds, and digital transformation engagements are governed by individual Statements of Work (SOW). Each SOW specifies milestones, sprint timelines, acceptance criteria, and financial payment schedules.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">2. Intellectual Property (IP) Transfer</h3>
            <p>
              Upon receipt of final milestone payments, 100% ownership of bespoke source code, UI/UX Figma assets, and custom database schemas created specifically for the client transfers entirely to the client, unless explicitly stipulated otherwise under a co-venture equity arrangement.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">3. SaaS Subscriptions & SLA</h3>
            <p>
              Platforms provided as Software-as-a-Service (including EstatePilot) are hosted across high-availability cloud infrastructure with a targeted 99.9% uptime service level commitment. Scheduled maintenance windows are communicated in advance.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">4. Warranty & Post-Launch Support</h3>
            <p>
              Standard custom web and software deployments include a 30-day bug-fix warranty post-launch. Extended maintenance, security patching, and ongoing feature additions are provided via separate SLA-backed agreements.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">5. Governing Law & Jurisdiction</h3>
            <p>
              These Terms and any dispute arising from client engagements shall be governed by and construed in accordance with the commercial and digital laws of Bangladesh, under the primary jurisdiction of courts situated in Dhaka.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
