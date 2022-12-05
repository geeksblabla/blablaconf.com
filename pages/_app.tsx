import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config.js";
import Head from "next/head";
import Router from "next/router";
import * as gtag from "../components/gtag";
import { Plus_Jakarta_Sans } from "@next/font/google";

if (process.env.NODE_ENV === "production")
  Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
      <main className={jakarta.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
