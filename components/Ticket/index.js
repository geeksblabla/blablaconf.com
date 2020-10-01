import { useState } from "react";
import { Header } from "../Header";
import styles from "./index.module.css";
import { Container } from "../Container";
import { getTicketImg } from "./utils";
import Popup from "reactjs-popup";
import Girl from "./Girl";
import Boy from "./Boy";
// const Ser

// const ServerLessPopup = typeof window !== undefined ? <></> : <></>;

export const Ticket = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Header />
        <div className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              🎉🎉🎉 <br />
              Congratulation your are in!
            </h1>
            <p className={styles.description}>
              You can share your ticket using the link
            </p>
            <div suppressHydrationWarning={true}>
              {process.browser && <SelectGenderModal />}
            </div>
          </div>
          <div className={styles.img_container}>
            <img src={getTicketImg()} className={styles.img} />
          </div>
        </div>
      </Container>
    </div>
  );
};

const SelectGenderModal = () => {
  const [isBoy, setIsBoy] = useState(undefined);
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
          <button className={styles.modal_button}> Continue </button>
        </div>
      </div>
    </Popup>
  );
};
