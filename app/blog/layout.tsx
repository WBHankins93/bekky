import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Festival Adventures & EDM Culture",
  description: "Read about Bekky's adventures, festival experiences, EDM culture, and behind-the-scenes content from Big Butt Association. Stories from the rave scene and festival life.",
  keywords: [
    "festival blog",
    "EDM culture",
    "rave stories",
    "festival adventures",
    "Bekky blog",
    "BBA blog",
    "festival experiences"
  ],
  openGraph: {
    title: "Blog - Big Butt Association | Festival Adventures",
    description: "Read about Bekky's adventures, festival experiences, and EDM culture from Big Butt Association.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

