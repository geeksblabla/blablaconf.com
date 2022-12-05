import type { NextPage } from "next";
import GetTicket from "../components/Buttons/GetTicket";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <div>
            <h1 className={styles.title}> Page Not Found ⚠️</h1>
          </div>
          <GetTicket />
          <div className={styles.ticket_container}>
            <div className={styles.ticket_placeholder}></div>
            <img className={styles.ticket} src="/img/ticket.png" alt="Ticket" />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
