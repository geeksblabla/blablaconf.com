import styles from "../styles/Ticket.module.css";
import React, { useState, useEffect } from "react";

const TicketBadge = ({ user }) => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.ticketBadge}>
      <img src={"/svg/ticket.svg"} className={styles.ticketBadgeImg} alt="ticket" />
      <div className={styles.ticketBadgeInfo}>
      <div className={styles.ticketNumberMobile}>{user && "N  "+user.ticketNumber}</div>
        <div className={styles.usernameInfo}>
          <img src={user ? user.photo : "/svg/user_badge.svg"} alt="user badge" className={styles.usenameIcon}  />
          <div>
            <div className={styles.username}>{user ? user.name : "Yosur Name"}</div>
            <div style={{ alignItems: "center", display: "flex"}}>
              <img src={"/svg/github.svg"} alt="github" className={styles.githubIcon} /> <span className={styles.githubUsername}>github</span>
            </div>
          </div>

          {width > 850 && <div className={styles.ticketNumber}>{user && "N  "+user.ticketNumber}</div>}
        </div>
      </div>
    </div>
  );
};

export default TicketBadge;
