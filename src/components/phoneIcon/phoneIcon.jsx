import React from "react";
import "./phoneIcon.module.css";
import styles from "./phoneIcon.module.css";
import imgPhone from "../../assets/images/phoneIcon.png";

function PhoneIcon() {
  return (
    <a href="tel:1-562-708-7297">
      <img className={styles.phoneIcon} src={imgPhone} alt="Call Us"/>
    </a>
  );
}

export default PhoneIcon;
