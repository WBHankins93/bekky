import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Dashboard - Your BekkyBucks & Purchase History",
  description: "View your BekkyBucks balance and purchase history. Track your rewards and orders with Big Butt Association.",
  keywords: [
    "member dashboard",
    "BekkyBucks balance",
    "purchase history",
    "BBA account",
    "order history",
    "member account"
  ],
  openGraph: {
    title: "Member Dashboard - Your BekkyBucks & Purchase History",
    description: "View your BekkyBucks balance and purchase history with Big Butt Association.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Member Dashboard - Your BekkyBucks & Purchase History",
    description: "View your BekkyBucks balance and purchase history with Big Butt Association.",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

