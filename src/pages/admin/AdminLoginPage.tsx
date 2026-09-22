import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@techboloy.com');
  const [password, setPassword] = useState('techboloy2026');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'techboloy2026' || password === 'admin') {
      sessionStorage.setItem('techboloy_admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid passcode. Use "techboloy2026" to access.');
    }
  };

  return (
    <>
      <SEOHead title="Admin Login | Techboloy CMS" />

      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-magenta/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative z-10 space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 mx-auto shadow-glow-sm">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-white text-base">
                TB
              </div>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight font-display">
              Techboloy CMS Login
            </h2>
            <p className="text-xs text-slate-400">
              Sign in to manage company parameters, staff, and case studies.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs text-center font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Administrator Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Passcode / Key</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>
            </div>

            {/* Quick Demo Hint */}
            <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-[11px] text-slate-300 space-y-1">
              <span className="font-bold text-brand-purple block">Default Credentials:</span>
              <div>Passcode: <code className="text-brand-magenta font-bold">techboloy2026</code></div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>Access Control Center</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center pt-2 border-t border-slate-800">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
              ← Return to Public Website
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
