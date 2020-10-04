import { Container } from "../Container";
import styles from "./index.module.css";

export const Footer = () => (
  <div className={styles.footer}>
    <Container>
      <p>
        Made with ❤️ By DevC Team,{" "}
        <a
          href="https://github.com/DevC-Casa/blablaconf.com"
          target="_blank"
          style={{ color: "#4833b0", fontWeight: "bold" }}
        >
          sourced on GitHub.
        </a>
      </p>
      <p>
        Copyright © {new Date().getFullYear()} Blabla Conf. All rights reserved.
      </p>
    </Container>
  </div>
);
