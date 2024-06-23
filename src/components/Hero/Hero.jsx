import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,</h1>
        <p className={styles.description}>
          I’m Shubhendu, a passionate and skilled developer specializing in
          the MERN stack and Java development. Whether it's building dynamic web
          applications or crafting robust backend solutions, I bring a wealth of
          knowledge and a problem-solving mindset to every project.
        </p>
        <a href="mailto:kumarsubho2003@gmail.com, 22cse431.shubhendubhakat@giet.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ic2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
