import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Cairo } from "@next/font/google";
import "../styles/globals.css";
import "sal.js/dist/sal.css";
import { SalLoader } from "@/components/sal-loader";

// import localFont from "@next/font/local";

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
    </html>
  );
}
