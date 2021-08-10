import React from "react";
import styles from "./index.module.css";

export const WatchAll = () => {
  return (
    <div className={styles.agenda} id="agenda">
      <div className={styles.inputDiv}>
        <a
          className={`${styles.button}`}
          id="youtube"
          href="https://www.youtube.com/playlist?list=PLUa7iphNQNrxNuo9GN367QbhyD7crSDGp"
          target="_blank"
        >
          Watch All Sessions From 2020
        </a>
      </div>
    </div>
  );
};
