import React, { useState } from 'react';
import { 
  Layers, 
  Plus, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Edit3, 
  Trash2, 
  RotateCcw, 
  Sparkles, 
  Check, 
  ExternalLink,
  Image as ImageIcon
} from 'lucide-react';
import { useCMS, SectionItem } from '../../context/CMSContext';
import { SectionEditModal } from './SectionEditModal';
import { AddCustomSectionModal } from './AddCustomSectionModal';

export const SectionsManagerTab: React.FC = () => {
  const { 
    sections, 
    toggleSection, 
    moveSection, 
    deleteSection, 
    resetSections,
    editMode,
    setEditMode
  } = useCMS();

  const [editingSection, setEditingSection] = useState<SectionItem | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  const handleEdit = (section: SectionItem) => {
    setEditingSection(section);
    setIsEditModalOpen(true);
  };

  const activeCount = sections.filter(s => s.enabled).length;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header & Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple">
            <Layers className="w-3.5 h-3.5" />
            <span>Visual Page Builder</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
            Page & Section Manager
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Control the layout of your homepage: edit headlines, change images, reorder blocks, and add or hide sections in real-time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Toggle Live Edit Mode */}
          <button
            type="button"
            onClick={() => setEditMode(!editMode)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              editMode
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-brand-purple/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>On-Page Edit Mode: {editMode ? 'ON' : 'OFF'}</span>
          </button>

          {/* Add Custom Section */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Section</span>
          </button>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-500">Total Sections</div>
          <div className="text-2xl font-black font-display text-slate-900 dark:text-white mt-1">
            {sections.length}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-500">Live (Visible) on Homepage</div>
          <div className="text-2xl font-black font-display text-emerald-600 dark:text-emerald-400 mt-1">
            {activeCount}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-500">Hidden Sections</div>
          <div className="text-2xl font-black font-display text-slate-400 mt-1">
            {sections.length - activeCount}
          </div>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Homepage Section Hierarchy</span>
            <span className="text-xs font-normal text-slate-500">({sortedSections.length} sections)</span>
          </h3>
          <button
            onClick={resetSections}
            className="text-xs text-slate-500 hover:text-rose-500 flex items-center gap-1.5 transition-colors"
            title="Reset sections to default layout"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>
        </div>

        <div className="space-y-2.5">
          {sortedSections.map((sec, idx) => (
            <div
              key={sec.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                sec.enabled
                  ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                  : 'bg-slate-50/70 dark:bg-slate-950 border-slate-200/60 dark:border-slate-800/50 opacity-60'
              }`}
            >
              
              {/* Left Column: Number, Name, Info */}
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  #{idx + 1}
                </div>

                <div className="min-w-0 space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
                      {sec.name}
                    </span>
                    
                    {sec.type === 'custom' ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-brand-magenta/10 text-brand-magenta border border-brand-magenta/20">
                        Custom Block ({sec.layout || 'standard'})
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
                        Core Section
                      </span>
                    )}

                    {sec.imageUrl && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 dark:text-indigo-400 flex items-center gap-1">
                        <ImageIcon className="w-2.5 h-2.5" />
                        <span>Has Custom Image</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-xl">
                    {sec.title || sec.subtitle || 'No headline specified'}
                  </p>
                </div>
              </div>

              {/* Right Column: Actions (Reorder, Edit, Toggle, Delete) */}
              <div className="flex items-center gap-1.5 self-end sm:self-center flex-shrink-0">
                
                {/* Reorder Up */}
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => moveSection(sec.id, 'up')}
                  className="p-2 rounded-xl text-slate-500 hover:text-brand-purple hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  title="Move section up"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>

                {/* Reorder Down */}
                <button
                  type="button"
                  disabled={idx === sortedSections.length - 1}
                  onClick={() => moveSection(sec.id, 'down')}
                  className="p-2 rounded-xl text-slate-500 hover:text-brand-purple hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  title="Move section down"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>

                {/* Edit Section Content & Image */}
                <button
                  type="button"
                  onClick={() => handleEdit(sec)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-brand-purple bg-brand-purple/10 hover:bg-brand-purple/20 transition-colors flex items-center gap-1.5"
                  title="Edit title, text, CTAs and images"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>

                {/* Toggle Show / Hide */}
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  className={`p-2 rounded-xl text-xs font-semibold transition-colors ${
                    sec.enabled
                      ? 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={sec.enabled ? 'Click to hide section' : 'Click to show section'}
                >
                  {sec.enabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>

                {/* Delete button (for custom sections) */}
                {sec.type === 'custom' && (
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Delete custom section "${sec.name}"?`)) {
                        deleteSection(sec.id);
                      }
                    }}
                    className="p-2 rounded-xl text-rose-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                    title="Delete section"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      <SectionEditModal
        section={editingSection}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingSection(null);
        }}
      />

      {/* Add Custom Section Modal */}
      <AddCustomSectionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

    </div>
  );
};
