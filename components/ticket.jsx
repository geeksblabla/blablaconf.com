import styles from "../styles/Ticket.module.css";

const Ticket = () => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.title}>
            Claim your spot now!
        </div>
        <div className={styles.subtitle}>Generte your ticket image with your Github profile </div>
        <button className={styles.githubButton}>
            <i class="fab fa-github"></i>
            Generate with  GitHub
        </button>
        

      </div>
    </div>
  );
};

export default Ticket;
