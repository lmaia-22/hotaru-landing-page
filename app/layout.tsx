import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hotaru.app"),
  title: "Hotaru — The Shared Clipboard That Forgets",
  description:
    "Share snippets, configs, and notes that auto-expire after 2 hours. Secure. Real-time. Effortless.",
  keywords: ["clipboard", "ephemeral", "secure sharing", "team collaboration"],
  authors: [{ name: "Hotaru" }],
  creator: "Hotaru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hotaru.app",
    siteName: "Hotaru",
    title: "Hotaru — The Shared Clipboard That Forgets",
    description:
      "Share snippets, configs, and notes that auto-expire after 2 hours. Secure. Real-time. Effortless.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hotaru — The Shared Clipboard That Forgets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotaru — The Shared Clipboard That Forgets",
    description:
      "Share snippets, configs, and notes that auto-expire after 2 hours. Secure. Real-time. Effortless.",
    images: ["/og-image.png"],
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
  verification: {
    // Add when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        {/* Analytics placeholder */}
        {/* <script async src="https://analytics.example.com/script.js" data-website-id="xxx"></script> */}
      </body>
    </html>
  );
}

