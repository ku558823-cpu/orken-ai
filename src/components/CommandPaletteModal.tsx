import React, { useState, useEffect } from 'react';
import {
  Search,
  LayoutDashboard,
  Users2,
  ShieldAlert,
  Bell,
  Sparkles,
  Download,
  Plus,
  RefreshCw,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { KeywordItem } from '../data/mockData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectView: (view: string) => void;
  keywords: KeywordItem[];
  onSelectKeyword: (kw: KeywordItem) => void;
  onOpenAddKeyword: () => void;
  onOpenAiBrief: () => void;
  onTriggerCrawl: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onSelectView,
  keywords,
  onSelectKeyword,
  onOpenAddKeyword,
  onOpenAiBrief,
  onTriggerCrawl,
}) => {
  const [query, setQuery] = useState('');

  // Listen to Cmd+K / Ctrl+K and Esc
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle if needed
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredKeywords = keywords
    .filter((k) => k.keyword.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);

  const navigationCommands = [
    { id: 'dashboard', label: 'Go to Executive Dashboard', icon: LayoutDashboard },
    { id: 'keywords', label: 'Go to SERP Keywords Table', icon: Search },
    { id: 'competitors', label: 'Go to Competitor Intelligence', icon: Users2 },
    { id: 'audits', label: 'Go to Technical Site Audits', icon: ShieldAlert },
    { id: 'alerts', label: 'Go to Anomaly Alerts Radar', icon: Bell },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  const actionCommands = [
    {
      id: 'brief',
      label: 'Generate AI Executive Intelligence Brief',
      icon: Sparkles,
      action: () => {
        onClose();
        onOpenAiBrief();
      },
    },
    {
      id: 'crawl',
      label: 'Trigger Live Site Audit & Crawl Scan',
      icon: RefreshCw,
      action: () => {
        onClose();
        onTriggerCrawl();
      },
    },
    {
      id: 'add-kw',
      label: 'Add New Keywords to SERP Tracking',
      icon: Plus,
      action: () => {
        onClose();
        onOpenAddKeyword();
      },
    },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0f172a]/50 backdrop-blur-xs transition-opacity"
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl border border-[#e2e8f0] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-100">
        {/* Search input header */}
        <div className="p-3 border-b border-[#e2e8f0] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#64748b] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search keyword, or jump to view..."
            className="w-full text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none bg-transparent"
          />
          <kbd className="font-mono text-[10px] bg-[#f1f5f9] border border-[#cbd5e1] rounded px-1.5 py-0.5 text-[#64748b] shrink-0">
            ESC
          </kbd>
        </div>

        {/* Command list */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-3">
          {/* Action Commands */}
          {actionCommands.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider px-2.5 py-1">
                Quick Actions
              </div>
              <div className="space-y-0.5">
                {actionCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-[#eef2ff] hover:text-[#4f46e5] text-xs font-semibold text-[#0f172a] flex items-center justify-between transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#4f46e5]" />
                        <span>{cmd.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#4f46e5] transition-opacity" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation Links */}
          {navigationCommands.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider px-2.5 py-1">
                Navigation
              </div>
              <div className="space-y-0.5">
                {navigationCommands.map((nav) => {
                  const Icon = nav.icon;
                  return (
                    <button
                      key={nav.id}
                      onClick={() => {
                        onSelectView(nav.id);
                        onClose();
                      }}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-[#f8fafc] text-xs font-medium text-[#334155] flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#64748b]" />
                        <span>{nav.label}</span>
                      </div>
                      <span className="text-[10.5px] text-[#94a3b8]">Jump</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Keywords Match */}
          {filteredKeywords.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider px-2.5 py-1">
                Keywords ({filteredKeywords.length})
              </div>
              <div className="space-y-0.5">
                {filteredKeywords.map((kw) => (
                  <button
                    key={kw.id}
                    onClick={() => {
                      onSelectKeyword(kw);
                      onClose();
                    }}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-[#f8fafc] text-xs font-medium text-[#0f172a] flex items-center justify-between transition-colors"
                  >
                    <div className="truncate pr-3">
                      <div className="font-semibold truncate">{kw.keyword}</div>
                      <div className="text-[11px] text-[#64748b]">{kw.url}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-[#4f46e5]">#{kw.currentRank}</span>
                      <span className="text-[10px] text-[#64748b] block">{kw.searchVolume.toLocaleString()} vol</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer tip */}
        <div className="p-2.5 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between text-[11px] text-[#64748b] px-4">
          <span>Search keywords, URLs, and tools instantly</span>
          <span className="text-[#0f172a] font-medium">AI Web Intelligence Platform</span>
        </div>
      </div>
    </div>
  );
};
