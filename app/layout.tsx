import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Kufam } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";
import "sal.js/dist/sal.css";
import { SalLoader } from "@/components/sal-loader";
import localFont from "next/font/local";
import overlay from "@/images/overlay.png";
import backgroundImage from "@/images/background.png";
import { ScrollToTop } from "@/components/scroll-to-top";

// import localFont from "@next/font/local";

import { Metadata, Viewport } from "next";
import Image from "next/image";

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
    template: "%s | BlaBlaConf 6.0",
    default: " بلابلاكان  | BlaBlaConf 6.0",
  },
  description:
    "5+1 Days and 5+1 Tracks covering hottest Technology Trends in Darija - حلاقي التكنولوجيا في جامع الفنا ",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: " بلابلاكان  | BlaBlaConf 6.0",
    description:
      "5+1 Days and 5+1 Tracks covering hottest Technology Trends in Darija - حلاقي التكنولوجيا في جامع الفنا ",
    type: "website",
    locale: "en_IE",
    url: `/`,
    siteName: "BlaBlaConf",
  },
};

const kufam = Kufam({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "arabic"],
  variable: "--font-kufam",
});

const muraba = localFont({
  src: "../styles/Muraba.otf",
  variable: "--font-muraba",
});

const marhaban = localFont({
  src: "../styles/Marhaban.otf",
  variable: "--font-marhaban",
});

const digitalNumbers = localFont({
  src: "../styles/DigitalNumbers-Regular.ttf",
  variable: "--font-digital",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${kufam.variable} ${muraba.variable} ${marhaban.variable} ${digitalNumbers.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <SalLoader />
      <body className="bg-accent relative">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />

        {/* background image */}
        <Image
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-auto block [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] -z-10"
        />

        {/* overlay */}
        <div
          className="absolute inset-0 z-[9999] pointer-events-none mix-blend-overlay opacity-80"
          style={{
            backgroundImage: `url(${overlay.src})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "repeat-y",
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-21VT2DZDYW" />
    </html>
  );
}
