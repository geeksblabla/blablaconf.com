import styles from "../styles/Ticket.module.css";
import React, { useState, useEffect } from "react";
import TicketBadge from "./ticket_badge";
import { auth, firebase, firestore } from "../config/firebase";

const Ticket = () => {
  const [user, setUser] = useState(null);
  const host = process.env.NEXT_PUBLIC_HOST;

  const generateTicket = () => {
    const githubAuthProvider = new firebase.auth.GithubAuthProvider();
    const uniqueNumber = new Date().valueOf();

    auth
      .signInWithPopup(githubAuthProvider)
      .then(function (result) {
        const user = result.user;
        const additionalUserInfo = result.additionalUserInfo;

        const tmpUser = {
          name: user.displayName,
          username: additionalUserInfo.username,
          email: user.email,
          photo: user.photoURL,
          ticketNumber: uniqueNumber,
        };

        firestore
          .collection("/tickets")
          .doc(additionalUserInfo.username)
          .set(tmpUser);
        setUser(tmpUser);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  };

  const copyLink = () => { 
    const el = document.createElement('textarea');
    el.value = "https://" + host + "/myticket/" + user.username;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log(el.value)
  }

  return (
    <div className={styles.mainDivAfterAuth}>
      {process.env.customKey}
      <div className={styles.leftDiv}>
        <div className={styles.leftDivContent}>
          <div className={styles.title}>Congratulation you are in!</div>
          <div className={styles.subtitle}>
            {user
              ? "You can share  your ticket"
              : "Generte your ticket image with your Github profile"}
          </div>
          {!user ? (
            <button className={styles.githubButton} onClick={generateTicket}>
              <i className="fab fa-github"></i>
              Generate with GitHub
            </button>
          ) : (
              <div style={{ display: "flex" }}>
                   <input
                    type="email"
                    // value={email}
                    id="myLink"
                    placeholder={"https://" + host + "/myticket/" + user.username}
                    className={styles.input}
                  // onChange={(e) => changeEmail(e.target.value)}
                  />
                  <button className={styles.button} >
                    <span className={styles.button_title} onClick={copyLink}>Copy The link</span>
                  </button>
              </div>
            )}
        </div>
      </div>
      <div className={styles.rightDiv} style={{ marginTop: 40 }}>
        <div className={styles.rightDivContent}>
          {/* <img src={width > 850 ? "/svg/ticket_anonymous.svg" : "/svg/ticket_anonymous_mobile.svg" } alt="ticket anonymous" /> */}
          <TicketBadge user={user} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
