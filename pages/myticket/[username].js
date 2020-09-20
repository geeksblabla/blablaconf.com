import styles from "../../styles/Ticket.module.css";
import Ticket from "../../components/ticket";
import TicketLayout from "../../components/ticket_layout";
import React, { useState, useEffect } from "react";
import { auth, firebase, firestore } from "../../config/firebase";
import TicketBadge from "../../components/ticket_badge";
import Registration from "../../components/registration";

const TicketPage = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (username !== ""){
      firestore
        .collection("/tickets")
        .doc(username)
        .get()
        .then(function (doc) {
          setUser(doc.data());
        });
    }
  }, []);

  return (
    <TicketLayout title="BlaBlaConf Ticket">
      {/* <Ticket username={"soufianelf"} /> */}
      <div className={styles.mainDivAfterAuth}>
        {user && user.name && <div className={styles.title}>
          {user.name}'s Ticket
        </div>}
        <div className={styles.subtitle}>Join them on October 19, 2020.</div>

        <Registration />

        <div style={{ marginTop: 20 }}>
          <TicketBadge user={user} />
        </div>
      </div>
    </TicketLayout>
  );
};

export default TicketPage;
