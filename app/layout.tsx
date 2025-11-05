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
  title: "Bekky World - Join the Purple Llama Community",
  description: "Welcome to Bekky World! The exclusive community platform for Bekky fans. Earn Bekky Bucks, explore festival adventures, and connect with fellow llama lovers.",
  keywords: ["Bekky", "purple llama", "festival", "community", "EDM", "rave"],
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
