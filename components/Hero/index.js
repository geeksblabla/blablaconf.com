import React from "react";
import { Header } from "../Header";
import styles from "./index.module.css";
import { Container } from "../Container";
import { CFPButton } from "../CFPButton";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Header isHome />
        <div className={styles.main}>
          <h1 className={styles.title}>
            5 Days and 5 Tracks Covering Hottest Technology Trends in{" "}
            <span className={styles.ma}> Darija </span>
          </h1>
          <div className={styles.date}>25-29 October, 2021 | Online</div>
        </div>
      </Container>
    </div>
  );
};
