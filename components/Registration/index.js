import React from "react";
import styles from "./index.module.css";
import { RegistrationForm } from "../RegistrationForm";

export const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.form}>
            <h1 className={styles.title}>
              What are you waiting for? Claim your ticket now!
            </h1>
            <RegistrationForm secondary />
          </div>
          <div className={styles.tickets_container}>
            <img src="/tickets.png" alt={"image og tickets"} className={styles.tickets} />
          </div>
        </div>
      </div>
    </div>
  );
};
