import React from 'react';
import {
  ArrowRight,
  Shield,
  Server,
  Cloud,
  CheckCircle2,
  Sparkles,
  PhoneCall,
} from 'lucide-react';

interface BusinessAdvantageSectionProps {
  onContactClick: () => void;
}

export const BusinessAdvantageSection: React.FC<BusinessAdvantageSectionProps> = ({
  onContactClick,
}) => {
  const ecosystemPillars = [
    {
      title: 'Enterprise IT Infrastructure',
      desc: 'Seamless hybrid-cloud integration and on-premise Kubernetes support.',
      icon: Server,
    },
    {
      title: 'Zero-Trust AI Security',
      desc: 'In-line prompt armor, PII redaction, and cryptographic audit logs.',
      icon: Shield,
    },
    {
      title: 'Microsoft & Azure Co-Pilot Alignment',
      desc: 'Native integration with Azure OpenAI, M365 Copilot, and Purview.',
      icon: Cloud,
    },
    {
      title: 'Unified Accountability',
      desc: 'Single accountable governance partner ensuring compliance end-to-end.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-[#0a192f] to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Headline, Copy & Contact Us CTA */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Strategic Transformation</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Make AI a Business Advantage
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Bring IT, security, Microsoft, and AI governance services together under one accountable partner. Build a technology environment that supports secure AI adoption and is ready for what your business needs next.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Schedule Executive Call</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4-Pillar Unified Governance Ecosystem Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ecosystemPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
