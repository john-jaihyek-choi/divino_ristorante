import React from "react";
import "./main.module.css";
import styles from "./main.module.css";
import logo from "../../../assets/images/logoinv.png"

function Main() {
  return (
    <section className={`container-fluid p-0 ${styles.mainLanding} d-flex justify-content-center`}>
        <img id={styles.logo} src={logo} alt="logo"/>
        <i id={styles.scroll} class="fas fa-chevron-down fa-2x text-white"></i>
    </section>
  );
}

export default Main;
