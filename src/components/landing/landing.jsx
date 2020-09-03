import React from "react";
import Main from "./main/main";
import "./landing.module.css";
import styles from "./landing.module.css";

function Landing() {
  return (
    <section id={styles.landing} className="container-fluid px-0">
      <Main />
    </section>
  );
}

export default Landing;
