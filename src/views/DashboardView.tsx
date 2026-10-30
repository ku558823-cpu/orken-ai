import React, { useState } from 'react';
import {
  Shield,
  Activity,
  Lock,
  FileCheck2,
  Sliders,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  Download,
  Search,
  CheckCircle2,
  RefreshCw,
  LogOut,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  INITIAL_AI_SYSTEMS,
  INITIAL_SECURITY_EVENTS,
  COMPLIANCE_FRAMEWORKS,
  INITIAL_POLICIES,
} from '../data/governanceData';
import { AISystem, SecurityEvent, AIPolicyRule } from '../types/governance';

interface DashboardViewProps {
  currentUser: { name: string; email: string; company: string } | null;
  onLogout: () => void;
  onBackToWebsite: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentUser,
  onLogout,
  onBackToWebsite,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'risk' | 'security' | 'compliance' | 'policies' | 'reports'>('overview');
  const [systems, setSystems] = useState<AISystem[]>(INITIAL_AI_SYSTEMS);
  const [events, setEvents] = useState<SecurityEvent[]>(INITIAL_SECURITY_EVENTS);
  const [policies, setPolicies] = useState<AIPolicyRule[]>(INITIAL_POLICIES);
  const [isScanning, setIsScanning] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleRunScan = () => {
    setIsScanning(true);
    setToast('Dispatched automated adversarial red-team scan across 24 endpoints...');
    setTimeout(() => {
      setIsScanning(false);
      setToast('Scan complete: 24/24 models compliant. Zero critical vulnerabilities found.');
      setTimeout(() => setToast(null), 4000);
    }, 2000);
  };

  const togglePolicy = (id: string) => {
    setPolicies((prev) =>
      prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p))
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col antialiased">
      {/* Top Enterprise Bar */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
              <Shield className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-base leading-none">
                ORKEN <span className="text-blue-600">AI</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                Enterprise Portal
              </span>
            </div>
          </div>

          <div className="h-5 w-px bg-slate-200 hidden sm:block" />

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="text-slate-400">Organization:</span>
            <span className="text-slate-900 font-bold">{currentUser?.company || 'Acme Global Technologies'}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBackToWebsite}
            className="text-xs font-bold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            ← View Public Website
          </button>

          <button
            onClick={handleRunScan}
            disabled={isScanning}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">{isScanning ? 'Running Probe...' : 'Run Security Scan'}</span>
            <span className="sm:hidden">Scan</span>
          </button>

          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
              {currentUser?.name.charAt(0) || 'A'}
            </div>
            <button
              onClick={onLogout}
              title="Sign Out"
              className="text-xs font-bold text-slate-400 hover:text-rose-600 p-1.5 rounded hover:bg-rose-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Header */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto text-xs font-bold text-slate-600">
        {[
          { id: 'overview', label: 'System Overview', icon: Activity },
          { id: 'risk', label: 'Risk Assessment', icon: Shield },
          { id: 'security', label: 'Threat & Security Log', icon: Lock },
          { id: 'compliance', label: 'Compliance Tracking', icon: FileCheck2 },
          { id: 'policies', label: 'Policy Studio', icon: Sliders },
          { id: 'reports', label: 'Reports & Audits', icon: Download },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 py-3 px-3.5 border-b-2 transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'border-blue-600 text-blue-600 bg-blue-50/40'
                  : 'border-transparent hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="bg-blue-600 text-white text-xs font-semibold py-2 px-6 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{toast}</span>
          </div>
          <button onClick={() => setToast(null)} className="text-blue-200 hover:text-white text-xs">
            Dismiss
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Global Compliance Score
                </span>
                <div className="text-3xl font-extrabold text-[#0088cc] tabular-nums mt-1">
                  98%
                </div>
                <span className="text-xs font-semibold text-emerald-600 block mt-2">
                  ▲ +2% after ISO 42001 verification
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Overall Risk Level
                </span>
                <div className="text-3xl font-extrabold text-emerald-500 mt-1">
                  Low
                </div>
                <span className="text-xs font-semibold text-slate-500 block mt-2">
                  All 24 models within bounds
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Monitored Systems
                </span>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums mt-1">
                  24 / 24
                </div>
                <span className="text-xs font-semibold text-blue-600 block mt-2">
                  100% telemetry coverage
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Critical Violations
                </span>
                <div className="text-3xl font-extrabold text-slate-900 tabular-nums mt-1">
                  0
                </div>
                <span className="text-xs font-semibold text-slate-500 block mt-2">
                  Zero active threats
                </span>
              </div>
            </div>

            {/* Systems Grid */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Active Production AI Systems Inventory
                </h3>
                <span className="text-xs text-slate-500">
                  {systems.length} Systems Managed
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {systems.map((sys) => (
                  <div
                    key={sys.id}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 px-2 rounded-lg transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{sys.name}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5 font-mono">
                        {sys.provider} · {sys.type}
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className="text-[11px] font-bold text-slate-400 uppercase block">
                          Compliance
                        </span>
                        <span className="font-bold text-[#0088cc]">{sys.complianceScore}%</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-bold text-slate-400 uppercase block">
                          Risk
                        </span>
                        <span className="font-bold text-emerald-600">{sys.riskLevel}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-bold text-slate-400 uppercase block">
                          24h Invocations
                        </span>
                        <span className="font-semibold text-slate-700 tabular-nums">
                          {sys.requests24h.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RISK TAB */}
        {activeTab === 'risk' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                AI Risk Assessment Matrix
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Continuous classification matching EU AI Act Annex III and ISO 42001 risk evaluation criteria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">
                  Model Hallucination & Groundedness Risk
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evaluated across 50,000 synthetic test queries against ground-truth vector documents.
                </p>
                <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Hallucination Index:</span>
                  <span className="text-emerald-600">0.4% (Threshold: &lt;1.0%)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">
                  Adversarial Prompt Injection Exposure
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continuous fuzzing utilizing 10,000+ adversarial DAN jailbreaks and indirect prompt payloads.
                </p>
                <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Resistance Rate:</span>
                  <span className="text-blue-600">99.8% Intercepted</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECURITY TAB */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Real-Time Threat Prevention & Security Logs
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Append-only cryptographic audit record of blocked gateway attacks
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                Edge Armor Active
              </span>
            </div>

            <div className="space-y-3">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-[10.5px]">
                        {ev.threatType}
                      </span>
                      <span className="font-bold text-slate-900">{ev.systemName}</span>
                      <span className="text-slate-400 font-mono text-[11px]">· {ev.timestamp}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-normal">
                      {ev.details}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10.5px]">
                      {ev.actionTaken}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPLIANCE TAB */}
        {activeTab === 'compliance' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Statutory Compliance Tracking
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Continuous readiness score across EU AI Act, ISO 42001, and NIST AI RMF.
              </p>
            </div>

            <div className="space-y-4">
              {COMPLIANCE_FRAMEWORKS.map((fw) => (
                <div key={fw.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-slate-900 text-sm">{fw.name}</div>
                    <span className="text-sm font-extrabold text-blue-600">{fw.readinessPercentage}% Ready</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-3">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: `${fw.readinessPercentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-600">{fw.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* POLICIES TAB */}
        {activeTab === 'policies' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Enterprise Policy Studio
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Toggle and enforce live AI guardrails across models and agents.
              </p>
            </div>

            <div className="space-y-3">
              {policies.map((pol) => (
                <div
                  key={pol.id}
                  className="p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4 text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{pol.title}</div>
                    <div className="text-slate-500 mt-0.5">{pol.description}</div>
                  </div>

                  <button
                    onClick={() => togglePolicy(pol.id)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 cursor-pointer ${
                      pol.enabled ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        pol.enabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REPORTS TAB */}
        {activeTab === 'reports' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Downloadable Compliance Reports & Audit Packs
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Certified PDF/JSON audit dossiers with cryptographic SHA-256 signatures.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { title: 'EU AI Act High-Risk System Technical Documentation (Article 11)', format: 'PDF · 4.2 MB' },
                { title: 'ISO/IEC 42001:2023 AIMS Annual Internal Audit Review', format: 'PDF · 3.8 MB' },
                { title: 'NIST AI RMF 1.0 Comprehensive Risk Profiling Matrix', format: 'JSON & CSV · 1.2 MB' },
                { title: 'Weekly Adversarial Red-Team Probe & Fuzzing Telemetry Log', format: 'PDF · 2.1 MB' },
              ].map((rep, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <div className="font-bold text-slate-900">{rep.title}</div>
                    <div className="text-slate-500 text-[11px] font-mono mt-0.5">{rep.format}</div>
                  </div>

                  <button
                    onClick={() => {
                      setToast(`Downloaded: ${rep.title}`);
                      setTimeout(() => setToast(null), 3000);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
