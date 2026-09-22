import React, { useState } from 'react';
import { Plus, Trash2, Edit3, UserPlus, X, CheckCircle2, Linkedin } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { TeamMember } from '../../types';

export const TeamManagerTab: React.FC = () => {
  const { team, addTeamMember, deleteTeamMember } = useCMS();
  const [filterCategory, setFilterCategory] = useState<'all' | 'leadership' | 'core'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newMember, setNewMember] = useState<Omit<TeamMember, 'id'>>({
    name: '',
    position: '',
    category: 'leadership',
    bio: '',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    linkedin: 'https://www.linkedin.com/company/techboloy/',
    specialization: ['Software Architecture']
  });

  const [specializationInput, setSpecializationInput] = useState('');

  const displayedTeam = filterCategory === 'all' 
    ? team 
    : team.filter(m => m.category === filterCategory);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const specs = specializationInput
      ? specializationInput.split(',').map(s => s.trim()).filter(Boolean)
      : newMember.specialization;

    addTeamMember({
      ...newMember,
      specialization: specs
    });

    setIsModalOpen(false);
    setNewMember({
      name: '',
      position: '',
      category: 'leadership',
      bio: '',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
      linkedin: 'https://www.linkedin.com/company/techboloy/',
      specialization: ['Software Architecture']
    });
    setSpecializationInput('');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            Team & Leadership Management
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Add, update, or remove leadership profiles and engineering specialists.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Category Filter */}
          <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                filterCategory === 'all' ? 'bg-brand-purple text-white' : 'text-slate-400'
              }`}
            >
              All ({team.length})
            </button>
            <button
              onClick={() => setFilterCategory('leadership')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                filterCategory === 'leadership' ? 'bg-brand-purple text-white' : 'text-slate-400'
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setFilterCategory('core')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                filterCategory === 'core' ? 'bg-brand-purple text-white' : 'text-slate-400'
              }`}
            >
              Core
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-gradient hover:shadow-glow-sm flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedTeam.map((member) => (
          <div
            key={member.id}
            className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-brand-purple/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-700"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white">{member.name}</h3>
                    <div className="text-xs text-brand-magenta font-semibold">{member.position}</div>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  member.category === 'leadership' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-slate-800 text-slate-300'
                }`}>
                  {member.category}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                {member.specialization.map((spec) => (
                  <span key={spec} className="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-slate-400 border border-slate-800">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5 text-brand-purple" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={() => {
                  if (confirm(`Remove ${member.name} from website?`)) {
                    deleteTeamMember(member.id);
                  }
                }}
                className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-950/20 rounded-lg transition-colors"
                title="Delete Profile"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Member Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-brand-purple" />
                <span>Add New Team Member</span>
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  placeholder="e.g., Anisur Rahman"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Position / Role *</label>
                  <input
                    type="text"
                    required
                    value={newMember.position}
                    onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                    placeholder="e.g., Senior Cloud Architect"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category *</label>
                  <select
                    value={newMember.category}
                    onChange={(e) => setNewMember({ ...newMember, category: e.target.value as 'leadership' | 'core' })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  >
                    <option value="leadership">Leadership Team</option>
                    <option value="core">Core Engineering & Growth</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Photo / Avatar URL</label>
                <input
                  type="text"
                  value={newMember.avatar}
                  onChange={(e) => setNewMember({ ...newMember, avatar: e.target.value })}
                  placeholder="https://... or /assets/photo.jpg"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">LinkedIn Profile URL</label>
                <input
                  type="text"
                  value={newMember.linkedin}
                  onChange={(e) => setNewMember({ ...newMember, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Bio</label>
                <textarea
                  rows={3}
                  value={newMember.bio}
                  onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                  placeholder="Summary of experience, technical background and focus..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Specializations (comma-separated)</label>
                <input
                  type="text"
                  value={specializationInput}
                  onChange={(e) => setSpecializationInput(e.target.value)}
                  placeholder="React, Microservices, Cloud Security"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm"
                >
                  Save Team Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
