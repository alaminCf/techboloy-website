import React from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  FileText, 
  Inbox, 
  TrendingUp, 
  ArrowRight,
  PlusCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { AdminTab } from './AdminLayout';

interface OverviewTabProps {
  setActiveTab: (tab: AdminTab) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ setActiveTab }) => {
  const { company, team, portfolio, insights, inquiries } = useCMS();

  const newInquiries = inquiries.filter(i => i.status === 'New');

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Welcome Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-purple/20 via-brand-magenta/10 to-transparent border border-brand-purple/30 relative overflow-hidden">
        <div className="max-w-2xl space-y-2 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta">
            Content Management System
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Welcome to the Techboloy Control Center
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Manage company parameters, team members, portfolio case studies, articles, and review inbound client inquiries in real time.
          </p>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div 
          onClick={() => setActiveTab('team')}
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-purple/50 cursor-pointer transition-all hover:-translate-y-1 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 font-semibold">Active Staff</span>
          </div>
          <div className="text-3xl font-black text-white font-display">{team.length}</div>
          <div className="text-xs text-slate-400 mt-1">Engineers & Leaders</div>
        </div>

        <div 
          onClick={() => setActiveTab('portfolio')}
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-purple/50 cursor-pointer transition-all hover:-translate-y-1 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 font-semibold">Case Studies</span>
          </div>
          <div className="text-3xl font-black text-white font-display">{portfolio.length}</div>
          <div className="text-xs text-slate-400 mt-1">Featured Deliverables</div>
        </div>

        <div 
          onClick={() => setActiveTab('insights')}
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-purple/50 cursor-pointer transition-all hover:-translate-y-1 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 font-semibold">Published Posts</span>
          </div>
          <div className="text-3xl font-black text-white font-display">{insights.length}</div>
          <div className="text-xs text-slate-400 mt-1">Articles & Guides</div>
        </div>

        <div 
          onClick={() => setActiveTab('inquiries')}
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-purple/50 cursor-pointer transition-all hover:-translate-y-1 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold">
              <Inbox className="w-5 h-5" />
            </div>
            {newInquiries.length > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white animate-pulse">
                {newInquiries.length} New
              </span>
            )}
          </div>
          <div className="text-3xl font-black text-white font-display">{inquiries.length}</div>
          <div className="text-xs text-slate-400 mt-1">Inbound Leads Received</div>
        </div>

      </div>

      {/* Quick Action Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Quick Launch Panel */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <PlusCircle className="w-4 h-4 text-brand-purple" />
            <span>Fast Management Actions</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setActiveTab('company')}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-brand-purple/40 text-left transition-all hover:bg-slate-800/40"
            >
              <div className="text-xs font-bold text-white">Update Phone & Address</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Edit ICT Tower office & stats</div>
            </button>

            <button
              onClick={() => setActiveTab('team')}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-brand-purple/40 text-left transition-all hover:bg-slate-800/40"
            >
              <div className="text-xs font-bold text-white">Add Team Member</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Add engineers & leaders</div>
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-brand-purple/40 text-left transition-all hover:bg-slate-800/40"
            >
              <div className="text-xs font-bold text-white">Add New Case Study</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Showcase recent client work</div>
            </button>

            <button
              onClick={() => setActiveTab('insights')}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-brand-purple/40 text-left transition-all hover:bg-slate-800/40"
            >
              <div className="text-xs font-bold text-white">Draft New Insight</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Publish thought leadership</div>
            </button>
          </div>
        </div>

        {/* Recent Inquiries Preview */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Inbox className="w-4 h-4 text-brand-magenta" />
              <span>Latest Inbound Inquiries</span>
            </h3>
            <button
              onClick={() => setActiveTab('inquiries')}
              className="text-xs font-bold text-brand-purple hover:text-brand-magenta"
            >
              View All ({inquiries.length})
            </button>
          </div>

          <div className="space-y-3">
            {inquiries.slice(0, 3).map((inq) => (
              <div
                key={inq.id}
                onClick={() => setActiveTab('inquiries')}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-brand-purple/40 cursor-pointer flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-white">{inq.name} ({inq.company})</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{inq.serviceRequired}</div>
                </div>
                <span className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${
                  inq.status === 'New' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-slate-800 text-slate-400'
                }`}>
                  {inq.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
