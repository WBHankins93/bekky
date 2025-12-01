import type { Metadata } from "next";
import { Poppins, Fredoka } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-body',
});

const fredoka = Fredoka({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Bekky - Big Butt Association | Official Community",
  description: "Welcome to the Big Butt Association - the official home of Bekky the purple llama! Join our exclusive community, earn Bekky Bucks, and connect with fellow fans.",
  keywords: ["Bekky", "Big Butt Association", "BBA", "purple llama", "Bekky Bucks", "community", "festival", "EDM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${fredoka.variable} font-body antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
