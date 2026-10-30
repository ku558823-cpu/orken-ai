import React from 'react';
import {
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PieChart,
  Layers,
  Award,
} from 'lucide-react';

interface TransformUncertaintySectionProps {
  onConsultationClick: () => void;
  onAssessmentClick: () => void;
}

export const TransformUncertaintySection: React.FC<TransformUncertaintySectionProps> = ({
  onConsultationClick,
  onAssessmentClick,
}) => {
  const outcomes = [
    {
      title: 'Move Beyond Disconnected Pilots',
      desc: 'Consolidate fragmented departmental AI experiments into a single secure, observable enterprise AI architecture.',
      highlight: 'Unified Governance Model',
    },
    {
      title: 'Dramatically Reduce Risk',
      desc: 'Prevent data leakage, prompt injections, and regulatory fines through deterministic gateway guardrails and zero-trust controls.',
      highlight: 'Zero Regulatory Surprises',
    },
    {
      title: 'Improve the Quality & Grounding of AI',
      desc: 'Enforce real-time citation accuracy, suppress model hallucinations to <0.5%, and maintain demographic fairness.',
      highlight: 'Verifiable Model Outputs',
    },
  ];

  return (
    <section id="transform-value" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative, Stat, and Value Statement */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise Strategic Clarity</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transform Uncertainty Into Business Value
            </h2>

            {/* High-Impact Stat Callout Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-amber-950 flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-sm sm:text-base font-bold text-amber-900">
                  Six in 10 organizations either lack proper data management practices or have no idea whether they exist.
                </div>
                <p className="text-xs text-amber-800 leading-relaxed font-normal">
                  Most organizations are building their AI strategy on a foundation they can’t even verify, creating hidden compliance liabilities and uncontrolled security vectors.
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Through AI strategy consulting and a practical AI governance framework, <strong className="text-slate-900 font-bold">ORKEN AI</strong> delivers a unified governance model to move beyond disconnected pilots, reduce risk, and improve the quality and safety of enterprise AI.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onConsultationClick}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                <span>Schedule Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onAssessmentClick}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors cursor-pointer"
              >
                <span>Take 60-Sec Readiness Test</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Core Value Realization Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-1">
              Measurable Business Outcomes:
            </div>

            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {item.highlight}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Key Trust Metric Box */}
            <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-2xl font-extrabold text-blue-400 tabular-nums">
                  40% Cost Savings
                </div>
                <div className="text-[11px] text-slate-400">
                  Via token quotas & pilot consolidation
                </div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-2xl font-extrabold text-emerald-400 tabular-nums">
                  100% Audit-Ready
                </div>
                <div className="text-[11px] text-slate-400">
                  ISO 42001 & EU AI Act compliance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
