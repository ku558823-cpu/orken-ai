import React, { useState } from 'react';
import { HISTORICAL_CHART_DATA } from '../data/mockData';
import { TrendingUp, Sparkles, Filter, ChevronUp, ChevronDown } from 'lucide-react';

type ChartMetric = 'traffic' | 'rank' | 'aiVisibility' | 'topPositions';

export const PerformanceChart: React.FC = () => {
  const [metric, setMetric] = useState<ChartMetric>('traffic');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const data = HISTORICAL_CHART_DATA;

  // Configuration per metric
  const metricConfigs = {
    traffic: {
      label: 'Organic Traffic',
      unit: 'K visits',
      formatter: (val: number) => `${val.toLocaleString()}K`,
      color: '#4f46e5',
      getValue: (d: (typeof data)[0]) => d.traffic,
      min: 1200,
      max: 1450,
      isInverted: false,
    },
    rank: {
      label: 'Avg SERP Position',
      unit: 'Rank',
      formatter: (val: number) => `#${val.toFixed(1)}`,
      color: '#006c49',
      getValue: (d: (typeof data)[0]) => d.rank,
      min: 8.0,
      max: 10.0,
      isInverted: true, // Lower number is better ranking
    },
    aiVisibility: {
      label: 'AI Search Visibility',
      unit: '% cited in AI Overviews',
      formatter: (val: number) => `${val.toFixed(1)}%`,
      color: '#3525cd',
      getValue: (d: (typeof data)[0]) => d.aiVisibility,
      min: 65,
      max: 82,
      isInverted: false,
    },
    topPositions: {
      label: 'Keywords in Top 3 & Top 10',
      unit: 'keywords',
      formatter: (val: number) => `${val} in Top 3`,
      color: '#4f46e5',
      getValue: (d: (typeof data)[0]) => d.top3,
      min: 35,
      max: 75,
      isInverted: false,
    },
  };

  const config = metricConfigs[metric];
  const chartHeight = 220;
  const chartWidth = 740;
  const paddingX = 40;
  const paddingY = 25;

  const widthUsable = chartWidth - paddingX * 2;
  const heightUsable = chartHeight - paddingY * 2;

  // Compute SVG Points
  const points = data.map((d, i) => {
    const x = paddingX + (i / (data.length - 1)) * widthUsable;
    const rawVal = config.getValue(d);
    let ratio = (rawVal - config.min) / (config.max - config.min);
    if (config.isInverted) {
      // Invert so rank #1 is at top
      ratio = 1 - ratio;
    }
    const y = paddingY + heightUsable - ratio * heightUsable;
    return { x, y, val: rawVal, date: d.date, rawData: d };
  });

  const pathD = points.reduce((acc, curr, idx) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    const prev = points[idx - 1];
    const cpX1 = prev.x + (curr.x - prev.x) / 2;
    const cpY1 = prev.y;
    const cpX2 = prev.x + (curr.x - prev.x) / 2;
    const cpY2 = curr.y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${
    chartHeight - paddingY
  } L ${points[0].x} ${chartHeight - paddingY} Z`;

  const activePoint = hoverIndex !== null ? points[hoverIndex] : points[points.length - 1];

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-md p-6">
      {/* Header with Segmented Mode Switches */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
              Performance Trendline
            </span>
            <span className="text-[10px] font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-1.5 py-0.2 rounded">
              LIVE SERP
            </span>
          </div>
          <div className="flex items-baseline gap-2.5">
            <span className="text-2xl font-bold text-[#0f172a] tabular-nums tracking-tight">
              {config.formatter(activePoint.val)}
            </span>
            <span className="text-xs text-[#64748b]">
              recorded on <strong className="text-[#0f172a] font-semibold">{activePoint.date}</strong>
            </span>
          </div>
        </div>

        {/* Metric Segmented Control Tabs */}
        <div className="flex items-center gap-1 bg-[#f1f5f9] p-1 rounded-md border border-[#e2e8f0] text-xs">
          <button
            onClick={() => setMetric('traffic')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              metric === 'traffic'
                ? 'bg-white text-[#4f46e5] font-semibold shadow-2xs'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Organic Traffic
          </button>
          <button
            onClick={() => setMetric('rank')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              metric === 'rank'
                ? 'bg-white text-[#4f46e5] font-semibold shadow-2xs'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Avg Rank
          </button>
          <button
            onClick={() => setMetric('aiVisibility')}
            className={`px-3 py-1.5 rounded font-medium transition-colors flex items-center gap-1 ${
              metric === 'aiVisibility'
                ? 'bg-white text-[#4f46e5] font-semibold shadow-2xs'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#4f46e5]" />
            AI Visibility
          </button>
          <button
            onClick={() => setMetric('topPositions')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              metric === 'topPositions'
                ? 'bg-white text-[#4f46e5] font-semibold shadow-2xs'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Top 3 / 10
          </button>
        </div>
      </div>

      {/* SVG Chart Canvas */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto min-w-[580px] overflow-visible"
          onMouseLeave={() => setHoverIndex(null)}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
            const y = paddingY + heightUsable * pct;
            return (
              <line
                key={idx}
                x1={paddingX}
                y1={y}
                x2={chartWidth - paddingX}
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Area fill */}
          <path d={areaD} fill="url(#chartGradient)" />

          {/* Primary Trendline */}
          <path
            d={pathD}
            fill="none"
            stroke="#4f46e5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points and interactive hover hitboxes */}
          {points.map((p, idx) => {
            const isHovered = hoverIndex === idx;
            return (
              <g key={idx}>
                {/* Vertical hover guide */}
                {isHovered && (
                  <line
                    x1={p.x}
                    y1={paddingY}
                    x2={p.x}
                    y2={chartHeight - paddingY}
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                )}

                {/* Point circle */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHovered ? 5 : 3.5}
                  fill="#ffffff"
                  stroke="#4f46e5"
                  strokeWidth={isHovered ? 2.5 : 2}
                  className="transition-all"
                />

                {/* Date Label on Bottom Axis */}
                <text
                  x={p.x}
                  y={chartHeight - 6}
                  textAnchor="middle"
                  className="text-[10px] fill-[#64748b] font-medium"
                >
                  {p.date}
                </text>

                {/* Transparent Hover Target */}
                <rect
                  x={p.x - widthUsable / (points.length * 2)}
                  y={0}
                  width={widthUsable / points.length}
                  height={chartHeight}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoverIndex(idx)}
                />
              </g>
            );
          })}

          {/* Floating Tooltip Indicator */}
          {hoverIndex !== null && (
            <g transform={`translate(${points[hoverIndex].x}, ${points[hoverIndex].y - 38})`}>
              <rect
                x="-45"
                y="0"
                width="90"
                height="28"
                rx="4"
                fill="#0f172a"
                className="shadow-md"
              />
              <text
                x="0"
                y="18"
                textAnchor="middle"
                fill="#ffffff"
                className="text-[11px] font-semibold tabular-nums"
              >
                {config.formatter(points[hoverIndex].val)}
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Chart Footer Stats */}
      <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex flex-wrap items-center justify-between text-xs text-[#64748b] gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4f46e5]" />
            <span>Target Domain: <strong className="text-[#0f172a]">acme-cloud.io</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-[#94a3b8]" />
            <span>Comparison Period: Prior 30 Days</span>
          </div>
        </div>
        <div className="text-[11px]">
          Algorithm Confidence: <strong className="text-[#059669]">99.4% SERP Parity</strong>
        </div>
      </div>
    </div>
  );
};
