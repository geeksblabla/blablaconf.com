import React from "react";
import styles from "./index.module.css";

export const CFPButton = () => {
  return (
    <>
      <div className={styles.inputDiv}>
        <a
          className={`${styles.button}`}
          id="cfp"
          href="https://forms.gle/9HoaASXAQLJFWbmP9"
          target="_blank"
        >
          Submit Your Talk
        </a>
      </div>
    </>
  );
};
