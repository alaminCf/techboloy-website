import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Facebook, 
  Linkedin, 
  MessageSquare, 
  ShieldCheck,
  Lock
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const Footer: React.FC = () => {
  const { company } = useCMS();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Headquarters (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shadow-glow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <img src="/assets/tb-icon.png" alt="Techboloy" className="w-8 h-8 object-contain" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white font-display">
                  TECH<span className="text-gradient-purple">BOLOY</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400">
                  {company.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A modern technology and digital solutions company helping businesses innovate, scale, and automate operations with high-impact software, cloud platforms, and data-driven growth systems.
            </p>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-purple shrink-0 mt-1" />
                <span>
                  {company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.country}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-purple shrink-0" />
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-purple shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-magenta transition-colors">About Techboloy</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-magenta transition-colors">Services Ecosystem</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-magenta transition-colors">Products & SaaS</Link>
              </li>
              <li>
                <Link to="/ventures" className="hover:text-brand-magenta transition-colors">Ventures Studio</Link>
              </li>
              <li>
                <Link to="/academy" className="hover:text-brand-magenta transition-colors">Techboloy Academy</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-magenta transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-brand-magenta transition-colors">Tech Insights</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-magenta transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Services (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Expertise
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/web-app-development" className="hover:text-brand-magenta transition-colors flex items-center justify-between group">
                  <span>Web & App Development</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/erp-software" className="hover:text-brand-magenta transition-colors flex items-center justify-between group">
                  <span>ERP & Custom Software</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-brand-magenta transition-colors flex items-center justify-between group">
                  <span>Digital Marketing & SEO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-creative" className="hover:text-brand-magenta transition-colors flex items-center justify-between group">
                  <span>UI/UX & Brand Creative</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/mvp-product-rnd" className="hover:text-brand-magenta transition-colors flex items-center justify-between group">
                  <span>MVP & Startup R&D</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-hosting" className="hover:text-brand-magenta transition-colors flex items-center justify-between group">
                  <span>Cloud, Hosting & TB Host</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Admin Portal (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Connect & Manage
            </h3>
            <p className="text-sm text-slate-400">
              Official channels and administrative access.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-purple hover:bg-brand-purple/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-purple hover:bg-brand-purple/10 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-950/40 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${company.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-purple hover:bg-brand-purple/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Admin CMS Access Link */}
            <div className="pt-2">
              <Link
                to="/admin"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-brand-purple/50 transition-all"
              >
                <Lock className="w-3.5 h-3.5 text-brand-purple" />
                <span>Admin CMS Dashboard</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Techboloy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-purple" />
              Global Standard Quality
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
