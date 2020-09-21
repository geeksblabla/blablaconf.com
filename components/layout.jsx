import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopLeftIcon from "../svg/top_left_icon";
import TopRightIcon from "../svg/top_right_icon";
import BottomLeftIcon from "../svg/bottom_left_icon";
import BottomRightIcon from "../svg/bottom_right_icon";
import Logo from "../svg/logo";
import Link from 'next/link'

const Layout = ({ children, title = "" }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh", minWidth: "100%" }}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Raleway"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className={styles.logoContaier}>
        <div className={styles.logo}>
         <Link href="/"><a><Logo /></a></Link>
        </div>
        <span className={styles.powredBy}>powered by #DevC_Morocco</span>
      </div>
      <div className={styles.top_icons}>
        <div className={styles.top_left_icon}>
          <TopLeftIcon />
        </div>
        <div className={styles.top_right_icon}>
          <TopRightIcon />
        </div>
      </div>

      {children}

      <div className={styles.footer} style={{ flexDirection: "column" }}>
        <div className={styles.bottom_icons}>
          <div className={styles.bottom_left_icon}>
            <BottomLeftIcon />
          </div>
          <div className={styles.bottom_right_icon}>
            <BottomRightIcon />
          </div>
        </div>
        <div className={styles.footer_text}>
          Copyright © 2020 BlablaConf. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Layout;
