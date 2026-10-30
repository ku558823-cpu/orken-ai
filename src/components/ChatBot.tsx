import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ShieldCheck,
  Bot,
  User,
  ChevronDown,
  RotateCcw,
  ExternalLink,
  ShieldAlert,
  Sliders,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'assistant' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: { label: string; action: () => void }[];
}

interface ChatBotProps {
  onNavigateSection?: (sectionId: string) => void;
  onOpenDashboard?: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({
  onNavigateSection,
  onOpenDashboard,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: `Hello! I'm your **ORKEN AI Governance Copilot**. I can help you evaluate your AI systems against **ISO 42001**, prepare for the **EU AI Act**, prevent **excessive agent permissions**, or address the **6-in-10 unverified data gap**.\n\nHow can I assist your organization today?`,
      timestamp: 'Just now',
    },
  ]);

  const quickPrompts = [
    'How do we prepare for EU AI Act?',
    'What is ISO 42001 certification?',
    'Explain the 6-in-10 data risk gap',
    'How to stop AI agent permission inheritance?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  // Robust knowledge fallback in case server API key is not present or offline
  const getFallbackGovernanceResponse = (prompt: string): string => {
    const p = prompt.toLowerCase();
    if (p.includes('eu ai act') || p.includes('eu act') || p.includes('regulation')) {
      return `### EU AI Act Compliance Strategy\n\nThe **EU AI Act** enforces strict tiered regulatory obligations based on risk categories:\n\n1. **Unacceptable Risk (Prohibited):** Cognitive behavioral manipulation, biometric categorization of sensitive traits, and social scoring are banned.\n2. **High-Risk AI Systems:** Enterprise models used in HR hiring, critical infrastructure, credit scoring, and law enforcement require:\n   - Mandatory risk management system throughout lifecycle\n   - High-quality training datasets with bias mitigation\n   - Comprehensive technical documentation & automated activity logging\n   - Human-in-the-loop oversight mechanisms\n3. **General-Purpose AI (GPAI):** Models like LLMs must disclose training data summaries and comply with EU copyright rules.\n\n**ORKEN Action:** Our automated Compliance Engine generates EU AI Act audit reports and maps 24/24 of your internal models against these categories.`;
    }
    if (p.includes('iso 42001') || p.includes('iso') || p.includes('aims')) {
      return `### ISO/IEC 42001 Overview\n\n**ISO/IEC 42001:2023** is the world's first certifiable standard for **Artificial Intelligence Management Systems (AIMS)**.\n\nKey pillars include:\n- **Clause 4–10 Requirements:** Leadership commitment, risk assessment methodology, AI impact assessments (AIIA), and continuous monitoring.\n- **Annex A Controls:** 38 specific controls covering data acquisition, model traceability, adversarial testing, and third-party AI supplier risk.\n\n**Next Steps:** ORKEN provides pre-built ISO 42001 policy templates, continuous evidence collection, and automated gap analyses so your auditors can verify compliance in days instead of months.`;
    }
    if (p.includes('6 in 10') || p.includes('6-in-10') || p.includes('data risk') || p.includes('uncertainty')) {
      return `### Addressing the 6-in-10 Data Risk Gap\n\nIndependent research shows that **6 out of 10 enterprises lack proper data management practices** or have zero visibility into whether their sensitive corporate data is exposed to AI agents.\n\n**The Threat:**\nWhen Microsoft 365 Copilot or custom generative agents index enterprise data, they inherit user permissions. If access controls are overly permissive, an AI tool can surface confidential salaries, M&A strategy, or health records to non-authorized staff.\n\n**The ORKEN Solution:**\n- In-line PII & secret token redaction before prompts reach LLMs\n- Strict Least-Privilege & Privileged Identity Management (PIM)\n- Data classification tagging (Confidential, Restricted, Public) synchronized with your AI firewalls.`;
    }
    if (p.includes('agent') || p.includes('copilot') || p.includes('permission') || p.includes('inheritance')) {
      return `### Preventing Excessive AI Agent Permissions\n\nAutonomous AI agents and LLM Copilots present a major threat vector called **Privilege Creep**.\n\n**Key Guardrails in ORKEN:**\n1. **Conditional Access Policies:** Require multi-factor authentication (MFA) and compliant device checks before an agent accesses internal databases.\n2. **Zero Trust Session Inspection:** Every agent tool call is validated against a strict behavioral allowlist.\n3. **Contextual PII Masking:** Dynamic scrubbing of SSNs, API keys, and customer data before sending inputs to inference endpoints.\n4. **Revocable Agent Tokens:** Time-bounded scoped tokens that automatically expire if an anomaly or prompt injection attempt is detected.`;
    }
    return `### ORKEN Enterprise AI Governance\n\nThank you for your question regarding **"${prompt}"**.\n\nOur platform integrates **governed identity**, **continuous security monitoring**, and **automated regulatory compliance** into a unified pane of glass:\n\n- **Continuous AI Telemetry:** 24 active systems currently monitored with a 98% compliance score and 0 critical vulnerabilities.\n- **Real-Time Guardrails:** Automated prompt injection filtering, data loss prevention (DLP), and toxic output suppression.\n- **Framework Alignment:** ISO/IEC 42001, EU AI Act, NIST AI RMF, and SOC 2 Type II.\n\nYou can also launch our interactive **AI Readiness Assessment** or inspect the live **Enterprise Governance Dashboard** to review your models in real time.`;
  };

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call server endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.text,
          history: messages.map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.text || getFallbackGovernanceResponse(userMessage.text);

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      // Graceful fallback to rich enterprise AI governance intelligence
      const fallbackReply = getFallbackGovernanceResponse(userMessage.text);
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: fallbackReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        text: `Conversation cleared. I am ready to help you analyze AI risks, review compliance checklists, or configure enterprise guardrails. What would you like to explore?`,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating launcher trigger matching screenshot theme */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 mr-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-slate-200/80 animate-fade-in text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ORKEN AI Copilot</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close AI Governance Chat' : 'Open AI Governance Chat'}
          className="relative group p-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-blue-500/30 cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full"></span>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] max-h-[640px] h-[82vh] bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="ORKEN AI Governance Copilot"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md border border-white/10">
                <Sparkles className="w-5 h-5 text-blue-100" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-white tracking-wide">
                    ORKEN AI Copilot
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-300 border border-blue-400/20">
                    Gemini 3.8
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Enterprise Governance Advisor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart Conversation"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize Chat"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Context Bar */}
          <div className="bg-slate-50 border-b border-slate-100 px-3.5 py-2 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-medium text-slate-700">ISO 42001 & EU AI Act Ready</span>
            </div>
            {onOpenDashboard && (
              <button
                onClick={onOpenDashboard}
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 text-[11px] hover:underline cursor-pointer"
              >
                Open Dashboard <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm relative group ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/80 shadow-sm'
                  }`}
                >
                  {/* Markdown-style formatting */}
                  <div className="space-y-2 whitespace-pre-wrap leading-relaxed">
                    {msg.text.split('\n\n').map((paragraph, pIdx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h4 key={pIdx} className="font-bold text-slate-900 border-b border-slate-100 pb-1 text-xs uppercase tracking-wider text-blue-700">
                            {paragraph.replace('### ', '')}
                          </h4>
                        );
                      }
                      return (
                        <p key={pIdx}>
                          {paragraph.split('**').map((chunk, cIdx) =>
                            cIdx % 2 === 1 ? (
                              <strong key={cIdx} className={msg.role === 'user' ? 'font-bold' : 'font-semibold text-slate-900'}>
                                {chunk}
                              </strong>
                            ) : (
                              chunk
                            )
                          )}
                        </p>
                      );
                    })}
                  </div>

                  {/* Message footer with timestamp and copy button */}
                  <div
                    className={`mt-2 flex items-center justify-between text-[10px] ${
                      msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {msg.role === 'assistant' && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 hover:text-slate-700 cursor-pointer flex items-center gap-1"
                        title="Copy response"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200/80 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Analyzing governance matrix...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Prompts Pills */}
          <div className="bg-white border-t border-slate-100 px-3 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="shrink-0 text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 px-2.5 py-1.5 rounded-full border border-slate-200 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about ISO 42001, EU AI Act, risk guardrails..."
              disabled={isLoading}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:hover:bg-blue-600 transition-colors shadow-sm cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Disclaimer footer */}
          <div className="bg-slate-50 px-4 py-1.5 text-center text-[10px] text-slate-400 border-t border-slate-100">
            Powered by ORKEN Enterprise Security & Gemini 3.8 Flash. Continuous monitoring active.
          </div>
        </div>
      )}
    </>
  );
};
