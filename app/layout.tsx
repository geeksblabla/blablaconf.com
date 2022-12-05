import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Plus_Jakarta_Sans } from "@next/font/google";
import "./globals.css";
// import localFont from "@next/font/local";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// const almaghribi = localFont({
//   src: "../utils/AALMAGHRIBI.ttf",
//   variable: "--font-almaghribi",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} `}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
