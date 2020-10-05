import React from "react";
import { Header } from "../Header";
import styles from "./index.module.css";
import { Container } from "../Container";
import { getTicketImg } from "../utils";
import { RegistrationForm } from "../RegistrationForm/index";

export const MyTicket = ({ user }) => {
  return (
    <div className={styles.hero}>
      <Container>
        <Header />
        <div className={styles.main}>
          <h1 className={styles.title}>
            {user.name === null ? user.username : user.name} 's Ticket
          </h1>
          <div className={styles.img_container}>
            <img src={getTicketImg(user)} className={styles.img} />
          </div>
          <div className={styles.date}>Join them on October 20-24 | Online</div>
          <RegistrationForm />
        </div>
      </Container>
    </div>
  );
};
