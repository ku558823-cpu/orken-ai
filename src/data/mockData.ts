export interface KeywordItem {
  id: string;
  keyword: string;
  url: string;
  intent: 'Informational' | 'Commercial' | 'Transactional' | 'Navigational';
  currentRank: number;
  previousRank: number;
  searchVolume: number;
  difficulty: number; // 0-100
  cpc: number;
  estimatedTraffic: number;
  serpFeatures: ('ai_overview' | 'snippet' | 'paa' | 'sitelinks' | 'local_pack')[];
  aiOverviewStatus: 'Cited (Top 1)' | 'Cited (Top 3)' | 'Not Cited' | 'No AI Overview';
  aiOverviewSnippet?: string;
  device: 'desktop' | 'mobile';
  lastCrawled: string;
  rankHistory: { date: string; rank: number }[];
  topCompetitors: { domain: string; rank: number; title: string }[];
}

export interface DomainProfile {
  id: string;
  domain: string;
  name: string;
  organicTraffic: string;
  trafficDelta: number;
  avgPosition: number;
  posDelta: number;
  trackedKeywordsCount: number;
  keywordsDelta: number;
  healthScore: number;
  healthDelta: number;
  aiVisibilityScore: number;
  aiVisibilityDelta: number;
}

export interface AuditIssue {
  id: string;
  title: string;
  category: 'Indexability' | 'Links & Redirects' | 'Core Web Vitals' | 'Schema & Meta';
  severity: 'critical' | 'warning' | 'notice';
  affectedCount: number;
  impactScore: 'High' | 'Medium' | 'Low';
  description: string;
  suggestedFix: string;
  status: 'open' | 'fixed' | 'ignored';
  sampleUrls: string[];
}

export interface CompetitorData {
  id: string;
  domain: string;
  name: string;
  isSelf?: boolean;
  marketShare: number;
  domainAuthority: number;
  organicTrafficMonthly: string;
  sharedKeywords: number;
  aiVisibilityRate: number;
  avgRank: number;
  topWinningKeywords: string[];
}

export interface AnomalyAlert {
  id: string;
  title: string;
  type: 'rank_drop' | 'ai_overview_gain' | 'algorithm_fluctuation' | 'competitor_move' | 'crawl_error';
  severity: 'critical' | 'warning' | 'opportunity';
  timestamp: string;
  details: string;
  metricChange?: string;
  affectedKeywordOrUrl?: string;
  read: boolean;
}

export const INITIAL_DOMAINS: DomainProfile[] = [
  {
    id: 'acme-cloud',
    domain: 'acme-cloud.io',
    name: 'Acme Cloud Platform',
    organicTraffic: '1,428,500',
    trafficDelta: 12.4,
    avgPosition: 8.4,
    posDelta: 2.1,
    trackedKeywordsCount: 14820,
    keywordsDelta: 340,
    healthScore: 94,
    healthDelta: 1.8,
    aiVisibilityScore: 78.2,
    aiVisibilityDelta: 6.5,
  },
  {
    id: 'fintech-flow',
    domain: 'fintech-flow.com',
    name: 'Fintech Flow Systems',
    organicTraffic: '864,200',
    trafficDelta: 8.1,
    avgPosition: 11.2,
    posDelta: 0.9,
    trackedKeywordsCount: 9240,
    keywordsDelta: 180,
    healthScore: 91,
    healthDelta: -0.4,
    aiVisibilityScore: 64.0,
    aiVisibilityDelta: 3.2,
  },
  {
    id: 'nordic-health',
    domain: 'nordic-health.co',
    name: 'Nordic Health Tech',
    organicTraffic: '512,900',
    trafficDelta: -2.3,
    avgPosition: 14.6,
    posDelta: -1.2,
    trackedKeywordsCount: 5600,
    keywordsDelta: -65,
    healthScore: 88,
    healthDelta: -1.5,
    aiVisibilityScore: 52.8,
    aiVisibilityDelta: -1.8,
  },
];

export const INITIAL_KEYWORDS: KeywordItem[] = [
  {
    id: 'kw-1',
    keyword: 'enterprise cloud security architecture',
    url: 'https://acme-cloud.io/solutions/enterprise-security',
    intent: 'Commercial',
    currentRank: 2,
    previousRank: 5,
    searchVolume: 49500,
    difficulty: 74,
    cpc: 14.2,
    estimatedTraffic: 14200,
    serpFeatures: ['ai_overview', 'snippet', 'paa', 'sitelinks'],
    aiOverviewStatus: 'Cited (Top 1)',
    aiOverviewSnippet: 'Acme Cloud Enterprise Architecture provides zero-trust identity isolation, cryptographically verified microsegmentation, and real-time posture reporting across multi-region VPC topologies.',
    device: 'desktop',
    lastCrawled: '14 mins ago',
    rankHistory: [
      { date: 'Oct 01', rank: 8 },
      { date: 'Oct 07', rank: 7 },
      { date: 'Oct 14', rank: 5 },
      { date: 'Oct 21', rank: 4 },
      { date: 'Oct 28', rank: 2 },
    ],
    topCompetitors: [
      { domain: 'datadog-suite.com', rank: 1, title: 'Cloud Security Platform & CSPM Overview' },
      { domain: 'acme-cloud.io', rank: 2, title: 'Enterprise Cloud Security Architecture | Acme' },
      { domain: 'paloaltonetworks.com', rank: 3, title: 'Prisma Cloud Framework Guide' },
      { domain: 'splunk-analytics.com', rank: 4, title: 'Modern Hybrid Cloud SOC Playbook' },
    ],
  },
  {
    id: 'kw-2',
    keyword: 'kubernetes cluster cost optimization',
    url: 'https://acme-cloud.io/blog/kubernetes-cost-optimization-guide',
    intent: 'Informational',
    currentRank: 3,
    previousRank: 6,
    searchVolume: 33100,
    difficulty: 62,
    cpc: 9.8,
    estimatedTraffic: 8900,
    serpFeatures: ['ai_overview', 'snippet', 'paa'],
    aiOverviewStatus: 'Cited (Top 3)',
    aiOverviewSnippet: 'Techniques for scaling down idle nodes, rightsizing pod resource limits with VPA, and leveraging spot instances with graceful drain mechanisms.',
    device: 'desktop',
    lastCrawled: '28 mins ago',
    rankHistory: [
      { date: 'Oct 01', rank: 11 },
      { date: 'Oct 07', rank: 9 },
      { date: 'Oct 14', rank: 6 },
      { date: 'Oct 21', rank: 5 },
      { date: 'Oct 28', rank: 3 },
    ],
    topCompetitors: [
      { domain: 'cast.ai', rank: 1, title: 'Automated Kubernetes Cost Reduction' },
      { domain: 'kubecost.com', rank: 2, title: 'Kubernetes Spend Visibility Engine' },
      { domain: 'acme-cloud.io', rank: 3, title: 'Kubernetes Cluster Cost Optimization Guide' },
    ],
  },
  {
    id: 'kw-3',
    keyword: 'multi-region db sync latency benchmarks',
    url: 'https://acme-cloud.io/benchmarks/multi-region-database',
    intent: 'Commercial',
    currentRank: 1,
    previousRank: 1,
    searchVolume: 18400,
    difficulty: 58,
    cpc: 11.5,
    estimatedTraffic: 9400,
    serpFeatures: ['ai_overview', 'snippet', 'sitelinks'],
    aiOverviewStatus: 'Cited (Top 1)',
    aiOverviewSnippet: 'Acme Cloud achieved sub-15ms p99 cross-continental active-active state replication utilizing raft consensus over dedicated private fiber backbone links.',
    device: 'desktop',
    lastCrawled: '1 hour ago',
    rankHistory: [
      { date: 'Oct 01', rank: 2 },
      { date: 'Oct 07', rank: 1 },
      { date: 'Oct 14', rank: 1 },
      { date: 'Oct 21', rank: 1 },
      { date: 'Oct 28', rank: 1 },
    ],
    topCompetitors: [
      { domain: 'acme-cloud.io', rank: 1, title: '2026 Multi-Region DB Latency Benchmark Report' },
      { domain: 'cockroachlabs.com', rank: 2, title: 'Global Database Latency & Survivability' },
      { domain: 'aws.amazon.com', rank: 3, title: 'Aurora Global Database Performance Review' },
    ],
  },
  {
    id: 'kw-4',
    keyword: 'zero trust api gateway pricing',
    url: 'https://acme-cloud.io/pricing/api-gateway',
    intent: 'Transactional',
    currentRank: 4,
    previousRank: 2,
    searchVolume: 22000,
    difficulty: 69,
    cpc: 18.4,
    estimatedTraffic: 4100,
    serpFeatures: ['snippet', 'paa'],
    aiOverviewStatus: 'Not Cited',
    device: 'desktop',
    lastCrawled: '2 hours ago',
    rankHistory: [
      { date: 'Oct 01', rank: 2 },
      { date: 'Oct 07', rank: 2 },
      { date: 'Oct 14', rank: 2 },
      { date: 'Oct 21', rank: 3 },
      { date: 'Oct 28', rank: 4 },
    ],
    topCompetitors: [
      { domain: 'cloudflare.com', rank: 1, title: 'Cloudflare API Shield & Zero Trust Pricing' },
      { domain: 'konghq.com', rank: 2, title: 'Kong Enterprise Gateway Tiers' },
      { domain: 'konghq.com', rank: 3, title: 'Kong Konnect Pricing Model' },
      { domain: 'acme-cloud.io', rank: 4, title: 'Zero Trust API Gateway Pricing | Transparent Plans' },
    ],
  },
  {
    id: 'kw-5',
    keyword: 'ai agent orchestration serverless runtime',
    url: 'https://acme-cloud.io/products/agent-runtime',
    intent: 'Commercial',
    currentRank: 1,
    previousRank: 4,
    searchVolume: 41200,
    difficulty: 81,
    cpc: 22.0,
    estimatedTraffic: 18800,
    serpFeatures: ['ai_overview', 'snippet', 'paa', 'sitelinks'],
    aiOverviewStatus: 'Cited (Top 1)',
    aiOverviewSnippet: 'Serverless execution runtimes like Acme Agent Runtime isolate autonomous AI workloads with sub-50ms cold starts, sandboxed WebAssembly execution, and built-in vector memory persistence.',
    device: 'desktop',
    lastCrawled: '45 mins ago',
    rankHistory: [
      { date: 'Oct 01', rank: 9 },
      { date: 'Oct 07', rank: 7 },
      { date: 'Oct 14', rank: 4 },
      { date: 'Oct 21', rank: 2 },
      { date: 'Oct 28', rank: 1 },
    ],
    topCompetitors: [
      { domain: 'acme-cloud.io', rank: 1, title: 'Autonomous AI Agent Serverless Runtime — Acme' },
      { domain: 'modal.com', rank: 2, title: 'Serverless Cloud for AI Developers' },
      { domain: 'replicate.com', rank: 3, title: 'Run Open-Source AI with an API' },
    ],
  },
  {
    id: 'kw-6',
    keyword: 'open telemetry distributed tracing collector',
    url: 'https://acme-cloud.io/docs/telemetry-collector',
    intent: 'Informational',
    currentRank: 6,
    previousRank: 8,
    searchVolume: 27500,
    difficulty: 54,
    cpc: 7.6,
    estimatedTraffic: 3900,
    serpFeatures: ['snippet', 'paa'],
    aiOverviewStatus: 'Cited (Top 3)',
    aiOverviewSnippet: 'OpenTelemetry collector deployment patterns using daemonsets vs gateway deployments for sampling high-throughput span pipelines.',
    device: 'desktop',
    lastCrawled: '3 hours ago',
    rankHistory: [
      { date: 'Oct 01', rank: 12 },
      { date: 'Oct 07', rank: 10 },
      { date: 'Oct 14', rank: 8 },
      { date: 'Oct 21', rank: 7 },
      { date: 'Oct 28', rank: 6 },
    ],
    topCompetitors: [
      { domain: 'opentelemetry.io', rank: 1, title: 'OpenTelemetry Collector Documentation' },
      { domain: 'dynatrace-pro.io', rank: 2, title: 'Full-Stack Distributed Tracing at Scale' },
      { domain: 'datadog-suite.com', rank: 3, title: 'APM Distributed Tracing Platform' },
      { domain: 'acme-cloud.io', rank: 6, title: 'Configuring OpenTelemetry Collector Pipelines' },
    ],
  },
  {
    id: 'kw-7',
    keyword: 'automated compliance soc2 type 2 cloud',
    url: 'https://acme-cloud.io/compliance/soc2',
    intent: 'Transactional',
    currentRank: 5,
    previousRank: 9,
    searchVolume: 16800,
    difficulty: 72,
    cpc: 28.5,
    estimatedTraffic: 2900,
    serpFeatures: ['ai_overview', 'paa'],
    aiOverviewStatus: 'Cited (Top 3)',
    device: 'desktop',
    lastCrawled: '4 hours ago',
    rankHistory: [
      { date: 'Oct 01', rank: 14 },
      { date: 'Oct 07', rank: 11 },
      { date: 'Oct 14', rank: 9 },
      { date: 'Oct 21', rank: 7 },
      { date: 'Oct 28', rank: 5 },
    ],
    topCompetitors: [
      { domain: 'vanta.com', rank: 1, title: 'Automated SOC 2 Compliance Platform' },
      { domain: 'drata.com', rank: 2, title: 'Continuous SOC 2 Audit Readiness' },
      { domain: 'acme-cloud.io', rank: 5, title: 'Automated Continuous SOC 2 Type II Evidence' },
    ],
  },
  {
    id: 'kw-8',
    keyword: 'acme cloud console login',
    url: 'https://acme-cloud.io/login',
    intent: 'Navigational',
    currentRank: 1,
    previousRank: 1,
    searchVolume: 62000,
    difficulty: 18,
    cpc: 1.2,
    estimatedTraffic: 48000,
    serpFeatures: ['sitelinks'],
    aiOverviewStatus: 'No AI Overview',
    device: 'desktop',
    lastCrawled: '30 mins ago',
    rankHistory: [
      { date: 'Oct 01', rank: 1 },
      { date: 'Oct 07', rank: 1 },
      { date: 'Oct 14', rank: 1 },
      { date: 'Oct 21', rank: 1 },
      { date: 'Oct 28', rank: 1 },
    ],
    topCompetitors: [
      { domain: 'acme-cloud.io', rank: 1, title: 'Sign In to Acme Cloud Management Console' },
    ],
  },
];

export const INITIAL_AUDIT_ISSUES: AuditIssue[] = [
  {
    id: 'issue-1',
    title: '404 Broken links from high-authority documentation pages',
    category: 'Links & Redirects',
    severity: 'critical',
    affectedCount: 142,
    impactScore: 'High',
    description: 'Internal documentation cross-references link to deprecated /v1/ routes yielding hard 404 responses, bleeding link equity.',
    suggestedFix: 'Implement wildcard 301 redirects from /docs/v1/* to corresponding /docs/v2/* canonical URLs.',
    status: 'open',
    sampleUrls: [
      'https://acme-cloud.io/docs/v1/clusters/ingress-setup',
      'https://acme-cloud.io/docs/v1/auth/sso-saml',
      'https://acme-cloud.io/docs/v1/billing/quotas',
    ],
  },
  {
    id: 'issue-2',
    title: 'Missing Schema.org TechArticle & SoftwareApplication structured data',
    category: 'Schema & Meta',
    severity: 'warning',
    affectedCount: 88,
    impactScore: 'High',
    description: 'Product pages lack structured JSON-LD specifications, limiting Google Rich Results eligibility and AI Overview knowledge extraction.',
    suggestedFix: 'Inject Schema.org @context with SoftwareApplication schema including aggregateRating, operatingSystem, and applicationCategory.',
    status: 'open',
    sampleUrls: [
      'https://acme-cloud.io/products/agent-runtime',
      'https://acme-cloud.io/products/zero-trust-mesh',
    ],
  },
  {
    id: 'issue-3',
    title: 'Largest Contentful Paint (LCP) exceeds 2.5s on mobile landing pages',
    category: 'Core Web Vitals',
    severity: 'warning',
    affectedCount: 46,
    impactScore: 'Medium',
    description: 'Hero background video poster images are uncompressed AVIF files loaded with priority low, degrading mobile Core Web Vitals to 3.1s.',
    suggestedFix: 'Preload hero poster with fetchpriority="high", responsive srcset, and webp fallbacks under 120KB.',
    status: 'open',
    sampleUrls: [
      'https://acme-cloud.io/solutions/fintech',
      'https://acme-cloud.io/solutions/healthcare',
    ],
  },
  {
    id: 'issue-4',
    title: 'Self-referencing canonical tag missing or pointing to HTTP insecure origin',
    category: 'Indexability',
    severity: 'critical',
    affectedCount: 29,
    impactScore: 'High',
    description: 'Staging sync deployed pages with http:// canonical targets, risking indexation duplication between HTTP and HTTPS endpoints.',
    suggestedFix: 'Enforce protocol-relative or strict https:// canonical origin generation on the root SSR layout.',
    status: 'open',
    sampleUrls: [
      'https://acme-cloud.io/blog/scaling-kafka-partitions',
      'https://acme-cloud.io/blog/distributed-consensus-deep-dive',
    ],
  },
  {
    id: 'issue-5',
    title: 'Duplicate title tags across paginated blog archive categories',
    category: 'Schema & Meta',
    severity: 'notice',
    affectedCount: 64,
    impactScore: 'Low',
    description: 'Pages 2 through 6 of blog category archives reuse identical <title> strings without appending page numbers.',
    suggestedFix: 'Dynamically append " - Page {n}" to archive document titles to avoid title collision warnings.',
    status: 'open',
    sampleUrls: [
      'https://acme-cloud.io/blog/category/engineering?page=2',
      'https://acme-cloud.io/blog/category/security?page=2',
    ],
  },
];

export const INITIAL_COMPETITORS: CompetitorData[] = [
  {
    id: 'comp-self',
    domain: 'acme-cloud.io',
    name: 'Acme Cloud (You)',
    isSelf: true,
    marketShare: 34.2,
    domainAuthority: 78,
    organicTrafficMonthly: '1.42M',
    sharedKeywords: 14820,
    aiVisibilityRate: 78.2,
    avgRank: 8.4,
    topWinningKeywords: ['enterprise cloud security', 'ai agent orchestration', 'multi-region db sync'],
  },
  {
    id: 'comp-1',
    domain: 'datadog-suite.com',
    name: 'Datadog Suite',
    marketShare: 29.5,
    domainAuthority: 84,
    organicTrafficMonthly: '2.15M',
    sharedKeywords: 8940,
    aiVisibilityRate: 74.0,
    avgRank: 7.1,
    topWinningKeywords: ['cloud observability platform', 'apm distributed tracing', 'cspm compliance'],
  },
  {
    id: 'comp-2',
    domain: 'dynatrace-pro.io',
    name: 'Dynatrace Pro',
    marketShare: 21.8,
    domainAuthority: 81,
    organicTrafficMonthly: '1.20M',
    sharedKeywords: 6720,
    aiVisibilityRate: 61.5,
    avgRank: 9.8,
    topWinningKeywords: ['full stack monitoring', 'kubernetes ai troubleshooting', 'runtime security'],
  },
  {
    id: 'comp-3',
    domain: 'splunk-analytics.com',
    name: 'Splunk Analytics',
    marketShare: 14.5,
    domainAuthority: 86,
    organicTrafficMonthly: '1.85M',
    sharedKeywords: 5410,
    aiVisibilityRate: 53.4,
    avgRank: 10.4,
    topWinningKeywords: ['security information event management', 'log aggregation index', 'hybrid soc'],
  },
];

export const INITIAL_ALERTS: AnomalyAlert[] = [
  {
    id: 'alt-1',
    title: 'Google AI Overview Citation Captured',
    type: 'ai_overview_gain',
    severity: 'opportunity',
    timestamp: '18 minutes ago',
    details: 'Acme Cloud is now cited as the #1 primary source snippet for "ai agent orchestration serverless runtime" (+18,800 monthly estimated traffic).',
    metricChange: '+18.8K est. visits',
    affectedKeywordOrUrl: 'ai agent orchestration serverless runtime',
    read: false,
  },
  {
    id: 'alt-2',
    title: 'High SERP Volatility Alert (Score 7.8/10)',
    type: 'algorithm_fluctuation',
    severity: 'warning',
    timestamp: '1 hour ago',
    details: 'Global Google search volatility spiked across Cloud & Infrastructure sector. 14 of your tracked keywords shifted >3 positions.',
    metricChange: 'Volatility: 7.8/10',
    read: false,
  },
  {
    id: 'alt-3',
    title: 'Ranking Drop on Commercial High-Intent Keyword',
    type: 'rank_drop',
    severity: 'critical',
    timestamp: '2 hours ago',
    details: 'Dropped from #2 to #4 on "zero trust api gateway pricing". Competitor Cloudflare published updated comparison page outranking your tier table.',
    metricChange: '-2 positions (#2 → #4)',
    affectedKeywordOrUrl: 'zero trust api gateway pricing',
    read: false,
  },
  {
    id: 'alt-4',
    title: 'Competitor Launched 12 Targeting Comparison Pages',
    type: 'competitor_move',
    severity: 'warning',
    timestamp: '5 hours ago',
    details: 'Datadog Suite deployed 12 new landing pages matching "Acme Cloud alternative" and "Acme vs Datadog" search queries.',
    metricChange: '12 new SERP pages',
    affectedKeywordOrUrl: 'acme vs datadog comparison',
    read: true,
  },
  {
    id: 'alt-5',
    title: 'Crawl Anomaly: 142 Documentation 404s Detected',
    type: 'crawl_error',
    severity: 'critical',
    timestamp: 'Yesterday at 16:30',
    details: 'Site crawl identified 142 broken internal cross-links from top-level /docs guides to outdated /v1/ URLs.',
    metricChange: '142 broken links',
    affectedKeywordOrUrl: 'https://acme-cloud.io/docs/v1/*',
    read: true,
  },
];

export const HISTORICAL_CHART_DATA = [
  { date: 'Oct 01', traffic: 1240, rank: 9.6, aiVisibility: 68.4, top3: 42, top10: 184 },
  { date: 'Oct 04', traffic: 1260, rank: 9.4, aiVisibility: 69.1, top3: 44, top10: 188 },
  { date: 'Oct 07', traffic: 1295, rank: 9.1, aiVisibility: 70.8, top3: 48, top10: 195 },
  { date: 'Oct 11', traffic: 1320, rank: 8.9, aiVisibility: 72.0, top3: 51, top10: 202 },
  { date: 'Oct 15', traffic: 1350, rank: 8.8, aiVisibility: 73.5, top3: 54, top10: 210 },
  { date: 'Oct 18', traffic: 1380, rank: 8.6, aiVisibility: 75.2, top3: 58, top10: 219 },
  { date: 'Oct 22', traffic: 1405, rank: 8.5, aiVisibility: 76.9, top3: 61, top10: 226 },
  { date: 'Oct 26', traffic: 1420, rank: 8.4, aiVisibility: 77.8, top3: 64, top10: 232 },
  { date: 'Oct 30', traffic: 1428, rank: 8.4, aiVisibility: 78.2, top3: 66, top10: 238 },
];
