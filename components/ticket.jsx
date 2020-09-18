import styles from "../styles/Ticket.module.css";
import React, { useState, useEffect } from "react";
import TicketBadge from "./ticket_badge";
import { auth, firebase } from "../config/firebase";

// props.firebase
// .doSignInWithEmailAndPassword(email, password)
// .then(data => {
//   console.log(data);
//   props.firebase.auth.currentUser.getIdToken().then(function(idToken) {
//       localStorage.setItem('authUser', JSON.stringify(data.user)); 
//       localStorage.setItem('token', JSON.stringify(idToken)); 
//       history.push("/main/main-studio");
//  })

const Ticket = () => {
  const [width, setWidth] = useState(1000);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  const generateTicket = () => {
    const githubAuthProvider = new firebase.auth.GithubAuthProvider();
    const uniqueNumber = new Date().valueOf();

    auth.signInWithPopup(githubAuthProvider).then(function (result) {
      const user = result.user;
      const additionalUserInfo = result.additionalUserInfo;
     
      const tmpUser = {
        name: user.displayName,
        username: additionalUserInfo.username,
        email: user.email,
        photo: user.photoURL,
        ticketNumber: uniqueNumber
      }

      firestore.collection('/registrations')
      .doc(email)
      .get()
      .then(function(doc) {
        if(!doc.exists){
          firestore.collection('/registrations').doc(email).set(tmpUser);
        } 
      });


      setUser(tmpUser)
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  }

console.log("process.env.DB_HOST)")
console.log(process.env.NEXT_PUBLIC_DB_HOST)
  return (
    <div className={user ? styles.mainDivAfterAuth : styles.mainDiv}>
      {process.env.customKey}
      <div className={styles.leftDiv}>
        <div className={styles.leftDivContent}>
          <div className={styles.title}>
            {user ? "Congratulation you are in!" : "Claim your spot now!"}</div>
          <div className={styles.subtitle}>
            {user ? "You can share  your ticket" : "Generte your ticket image with your Github profile"}
          </div>
          {!user ?
            <button className={styles.githubButton} onClick={generateTicket}>
              <i className="fab fa-github"></i>
              Generate with GitHub
          </button>
            :
            <div style={{ display: "flex" }}>
              <button className={styles.shareActions} onClick={generateTicket}>
                <i className="fab fa-github"></i>
          share on Twitter
        </button>
              <button className={styles.shareActions} onClick={generateTicket}>
                <i className="fab fa-github"></i>
         Share on linkedin
        </button>
              <button className={styles.shareActions} onClick={generateTicket}>
                <i className="fab fa-github"></i>
         Copy the link
        </button>
            </div>
          }

        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.rightDivContent}>
          {/* <img src={width > 850 ? "/svg/ticket_anonymous.svg" : "/svg/ticket_anonymous_mobile.svg" } alt="ticket anonymous" /> */}
          <TicketBadge user={user} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
