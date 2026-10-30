import React, { useState } from 'react';
import {
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { READINESS_QUESTIONS } from '../data/governanceData';

interface ReadinessAssessmentProps {
  onOpenContact: () => void;
}

export const ReadinessAssessment: React.FC<ReadinessAssessmentProps> = ({
  onOpenContact,
}) => {
  const questions = READINESS_QUESTIONS;
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({
    1: 20,
    2: 35,
    3: 25,
    4: 35,
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const q = questions[currentStep];

  const handleSelectOption = (qId: number, score: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: score,
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate score out of 100
  const totalScoreRaw = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
  const maxPossible = 170;
  const finalScore = Math.min(100, Math.round((totalScoreRaw / maxPossible) * 100));

  let tier = 'High Operational Readiness';
  let tierColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  let tierDesc = 'Your organization has established strong baseline policies and automated guardrails. Priority focus should be formal ISO 42001 certification.';

  if (finalScore < 60) {
    tier = 'High Regulatory Exposure (Urgent)';
    tierColor = 'text-rose-600 bg-rose-50 border-rose-200';
    tierDesc = 'Significant regulatory and data privacy gaps detected. Immediate deployment of edge prompt armor and PII redaction recommended before deploying customer-facing AI.';
  } else if (finalScore < 80) {
    tier = 'Moderate Governance Maturity';
    tierColor = 'text-amber-600 bg-amber-50 border-amber-200';
    tierDesc = 'Good awareness but relying heavily on manual reviews. Automating EU AI Act compliance checks and agent tool approvals will accelerate safe scaling.';
  }

  return (
    <section id="assessment" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Self-Assessment Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
            Enterprise AI Readiness Assessment
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Evaluate your enterprise's AI compliance readiness, data privacy posture, and regulatory exposure in 60 seconds.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>Step {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  {q.title}
                </h3>

                <div className="space-y-3">
                  {q.options.map((opt, i) => {
                    const isSelected = selectedAnswers[q.id] === opt.score;
                    return (
                      <button
                        key={i}
                        onClick={() => handleSelectOption(q.id, opt.score)}
                        className={`w-full p-4 rounded-xl text-left border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-600 text-blue-900 ring-2 ring-blue-500/20'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                            isSelected
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <span className="text-xs font-bold">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-30 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <span>{currentStep === questions.length - 1 ? 'Calculate My Score' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 border-4 border-blue-600 mb-2">
                <span className="text-3xl font-extrabold text-blue-600 tabular-nums">
                  {finalScore}
                </span>
                <span className="text-xs font-bold text-slate-400 block -mt-1">/100</span>
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${tierColor}`}
                >
                  {tier}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  AI Governance Readiness: {finalScore}%
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2 leading-relaxed">
                  {tierDesc}
                </p>
              </div>

              {/* Gaps and Recommendations */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-left space-y-3 text-xs max-w-xl mx-auto">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Immediate Engineering Recommendations:
                </div>
                <div className="flex items-start gap-2.5 text-slate-700">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Implement automated PII masking on all customer-facing prompt gateways.</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Deploy continuous red-teaming against prompt injections and jailbreaks.</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Map technical documentation to EU AI Act High-Risk system standards.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  Schedule 30-min Executive Review
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-4 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Test</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
