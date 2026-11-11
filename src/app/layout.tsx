import type { Metadata, Viewport } from "next";
import { Inter_Tight, Playfair_Display, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Set this to your real domain before deploying so the share image resolves.
  metadataBase: new URL("https://arctic-signal.example.com"),
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    images: [{ url: "/images/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    images: ["/images/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05080c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
