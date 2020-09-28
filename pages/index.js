import Head from "next/head";
import {
  Speakers,
  Agenda,
  Hero,
  About,
  Footer,
  Registration,
} from "../components";
import { getData } from "./api/index";

const Index = ({ tracks, speakers }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <Head>
        <title>
          BlablaConf | 5 Days and 5 Tracks covering hottest Technology Trends in
          Darija
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Raleway"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Hero />
      <About />
      <Speakers speakers={speakers} />
      <Agenda tracks={tracks} />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const { speakers, tracks } = await getData();
  return {
    props: {
      tracks,
      speakers,
    },
  };
}
