import "reactjs-popup/dist/index.css";
import "../styles/globals.css";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config.js";
import Head from "next/head";
import Router from "next/router";
import * as gtag from "../components/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
