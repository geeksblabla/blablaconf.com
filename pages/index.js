import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled, { createGlobalStyle } from "styled-components";
import TopLeftIcon from "../svg/top_left_icon";
import TopRightIcon from "../svg/top_right_icon";
import BottomLeftIcon from "../svg/bottom_left_icon";
import BottomRightIcon from "../svg/bottom_right_icon";
import Logo from "../svg/logo";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div,
  div#__next > div > div {
    height: 100%;
    background: linear-gradient(300.87deg, #220C79 3.7%, #4A37AB 100%);
    min-height: 100%;
  }
`;

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContaier}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <span className={styles.powredBy}>powered  by #DevC_Morocco</span>

        </div>

        <div className={styles.top_icons}>
          <div className={styles.top_left_icon}>
            <TopLeftIcon />
          </div>
          <div className={styles.top_right_icon}>
            <TopRightIcon />
          </div>
        </div>

        <div className={styles.mainDiv}>
          <div className={styles.title}>
            5 Days and 5 Tracks covering hottest Technology Trends in Darija
          </div>
          <div className={styles.subtitle}>19-23 October | Online</div>
          <div className={styles.inputDiv}>
            <input
              type="email"
              placeholder="Enter email to register free"
              className={styles.input}
            />
            <button className={styles.button}>
              <span className={styles.button_title}>Register Now</span>
            </button>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.bottom_icons}>
            <div className={styles.bottom_left_icon}>
              <BottomLeftIcon />
            </div>
            <div className={styles.bottom_right_icon}>
              <BottomRightIcon />
            </div>
          </div>

          <div className={styles.footer_text}>
            {" "}
            Copyright © 2020 BlablaConf. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
