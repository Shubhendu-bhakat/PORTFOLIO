import React from "react";
//importing AOS for animation on scrool
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset:120
});

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text} data-aos="fade-right">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}   >
        <li className={styles.link} data-aos="fade-left">
          <img src={getImageUrl("contact/emailIcon.png")} 
          className={styles.conImg}
          alt="Email icon" />
          <a href="mailto:kumarsubho2003@gmail.com">shubhendu-Bhakat/mail</a>
        </li>
        <li className={styles.link}data-aos="fade-left" >
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            className={styles.conImg}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shubhendu-bhakat/">Shubhendu-Bhakat/linkedin</a>
        </li>
        <li className={styles.link} >
          <img src={getImageUrl("contact/githubIcon.png")}
          className={styles.conImg}
          alt="Github icon" />
          <a href="https://github.com/Shubhendu-bhakat">Shubhendu-Bhakat/github</a>
        </li>
        <li className={styles.link} >
          <img src={getImageUrl("contact/leetcode.png")}
          className={styles.conImg}
          alt="LeetCode icon" />
          <a href="https://leetcode.com/u/shubhendu_bhakat/">Shubhendu-Bhakat/leetcode</a>
        </li>
      </ul>
    </footer>
  );
};
