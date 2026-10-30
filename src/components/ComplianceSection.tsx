import React, { useState } from 'react';
import {
  FileCheck2,
  CheckCircle2,
  Clock,
  Download,
  AlertCircle,
  ExternalLink,
  Shield,
  Layers,
} from 'lucide-react';
import { COMPLIANCE_FRAMEWORKS } from '../data/governanceData';
import { ComplianceFramework } from '../types/governance';

export const ComplianceSection: React.FC = () => {
  const frameworks = COMPLIANCE_FRAMEWORKS;
  const [selectedFrameworkId, setSelectedFrameworkId] = useState(frameworks[0].id);
  const [downloadToast, setDownloadToast] = useState(false);

  const active = frameworks.find((f) => f.id === selectedFrameworkId) || frameworks[0];

  const handleExportDossier = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3000);
  };

  return (
    <section id="compliance" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Regulatory Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Continuous AI Compliance Management
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Move from periodic manual consulting spreadsheets to continuous, automated verification across the world's most stringent AI regulations.
          </p>
        </div>

        {/* Framework Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {frameworks.map((fw) => {
            const isSelected = selectedFrameworkId === fw.id;
            return (
              <button
                key={fw.id}
                onClick={() => setSelectedFrameworkId(fw.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <FileCheck2 className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                <span>{fw.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-extrabold tabular-nums ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {fw.readinessPercentage}%
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Framework Container */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h3 className="text-2xl font-bold text-slate-900">
                  {active.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500 font-mono bg-white border border-slate-200 px-2 py-0.5 rounded">
                  {active.code}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
                {active.description}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <div className="text-2xl font-extrabold text-blue-600 tabular-nums">
                  {active.passedControls} / {active.totalControls}
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Controls Verified
                </div>
              </div>

              <button
                onClick={handleExportDossier}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Audit Dossier</span>
              </button>
            </div>
          </div>

          {downloadToast && (
            <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800 flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dossier generated: {active.name} compliance evidence package downloaded.</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-mono">SHA-256 Verified</span>
            </div>
          )}

          {/* Key Clauses & Automated Assertions Grid */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Automated Statutory Assertions & Audit Checkpoints:
            </div>
            {active.keyClauses.map((clause) => {
              const isCompliant = clause.status === 'Compliant';
              return (
                <div
                  key={clause.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded">
                        {clause.clause}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {clause.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {clause.details}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                        isCompliant
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      {isCompliant ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                      )}
                      <span>{clause.status}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
