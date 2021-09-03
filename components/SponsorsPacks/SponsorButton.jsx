import React from "react";
import styles from "./index.module.css";

export const SponsorButton = () => {
  return (
    <>
      <a
        className={`${styles.button}`}
        id="sponsor"
        href="mailto:geeksblabla@gmail.com?subject=Sponsorship offer"
        target="_blank"
      >
        Become a Sponsor
      </a>
    </>
  );
};
