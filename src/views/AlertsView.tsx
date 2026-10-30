import React, { useState } from 'react';
import { AnomalyAlert } from '../data/mockData';
import {
  Bell,
  AlertTriangle,
  Sparkles,
  TrendingDown,
  Users2,
  ShieldAlert,
  CheckCircle2,
  ExternalLink,
  Filter,
} from 'lucide-react';

interface AlertsViewProps {
  alerts: AnomalyAlert[];
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
  onInvestigateAlert: (alert: AnomalyAlert) => void;
}

export const AlertsView: React.FC<AlertsViewProps> = ({
  alerts,
  onMarkRead,
  onMarkAllRead,
  onInvestigateAlert,
}) => {
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredAlerts = alerts.filter((alt) => {
    if (typeFilter === 'all') return true;
    if (typeFilter === 'rank_drop' && alt.type === 'rank_drop') return true;
    if (typeFilter === 'ai_overview' && alt.type === 'ai_overview_gain') return true;
    if (typeFilter === 'algorithm' && alt.type === 'algorithm_fluctuation') return true;
    if (typeFilter === 'competitor' && alt.type === 'competitor_move') return true;
    return false;
  });

  const unreadCount = alerts.filter((a) => !a.read).length;

  return (
    <div className="space-y-6">
      {/* Top Banner & Volatility Radar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Volatility Indicator */}
        <div className="bg-white border border-[#e2e8f0] rounded-md p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
              Google Algo Volatility
            </span>
            <span className="text-[10px] font-bold text-[#d97706] bg-[#fffbeb] px-1.5 py-0.5 rounded border border-[#fef3c7]">
              CORE UPDATE
            </span>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0f172a] tabular-nums tracking-tight">
              7.8 <span className="text-base text-[#64748b] font-normal">/ 10</span>
            </div>
            <div className="w-full bg-[#f1f5f9] h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-[#f59e0b] h-full rounded-full" style={{ width: '78%' }} />
            </div>
          </div>
          <span className="text-[11px] text-[#64748b] mt-2 block">
            Substantial SERP position turbulence in Cloud & DevTech queries.
          </span>
        </div>

        {/* AI Overview Velocity */}
        <div className="bg-white border border-[#e2e8f0] rounded-md p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
              AI Citation Velocity
            </span>
            <span className="text-[10px] font-bold text-[#059669] bg-[#ecfdf5] px-1.5 py-0.5 rounded border border-[#a7f3d0]">
              +6.5% 30D
            </span>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0f172a] tabular-nums tracking-tight">
              78.2%
            </div>
            <div className="w-full bg-[#f1f5f9] h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-[#4f46e5] h-full rounded-full" style={{ width: '78.2%' }} />
            </div>
          </div>
          <span className="text-[11px] text-[#64748b] mt-2 block">
            Acme Cloud extracted in 114 out of 145 eligible informational SERPs.
          </span>
        </div>

        {/* Active Alert Triage */}
        <div className="bg-white border border-[#e2e8f0] rounded-md p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
              Active Alerts Status
            </span>
            <span className="text-[10px] font-bold text-[#ef4444] bg-[#fef2f2] px-1.5 py-0.5 rounded border border-[#fecaca] tabular-nums">
              {unreadCount} UNREAD
            </span>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0f172a] tabular-nums tracking-tight">
              {alerts.length} Total
            </div>
            <button
              onClick={onMarkAllRead}
              className="mt-3 text-xs font-semibold text-[#4f46e5] hover:text-[#4338ca] hover:underline"
            >
              Mark all as read & acknowledged
            </button>
          </div>
          <span className="text-[11px] text-[#64748b] mt-2 block">
            Real-time webhook active for Slack & PagerDuty notifications.
          </span>
        </div>
      </div>

      {/* Filter and Feed List */}
      <div className="bg-white border border-[#e2e8f0] rounded-md overflow-hidden">
        {/* Controls */}
        <div className="p-4 border-b border-[#e2e8f0] flex flex-wrap items-center justify-between gap-3 bg-[#f8fafc]">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#64748b] font-medium text-[11px] uppercase tracking-wider mr-1">
              Filter by:
            </span>
            <button
              onClick={() => setTypeFilter('all')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                typeFilter === 'all'
                  ? 'bg-[#0f172a] text-white'
                  : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
              }`}
            >
              All Events ({alerts.length})
            </button>
            <button
              onClick={() => setTypeFilter('rank_drop')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                typeFilter === 'rank_drop'
                  ? 'bg-[#ef4444] text-white'
                  : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
              }`}
            >
              Rank Drops
            </button>
            <button
              onClick={() => setTypeFilter('ai_overview')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                typeFilter === 'ai_overview'
                  ? 'bg-[#4f46e5] text-white'
                  : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
              }`}
            >
              AI Overview Wins
            </button>
            <button
              onClick={() => setTypeFilter('algorithm')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                typeFilter === 'algorithm'
                  ? 'bg-[#f59e0b] text-white'
                  : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
              }`}
            >
              Algorithm Spikes
            </button>
            <button
              onClick={() => setTypeFilter('competitor')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                typeFilter === 'competitor'
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
              }`}
            >
              Competitor Moves
            </button>
          </div>

          <div className="text-xs text-[#64748b]">
            Continuous live telemetry
          </div>
        </div>

        {/* Alert List */}
        <div className="divide-y divide-[#e2e8f0]">
          {filteredAlerts.map((alert) => {
            let icon = Bell;
            let iconColor = 'text-[#4f46e5] bg-[#eef2ff]';
            if (alert.type === 'rank_drop') {
              icon = TrendingDown;
              iconColor = 'text-[#ef4444] bg-[#fef2f2]';
            } else if (alert.type === 'ai_overview_gain') {
              icon = Sparkles;
              iconColor = 'text-[#059669] bg-[#ecfdf5]';
            } else if (alert.type === 'algorithm_fluctuation') {
              icon = AlertTriangle;
              iconColor = 'text-[#d97706] bg-[#fffbeb]';
            } else if (alert.type === 'competitor_move') {
              icon = Users2;
              iconColor = 'text-[#3b82f6] bg-[#eff6ff]';
            }

            const IconComp = icon;

            return (
              <div
                key={alert.id}
                className={`p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                  !alert.read ? 'bg-[#fcfaff]' : 'bg-white'
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${iconColor}`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-[#0f172a]">
                        {alert.title}
                      </h3>
                      {!alert.read && (
                        <span className="w-2 h-2 rounded-full bg-[#ef4444] shrink-0" />
                      )}
                      <span className="text-[11px] text-[#64748b]">
                        · {alert.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed max-w-2xl">
                      {alert.details}
                    </p>
                    {alert.affectedKeywordOrUrl && (
                      <div className="text-[11px] text-[#64748b] font-mono mt-1">
                        Target: <span className="text-[#0f172a] font-semibold">{alert.affectedKeywordOrUrl}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2.5">
                  {alert.metricChange && (
                    <span className="text-xs font-semibold text-[#0f172a] bg-[#f1f5f9] px-2 py-1 rounded tabular-nums">
                      {alert.metricChange}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      onMarkRead(alert.id);
                      onInvestigateAlert(alert);
                    }}
                    className="px-3 py-1.5 rounded-md bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] text-xs font-semibold text-[#0f172a] transition-colors"
                  >
                    Investigate
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
