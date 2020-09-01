import React from "react";
import styles from "./externalFooter.module.css";

function ExternalFooter() {
  return (
    <div className={styles.FooterMain}>
      <p>Sign-Up for weekly updates!</p>
      <div>
        <input type="text" />
        <button type="button">Subscribe!</button>
      </div>
    </div>
  );
}

export default ExternalFooter;
