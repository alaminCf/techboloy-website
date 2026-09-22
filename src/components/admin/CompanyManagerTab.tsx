import React, { useState } from 'react';
import { Save, CheckCircle2, RotateCcw } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

export const CompanyManagerTab: React.FC = () => {
  const { company, updateCompany } = useCMS();
  const [formData, setFormData] = useState(company);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompany(formData);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const handleStatChange = (id: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      stats: prev.stats.map(s => s.id === id ? { ...s, value } : s)
    }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            Company Profile & Live Stats
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Modifications saved here update the public Header, Footer, Hero, and Quick Stats counter immediately.
          </p>
        </div>

        {savedMessage && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs font-bold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Saved & Synced Live!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Core Profile */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
            1. Brand Identity & Tagline
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Official Tagline
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
            2. Contact Channels
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Official Phone Number
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Official Inquiries Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                WhatsApp Link / Number (Format: https://wa.me/...)
              </label>
              <input
                type="text"
                value={formData.social.whatsapp}
                onChange={(e) => setFormData({
                  ...formData,
                  social: { ...formData.social, whatsapp: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                LinkedIn Company Page URL
              </label>
              <input
                type="text"
                value={formData.social.linkedin}
                onChange={(e) => setFormData({
                  ...formData,
                  social: { ...formData.social, linkedin: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>
          </div>
        </div>

        {/* Corporate Address */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
            3. Headquarters Address
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Address Line 1
              </label>
              <input
                type="text"
                value={formData.address.line1}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, line1: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Address Line 2
              </label>
              <input
                type="text"
                value={formData.address.line2}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, line2: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                City / Postal Code
              </label>
              <input
                type="text"
                value={formData.address.city}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Country
              </label>
              <input
                type="text"
                value={formData.address.country}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, country: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>
          </div>
        </div>

        {/* Counter Stats Manager */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
            4. Live Animated Counter Statistics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formData.stats.map((stat) => (
              <div key={stat.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <label className="block text-xs font-bold text-brand-purple">
                  {stat.label}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={stat.value}
                    onChange={(e) => handleStatChange(stat.id, parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  />
                  <span className="text-base font-bold text-brand-magenta">{stat.suffix}</span>
                </div>
                <div className="text-[11px] text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-8 py-4 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save & Apply Live Changes</span>
          </button>
        </div>

      </form>

    </div>
  );
};
