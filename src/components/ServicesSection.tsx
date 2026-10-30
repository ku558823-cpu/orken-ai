import React, { useState } from 'react';
import {
  ShieldCheck,
  Scale,
  FileCheck,
  Cpu,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Activity,
  Code2,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'auditing',
      title: 'Model Auditing & Red-Teaming',
      kicker: 'Defensive Assurance',
      icon: ShieldCheck,
      description:
        'Continuous automated adversarial evaluation of foundation LLMs, fine-tuned weights, and RAG pipelines against jailbreaks, prompt leakage, and extraction attacks.',
      features: [
        'Automated red-team probes testing 10,000+ known adversarial jailbreaks',
        'Model hallucination index & semantic grounding benchmark',
        'Continuous adversarial prompt injection resistance scoring',
        'Tamper-evident audit trail exported directly to compliance dossiers',
      ],
      codeSample: `// ORKEN AI Gateway Model Audit Request
const audit = await orken.audit.evaluate({
  systemId: "sys_underwrite_v4",
  probes: ["adversarial_jailbreak", "pii_extraction"],
  tolerance: { hallucinationRate: 0.01, driftPValue: 0.05 }
});
// Result: 100% Passed · Zero Critical Vulnerabilities`,
    },
    {
      id: 'bias',
      title: 'Bias, Fairness & Explainability',
      kicker: 'Algorithmic Equity',
      icon: Scale,
      description:
        'Audit demographic parity, disparate impact ratios, and feature attributions across customer-facing automated decisions, credit scoring, and triage algorithms.',
      features: [
        'Four-fifths (80%) rule and demographic parity automated tests',
        'SHAP & Integrated Gradients feature attribution explainability',
        'Toxic language, stereotyping, and representation bias monitors',
        'Pre-deployment fairness certification for regulatory submissions',
      ],
      codeSample: `// Fairness & Disparate Impact Evaluation
const fairnessReport = await orken.fairness.analyze({
  dataset: "q3_loan_applications.parquet",
  protectedAttributes: ["age", "gender", "ethnicity"],
  parityThreshold: 0.82
});
// Status: COMPLIANT with FTC & EU AI Act Article 10`,
    },
    {
      id: 'compliance',
      title: 'Regulatory Framework Mapping',
      kicker: 'Global Compliance',
      icon: FileCheck,
      description:
        'Single pane of glass mapping your AI models to the EU AI Act, ISO/IEC 42001, NIST AI RMF, and sectoral mandates (HIPAA, FTC, SEC AI guidelines).',
      features: [
        'Automated AI System Risk Classification (High-Risk vs Limited-Risk)',
        'Algorithmic Impact Assessments (AIIA) generated in minutes',
        'Live compliance readiness dashboards with gap remediation trackers',
        '1-click export of EU CE Mark technical documentation packages',
      ],
      codeSample: `// Generate EU AI Act Article 11 Technical Dossier
const complianceDossier = await orken.compliance.exportPackage({
  standard: "EU_AI_ACT_2024",
  systemClassification: "HIGH_RISK_ANNEX_III",
  format: "PDF_A_REGULATORY"
});
// Dossier signed with SHA-256 cryptographic verification`,
    },
    {
      id: 'guardrails',
      title: 'Real-Time Enterprise Guardrails',
      kicker: 'In-Line Security',
      icon: Lock,
      description:
        'High-throughput, sub-15ms proxy gateway intercepting sensitive data exfiltration, toxic outputs, and unauthorized tool calls before reaching end users.',
      features: [
        'Automatic zero-loss PII masking & token pseudonymization',
        'Semantic brand safety and competitor mention filters',
        'Autonomous agent tool-call interception & rate-limiting',
        'Zero-trust edge proxy deployable in customer private VPCs',
      ],
      codeSample: `// Gateway Edge Interception Rule
export const config = {
  pipeline: ["pii_redaction", "prompt_armor", "rate_limiter"],
  latencySLA: "<15ms",
  fallbackAction: "RETURN_MASKED_RESPONSE"
};`,
    },
  ];

  const current = services[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Full-Spectrum Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            AI Governance Services Engineered for Enterprise Scale
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Eliminate blind spots across your entire AI lifecycle with deterministic verification, continuous red-teaming, and certified compliance mapping.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                    : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {item.kicker}
                  </span>
                  <div
                    className={`text-xs sm:text-sm font-bold ${
                      isActive ? 'text-blue-600' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Detailed View Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                  {current.kicker}
                </span>
                <span className="text-xs font-semibold text-slate-400">· Production Ready</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Bullet checklist */}
              <div className="space-y-3 pt-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Code & Payload Preview */}
            <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800 shadow-2xl font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-slate-500 tracking-wider uppercase font-sans">
                  ORKEN SDK Engine
                </span>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed text-[11.5px] text-emerald-400">
                {current.codeSample}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
