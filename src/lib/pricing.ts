export const PRICING = {
  /** Pro tier */
  proMonthly: "$19.99",
  proAnnual: "$179.99",
  proAnnualMonthly: "$14.99",
  /** Power tier */
  powerMonthly: "$39.99",
  powerAnnual: "$359.99",
  powerAnnualMonthly: "$29.99",
  /** Team tier (per seat) */
  teamMonthly: "$49.99",
  teamAnnual: "$479.99",
  teamAnnualMonthly: "$39.99",
  /** BYOK — bring your own Anthropic key */
  byokMonthly: "$7.99",
  byokAnnual: "$79.99",
  byokAnnualMonthly: "$6.66",
} as const;

export interface PlanFeature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  power: boolean | string;
  team: boolean | string;
}

export const PLAN_FEATURES: PlanFeature[] = [
  { name: "AI Models", free: "Haiku", pro: "Haiku + Sonnet", power: "+ Opus", team: "+ Opus" },
  { name: "Included AI Credits / mo", free: "—", pro: "1,500", power: "4,000", team: "3,000 / seat" },
  { name: "LAN Connection", free: true, pro: true, power: true, team: true },
  { name: "Text Commands", free: true, pro: true, power: true, team: true },
  { name: "E2E Encryption", free: true, pro: true, power: true, team: true },
  { name: "Remote Access (Relay)", free: false, pro: true, power: true, team: "Custom Domains" },
  { name: "Voice Mode", free: false, pro: true, power: true, team: true },
  { name: "Paired Devices", free: "1", pro: "Unlimited", power: "Unlimited", team: "Unlimited + Shared" },
  { name: "MCP Servers", free: "Basic", pro: "All", power: "All", team: "All + Custom" },
  { name: "Command History", free: "24h", pro: "Unlimited", power: "Unlimited", team: "Unlimited + Shared" },
  { name: "Saved Commands", free: "5", pro: "Unlimited", power: "Unlimited", team: "Unlimited" },
  { name: "Vision & Screenshot Analysis", free: false, pro: true, power: true, team: true },
  { name: "Parallel Execution", free: "1 task", pro: "2 concurrent", power: "3 concurrent", team: "3 concurrent" },
  { name: "Proactive System Monitoring", free: false, pro: true, power: true, team: true },
  { name: "Self-Healing Service Recovery", free: false, pro: true, power: true, team: true },
  { name: "Workflow Templates", free: false, pro: true, power: true, team: true },
  { name: "Auto-Approval Learning", free: false, pro: true, power: true, team: true },
  { name: "Adaptive Intelligence", free: false, pro: true, power: true, team: true },
  { name: "Daily Briefings", free: false, pro: true, power: true, team: true },
  { name: "Audit Log", free: false, pro: false, power: false, team: true },
  { name: "Team Members", free: false, pro: false, power: false, team: "Up to 25" },
  { name: "SSO (SAML / Google)", free: false, pro: false, power: false, team: true },
  { name: "Priority Support", free: false, pro: true, power: "Priority", team: "Dedicated" },
];

export interface TokenPack {
  label: string;
  credits: string;
  price: string;
  bonus?: string;
  badge?: string;
}

/** Top-up credit packs (1 credit = $0.01 of AI usage; models burn credits at: Haiku 1, Sonnet 3, Opus 5 per 1K tokens). */
export const TOKEN_PACKS: TokenPack[] = [
  { label: "Starter", credits: "500", price: "$4.99" },
  { label: "Popular", credits: "1,100", price: "$9.99", bonus: "+10%", badge: "POPULAR" },
  { label: "Plus", credits: "3,000", price: "$24.99", bonus: "+20%" },
  { label: "Best Value", credits: "6,500", price: "$49.99", bonus: "+30%", badge: "BEST VALUE" },
];
