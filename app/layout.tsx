import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Cairo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";
import "sal.js/dist/sal.css";
import { SalLoader } from "@/components/sal-loader";

// import localFont from "@next/font/local";

import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: {
    template: "%s | BlaBlaConf 2024",
    default: "سوق التيك المغربي | BlaBlaConf 2024",
  },
  description:
    "BlaBlaConf 22 | 5+1 Days and 5+1 Tracks covering hottest Technology Trends in Darija",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "سوق التيك المغربي | BlaBlaConf 2024",
    description:
      "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 19th to 24th February",
    type: "website",
    locale: "en_IE",
    url: `/`,
    siteName: "BlaBlaConf",
  },
};

const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cairo.variable} `}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <SalLoader />
      <body className="bg-gradient-to-b from-[#EFEAE4] via-[#E8DBD0] to-[#EFEAE4]">
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-21VT2DZDYW" />
    </html>
  );
}
