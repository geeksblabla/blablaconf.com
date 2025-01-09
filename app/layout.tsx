import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Cairo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";
// import "sal.js/dist/sal.css";
// import { SalLoader } from "@/components/sal-loader";
import localFont from "next/font/local";

// import localFont from "@next/font/local";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#78543E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// either Static metadata
export const metadata: Metadata = {
  title: {
    template: "%s | BlaBlaConf 2024",
    default: "سوق التيك المغربي | BlaBlaConf 2024",
  },
  description:
    "5+1 Days and 5+1 Tracks covering hottest Technology Trends in Darija",
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
  variable: "--font-cairo",
});

const muraba = localFont({
  src: "../styles/Muraba.otf",
  variable: "--font-muraba",
});

const murabaOutline = localFont({
  src: "../styles/Muraba-outline.otf",
  variable: "--font-muraba-outline",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cairo.variable} ${muraba.variable} ${murabaOutline.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <SalLoader /> */}
      <body className="bg-[#EFE1C5]">
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-21VT2DZDYW" />
    </html>
  );
}
