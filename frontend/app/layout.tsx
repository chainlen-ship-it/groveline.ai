import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Groveline.ai – Fractional COO & Operations Support",
  description:
    "Helping funds and service businesses get allocator-ready with policy refresh, DDQ updates, system implementations, and AI-assisted COO tools.",
  openGraph: {
    title: "Groveline Advisor Services",
    description: "Fractional COO & Operations Support for Emerging and Mid-Sized Managers",
    type: "website",
    url: "https://groveline.ai",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Groveline Advisor Services",
      },
    ],
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
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
