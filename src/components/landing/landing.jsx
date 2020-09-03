import React from "react";
import "./landing.module.css";
import styles from "./landing.module.css";
import imgPhone from "../../assets/images/phoneIcon.png";

function ExternalFooter() {
  return (
    <section className="container">
      <a href="tel:1-562-708-7297">
        <img className={styles.PhoneIcon} src={imgPhone} alt="Call Us"/>
      </a>
    </section>
  );
}

export default ExternalFooter;
