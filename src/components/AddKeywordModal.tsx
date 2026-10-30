import React, { useState } from 'react';
import { X, Plus, Sparkles, Check } from 'lucide-react';
import { KeywordItem } from '../data/mockData';

interface AddKeywordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddKeywords: (newKeywords: KeywordItem[]) => void;
  domainUrl: string;
}

export const AddKeywordModal: React.FC<AddKeywordModalProps> = ({
  isOpen,
  onClose,
  onAddKeywords,
  domainUrl,
}) => {
  const [keywordsText, setKeywordsText] = useState('');
  const [landingUrl, setLandingUrl] = useState(`https://${domainUrl}`);
  const [intent, setIntent] = useState<'Informational' | 'Commercial' | 'Transactional' | 'Navigational'>('Commercial');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [trackAiOverview, setTrackAiOverview] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = keywordsText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) return;

    const newItems: KeywordItem[] = lines.map((line, idx) => ({
      id: `kw-new-${Date.now()}-${idx}`,
      keyword: line.toLowerCase(),
      url: landingUrl,
      intent,
      currentRank: Math.floor(Math.random() * 12) + 1,
      previousRank: Math.floor(Math.random() * 14) + 2,
      searchVolume: Math.floor(Math.random() * 30000) + 5000,
      difficulty: Math.floor(Math.random() * 40) + 40,
      cpc: Number((Math.random() * 15 + 2).toFixed(2)),
      estimatedTraffic: Math.floor(Math.random() * 8000) + 1000,
      serpFeatures: trackAiOverview
        ? ['ai_overview', 'snippet', 'paa']
        : ['snippet', 'paa'],
      aiOverviewStatus: trackAiOverview ? 'Cited (Top 3)' : 'No AI Overview',
      device,
      lastCrawled: 'Just now',
      rankHistory: [
        { date: 'Oct 01', rank: 14 },
        { date: 'Oct 14', rank: 10 },
        { date: 'Oct 28', rank: 6 },
      ],
      topCompetitors: [
        { domain: 'datadog-suite.com', rank: 1, title: `${line} Overview` },
        { domain: domainUrl, rank: 2, title: `${line} | Solutions` },
      ],
    }));

    onAddKeywords(newItems);
    setKeywordsText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0f172a]/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-[#e2e8f0] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-100">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8fafc]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#eef2ff] border border-[#c7d2fe] flex items-center justify-center text-[#4f46e5]">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0f172a]">
                Track New Search Keywords
              </h3>
              <p className="text-[11px] text-[#64748b]">
                Add queries to daily SERP poller & AI Overview citation engine
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0f172a]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0f172a] mb-1">
              Keywords (One per line)
            </label>
            <textarea
              required
              rows={4}
              value={keywordsText}
              onChange={(e) => setKeywordsText(e.target.value)}
              placeholder="e.g.&#10;cloud native service mesh telemetry&#10;automated devsecops pipeline kubernetes&#10;real time log stream parsing"
              className="w-full text-xs font-mono p-3 rounded-md border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 text-[#0f172a] placeholder-[#94a3b8]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0f172a] mb-1">
              Target Landing URL
            </label>
            <input
              type="url"
              required
              value={landingUrl}
              onChange={(e) => setLandingUrl(e.target.value)}
              className="w-full h-9 px-3 text-xs rounded-md border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 text-[#0f172a]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                Search Intent
              </label>
              <select
                value={intent}
                onChange={(e) => setIntent(e.target.value as any)}
                className="w-full h-9 px-2 text-xs rounded-md border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none text-[#0f172a] bg-white"
              >
                <option value="Commercial">Commercial</option>
                <option value="Informational">Informational</option>
                <option value="Transactional">Transactional</option>
                <option value="Navigational">Navigational</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                Device Index
              </label>
              <select
                value={device}
                onChange={(e) => setDevice(e.target.value as any)}
                className="w-full h-9 px-2 text-xs rounded-md border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none text-[#0f172a] bg-white"
              >
                <option value="desktop">Desktop (Standard)</option>
                <option value="mobile">Mobile (Googlebot-Mobile)</option>
              </select>
            </div>
          </div>

          <div className="p-3 bg-[#eef2ff] border border-[#c7d2fe] rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#4f46e5]" />
              <div className="text-xs">
                <span className="font-semibold text-[#1e1b4b]">Extract AI Overviews & Citations</span>
                <span className="text-[11px] text-[#475569] block">Parses Perplexity & Google SGE summary inclusion</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={trackAiOverview}
              onChange={(e) => setTrackAiOverview(e.target.checked)}
              className="w-4 h-4 accent-[#4f46e5] cursor-pointer"
            />
          </div>

          {/* Footer Actions */}
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
              Start SERP Tracking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
