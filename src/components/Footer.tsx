import React from 'react';
import {
  Shield,
  FileCheck,
  Lock,
  Globe,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenAuth,
  onOpenDemo,
}) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                ORKEN <span className="text-blue-400">AI</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              The premier Enterprise AI Governance, Security, and Compliance platform. Operationalizing ISO 42001 and EU AI Act standards with zero-latency gateway guardrails.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Global Gateway Systems Nominal
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('secure-adoption')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left font-semibold text-white"
                >
                  Explore Secure AI Adoption →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Model Auditing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('risk-dashboard')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Risk Assessment Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('security')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Prompt Armor & PII Masking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('agents')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Agent Observability & HITL
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('policies')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Policy Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Regulatory Compliance Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Frameworks
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('compliance')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  EU AI Act 2024/1689
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('compliance')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  ISO/IEC 42001:2023 AIMS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('compliance')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  NIST AI RMF 1.0
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('assessment')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left text-emerald-400 font-bold"
                >
                  Free Readiness Quiz →
                </button>
              </li>
            </ul>
          </div>

          {/* Enterprise & Trust */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Legal
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  About ORKEN AI
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDemo}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Watch Product Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Enterprise Customer Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Contact Compliance Team
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} ORKEN AI Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-slate-400 cursor-pointer">SOC 2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
