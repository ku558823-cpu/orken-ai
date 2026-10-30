import React, { useState } from 'react';
import {
  Layers,
  Shield,
  Server,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Cpu,
  Workflow,
  Network,
} from 'lucide-react';

interface IntegratedApproachSectionProps {
  onLearnMoreClick: () => void;
  onExploreArchitecture?: () => void;
}

export const IntegratedApproachSection: React.FC<IntegratedApproachSectionProps> = ({
  onLearnMoreClick,
  onExploreArchitecture,
}) => {
  const [activeRipple, setActiveRipple] = useState(0);

  const rippleDimensions = [
    {
      title: 'IT Operations',
      subtitle: 'Dictates Security Posture',
      icon: Server,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Your network infrastructure, cloud topologies, and endpoint management establish the operational baseline for all AI workloads.',
    },
    {
      title: 'Identity & Data Practices',
      subtitle: 'Enables Safe AI Ingestion',
      icon: Shield,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description: 'Zero-trust identity access, token pseudonymization, and encryption govern how LLMs and agents access enterprise data safely.',
    },
    {
      title: 'Microsoft & Cloud Ecosystem',
      subtitle: 'Connects Workflows & Copilots',
      icon: Cloud,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description: 'Azure OpenAI, Microsoft 365 Copilot, and Purview tie together how employees collaborate, automate, and innovate daily.',
    },
    {
      title: 'Continuous AI Governance',
      subtitle: 'Guarantees Compliance & Scale',
      icon: Cpu,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      description: 'Automated ISO 42001 and EU AI Act alignment, prompt armor, and agent oversight ensure zero regulatory or brand exposure.',
    },
  ];

  return (
    <section id="integrated-approach" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background technical grid accent */}
      <div className="absolute inset-0 enterprise-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Core Narrative & Experience */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>THE ORKEN EXPERIENCE</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                An Integrated Approach to AI Adoption
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              In a modern IT environment, every decision has a ripple effect. Your IT operations dictate your security posture. Your identity and data practices affect your ability to adopt AI. Your Microsoft stack connects it all — influencing how your employees collaborate, automate, and innovate.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At <strong className="text-slate-900 font-semibold">ORKEN AI</strong>, one partnership gives you access to AI governance services, IT operations, cybersecurity, compliance, Microsoft expertise, and AI strategy consulting. The result is stronger governance and a more secure path to AI adoption.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMoreClick}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLearnMoreClick}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors cursor-pointer"
              >
                <span>Explore Integrated Services</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Ripple Effect Diagram */}
          <div className="lg:col-span-6 bg-slate-50/90 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl backdrop-blur-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  The Enterprise AI Ripple Effect
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                Unified Ecosystem
              </span>
            </div>

            {/* Ripple interactive chain cards */}
            <div className="space-y-3">
              {rippleDimensions.map((dim, idx) => {
                const Icon = dim.icon;
                const isSelected = activeRipple === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveRipple(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/15'
                        : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${dim.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 leading-tight">
                            {dim.title}
                          </h4>
                          <span className="text-[11px] text-blue-600 font-semibold block">
                            {dim.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 font-mono">
                        0{idx + 1}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pl-11">
                      {dim.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Outcome Strip */}
            <div className="p-3.5 rounded-xl bg-blue-600 text-white text-xs flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="font-semibold text-[11.5px]">
                  Result: Stronger governance & a deterministic path to AI adoption.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
