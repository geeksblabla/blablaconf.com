import styles from "../styles/Ticket.module.css";
import React, { useState, useEffect }  from "react";

const Ticket = () => {
 
  const [width, setWidth] = useState(1000);
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
      <div className={styles.mainDiv}>

        <div className={styles.leftDiv}>
          <div className={styles.leftDivContent}>
            <div className={styles.title}>Claim your spot now!</div>
            <div className={styles.subtitle}>
              Generte your ticket image with your Github profile{" "}
            </div>
            <button className={styles.githubButton}>
              <i className="fab fa-github"></i>
              Generate with GitHub
            </button>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <div className={styles.rightDivContent}>
            <img src={width > 850 ? "/svg/ticket_anonymous.svg" : "/svg/ticket_anonymous_mobile.svg" } alt="ticket anonymous" />
          </div>
        </div>
      </div>
  );
};

export default Ticket;
