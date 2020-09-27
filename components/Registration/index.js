import React from "react";
import styles from "./index.module.css";
import Form from "./registration";

export const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.form}>
            <h1 className={styles.title}>
              What are you waiting for? Claim your spot now!
            </h1>
            <Form />
          </div>
          <img src="/tickets.png" className={styles.tickets} />
        </div>
      </div>
    </div>
  );
};
