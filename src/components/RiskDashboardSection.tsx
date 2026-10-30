import React, { useState } from 'react';
import {
  Activity,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Filter,
  Search,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { AISystem, RiskLevel } from '../types/governance';
import { INITIAL_AI_SYSTEMS } from '../data/governanceData';

interface RiskDashboardSectionProps {
  onOpenDashboard: () => void;
}

export const RiskDashboardSection: React.FC<RiskDashboardSectionProps> = ({
  onOpenDashboard,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSystemModal, setActiveSystemModal] = useState<AISystem | null>(null);

  const systems = INITIAL_AI_SYSTEMS;

  const filtered = systems.filter((sys) => {
    if (selectedType !== 'All' && sys.type !== selectedType) return false;
    if (
      searchQuery.trim() &&
      !sys.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !sys.provider.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <section id="risk-dashboard" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Real-Time Oversight
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
              AI Risk Assessment Dashboard
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Continuously classify, monitor, and remediate operational and regulatory risks across foundation LLMs, fine-tuned models, and autonomous agent swarms.
            </p>
          </div>

          <button
            onClick={onOpenDashboard}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer self-start md:self-auto shrink-0"
          >
            <span>Launch Full Enterprise Portal</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Macro Risk Vector KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Hallucination Index
              </span>
              <div className="text-3xl font-extrabold text-slate-900 tabular-nums mt-1">
                0.4%
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>Within Safe Regulatory SLA</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Sensitive Data Leakage
              </span>
              <div className="text-3xl font-extrabold text-emerald-600 tabular-nums mt-1">
                0 Incidents
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-slate-500">
              <span>100% PII Redaction Active</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Jailbreak Interception
              </span>
              <div className="text-3xl font-extrabold text-blue-600 tabular-nums mt-1">
                99.8%
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-slate-500">
              <span>Sub-12ms Edge Response</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Compliance Readiness
              </span>
              <div className="text-3xl font-extrabold text-slate-900 tabular-nums mt-1">
                98%
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-600">
              <span>ISO 42001 & EU AI Act</span>
            </div>
          </div>
        </div>

        {/* Live Filterable AI Model Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search models, agents, or providers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Type:
              </span>
              {['All', 'LLM Chat', 'Autonomous Agent', 'RAG Pipeline'].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedType === t
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                  <th className="py-3 px-5">System Name & Pipeline</th>
                  <th className="py-3 px-5">Inference Provider</th>
                  <th className="py-3 px-5">Risk Tier</th>
                  <th className="py-3 px-5">Compliance Score</th>
                  <th className="py-3 px-5">24h Requests</th>
                  <th className="py-3 px-5">Audit Status</th>
                  <th className="py-3 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filtered.map((sys) => {
                  let riskBadge = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                  if (sys.riskLevel === 'Medium') riskBadge = 'bg-amber-50 text-amber-700 border-amber-200';
                  if (sys.riskLevel === 'High') riskBadge = 'bg-rose-50 text-rose-700 border-rose-200';

                  return (
                    <tr
                      key={sys.id}
                      onClick={() => setActiveSystemModal(sys)}
                      className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-5">
                        <div className="font-bold text-slate-900 text-sm">{sys.name}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{sys.type}</div>
                      </td>

                      <td className="py-4 px-5 text-slate-700 font-mono text-[11.5px]">
                        {sys.provider}
                      </td>

                      <td className="py-4 px-5">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border ${riskBadge}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {sys.riskLevel} Risk
                        </span>
                      </td>

                      <td className="py-4 px-5 tabular-nums">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">{sys.complianceScore}%</span>
                          <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-blue-600 h-full rounded-full"
                              style={{ width: `${sys.complianceScore}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-5 tabular-nums font-semibold text-slate-700">
                        {sys.requests24h.toLocaleString()}
                      </td>

                      <td className="py-4 px-5 text-slate-500 text-[11px]">
                        Audited {sys.lastAudit}
                      </td>

                      <td className="py-4 px-5 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSystemModal(sys);
                          }}
                          className="px-3 py-1 rounded-md text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          View Dossier
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal when a system is clicked */}
        {activeSystemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setActiveSystemModal(null)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            />
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 p-6 space-y-4">
              <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {activeSystemModal.type}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {activeSystemModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveSystemModal(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">
                    Underlying Model
                  </span>
                  <span className="font-bold text-slate-900 mt-0.5 block">
                    {activeSystemModal.provider}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">
                    EU AI Act Risk Classification
                  </span>
                  <span className="font-bold text-emerald-600 mt-0.5 block">
                    Low Risk (Annex II Verified)
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-800">Active Automated Guardrails</div>
                <div className="space-y-1 text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>PII Token Pseudonymization (PCI-DSS & HIPAA compliant)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Prompt Injection Armor active (<span className="tabular-nums">12ms</span> latency)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Human-in-the-Loop review threshold set at 85% confidence</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveSystemModal(null)}
                  className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
