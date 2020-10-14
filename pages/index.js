import Head from "next/head";
import {
  Layout,
  Speakers,
  Agenda,
  Hero,
  About,
  Registration,
  Sponsors,
} from "../components";
import { getData } from "../components/utils";

const Index = ({ tracks, speakers }) => {
  return (
    <Layout>
      <Head>
        <title>
          BlablaConf | 5 Days and 5 Tracks covering hottest Technology Trends in
          Darija
        </title>
      </Head>
      <Hero />
      <About />
      <Speakers speakers={speakers} />
      <Agenda tracks={tracks} />
      <Registration />
    </Layout>
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
