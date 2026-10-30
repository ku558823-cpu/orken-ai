import React, { useState, useMemo } from 'react';
import { KeywordItem } from '../data/mockData';
import {
  Search,
  Filter,
  Sparkles,
  Download,
  Plus,
  ChevronUp,
  ChevronDown,
  Layers,
  Monitor,
  Smartphone,
  ExternalLink,
  CheckSquare,
  Square,
  FileSpreadsheet,
  ArrowUpDown,
  Tag,
  RefreshCw,
} from 'lucide-react';

interface KeywordsViewProps {
  keywords: KeywordItem[];
  onSelectKeyword: (kw: KeywordItem) => void;
  onOpenAddKeyword: () => void;
  onKeywordsChange: (updated: KeywordItem[]) => void;
}

export const KeywordsView: React.FC<KeywordsViewProps> = ({
  keywords,
  onSelectKeyword,
  onOpenAddKeyword,
  onKeywordsChange,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [intentFilter, setIntentFilter] = useState<string>('All');
  const [featureFilter, setFeatureFilter] = useState<string>('All');
  const [rankFilter, setRankFilter] = useState<string>('All');
  const [deviceFilter, setDeviceFilter] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Sorting state
  const [sortField, setSortField] = useState<'rank' | 'volume' | 'difficulty' | 'traffic'>('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Filter logic
  const filteredKeywords = useMemo(() => {
    return keywords.filter((kw) => {
      // Search term
      if (
        searchTerm.trim() &&
        !kw.keyword.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !kw.url.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      // Intent
      if (intentFilter !== 'All' && kw.intent !== intentFilter) {
        return false;
      }
      // Feature
      if (featureFilter === 'ai_overview' && !kw.serpFeatures.includes('ai_overview')) return false;
      if (featureFilter === 'snippet' && !kw.serpFeatures.includes('snippet')) return false;
      if (featureFilter === 'paa' && !kw.serpFeatures.includes('paa')) return false;

      // Rank tier
      if (rankFilter === 'top3' && kw.currentRank > 3) return false;
      if (rankFilter === 'top10' && kw.currentRank > 10) return false;
      if (rankFilter === 'beyond10' && kw.currentRank <= 10) return false;

      return true;
    });
  }, [keywords, searchTerm, intentFilter, featureFilter, rankFilter]);

  // Sort logic
  const sortedKeywords = useMemo(() => {
    return [...filteredKeywords].sort((a, b) => {
      let valA = 0;
      let valB = 0;
      if (sortField === 'rank') {
        valA = a.currentRank;
        valB = b.currentRank;
      } else if (sortField === 'volume') {
        valA = a.searchVolume;
        valB = b.searchVolume;
      } else if (sortField === 'difficulty') {
        valA = a.difficulty;
        valB = b.difficulty;
      } else if (sortField === 'traffic') {
        valA = a.estimatedTraffic;
        valB = b.estimatedTraffic;
      }
      return sortDirection === 'asc' ? valA - valB : valB - valA;
    });
  }, [filteredKeywords, sortField, sortDirection]);

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'rank' ? 'asc' : 'desc');
    }
  };

  const handleSelectAll = () => {
    if (selectedIds.size === sortedKeywords.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(sortedKeywords.map((k) => k.id)));
    }
  };

  const toggleSelectOne = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  const handleExportCSV = () => {
    const header = 'Keyword,Current Rank,Previous Rank,Search Volume,Difficulty,Intent,URL,AI Status\n';
    const rows = sortedKeywords
      .map(
        (k) =>
          `"${k.keyword}",${k.currentRank},${k.previousRank},${k.searchVolume},${k.difficulty},"${k.intent}","${k.url}","${k.aiOverviewStatus}"`
      )
      .join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `serp_keywords_${Date.now()}.csv`;
    a.click();
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="bg-white border border-[#e2e8f0] rounded-md p-4 space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by keyword or URL..."
              className="w-full pl-9 pr-3 h-9 text-xs rounded-md border border-[#e2e8f0] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 text-[#0f172a] placeholder-[#94a3b8]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Device Toggle */}
            <div className="flex items-center bg-[#f1f5f9] p-0.5 rounded-md border border-[#e2e8f0]">
              <button
                onClick={() => setDeviceFilter('desktop')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  deviceFilter === 'desktop'
                    ? 'bg-white text-[#4f46e5] shadow-2xs font-semibold'
                    : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceFilter('mobile')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  deviceFilter === 'mobile'
                    ? 'bg-white text-[#4f46e5] shadow-2xs font-semibold'
                    : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1 px-3 h-9 rounded-md bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] text-xs font-medium text-[#0f172a] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#64748b]" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onOpenAddKeyword}
              className="flex items-center gap-1.5 px-3 h-9 rounded-md bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-medium transition-colors shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Keyword</span>
            </button>
          </div>
        </div>

        {/* Filter Pills row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#f1f5f9] text-xs">
          <span className="text-[#64748b] font-medium text-[11px] uppercase tracking-wider mr-1">
            Intent:
          </span>
          {['All', 'Informational', 'Commercial', 'Transactional', 'Navigational'].map((intent) => (
            <button
              key={intent}
              onClick={() => setIntentFilter(intent)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                intentFilter === intent
                  ? 'bg-[#4f46e5] text-white shadow-2xs'
                  : 'bg-[#f8fafc] text-[#475569] hover:bg-[#e2e8f0]'
              }`}
            >
              {intent}
            </button>
          ))}

          <div className="h-4 w-px bg-[#e2e8f0] mx-1" />

          <span className="text-[#64748b] font-medium text-[11px] uppercase tracking-wider mr-1">
            Features:
          </span>
          <button
            onClick={() => setFeatureFilter(featureFilter === 'ai_overview' ? 'All' : 'ai_overview')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              featureFilter === 'ai_overview'
                ? 'bg-[#eef2ff] text-[#4f46e5] border border-[#c7d2fe]'
                : 'bg-[#f8fafc] text-[#475569] hover:bg-[#e2e8f0]'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#4f46e5]" />
            <span>AI Overview</span>
          </button>
          <button
            onClick={() => setFeatureFilter(featureFilter === 'snippet' ? 'All' : 'snippet')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              featureFilter === 'snippet'
                ? 'bg-[#4f46e5] text-white'
                : 'bg-[#f8fafc] text-[#475569] hover:bg-[#e2e8f0]'
            }`}
          >
            Featured Snippet
          </button>

          <div className="h-4 w-px bg-[#e2e8f0] mx-1" />

          <span className="text-[#64748b] font-medium text-[11px] uppercase tracking-wider mr-1">
            Rank:
          </span>
          {['All', 'top3', 'top10', 'beyond10'].map((tier) => (
            <button
              key={tier}
              onClick={() => setRankFilter(tier)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                rankFilter === tier
                  ? 'bg-[#4f46e5] text-white'
                  : 'bg-[#f8fafc] text-[#475569] hover:bg-[#e2e8f0]'
              }`}
            >
              {tier === 'All' ? 'All' : tier === 'top3' ? 'Top 3' : tier === 'top10' ? 'Top 10' : '> 10'}
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Action Toolbar if items selected */}
      {selectedIds.size > 0 && (
        <div className="bg-[#eef2ff] border border-[#c7d2fe] rounded-md px-4 py-2 flex items-center justify-between text-xs text-[#4f46e5]">
          <div className="font-semibold">
            {selectedIds.size} keywords selected
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedIds(new Set())}
              className="px-2.5 py-1 rounded bg-white text-[#475569] hover:bg-[#f8fafc] border border-[#e2e8f0] font-medium"
            >
              Clear
            </button>
            <button
              onClick={handleExportCSV}
              className="px-2.5 py-1 rounded bg-[#4f46e5] text-white font-medium hover:bg-[#4338ca]"
            >
              Export Selected
            </button>
          </div>
        </div>
      )}

      {/* Data Table */}
      <div className="bg-white border border-[#e2e8f0] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                <th className="py-3 px-4 w-10">
                  <button
                    onClick={handleSelectAll}
                    className="text-[#64748b] hover:text-[#0f172a]"
                  >
                    {selectedIds.size === sortedKeywords.length && sortedKeywords.length > 0 ? (
                      <CheckSquare className="w-4 h-4 text-[#4f46e5]" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-4 min-w-[240px]">Keyword & Landing URL</th>
                <th
                  onClick={() => toggleSort('rank')}
                  className="py-3 px-4 cursor-pointer hover:bg-[#f1f5f9] transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Current Rank</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('volume')}
                  className="py-3 px-4 cursor-pointer hover:bg-[#f1f5f9] transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Search Vol</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('difficulty')}
                  className="py-3 px-4 cursor-pointer hover:bg-[#f1f5f9] transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>KD %</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('traffic')}
                  className="py-3 px-4 cursor-pointer hover:bg-[#f1f5f9] transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Est. Traffic</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-3 px-4">SERP Features</th>
                <th className="py-3 px-4">AI Overview Citation</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-xs">
              {sortedKeywords.map((kw) => {
                const isSelected = selectedIds.has(kw.id);
                const rankDelta = kw.previousRank - kw.currentRank;

                // KD difficulty badge color
                let kdColor = 'text-[#059669] bg-[#ecfdf5]';
                if (kw.difficulty > 70) kdColor = 'text-[#dc2626] bg-[#fef2f2]';
                else if (kw.difficulty > 50) kdColor = 'text-[#d97706] bg-[#fffbeb]';

                return (
                  <tr
                    key={kw.id}
                    onClick={() => onSelectKeyword(kw)}
                    className={`hover:bg-[#f8fafc] cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#eef2ff]' : 'bg-white'
                    }`}
                  >
                    <td className="py-3.5 px-4" onClick={(e) => toggleSelectOne(kw.id, e)}>
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 text-[#4f46e5]" />
                      ) : (
                        <Square className="w-4 h-4 text-[#94a3b8]" />
                      )}
                    </td>

                    {/* Keyword & URL */}
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#0f172a] text-sm group-hover:text-[#4f46e5] transition-colors">
                        {kw.keyword}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-medium text-[#475569] bg-[#f1f5f9] px-1.5 py-0.2 rounded">
                          {kw.intent}
                        </span>
                        <a
                          href={kw.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[11px] text-[#64748b] hover:text-[#4f46e5] truncate max-w-[200px] flex items-center gap-1"
                        >
                          <span className="truncate">{kw.url.replace('https://', '')}</span>
                          <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                        </a>
                      </div>
                    </td>

                    {/* Rank & Delta */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-[#0f172a] tabular-nums">
                          #{kw.currentRank}
                        </span>
                        {rankDelta > 0 && (
                          <span className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[10.5px] font-semibold bg-[#ecfdf5] text-[#059669] tabular-nums">
                            ▲ +{rankDelta}
                          </span>
                        )}
                        {rankDelta < 0 && (
                          <span className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[10.5px] font-semibold bg-[#fef2f2] text-[#dc2626] tabular-nums">
                            ▼ {rankDelta}
                          </span>
                        )}
                        {rankDelta === 0 && (
                          <span className="text-[11px] text-[#94a3b8] tabular-nums">—</span>
                        )}
                      </div>
                      <div className="text-[10.5px] text-[#64748b] mt-0.5">
                        Prev: #{kw.previousRank}
                      </div>
                    </td>

                    {/* Volume */}
                    <td className="py-3.5 px-4 tabular-nums font-semibold text-[#0f172a]">
                      {kw.searchVolume.toLocaleString()}
                      <span className="text-[10px] text-[#64748b] font-normal block">/mo</span>
                    </td>

                    {/* KD % */}
                    <td className="py-3.5 px-4 tabular-nums">
                      <span
                        className={`inline-block px-1.5 py-0.5 rounded text-[11px] font-bold ${kdColor}`}
                      >
                        {kw.difficulty}%
                      </span>
                    </td>

                    {/* Est Traffic */}
                    <td className="py-3.5 px-4 tabular-nums font-semibold text-[#0f172a]">
                      {kw.estimatedTraffic.toLocaleString()}
                    </td>

                    {/* SERP Features */}
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap items-center gap-1">
                        {kw.serpFeatures.map((feat) => (
                          <span
                            key={feat}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                              feat === 'ai_overview'
                                ? 'bg-[#eef2ff] text-[#4f46e5] border border-[#c7d2fe]'
                                : 'bg-[#f1f5f9] text-[#475569]'
                            }`}
                          >
                            {feat === 'ai_overview'
                              ? 'AI Overview'
                              : feat === 'snippet'
                              ? 'Snippet'
                              : feat === 'paa'
                              ? 'PAA'
                              : 'Sitelinks'}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* AI Overview Status */}
                    <td className="py-3.5 px-4">
                      {kw.aiOverviewStatus.includes('Cited') ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]">
                          <Sparkles className="w-3 h-3 text-[#059669]" />
                          {kw.aiOverviewStatus}
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#64748b]">
                          {kw.aiOverviewStatus}
                        </span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectKeyword(kw);
                        }}
                        className="px-2.5 py-1 text-xs font-semibold text-[#4f46e5] hover:bg-[#eef2ff] rounded transition-colors"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer info bar */}
        <div className="p-3 bg-[#f8fafc] border-t border-[#e2e8f0] flex flex-wrap items-center justify-between text-xs text-[#64748b]">
          <span>
            Showing <strong className="text-[#0f172a]">{sortedKeywords.length}</strong> of{' '}
            <strong className="text-[#0f172a]">{keywords.length}</strong> keywords
          </span>
          <div className="flex items-center gap-2">
            <span>SERP index sync latency: 14ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
