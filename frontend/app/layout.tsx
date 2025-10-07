import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://groveline.ai'),
  title: "Groveline.ai – Fractional COO & Fund Operations Consulting",
  description:
    "Expert fractional COO services for hedge funds and investment managers. Allocator-ready operations, DDQ preparation, compliance policy refresh, OMS implementation, and AI-assisted reconciliation. Supporting $150M+ fund launches.",
  keywords: [
    "fractional COO",
    "fund operations",
    "allocator readiness",
    "hedge fund operations",
    "investment fund COO",
    "DDQ preparation",
    "compliance consulting",
    "OMS implementation",
    "fund launch support",
    "operational due diligence",
    "reconciliation automation",
    "AI fund operations",
    "institutional infrastructure",
    "fund administration",
    "trade approval workflow"
  ],
  authors: [{ name: "Chris Hainlen", url: "https://www.linkedin.com/in/chainlen" }],
  creator: "Chris Hainlen",
  publisher: "Groveline Advisor Services",
  openGraph: {
    title: "Groveline – Fractional COO & Fund Operations Consulting",
    description: "Allocator-ready operations for emerging and mid-sized investment managers. Expert COO services for fund launches, compliance, and operational infrastructure.",
    type: "website",
    url: "https://groveline.ai",
    siteName: "Groveline Advisor Services",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Groveline Advisor Services - Fund Operations Consulting",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groveline – Fractional COO & Fund Operations",
    description: "Allocator-ready operations for investment managers. Supporting $150M+ fund launches.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://groveline.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="canonical" href="https://groveline.ai/" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <StructuredData />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
