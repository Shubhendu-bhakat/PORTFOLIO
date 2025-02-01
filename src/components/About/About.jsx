import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset:120
});
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content} data-aos="fade-left">
        <img
          src={getImageUrl("about/im1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Devloper(MERN stack)</h3>
              <p>
                I'm a Full stack(MERN) developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Application devloper (React Native)</h3>
              <p>
                I'm a React Native devloper with 1 year of experience and expertise on building
                hybrid mobile application(for Both android and IOs)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have strong knowledge of Backend Devlopment.The teachnologies that i use are Express js ,pasport js etc.
                And in database part I know MongoDb and SQL both.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Java Devloper</h3>
              <p>
                I am among the top 40% coders in leetcode in world wide , having strong knowledge
                of data structure and algorithms, feel free to explore my leetcode prfile below.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
