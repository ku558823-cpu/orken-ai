import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
  Layers,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
} from 'lucide-react';

interface ModernApproachSectionProps {
  onExploreArchitecture?: () => void;
  onScheduleReview: () => void;
}

export const ModernApproachSection: React.FC<ModernApproachSectionProps> = ({
  onExploreArchitecture,
  onScheduleReview,
}) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'pillars'>('comparison');

  const comparisonRows = [
    {
      capability: 'Threat Surface',
      traditional: 'Network endpoints, ports, static SQL/XSS payloads',
      modern: 'Semantic prompt injections, adversarial jailbreaks, RAG poisoning, data extraction',
    },
    {
      capability: 'Data Protection',
      traditional: 'Static regex DLP scanning batch files at rest',
      modern: 'Real-time contextual PII pseudonymization in active prompt token streams (<15ms)',
    },
    {
      capability: 'Vulnerability Testing',
      traditional: 'Periodic annual or quarterly manual penetration tests',
      modern: 'Continuous automated red-team fuzzing testing 10,000+ adversarial prompt vectors daily',
    },
    {
      capability: 'Agent & Tool Control',
      traditional: 'Coarse-grained RBAC and user permission tiers',
      modern: 'Human-in-the-loop (HITL) step interceptors for autonomous tool calls & financial transfers',
    },
    {
      capability: 'Compliance Verification',
      traditional: 'Manual compliance spreadsheets compiled over months',
      modern: 'Cryptographic SHA-256 decision hashes with 1-click ISO 42001 & EU AI Act dossiers',
    },
  ];

  const pillars = [
    {
      title: 'Semantic Layer Firewalls',
      desc: 'Traditional WAFs cannot parse semantic meaning. ORKEN AI evaluates natural language intention to intercept indirect injection attacks in sub-12ms.',
      icon: ShieldAlert,
      metric: '99.8% Defense Accuracy',
    },
    {
      title: 'Contextual Token Masking',
      desc: 'Zero-loss pseudonymization substitutes SSNs, credentials, and customer records with cryptographically salted pseudo-tokens before reaching external LLMs.',
      icon: Lock,
      metric: 'HIPAA & PCI-DSS Certified',
    },
    {
      title: 'Agent Tool Interceptors',
      desc: 'Autonomous multi-agent workflows executing database queries or API webhooks are verified against policy constraints with mandatory HITL sign-offs.',
      icon: Cpu,
      metric: 'Zero Unauthorized Actions',
    },
    {
      title: 'Continuous Red-Teaming',
      desc: 'Instead of waiting for attackers to discover model exploits, our automated probe engine tests your endpoints against newly discovered jailbreaks daily.',
      icon: Zap,
      metric: 'Continuous Daily Fuzzing',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Cybersecurity Paradigm Shift</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4 leading-tight">
            Modern AI Requires a Modern Approach to Security
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Traditional perimeter firewalls were engineered for deterministic, static code. Generative AI, autonomous agents, and foundation models introduce non-deterministic, probabilistic risks that require real-time, semantic governance.
          </p>

          {/* Toggle buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Traditional vs. Modern AI Security
            </button>
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'pillars'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              The 4 Pillars of Modern AI Defense
            </button>
          </div>
        </div>

        {/* Tab 1: Direct Head-to-Head Comparison Table */}
        {activeTab === 'comparison' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden mb-12 animate-in fade-in duration-200">
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Architectural Comparison: Legacy Cybersecurity vs. Modern AI Governance
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Why traditional WAFs and static DLP tools leave enterprises exposed to generative AI vulnerabilities.
                </p>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-3 py-1 rounded-full shrink-0">
                ORKEN AI Modern Architecture
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-6 w-1/4">Capability / Dimension</th>
                    <th className="py-3.5 px-6 w-3/8 text-slate-700 bg-slate-100/50">
                      Traditional Cybersecurity (Legacy)
                    </th>
                    <th className="py-3.5 px-6 w-3/8 text-blue-700 bg-blue-50/50">
                      ORKEN AI Modern Approach
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 text-xs sm:text-sm">
                        {row.capability}
                      </td>

                      <td className="py-4 px-6 text-slate-600 bg-slate-50/30">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{row.traditional}</span>
                        </div>
                      </td>

                      <td className="py-4 px-6 text-slate-900 bg-blue-50/20 font-semibold">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed text-blue-950">{row.modern}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: 4 Pillars of Modern Defense */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-in fade-in duration-200">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {pil.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {pil.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{pil.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Ready to Upgrade Your Enterprise from Legacy WAFs to AI Semantic Armor?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Schedule a 30-minute technical evaluation to benchmark your current LLM gateway latency and security posture.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onScheduleReview}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              Schedule Security Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
