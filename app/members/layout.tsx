import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members - Join BBA & Earn BekkyBucks",
  description: "Join Big Butt Association members and unlock exclusive rewards! Earn BekkyBucks on every purchase, get member-only discounts, early access to drops, and join Bekky's inner circle.",
  keywords: [
    "BBA members",
    "BekkyBucks",
    "loyalty program",
    "member rewards",
    "exclusive discounts",
    "early access",
    "BBA membership"
  ],
  openGraph: {
    title: "Join BBA Members - Earn BekkyBucks & Exclusive Rewards",
    description: "Join Big Butt Association members and unlock exclusive rewards! Earn BekkyBucks on every purchase.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join BBA Members - Earn BekkyBucks & Exclusive Rewards",
    description: "Join Big Butt Association members and unlock exclusive rewards! Earn BekkyBucks on every purchase.",
  },
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

