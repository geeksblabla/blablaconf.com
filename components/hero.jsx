import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Registration from "./registration";

const Hero = () => {
 
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.title}>
          5 Days and 5 Tracks covering hottest Technology Trends in Darija
        </div>
        <div className={styles.subtitle}>19-23 October | Online</div>
        <Registration />
      </div>
    </div>
  );
};

export default Hero;
