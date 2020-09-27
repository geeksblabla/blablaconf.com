import Head from "next/head";
import { Speakers, Agenda, Hero, About } from "../components";
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
        <title>BlablaConf</title>
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
      {/* <div className={styles.header}>
        <div className={styles.logoContaier}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <span className={styles.powredBy}>powered by #DevC_Morocco</span>
        </div>
      </div> */}

      {/* <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.aboutTitle}>About Blablaconf</div>
          <div className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa dui
            sed eu elementum vulputate viverra sapien eget. Aliquet elementum
            ultrices dolor facilisi arcu. Molestie tortor, nec suspendisse
            faucibus sodales nisi, scelerisque mauris. Sit duis dui sed risus,
            etiam etiam pulvinar mi.
          </div>
        </div>
      </div> */}
      <Hero />
      <About />
      <Speakers speakers={speakers} />
      <Agenda tracks={tracks} />
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
