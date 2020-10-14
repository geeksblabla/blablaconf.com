import React from "react";
import styles from "./index.module.css";
import { Container } from "../Container";

export const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <h1 className={styles.title}>sponsored by</h1>
      <div className={styles.logos}>
        <img src="/img/oracle.png" alt="oracle logo" className={styles.logo} />
        <img src="/img/devc.png" alt="facebook for developers logo" className={styles.logo} />
        <img src="/img/obytes.png" alt="obytes" className={styles.logo} />
      </div>
    </div>
  );
};
