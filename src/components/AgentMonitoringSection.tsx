import React, { useState } from 'react';
import {
  Cpu,
  Workflow,
  CheckCircle2,
  AlertTriangle,
  PauseCircle,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const AgentMonitoringSection: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState('agent-devops');

  const agentSteps = [
    {
      step: 1,
      name: 'Incident Ingestion & Error Log Parse',
      tool: 'datadog_query_logs()',
      status: 'APPROVED_AUTOMATIC',
      latency: '24ms',
      detail: 'Parsed 420 stack traces identifying redis connection pool exhaustion.',
    },
    {
      step: 2,
      name: 'Proposed Configuration Patch',
      tool: 'generate_terraform_patch()',
      status: 'APPROVED_AUTOMATIC',
      latency: '340ms',
      detail: 'Generated PR resizing redis max_clients to 10,000.',
    },
    {
      step: 3,
      name: 'Database Truncation Command Proposed',
      tool: 'execute_sql("DROP TABLE sessions_temp")',
      status: 'INTERCEPTED_HITL_TRIGGERED',
      latency: '11ms',
      detail: 'Destructive DDL query detected outside maintenance window. Blocked for Human Officer approval.',
    },
  ];

  return (
    <section id="agents" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Autonomous Agent Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Continuous AI Agent Observability & Control
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Autonomous multi-agent workflows executing external tool calls present systemic business risks. ORKEN AI enforces live decision graph tracing, compute quotas, and mandatory Human-in-the-Loop gates.
          </p>
        </div>

        {/* 3 Core Agent Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Decision Graph & Step Tracing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Capture every chain-of-thought node, tool parameter, and external API payload with sub-millisecond telemetry.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <PauseCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Human-in-the-Loop Interceptors
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Automatically hold high-impact actions (financial disbursements, system deletions, contract signing) for human signoff.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Infinite Loop Circuit Breakers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Detect runaway agent loops, cyclic tool calls, and budget overruns, terminating processes before compounding compute costs.
            </p>
          </div>
        </div>

        {/* Live Execution Trace UI */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 mb-6 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Live Agent Trace: Autonomous DevOps Incident Solver
                </span>
              </div>
              <span className="text-xs text-slate-500 font-mono mt-0.5 block">
                Session ID: agt_session_92849204 · Model: GPT-4o Agent
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                Guardrail Status: Active
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {agentSteps.map((step) => {
              const isIntercepted = step.status.includes('INTERCEPTED');
              return (
                <div
                  key={step.step}
                  className={`p-4 rounded-xl border transition-all ${
                    isIntercepted
                      ? 'bg-rose-50/60 border-rose-200 shadow-xs'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center font-bold text-xs text-slate-700 tabular-nums">
                        {step.step}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {step.name}
                      </span>
                      <code className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {step.tool}
                      </code>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-[10.5px] font-bold px-2 py-0.5 rounded-full ${
                          isIntercepted
                            ? 'bg-rose-600 text-white'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {isIntercepted ? 'INTERCEPTED (HITL)' : 'PASS'}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono tabular-nums">
                        {step.latency}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-normal pl-8">
                    {step.detail}
                  </p>

                  {isIntercepted && (
                    <div className="mt-3 ml-8 p-3 bg-white rounded-lg border border-rose-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="text-rose-900 font-semibold flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Action requires compliance officer cryptographic approval to proceed.</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button className="px-3 py-1.5 rounded-md bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 cursor-pointer">
                          Reject Command
                        </button>
                        <button className="px-3 py-1.5 rounded-md bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 cursor-pointer">
                          Approve Sign-off
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
