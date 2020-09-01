import React from "react";
import styles from "./externalFooter.module.css";

function ExternalFooter() {
  return (
    <div className={styles.FooterMain}>
      <div className={styles.FooterContents}>
        <div className={styles.FooterText}>
          <p>Sign-Up for weekly updates!</p>
        </div>
        <input
          type="text"
          placeholder="email@email.com"
          className={styles.FooterTextField}
        />
        <button className={styles.FooterButton} type="button">
          <div className={styles.FooterButtonText}>Subscribe</div>
        </button>
        <div className={styles.FooterCopyrightText}>
          <p>Copyright &#169; Divino Ristorante. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default ExternalFooter;
