import React, { useState } from 'react';
import { X, Globe, Plus } from 'lucide-react';
import { DomainProfile } from '../data/mockData';

interface AddDomainModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDomain: (domain: DomainProfile) => void;
}

export const AddDomainModal: React.FC<AddDomainModalProps> = ({
  isOpen,
  onClose,
  onAddDomain,
}) => {
  const [domainName, setDomainName] = useState('');
  const [displayName, setDisplayName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainName) return;

    const cleanDomain = domainName.replace(/https?:\/\//, '').replace(/\/$/, '');
    const newDomain: DomainProfile = {
      id: `domain-${Date.now()}`,
      domain: cleanDomain,
      name: displayName || cleanDomain,
      organicTraffic: '124,000',
      trafficDelta: 5.4,
      avgPosition: 14.2,
      posDelta: 1.0,
      trackedKeywordsCount: 1200,
      keywordsDelta: 45,
      healthScore: 89,
      healthDelta: 0.8,
      aiVisibilityScore: 48.5,
      aiVisibilityDelta: 2.1,
    };

    onAddDomain(newDomain);
    setDomainName('');
    setDisplayName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0f172a]/50 backdrop-blur-xs transition-opacity"
      />
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl border border-[#e2e8f0] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-100">
        <div className="px-5 py-4 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8fafc]">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#4f46e5]" />
            <h3 className="text-sm font-bold text-[#0f172a]">Track New Domain Property</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0f172a]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0f172a] mb-1">
              Domain Hostname
            </label>
            <input
              type="text"
              required
              placeholder="e.g. app.getsaas.com"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              className="w-full h-9 px-3 text-xs rounded-md border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 text-[#0f172a]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0f172a] mb-1">
              Display Label (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. GetSaaS App Portal"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full h-9 px-3 text-xs rounded-md border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 text-[#0f172a]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2 border-t border-[#f1f5f9]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md hover:bg-[#f1f5f9] text-xs font-semibold text-[#475569] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-semibold transition-colors shadow-2xs"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
