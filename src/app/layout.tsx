import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | Ajman's Premier 24/7 Snooker, Gaming & Emerald Lounge`,
  description:
    "DR Snooker & Gaming Zone Cafe — Opening November 28, 2026 in Ajman, UAE. 7 championship snooker tables, 4 pro pool tables, private VIP suite, next-gen gaming arena, and 24/7 emerald restaurant & sheesha café.",
  openGraph: {
    title: `${siteConfig.brandName} — Ajman 24/7 Destination`,
    description:
      "7 Championship Snooker Tables • 4 Pro Pool Tables • Private VIP Suite • Next-Gen Gaming Arena • Emerald Lounge Restaurant & Sheesha Café.",
    images: ["/media/hero-poster.webp"],
    type: "website",
  },
  icons: {
    icon: "/images/logo-emblem.webp",
    apple: "/images/logo-emblem.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#090706",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${jakarta.variable} ${inter.variable} dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#090706] text-[#FAF7F2] antialiased selection:bg-[#D4AF37]/30 selection:text-[#FAF7F2]"
      >
        {children}
      </body>
    </html>
  );
}
