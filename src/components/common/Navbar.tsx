import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight,
  Code2,
  Layers,
  TrendingUp,
  Palette,
  Rocket,
  Cloud
} from 'lucide-react';
import { companyData } from '../../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const serviceSublinks = [
    { title: "Web & App Development", desc: "Websites, PWA & mobile apps", href: "/services/web-app-development", icon: Code2 },
    { title: "ERP & Software Solutions", desc: "Bespoke operations & automation", href: "/services/erp-software", icon: Layers },
    { title: "Digital Marketing", desc: "SEO, Meta Ads & growth funnels", href: "/services/digital-marketing", icon: TrendingUp },
    { title: "UI/UX & Creative Design", desc: "Design systems & brand identities", href: "/services/ui-ux-creative", icon: Palette },
    { title: "MVP & Product R&D", desc: "Idea validation & venture MVPs", href: "/services/mvp-product-rnd", icon: Rocket },
    { title: "Cloud, Hosting & Technology", desc: "TB Host servers & infrastructure", href: "/services/cloud-hosting", icon: Cloud },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-brand-navy/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shadow-glow-sm">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/tb-icon.png" 
                  alt="Techboloy" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to render
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                TECH<span className="text-gradient-purple">BOLOY</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 -mt-1">
                Growth Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/' 
                  ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              Home
            </Link>

            {/* Services with Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                    : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-brand-purple' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] p-4 bg-white dark:bg-brand-darkcard rounded-2xl shadow-xl border border-slate-100 dark:border-brand-darkborder grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceSublinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between px-2">
                    <span className="text-xs text-slate-500">Need a custom enterprise scope?</span>
                    <Link to="/services" className="text-xs font-semibold text-brand-purple hover:text-brand-magenta inline-flex items-center gap-1">
                      View All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/products" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname.startsWith('/products') 
                  ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              Products
            </Link>

            <Link 
              to="/ventures" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/ventures' 
                  ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              Ventures
            </Link>

            <Link 
              to="/academy" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/academy' 
                  ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              Academy
            </Link>

            <Link 
              to="/portfolio" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname.startsWith('/portfolio') 
                  ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              Portfolio
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/about' 
                  ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              About
            </Link>

            <Link 
              to="/insights" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname.startsWith('/insights') 
                  ? 'text-brand-purple font-semibold bg-brand-purple/5' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-brand-purple hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              Insights
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Quick Action */}
            <a
              href={companyData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp message"
              className="p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 hover:scale-105 transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-gradient hover:shadow-glow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={companyData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/95 dark:bg-brand-navy/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
            >
              Home
            </Link>

            <div>
              <Link
                to="/services"
                className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
              >
                Services
              </Link>
              <div className="mt-2 pl-4 space-y-2 border-l-2 border-brand-purple/30">
                {serviceSublinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-sm text-slate-600 dark:text-slate-400 hover:text-brand-purple"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/products"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
            >
              Products (EstatePilot)
            </Link>

            <Link
              to="/ventures"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
            >
              Ventures
            </Link>

            <Link
              to="/academy"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
            >
              Academy
            </Link>

            <Link
              to="/portfolio"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
            >
              Portfolio
            </Link>

            <Link
              to="/about"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
            >
              About
            </Link>

            <Link
              to="/insights"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-brand-purple"
            >
              Insights
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <Link
              to="/contact"
              className="w-full py-3.5 rounded-xl text-center font-semibold text-white bg-brand-gradient shadow-glow-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Contact Techboloy</span>
            </Link>
            <a
              href={companyData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
