import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopLeftIcon from "../svg/top_left_icon";
import TopRightIcon from "../svg/top_right_icon";
import BottomLeftIcon from "../svg/bottom_left_icon";
import BottomRightIcon from "../svg/bottom_right_icon";
import Logo from "../svg/logo";

const Layout = ({ children, title = "" }) => {
  return (
    <div style={{ display: "flex" }}>

      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Raleway"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContaier}>
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
      </main>
    </div>
  );
};

export default Layout;
