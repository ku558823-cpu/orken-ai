import React, { useState } from 'react';
import {
  FileText,
  Sliders,
  Check,
  Shield,
  Plus,
  AlertTriangle,
  Download,
} from 'lucide-react';
import { INITIAL_POLICIES } from '../data/governanceData';
import { AIPolicyRule } from '../types/governance';

export const PolicySection: React.FC = () => {
  const [policies, setPolicies] = useState<AIPolicyRule[]>(INITIAL_POLICIES);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setPolicies((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const nextState = !p.enabled;
          setToastMessage(`Policy "${p.title}" ${nextState ? 'enabled' : 'disabled'}`);
          setTimeout(() => setToastMessage(null), 2500);
          return { ...p, enabled: nextState };
        }
        return p;
      })
    );
  };

  const filtered = policies.filter((p) => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    return true;
  });

  return (
    <section id="policies" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Enterprise Governance Rules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
              AI Policy Management Studio
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Define, customize, and enforce automated organizational AI boundaries across every model, department, and third-party vendor integration with zero code changes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setToastMessage('Exported active enterprise policy configuration (YAML).');
                setTimeout(() => setToastMessage(null), 3000);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export YAML</span>
            </button>
          </div>
        </div>

        {toastMessage && (
          <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs font-semibold text-blue-800 flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {['All', 'Data Privacy', 'Model Output', 'Human-in-the-Loop', 'Cost & Limits'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((policy) => {
            let severityColor = 'text-blue-600 bg-blue-50 border-blue-200';
            if (policy.severity === 'Critical') severityColor = 'text-rose-600 bg-rose-50 border-rose-200';
            if (policy.severity === 'High') severityColor = 'text-amber-600 bg-amber-50 border-amber-200';

            return (
              <div
                key={policy.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  policy.enabled
                    ? 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                    : 'bg-slate-50/70 border-slate-200 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${severityColor}`}
                    >
                      {policy.severity} Severity
                    </span>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => togglePolicy(policy.id)}
                      className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                        policy.enabled ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          policy.enabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {policy.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {policy.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Category: {policy.category}</span>
                  <span className={policy.enabled ? 'text-emerald-600 font-bold' : 'text-slate-400'}>
                    {policy.enabled ? 'Enforced' : 'Disabled'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
