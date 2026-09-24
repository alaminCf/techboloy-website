import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  BarChart3, 
  CalendarCheck, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { productsData } from '../../data/products';
import { SectionItem } from '../../context/CMSContext';

interface FeaturedProductProps {
  section?: SectionItem;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ section }) => {
  const product = productsData[0]; // EstatePilot
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'units'>('overview');

  const badgeText = section?.badge || "PropTech SaaS Showcase";
  const titleText = section?.title || "From Ideas to Products.";
  const highlight = section?.highlightWord || "Products.";
  const subtitleText = section?.subtitle || "We don't just build for others; we incubate market-leading software products that solve critical industry challenges.";

  return (
    <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-magenta/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-brand-purple/40 bg-brand-purple/10 text-purple-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-magenta animate-pulse" />
            {badgeText}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">
            {titleText.includes(highlight) ? (
              <>
                <span>{titleText.split(highlight)[0]}</span>
                <span className="text-gradient-purple">{highlight}</span>
                <span>{titleText.split(highlight)[1]}</span>
              </>
            ) : (
              <span>{titleText}</span>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {subtitleText}
          </p>
        </div>

        {/* Product Spotlight Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Product Info & Chips (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shadow-glow-sm">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-lg text-white">
                    EP
                  </div>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
                    ESTATE<span className="text-brand-magenta">PILOT</span>
                  </span>
                  <div className="text-xs font-semibold text-brand-purple">
                    {product.tagline}
                  </div>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Feature Chips */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core SaaS Capabilities:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/90 border border-slate-700/80 text-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-magenta shrink-0" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800">
                {product.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-sm font-bold text-white mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  to="/products/estatepilot"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-gradient hover:shadow-glow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore EstatePilot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-center transition-all"
                >
                  Request a SaaS Demo
                </Link>
              </div>

            </div>

            {/* Right Column: Modern Interactive SaaS Dashboard Mockup (Span 6) */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-5 sm:p-6 space-y-5">
                
                {/* Mockup Tab Controller */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        activeTab === 'overview' ? 'bg-brand-purple text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Executive View
                    </button>
                    <button
                      onClick={() => setActiveTab('leads')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        activeTab === 'leads' ? 'bg-brand-purple text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Lead Pipeline
                    </button>
                    <button
                      onClick={() => setActiveTab('units')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        activeTab === 'units' ? 'bg-brand-purple text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Inventory Map
                    </button>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Cloud Sync
                  </div>
                </div>

                {/* Tab 1: Overview Mockup */}
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Total Units</div>
                        <div className="text-lg font-bold text-white mt-1">248 Units</div>
                        <div className="text-[10px] text-emerald-400">Across 6 Towers</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Active Bookings</div>
                        <div className="text-lg font-bold text-brand-magenta mt-1">182 Sold</div>
                        <div className="text-[10px] text-slate-400">73.4% Occupancy</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Installments Due</div>
                        <div className="text-lg font-bold text-amber-400 mt-1">14 Pending</div>
                        <div className="text-[10px] text-slate-400">SMS Reminders Sent</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300">Phase 2 Tower Construction Progress</span>
                        <span className="text-brand-magenta font-bold">82% Completed</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-gradient rounded-full w-[82%]" />
                      </div>
                    </div>

                    {/* Activity Feed snippet */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                      <div className="text-slate-400 font-semibold text-[11px]">Recent Operational Events:</div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Unit 14-B Booking Downpayment Verified</span>
                        <span className="text-emerald-400 font-mono">10m ago</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Auto-Generated Deed for Client #EP-4091</span>
                        <span className="text-slate-400 font-mono">42m ago</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Lead Pipeline Mockup */}
                {activeTab === 'leads' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="text-xs text-slate-400 mb-1 font-semibold">Active Sales Funnel Pipeline:</div>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                          <span className="font-semibold text-white">New Inquiries (Digital Ads)</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-mono font-bold">48</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="font-semibold text-white">Site Visits Scheduled</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono font-bold">19</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="font-semibold text-white">Contract Negotiation / Token Paid</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono font-bold">12</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Units Inventory Mockup */}
                {activeTab === 'units' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="text-xs text-slate-400 font-semibold">Tower A Floorplan Status (Floor 12):</div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300">
                        <div className="font-bold">12-A</div>
                        <div className="text-[10px]">Available</div>
                      </div>
                      <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300">
                        <div className="font-bold">12-B</div>
                        <div className="text-[10px]">Sold</div>
                      </div>
                      <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300">
                        <div className="font-bold">12-C</div>
                        <div className="text-[10px]">Sold</div>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300">
                        <div className="font-bold">12-D</div>
                        <div className="text-[10px]">Booked</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Bar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Role: Property Developer Admin</span>
                  <span className="text-brand-purple font-semibold">Enterprise License</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
