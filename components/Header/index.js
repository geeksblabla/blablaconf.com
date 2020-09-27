import styles from "./index.module.css";
import Link from "next/link";
import Logo from "../../svg/logo";

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      <Link href="/">
        <Logo />
      </Link>
    </div>
    <div className={styles.links}>
      <a
        href="#about"
        className={styles.link}
        onClick={(e) => scrollToSection(e, "#about")}
      >
        About
      </a>
      <a
        href="#speakers"
        className={styles.link}
        onClick={(e) => scrollToSection(e, "#speakers")}
      >
        Speakers
      </a>
      <a
        href="#agenda"
        className={styles.link}
        onClick={(e) => scrollToSection(e, "#agenda")}
      >
        Agenda
      </a>
    </div>
  </div>
);

const scrollToSection = (e, selector) => {
  e.preventDefault();
  document.querySelector(selector).scrollIntoView({
    behavior: "smooth",
  });
};
