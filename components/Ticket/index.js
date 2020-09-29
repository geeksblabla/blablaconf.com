import React from "react";
import { Header } from "../Header";
import styles from "./index.module.css";
import { Container } from "../Container";
import { getTicketImg } from "./utils";

export const Ticket = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Header />
        <div className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              🎉🎉🎉 <br />
              Congratulation your are in!
            </h1>
            <p className={styles.description}>
              You can share your ticket using the link
            </p>
            <button className={styles.button}> Generate with GitHub </button>
          </div>
          <div className={styles.img_container}>
            <img src={getTicketImg()} className={styles.img} />
          </div>
        </div>
      </Container>
    </div>
  );
};
