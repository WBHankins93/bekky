import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - Festival Clothing & EDM Apparel",
  description: "Shop the Big Butt Association collection - jerseys, lingerie, hoodies, tees, and festival gear. Bold, bootylicious, and festival-ready clothing for the trippy & bootylicious.",
  keywords: [
    "festival clothing",
    "EDM apparel",
    "rave wear",
    "festival gear",
    "jerseys",
    "lingerie",
    "hoodies",
    "festival merch",
    "BBA shop",
    "Big Butt Association shop"
  ],
  openGraph: {
    title: "Shop - Big Butt Association | Festival Clothing",
    description: "Shop the Big Butt Association collection - jerseys, lingerie, hoodies, tees, and festival gear.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop - Big Butt Association | Festival Clothing",
    description: "Shop the Big Butt Association collection - jerseys, lingerie, hoodies, tees, and festival gear.",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

