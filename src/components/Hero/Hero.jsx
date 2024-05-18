import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gneya</h1>
        <p className={styles.description}>
          I'm a frontend developer using React. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:gneyapatel81202@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <div className={styles.links}>
          <a href="https://drive.google.com/file/d/11wDA_j86IFnFaS22adN0LwMt2JjH1usF/view?usp=sharing" className={styles.link}>
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
