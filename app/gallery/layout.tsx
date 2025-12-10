import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Festival Photos & BBA Events",
  description: "Photo gallery of Big Butt Association events, festivals, and memorable moments. Relive the best experiences from raves, festivals, and Bekky's wild adventures.",
  keywords: [
    "festival photos",
    "BBA gallery",
    "rave photos",
    "festival gallery",
    "EDM events",
    "Bekky photos",
    "festival memories"
  ],
  openGraph: {
    title: "Gallery - Big Butt Association | Festival Photos",
    description: "Photo gallery of Big Butt Association events, festivals, and memorable moments.",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

