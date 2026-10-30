export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';

export interface AISystem {
  id: string;
  name: string;
  type: 'LLM Chat' | 'Autonomous Agent' | 'RAG Pipeline' | 'Vision Model' | 'Code Assistant';
  provider: string; // e.g., 'OpenAI GPT-4o', 'Anthropic Claude 3.5', 'Llama 3 70B'
  riskLevel: RiskLevel;
  complianceScore: number;
  status: 'Operational' | 'Degraded' | 'Investigating' | 'Suspended';
  requests24h: number;
  lastAudit: string;
  criticalIssuesCount: number;
}

export interface SecurityEvent {
  id: string;
  timestamp: string;
  systemName: string;
  threatType: 'Prompt Injection' | 'PII Leakage Attempt' | 'Jailbreak Attack' | 'Unauthorized Tool Call' | 'Toxicity Spike';
  severity: RiskLevel;
  actionTaken: 'Blocked & Redacted' | 'Quarantined' | 'Flagged for Human Review' | 'Intercepted';
  details: string;
}

export interface ComplianceFramework {
  id: string;
  name: string;
  code: string;
  readinessPercentage: number;
  totalControls: number;
  passedControls: number;
  description: string;
  keyClauses: {
    id: string;
    clause: string;
    title: string;
    status: 'Compliant' | 'In Progress' | 'Action Needed';
    details: string;
  }[];
}

export interface AIPolicyRule {
  id: string;
  title: string;
  category: 'Data Privacy' | 'Model Output' | 'Human-in-the-Loop' | 'Cost & Limits';
  description: string;
  enabled: boolean;
  severity: RiskLevel;
}

export interface ReadinessAnswer {
  questionId: number;
  optionIndex: number;
  score: number;
}
