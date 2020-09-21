import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopLeftIcon from "../svg/top_left_icon";
import TopRightIcon from "../svg/top_right_icon";
import BottomLeftIcon from "../svg/bottom_left_icon";
import BottomRightIcon from "../svg/bottom_right_icon";
import Logo from "../svg/logo";

const Layout = ({ children, title = "" }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", minWidth: "100%"  }}>
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
      <div className={styles.logoContaier} style={{ justifyContent: "flex-start", paddingLeft: 50 }}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <span className={styles.powredBy}>powered by #DevC_Morocco</span>
      </div>
      {children}
      <div className={styles.footer}>
        <div className={styles.footer_text}>
          Copyright © 2020 BlablaConf. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Layout;
