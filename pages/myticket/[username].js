import styles from "../../styles/Ticket.module.css";
import Ticket from "../../components/ticket";
import TicketLayout from "../../components/ticket_layout";
import React, { useState, useEffect } from "react";
import { auth, firebase, firestore } from "../../config/firebase";
import TicketBadge from "../../components/ticket_badge";
import Registration from "../../components/registration";

const TicketPage = ({ username }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (username !== ""){
  //     firestore
  //       .collection("/tickets")
  //       .doc(username)
  //       .get()
  //       .then(function (doc) {
  //         setUser(doc.data());
  //       });
  //   }
  // }, []);

  return (
    <TicketLayout title="BlaBlaConf Ticket">
      {/* <Ticket username={"soufianelf"} /> */}
      <div className={styles.mainDivAfterAuth}>
        <Registration />

        <div style={{ marginTop: 20 }}>
          <TicketBadge user={user} />
        </div>
      </div>
    </TicketLayout>
  );
};

export default TicketPage;
