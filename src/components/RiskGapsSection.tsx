import React, { useState } from 'react';
import {
  ShieldAlert,
  KeyRound,
  FileLock2,
  Users2,
  Cpu,
  Server,
  Workflow,
  AlertOctagon,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface RiskGapsSectionProps {
  onScheduleReview?: () => void;
}

export const RiskGapsSection: React.FC<RiskGapsSectionProps> = ({
  onScheduleReview,
}) => {
  const [activeGapIndex, setActiveGapIndex] = useState(0);

  const gaps = [
    {
      id: 'identity-access',
      title: 'Governed Identity & Access',
      tagline: 'Ensure the right level of access for every user, administrator, application, and AI agent.',
      icon: KeyRound,
      controls: [
        'Multifactor Authentication (MFA)',
        'Conditional Access Policies',
        'Privileged Identity Management (PIM)',
        'Zero Trust Identity Isolation for AI Agents',
      ],
      description:
        'We strengthen your AI security and compliance environment with multifactor authentication, conditional access, privileged identity management, and Zero Trust controls.',
      prevents:
        'Copilot or an AI agent inheriting excessive permissions and exposing confidential information to the wrong person.',
      technicalMeasure:
        'Dynamic token-level permission scoping ensuring AI agents never exceed the principal user’s least-privileged access envelope.',
    },
    {
      id: 'classified-data',
      title: 'Classified & Protected Data',
      tagline: 'Label, encrypt, and isolate sensitive corporate data before AI vector ingestion.',
      icon: FileLock2,
      controls: [
        'Automated Sensitive Data Labeling',
        'In-Line PII Token Masking',
        'Vector Store Access Control Lists',
        'Cryptographic Egress Watermarking',
      ],
      description:
        'Ensure confidential customer records, financial earnings, and IP are classified, encrypted, and isolated before ever being indexed by RAG pipelines or LLMs.',
      prevents:
        'Unlabeled confidential payroll data or acquisition strategy documents leaking through RAG search or Copilot prompt responses.',
      technicalMeasure:
        'Automated contextual data redaction preventing high-risk attributes from entering model contexts.',
    },
    {
      id: 'governed-collaboration',
      title: 'Governed Collaboration',
      tagline: 'Safeguard generative AI workspace sharing against unintended cross-department exposure.',
      icon: Users2,
      controls: [
        'Teams & SharePoint Boundary Isolation',
        'Copilot Cross-Tenant Sharing Restrictions',
        'Automated Workspace Access Reviews',
        'External Guest AI Interaction Guardrails',
      ],
      description:
        'Prevent generative AI tools from inadvertently surfacing restricted executive insights across open collaboration channels and shared document repositories.',
      prevents:
        'Internal co-pilots answering employee queries using restricted board materials or HR disciplinary files.',
      technicalMeasure:
        'Context-aware boundary filtering evaluating both the requester and the repository ACL before inference.',
    },
    {
      id: 'ai-operations',
      title: 'Secure, AI-Aware Operations',
      tagline: 'Equip your SOC with continuous prompt telemetry, drift detection, and anomaly alerts.',
      icon: Cpu,
      controls: [
        'Real-Time LLM Gateway Telemetry',
        'Prompt Injection Detection Alerts',
        'Model Groundedness Drift Tracking',
        'Automated Incident Isolation Playbooks',
      ],
      description:
        'Modernize your Security Operations Center (SOC) with real-time prompt telemetry, semantic armor detection, and automated threat triage.',
      prevents:
        'Adversarial jailbreak attacks, prompt extraction probes, and data poisoning attempts going unnoticed for weeks.',
      technicalMeasure:
        'Continuous streaming anomaly detection mapping prompt entropy and semantic shifts in sub-15ms.',
    },
    {
      id: 'stable-it',
      title: 'A Stable IT Foundation',
      tagline: 'Build a performant hybrid-cloud infrastructure capable of supporting high-throughput AI.',
      icon: Server,
      controls: [
        'High-Throughput Low-Latency Proxy',
        'Hybrid-Cloud & Private VPC Peering',
        'Token & Compute Budget Circuit Breakers',
        'High Availability & Disaster Recovery',
      ],
      description:
        'Establish an enterprise-grade infrastructure baseline that guarantees sub-15ms inference latency, prevents runaway token costs, and ensures 99.99% uptime.',
      prevents:
        'Runaway recursive loops draining monthly API budgets and network bottlenecks degrading user productivity.',
      technicalMeasure:
        'Automated compute throttles, token rate limiters, and multi-region fallback routing.',
    },
    {
      id: 'process-automation',
      title: 'Process Automation & Custom Agents',
      tagline: 'Design and govern custom enterprise agents with programmatic Human-in-the-Loop guardrails.',
      icon: Workflow,
      controls: [
        'Tool-Call Parameter Verification',
        'Mandatory Human Signoff (HITL)',
        'Decision Graph Provenance',
        'Sandbox Execution Containers',
      ],
      description:
        'Empower business units to deploy autonomous agents while enforcing strict deterministic guardrails on external API and database operations.',
      prevents:
        'Autonomous customer agents executing unauthorized fund transfers, database deletions, or unauthorized external emails.',
      technicalMeasure:
        'Cryptographic policy enforcement intercepting high-consequence tool calls before execution.',
    },
  ];

  const current = gaps[activeGapIndex];
  const CurrentIcon = current.icon;

  return (
    <section id="risk-gaps" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Vulnerability Mitigation</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4 leading-tight">
            Address the Gaps That Put AI Success at Risk
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Deploying AI without closing operational IT and identity gaps creates severe business vulnerabilities. ORKEN AI strengthens every dimension of your security and governance architecture.
          </p>
        </div>

        {/* 6 Core Gap Category Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {gaps.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeGapIndex === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveGapIndex(index)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className={`text-xs font-bold ${isSelected ? 'text-blue-600' : 'text-slate-900'}`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Breakdown Card for Active Gap */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Solution & Controls Enforced */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                    {current.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Controls Enforced Checklist */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Core Security Controls Enforced:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.controls.map((ctrl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{ctrl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono pt-2">
                Technical enforcement: {current.technicalMeasure}
              </div>
            </div>

            {/* Right Column: "What this helps prevent" High-Contrast Alert Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-xl p-6 sm:p-7 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                  <AlertOctagon className="w-5 h-5 text-rose-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    What This Helps Prevent
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-sm font-semibold leading-relaxed">
                  "{current.prevents}"
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Without continuous governance controls, autonomous AI models and Copilots inherit implicit trust, exposing sensitive organizational assets to unauthorized actors.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Zero Trust AI Security Guarantee</span>
                {onScheduleReview && (
                  <button
                    onClick={onScheduleReview}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Assess Gaps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
