import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Briefcase, 
  FileText, 
  Layers, 
  Box, 
  Inbox, 
  Globe, 
  LogOut, 
  Download, 
  RotateCcw,
  Shield,
  Menu,
  X,
  Sparkles,
  Layout
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export type AdminTab = 
  | 'overview' 
  | 'sections'
  | 'company' 
  | 'team' 
  | 'portfolio' 
  | 'insights' 
  | 'services' 
  | 'products' 
  | 'inquiries';

interface AdminLayoutProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  activeTab,
  setActiveTab,
  children,
}) => {
  const navigate = useNavigate();
  const { inquiries, exportDataJson, resetToDefaults } = useCMS();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const newInquiriesCount = inquiries.filter(i => i.status === 'New').length;

  const handleLogout = () => {
    sessionStorage.removeItem('techboloy_admin_auth');
    navigate('/admin/login');
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'sections', label: 'Page & Section Builder', icon: Layout },
    { id: 'company', label: 'Company & Stats', icon: Building2 },
    { id: 'team', label: 'Team Members', icon: Users },
    { id: 'portfolio', label: 'Portfolio & Case Studies', icon: Briefcase },
    { id: 'insights', label: 'Tech Insights / Blog', icon: FileText },
    { id: 'services', label: 'Services & Offerings', icon: Layers },
    { id: 'products', label: 'Products & Ventures', icon: Box },
    { 
      id: 'inquiries', 
      label: 'Inquiries Inbox', 
      icon: Inbox, 
      badge: newInquiriesCount > 0 ? newInquiriesCount : undefined 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 flex-col justify-between bg-slate-900 border-r border-slate-800 p-6">
        <div className="space-y-8">
          
          {/* Brand */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shadow-glow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                  TB
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight font-display">
                  TECH<span className="text-gradient-purple">BOLOY</span>
                </span>
                <span className="block text-[10px] uppercase font-bold text-brand-magenta tracking-widest">
                  CMS Control Center
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as AdminTab)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-gradient text-white shadow-glow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="space-y-3 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={exportDataJson}
              className="flex-1 py-2 rounded-xl text-[11px] font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
              title="Backup current CMS content to JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={() => {
                if (confirm('Reset all CMS contents to factory defaults? Any custom edits will be reverted.')) {
                  resetToDefaults();
                }
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-400 bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Reset to Factory Defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <Link
            to="/"
            target="_blank"
            className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-brand-magenta" />
            <span>View Public Website</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-rose-400 hover:bg-rose-950/20 transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-sm sm:text-base font-bold text-white capitalize flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-purple" />
              <span>Admin Management: {activeTab.replace('-', ' ')}</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live CMS Sync Active</span>
            </div>

            <div className="flex items-center gap-2.5 pl-4 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center font-bold text-xs text-white">
                TB
              </div>
              <div className="hidden md:block text-left">
                <div className="text-xs font-bold text-white">Administrator</div>
                <div className="text-[10px] text-slate-400">admin@techboloy.com</div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="font-bold text-white">Techboloy CMS Menu</span>
                <button onClick={() => setMobileSidebarOpen(false)} className="p-2 text-slate-400">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-2 mt-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id as AdminTab);
                      setMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold ${
                      activeTab === item.id ? 'bg-brand-gradient text-white' : 'text-slate-300 bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <Link
                to="/"
                className="w-full py-3 rounded-xl bg-slate-800 text-white text-center font-semibold text-sm block"
              >
                View Public Website
              </Link>
              <button
                onClick={handleLogout}
                className="w-full py-3 rounded-xl bg-rose-950/60 text-rose-300 font-semibold text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}

        {/* Body Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950">
          {children}
        </main>

      </div>
    </div>
  );
};
