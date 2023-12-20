import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./Providers";
import ScrollToTop from "@/components/ScrollToTop";
import TriggeredNavbar from "@/components/Header/TriggeredNavbar";
import ModalsWrapper from "@/components/ModalsWrapper";
import { GlobalSEO } from "@/data/seo";
import { Analytics } from "@vercel/analytics/react";

//👇 Configure our font object
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: GlobalSEO.title,
  description: GlobalSEO.description,
  applicationName: GlobalSEO.sitename,
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/`),
  alternates: {
    canonical: "/",
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
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>

      <body
        className={`relative bg-light-site pt-header dark:bg-dark-site sm:select-none ${manrope.className}`}
      >
        <Providers>
          <Header />
          <TriggeredNavbar />
          {children}
          <ScrollToTop />
          <Footer />
          <ModalsWrapper />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
