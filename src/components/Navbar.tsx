import React, { useState } from 'react';
import {
  Shield,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  Lock,
  Cpu,
  FileCheck2,
  Activity,
  ArrowRight,
  LayoutDashboard,
  User,
  LogOut,
} from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenDemo: () => void;
  onNavigateSection: (sectionId: string) => void;
  isLoggedIn: boolean;
  currentUser: { name: string; email: string; company: string } | null;
  onLogout: () => void;
  isDashboardView: boolean;
  onToggleDashboardView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onOpenDemo,
  onNavigateSection,
  isLoggedIn,
  currentUser,
  onLogout,
  isDashboardView,
  onToggleDashboardView,
}) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesList = [
    {
      title: 'Model Auditing & Red-Teaming',
      desc: 'Automated vulnerability probes for LLMs & agents',
      icon: Shield,
      id: 'services',
    },
    {
      title: 'EU AI Act & ISO 42001 Compliance',
      desc: 'Operationalize regulatory mandates with 1-click reports',
      icon: FileCheck2,
      id: 'compliance',
    },
    {
      title: 'Autonomous Agent Observability',
      desc: 'Trace multi-agent tool calls and enforce HITL approvals',
      icon: Cpu,
      id: 'agents',
    },
    {
      title: 'Real-time Guardrails & PII Masking',
      desc: 'Sub-15ms edge gateway blocking prompt injections',
      icon: Lock,
      id: 'security',
    },
  ];

  return (
    <div className="sticky top-0 z-40">
      {/* Top Enterprise Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 text-center font-medium hidden sm:flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Enterprise AI Readiness: <strong className="text-white font-semibold">Microsoft 365 Copilot & Azure AI Security Architecture</strong></span>
        <span className="text-slate-500">·</span>
        <button
          onClick={() => onNavigateSection('assessment')}
          className="text-blue-400 font-bold hover:underline cursor-pointer"
        >
          Take Free 60-Sec Readiness Assessment →
        </button>
      </div>

      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('hero');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            {/* Geometric Shield Logo similar to ARELIS / ORKEN modern motif */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-white stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                ORKEN <span className="text-blue-600">AI</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                Governance Platform
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => {
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('hero');
            }}
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Home
          </button>

          <button
            onClick={() => {
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('about');
            }}
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            About
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => {
                if (isDashboardView) onToggleDashboardView();
                onNavigateSection('services');
              }}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2"
            >
              <span>Platform Features</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`}
              />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-1 w-84 bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                  Core Enterprise Engines
                </div>
                {servicesList.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        if (isDashboardView) onToggleDashboardView();
                        onNavigateSection(srv.id);
                      }}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {srv.title}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                          {srv.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('secure-adoption');
            }}
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Secure Adoption
          </button>

          <button
            onClick={() => {
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('compliance');
            }}
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Compliance
          </button>

          <button
            onClick={() => {
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('assessment');
            }}
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <span>Readiness Test</span>
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 px-1.5 py-0.2 rounded-full">
              Free
            </span>
          </button>

          <button
            onClick={() => {
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('contact');
            }}
            className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Switch to Enterprise Portal Button */}
          <button
            onClick={onToggleDashboardView}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              isDashboardView
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-blue-600" />
            <span>{isDashboardView ? 'Public Site' : 'Live Portal'}</span>
          </button>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <button
                onClick={onToggleDashboardView}
                className="flex items-center gap-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                  {currentUser?.name.charAt(0) || 'U'}
                </div>
                <span>{currentUser?.name || 'Enterprise Admin'}</span>
              </button>
              <button
                onClick={onLogout}
                title="Log Out"
                className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => onOpenAuth('login')}
                className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors px-2 py-2"
              >
                Sign In
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenAuth('login')}
            className="text-xs font-bold text-blue-600 px-2 py-1"
          >
            Sign In
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-150">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('hero');
            }}
            className="w-full text-left py-2 text-sm font-semibold text-slate-800"
          >
            Home
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('about');
            }}
            className="w-full text-left py-2 text-sm font-semibold text-slate-800"
          >
            About
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('services');
            }}
            className="w-full text-left py-2 text-sm font-semibold text-slate-800"
          >
            Services & Features
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('compliance');
            }}
            className="w-full text-left py-2 text-sm font-semibold text-slate-800"
          >
            Compliance Tracker
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('assessment');
            }}
            className="w-full text-left py-2 text-sm font-semibold text-emerald-600"
          >
            Free AI Readiness Quiz
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (isDashboardView) onToggleDashboardView();
              onNavigateSection('contact');
            }}
            className="w-full text-left py-2 text-sm font-semibold text-slate-800"
          >
            Contact
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleDashboardView();
              }}
              className="w-full py-2.5 rounded-lg bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4 text-blue-600" />
              <span>{isDashboardView ? 'Back to Landing Page' : 'Open Enterprise Portal'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs"
            >
              Get Started for Free
            </button>
          </div>
        </div>
      )}
    </header>
  </div>
);
};
