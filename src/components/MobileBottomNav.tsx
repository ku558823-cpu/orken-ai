import React from 'react';
import {
  LayoutDashboard,
  Search,
  Users2,
  ShieldAlert,
  Bell,
} from 'lucide-react';

interface MobileBottomNavProps {
  currentView: string;
  onSelectView: (view: string) => void;
  unreadAlertCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  onSelectView,
  unreadAlertCount,
}) => {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'keywords', label: 'Keywords', icon: Search },
    { id: 'competitors', label: 'Competitors', icon: Users2 },
    { id: 'audits', label: 'Audits', icon: ShieldAlert },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: unreadAlertCount },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#e2e8f0] px-2 flex items-center justify-around z-30 shadow-lg">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelectView(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-md transition-colors relative min-w-[54px] ${
              isActive ? 'text-[#4f46e5]' : 'text-[#64748b] hover:text-[#0f172a]'
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-[#ef4444] text-white text-[9px] font-bold flex items-center justify-center tabular-nums">
                  {item.badge}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] mt-1 font-medium tracking-tight ${
                isActive ? 'font-bold text-[#4f46e5]' : 'text-[#64748b]'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
