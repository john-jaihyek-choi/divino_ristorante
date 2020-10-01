import React from "react";
import "./menu.module.css";
import styles from "./menu.module.css";

function Menu() {
  return (
    <section className={`container-fluid p-0 ${styles.menu} d-flex justify-content-center`}>
        <div className={`${styles.viewMenu} text-white text-center`}>
          <u>View Menu</u>
        </div>
    </section>
  );
}

export default Menu;