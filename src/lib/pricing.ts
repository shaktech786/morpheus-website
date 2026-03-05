export const PRICING = {
  monthly: "$4.99",
  annual: "$39.99",
  annualMonthly: "$3.33",
  lifetime: "$79.99",
  earlyBird: "$2.49",
  teamMonthly: "$19.99",
  teamAnnual: "$179.99",
  teamAnnualMonthly: "$14.99",
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
