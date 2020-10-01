import React from "react";
import "./reservation.module.css";
import styles from "./reservation.module.css";

function Reservation() {
  return (
    <section className={`container-fluid p-0 ${styles.reservation} d-flex flex-column`}>
        <div className={`d-flex h-50 px-25 align-items-center justify-content-center text-white text-center`}>
          Private Room
        </div>
        <div className={`d-flex h-50 px-25 align-items-center justify-content-center text-white text-center`}>
          Catering
        </div>
    </section>
  );
}

export default Reservation;