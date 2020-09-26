import Layout from "../components/layout";
import { createGlobalStyle } from "styled-components";
import Hero from "../components/hero";
import ComingSoon from "../components/coming_soon";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopLeftIcon from "../svg/top_left_icon";
import TopRightIcon from "../svg/top_right_icon";
import BottomLeftIcon from "../svg/bottom_left_icon";
import BottomRightIcon from "../svg/bottom_right_icon";
import Logo from "../svg/logo";
import Link from "next/link";
//background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%) no-repeat;

const Index = () => {
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
      <div className={styles.header}>
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
        <Hero />
      </div>

     <div className={styles.container}>
     <div className={styles.about}>
        <div className={styles.aboutTitle}>About Blablaconf</div>
        <div className={styles.aboutDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa dui sed
          eu elementum vulputate viverra sapien eget. Aliquet elementum ultrices
          dolor facilisi arcu. Molestie tortor, nec suspendisse faucibus sodales
          nisi, scelerisque mauris. Sit duis dui sed risus, etiam etiam pulvinar
          mi.
        </div>
      </div>
     </div>
 

      <div className={styles.footer} style={{ flexDirection: "column" }}>
        <div className={styles.footer_text}>
          Copyright © 2020 BlablaConf. All rights reserved.
        </div>
      </div>
      {/* 

   */}
    </div>
  );
};

export default Index;
