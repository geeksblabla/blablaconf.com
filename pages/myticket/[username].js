import styles from "../../styles/Ticket.module.css";
import Ticket from "../../components/ticket";
import TicketLayout from "../../components/ticket_layout";
import React, { useState, useEffect } from "react";
import { auth, firebase, firestore } from "../../config/firebase";
import TicketBadge from "../../components/ticket_badge";
import Registration from "../../components/registration";
import { useRouter } from "next/router";

console.log("11");

const TicketPage = ({ user, seoConfig }) => {
  console.log("props.data");

  return (
    <TicketLayout title="BlaBlaConf Ticket" {...seoConfig}>
      {/* <Ticket username={"soufianelf"} /> */}
      <div className={styles.mainDivAfterAuth}>
        {user && user.name && (
          <div className={styles.title}>{user.name}'s Ticket</div>
        )}
        <div className={styles.subtitle}>Join them on October 19, 2020.</div>
        <Registration />
        <div style={{ marginTop: 20 }}>
          <TicketBadge user={user} />
        </div>
      </div>
    </TicketLayout>
  );
};

export async function getServerSideProps({ query }) {
  const username = query.username;

  let seoConfig = null;
  let user = null;

  if (username && username !== "")
    await firestore
      .collection("/tickets")
      .doc("soufianelf")
      .get()
      .then(function (doc) {
        user = doc.data();
        seoConfig = {
          title: user.name + "'s Ticket",
          type: "website",
          description: "BlaBlaConf Ticket",
          url:
            "https://" +
            process.env.NEXT_PUBLIC_HOST +
            "/myticket/" +
            user.username,
          image:
            "https://res.cloudinary.com/dvapezchz/image/upload/b_rgb:220c79/co_rgb:ffffff,l_text:montserrat_40:" +
            user.name +
            ",x_-30,y_-100/co_rgb:ffffff,l_text:montserrat_20:" +
            user.username +
            ",x_-90,y_-50/v1600707055/Group_1139_1_m81mmr.png",
        };
        // seoConfig = {
        //   title: 'Next.js SEO Plugin',
        //   description: user+"'s Ticket",
        //   openGraph: {
        //     type: 'website',
        //     locale: 'en_IE',
        //     url: "https://" + process.env.NEXT_PUBLIC_HOST + "/myticket/" + user.username,
        //     title: user+"'s Ticket",
        //     description: "BlaBlaConf Ticket",
        //     image:
        //       'https://res.cloudinary.com/dvapezchz/image/upload/b_rgb:220c79/co_rgb:ffffff,l_text:montserrat_40:'+user.name+',x_-30,y_-100/co_rgb:ffffff,l_text:montserrat_20:'+user.username+',x_-90,y_-50/v1600707055/Group_1139_1_m81mmr.png',
        //     site_name: 'blablaconf.com',
        //     imageWidth: 1200,
        //     imageHeight: 1200
        //   },
        //   twitter: {
        //     handle: '@garmeeh',
        //     cardType: 'summary_large_image'
        //   }
        // }
      });

  return {
    props: {
      user,
      seoConfig,
    },
  };
}

export default TicketPage;
