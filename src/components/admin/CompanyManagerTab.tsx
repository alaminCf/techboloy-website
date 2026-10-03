import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2, RotateCcw, Image as ImageIcon, Eye, Sun, Moon } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { ImageUploadField } from '../common/ImageUploadField';

export const CompanyManagerTab: React.FC = () => {
  const { company, updateCompany } = useCMS();
  const [formData, setFormData] = useState({
    ...company,
    logoType: company.logoType || 'icon-text',
    logo: company.logo || '/assets/tb-logo-light.png',
    logoLight: company.logoLight || company.logo || '/assets/tb-logo-light.png',
    logoDark: company.logoDark || '/assets/tb-logo-dark.png',
    logoIcon: company.logoIcon || '/assets/tb-icon.png',
    logoIconDark: company.logoIconDark || company.logoIcon || '/assets/tb-icon-dark.png',
  });
  const [savedMessage, setSavedMessage] = useState(false);

  // Sync state whenever CMSContext changes
  useEffect(() => {
    setFormData({
      ...company,
      logoType: company.logoType || 'icon-text',
      logo: company.logo || '/assets/tb-logo-light.png',
      logoLight: company.logoLight || company.logo || '/assets/tb-logo-light.png',
      logoDark: company.logoDark || '/assets/tb-logo-dark.png',
      logoIcon: company.logoIcon || '/assets/tb-icon.png',
      logoIconDark: company.logoIconDark || company.logoIcon || '/assets/tb-icon-dark.png',
    });
  }, [company]);

  const resetToDefaultLogos = () => {
    setFormData(prev => ({
      ...prev,
      logoType: 'icon-text',
      logo: '/assets/tb-logo-light.png',
      logoLight: '/assets/tb-logo-light.png',
      logoDark: '/assets/tb-logo-dark.png',
      logoIcon: '/assets/tb-icon.png',
      logoIconDark: '/assets/tb-icon-dark.png',
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = {
      ...formData,
      logo: formData.logoLight || formData.logo || '/assets/tb-logo.jpeg',
    };
    updateCompany(normalized);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3500);
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

        {/* Website Logo & Visual Identity */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-brand-purple" />
                <span>2. Website Logo & Brand Identity (Dark & Light Mode)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Upload dedicated logos and icon marks for both Light Mode (white backgrounds) and Dark Mode (dark backgrounds & footer).
              </p>
            </div>
            <button
              type="button"
              onClick={resetToDefaultLogos}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors w-fit"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
          </div>

          {/* Logo Display Format Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Logo Display Format in Website Header & Footer
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label 
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  formData.logoType === 'icon-text' 
                    ? 'border-brand-purple bg-brand-purple/10 text-white shadow-glow-sm' 
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="logoType"
                  value="icon-text"
                  checked={formData.logoType === 'icon-text'}
                  onChange={() => setFormData({ ...formData, logoType: 'icon-text' })}
                  className="mt-1 text-brand-purple focus:ring-brand-purple"
                />
                <div>
                  <div className="text-sm font-bold text-white">Icon Mark + Brand Name (Default)</div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Displays your square icon mark inside a gradient box next to your styled company name and tagline.
                  </div>
                </div>
              </label>

              <label 
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  formData.logoType === 'image-only' 
                    ? 'border-brand-purple bg-brand-purple/10 text-white shadow-glow-sm' 
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="logoType"
                  value="image-only"
                  checked={formData.logoType === 'image-only'}
                  onChange={() => setFormData({ ...formData, logoType: 'image-only' })}
                  className="mt-1 text-brand-purple focus:ring-brand-purple"
                />
                <div>
                  <div className="text-sm font-bold text-white">Full Logo Image (Horizontal)</div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Renders your uploaded full logo image directly without separate text typography.
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Section A: Light Mode Logo Settings */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-amber-500/30 space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                <Sun className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  ☀️ Light Mode Branding (For White / Light backgrounds)
                </h4>
                <p className="text-[11px] text-slate-400">
                  Used when viewing the website in Light Mode, or on white header pages.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Horizontal Light Logo */}
              <div className="space-y-2">
                <ImageUploadField
                  label="Light Mode Full Logo (Horizontal)"
                  value={formData.logoLight || ''}
                  onChange={(newLight) => setFormData({ ...formData, logoLight: newLight, logo: newLight })}
                  helperText="Recommended: Dark or colored logo with transparent background"
                  placeholder="/assets/tb-logo-light.png or https://..."
                  previewDarkDefault={false}
                  presets={[
                    { label: 'TB Light Logo (Transparent)', url: '/assets/tb-logo-light.png' },
                    { label: 'TB Dark Logo (White Text)', url: '/assets/tb-logo-dark.png' },
                    { label: 'TB Pure White Logo', url: '/assets/tb-logo-white.png' }
                  ]}
                />
              </div>

              {/* Light Mode Icon */}
              <div className="space-y-2">
                <ImageUploadField
                  label="Light Mode Icon Mark (Square 1:1)"
                  value={formData.logoIcon || ''}
                  onChange={(newIcon) => setFormData({ ...formData, logoIcon: newIcon })}
                  helperText="Square icon used in the header and mobile menu"
                  placeholder="/assets/tb-icon.png or https://..."
                  previewDarkDefault={false}
                  presets={[
                    { label: 'TB Icon (Gradient)', url: '/assets/tb-icon.png' },
                    { label: 'TB Dark Icon', url: '/assets/tb-icon-dark.png' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Section B: Dark Mode Logo Settings */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-purple-500/30 space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                <Moon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  🌙 Dark Mode Branding (For Dark backgrounds, Hero & Footer)
                </h4>
                <p className="text-[11px] text-slate-400">
                  Used on dark backgrounds, transparent Hero section, Dark Theme, and the Footer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Horizontal Dark Logo */}
              <div className="space-y-2">
                <ImageUploadField
                  label="Dark Mode Full Logo (Horizontal)"
                  value={formData.logoDark || ''}
                  onChange={(newDark) => setFormData({ ...formData, logoDark: newDark })}
                  helperText="Recommended: White or radiant logo with transparent background"
                  placeholder="/assets/tb-logo-dark.png or https://..."
                  previewDarkDefault={true}
                  presets={[
                    { label: 'TB Dark Logo (White Text)', url: '/assets/tb-logo-dark.png' },
                    { label: 'TB Pure White Logo', url: '/assets/tb-logo-white.png' },
                    { label: 'TB Light Logo', url: '/assets/tb-logo-light.png' }
                  ]}
                />
              </div>

              {/* Dark Mode Icon */}
              <div className="space-y-2">
                <ImageUploadField
                  label="Dark Mode Icon Mark (Square 1:1)"
                  value={formData.logoIconDark || ''}
                  onChange={(newIconDark) => setFormData({ ...formData, logoIconDark: newIconDark })}
                  helperText="Square icon for dark theme and admin dashboard"
                  placeholder="/assets/tb-icon-dark.png or https://..."
                  previewDarkDefault={true}
                  presets={[
                    { label: 'TB Icon (Gradient)', url: '/assets/tb-icon.png' },
                    { label: 'TB Dark Icon', url: '/assets/tb-icon-dark.png' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Live Dual-Theme Visual Preview Card */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-brand-purple" />
                <span>Live Dual-Theme Appearance Preview</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-brand-magenta tracking-wider">
                Mode: {formData.logoType === 'image-only' ? 'Full Image' : 'Icon + Text'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
              {/* Light Theme Surface Preview */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>☀️ Light Theme Header Preview</span>
                  </span>
                  <span className="text-[9px] uppercase px-2 py-0.5 rounded font-semibold bg-slate-100 text-slate-600">
                    White Surface
                  </span>
                </div>

                <div className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 w-fit max-w-full overflow-hidden">
                  {formData.logoType === 'image-only' ? (
                    <img 
                      src={formData.logoLight || formData.logo || '/assets/tb-logo-light.png'} 
                      alt="Light Preview" 
                      className="h-8 max-h-10 w-auto max-w-[180px] object-contain" 
                      onError={(e) => { e.currentTarget.src = '/assets/tb-logo-light.png'; }}
                    />
                  ) : (
                    <>
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shrink-0 shadow-sm">
                        <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                          <img 
                            src={formData.logoIcon || '/assets/tb-icon.png'} 
                            alt="Light Icon" 
                            className="w-full h-full object-contain" 
                            onError={(e) => { e.currentTarget.src = '/assets/tb-icon.png'; }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-base font-black tracking-tight text-slate-900 font-display truncate">
                          {formData.name || 'Brand Name'}
                        </span>
                        <span className="text-[8px] uppercase tracking-wider text-slate-500 truncate">
                          {formData.tagline || 'Tagline'}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="text-[10px] text-slate-500">
                  This is how visitors see your brand on light backgrounds and daytime mode.
                </div>
              </div>

              {/* Dark Theme Surface Preview */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-md flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white flex items-center gap-1">
                    <Moon className="w-3.5 h-3.5 text-purple-400" />
                    <span>🌙 Dark Theme & Footer Preview</span>
                  </span>
                  <span className="text-[9px] uppercase px-2 py-0.5 rounded font-semibold bg-slate-900 text-purple-300 border border-slate-800">
                    Dark Slate Surface
                  </span>
                </div>

                <div className="py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 w-fit max-w-full overflow-hidden">
                  {formData.logoType === 'image-only' ? (
                    <img 
                      src={formData.logoDark || '/assets/tb-logo-dark.png'} 
                      alt="Dark Preview" 
                      className="h-8 max-h-10 w-auto max-w-[180px] object-contain" 
                      onError={(e) => { e.currentTarget.src = '/assets/tb-logo-dark.png'; }}
                    />
                  ) : (
                    <>
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta p-0.5 shrink-0 shadow-sm">
                        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                          <img 
                            src={formData.logoIconDark || formData.logoIcon || '/assets/tb-icon.png'} 
                            alt="Dark Icon" 
                            className="w-full h-full object-contain" 
                            onError={(e) => { e.currentTarget.src = '/assets/tb-icon.png'; }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-base font-black tracking-tight text-white font-display truncate">
                          {formData.name || 'Brand Name'}
                        </span>
                        <span className="text-[8px] uppercase tracking-wider text-slate-400 truncate">
                          {formData.tagline || 'Tagline'}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="text-[10px] text-slate-400">
                  This is how visitors see your brand on dark mode, hero banner, and footer.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
            3. Contact Channels
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
            4. Headquarters Address
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
            5. Live Animated Counter Statistics
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
