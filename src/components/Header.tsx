import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Bell,
  Sparkles,
  Plus,
  Calendar,
  ChevronDown,
  Download,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import { DomainProfile, AnomalyAlert } from '../data/mockData';

interface HeaderProps {
  currentView: string;
  activeDomain: DomainProfile;
  dateRange: string;
  onDateRangeChange: (range: string) => void;
  onOpenCommandPalette: () => void;
  onOpenAddKeyword: () => void;
  onOpenAiBrief: () => void;
  alerts: AnomalyAlert[];
  onMarkAlertRead: (id: string) => void;
  onViewAlert: (alert: AnomalyAlert) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  activeDomain,
  dateRange,
  onDateRangeChange,
  onOpenCommandPalette,
  onOpenAddKeyword,
  onOpenAiBrief,
  alerts,
  onMarkAlertRead,
  onViewAlert,
}) => {
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [alertsDropdownOpen, setAlertsDropdownOpen] = useState(false);
  const alertsRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const unreadAlerts = alerts.filter((a) => !a.read);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (alertsRef.current && !alertsRef.current.contains(event.target as Node)) {
        setAlertsDropdownOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setDateDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const viewTitles: Record<string, string> = {
    dashboard: 'Executive Overview',
    keywords: 'SERP Rank Tracking & Citations',
    competitors: 'Competitor Intelligence Matrix',
    audits: 'Technical Crawl & Site Health',
    alerts: 'Anomaly & Volatility Radar',
  };

  const dateOptions = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Year to Date'];

  return (
    <header className="h-14 bg-white border-b border-[#e2e8f0] px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left: Breadcrumbs & View Name */}
      <div className="flex items-center gap-2.5 text-sm min-w-0">
        <span className="font-semibold text-[#0f172a] truncate">
          {activeDomain.domain}
        </span>
        <span className="text-[#cbd5e1]">/</span>
        <span className="text-[#475569] font-medium truncate">
          {viewTitles[currentView] || 'Overview'}
        </span>
      </div>

      {/* Middle & Right: Actions & Tools */}
      <div className="flex items-center gap-3">
        {/* Quick Search / Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 h-9 rounded-md bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] text-xs text-[#64748b] transition-colors cursor-pointer"
        >
          <Search className="w-3.5 h-3.5 text-[#64748b]" />
          <span>Quick search or jump...</span>
          <kbd className="ml-2 font-mono text-[10px] bg-white border border-[#cbd5e1] rounded px-1.5 py-0.5 text-[#475569] shadow-2xs">
            ⌘K
          </kbd>
        </button>

        {/* Date Range Selector */}
        <div className="relative" ref={dateRef}>
          <button
            onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
            className="flex items-center gap-2 px-3 h-9 rounded-md bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] text-xs font-medium text-[#0f172a] transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#64748b]" />
            <span>{dateRange}</span>
            <ChevronDown className="w-3 h-3 text-[#64748b]" />
          </button>
          {dateDropdownOpen && (
            <div className="absolute right-0 mt-1 w-40 bg-white border border-[#e2e8f0] rounded-md shadow-lg py-1 z-50">
              {dateOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    onDateRangeChange(opt);
                    setDateDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                    dateRange === opt
                      ? 'bg-[#eef2ff] text-[#4f46e5] font-semibold'
                      : 'text-[#334155] hover:bg-[#f8fafc]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* AI Intelligence Brief CTA */}
        <button
          onClick={onOpenAiBrief}
          className="flex items-center gap-1.5 px-3 h-9 rounded-md bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#4f46e5] border border-[#c7d2fe] text-xs font-semibold transition-colors shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#4f46e5]" />
          <span className="hidden md:inline">AI Executive Brief</span>
          <span className="md:hidden">Brief</span>
        </button>

        {/* Add Keywords Button */}
        <button
          onClick={onOpenAddKeyword}
          className="flex items-center gap-1.5 px-3.5 h-9 rounded-md bg-[#4f46e5] hover:bg-[#4338ca] active:bg-[#3730a3] text-white text-xs font-medium transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">Track Keywords</span>
        </button>

        {/* Notification Bell */}
        <div className="relative" ref={alertsRef}>
          <button
            onClick={() => setAlertsDropdownOpen(!alertsDropdownOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-md border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569] transition-colors relative"
            title="Notifications & Anomalies"
          >
            <Bell className="w-4 h-4" />
            {unreadAlerts.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ef4444] text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                {unreadAlerts.length}
              </span>
            )}
          </button>

          {alertsDropdownOpen && (
            <div className="absolute right-0 mt-1 w-80 bg-white border border-[#e2e8f0] rounded-md shadow-xl py-2 z-50">
              <div className="px-3 py-1.5 border-b border-[#f1f5f9] flex items-center justify-between">
                <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                  SERP Anomaly Radar
                </span>
                <span className="text-[11px] text-[#4f46e5] font-semibold tabular-nums">
                  {unreadAlerts.length} Unread
                </span>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-[#f1f5f9]">
                {alerts.slice(0, 4).map((alert) => (
                  <div
                    key={alert.id}
                    onClick={() => {
                      onMarkAlertRead(alert.id);
                      onViewAlert(alert);
                      setAlertsDropdownOpen(false);
                    }}
                    className={`p-3 hover:bg-[#f8fafc] cursor-pointer transition-colors ${
                      !alert.read ? 'bg-[#fcfaff]' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#0f172a] line-clamp-1">
                        {alert.title}
                      </span>
                      <span className="text-[10px] text-[#64748b] shrink-0">
                        {alert.timestamp}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#475569] line-clamp-2 leading-relaxed mb-1.5">
                      {alert.details}
                    </p>
                    {alert.metricChange && (
                      <span className="inline-block text-[10px] font-semibold text-[#4f46e5] bg-[#eef2ff] px-1.5 py-0.5 rounded">
                        {alert.metricChange}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-3 pt-2 border-t border-[#f1f5f9] text-center">
                <button
                  onClick={() => setAlertsDropdownOpen(false)}
                  className="text-xs text-[#4f46e5] font-medium hover:underline"
                >
                  View All Anomalies →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
