import React, { useState } from 'react';
import {
  ShieldCheck,
  Key,
  Lock,
  ArrowRight,
  Play,
  Activity,
  AlertCircle,
  TrendingUp,
  Shield,
  Sparkles,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';

interface HeroProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenDemo: () => void;
  onExploreDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAuth,
  onOpenDemo,
  onExploreDashboard,
}) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [complianceScore, setComplianceScore] = useState(98);
  const [activeSystems, setActiveSystems] = useState(24);
  const [criticalIssues, setCriticalIssues] = useState(0);

  const handleSimulateProbe = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setComplianceScore(99);
      setActiveSystems(24);
      setCriticalIssues(0);
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden bg-white enterprise-grid pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100">
      {/* Subtle radial ambient glow for depth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Verification Badges (exact match from attachment) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full border border-blue-600 bg-blue-50" />
                <span>ISO 42001 Compliant</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
                <Key className="w-3.5 h-3.5 text-blue-600" />
                <span>EU AI Act Ready</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>Enterprise Security</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0a192f] leading-[1.12]">
                Build a Secure and Responsible AI Future.
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Enterprise AI Governance Platform
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              The only platform that operationalizes <strong className="text-slate-900 font-semibold">ISO 42001</strong> requirements with integrated <strong className="text-slate-900 font-semibold">EU AI Act</strong> compliance, reducing costs by <span className="text-blue-600 font-bold">40%</span> and eliminating regulatory risks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenAuth('signup')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all cursor-pointer"
              >
                <span>Get Started for Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm sm:text-base shadow-2xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="/src/assets/images/avatar_seo_analyst_1793372212036.jpg"
                  alt="Enterprise User"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  SK
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  MR
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  +120
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600">
                Join innovative enterprises managing AI governance worldwide
              </span>
            </div>
          </div>

          {/* Right Column: Hero Live Interactive Dashboard Card (faithfully matching screenshot) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient decorative border highlight */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 backdrop-blur-xl">
              {/* Header: AI System Status & All Systems Operational badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">
                    AI SYSTEM STATUS
                  </span>
                </div>

                <div className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 text-xs font-bold tracking-tight">
                  All Systems Operational
                </div>
              </div>

              {/* Two High-Contrast Metric Wells */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {/* Metric 1: Compliance Score */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                    <span>Compliance Score</span>
                    <Shield className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0088cc] tabular-nums my-1">
                    {complianceScore}%
                  </div>
                  {/* Cyan progress bar */}
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-700"
                      style={{ width: `${complianceScore}%` }}
                    />
                  </div>
                </div>

                {/* Metric 2: Risk Level */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                    <span>Risk Level</span>
                    <Activity className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 my-1">
                    Low
                  </div>
                  {/* 4-stage risk level bars */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="h-2 flex-1 rounded-full bg-emerald-500" />
                    <span className="h-2 flex-1 rounded-full bg-slate-200" />
                    <span className="h-2 flex-1 rounded-full bg-slate-200" />
                    <span className="h-2 flex-1 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>

              {/* Bottom Status Row */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900 tabular-nums">
                      {activeSystems}/24
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      ACTIVE SYSTEMS
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900 tabular-nums">
                      {criticalIssues}
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      CRITICAL ISSUES
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Live Scan Trigger */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handleSimulateProbe}
                  disabled={isSimulating}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-blue-400' : ''}`} />
                  <span>{isSimulating ? 'Conducting Live Security Audit...' : 'Simulate Live Red-Team Probe'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
