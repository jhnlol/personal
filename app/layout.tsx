import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jan Bożek | Full-stack Developer z Katowic",
    template: "%s | Jan Bożek",
  },
  description:
    "Full-stack Developer z Katowic z 3-letnim doświadczeniem. Tworzę aplikacje webowe w TypeScript, React, Next.js, Node.js oraz .NET.",
  keywords: [
    "Jan Bożek",
    "Full-stack Developer Katowice",
    "Web Developer Katowice",
    "React Developer Śląsk",
    "TypeScript Developer",
    ".NET Developer",
    "Programista Katowice",
    "Portfolio Web Developer",
  ],
  authors: [{ name: "Jan Bożek", url: "https://jhnlol.pl" }],
  creator: "Jan Bożek",
  metadataBase: new URL("https://jhnlol.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://jhnlol.pl",
    title: "Jan Bożek | Full-stack Developer z Katowic",
    description:
      "Full-stack Developer z Katowic z 3-letnim doświadczeniem w tworzeniu nowoczesnych aplikacji webowych (React, TypeScript, .NET).",
    siteName: "Jan Bożek Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Bożek | Full-stack Developer z Katowic",
    description:
      "Full-stack Developer z Katowic tworzący aplikacje webowe od bazy danych po interfejs (TypeScript, React, .NET).",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
