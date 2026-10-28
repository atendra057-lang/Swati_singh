import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swati Singh | Chief Manager & Banking Professional",
  description:
    "Professional profile of Swati Singh, a banking professional with approximately 16 years of experience across branch leadership, credit-related responsibilities, and institutional operations.",
  keywords: [
    "Swati Singh",
    "Chief Manager",
    "Banking Professional",
    "Credit",
    "Asset Quality",
    "Branch Leadership",
    "Public-Sector Banking",
    "Recovery",
    "JAIIB",
    "CAIIB",
  ],
  authors: [{ name: "Swati Singh" }],
  creator: "Swati Singh",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Swati Singh | Chief Manager & Banking Professional",
    description:
      "Sound judgement. Steady leadership. Enduring trust. Executive banking portfolio of Swati Singh, Chief Manager.",
    type: "profile",
    locale: "en_US",
    siteName: "Swati Singh — Banking Executive",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swati Singh | Chief Manager & Banking Professional",
    description:
      "Executive banking portfolio of Swati Singh, Chief Manager. Approx. 16 years of public-sector banking leadership.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#11151B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-midnight text-ivory font-sans selection:bg-brass/20 selection:text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}

