import React from "react";
import Main from "./main/main";
import Contact from "./contact/contact"
import Menu from "./menu/menu";
import Reservation from "./reservation/reservation"
import "./landing.module.css";
import styles from "./landing.module.css";

function Landing() {
  return (
    <section id={styles.landing} className="container-fluid px-0">
      <Main />
      <Contact />
      <Menu />
      <Reservation />
    </section>
  );
}

export default Landing;
