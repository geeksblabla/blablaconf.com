import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopLeftIcon from "../svg/top_left_icon";
import TopRightIcon from "../svg/top_right_icon";
import BottomLeftIcon from "../svg/bottom_left_icon";
import BottomRightIcon from "../svg/bottom_right_icon";
import Logo from "../svg/logo";
import Link from 'next/link'
// import { NextSeo } from 'next-seo';

const Layout = ({ children, title = "", type = "", url = "", image = "", description = "" }) => { 

  return (
    <div  className={styles.ticketLayout}>
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

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nytimesbits" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
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

    </div>
  );
};

export default Layout;
