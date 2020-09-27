import React from "react";
import { Header } from "../Header";
import styles from "./index.module.css";
import Registration from "./registration";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <h1 className={styles.title}>
            5 Days and 5 Tracks covering hottest Technology Trends in{" "}
            <span className={styles.ma}> Darija </span>
          </h1>
          <div className={styles.date}>19-23 October | Online</div>
          <Registration />
        </div>
      </div>
    </div>
  );
};
