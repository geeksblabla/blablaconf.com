import { Container } from "../Container";
import styles from "./index.module.css";

export const Footer = () => (
  <div className={styles.footer}>
    <Container>
      <p> This Website made with ❤️ By DevC Team using, sourced on GitHub.</p>
      <p>
        Copyright © {new Date().getFullYear()} Blabla Conf. All rights reserved.
      </p>
    </Container>
  </div>
);
