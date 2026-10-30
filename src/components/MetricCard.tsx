import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  delta: number;
  deltaLabel?: string;
  sparklineData?: number[];
  isInverse?: boolean; // For metrics like Avg Rank where lower is better
  unit?: string;
  kicker?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  delta,
  deltaLabel = 'vs last 30d',
  sparklineData = [35, 42, 38, 55, 48, 62, 58, 70, 78, 85],
  isInverse = false,
  unit,
  kicker,
}) => {
  // Determine if delta is positive improvement
  const isPositive = isInverse ? delta <= 0 : delta >= 0;
  const absDelta = Math.abs(delta);

  // Generate SVG sparkline points
  const minVal = Math.min(...sparklineData);
  const maxVal = Math.max(...sparklineData);
  const range = maxVal - minVal || 1;
  const width = 80;
  const height = 28;

  const points = sparklineData
    .map((val, idx) => {
      const x = (idx / (sparklineData.length - 1)) * width;
      const y = height - ((val - minVal) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(' ');

  const strokeColor = isPositive ? '#10b981' : '#ef4444';

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-md p-5 hover:border-[#cbd5e1] hover:shadow-xs transition-all flex flex-col justify-between">
      {/* Title & Kicker */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider">
          {title}
        </span>
        {kicker && (
          <span className="text-[10.5px] font-medium text-[#4f46e5] bg-[#eef2ff] px-1.5 py-0.5 rounded">
            {kicker}
          </span>
        )}
      </div>

      {/* Main Stat & Delta + Sparkline */}
      <div className="flex items-end justify-between mt-1">
        <div>
          <div className="text-[28px] sm:text-[32px] font-bold tracking-tight text-[#0f172a] tabular-nums leading-none mb-2">
            {value}
            {unit && <span className="text-lg font-medium text-[#64748b] ml-1">{unit}</span>}
          </div>

          {/* Delta Pill */}
          <div className="flex items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[11px] font-semibold tabular-nums ${
                isPositive
                  ? 'bg-[#ecfdf5] text-[#059669]'
                  : 'bg-[#fef2f2] text-[#dc2626]'
              }`}
            >
              {isPositive ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
              <span>{absDelta > 0 ? `${absDelta}%` : '0%'}</span>
            </span>
            <span className="text-[11px] text-[#64748b]">{deltaLabel}</span>
          </div>
        </div>

        {/* Sparkline Graphic */}
        <div className="shrink-0 mb-1">
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className="overflow-visible"
          >
            <polyline
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
