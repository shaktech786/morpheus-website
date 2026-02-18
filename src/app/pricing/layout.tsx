import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Morpheus pricing plans. Free tier for local AI control, Pro for voice commands, remote access, and unlimited devices.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
