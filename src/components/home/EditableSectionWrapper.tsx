import React, { useState } from 'react';
import { Edit3, EyeOff, ArrowUp, ArrowDown, Layers, Sparkles } from 'lucide-react';
import { useCMS, SectionItem } from '../../context/CMSContext';
import { SectionEditModal } from '../admin/SectionEditModal';

interface EditableSectionWrapperProps {
  section: SectionItem;
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}

export const EditableSectionWrapper: React.FC<EditableSectionWrapperProps> = ({
  section,
  children,
  isFirst,
  isLast
}) => {
  const { editMode, toggleSection, moveSection } = useCMS();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!editMode) {
    return <>{children}</>;
  }

  return (
    <div className="relative group/section transition-all ring-2 ring-transparent hover:ring-brand-purple/70 rounded-3xl my-1">
      
      {/* Floating Section Edit Toolbar */}
      <div className="absolute top-4 right-4 z-40 flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-950/90 text-white border border-brand-purple/40 shadow-xl backdrop-blur-md opacity-90 group-hover/section:opacity-100 transition-opacity">
        
        {/* Section Label */}
        <span className="text-[11px] font-bold px-2.5 py-1 rounded-xl bg-brand-purple/20 text-brand-magenta border border-brand-purple/30 flex items-center gap-1">
          <Layers className="w-3 h-3" />
          <span>{section.name}</span>
        </span>

        {/* Move Up */}
        <button
          type="button"
          disabled={isFirst}
          onClick={(e) => {
            e.stopPropagation();
            moveSection(section.id, 'up');
          }}
          className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          title="Move section up"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        {/* Move Down */}
        <button
          type="button"
          disabled={isLast}
          onClick={(e) => {
            e.stopPropagation();
            moveSection(section.id, 'down');
          }}
          className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          title="Move section down"
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </button>

        {/* Edit Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsEditModalOpen(true);
          }}
          className="px-2.5 py-1 rounded-xl text-xs font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all flex items-center gap-1"
          title="Edit headline, subtitle, image, and buttons"
        >
          <Edit3 className="w-3 h-3" />
          <span>Edit</span>
        </button>

        {/* Hide Section */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleSection(section.id);
          }}
          className="p-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 transition-colors"
          title="Hide this section"
        >
          <EyeOff className="w-3.5 h-3.5" />
        </button>

      </div>

      {/* Render the actual section component */}
      {children}

      {/* Edit Modal */}
      <SectionEditModal
        section={section}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

    </div>
  );
};
