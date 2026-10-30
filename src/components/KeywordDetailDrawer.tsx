import React, { useState } from 'react';
import { KeywordItem } from '../data/mockData';
import {
  X,
  Sparkles,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  RefreshCw,
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  Share2,
} from 'lucide-react';

interface KeywordDetailDrawerProps {
  keyword: KeywordItem | null;
  onClose: () => void;
  onRefreshKeyword?: (kw: KeywordItem) => void;
}

export const KeywordDetailDrawer: React.FC<KeywordDetailDrawerProps> = ({
  keyword,
  onClose,
  onRefreshKeyword,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshedToast, setRefreshedToast] = useState(false);

  if (!keyword) return null;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshedToast(true);
      setTimeout(() => setRefreshedToast(false), 3000);
      if (onRefreshKeyword) onRefreshKeyword(keyword);
    }, 900);
  };

  const rankDelta = keyword.previousRank - keyword.currentRank;

  // Mini history chart
  const history = keyword.rankHistory;
  const minRank = 1;
  const maxRank = Math.max(...history.map((h) => h.rank), 15);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#e2e8f0] flex items-start justify-between bg-[#f8fafc]">
          <div className="space-y-1 pr-4">
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] font-bold text-[#475569] bg-[#e2e8f0] px-2 py-0.5 rounded">
                {keyword.intent}
              </span>
              <span className="text-[11px] text-[#64748b]">
                Last crawled {keyword.lastCrawled}
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">
              {keyword.keyword}
            </h2>
            <a
              href={keyword.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#4f46e5] hover:underline flex items-center gap-1 font-mono truncate"
            >
              <span>{keyword.url}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0f172a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-4 gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-4 text-center">
            <div>
              <span className="text-[10.5px] font-semibold text-[#64748b] uppercase tracking-wider block">
                Current Rank
              </span>
              <div className="text-xl font-bold text-[#0f172a] tabular-nums mt-0.5">
                #{keyword.currentRank}
              </div>
              {rankDelta > 0 && (
                <span className="text-[10px] font-semibold text-[#059669] bg-[#ecfdf5] px-1 py-0.2 rounded">
                  ▲ +{rankDelta}
                </span>
              )}
              {rankDelta < 0 && (
                <span className="text-[10px] font-semibold text-[#dc2626] bg-[#fef2f2] px-1 py-0.2 rounded">
                  ▼ {rankDelta}
                </span>
              )}
            </div>

            <div>
              <span className="text-[10.5px] font-semibold text-[#64748b] uppercase tracking-wider block">
                Search Vol
              </span>
              <div className="text-xl font-bold text-[#0f172a] tabular-nums mt-0.5">
                {keyword.searchVolume.toLocaleString()}
              </div>
              <span className="text-[10px] text-[#64748b]">monthly queries</span>
            </div>

            <div>
              <span className="text-[10.5px] font-semibold text-[#64748b] uppercase tracking-wider block">
                KD Difficulty
              </span>
              <div className="text-xl font-bold text-[#0f172a] tabular-nums mt-0.5">
                {keyword.difficulty}%
              </div>
              <span className="text-[10px] text-[#64748b]">Competitive</span>
            </div>

            <div>
              <span className="text-[10.5px] font-semibold text-[#64748b] uppercase tracking-wider block">
                CPC Est.
              </span>
              <div className="text-xl font-bold text-[#0f172a] tabular-nums mt-0.5">
                ${keyword.cpc.toFixed(2)}
              </div>
              <span className="text-[10px] text-[#64748b]">Google Ads</span>
            </div>
          </div>

          {/* 30-Day Rank Trajectory Chart */}
          <div className="border border-[#e2e8f0] rounded-md p-4 bg-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                30-Day Historical SERP Trajectory
              </span>
              <span className="text-[11px] text-[#059669] font-medium">
                Inverted Scale (#1 is top)
              </span>
            </div>

            <div className="h-28 w-full flex items-end justify-between gap-2 pt-4 px-2">
              {history.map((item, idx) => {
                // Inverted height: smaller rank number = taller bar
                const normalized = (maxRank - item.rank) / (maxRank - minRank);
                const heightPct = Math.max(15, Math.min(100, normalized * 100));
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                    <span className="text-[10px] font-bold text-[#4f46e5] opacity-0 group-hover:opacity-100 transition-opacity tabular-nums">
                      #{item.rank}
                    </span>
                    <div
                      style={{ height: `${heightPct}%` }}
                      className="w-full bg-[#4f46e5] rounded-t transition-all group-hover:bg-[#4338ca]"
                    />
                    <span className="text-[9.5px] text-[#64748b] tabular-nums mt-1">
                      {item.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Overview Breakdown Section */}
          <div className="border border-[#c7d2fe] bg-[#f8faff] rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#312e81]">
                <Sparkles className="w-4 h-4 text-[#4f46e5]" />
                <span>Google AI Overview Citation Analysis</span>
              </div>
              <span className="text-[11px] font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
                {keyword.aiOverviewStatus}
              </span>
            </div>

            {keyword.aiOverviewSnippet ? (
              <div className="space-y-2 mt-2">
                <p className="text-xs text-[#334155] leading-relaxed bg-white p-3 rounded border border-[#e2e8f0]">
                  "{keyword.aiOverviewSnippet}"
                </p>
                <div className="text-[11px] text-[#4f46e5] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Acme Cloud is indexed as primary reference source with direct card link.</span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-[#64748b] mt-1">
                Google did not trigger an AI Overview block for this keyword auction in the most recent crawl. Standard organic snippet results only.
              </p>
            )}
          </div>

          {/* Live SERP Competitor Standings */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                Current Top SERP Competitors
              </span>
              <span className="text-[11px] text-[#64748b]">Google US Desktop</span>
            </div>

            <div className="space-y-2">
              {keyword.topCompetitors.map((comp) => {
                const isTarget = comp.domain.includes('acme-cloud');
                return (
                  <div
                    key={comp.rank}
                    className={`p-3 rounded-md border flex items-center justify-between gap-3 text-xs ${
                      isTarget
                        ? 'border-[#4f46e5] bg-[#eef2ff]/60 font-semibold'
                        : 'border-[#e2e8f0] bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 h-6 rounded bg-[#f1f5f9] flex items-center justify-center font-bold text-[#0f172a] shrink-0 tabular-nums">
                        #{comp.rank}
                      </span>
                      <div className="truncate">
                        <div className="font-semibold text-[#0f172a] truncate">
                          {comp.title}
                        </div>
                        <div className="text-[11px] text-[#64748b] truncate">
                          {comp.domain}
                        </div>
                      </div>
                    </div>

                    {isTarget && (
                      <span className="text-[10px] font-bold text-[#4f46e5] bg-white border border-[#c7d2fe] px-1.5 py-0.5 rounded shrink-0">
                        YOUR URL
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-[#e2e8f0] bg-[#f8fafc] flex items-center justify-between">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#f1f5f9] border border-[#e2e8f0] text-xs font-semibold text-[#0f172a] transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#4f46e5]' : ''}`} />
            <span>{isRefreshing ? 'Re-scanning SERP...' : 'Live Re-crawl'}</span>
          </button>

          {refreshedToast && (
            <span className="text-xs text-[#059669] font-medium flex items-center gap-1 animate-fade-in">
              <CheckCircle2 className="w-3.5 h-3.5" /> SERP Parity Verified
            </span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#0f172a] text-white text-xs font-semibold hover:bg-[#1e293b] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
