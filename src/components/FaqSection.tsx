import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Layers,
  Sparkles,
  Lock,
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/governanceData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const readinessPillars = [
    { title: 'AI System Inventory', desc: 'Catalog all shadow AI, LLM APIs, and vector pipelines.' },
    { title: 'In-Line Gateway Armor', desc: 'Sub-15ms edge PII redaction and prompt injection filters.' },
    { title: 'Human-in-the-Loop Gates', desc: 'Enforce cryptographic officer approval for high-risk tool calls.' },
    { title: 'Formal AI Policy & IP Rules', desc: 'Establish copyright, data sharing, and acceptable use boundaries.' },
    { title: 'Real-Time Drift & Hallucination Telemetry', desc: 'Set automated circuit-breakers when confidence scores drop.' },
    { title: 'Statutory Regulatory Mapping', desc: 'Continuous alignment with ISO/IEC 42001 and EU AI Act mandates.' },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Answers & Strategic Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
            Learn what should be in place before you move from AI experimentation to broader adoption.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
            Essential operational, security, and statutory requirements for scaling generative AI safely across the enterprise.
          </p>
        </div>

        {/* Featured Readiness Transition Callout Banner */}
        <div className="mb-10 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Moving from AI Experimentation to Broader Adoption
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            6 Core Capabilities Required Before Scaling Enterprise AI
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
            Adopting AI across departments without operational guardrails exposes organizations to regulatory penalties, data breaches, and brand crises. Ensure these six safeguards are active:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {readinessPillars.map((pil, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">{pil.title}</div>
                  <div className="text-slate-400 text-[11px] leading-snug mt-0.5">{pil.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'border-blue-500/40 bg-blue-50/20 shadow-xs'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/50'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-sm sm:text-base font-bold ${isOpen ? 'text-blue-900' : 'text-slate-900'}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : 'text-slate-500'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
