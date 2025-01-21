import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Cairo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";
import "sal.js/dist/sal.css";
import { SalLoader } from "@/components/sal-loader";
import localFont from "next/font/local";

// import localFont from "@next/font/local";

import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#EEE1C5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// either Static metadata
export const metadata: Metadata = {
  title: {
    template: "%s | BlaBlaConf 5.0",
    default: " تكنوفنا  | BlaBlaConf 5.0",
  },
  description:
    "5+1 Days and 5+1 Tracks covering hottest Technology Trends in Darija - حلاقي التكنولوجيا في جامع الفنا ",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: " تكنوفنا  | BlaBlaConf 5.0",
    description:
      "5+1 Days and 5+1 Tracks covering hottest Technology Trends in Darija - حلاقي التكنولوجيا في جامع الفنا ",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cairo.variable} ${muraba.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <SalLoader />
      <body className="bg-[#F1E5CB]">
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-21VT2DZDYW" />
    </html>
  );
}
