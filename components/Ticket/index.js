import { useState } from "react";
import { Header } from "../Header";
import styles from "./index.module.css";
import { Container } from "../Container";
import { getTicketImg } from "./utils";
import Popup from "reactjs-popup";
import Girl from "./Girl";
import Boy from "./Boy";
// const Ser
import { auth, firebase, firestore } from "../../config/firebase";
import Share from "./Share";

// const ServerLessPopup = typeof window !== undefined ? <></> : <></>;

export const Ticket = () => {
  const [user, setUser] = useState(undefined);
  const [isBoy, setIsBoy] = useState(undefined);

  const host = process.env.NEXT_PUBLIC_HOST;
  const shareUrl =  user ? "https://" + host + "/myticket/" + user.username : "";

 const copyLink = () => {
  const el = document.createElement("textarea");
  el.value = "https://" + host + "/myticket/" + user.username;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  console.log(el.value);
};

  return (
    <div className={styles.hero}>
      <Container>
        <Header withLinks />
        <div className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              🎉🎉🎉 <br />
              Congratulation your are in!
            </h1>
            <p className={styles.description}>
              {!!user && "You can share your ticket using the link"}
            </p>
            {!user ?
              <div suppressHydrationWarning={true}>
                {process.browser && <SelectGenderModal isBoy={isBoy} setIsBoy={setIsBoy} user={user} setUser={setUser} />}
              </div>
              :
              <>
                <button onClick={copyLink}> coppy link</button>
                 <Share title={"share"} shareUrl={shareUrl} />
              </>
            }
          </div>
          <div className={styles.img_container}>
            <img src={getTicketImg(user)} className={styles.img} />
          </div>
        </div>
      </Container>
    </div>
  );
};

const SelectGenderModal = ({ isBoy, setIsBoy, setUser }) => {

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
          ticketNumber:  "000"+Math.floor(1000 + Math.random() * 9000),
          gender: isBoy ? "boy" : "girl"
        };

        firestore
          .collection("/tickets")
          .doc(additionalUserInfo.username)
          .set(tmpUser);
        setUser(tmpUser);
      });
  };

  return (
    <Popup
      trigger={
        <button className={styles.button}> Generate with GitHub </button>
      }
      modal
      contentStyle={{
        borderRadius: 20,
        width: "auto",
        maxWidth: "100%",
      }}
    >
      <div>
        <div className={styles.modal_container}>
          <p className={styles.modal_title}> Select your gender</p>
          <div className={styles.modal_options}>
            <div
              className={styles.modal_option}
              onClick={() => setIsBoy(false)}
            >
              <Girl active={isBoy !== undefined && !isBoy} />
              <p className={styles.modal_option_text}> I’m a girl</p>
            </div>
            <div className={styles.modal_option} onClick={() => setIsBoy(true)}>
              <Boy active={isBoy} />
              <p className={styles.modal_option_text}>I’m a boy</p>
            </div>
          </div>
          <button disabled={isBoy === undefined} className={styles.modal_button} onClick={generateTicket}> Continue </button>
        </div>
      </div>
    </Popup>
  );
};
