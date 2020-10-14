import { Container } from "../Container";
import styles from "./index.module.css";

export const Speakers = ({ speakers }) => {
  return (
    <div className={styles.speakers} id="speakers">
      <span className={styles.pattern} />
      <Container>
        <h1 className={styles.title}> Our Speakers 💪 </h1>
        <div className={styles.list}>
          {speakers?.map((speaker, i) => (
            <Speaker key={`speaker-${i}`} {...speaker} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const Speaker = ({ name, role, avatar }) => (
  <div className={styles.speaker}>
    <div style={{ margin: "auto" }}>
      <img src={avatar} alt={`picture of ${name}`} className={styles.speaker_avatar} />
      <p className={styles.speaker_name}>{name}</p>
      <p className={styles.speaker_role}>{role}</p>
    </div>
  </div>
);
