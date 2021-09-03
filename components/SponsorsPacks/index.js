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
              Welcome to the Diamond sponsor post on BlaBla conf social media
              accounts
            </li>
            <li>Logo on BlaBla Conf homepage (Diamond sponsor section)</li>{" "}
            <li>Logo on event promotional materials</li>{" "}
            <li>
              Guaranteed 2 conference slot (30 min) [Should be of different
              tracks]
            </li>
            <li>
              Possibility to provide a marketing poster/video (10s) to show
              during session breaks
            </li>
          </ul>
          <h1 className={styles.price}> 1000$</h1>
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
          <h1 className={styles.price}> 500$</h1>
        </div>
        <div className={styles.pack} style={{ backgroundColor: "#d6d1fc" }}>
          <h1> Silver</h1>
          <ul>
            <li>
              Welcome to the silver sponsor post across social media platforms
            </li>
            <li>Logo on event promotional materials</li>
            <li>Special Thanks post across social media platforms</li>
          </ul>
          <h1 className={styles.price}> 350$</h1>
        </div>
      </div>
      <SponsorButton />
    </div>
  );
};
