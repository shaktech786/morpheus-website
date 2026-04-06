export const PRICING = {
  /** Pro tier */
  monthly: "$9.99",
  annual: "$99.99",
  annualMonthly: "$8.33",
  lifetime: "$79.99",
  /** Power tier */
  powerMonthly: "$19.99",
  powerAnnual: "$179.99",
  powerAnnualMonthly: "$14.99",
  /** Team tier */
  teamMonthly: "$49.99",
  teamAnnual: "$479.99",
  teamAnnualMonthly: "$39.99",
} as const;

export interface PlanFeature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  team: boolean | string;
}

export const PLAN_FEATURES: PlanFeature[] = [
  { name: "LAN Connection", free: true, pro: true, team: true },
  { name: "Text Commands", free: true, pro: true, team: true },
  { name: "E2E Encryption", free: true, pro: true, team: true },
  { name: "AI Token Packs", free: true, pro: true, team: "Shared Pool" },
  { name: "Paired Devices", free: "1", pro: "Unlimited", team: "Unlimited + Shared" },
  { name: "MCP Servers", free: "Basic", pro: "All", team: "All + Custom" },
  { name: "Command History", free: "24h", pro: "Unlimited", team: "Unlimited + Shared" },
  { name: "Saved Commands", free: "5", pro: "Unlimited", team: "Unlimited" },
  { name: "Voice Mode", free: false, pro: true, team: true },
  { name: "Remote Access", free: false, pro: true, team: "Custom Domains" },
  { name: "Audit Log", free: false, pro: false, team: true },
  { name: "Team Members", free: false, pro: false, team: "Up to 25" },
  { name: "SSO (SAML / Google)", free: false, pro: false, team: true },
  { name: "Priority Support", free: false, pro: true, team: "Dedicated" },
  { name: "Proactive System Monitoring", free: false, pro: true, team: true },
  { name: "Self-Healing Service Recovery", free: false, pro: true, team: true },
  { name: "Workflow Templates", free: false, pro: true, team: true },
  { name: "Vision & Screenshot Analysis", free: false, pro: true, team: true },
  { name: "Parallel Execution", free: "1 task", pro: "3 concurrent", team: "3 concurrent" },
  { name: "Auto-Approval Learning", free: false, pro: true, team: true },
  { name: "Adaptive Intelligence", free: false, pro: true, team: true },
  { name: "Daily Briefings", free: false, pro: true, team: true },
];

export interface TokenPack {
  label: string;
  tokens: string;
  price: string;
  commands: string;
  badge?: string;
}

export const TOKEN_PACKS: TokenPack[] = [
  { label: "500K", tokens: "500,000", price: "$4.99", commands: "~100 commands" },
  { label: "2M", tokens: "2,000,000", price: "$16.99", commands: "~400 commands", badge: "POPULAR" },
  { label: "5M", tokens: "5,000,000", price: "$34.99", commands: "~1,000 commands" },
  { label: "15M", tokens: "15,000,000", price: "$79.99", commands: "~3,000 commands", badge: "BEST VALUE" },
];
