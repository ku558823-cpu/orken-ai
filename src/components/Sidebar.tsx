import React from 'react';
import {
  LayoutDashboard,
  Search,
  Users2,
  ShieldAlert,
  Bell,
  RefreshCw,
  Globe,
  ChevronDown,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { DomainProfile } from '../data/mockData';

interface SidebarProps {
  currentView: string;
  onSelectView: (view: string) => void;
  domains: DomainProfile[];
  activeDomain: DomainProfile;
  onSelectDomain: (domain: DomainProfile) => void;
  unreadAlertCount: number;
  onOpenAddDomain: () => void;
  onTriggerCrawl: () => void;
  isCrawling: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onSelectView,
  domains,
  activeDomain,
  onSelectDomain,
  unreadAlertCount,
  onOpenAddDomain,
  onTriggerCrawl,
  isCrawling,
}) => {
  const [domainDropdownOpen, setDomainDropdownOpen] = React.useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'keywords', label: 'Keywords (SERP)', icon: Search },
    { id: 'competitors', label: 'Competitors', icon: Users2 },
    { id: 'audits', label: 'Site Audits', icon: ShieldAlert },
    { id: 'alerts', label: 'Anomaly Alerts', icon: Bell, badge: unreadAlertCount },
  ];

  return (
    <aside className="w-[260px] h-screen bg-white border-r border-[#e2e8f0] flex flex-col shrink-0 select-none z-30 sticky top-0">
      {/* Brand Header */}
      <div className="px-5 py-4 border-b border-[#e2e8f0] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#4f46e5] flex items-center justify-center text-white shadow-sm font-bold text-sm tracking-tight">
            AI
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold tracking-tight text-[#0f172a] leading-tight">
              AI Web Intel
            </span>
            <span className="text-[11px] font-medium text-[#64748b] tracking-wider uppercase">
              SERP Intelligence
            </span>
          </div>
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-[#4f46e5] bg-[#eef2ff] border border-[#c7d2fe] px-1.5 py-0.5 rounded">
          PRO
        </span>
      </div>

      {/* Domain Selector Dropdown */}
      <div className="p-3 border-b border-[#e2e8f0] relative">
        <div className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-1.5 px-1">
          Active Property
        </div>
        <button
          onClick={() => setDomainDropdownOpen(!domainDropdownOpen)}
          className="w-full flex items-center justify-between px-2.5 py-2 rounded-md bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] transition-colors text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Globe className="w-4 h-4 text-[#4f46e5] shrink-0" />
            <div className="truncate">
              <div className="text-[13px] font-semibold text-[#0f172a] truncate">
                {activeDomain.domain}
              </div>
              <div className="text-[11px] text-[#64748b] truncate">
                {activeDomain.name}
              </div>
            </div>
          </div>
          <ChevronDown
            className={`w-3.5 h-3.5 text-[#64748b] shrink-0 transition-transform ${
              domainDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {domainDropdownOpen && (
          <div className="absolute left-3 right-3 top-full mt-1 bg-white border border-[#e2e8f0] rounded-md shadow-lg z-50 py-1">
            <div className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wider px-3 py-1.5 border-b border-[#f1f5f9]">
              Switch Property
            </div>
            {domains.map((dom) => (
              <button
                key={dom.id}
                onClick={() => {
                  onSelectDomain(dom);
                  setDomainDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-[13px] flex items-center justify-between hover:bg-[#f8fafc] transition-colors ${
                  dom.id === activeDomain.id
                    ? 'bg-[#eef2ff] text-[#4f46e5] font-semibold'
                    : 'text-[#0f172a]'
                }`}
              >
                <div className="truncate">
                  <div className="truncate font-medium">{dom.domain}</div>
                  <div className="text-[11px] text-[#64748b]">{dom.organicTraffic} visits</div>
                </div>
                {dom.id === activeDomain.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] shrink-0" />
                )}
              </button>
            ))}
            <div className="border-t border-[#f1f5f9] p-1.5">
              <button
                onClick={() => {
                  setDomainDropdownOpen(false);
                  onOpenAddDomain();
                }}
                className="w-full text-center py-1.5 text-[12px] font-medium text-[#4f46e5] hover:bg-[#eef2ff] rounded transition-colors"
              >
                + Track New Domain
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider mb-2 px-2">
          Analytics & Intel
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectView(item.id)}
              className={`w-full flex items-center justify-between px-3 h-[38px] rounded-md text-[13.5px] font-medium transition-colors ${
                isActive
                  ? 'bg-[#eef2ff] text-[#4f46e5] font-semibold shadow-xs'
                  : 'text-[#475569] hover:bg-[#f8fafc] hover:text-[#0f172a]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-[#4f46e5]' : 'text-[#64748b]'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-[#ef4444] text-white tabular-nums">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Crawler Status Box */}
      <div className="p-3 mx-3 mb-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-md">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                isCrawling ? 'bg-[#f59e0b] animate-ping' : 'bg-[#10b981]'
              }`}
            />
            <span className="text-[11px] font-semibold text-[#0f172a] uppercase tracking-wider">
              {isCrawling ? 'Crawling SERP...' : 'Crawler Active'}
            </span>
          </div>
          <button
            onClick={onTriggerCrawl}
            disabled={isCrawling}
            title="Trigger instant SERP re-crawl"
            className="p-1 hover:bg-[#e2e8f0] rounded text-[#64748b] hover:text-[#0f172a] transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${isCrawling ? 'animate-spin text-[#4f46e5]' : ''}`}
            />
          </button>
        </div>
        <p className="text-[11.5px] text-[#64748b] leading-relaxed">
          Daily SERP scan & AI Overview extraction refreshed 14m ago.
        </p>
      </div>

      {/* User Profile Bar */}
      <div className="p-3 border-t border-[#e2e8f0] flex items-center justify-between bg-white">
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="/src/assets/images/avatar_seo_analyst_1793372212036.jpg"
            alt="Elena Rostova"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-full object-cover border border-[#e2e8f0] shrink-0"
          />
          <div className="truncate">
            <div className="text-[13px] font-semibold text-[#0f172a] truncate">
              Elena Rostova
            </div>
            <div className="text-[11px] text-[#64748b] truncate">
              Lead Growth Strategist
            </div>
          </div>
        </div>
        <div className="text-[10px] font-bold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-1.5 py-0.5 rounded">
          ACTIVE
        </div>
      </div>
    </aside>
  );
};
