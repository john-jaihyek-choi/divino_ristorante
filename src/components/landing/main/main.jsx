import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import "./main.module.css";
import styles from "./main.module.css";
import logo from "../../../assets/images/logoinv.png";

function Main() {
  const [ headerHeight, setHeaderHeight ] = useState(null);

  useEffect( () => {
    if(!headerHeight) {
      setHeaderHeight(-document.getElementsByTagName('header')[0].clientHeight);
    }
  }, [headerHeight]);

  return (
    <section className={`container-fluid p-0 ${styles.mainLanding} d-flex justify-content-center`}>
        <img id={styles.logo} src={logo} alt="logo"/>
        <Link to="contact" smooth={true} duration={1000} offset={headerHeight} ><i id={styles.scroll} className="fas fa-chevron-down fa-2x text-white" ></i></Link>
    </section>
  );
}

export default Main;
