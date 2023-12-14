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

//👇 Configure our font object
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: GlobalSEO.title,
  description: GlobalSEO.description,
  applicationName: GlobalSEO.sitename,
  metadataBase: new URL(`${process.env.FRONTEND_URL}/`),
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
        </Providers>
      </body>
    </html>
  );
}
