import React, { useState } from 'react';
import { AuditIssue } from '../data/mockData';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Filter,
  Check,
} from 'lucide-react';

interface AuditsViewProps {
  issues: AuditIssue[];
  healthScore: number;
  onIssuesChange: (issues: AuditIssue[]) => void;
  onTriggerCrawl: () => void;
  isCrawling: boolean;
}

export const AuditsView: React.FC<AuditsViewProps> = ({
  issues,
  healthScore,
  onIssuesChange,
  onTriggerCrawl,
  isCrawling,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');
  const [activeIssue, setActiveIssue] = useState<AuditIssue | null>(issues[0] || null);

  const filteredIssues = issues.filter((issue) => {
    if (selectedCategory !== 'All' && issue.category !== selectedCategory) return false;
    if (selectedSeverity !== 'All' && issue.severity !== selectedSeverity) return false;
    return true;
  });

  const toggleIssueStatus = (id: string) => {
    const next = issues.map((iss) => {
      if (iss.id === id) {
        return {
          ...iss,
          status: (iss.status === 'fixed' ? 'open' : 'fixed') as 'open' | 'fixed' | 'ignored',
        };
      }
      return iss;
    });
    onIssuesChange(next);
    if (activeIssue && activeIssue.id === id) {
      setActiveIssue({
        ...activeIssue,
        status: activeIssue.status === 'fixed' ? 'open' : 'fixed',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Crawl Summary Card */}
      <div className="bg-white border border-[#e2e8f0] rounded-md p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#f1f5f9]">
          <div className="flex items-center gap-4">
            {/* Health Score Circular representation */}
            <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-[#ecfdf5] border-4 border-[#10b981] shrink-0">
              <div className="text-center">
                <span className="text-2xl font-bold text-[#0f172a] tabular-nums">
                  {healthScore}
                </span>
                <span className="text-[10px] text-[#64748b] block font-semibold leading-none">
                  / 100
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-[#0f172a] tracking-tight">
                  Crawl Health: Excellent
                </h1>
                <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
                  18,450 URLs Crawled
                </span>
              </div>
              <p className="text-xs text-[#64748b] mt-1 max-w-xl">
                Automated bot scanned rendering, canonicalization, status codes, Core Web Vitals, and structured Schema markup across the entire sitemap.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onTriggerCrawl}
              disabled={isCrawling}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-semibold transition-colors disabled:opacity-50 shadow-2xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isCrawling ? 'animate-spin' : ''}`} />
              <span>{isCrawling ? 'Crawling URLs...' : 'Run New Site Audit'}</span>
            </button>
          </div>
        </div>

        {/* URL Status Distribution Bar */}
        <div className="pt-6">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-[#0f172a] uppercase tracking-wider text-[11px]">
              Crawl Breakdown by Status
            </span>
            <span className="text-[#64748b]">Total indexable assets: 18,450</span>
          </div>

          {/* Segmented bar */}
          <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#f1f5f9]">
            <div style={{ width: '93.3%' }} className="bg-[#10b981]" title="200 OK: 17,210 URLs" />
            <div style={{ width: '4.5%' }} className="bg-[#3b82f6]" title="301 Redirects: 840 URLs" />
            <div style={{ width: '0.8%' }} className="bg-[#ef4444]" title="404 Errors: 142 URLs" />
            <div style={{ width: '1.0%' }} className="bg-[#f59e0b]" title="Schema & Meta: 188 URLs" />
            <div style={{ width: '0.4%' }} className="bg-[#8b5cf6]" title="Slow LCP: 70 URLs" />
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] mt-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#10b981]" />
              <span>200 OK: <strong className="text-[#0f172a]">17,210 (93.3%)</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]" />
              <span>301 Redirects: <strong className="text-[#0f172a]">840 (4.5%)</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#ef4444]" />
              <span>404 Broken: <strong className="text-[#dc2626]">142 (0.8%)</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#f59e0b]" />
              <span>Schema & Canonical: <strong className="text-[#d97706]">188 (1.0%)</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#8b5cf6]" />
              <span>Slow LCP: <strong className="text-[#0f172a]">70 (0.4%)</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Issues Triage Grid (Split Layout: List on left, Detail Drawer on right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Issues List (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#e2e8f0] rounded-md overflow-hidden">
          {/* Filters */}
          <div className="p-4 border-b border-[#e2e8f0] space-y-3 bg-[#f8fafc]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                Audit Anomaly Queue ({filteredIssues.length})
              </span>
              <div className="text-xs text-[#64748b]">
                Click an anomaly to view resolution guide
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button
                onClick={() => setSelectedSeverity('All')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedSeverity === 'All' ? 'bg-[#0f172a] text-white' : 'bg-white text-[#475569] border border-[#e2e8f0]'
                }`}
              >
                All Severities
              </button>
              <button
                onClick={() => setSelectedSeverity('critical')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedSeverity === 'critical' ? 'bg-[#ef4444] text-white' : 'bg-white text-[#dc2626] border border-[#fca5a5]'
                }`}
              >
                Critical Errors
              </button>
              <button
                onClick={() => setSelectedSeverity('warning')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedSeverity === 'warning' ? 'bg-[#f59e0b] text-white' : 'bg-white text-[#d97706] border border-[#fde68a]'
                }`}
              >
                Warnings
              </button>
            </div>
          </div>

          {/* List items */}
          <div className="divide-y divide-[#e2e8f0]">
            {filteredIssues.map((issue) => {
              const isSelected = activeIssue?.id === issue.id;
              const isFixed = issue.status === 'fixed';

              let badgeColor = 'bg-[#fef2f2] text-[#dc2626] border-[#fecaca]';
              if (issue.severity === 'warning') badgeColor = 'bg-[#fffbeb] text-[#d97706] border-[#fef3c7]';
              if (issue.severity === 'notice') badgeColor = 'bg-[#f8fafc] text-[#475569] border-[#e2e8f0]';

              return (
                <div
                  key={issue.id}
                  onClick={() => setActiveIssue(issue)}
                  className={`p-4 cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected ? 'bg-[#eef2ff] border-l-2 border-l-[#4f46e5]' : 'hover:bg-[#f8fafc]'
                  } ${isFixed ? 'opacity-60 bg-[#f8fafc]' : ''}`}
                >
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border ${badgeColor}`}
                      >
                        {issue.severity}
                      </span>
                      <span className="text-[11px] font-medium text-[#64748b]">
                        {issue.category}
                      </span>
                      {isFixed && (
                        <span className="text-[10px] font-semibold text-[#059669] bg-[#ecfdf5] px-1.5 py-0.2 rounded flex items-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> Resolved
                        </span>
                      )}
                    </div>

                    <h3 className="text-xs font-bold text-[#0f172a] line-clamp-1">
                      {issue.title}
                    </h3>
                    <p className="text-[11.5px] text-[#475569] line-clamp-2 leading-relaxed">
                      {issue.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-[#0f172a] tabular-nums block">
                      {issue.affectedCount}
                    </span>
                    <span className="text-[10px] text-[#64748b]">affected URLs</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Fix & URL Inspector (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-[#e2e8f0] rounded-md p-5 sticky top-20 self-start">
          {activeIssue ? (
            <div className="space-y-4">
              <div className="pb-3 border-b border-[#f1f5f9]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                    Technical Remediation Guide
                  </span>
                  <span className="text-xs font-semibold text-[#4f46e5]">
                    Impact: {activeIssue.impactScore}
                  </span>
                </div>
                <h2 className="text-base font-bold text-[#0f172a] leading-tight">
                  {activeIssue.title}
                </h2>
              </div>

              {/* Diagnosis */}
              <div>
                <h4 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1">
                  Root Cause Diagnosis
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed bg-[#f8fafc] p-3 rounded border border-[#e2e8f0]">
                  {activeIssue.description}
                </p>
              </div>

              {/* Suggested Technical Fix */}
              <div>
                <h4 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1">
                  Engineered Fix
                </h4>
                <div className="p-3 bg-[#eef2ff] border border-[#c7d2fe] rounded text-xs text-[#1e1b4b] leading-relaxed">
                  {activeIssue.suggestedFix}
                </div>
              </div>

              {/* Affected Sample URLs */}
              <div>
                <h4 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                  Affected Sample Endpoints ({activeIssue.sampleUrls.length} shown)
                </h4>
                <div className="space-y-1.5">
                  {activeIssue.sampleUrls.map((url, i) => (
                    <div
                      key={i}
                      className="text-xs text-[#334155] bg-[#f8fafc] p-2 rounded border border-[#e2e8f0] flex items-center justify-between group"
                    >
                      <span className="font-mono text-[11px] truncate mr-2">
                        {url}
                      </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4f46e5] opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => toggleIssueStatus(activeIssue.id)}
                  className={`flex-1 py-2 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    activeIssue.status === 'fixed'
                      ? 'bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]'
                      : 'bg-[#0f172a] hover:bg-[#1e293b] text-white shadow-2xs'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{activeIssue.status === 'fixed' ? 'Marked as Fixed' : 'Mark as Resolved'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[#64748b] text-xs">
              Select an issue from the queue to view full remediation instructions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
