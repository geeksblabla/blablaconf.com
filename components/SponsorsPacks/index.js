import React from "react";
import styles from "./index.module.css";
import { SponsorButton } from "./SponsorButton";

export const SponsorsPacks = () => {
  return (
    <div className={styles.sponsors}>
      <h1 className={styles.title}>SPONSORSHIP PACKAGES</h1>
      <div className={styles.packs}>
        <div className={styles.pack} style={{ backgroundColor: "#d7e4f4" }}>
          <h1> Diamond </h1>
          <ul>
            <li>
              Identification as Diamond sponsor and the logo will be appear the
              first with the biggest size in all marketing digital support of
              the event
            </li>
            <li>
              Guaranteed 2 conference slot (30 min) [Should be of different
              tracks]
            </li>{" "}
            <li>
              Special Thanks & welcome to the Diamond sponsor in our social
              medias
            </li>
            <li>
              Possibility to provide a marketing poster/video (10s) to show
              during session breaks
            </li>
          </ul>
        </div>
        <div className={styles.pack} style={{ backgroundColor: "#fcf8d5" }}>
          <h1> Gold</h1>
          <ul>
            <li>
              Identification as Gold sponsor in all marketing digital support of
              the event
            </li>
            <li>Guaranteed 1 conference slot (30 min)</li>
            <li>
              Possibility to provide a marketing poster to show during session
              breaks
            </li>
            <li>
              Special Thanks & welcome to the Gold sponsor in our social medias
            </li>
          </ul>
        </div>
        <div className={styles.pack} style={{ backgroundColor: "#d6d1fc" }}>
          <h1> Silver</h1>
          <ul>
            <li>
              Identification as Silver sponsor in all marketing digital support
              of the event
            </li>
            <li>
              Special Thanks & welcome to the Silver sponsor in our social
              medias
            </li>
          </ul>
        </div>
      </div>
      <SponsorButton />
    </div>
  );
};
