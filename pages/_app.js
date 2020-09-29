import { Container } from "next/app";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config.js";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
