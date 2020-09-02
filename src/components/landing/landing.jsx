import React from "react";
import "./landing.module.css";
import styles from "./landing.module.css";
import imgPhone from "../../assets/images/phoneIcon.png";

function ExternalFooter() {
  return (
    <section className="container">
      <div>
        <img className={styles.PhoneIcon} src={imgPhone} alt="Call Us" />
      </div>
    </section>
  );
}

export default ExternalFooter;
