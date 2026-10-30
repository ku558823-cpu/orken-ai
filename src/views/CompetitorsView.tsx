import React, { useState } from 'react';
import { CompetitorData } from '../data/mockData';
import {
  Users2,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Plus,
  Crosshair,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface CompetitorsViewProps {
  competitors: CompetitorData[];
  onAddCompetitor: () => void;
  onTrackKeywordOpportunity: (keyword: string) => void;
}

export const CompetitorsView: React.FC<CompetitorsViewProps> = ({
  competitors,
  onAddCompetitor,
  onTrackKeywordOpportunity,
}) => {
  const [trackedSet, setTrackedSet] = useState<Set<string>>(new Set());

  // Keyword Gap Opportunities
  const gapOpportunities = [
    {
      keyword: 'cloud security posture management automation',
      topCompetitor: 'datadog-suite.com',
      competitorRank: 1,
      yourRank: 8,
      searchVolume: 38400,
      difficulty: 66,
      potentialTraffic: '+9,600 / mo',
      reason: 'Competitor ranks #1 with comprehensive interactive checklist. You have no dedicated landing page.',
    },
    {
      keyword: 'distributed tracing vs log analysis benchmarks',
      topCompetitor: 'dynatrace-pro.io',
      competitorRank: 2,
      yourRank: 14,
      searchVolume: 22100,
      difficulty: 52,
      potentialTraffic: '+5,200 / mo',
      reason: 'Competitor cited in Google AI Overview for synthetic query benchmark data.',
    },
    {
      keyword: 'kubernetes network policy generator visual tool',
      topCompetitor: 'splunk-analytics.com',
      competitorRank: 3,
      yourRank: 19,
      searchVolume: 17500,
      difficulty: 48,
      potentialTraffic: '+4,100 / mo',
      reason: 'High transactional intent with low KD score. Easy win with interactive widget.',
    },
    {
      keyword: 'zero trust microsegmentation kubernetes pods',
      topCompetitor: 'datadog-suite.com',
      competitorRank: 2,
      yourRank: 9,
      searchVolume: 29000,
      difficulty: 71,
      potentialTraffic: '+7,800 / mo',
      reason: 'High commercial value; cited as key reference by Gartner & CISO blogs.',
    },
  ];

  const handleTrack = (kw: string) => {
    const next = new Set(trackedSet);
    next.add(kw);
    setTrackedSet(next);
    onTrackKeywordOpportunity(kw);
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-white border border-[#e2e8f0] rounded-md p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#0f172a] tracking-tight">
              Competitor Intelligence & Share of Voice
            </h1>
            <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
              4 Competitors Monitored
            </span>
          </div>
          <p className="text-xs text-[#64748b] mt-1">
            Real-time benchmarking against top SERP competitors in the Cloud Infrastructure & Observability space.
          </p>
        </div>

        <button
          onClick={onAddCompetitor}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-semibold transition-colors shadow-2xs shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Competitor Domain</span>
        </button>
      </div>

      {/* Head-to-Head Comparison Matrix */}
      <div className="bg-white border border-[#e2e8f0] rounded-md overflow-hidden">
        <div className="px-5 py-4 border-b border-[#e2e8f0] flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider">
              Market Benchmarking Matrix
            </h2>
            <span className="text-xs text-[#64748b]">
              Calculated across 14,820 shared keyword auctions and AI citations
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                <th className="py-3 px-5">Domain</th>
                <th className="py-3 px-5">Market Share</th>
                <th className="py-3 px-5">Domain Authority</th>
                <th className="py-3 px-5">Monthly Organic Traffic</th>
                <th className="py-3 px-5">Overlapping Keywords</th>
                <th className="py-3 px-5">AI Overview Share</th>
                <th className="py-3 px-5">Avg Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {competitors.map((comp) => {
                const isSelf = comp.isSelf;
                return (
                  <tr
                    key={comp.id}
                    className={`transition-colors ${
                      isSelf ? 'bg-[#eef2ff]/50 font-semibold' : 'hover:bg-[#f8fafc]'
                    }`}
                  >
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            isSelf ? 'bg-[#4f46e5]' : 'bg-[#94a3b8]'
                          }`}
                        />
                        <div>
                          <div className="text-sm font-bold text-[#0f172a]">
                            {comp.name}
                          </div>
                          <div className="text-[11px] text-[#64748b] font-normal">
                            {comp.domain}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Market share */}
                    <td className="py-4 px-5 tabular-nums">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-[#e2e8f0] h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              isSelf ? 'bg-[#4f46e5]' : 'bg-[#64748b]'
                            }`}
                            style={{ width: `${comp.marketShare}%` }}
                          />
                        </div>
                        <span className="font-semibold text-[#0f172a]">
                          {comp.marketShare}%
                        </span>
                      </div>
                    </td>

                    {/* DA */}
                    <td className="py-4 px-5 tabular-nums font-bold text-[#0f172a]">
                      DA {comp.domainAuthority}
                    </td>

                    {/* Traffic */}
                    <td className="py-4 px-5 tabular-nums font-bold text-[#0f172a]">
                      {comp.organicTrafficMonthly}
                    </td>

                    {/* Overlapping */}
                    <td className="py-4 px-5 tabular-nums text-[#334155]">
                      {comp.sharedKeywords.toLocaleString()} kw
                    </td>

                    {/* AI Overview Share */}
                    <td className="py-4 px-5 tabular-nums">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                          isSelf
                            ? 'bg-[#eef2ff] text-[#4f46e5] border border-[#c7d2fe]'
                            : 'bg-[#f1f5f9] text-[#475569]'
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-[#4f46e5]" />
                        {comp.aiVisibilityRate}%
                      </span>
                    </td>

                    {/* Avg Rank */}
                    <td className="py-4 px-5 tabular-nums font-bold text-[#0f172a]">
                      #{comp.avgRank}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Keyword Gap Opportunity Analyzer */}
      <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#f1f5f9]">
          <div>
            <div className="flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-[#4f46e5]" />
              <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider">
                Keyword Gap Opportunities (High Potential)
              </h2>
            </div>
            <p className="text-xs text-[#64748b] mt-0.5">
              High-value search queries where competitors hold Top 3 rankings while you rank on page 2 or 3.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {gapOpportunities.map((gap, i) => {
            const isTracked = trackedSet.has(gap.keyword);
            return (
              <div
                key={i}
                className="p-4 rounded-md border border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-[#f8fafc] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#0f172a]">
                      {gap.keyword}
                    </span>
                    <span className="text-[10px] font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-1.5 py-0.5 rounded">
                      {gap.potentialTraffic}
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {gap.reason}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#64748b] pt-1">
                    <span>
                      Search Vol: <strong className="text-[#0f172a]">{gap.searchVolume.toLocaleString()}</strong>
                    </span>
                    <span>
                      KD: <strong className="text-[#0f172a]">{gap.difficulty}%</strong>
                    </span>
                    <span>
                      Competitor: <strong className="text-[#0f172a]">{gap.topCompetitor} (#{gap.competitorRank})</strong>
                    </span>
                    <span>
                      Your Rank: <strong className="text-[#dc2626]">#{gap.yourRank}</strong>
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => handleTrack(gap.keyword)}
                    disabled={isTracked}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                      isTracked
                        ? 'bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]'
                        : 'bg-[#4f46e5] hover:bg-[#4338ca] text-white shadow-2xs'
                    }`}
                  >
                    {isTracked ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Tracking Active</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Track & Optimize</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
