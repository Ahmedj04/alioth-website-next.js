import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MeetingPanel from "@/components/MeetingPanel";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  metadataBase: new URL("https://aliothdigital.com"),
  title: {
    default: "AliothDigital — Bid & Tender Management, Recruitment & Digital, Software & IT",
    template: "%s",
  },
  description:
    "AliothDigital helps UK organisations compete work through bid and tender management, build teams through recruitment, and grow through digital, software and IT.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icons/alioth.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#001B3A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <MeetingPanel />
        <Suspense fallback={null}>
          <PageEffects />
        </Suspense>
      </body>
    </html>
  );
}
