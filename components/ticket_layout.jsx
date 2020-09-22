import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopLeftIcon from "../svg/top_left_icon";
import TopRightIcon from "../svg/top_right_icon";
import BottomLeftIcon from "../svg/bottom_left_icon";
import BottomRightIcon from "../svg/bottom_right_icon";
import Logo from "../svg/logo";
import Link from 'next/link'
// import { NextSeo } from 'next-seo';

const Layout = ({ children, title = "", type="", url="", image="" }) => { 

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", minWidth: "100%"  }}>
      {/* <NextSeo config={seoConfig} /> */}
      
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Raleway"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url}/>
        <meta property="og:image" content={image}/>

      </Head>
      <div className={styles.logoContaier} style={{ justifyContent: "flex-start", paddingLeft: 50 }}>
        <div className={styles.logo}>
          <Link href="/"><a><Logo /></a></Link>
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
