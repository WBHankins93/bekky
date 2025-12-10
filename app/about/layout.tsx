import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Meet Bekky & The Big Butt Association",
  description: "Learn about Bekky the purple llama, Jarred the Hostest with the Mostest, and the Big Butt Association brand. Discover our festival-fueled story and community values.",
  keywords: [
    "Bekky the llama",
    "Big Butt Association history",
    "Jarred",
    "BBA brand",
    "festival culture",
    "EDM community",
    "Bekky story"
  ],
  openGraph: {
    title: "About - Big Butt Association | Meet Bekky & The Crew",
    description: "Learn about Bekky the purple llama, Jarred the Hostest with the Mostest, and the Big Butt Association brand.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Big Butt Association | Meet Bekky & The Crew",
    description: "Learn about Bekky the purple llama, Jarred the Hostest with the Mostest, and the Big Butt Association brand.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

