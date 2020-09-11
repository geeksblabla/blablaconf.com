import styles from "../styles/Home.module.css";

const Registration = () => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.title}>
          5 Days and 5 Tracks covering hottest Technology Trends in Darija
        </div>
        <div className={styles.subtitle}>19-23 October | Online</div>
        <div className={styles.inputDiv}>
          <input
            type="email"
            placeholder="Enter email to register free"
            className={styles.input}
          />
          <button className={styles.button}>
            <span className={styles.button_title}>Register Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
