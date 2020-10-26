import React from "react";
import { Header } from "../Header";
import styles from "./index.module.css";
import { RegistrationForm } from "../RegistrationForm";
import { Container } from "../Container";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Header isHome />
        <div className={styles.main}>
          <h1 className={styles.title}>
            5 Days and 5 Tracks Covering Hottest Technology Trends in{" "}
            <span className={styles.ma}> Darija </span>
          </h1>
          <div className={styles.date}>20-24 October | Online</div>
          <div>
            <p className={styles.stream}>
              You Will find the conference content in our YouTube channel & facebook page
              👇👇👇{" "}
            </p>
            <div className={styles.social}>
              <a
                href="http://facebook.com/geeksblabla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="svg/facebook.svg"
                  className={styles.social_icon}
                  height={38}
                  alt="Geeksblabla Facebook Page "
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                <img
                  className={styles.social_icon}
                  src="svg/youtube.svg"
                  height={50}
                  alt="GeeksBlabla youtube Channel "
                />
              </a>
            </div>
          </div>
          {/* <RegistrationForm /> */}
        </div>
      </Container>
    </div>
  );
};
