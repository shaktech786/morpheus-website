export const PRICING = {
  monthly: "$4.99",
  annual: "$39.99",
  annualMonthly: "$3.33",
  lifetime: "$79.99",
  earlyBird: "$2.49",
} as const;

export interface PlanFeature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
}

export const PLAN_FEATURES: PlanFeature[] = [
  { name: "LAN Connection", free: true, pro: true },
  { name: "Text Commands", free: true, pro: true },
  { name: "E2E Encryption", free: true, pro: true },
  { name: "Paired Devices", free: "1", pro: "Unlimited" },
  { name: "MCP Servers", free: "Basic", pro: "All" },
  { name: "AI Token Packs", free: false, pro: true },
  { name: "Voice Mode", free: false, pro: true },
  { name: "Remote Access", free: false, pro: true },
  { name: "Priority Support", free: false, pro: true },
];
