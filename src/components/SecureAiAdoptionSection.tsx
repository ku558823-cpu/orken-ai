import React, { useState } from 'react';
import {
  ShieldCheck,
  Download,
  ArrowRight,
  Sparkles,
  Layers,
  Lock,
  FileText,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import secureAiImg from '../assets/images/secure_ai_adoption_1793373903663.jpg';

interface SecureAiAdoptionSectionProps {
  onOpenContact: () => void;
  onOpenDemo: () => void;
}

export const SecureAiAdoptionSection: React.FC<SecureAiAdoptionSectionProps> = ({
  onOpenContact,
  onOpenDemo,
}) => {
  const [downloadToast, setDownloadToast] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Model Inventory & Risk Classification',
      desc: 'Catalog all shadow AI tools, internal RAG pipelines, and third-party foundation models with automated EU AI Act risk-tier tagging.',
      tag: 'Discovery & Mapping',
    },
    {
      step: '02',
      title: 'In-Line Gateway Guardrails & PII Masking',
      desc: 'Deploy sub-15ms edge proxies to intercept prompt injections, pseudonymize sensitive data, and block unauthorized agent tool calls.',
      tag: 'Deterministic Armor',
    },
    {
      step: '03',
      title: 'Continuous Red-Teaming & Drift Oversight',
      desc: 'Automate daily adversarial fuzzing, hallucination indexing, and demographic bias evaluations across evolving production models.',
      tag: 'Continuous Assurance',
    },
    {
      step: '04',
      title: 'Audit Dossiers & Regulatory Certification',
      desc: 'Generate cryptographically verified compliance packages for ISO/IEC 42001, EU CE Marking, and NIST AI RMF regulatory audits.',
      tag: 'Certified Compliance',
    },
  ];

  const handleDownloadGuide = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3500);
  };

  return (
    <section id="secure-adoption" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Strategic Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Explore More About Secure AI Adoption
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Transition safely from unmonitored employee AI experiments to a fortified, ISO 42001-certified enterprise AI infrastructure.
          </p>
        </div>

        {/* Hero Visual Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column: Generated High-Tech Secure AI Adoption Photo */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-950">
              <img
                src={secureAiImg}
                alt="Secure AI Adoption Enterprise Command Center"
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />

              {/* Gradient Overlay Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Live Badge Over Image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 sm:p-4 text-white text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="font-bold text-white text-xs sm:text-sm">
                      ORKEN AI Secure Adoption Framework
                    </div>
                    <div className="text-[11px] text-slate-300">
                      ISO 42001 · EU AI Act · Zero-Trust Gateway
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-2 py-0.5 rounded">
                    Operationalized
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Pillars & Actionable Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md">
                Enterprise Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                The 4-Pillar Secure AI Adoption Lifecycle
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                How Fortune 500 enterprises deploy autonomous agents and large language models without risking intellectual property, customer trust, or regulatory sanctions.
              </p>
            </div>

            {/* 4 Interactive Stages */}
            <div className="space-y-3">
              {stages.map((stg, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={stg.step}
                    onClick={() => setActiveStage(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-50/70 border-blue-600 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2.5">
                        <span className={`font-mono text-xs font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                          {stg.step}
                        </span>
                        <h4 className={`text-xs sm:text-sm font-bold ${isActive ? 'text-blue-900' : 'text-slate-900'}`}>
                          {stg.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                        {stg.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {stg.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadGuide}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Secure Adoption Whitepaper (PDF)</span>
              </button>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                <span>Request Architectural Review</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {downloadToast && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800 flex items-center gap-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>"Enterprise Secure AI Adoption Whitepaper (2026 Edition)" downloaded successfully.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
