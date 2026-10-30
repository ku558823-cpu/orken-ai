import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Download,
  Copy,
  Check,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  Crosshair,
  Printer,
} from 'lucide-react';
import { DomainProfile, KeywordItem, AnomalyAlert } from '../data/mockData';

interface AiBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  domain: DomainProfile;
  keywords: KeywordItem[];
  alerts: AnomalyAlert[];
}

export const AiBriefModal: React.FC<AiBriefModalProps> = ({
  isOpen,
  onClose,
  domain,
  keywords,
  alerts,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const briefReport = `# AI Web Intelligence Executive Brief
**Property:** ${domain.domain} (${domain.name})
**Reporting Period:** 30-Day SERP Analysis
**Generated On:** ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}

---

### 1. Executive Summary & Macro Health
- **Organic Search Footprint:** Estimated **${domain.organicTraffic}** monthly visits (+${domain.trafficDelta}% growth trajectory).
- **Average Position:** **#${domain.avgPosition}** across ${domain.trackedKeywordsCount.toLocaleString()} tracked high-intent keyword auctions.
- **AI Search Visibility:** **${domain.aiVisibilityScore}%** of eligible informational queries now cite Acme Cloud as a primary snippet reference in Google AI Overviews.
- **Technical Health Index:** **${domain.healthScore} / 100**, passing 93.3% of HTTP canonical and core indexability assertions.

---

### 2. Primary SERP Momentum & Gains
1. **"ai agent orchestration serverless runtime"**:
   - Gained +3 positions, establishing rank **#1** (+18,800 monthly estimated visits).
   - Captured Google AI Overview #1 citation card with persistent rich snippet.
2. **"enterprise cloud security architecture"**:
   - Climbed from #5 to **#2**, outranking Splunk and Palo Alto Networks.
3. **"multi-region db sync latency benchmarks"**:
   - Sustained rank **#1** with authoritative 15ms p99 benchmark report.

---

### 3. Immediate Anomaly & Risk Factors
- **High Algorithm Volatility (Score 7.8/10):** Global Google Search reshuffling detected in Cloud & DevTech infrastructure sectors.
- **Critical Rank Slippage:** "zero trust api gateway pricing" dropped from #2 to #4 due to aggressive competitor landing page refresh by Cloudflare.
- **Crawl Equity Leak:** 142 broken internal cross-links detected from top-level /docs guides to outdated /v1/ URLs (HTTP 404).

---

### 4. 7-Day Growth & Technical Action Items
1. **Remediate Documentation 404s:** Deploy wildcard HTTP 301 rewrite rule matching \`/docs/v1/*\` to \`/docs/v2/*\`.
2. **Defend Transactional Pricing SERP:** Add interactive pricing calculator and comparison grid to \`/pricing/api-gateway\` to reclaim rank #2.
3. **Inject Schema.org JSON-LD:** Add \`SoftwareApplication\` structured data on product pages to expand rich snippets.
4. **Target Competitor Gaps:** Launch optimized landing page for "cloud security posture management automation" (38.4K monthly search volume).

*Prepared autonomously by AI Web Intelligence Engine.*`;

  const handleCopy = () => {
    navigator.clipboard.writeText(briefReport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([briefReport], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_SERP_Brief_${domain.domain}_${Date.now()}.md`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0f172a]/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-[#e2e8f0] overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-100">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8fafc]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#4f46e5] flex items-center justify-center text-white shadow-2xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0f172a]">
                AI Executive Intelligence Brief
              </h3>
              <p className="text-[11px] text-[#64748b]">
                Deterministic SERP distillation for {domain.domain}
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

        {/* Report Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#334155] leading-relaxed">
          {/* Executive KPI Callout Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-md bg-[#f8fafc] border border-[#e2e8f0]">
              <span className="text-[10.5px] font-bold text-[#64748b] uppercase tracking-wider block">
                Organic Traffic
              </span>
              <div className="text-lg font-bold text-[#0f172a] tabular-nums mt-0.5">
                {domain.organicTraffic}
              </div>
              <span className="text-[10px] font-semibold text-[#059669]">
                ▲ +{domain.trafficDelta}% growth
              </span>
            </div>

            <div className="p-3 rounded-md bg-[#f8fafc] border border-[#e2e8f0]">
              <span className="text-[10.5px] font-bold text-[#64748b] uppercase tracking-wider block">
                AI Overview Share
              </span>
              <div className="text-lg font-bold text-[#4f46e5] tabular-nums mt-0.5">
                {domain.aiVisibilityScore}%
              </div>
              <span className="text-[10px] text-[#4f46e5] font-semibold">
                114 SERPs cited
              </span>
            </div>

            <div className="p-3 rounded-md bg-[#f8fafc] border border-[#e2e8f0]">
              <span className="text-[10.5px] font-bold text-[#64748b] uppercase tracking-wider block">
                Site Health
              </span>
              <div className="text-lg font-bold text-[#0f172a] tabular-nums mt-0.5">
                {domain.healthScore} / 100
              </div>
              <span className="text-[10px] text-[#059669] font-semibold">
                93.3% 200 OK
              </span>
            </div>
          </div>

          {/* Section 1: Wins */}
          <div className="border border-[#e2e8f0] rounded-md p-4">
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#0f172a] uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4 text-[#059669]" />
              <span>1. Strategic SERP Momentum</span>
            </div>
            <ul className="space-y-2 text-[#475569] pl-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-[#0f172a]">"ai agent orchestration serverless runtime"</strong> climbed +3 spots to <strong>#1</strong>, capturing the Google AI Overview citation card (+18.8K monthly est. visits).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-[#0f172a]">"enterprise cloud security architecture"</strong> surpassed Splunk, reaching <strong>#2</strong> in commercial intent queries.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2: Vulnerabilities */}
          <div className="border border-[#e2e8f0] rounded-md p-4">
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#0f172a] uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-[#d97706]" />
              <span>2. Anomaly & Risk Factors</span>
            </div>
            <ul className="space-y-2 text-[#475569] pl-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-[#0f172a]">Google Algorithm Volatility at 7.8/10:</strong> Core volatility detected in Cloud infrastructure keywords.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-[#0f172a]">Technical Crawl Anomaly:</strong> 142 broken 404 cross-links from top documentation pages to outdated /v1/ URLs.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3: Action Items */}
          <div className="border border-[#c7d2fe] bg-[#f8faff] rounded-md p-4">
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#1e1b4b] uppercase tracking-wider mb-2">
              <Crosshair className="w-4 h-4 text-[#4f46e5]" />
              <span>3. Recommended 7-Day Engineering Sprint</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1.5 text-[#334155]">
              <li>Deploy wildcard 301 redirects for /docs/v1/* to reclaim link equity.</li>
              <li>Add interactive pricing comparison slider on /pricing/api-gateway to defend #2 rank.</li>
              <li>Embed Schema.org SoftwareApplication structured JSON-LD across all solution landing pages.</li>
            </ol>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3 border-t border-[#e2e8f0] bg-[#f8fafc] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#f1f5f9] border border-[#e2e8f0] text-xs font-semibold text-[#0f172a] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Report</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#f1f5f9] border border-[#e2e8f0] text-xs font-semibold text-[#0f172a] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Markdown</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#4f46e5] text-white text-xs font-semibold hover:bg-[#4338ca] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
