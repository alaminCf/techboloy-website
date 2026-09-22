import React, { useState } from 'react';
import { Inbox, Trash2, Mail, Phone, Calendar, CheckCircle2, Clock, Filter } from 'lucide-react';
import { useCMS, InboundInquiry } from '../../context/CMSContext';

export const InquiriesInboxTab: React.FC = () => {
  const { inquiries, updateInquiryStatus, deleteInquiry } = useCMS();
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<InboundInquiry | null>(null);

  const filteredInquiries = filterStatus === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === filterStatus);

  const statusColors = {
    'New': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    'In Review': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Contacted': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Closed': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            Inbound Client Leads & Inquiries
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Real submissions captured from the public Contact page and EstatePilot demo request form.
          </p>
        </div>

        {/* Filter */}
        <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1">
          {['all', 'New', 'In Review', 'Contacted', 'Closed'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize ${
                filterStatus === st ? 'bg-brand-purple text-white' : 'text-slate-400'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Inquiries List (Span 7) */}
        <div className="lg:col-span-7 space-y-3">
          {filteredInquiries.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-slate-900 border border-slate-800 text-slate-500 text-xs">
              No inquiries found in this category.
            </div>
          ) : (
            filteredInquiries.map((inq) => {
              const isSelected = selectedInquiry?.id === inq.id;
              return (
                <div
                  key={inq.id}
                  onClick={() => setSelectedInquiry(inq)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-slate-800 border-brand-purple shadow-glow-sm' 
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{inq.name}</h4>
                      <div className="text-xs text-slate-400">{inq.company}</div>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusColors[inq.status]}`}>
                      {inq.status}
                    </span>
                  </div>

                  <div className="text-xs text-brand-magenta font-semibold mb-2">
                    {inq.serviceRequired} {inq.budgetRange ? `• ${inq.budgetRange}` : ''}
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {inq.projectDetails}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(inq.submittedAt).toLocaleString()}
                    </span>
                    <span>Click to view details →</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Selected Inquiry Detail Inspector (Span 5) */}
        <div className="lg:col-span-5">
          {selectedInquiry ? (
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-5 sticky top-24">
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedInquiry.name}</h3>
                  <div className="text-xs text-slate-400">{selectedInquiry.company}</div>
                </div>
                <button
                  onClick={() => {
                    if (confirm(`Delete inquiry from ${selectedInquiry.name}?`)) {
                      deleteInquiry(selectedInquiry.id);
                      setSelectedInquiry(null);
                    }
                  }}
                  className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-950/20 rounded-lg transition-colors"
                  title="Delete Lead"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Status Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Update Lead Status:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['New', 'In Review', 'Contacted', 'Closed'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        updateInquiryStatus(selectedInquiry.id, st);
                        setSelectedInquiry({ ...selectedInquiry, status: st });
                      }}
                      className={`py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        selectedInquiry.status === st
                          ? `${statusColors[st]} font-bold`
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Channels */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-brand-purple" />
                  <a href={`mailto:${selectedInquiry.email}`} className="hover:text-white underline">
                    {selectedInquiry.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-brand-purple" />
                  <a href={`tel:${selectedInquiry.phone}`} className="hover:text-white">
                    {selectedInquiry.phone}
                  </a>
                </div>
              </div>

              {/* Scope & Message */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Project Scope & Inquiry Message:
                </span>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.projectDetails}
                </div>
              </div>

              {/* Quick WhatsApp Link */}
              <a
                href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${selectedInquiry.name}, this is Techboloy following up regarding your project request for ${selectedInquiry.serviceRequired}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 text-xs transition-colors"
              >
                <span>Follow up on WhatsApp</span>
              </a>

            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-slate-900 border border-slate-800 text-slate-500 text-xs">
              Select an inquiry on the left to inspect contact details, update status, or initiate follow-up.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
