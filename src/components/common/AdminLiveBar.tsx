import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Settings, 
  Layers, 
  Plus, 
  Eye, 
  EyeOff, 
  Download, 
  X, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { AddCustomSectionModal } from '../admin/AddCustomSectionModal';

export const AdminLiveBar: React.FC = () => {
  const { editMode, setEditMode, exportDataJson, sections } = useCMS();
  const [isAdmin, setIsAdmin] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged into admin session
    const auth = sessionStorage.getItem('techboloy_admin_auth');
    if (auth === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // If not logged in as admin and not in edit mode, hide
  if (!isAdmin && !editMode) return null;

  return (
    <>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] sm:w-auto animate-bounce-subtle select-none">
        <div className="bg-slate-950/95 text-white border border-brand-purple/40 rounded-2xl shadow-2xl backdrop-blur-xl px-4 py-3 flex items-center justify-between gap-3 text-xs ring-1 ring-brand-purple/30">
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2 pr-1">
            <span className="flex h-2.5 w-2.5 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                editMode ? 'bg-amber-400' : 'bg-emerald-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                editMode ? 'bg-amber-400' : 'bg-emerald-400'
              }`} />
            </span>
            <span className="font-bold hidden sm:inline text-slate-200">
              Admin Toolbar
            </span>
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          {/* Edit Mode Toggle */}
          <button
            type="button"
            onClick={() => setEditMode(!editMode)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
              editMode
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{editMode ? 'Edit Mode: ON' : 'Edit Mode: OFF'}</span>
          </button>

          {/* Add Section Shortcut */}
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="px-2.5 py-1.5 rounded-xl font-medium bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1"
            title="Add a custom section block"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add Section</span>
          </button>

          {/* Full Dashboard Link */}
          <Link
            to="/admin"
            className="px-2.5 py-1.5 rounded-xl font-medium bg-brand-purple/20 text-purple-300 border border-brand-purple/30 hover:bg-brand-purple/30 transition-colors flex items-center gap-1.5"
            title="Open Admin CMS Dashboard"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Admin CMS</span>
          </Link>

          {/* Export Backup */}
          <button
            type="button"
            onClick={exportDataJson}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors hidden sm:block"
            title="Export full CMS backup (JSON)"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

      {/* Add Custom Section Modal */}
      <AddCustomSectionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
};
