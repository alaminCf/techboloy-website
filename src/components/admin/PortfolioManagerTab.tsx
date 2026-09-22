import React, { useState } from 'react';
import { Plus, Trash2, Briefcase, X, ExternalLink } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { PortfolioItem } from '../../types';

export const PortfolioManagerTab: React.FC = () => {
  const { portfolio, addPortfolioItem, deletePortfolioItem } = useCMS();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newItem, setNewItem] = useState<Omit<PortfolioItem, 'id'>>({
    slug: '',
    title: '',
    client: '',
    category: 'Web',
    shortDescription: '',
    fullDescription: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Node.js'],
    challenge: 'Client faced challenges with legacy operational workflows.',
    solution: 'Designed and deployed an integrated cloud application.',
    results: [
      { metric: '99.9%', label: 'Uptime' },
      { metric: '50%', label: 'Efficiency Gain' }
    ],
    featured: true
  });

  const [techInput, setTechInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = newItem.slug || newItem.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const techs = techInput ? techInput.split(',').map(t => t.trim()).filter(Boolean) : newItem.technologies;

    addPortfolioItem({
      ...newItem,
      slug,
      technologies: techs
    });

    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            Portfolio & Case Studies Manager
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Publish and manage client deliverables displayed on the Homepage and Portfolio page.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-gradient hover:shadow-glow-sm flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>New Case Study</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-purple-300">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <div className="text-[11px] text-slate-400 font-semibold">Client: {item.client}</div>
                <h3 className="text-base font-bold text-white line-clamp-1">{item.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{item.shortDescription}</p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {item.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-slate-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-brand-purple font-mono">/portfolio/{item.slug}</span>
              <button
                onClick={() => {
                  if (confirm(`Delete case study "${item.title}"?`)) {
                    deletePortfolioItem(item.id);
                  }
                }}
                className="p-1.5 text-slate-500 hover:text-rose-400 rounded transition-colors"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Create New Case Study</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  placeholder="e.g., FinTech Multi-Currency Payment Gateway"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newItem.client}
                    onChange={(e) => setNewItem({ ...newItem, client: e.target.value })}
                    placeholder="e.g., PayGlobal Ltd."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category *</label>
                  <select
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                  >
                    <option value="Web">Web</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Software">Software</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SaaS">SaaS</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Cover Image URL</label>
                <input
                  type="text"
                  value={newItem.image}
                  onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Description *</label>
                <textarea
                  rows={2}
                  required
                  value={newItem.shortDescription}
                  onChange={(e) => setNewItem({ ...newItem, shortDescription: e.target.value })}
                  placeholder="1-2 sentences summarizing the deliverable..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Technologies (comma-separated)</label>
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="React, TypeScript, AWS, PostgreSQL"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl font-bold text-white bg-brand-gradient"
                >
                  Save Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
