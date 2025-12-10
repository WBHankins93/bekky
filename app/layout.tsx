import type { Metadata } from "next";
import { Montserrat, Fredoka, Staatliches, Creepster } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData from "@/components/SEO/StructuredData";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-body',
});

const fredoka = Fredoka({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-display',
});

const staatliches = Staatliches({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-heading',
});

const creepster = Creepster({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-metal',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bekkywithabigbutt.com'),
  title: {
    default: "Big Butt Association | Festival Clothing for the Trippy & Bootylicious",
    template: "%s | Big Butt Association"
  },
  description: "Big Butt Association (BBA) - Festival clothing for the trippy & bootylicious. EDM apparel, rave wear, exclusive member rewards with BekkyBucks. Join Bekky the purple llama's exclusive crew!",
  keywords: [
    "Big Butt Association",
    "BBA",
    "Bekky",
    "festival clothing",
    "EDM apparel",
    "rave wear",
    "BekkyBucks",
    "purple llama",
    "festival gear",
    "EDM fashion",
    "rave clothing",
    "festival merch",
    "Bekky with a big butt",
    "trippy clothing",
    "bootylicious"
  ],
  authors: [{ name: "Big Butt Association" }],
  creator: "Big Butt Association",
  publisher: "Big Butt Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Big Butt Association",
    title: "Big Butt Association | Festival Clothing for the Trippy & Bootylicious",
    description: "Festival clothing for the trippy & bootylicious. EDM apparel, rave wear, and exclusive member rewards with BekkyBucks. Join Bekky's exclusive crew!",
    images: [
      {
        url: "/logo/bekky-no-background.png",
        width: 1200,
        height: 630,
        alt: "Bekky the Llama - Big Butt Association",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Butt Association | Festival Clothing for the Trippy & Bootylicious",
    description: "Festival clothing for the trippy & bootylicious. EDM apparel, rave wear, and exclusive member rewards with BekkyBucks.",
    images: ["/logo/bekky-no-background.png"],
    creator: "@bekkywithabigbutt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo/bekky-logo.jpg",
    apple: "/logo/bekky-logo.jpg",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#5B4B8A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${montserrat.variable} ${fredoka.variable} ${staatliches.variable} ${creepster.variable} font-body antialiased`}
      >
        <StructuredData />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
