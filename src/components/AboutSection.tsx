import React from 'react';
import { ShieldCheck, Award, Lock, Users, Zap, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              About ORKEN AI
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pioneering Deterministic Trust for Enterprise Intelligence
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Founded by cybersecurity architects and algorithmic governance researchers, ORKEN AI was engineered to bridge the canyon between rapid LLM innovation and stringent enterprise risk management.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              While conventional approaches rely on prompting models to "be safe", ORKEN AI treats AI systems as untrusted workloads—enforcing mathematical guardrails, automated ISO 42001 certification pipelines, and deterministic cryptographic audit trails at network line speed.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <div className="text-3xl font-extrabold text-blue-600 tabular-nums">
                  120+
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  Enterprises Secured
                </div>
                <div className="text-[11px] text-slate-500">
                  Across finance, health, and cloud
                </div>
              </div>

              <div>
                <div className="text-3xl font-extrabold text-emerald-600 tabular-nums">
                  &lt;15ms
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  Gateway Latency SLA
                </div>
                <div className="text-[11px] text-slate-500">
                  Zero bottleneck edge proxy
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Principles Card */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-200">
              Our Non-Negotiable Governance Principles
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Deterministic Security Over Prompt Wishcraft
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Never trust an LLM to police itself. Real security requires out-of-band proxy inspection and cryptographic validation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Zero Data Leakage Perimeter
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Confidential enterprise data and user PII must be pseudonymized before touching external third-party model inference endpoints.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Continuous Regulatory Alignment
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Regulations evolve continuously. We automate compliance mapping so legal and engineering teams maintain audit readiness without friction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
