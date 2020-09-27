import React from "react";
import styles from "./index.module.css";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img src="/crea.svg" className={styles.img} />
        </div>

        <div className={styles.main}>
          <h1 className={styles.title}>About Blabla Conf</h1>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa dui
            sed eu elementum vulputate viverra sapien eget. Aliquet elementum
            ultrices dolor facilisi arcu. Molestie tortor, nec suspendisse
            faucibus sodales nisi, scelerisque mauris. Sit duis dui sed risus,
            etiam etiam pulvinar mi.
          </div>
        </div>
      </div>
    </div>
  );
};
