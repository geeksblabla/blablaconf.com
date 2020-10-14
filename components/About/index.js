import React from "react";
import { Container } from "../Container";
import { Sponsors } from "../Sponsors";
import styles from "./index.module.css";

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <Container>
        <div className={styles.img_container}>
          <img src="/crea.svg" alt="image shows a boy and girl using thier laptop" className={styles.img} />
        </div>
        <div className={styles.main}>
          <h1 className={styles.title}>Made by and for the community</h1>
          <div className={styles.description}>
            By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one-stop-shop for the latest and hottest technology trends, in Darija, and completely free! Join us from 20th to 24th October.
          </div>
        </div>
        <Sponsors />
      </Container>
    </div>
  );
};
